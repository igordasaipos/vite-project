import { createContext, useContext, useState, ReactNode } from 'react'

export type Extra = {
  id: string
  name: string
  price: number
}

export type CartExtraSelection = {
  id: string
  name: string
  price: number
  quantity: number
}

export type MenuItem = {
  id: string
  title: string
  price: number
  description: string
  image?: string
}

export type CartItem = MenuItem & {
  lineId: string
  quantity: number
  extras?: CartExtraSelection[]
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (
    product: MenuItem,
    quantity: number,
    selectedExtras?: Array<{ extra: Extra; quantity: number }>
  ) => void
  removeFromCart: (lineId: string) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

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

  const addToCart = (
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

  const removeFromCart = (lineId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.lineId !== lineId))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((sum, item) => {
      const extrasTotal = item.extras?.reduce(
        (extraSum, extra) => extraSum + extra.price * extra.quantity,
        0
      ) || 0
      return sum + (item.price + extrasTotal) * item.quantity
    }, 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
