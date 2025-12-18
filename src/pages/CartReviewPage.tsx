import { useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import CartReviewScreen, { type CartReviewItem } from '../components/CartReviewScreen'

const CartReviewPage = () => {
  const navigate = useNavigate()
  const { cart, removeFromCart, getCartTotal } = useCart()

  const cartReviewItems: CartReviewItem[] = cart.map((item) => ({
    id: item.lineId,
    name: item.title,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
    options: item.extras?.map((extra) => ({
      id: `${item.lineId}-${extra.id}`,
      label: `${extra.quantity}x ${extra.name}`,
      price: extra.price * extra.quantity,
    })),
  }))

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartReviewScreen
      items={cartReviewItems}
      onBack={() => navigate('/menu')}
      onAddMore={() => navigate('/menu')}
      onCheckout={handleCheckout}
      onRemoveItem={removeFromCart}
    />
  )
}

export default CartReviewPage
