import './Hud.css'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function Hud({ state }) {
  const low = state.timeLeft <= 10

  return (
    <div className="hud">
      <div className={`hud-chip hud-chip--time ${low ? 'hud-chip--warn' : ''}`}>
        <span className="hud-label">TIME</span>
        <span className="hud-value">{formatTime(state.timeLeft)}</span>
      </div>
      <div className="hud-chip hud-chip--ai">
        <span className="hud-label">AI ASKS</span>
        <span className="hud-value">{state.denialCount}/10</span>
      </div>
    </div>
  )
}

export default Hud
