import React, { useState } from 'react'
import './App.css'
import chords from './data/chords.js'
import titles from './data/titles.js'
import Notation from './components/notation/Notation'
import getKeyScale from './utils/getKeyScale'

const App = () => {

  const [title, setTitle] = useState('')
  const [chordProgression, setChordProgression] = useState([])
  const semitones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const chordProgressions = [4, 6, 5]
  const majorScale = [0,2,4,5,7,9,11]

  let keyOf
  let progression

  const getTitle = () => {
    setTitle(() => {
      return titles[Math.floor(Math.random() * titles.length)]
    })
  }

  const createChordProgression = () => {
    keyOf = semitones[Math.floor(Math.random() * semitones.length)]
    progression = chordProgressions//[Math.floor(Math.random() * chordProgressions.length)]

    const keyScale = getKeyScale(semitones, keyOf, majorScale)

    const newChordProgression = progression.map(number => {
      return keyScale[number - 1]
    })

    setChordProgression(newChordProgression)
  }

  const getChordProgression = () => { 
    getTitle()
    createChordProgression()
  }

  return <>
    <header>
      <span className='logo-title'>Minpulse</span>
      <p>menu</p>
    </header>
    <main>
      <section>
        <div className="progression-name">{title}</div>
        <div className="container">
          {chordProgression.map(number => {
            return <Notation chord={chords[number].variant[0]}/>
          })}
        </div>
        <button className="progression-button" type="button" onClick={getChordProgression}>Generate Chords</button>
      </section>
    </main>
  </>
}

export default App