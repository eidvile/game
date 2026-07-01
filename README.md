# DO NOT ASK

A cozy-but-uncanny single-page browser game. You're an Operator at a desk. The AI keeps tempting
you with an "ASK AI" button — every time you give in, the peaceful view outside your window drifts
a little further into digital corruption.

## Stack

React 19 + Vite, plain CSS (no UI framework). All visuals are hand-built with CSS/SVG — no external
image assets.

## Run it

```
npm install
npm run dev
```

## Structure

- `App` — top-level screen switcher (start / playing / end)
- `hooks/useGameState` — flat game state (timer, denial count, window stage, humanity/integrity, curtain)
- `StartScreen` — operator name + consent checkbox gate
- `GameScene` — the room: wall, desk, and composes the pieces below
- `MonitorUI` — the in-monitor game UI (quote, Ask AI / Resist, bars)
- `WindowView` — the 10-stage window corruption sequence
- `Curtains` — the pull-cord toggle for the window
- `DeskObjects` — lamp, robot, glowing cube, neural card, notebook
- `Hud` — time remaining / AI ask count overlay
- `EndScreen` — shift summary + rank
