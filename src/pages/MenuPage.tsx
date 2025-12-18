import { useNavigate } from 'react-router-dom'
import { useCart, type MenuItem } from '../contexts/CartContext'
import MenuScreen from '../components/MenuScreen'

const MenuPage = () => {
  const navigate = useNavigate()
  const { cart, addToCart, removeFromCart, clearCart } = useCart()

  const handleProductClick = (item: MenuItem) => {
    navigate(`/product/${item.id}`)
  }

  const handleQuickAdd = (item: MenuItem) => {
    addToCart(item, 1)
  }

  const handleCheckout = () => {
    navigate('/cart')
  }

  return (
    <MenuScreen
      onProductClick={handleProductClick}
      cartItems={cart}
      onQuickAdd={handleQuickAdd}
      onRemoveFromCart={removeFromCart}
      onClearCart={clearCart}
      onCheckoutCart={handleCheckout}
    />
  )
}

export default MenuPage
