import React, { useState } from 'react'
import './App.css'
import chords from './data/chords.js'
import titles from './data/titles.js'
import Notation from './components/notation/Notation'
import getKeyScale from './utils/getKeyScale'

const App = () => {
  const [title, setTitle] = useState('')
  const [chordProgression, setChordProgression] = useState([])
  const [keyScale, setKeyScale] = useState([])

  const semitones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const chordProgressions = [[2, 5, 1], [4, 6, 5], [4, 5, 3], [6, 3, 4, 2], [4, 3, 6, 6], [1, 6, 4, 5]]
  const majorScale = [0,2,4,5,7,9,11]

  const getTitle = () => {

    const filteredTitles = titles.filter(title => title.length <= 16)

    setTitle(() => {
      return filteredTitles[Math.floor(Math.random() * filteredTitles.length)]
    })
  }

  const createChordProgression = () => {
    let keyOf = semitones[Math.floor(Math.random() * semitones.length)]
    let newKeyScale = getKeyScale(semitones, keyOf, majorScale)
    let progression = chordProgressions[Math.floor(Math.random() * chordProgressions.length)]

    const newChordProgression = progression.map(number => {
      return newKeyScale[number - 1]
    })

    setKeyScale(newKeyScale)
    setChordProgression(newChordProgression)
  }

  const getChordProgression = () => { 
    getTitle()
    createChordProgression()
  }

  return <>
    <main>
      <section>
        <div className="progression-name">{title}</div>
        <div className="container">
          {chordProgression.map(number => {
            return <Notation chord={
                number === keyScale[0] || number === keyScale[3] || number === keyScale[4] ? chords[number].variant[Math.floor(Math.random() * 2)] 
                : number === keyScale[1] || number === keyScale[2] || number === keyScale[5] ? chords[number].variant[Math.floor(Math.random() * 2) + 2] 
                : chords[number].variant[0]
              }
            />
          })}
        </div>
        <button className="progression-button" type="button" onClick={getChordProgression}>Generate Chords</button>
      </section>
    </main>
  </>
}

export default App