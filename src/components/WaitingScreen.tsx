import { useNavigate } from 'react-router-dom'

const WaitingScreen = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/selection')
  }

  return (
    <div className="waiting-screen">
      <div className="waiting-container">
        <div className="waiting-header">
          <div className="brand-logo">
            <div className="logo-circle">
              <img
                src="https://yt3.googleusercontent.com/kyi6MW-CKwjSAdECekGuWe8cogAtlszb6WWyGZ12VobhbNSNRMy06aVS8Xu0NIFt2FzAOqsV2us=s900-c-k-c0x00ffffff-no-rj"
                alt="Saipos Logo"
                className="logo-image"
              />
            </div>
            <h2 className="brand-name">Saipos Totem</h2>
          </div>
        </div>

        <div className="waiting-content">
          <h1 className="waiting-title">
            Peça e<br />
            pague aqui
          </h1>
        </div>

        <div className="waiting-footer">
          <md-filled-button
            className="start-button"
            onClick={handleStart}
            aria-label="Iniciar pedido"
          >
            Toque para começar
          </md-filled-button>
        </div>
      </div>
    </div>
  )
}

export default WaitingScreen
