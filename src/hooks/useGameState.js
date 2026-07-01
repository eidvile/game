import { useCallback, useEffect, useRef, useState } from 'react'
import { AI_QUOTES, pickRandomQuote } from '../data/quotes'

const SHIFT_SECONDS = 60
const MAX_WINDOW_STAGE = 10
const RESIST_COOLDOWN = 4

const initialState = {
  screen: 'start',
  name: '',
  timeLeft: SHIFT_SECONDS,
  denialCount: 0,
  windowStage: 1,
  humanity: 100,
  integrity: 100,
  curtainOpen: true,
  quoteIndex: 0,
  feedback: null,
  endReason: null,
  transitionKey: 0,
  resistCooldown: 0,
}

export function useGameState() {
  const [state, setState] = useState(initialState)
  const tickRef = useRef(null)

  useEffect(() => {
    if (state.screen !== 'playing') return
    tickRef.current = setInterval(() => {
      setState((prev) => {
        if (prev.screen !== 'playing') return prev
        const timeLeft = Math.max(0, prev.timeLeft - 1)
        const resistCooldown = Math.max(0, prev.resistCooldown - 1)
        if (timeLeft === 0) {
          return { ...prev, timeLeft, resistCooldown, screen: 'end', endReason: 'timeout' }
        }
        return { ...prev, timeLeft, resistCooldown }
      })
    }, 1000)
    return () => clearInterval(tickRef.current)
  }, [state.screen])

  const start = useCallback((name) => {
    setState({
      ...initialState,
      name: name.trim(),
      screen: 'playing',
      quoteIndex: Math.floor(Math.random() * AI_QUOTES.length),
    })
  }, [])

  const ask = useCallback(() => {
    setState((prev) => {
      if (prev.screen !== 'playing') return prev
      const denialCount = prev.denialCount + 1
      const windowStage = Math.min(MAX_WINDOW_STAGE, 1 + denialCount)
      const humanity = Math.max(0, prev.humanity - (6 + Math.floor(Math.random() * 7)))
      const integrity = Math.max(0, prev.integrity - (5 + Math.floor(Math.random() * 8)))
      const quoteIndex = pickRandomQuote(prev.quoteIndex)
      const ended = windowStage >= MAX_WINDOW_STAGE
      return {
        ...prev,
        denialCount,
        windowStage,
        humanity,
        integrity,
        quoteIndex,
        feedback: { type: 'ask', key: prev.transitionKey + 1 },
        transitionKey: prev.transitionKey + 1,
        screen: ended ? 'end' : prev.screen,
        endReason: ended ? 'corrupted' : prev.endReason,
      }
    })
  }, [])

  const resist = useCallback(() => {
    setState((prev) => {
      if (prev.screen !== 'playing' || prev.resistCooldown > 0) return prev
      return {
        ...prev,
        humanity: Math.min(100, prev.humanity + 3),
        integrity: Math.min(100, prev.integrity + 4),
        feedback: { type: 'resist', key: prev.transitionKey + 1 },
        transitionKey: prev.transitionKey + 1,
        resistCooldown: RESIST_COOLDOWN,
      }
    })
  }, [])

  const toggleCurtain = useCallback(() => {
    setState((prev) => ({ ...prev, curtainOpen: !prev.curtainOpen }))
  }, [])

  const reset = useCallback(() => {
    setState(initialState)
  }, [])

  return { state, actions: { start, ask, resist, toggleCurtain, reset } }
}
