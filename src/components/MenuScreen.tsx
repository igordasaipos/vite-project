import { useState, useRef, useEffect } from 'react'

type MenuItem = {
  id: string
  title: string
  price: number
  description: string
  image?: string
}

type MenuSection = {
  id: string
  title: string
  items: MenuItem[]
}

type CartItem = MenuItem & {
  quantity: number
}

const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'lanches',
    title: 'Lanches',
    items: [
      {
        id: 'hamburger-classico',
        title: 'Hambúrguer Clássico',
        price: 25.90,
        description: 'Pão brioche, carne angus 180g, queijo cheddar, alface, tomate e maionese especial.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop'
      },
      {
        id: 'cheeseburger-duplo',
        title: 'Cheeseburger Duplo',
        price: 32.90,
        description: 'Dois hambúrgueres de 150g, dobro de queijo e bacon crocante.',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop'
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      {
        id: 'coca-cola',
        title: 'Coca-Cola',
        price: 8.90,
        description: '350ml gelado.',
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop'
      },
      {
        id: 'suco-laranja',
        title: 'Suco de Laranja',
        price: 12.90,
        description: 'Natural 500ml.',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop'
      },
    ],
  },
  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos',
    items: [
      {
        id: 'batata-frita',
        title: 'Batata Frita',
        price: 15.90,
        description: 'Porção grande com molho especial.',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop'
      },
      {
        id: 'onion-rings',
        title: 'Onion Rings',
        price: 18.90,
        description: 'Anéis de cebola empanados.',
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=400&fit=crop'
      },
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas',
    items: [
      {
        id: 'milkshake',
        title: 'Milkshake',
        price: 16.90,
        description: 'Cremoso de chocolate, morango ou baunilha.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop'
      },
      {
        id: 'brownie',
        title: 'Brownie',
        price: 14.90,
        description: 'Com sorvete de baunilha.',
        image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop'
      },
    ],
  },
]

const MenuScreen = () => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [activeTab, setActiveTab] = useState<string>('lanches')
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const menuPanelsRef = useRef<HTMLDivElement | null>(null)

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`
  }

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId]
    if (section && menuPanelsRef.current) {
      const offset = section.offsetTop - menuPanelsRef.current.offsetTop
      menuPanelsRef.current.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
      setActiveTab(sectionId)
    }
  }

  useEffect(() => {
    const menuPanels = menuPanelsRef.current
    if (!menuPanels) return

    const handleScroll = () => {
      const scrollPosition = menuPanels.scrollTop
      const viewportMiddle = scrollPosition + menuPanels.clientHeight / 3

      let currentSection = MENU_SECTIONS[0].id

      for (const section of MENU_SECTIONS) {
        const element = sectionRefs.current[section.id]
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.offsetHeight

          if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
            currentSection = section.id
            break
          }
        }
      }

      setActiveTab(currentSection)
    }

    handleScroll()
    menuPanels.addEventListener('scroll', handleScroll)
    return () => menuPanels.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="menu-screen">
      <div className="menu-main">
        <div className="menu-body">
          <div className="menu-tabs">
            {MENU_SECTIONS.map((section) => (
              <button
                key={section.id}
                className={`tab ${activeTab === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="menu-panels" ref={menuPanelsRef}>
            {MENU_SECTIONS.map((section) => (
              <section
                key={section.id}
                className="menu-section"
                ref={(el) => {
                  sectionRefs.current[section.id] = el
                }}
              >
                <h2>{section.title}</h2>
                <div className="menu-grid">
                  {section.items.map((item) => (
                    <md-elevated-card
                      key={item.id}
                      className="menu-card"
                      onClick={() => addToCart(item)}
                    >
                      <div className="menu-info">
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                        <span className="price">{formatPrice(item.price)}</span>
                      </div>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="menu-thumb"
                        />
                      )}
                      {!item.image && <div className="menu-thumb" />}
                    </md-elevated-card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <aside className="cart-panel">
        <div className="cart-header">
          <div>
            <h2>Seu pedido</h2>
            <span className="item-count">{cart.length} itens</span>
          </div>
          {cart.length > 0 && (
            <button
              className="clear-cart-btn"
              onClick={clearCart}
              title="Limpar carrinho"
            >
              Limpar
            </button>
          )}
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path
                    d="M40 10C51.0457 10 60 18.9543 60 30V35H65C67.7614 35 70 37.2386 70 40V65C70 67.7614 67.7614 70 65 70H15C12.2386 70 10 67.7614 10 65V40C10 37.2386 12.2386 35 15 35H20V30C20 18.9543 28.9543 10 40 10ZM40 15C31.7157 15 25 21.7157 25 30V35H55V30C55 21.7157 48.2843 15 40 15Z"
                    fill="#D0C5E3"
                  />
                </svg>
              </div>
              <p className="empty-title">Seu carrinho está vazio</p>
              <p className="empty-subtitle">Adicione itens do cardápio</p>
            </div>
          ) : (
            cart.map((item) => (
              <md-elevated-card key={item.id} className="cart-item">
                <button
                  className="remove-item-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFromCart(item.id)
                  }}
                  title="Remover item"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M8 2C7.44772 2 7 2.44772 7 3V4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6H5V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V6H16C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H13V3C13 2.44772 12.5523 2 12 2H8ZM9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8V14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V8ZM12 7C12.5523 7 13 7.44772 13 8V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V8C11 7.44772 11.4477 7 12 7Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div className="cart-item-info">
                  <strong>{item.quantity}x {item.title}</strong>
                  <p>{item.description}</p>
                  <span className="price">{formatPrice(item.price * item.quantity)}</span>
                </div>
              </md-elevated-card>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="line">
            <span>Total</span>
            <strong className="total-price">{formatPrice(getTotal())}</strong>
          </div>
          <md-filled-button className="confirm-btn" disabled={cart.length === 0}>
            Continuar para pagamento
          </md-filled-button>
        </div>
      </aside>
    </div>
  )
}

export default MenuScreen
