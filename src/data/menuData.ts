export type MenuItem = {
  id: string
  title: string
  price: number
  description: string
  image?: string
}

export type MenuSection = {
  id: string
  title: string
  items: MenuItem[]
}

export type Extra = {
  id: string
  name: string
  price: number
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'lanches',
    title: 'Lanches',
    items: [
      {
        id: 'hamburger-classico',
        title: 'Hambúrguer Clássico',
        price: 25.9,
        description:
          'Pão brioche, carne angus 180g, queijo cheddar e maionese especial.',
        image:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
      },
      {
        id: 'cheeseburger-duplo',
        title: 'Cheeseburger Duplo',
        price: 32.9,
        description: 'Dois hambúrgueres de 150g, dobro de queijo e bacon crocante.',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop',
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
        price: 8.9,
        description: '350ml gelado.',
        image:
          'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop',
      },
      {
        id: 'suco-laranja',
        title: 'Suco de Laranja',
        price: 12.9,
        description: 'Natural 500ml.',
        image:
          'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
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
        price: 15.9,
        description: 'Porção grande com molho especial.',
        image:
          'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop',
      },
      {
        id: 'onion-rings',
        title: 'Onion Rings',
        price: 18.9,
        description: 'Anéis de cebola empanados.',
        image:
          'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=400&fit=crop',
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
        price: 16.9,
        description: 'Cremoso de chocolate, morango ou baunilha.',
        image:
          'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop',
      },
      {
        id: 'brownie',
        title: 'Brownie',
        price: 14.9,
        description: 'Com sorvete de baunilha.',
        image:
          'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop',
      },
    ],
  },
]

export const PRODUCT_EXTRAS: Record<string, Extra[]> = {
  'hamburger-classico': [
    { id: 'extra-queijo', name: 'Queijo extra', price: 3 },
    { id: 'extra-bacon', name: 'Bacon', price: 5 },
    { id: 'sem-cebola', name: 'Sem cebola', price: 0 },
  ],
  'cheeseburger-duplo': [
    { id: 'extra-queijo', name: 'Queijo extra', price: 3 },
    { id: 'extra-bacon', name: 'Bacon', price: 5 },
    { id: 'molho-picante', name: 'Molho picante', price: 2 },
  ],
  'batata-frita': [
    { id: 'molho-cheddar', name: 'Molho cheddar', price: 4 },
    { id: 'bacon-bits', name: 'Bacon em cubos', price: 6 },
  ],
}

export const getProductById = (id: string): MenuItem | undefined => {
  for (const section of MENU_SECTIONS) {
    const item = section.items.find((item) => item.id === id)
    if (item) return item
  }
  return undefined
}

export const getProductExtras = (productId: string): Extra[] => {
  return PRODUCT_EXTRAS[productId] || []
}
