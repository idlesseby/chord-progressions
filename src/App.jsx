import React, { useState } from 'react'
import './App.css'
import chords from './data/chords.js'
import titles from './data/titles.js'
import Notation from './components/notation/Notation'

const App = () => {

  const [title, setTitle] = useState('Memories')
  const [chordProgression, setChordProgression] = useState([])

  const getTitle = () => {
    setTitle(() => {
      return titles[Math.floor(Math.random() * 299)]
    })
  }

  const getChordProgression = () => {

    const newNumbers = []

    for(let i=0; i<4; i++) {
      newNumbers.push(Math.floor(Math.random() * 12))
    }

    setChordProgression(newNumbers)
  }

  const createChordProgression = () => { 
    getTitle()
    getChordProgression()
    console.log(chordProgression)
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
            return <Notation chord={chords[number]}/>
          })}
        </div>
        <button className="progression-button" type="button" onClick={createChordProgression}>Generate Chords</button>
      </section>
    </main>
  </>
}

export default App