export type Mode = 'dineIn' | 'takeAway'

type SelectionScreenProps = {
  onBack: () => void
  onSelect: (mode: Mode) => void
}

const DineInIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <path
      d="M10 30C10 27.7909 11.7909 26 14 26H66C68.2091 26 70 27.7909 70 30V34C70 36.2091 68.2091 38 66 38H14C11.7909 38 10 36.2091 10 34V30Z"
      fill="currentColor"
      opacity="0.3"
    />
    <path
      d="M16 38V60C16 62.2091 17.7909 64 20 64C22.2091 64 24 62.2091 24 60V38H16Z"
      fill="currentColor"
    />
    <path
      d="M56 38V60C56 62.2091 57.7909 64 60 64C62.2091 64 64 62.2091 64 60V38H56Z"
      fill="currentColor"
    />
    <circle cx="40" cy="20" r="8" fill="currentColor" opacity="0.5"/>
  </svg>
)

const TakeAwayIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <path
      d="M20 22C20 19.7909 21.7909 18 24 18H56C58.2091 18 60 19.7909 60 22V26H20V22Z"
      fill="currentColor"
      opacity="0.5"
    />
    <path
      d="M18 26H62L58 62C57.5 65.5 54.5 68 51 68H29C25.5 68 22.5 65.5 22 62L18 26Z"
      fill="currentColor"
      opacity="0.3"
    />
    <path
      d="M30 32C30 30.8954 30.8954 30 32 30C33.1046 30 34 30.8954 34 32V56C34 57.1046 33.1046 58 32 58C30.8954 58 30 57.1046 30 56V32Z"
      fill="currentColor"
    />
    <path
      d="M46 32C46 30.8954 46.8954 30 48 30C49.1046 30 50 30.8954 50 32V56C50 57.1046 49.1046 58 48 58C46.8954 58 46 57.1046 46 56V32Z"
      fill="currentColor"
    />
  </svg>
)

const SelectionScreen = ({ onBack, onSelect }: SelectionScreenProps) => {
  return (
    <div className="selection-screen">
      <header className="selection-header">
        <md-filled-tonal-button className="back-btn" aria-label="Voltar" onClick={onBack}>
          ← Voltar
        </md-filled-tonal-button>
      </header>

      <main className="selection-body">
        <div className="title-block">
          <h1>Onde você vai comer?</h1>
        </div>

        <div className="card-grid">
          <md-elevated-card
            className="choice-card"
            onClick={() => onSelect('dineIn')}
          >
            <div className="card-icon">
              <DineInIcon />
            </div>
            <div className="card-text">
              <strong>Comer aqui</strong>
              <small>Servimos na mesa</small>
            </div>
          </md-elevated-card>

          <md-elevated-card
            className="choice-card"
            onClick={() => onSelect('takeAway')}
          >
            <div className="card-icon">
              <TakeAwayIcon />
            </div>
            <div className="card-text">
              <strong>Para levar</strong>
              <small>Retire embalado</small>
            </div>
          </md-elevated-card>
        </div>
      </main>
    </div>
  )
}

export default SelectionScreen
