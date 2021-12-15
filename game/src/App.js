import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [history, setHistory] = useState([{value:Array(9).fill(null)}])
  const [steps, setSteps] = useState(0)
  const [state, setState] = useState(true)

  const handleClick = (i)=>{
    const showHistory = history.slice(0, steps + 1)
    const current = showHistory[showHistory.length - 1]
    const value2 = current.value.slice()
    value2[i] = state? 'X':' O'

    setHistory(showHistory.concat([{value:value2}]))
    setSteps(showHistory.length)
    setState(!state)

  }

  const currentMove = history[steps]
  return (

  <>
  <Board move={currentMove.value} click={(i)=>handleClick(i)}/>
  </>
  );
}

export default App;
