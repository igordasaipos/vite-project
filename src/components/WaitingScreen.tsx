import { useNavigate } from 'react-router-dom'

const WaitingScreen = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/selection')
  }

  return (
    <div className="waiting-screen" onClick={handleStart}>
      <img
        className="hero-photo"
        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80"
        alt="Hambúrguer artesanal com batatas fritas"
        loading="lazy"
      />

      <div className="cta">
        <md-filled-button className="start-button" aria-label="Iniciar pedido">
          Toque para iniciar
        </md-filled-button>
      </div>
    </div>
  )
}

export default WaitingScreen
