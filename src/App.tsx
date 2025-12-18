import { useState } from 'react'
import './App.css'
import WaitingScreen from './components/WaitingScreen'
import SelectionScreen, { type Mode } from './components/SelectionScreen'
import MenuScreen from './components/MenuScreen'
import ProductDetailScreen from './components/ProductDetailScreen'
import CartReviewScreen, { type CartReviewItem } from './components/CartReviewScreen'

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

type CartExtraSelection = {
  id: string
  name: string
  price: number
  quantity: number
}

type CartItem = MenuItem & {
  lineId: string
  quantity: number
  extras?: CartExtraSelection[]
}

type Stage = 'waiting' | 'selection' | 'menu' | 'product-detail' | 'cart-review'

function App() {
  const [stage, setStage] = useState<Stage>('waiting')
  const [mode, setMode] = useState<Mode | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])

  const handleStart = () => setStage('selection')

  const handleModeSelection = (choice: Mode) => {
    setMode(choice)
    setStage('menu')
  }

  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product)
    setStage('product-detail')
  }

  const getExtrasSignature = (extras?: CartExtraSelection[]) => {
    if (!extras || extras.length === 0) return 'no-extras'
    return extras
      .map((extra) => `${extra.id}:${extra.quantity}`)
      .sort()
      .join('|')
  }

  const generateLineId = () => {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      return crypto.randomUUID()
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`
  }

  const addProductToCart = (
    product: MenuItem,
    quantity: number,
    selectedExtras: Array<{ extra: Extra; quantity: number }> = []
  ) => {
    setCart((prevCart) => {
      const normalizedExtras = selectedExtras
        .filter(({ quantity }) => quantity > 0)
        .map(({ extra, quantity }) => ({
          id: extra.id,
          name: extra.name,
          price: extra.price,
          quantity,
        }))

      const signature = getExtrasSignature(normalizedExtras)

      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          getExtrasSignature(item.extras) === signature
      )

      if (existingIndex !== -1) {
        const updated = [...prevCart]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }

      return [
        ...prevCart,
        {
          ...product,
          lineId: generateLineId(),
          quantity,
          extras: normalizedExtras.length ? normalizedExtras : undefined,
        },
      ]
    })
  }

  const handleQuickAdd = (product: MenuItem) => {
    addProductToCart(product, 1)
  }

  const handleAddToCart = (
    product: MenuItem,
    quantity: number,
    selectedExtras: Array<{ extra: Extra; quantity: number }>
  ) => {
    addProductToCart(product, quantity, selectedExtras)
    setStage('menu')
  }

  const handleRemoveFromCart = (lineId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.lineId !== lineId))
  }

  const handleClearCart = () => setCart([])

  const handleOpenCartReview = () => setStage('cart-review')

  const handleCartReviewCheckout = (
    items: CartReviewItem[],
    subtotal: number
  ) => {
    console.log('Checkout', { items, subtotal })
  }

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

  return (
    <div className="app-shell">
      {stage === 'waiting' && <WaitingScreen onStart={handleStart} />}
      {stage === 'selection' && (
        <SelectionScreen
          onBack={() => setStage('waiting')}
          onSelect={handleModeSelection}
        />
      )}
      {stage === 'menu' && mode && (
        <MenuScreen
          onProductClick={handleProductClick}
          cartItems={cart}
          onQuickAdd={handleQuickAdd}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
          onCheckoutCart={handleOpenCartReview}
        />
      )}
      {stage === 'product-detail' && selectedProduct && (
        <ProductDetailScreen
          product={selectedProduct}
          onBack={() => setStage('menu')}
          onAddToCart={handleAddToCart}
        />
      )}
      {stage === 'cart-review' && (
        <CartReviewScreen
          items={cartReviewItems}
          onBack={() => setStage('menu')}
          onAddMore={() => setStage('menu')}
          onCheckout={handleCartReviewCheckout}
          onRemoveItem={handleRemoveFromCart}
        />
      )}
    </div>
  )
}

export default App
