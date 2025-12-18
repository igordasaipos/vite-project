import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const INACTIVITY_TIMEOUT = 60000 // 60 seconds

export const useInactivityTimer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Don't set timeout on waiting screen or confirmation screen
    if (location.pathname === '/' || location.pathname === '/confirmation') {
      return
    }

    timeoutRef.current = setTimeout(() => {
      navigate('/', { replace: true })
    }, INACTIVITY_TIMEOUT)
  }

  useEffect(() => {
    // Events that indicate user activity
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
      'click',
    ]

    // Reset timer on any user activity
    events.forEach((event) => {
      document.addEventListener(event, resetTimer)
    })

    // Initialize timer
    resetTimer()

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer)
      })
    }
  }, [location.pathname])
}
