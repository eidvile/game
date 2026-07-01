import './DeskObjects.css'

function DeskObjects() {
  return (
    <div className="desk-objects">
      <div className="obj obj-lamp">
        <svg viewBox="0 0 100 160" className="lamp-svg">
          <rect x="20" y="148" width="60" height="10" rx="5" className="lamp-base-shape" />
          <rect x="44" y="70" width="10" height="80" rx="4" className="lamp-stem" />
          <path d="M20 30 L80 30 L64 68 L36 68 Z" className="lamp-shade" />
          <ellipse cx="50" cy="66" rx="16" ry="6" className="lamp-glow" />
        </svg>
        <div className="lamp-light-cone" />
      </div>

      <div className="obj obj-robot">
        <svg viewBox="0 0 60 70" className="robot-svg">
          <rect x="10" y="4" width="40" height="4" className="robot-antenna" />
          <circle cx="30" cy="4" r="3" className="robot-antenna-tip" />
          <rect x="8" y="8" width="44" height="32" rx="12" className="robot-head" />
          <circle className="robot-eye robot-eye-l" cx="22" cy="24" r="4.5" />
          <circle className="robot-eye robot-eye-r" cx="38" cy="24" r="4.5" />
          <rect x="14" y="42" width="32" height="26" rx="8" className="robot-body" />
          <rect x="22" y="50" width="16" height="10" rx="3" className="robot-panel" />
        </svg>
      </div>

      <div className="obj obj-card">
        <svg viewBox="0 0 90 70" className="card-svg">
          <rect x="2" y="2" width="86" height="66" rx="14" className="card-bg" />
          <circle cx="45" cy="35" r="4" className="node" />
          <circle cx="22" cy="20" r="3.4" className="node" />
          <circle cx="68" cy="20" r="3.4" className="node" />
          <circle cx="20" cy="50" r="3.4" className="node" />
          <circle cx="70" cy="50" r="3.4" className="node" />
          <g className="edges">
            <line x1="45" y1="35" x2="22" y2="20" />
            <line x1="45" y1="35" x2="68" y2="20" />
            <line x1="45" y1="35" x2="20" y2="50" />
            <line x1="45" y1="35" x2="70" y2="50" />
            <line x1="22" y1="20" x2="20" y2="50" />
            <line x1="68" y1="20" x2="70" y2="50" />
          </g>
        </svg>
      </div>

      <div className="obj obj-cube">
        <svg viewBox="0 0 80 80" className="cube-svg">
          <polygon points="40,6 74,24 74,58 40,76 6,58 6,24" className="cube-face-outline" />
          <polygon points="40,6 74,24 40,42 6,24" className="cube-face cube-face-top" />
          <polygon points="6,24 40,42 40,76 6,58" className="cube-face cube-face-left" />
          <polygon points="74,24 40,42 40,76 74,58" className="cube-face cube-face-right" />
        </svg>
      </div>

      <div className="obj obj-notebook">
        <svg viewBox="0 0 140 90" className="notebook-svg">
          <rect x="4" y="6" width="132" height="80" rx="10" className="notebook-cover" />
          <g className="notebook-spiral">
            <circle cx="14" cy="12" r="2.4" />
            <circle cx="14" cy="24" r="2.4" />
            <circle cx="14" cy="36" r="2.4" />
            <circle cx="14" cy="48" r="2.4" />
            <circle cx="14" cy="60" r="2.4" />
            <circle cx="14" cy="72" r="2.4" />
            <circle cx="14" cy="84" r="2.4" />
          </g>
          <path
            d="M40 66 L52 66 L58 46 L66 74 L74 30 L82 58 L88 50 L100 50"
            className="notebook-circuit"
          />
          <rect x="60" y="20" width="14" height="14" rx="3" className="notebook-chip" />
        </svg>
      </div>
    </div>
  )
}

export default DeskObjects
