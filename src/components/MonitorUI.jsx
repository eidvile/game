import { AI_QUOTES } from '../data/quotes'
import './MonitorUI.css'

function MonitorUI({ state, actions }) {
  const { name, quoteIndex, humanity, integrity, feedback, resistCooldown, timeLeft } = state

  const statusText =
    feedback?.type === 'resist'
      ? 'YOU WAITED. NOTHING BURNED.'
      : feedback?.type === 'ask'
        ? 'THE AI REMEMBERS THIS.'
        : 'AWAITING INPUT...'

  return (
    <div className="monitor">
      <div className="monitor-body">
        <div className="monitor-cam" />
        <div className="monitor-screen">
          <div className="screen-scanlines" />

          <div className="screen-header">
            <span className="op-label">OP // {name || 'UNKNOWN'}</span>
            <span className={`ai-dot ${feedback?.type === 'ask' ? 'ai-dot--active' : ''}`} />
          </div>

          <div className="quote-bubble" key={quoteIndex}>
            <p>&ldquo;{AI_QUOTES[quoteIndex]}&rdquo;</p>
          </div>

          <div className="action-row">
            <button className="ask-button" type="button" onClick={actions.ask}>
              <span className="ask-button-glow" />
              ASK AI
            </button>
            <button
              className="resist-button"
              type="button"
              onClick={actions.resist}
              disabled={resistCooldown > 0}
            >
              {resistCooldown > 0 ? `RESIST (${resistCooldown}s)` : 'RESIST'}
            </button>
          </div>

          <p className="status-text" key={feedback?.key ?? 'idle'}>
            {statusText}
          </p>

          <div className="bars">
            <div className="bar-row">
              <span className="bar-label">HUMANITY</span>
              <div className="bar-track">
                <div className="bar-fill bar-fill--humanity" style={{ width: `${humanity}%` }} />
              </div>
              <span className="bar-pct">{humanity}%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">INTEGRITY</span>
              <div className="bar-track">
                <div className="bar-fill bar-fill--integrity" style={{ width: `${integrity}%` }} />
              </div>
              <span className="bar-pct">{integrity}%</span>
            </div>
          </div>

          {timeLeft <= 10 && <p className="warning-label">⚠ SIGNAL UNSTABLE — SHIFT ENDING</p>}
        </div>
      </div>
      <div className="monitor-stand" />
      <div className="monitor-foot" />
    </div>
  )
}

export default MonitorUI
