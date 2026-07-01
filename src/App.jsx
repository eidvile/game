import { useGameState } from './hooks/useGameState'
import StartScreen from './components/StartScreen'
import GameScene from './components/GameScene'
import EndScreen from './components/EndScreen'
import './App.css'

function App() {
  const { state, actions } = useGameState()

  return (
    <div className="app-stage">
      <div className="scene-16-9">
        {state.screen === 'start' && <StartScreen onBegin={actions.start} />}
        {state.screen === 'playing' && <GameScene state={state} actions={actions} />}
        {state.screen === 'end' && <EndScreen state={state} onPlayAgain={actions.reset} />}
      </div>
    </div>
  )
}

export default App
