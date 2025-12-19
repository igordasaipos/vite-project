import { useState } from 'react'

type MenuItem = {
  id: string
  title: string
  price: number
  description: string
  image?: string
}

type Extra = {
  id: string
  name: string
  price: number
}

type ProductDetailScreenProps = {
  product: MenuItem
  extras?: Extra[]
  onBack: () => void
  onAddToCart: (product: MenuItem, quantity: number, selectedExtras: Array<{ extra: Extra; quantity: number }>) => void
}

const DEFAULT_EXTRAS: Extra[] = [
  { id: 'extra-queijo', name: 'Queijo extra', price: 3.50 },
  { id: 'extra-bacon', name: 'Bacon', price: 4.00 },
  { id: 'extra-cebola-caramelizada', name: 'Cebola caramelizada', price: 2.50 },
  { id: 'extra-ovo', name: 'Ovo', price: 2.00 },
]

const ProductDetailScreen = ({
  product,
  extras = DEFAULT_EXTRAS,
  onBack,
  onAddToCart
}: ProductDetailScreenProps) => {
  const [quantity, setQuantity] = useState(1)
  const [extraQuantities, setExtraQuantities] = useState<Record<string, number>>({})
  const [observation, setObservation] = useState('')
  const [isObservationDialogOpen, setIsObservationDialogOpen] = useState(false)
  const [tempObservation, setTempObservation] = useState('')

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`
  }

  const incrementExtra = (extraId: string) => {
    setExtraQuantities(prev => ({
      ...prev,
      [extraId]: (prev[extraId] || 0) + 1
    }))
  }

  const decrementExtra = (extraId: string) => {
    setExtraQuantities(prev => {
      const current = prev[extraId] || 0
      if (current <= 0) return prev
      return {
        ...prev,
        [extraId]: current - 1
      }
    })
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }

  const calculateTotal = () => {
    const productTotal = product.price * quantity
    const extrasTotal = extras.reduce((sum, extra) => {
      const extraQty = extraQuantities[extra.id] || 0
      return sum + (extra.price * extraQty * quantity)
    }, 0)
    return productTotal + extrasTotal
  }

  const handleAddToCart = () => {
    const selectedExtras = extras
      .filter(extra => (extraQuantities[extra.id] || 0) > 0)
      .map(extra => ({
        extra,
        quantity: extraQuantities[extra.id]
      }))

    onAddToCart(product, quantity, selectedExtras)
  }

  const openObservationDialog = () => {
    setTempObservation(observation)
    setIsObservationDialogOpen(true)
  }

  const closeObservationDialog = () => {
    setIsObservationDialogOpen(false)
    setTempObservation('')
  }

  const saveObservation = () => {
    setObservation(tempObservation)
    setIsObservationDialogOpen(false)
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onBack()
    }
  }

  return (
    <div className="product-detail-screen" onClick={handleOverlayClick}>
      <div className="product-detail-content">
        <section className="extras-panel">
        <div className="extras-card">
          <div className="extras-card-navbar">
            <md-filled-tonal-button className="back-btn" aria-label="Voltar" onClick={onBack}>
              ← Voltar
            </md-filled-tonal-button>
          </div>
          <div className="extras-card-heading">
            <h1>Monte do seu jeito</h1>
            <p>Escolha os adicionais ideais para deixar o pedido perfeito.</p>
          </div>

          {extras.length > 0 ? (
            <div className="extras-section">
              <div className="extras-list">
                {extras.map((extra) => {
                  const extraQty = extraQuantities[extra.id] || 0
                  return (
                    <div key={extra.id} className="extra-item">
                      <div className="extra-info">
                        <strong>{extra.name}</strong>
                        <span className="extra-price">{formatPrice(extra.price)}</span>
                      </div>
                      <div className="extra-controls">
                        <md-filled-tonal-icon-button
                          onClick={() => decrementExtra(extra.id)}
                          disabled={extraQty === 0}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </md-filled-tonal-icon-button>
                        <span className="quantity-display">{extraQty}</span>
                        <md-filled-tonal-icon-button onClick={() => incrementExtra(extra.id)}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </md-filled-tonal-icon-button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <p className="extras-empty">Não há adicionais disponíveis para este item.</p>
          )}
        </div>
      </section>

      <aside className="product-summary-panel">
        <div className="product-summary-card">
          <div className="summary-image">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="product-image-full"
              />
            ) : (
              <div className="product-image-full placeholder" />
            )}
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <span className="product-price">{formatPrice(product.price)}</span>

            {/* Adicionais selecionados */}
            {Object.keys(extraQuantities).some(id => extraQuantities[id] > 0) && (
              <div className="selected-extras">
                <div className="extras-tags">
                  {extras
                    .filter(extra => (extraQuantities[extra.id] || 0) > 0)
                    .map(extra => (
                      <span key={extra.id} className="extra-tag">
                        {extraQuantities[extra.id]}x {extra.name}
                      </span>
                    ))}
                </div>
              </div>
            )}

            {/* Observação */}
            <div className="observation-section">
              <button
                type="button"
                className="observation-button"
                onClick={openObservationDialog}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span>{observation || 'Adicionar observação'}</span>
              </button>
            </div>
          </div>

          <div className="summary-actions">
            <div className="quantity-controls">
              <span className="quantity-label">Quantidade</span>
              <div className="controls">
                <md-filled-tonal-icon-button
                  onClick={decrementQuantity}
                  disabled={quantity === 1}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </md-filled-tonal-icon-button>
                <span className="quantity-display">{quantity}</span>
                <md-filled-tonal-icon-button onClick={incrementQuantity}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </md-filled-tonal-icon-button>
              </div>
            </div>
            <md-filled-button className="add-to-cart-btn" onClick={handleAddToCart}>
              Adicionar {formatPrice(calculateTotal())}
            </md-filled-button>
          </div>
        </div>
      </aside>
      </div>

      {/* Dialog de observação */}
      {isObservationDialogOpen && (
        <div className="observation-dialog-overlay" onClick={closeObservationDialog}>
          <div className="observation-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="observation-dialog-header">
              <h2>Observação</h2>
              <button
                type="button"
                className="dialog-close-btn"
                onClick={closeObservationDialog}
                aria-label="Fechar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="observation-dialog-content">
              <p className="observation-hint">Ex: Tirar alface, sem cebola, ponto da carne ao ponto</p>
              <textarea
                className="observation-textarea"
                placeholder="Digite sua observação..."
                value={tempObservation}
                onChange={(e) => setTempObservation(e.target.value)}
                rows={4}
                autoFocus
              />
            </div>
            <div className="observation-dialog-actions">
              <md-filled-tonal-button onClick={closeObservationDialog}>
                Cancelar
              </md-filled-tonal-button>
              <md-filled-button onClick={saveObservation}>
                Salvar
              </md-filled-button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetailScreen
