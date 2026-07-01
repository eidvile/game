import { getRank } from '../data/ranks'
import './EndScreen.css'

function EndScreen({ state, onPlayAgain }) {
  const { name, denialCount, humanity, integrity, endReason } = state
  const rank = getRank(denialCount)
  const title = endReason === 'corrupted' ? 'Protocol Failed' : 'Shift Complete'

  return (
    <div className="end-screen">
      <div className="end-card">
        <p className="end-eyebrow">{endReason === 'corrupted' ? 'CONNECTION SEVERED' : 'SHIFT LOG'}</p>
        <h1 className="end-title">{title}</h1>
        <p className="end-operator">Operator {name || 'Unknown'}</p>

        <div className="end-stats">
          <div className="stat">
            <span className="stat-label">AI Asks</span>
            <span className="stat-value">{denialCount}/10</span>
          </div>
          <div className="stat">
            <span className="stat-label">Humanity</span>
            <span className="stat-value">{humanity}%</span>
          </div>
          <div className="stat">
            <span className="stat-label">Integrity</span>
            <span className="stat-value">{integrity}%</span>
          </div>
        </div>

        <div className="end-rank">
          <span className="end-rank-title">{rank.title}</span>
          <span className="end-rank-blurb">{rank.blurb}</span>
        </div>

        <button className="end-button" type="button" onClick={onPlayAgain}>
          Play again
        </button>
      </div>
    </div>
  )
}

export default EndScreen
