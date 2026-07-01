import { useEffect, useRef, useState } from 'react'
import './WindowView.css'

function WindowView({ stage, muffled }) {
  const corruption = (stage - 1) / 9
  const [flash, setFlash] = useState(false)
  const prevStage = useRef(stage)

  useEffect(() => {
    if (prevStage.current === stage) return
    prevStage.current = stage
    setFlash(true)
    const t = setTimeout(() => setFlash(false), 380)
    return () => clearTimeout(t)
  }, [stage])

  const showHaze = stage >= 2
  const showDigitalClouds = stage >= 3
  const showCircuitRiver = stage >= 4
  const showGhosts = stage >= 5
  const showGlitchBands = stage >= 6
  const showGrid = stage >= 7
  const showDistortTint = stage >= 8
  const showHolographic = stage >= 9
  const showFullCorrupt = stage >= 10

  return (
    <div className={`window-view ${muffled ? 'window-view--muffled' : ''}`}>
      <div className="window-frame" />
      <div
        className={`window-glass ${flash ? 'window-glass--flash' : ''}`}
        style={{ '--corruption': corruption }}
      >
        <svg className="scene-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <rect x="0" y="0" width="400" height="300" className="sky" />

          <g className="clouds">
            <ellipse cx="70" cy="55" rx="34" ry="14" className="cloud" />
            <ellipse cx="260" cy="40" rx="40" ry="16" className="cloud" />
            <ellipse cx="340" cy="75" rx="26" ry="11" className="cloud" />
          </g>

          {showDigitalClouds && (
            <g className="digital-shapes">
              <polygon points="90,50 100,42 110,50 100,58" className="digi-shape" />
              <polygon points="270,35 282,28 294,35 282,42" className="digi-shape" />
              <circle cx="200" cy="30" r="5" className="digi-shape" />
            </g>
          )}

          <g className="mountains">
            <polygon points="0,180 60,110 130,180" className="mountain" />
            <polygon points="250,180 320,100 400,180" className="mountain" />
          </g>

          <rect x="0" y="170" width="400" height="130" className="ground" />

          <path
            d="M0,210 C70,190 90,240 160,220 C230,200 250,250 320,225 C360,212 380,230 400,220 L400,300 L0,300 Z"
            className="river"
          />
          {showCircuitRiver && (
            <path
              d="M0,210 C70,190 90,240 160,220 C230,200 250,250 320,225 C360,212 380,230 400,220"
              className="river-circuit"
            />
          )}

          <g className="tree tree-a">
            <rect x="42" y="195" width="8" height="26" className="trunk" />
            <circle cx="46" cy="188" r="22" className="foliage" />
          </g>
          <g className="tree tree-b">
            <rect x="330" y="185" width="9" height="34" className="trunk" />
            <circle cx="334" cy="176" r="26" className="foliage" />
          </g>
          <g className="tree tree-c">
            <rect x="365" y="200" width="7" height="24" className="trunk" />
            <circle cx="369" cy="192" r="19" className="foliage" />
          </g>

          <g className="house house-a">
            <rect x="150" y="205" width="30" height="20" className="house-wall" />
            <polygon points="147,205 165,188 183,205" className="house-roof" />
          </g>
          <g className="house house-b">
            <rect x="255" y="212" width="26" height="18" className="house-wall" />
            <polygon points="252,212 268,197 284,212" className="house-roof" />
          </g>

          {showGhosts && (
            <g className="ghost-layer">
              <g className="tree tree-b ghost">
                <rect x="330" y="185" width="9" height="34" className="trunk" />
                <circle cx="334" cy="176" r="26" className="foliage" />
              </g>
              <g className="house house-a ghost">
                <rect x="150" y="205" width="30" height="20" className="house-wall" />
                <polygon points="147,205 165,188 183,205" className="house-roof" />
              </g>
            </g>
          )}

          {showGrid && (
            <g className="forest-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 45} y1="160" x2={i * 45} y2="300" />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={160 + i * 24} x2="400" y2={160 + i * 24} />
              ))}
            </g>
          )}
        </svg>

        {showHaze && <div className="overlay overlay-haze" />}
        {showGlitchBands && (
          <div className="overlay overlay-glitch">
            <span />
            <span />
            <span />
          </div>
        )}
        {showDistortTint && <div className="overlay overlay-distort" />}
        {showHolographic && <div className="overlay overlay-holo" />}
        {showFullCorrupt && <div className="overlay overlay-corrupt" />}
      </div>
    </div>
  )
}

export default WindowView
