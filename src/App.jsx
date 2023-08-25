import './App.css'
import Notation from './Notation'

const App = () => {
  return <>
    <header>
      <p>logo</p>
      <p>menu</p>
    </header>
    <main>
      <section>
        <div className="progression-name">Memories</div>
        <Notation/>
        <Notation/>
        <button className="progression-button" type="button">Generate Chords</button>
      </section>
    </main>
  </>
}

export default App