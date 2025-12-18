import { useEffect, useMemo, useState } from 'react'

type CartItemOption = {
  id: string
  label: string
  price?: number
}

type CartItem = {
  id: string
  name: string
  quantity: number
  price: number
  image?: string
  options?: CartItemOption[]
}

type CartReviewScreenProps = {
  items?: CartItem[]
  onBack?: () => void
  onAddMore?: () => void
  onCheckout?: (items: CartItem[], subtotal: number) => void
  onRemoveItem?: (itemId: string) => void
}

const DEFAULT_CART_ITEMS: CartItem[] = [
  {
    id: 'combo-classico',
    name: 'Combo Clássico',
    price: 39.9,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop',
    options: [
      { id: 'extra-queijo', label: 'Queijo extra', price: 3 },
      { id: 'sem-cebola', label: 'Sem cebola' },
    ],
  },
  {
    id: 'batata-grande',
    name: 'Batata Frita Grande',
    price: 18.5,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop',
    options: [{ id: 'molho-casa', label: 'Molho da casa', price: 4.5 }],
  },
]

const formatPrice = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`

const CartReviewScreen = ({
  items = DEFAULT_CART_ITEMS,
  onBack,
  onAddMore,
  onCheckout,
  onRemoveItem,
}: CartReviewScreenProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(items)

  useEffect(() => {
    setCartItems(items)
  }, [items])

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    onRemoveItem?.(itemId)
  }

  const handleAddMore = () => {
    onAddMore?.()
  }

  const handleCheckout = () => {
    if (!cartItems.length) return
    onCheckout?.(cartItems, subtotal)
  }

  return (
    <div className="cart-review-screen">
      <header className="cart-review-header">
        <md-filled-tonal-button
          className="back-btn"
          aria-label="Voltar"
          onClick={onBack}
        >
          ← Voltar
        </md-filled-tonal-button>

        <div className="cart-review-title">
          <span className="eyebrow">Resumo</span>
          <h1>Seu pedido</h1>
          <p>{cartItems.length} itens selecionados</p>
        </div>
      </header>

      <section className="cart-review-content">
        {cartItems.length === 0 ? (
          <div className="cart-review-empty">
            <strong>Seu carrinho está vazio</strong>
            <span>Adicione itens ao pedido para continuar.</span>
          </div>
        ) : (
          <md-list aria-label="Itens do carrinho" className="cart-review-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-review-row">
                <div className="cart-item-thumb">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="placeholder" />
                  )}
                  <span className="cart-item-quantity">{item.quantity}x</span>
                </div>

                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <div>
                      <strong>{item.name}</strong>
                      <span className="cart-item-price">
                        {formatPrice(item.price)} cada
                      </span>
                    </div>
                    <span className="cart-item-total">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  {item.options && item.options.length > 0 && (
                    <ul className="cart-item-options">
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

                  <button
                    type="button"
                    className="cart-item-remove"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remover item
                  </button>
                </div>
              </div>
            ))}
          </md-list>
        )}
      </section>

      <div className="cart-review-actions">
        <md-outlined-button
          className="cart-review-add-more"
          onClick={handleAddMore}
          disabled={!onAddMore}
        >
          Adicionar mais itens
        </md-outlined-button>

        <div className="cart-review-footer">
          <div className="subtotal-info">
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <md-filled-button
            className="cart-review-checkout"
            onClick={handleCheckout}
            disabled={!cartItems.length}
          >
            Finalizar pedido
          </md-filled-button>
        </div>
      </div>
    </div>
  )
}

export type CartReviewItem = CartItem

export default CartReviewScreen
