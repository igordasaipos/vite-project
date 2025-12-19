import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { CartProvider } from './contexts/CartContext'
import { useInactivityTimer } from './hooks/useInactivityTimer'
import WaitingScreen from './components/WaitingScreen'
import SelectionScreen from './components/SelectionScreen'
import MenuPage from './pages/MenuPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartReviewPage from './pages/CartReviewPage'
import CheckoutPage from './pages/CheckoutPage'
import ConfirmationPage from './pages/ConfirmationPage'
import { StyleGuide } from './components/StyleGuide'

function AppRoutes() {
  useInactivityTimer()

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<WaitingScreen />} />
        <Route path="/selection" element={<SelectionScreen />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartReviewPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
