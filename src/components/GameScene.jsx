import WindowView from './WindowView'
import Curtains from './Curtains'
import DeskObjects from './DeskObjects'
import MonitorUI from './MonitorUI'
import Hud from './Hud'
import './GameScene.css'

function GameScene({ state, actions }) {
  return (
    <div className="game-scene">
      <div className="wall" />

      <div className="window-bay">
        <WindowView stage={state.windowStage} muffled={!state.curtainOpen} />
        <Curtains open={state.curtainOpen} onToggle={actions.toggleCurtain} />
      </div>

      <div className="desk">
        <div className="desk-surface" />
        <div className="desk-edge" />
      </div>

      <DeskObjects />

      <MonitorUI state={state} actions={actions} />

      <Hud state={state} />
    </div>
  )
}

export default GameScene
