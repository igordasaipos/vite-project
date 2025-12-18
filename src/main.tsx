import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@material/web/button/filled-button.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/labs/card/elevated-card.js'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
