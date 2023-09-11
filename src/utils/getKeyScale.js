export default function getKeyScale(semitones, keyOf, scale) {
  const noteIndex = semitones.indexOf(keyOf)
  const filteredSemitones = semitones.filter(note => note != keyOf)
  const arrangedSemitones = (filteredSemitones.slice(noteIndex) + ',' + filteredSemitones.slice(0,noteIndex)).split(',')

  if(keyOf === 0) {
    arrangedSemitones.pop()
  }
  if(keyOf === 11) {
    arrangedSemitones.shift()
  }

  arrangedSemitones.unshift(String(keyOf))

  return scale.map(step => {
    return arrangedSemitones[step]
  })
} 