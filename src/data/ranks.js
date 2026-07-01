export function getRank(denialCount) {
  if (denialCount === 0) {
    return {
      title: 'Human Effort Certified',
      blurb: 'You never asked. Not once. The window stayed yours.',
    }
  }
  if (denialCount <= 3) {
    return {
      title: 'Mostly Independent',
      blurb: 'A few slips, but you mostly did the work yourself.',
    }
  }
  if (denialCount <= 7) {
    return {
      title: 'Prompt-Dependent',
      blurb: 'You leaned on it more than you meant to.',
    }
  }
  return {
    title: "AI's Favorite Operator",
    blurb: 'You asked. And asked. It noticed.',
  }
}
