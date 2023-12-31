import './Notation.css'

const Notation = ({chord}) => {
  return (
    <table className='chord'>
      <caption className='caption-top'>{chord.name}</caption>
      <thead>
        <tr>
          <th></th>
          {chord.mutedStrings.map((muted, index) => {
            return <th key={index}>{muted === 1 ? (<div className='muted'>x</div>) : null}</th>
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{chord.frets[0]}</th>
          {chord.tab.map((note, index) => {
            return <td key={index}>{note === chord.frets[0] ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th></th>
          {chord.tab.map((note, index) => {
            return <td key={index}>{note === chord.frets[1] ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th>{chord.frets[2]}</th>
          {chord.tab.map((note, index) => {
            return <td key={index}>{note === chord.frets[2] ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th></th>
          {chord.tab.map((note, index) => {
            return <td key={index}>{note === chord.frets[3] ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
        <tr>
          <th>{chord.frets[4]}</th>
          {chord.tab.map((note, index) => {
            return <td key={index}>{note === chord.frets[4] ? (<div className='circle'></div>) : null}</td>
          })}
        </tr>
      </tbody>
    </table>
  )
}

export default Notation