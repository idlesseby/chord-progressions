import './Notation.css'

const Notation = (chord) => {

  return (
    <table className='chord'>
      <caption>{chord.chord.name}</caption>
      <thead>
        <tr>
          <th></th>
          {chord.chord.mutedStrings.map((muted, index) => {
            return <th key={index}>{muted === 1 ? (<div className='muted'>x</div>) : null}</th>
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{chord.chord.frets[0]}</th>
          {chord.chord.tab.map((note, index) => {
            return <td key={index}>{note === 1 ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th></th>
          {chord.chord.tab.map((note, index) => {
            return <td key={index}>{note === 2 ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th>{chord.chord.frets[1]}</th>
          {chord.chord.tab.map((note, index) => {
            return <td key={index}>{note === 3 ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th></th>
          {chord.chord.tab.map((note, index) => {
            return <td key={index}>{note === 4 ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th>{chord.chord.frets[2]}</th>
          {chord.chord.tab.map((note, index) => {
            return <td key={index}>{note === 5 ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
      </tbody>
    </table>
  )
}

export default Notation