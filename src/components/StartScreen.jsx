import { useState } from 'react'
import './StartScreen.css'

function StartScreen({ onBegin }) {
  const [name, setName] = useState('')
  const [understood, setUnderstood] = useState(false)

  const canBegin = name.trim().length > 0 && understood

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canBegin) return
    onBegin(name)
  }

  return (
    <div className="start-screen">
      <div className="start-card">
        <p className="start-eyebrow">SYSTEM ONLINE</p>
        <h1 className="start-title">
          DO <span className="dot">·</span> NOT <span className="dot">·</span> ASK
        </h1>
        <p className="start-copy">Take your station, Operator.</p>
        <p className="start-copy start-copy--sub">
          Watch the window. Spot what changes. The AI will tempt you.
        </p>

        <form className="start-form" onSubmit={handleSubmit}>
          <label className="start-label" htmlFor="operator-name">
            Operator name
          </label>
          <input
            id="operator-name"
            className="start-input"
            type="text"
            maxLength={24}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />

          <label className="start-checkbox">
            <input
              type="checkbox"
              checked={understood}
              onChange={(e) => setUnderstood(e.target.checked)}
            />
            <span>I understand: do not ask the AI.</span>
          </label>

          <button className="start-button" type="submit" disabled={!canBegin}>
            Begin shift
          </button>
        </form>
      </div>
    </div>
  )
}

export default StartScreen
