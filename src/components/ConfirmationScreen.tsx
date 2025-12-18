import { useEffect, useState } from 'react'

type ConfirmationScreenProps = {
  orderNumber: number
  customerName: string
  onTimeout?: () => void
  onSendWhatsApp?: (phone: string) => void
  countdownSeconds?: number
}

const ConfirmationScreen = ({
  orderNumber,
  customerName,
  onTimeout,
  onSendWhatsApp,
  countdownSeconds = 15,
}: ConfirmationScreenProps) => {
  const [timeRemaining, setTimeRemaining] = useState(countdownSeconds)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showWhatsAppSuccess, setShowWhatsAppSuccess] = useState(false)

  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimeout?.()
      return
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeRemaining, onTimeout])

  const handleSendWhatsApp = () => {
    if (!phoneNumber.trim()) return
    onSendWhatsApp?.(phoneNumber)
    setShowWhatsAppSuccess(true)
    setTimeout(() => setShowWhatsAppSuccess(false), 3000)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
    return value
  }

  const progress = (timeRemaining / countdownSeconds) * 100

  return (
    <div className="confirmation-screen">
      <div className="confirmation-content">
        <div className="success-icon-wrapper">
          <svg className="success-icon" viewBox="0 0 100 100">
            <circle
              className="success-circle"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="4"
            />
            <path
              className="success-check"
              d="M 30 50 L 45 65 L 70 35"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="confirmation-header">
          <h1>Pedido confirmado!</h1>
          <p className="customer-greeting">Obrigado, {customerName}</p>
        </div>

        <div className="order-number-section">
          <span className="order-label">Sua ficha</span>
          <div className="order-number">#{orderNumber}</div>
        </div>

        <div className="wait-message">
          <p>Aguarde ser chamado</p>
          <span>Fique atento ao painel</span>
        </div>

        <div className="countdown-section">
          <div className="countdown-circle">
            <svg className="countdown-svg" viewBox="0 0 120 120">
              <circle
                className="countdown-bg"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="rgba(95, 75, 199, 0.1)"
                strokeWidth="6"
              />
              <circle
                className="countdown-progress"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#5f4bc7"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={339.292}
                strokeDashoffset={(339.292 * (100 - progress)) / 100}
                transform="rotate(-90 60 60)"
              />
              <text
                x="60"
                y="60"
                textAnchor="middle"
                dominantBaseline="middle"
                className="countdown-text"
              >
                {timeRemaining}s
              </text>
            </svg>
          </div>
          <span className="countdown-label">Nova tela em breve</span>
        </div>

        <div className="whatsapp-section">
          <h2>Receber comprovante</h2>
          <p>Enviaremos os detalhes do seu pedido</p>

          <div className="whatsapp-input-group">
            <md-filled-text-field
              id="phone-number"
              type="tel"
              placeholder="(00) 00000-0000"
              value={phoneNumber}
              onInput={(e: React.FormEvent<HTMLElement>) => {
                const target = e.target as HTMLInputElement
                setPhoneNumber(formatPhone(target.value))
              }}
              maxLength={15}
            >
              <div slot="leading-icon">📱</div>
            </md-filled-text-field>

            <md-filled-tonal-button
              className="send-whatsapp-btn"
              onClick={handleSendWhatsApp}
              disabled={phoneNumber.replace(/\D/g, '').length < 11}
            >
              Enviar
            </md-filled-tonal-button>
          </div>

          {showWhatsAppSuccess && (
            <div className="whatsapp-success">
              ✓ Comprovante enviado com sucesso!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConfirmationScreen
