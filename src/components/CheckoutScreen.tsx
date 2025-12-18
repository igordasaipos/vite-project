import { useState } from 'react'

type CartItem = {
  id: string
  name: string
  quantity: number
  price: number
  image?: string
  options?: Array<{ id: string; label: string; price?: number }>
}

type PaymentMethod = 'card' | 'pix' | 'cash'

type CheckoutScreenProps = {
  items: CartItem[]
  subtotal: number
  onBack?: () => void
  onConfirm?: (customerName: string, paymentMethod: PaymentMethod) => void
}

const formatPrice = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`

const CheckoutScreen = ({
  items,
  subtotal,
  onBack,
  onConfirm,
}: CheckoutScreenProps) => {
  const [customerName, setCustomerName] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [orderSummaryExpanded, setOrderSummaryExpanded] = useState(false)

  const handleConfirm = () => {
    if (!customerName.trim() || !paymentMethod) return
    onConfirm?.(customerName, paymentMethod)
  }

  const isFormValid = customerName.trim().length > 0 && paymentMethod !== null

  return (
    <div className="checkout-screen">
      <header className="checkout-header">
        <md-filled-tonal-button
          className="back-btn"
          aria-label="Voltar"
          onClick={onBack}
        >
          ← Voltar
        </md-filled-tonal-button>

        <div className="checkout-title">
          <h1>Finalizar pedido</h1>
          <p>Informe seus dados para confirmar</p>
        </div>
      </header>

      <section className="checkout-content">
        <div className="checkout-form">
          <div className="checkout-field">
            <label htmlFor="customer-name">Seu nome</label>
            <md-filled-text-field
              id="customer-name"
              type="text"
              placeholder="Digite seu nome"
              value={customerName}
              onInput={(e: React.FormEvent<HTMLElement>) => {
                const target = e.target as HTMLInputElement
                setCustomerName(target.value)
              }}
            />
          </div>

          <div className="checkout-payment-section">
            <h2>Forma de pagamento</h2>
            <div className="payment-options">
              <md-elevated-card
                className={`payment-card ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="payment-icon">💳</div>
                <div className="payment-label">Cartão</div>
              </md-elevated-card>

              <md-elevated-card
                className={`payment-card ${paymentMethod === 'pix' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('pix')}
              >
                <div className="payment-icon">📱</div>
                <div className="payment-label">Pix</div>
              </md-elevated-card>

              <md-elevated-card
                className={`payment-card ${paymentMethod === 'cash' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('cash')}
              >
                <div className="payment-icon">💵</div>
                <div className="payment-label">Dinheiro</div>
              </md-elevated-card>
            </div>
          </div>

          <div className="checkout-summary-section">
            <button
              type="button"
              className="summary-toggle"
              onClick={() => setOrderSummaryExpanded(!orderSummaryExpanded)}
            >
              <span>Resumo do pedido ({items.length} itens)</span>
              <span className="toggle-icon">
                {orderSummaryExpanded ? '▲' : '▼'}
              </span>
            </button>

            {orderSummaryExpanded && (
              <div className="summary-content">
                {items.map((item) => (
                  <div key={item.id} className="summary-item">
                    <div className="summary-item-header">
                      <span>
                        {item.quantity}x {item.name}
                      </span>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                    {item.options && item.options.length > 0 && (
                      <ul className="summary-item-options">
                        {item.options.map((option) => (
                          <li key={option.id}>
                            {option.label}
                            {typeof option.price === 'number' && (
                              <span>{formatPrice(option.price)}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <div className="summary-total">
                  <strong>Total</strong>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="checkout-footer">
        <div className="checkout-total">
          <span>Total</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <md-filled-button
          className="checkout-confirm"
          onClick={handleConfirm}
          disabled={!isFormValid}
        >
          Confirmar pedido
        </md-filled-button>
      </div>
    </div>
  )
}

export type { PaymentMethod }
export default CheckoutScreen
