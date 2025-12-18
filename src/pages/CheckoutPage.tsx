import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import CheckoutScreen, { type PaymentMethod } from '../components/CheckoutScreen'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const { cart, getCartTotal, clearCart } = useCart()
  const [orderNumber] = useState(() => Math.floor(Math.random() * 100) + 1)

  const cartReviewItems = cart.map((item) => ({
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

  const handleConfirm = (customerName: string, paymentMethod: PaymentMethod) => {
    console.log('Order confirmed:', { customerName, paymentMethod, cart, total: getCartTotal() })

    navigate('/confirmation', {
      state: {
        orderNumber,
        customerName,
        paymentMethod
      }
    })

    clearCart()
  }

  return (
    <CheckoutScreen
      items={cartReviewItems}
      subtotal={getCartTotal()}
      onBack={() => navigate('/cart')}
      onConfirm={handleConfirm}
    />
  )
}

export default CheckoutPage
