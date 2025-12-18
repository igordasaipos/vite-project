import { useNavigate, useLocation } from 'react-router-dom'
import ConfirmationScreen from '../components/ConfirmationScreen'

const ConfirmationPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { orderNumber = 42, customerName = 'Cliente' } = (location.state as any) || {}

  const handleTimeout = () => {
    navigate('/', { replace: true })
  }

  const handleSendWhatsApp = (phone: string) => {
    console.log('Sending WhatsApp to:', phone, 'Order:', orderNumber)
    // Here you would integrate with WhatsApp API or backend
  }

  return (
    <ConfirmationScreen
      orderNumber={orderNumber}
      customerName={customerName}
      onTimeout={handleTimeout}
      onSendWhatsApp={handleSendWhatsApp}
      countdownSeconds={15}
    />
  )
}

export default ConfirmationPage
