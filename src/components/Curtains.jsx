import './Curtains.css'

function Curtains({ open, onToggle }) {
  return (
    <div className={`curtains ${open ? 'curtains--open' : 'curtains--closed'}`}>
      <div className="curtain-rod">
        <span className="rod-finial rod-finial--left" />
        <span className="rod-finial rod-finial--right" />
      </div>

      <div className="curtain-panel curtain-panel--left" />
      <div className="curtain-panel curtain-panel--right" />

      <button
        type="button"
        className="pull-cord"
        onClick={onToggle}
        aria-label={open ? 'Close curtains' : 'Open curtains'}
        title={open ? 'Close curtains' : 'Open curtains'}
      >
        <span className="cord-string" />
        <span className="cord-handle" />
      </button>
    </div>
  )
}

export default Curtains
