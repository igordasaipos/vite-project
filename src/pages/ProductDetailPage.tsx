import { useNavigate, useParams } from 'react-router-dom'
import { useCart, type Extra } from '../contexts/CartContext'
import { getProductById } from '../data/menuData'
import ProductDetailScreen from '../components/ProductDetailScreen'

const ProductDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCart()

  const product = id ? getProductById(id) : undefined

  if (!product) {
    navigate('/menu', { replace: true })
    return null
  }

  const handleAddToCart = (
    product: any,
    quantity: number,
    selectedExtras: Array<{ extra: Extra; quantity: number }>
  ) => {
    addToCart(product, quantity, selectedExtras)
    navigate('/menu')
  }

  return (
    <ProductDetailScreen
      product={product}
      onBack={() => navigate('/menu')}
      onAddToCart={handleAddToCart}
    />
  )
}

export default ProductDetailPage
