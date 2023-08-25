import React from 'react'
import './App.css'
import chords from './chords.js'
import titles from './titles.js'
import Notation from './Notation'

const App = () => {

  const [title, setTitle] = React.useState('Memories')

  const getTitle = () => {
    setTitle(() => {
      return titles[Math.floor(Math.random() * 299)]
    })
  }

  return <>
    <header>
      <p>logo</p>
      <p>menu</p>
    </header>
    <main>
      <section>
        <div className="progression-name">{title}</div>
        <div className="container">
          <Notation chord={chords[0]}/>
          <Notation chord={chords[1]}/>
          <Notation chord={chords[0]}/>
          <Notation chord={chords[1]}/>
        </div>
        <button className="progression-button" type="button" onClick={getTitle}>Generate Chords</button>
      </section>
    </main>
  </>
}

export default App