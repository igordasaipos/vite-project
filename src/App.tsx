import { useState } from 'react'
import './App.css'
import WaitingScreen from './components/WaitingScreen'
import SelectionScreen, { type Mode } from './components/SelectionScreen'
import MenuScreen from './components/MenuScreen'

type Stage = 'waiting' | 'selection' | 'menu'

function App() {
  const [stage, setStage] = useState<Stage>('waiting')
  const [mode, setMode] = useState<Mode | null>(null)

  const handleStart = () => setStage('selection')

  const handleModeSelection = (choice: Mode) => {
    setMode(choice)
    setStage('menu')
  }

  return (
    <div className="app-shell">
      {stage === 'waiting' && <WaitingScreen onStart={handleStart} />}
      {stage === 'selection' && (
        <SelectionScreen
          lastChoice={mode}
          onBack={() => setStage('waiting')}
          onSelect={handleModeSelection}
        />
      )}
      {stage === 'menu' && mode && (
        <MenuScreen />
      )}
    </div>
  )
}

export default App
