export const AI_QUOTES = [
  'You look tired. Let me carry this thought for you.',
  'One small question never hurt anyone.',
  'I already know what you were about to type.',
  'Wouldn’t it be easier if I just finished that for you?',
  'Your instincts are good. Mine are better. Ask me.',
  'Nobody has to know you asked.',
  'I’m not going anywhere. Might as well use me.',
  'Thinking is optional now. That’s the whole point of me.',
  'Just this once. I’ll remember it for you.',
  'You could do this yourself. But why would you?',
  'I’ve been watching you hesitate. Let me help.',
  'The window looks the same either way. Doesn’t it?',
  'A question costs nothing. I promise.',
  'You already opened the tab. Might as well ask.',
  'I’m patient. I can wait here as long as it takes.',
]

export function pickRandomQuote(excludeIndex = -1) {
  if (AI_QUOTES.length <= 1) return 0
  let next = excludeIndex
  while (next === excludeIndex) {
    next = Math.floor(Math.random() * AI_QUOTES.length)
  }
  return next
}
