import { useMemo } from 'react'

export type Mode = 'dineIn' | 'takeAway'

const OPTIONS: Array<{ id: Mode; title: string; description: string }> = [
  { id: 'dineIn', title: 'Comer aqui', description: 'Servimos na mesa' },
  { id: 'takeAway', title: 'Para levar', description: 'Retire embalado' },
]

type SelectionScreenProps = {
  lastChoice: Mode | null
  onBack: () => void
  onSelect: (mode: Mode) => void
}

const SelectionScreen = ({ lastChoice, onBack, onSelect }: SelectionScreenProps) => {
  const helperText = useMemo(() => {
    if (!lastChoice) return 'Escolha a melhor opção para continuar'
    return lastChoice === 'dineIn' ? 'Perfeito! Vamos organizar sua mesa.' : 'Tudo pronto para viagem.'
  }, [lastChoice])

  return (
    <div className="selection-screen">
      <header className="selection-header">
        <md-filled-tonal-button className="back-btn" aria-label="Voltar" onClick={onBack}>
          ← Voltar
        </md-filled-tonal-button>
      </header>

      <main className="selection-body">
        <div className="title-block">
          <p className="eyebrow">Tipo de atendimento</p>
          <h1>Escolha</h1>
          <p className="subtitle">{helperText}</p>
        </div>

        <div className="card-grid">
          {OPTIONS.map((option) => {
            const active = lastChoice === option.id
            return (
              <md-elevated-card
                key={option.id}
                className={`choice-card ${active ? 'active' : ''}`}
                onClick={() => onSelect(option.id)}
              >
                <div className="glyph">
                  <span className="shape triangle" />
                  <span className="shape gear" />
                  <span className="shape blob" />
                </div>
                <div className="card-text">
                  <strong>{option.title}</strong>
                  <small>{option.description}</small>
                </div>
              </md-elevated-card>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default SelectionScreen
