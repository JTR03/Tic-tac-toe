import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import CheckWinner from './components/CheckWinner';

function App() {
  const [history, setHistory] = useState([{value:Array(9).fill(null)}])
  const [steps, setSteps] = useState(0)
  const [state, setState] = useState(true)

  const handleClick = (i)=>{
    const showHistory = history.slice(0, steps + 1)
    const current = showHistory[showHistory.length - 1]
    const value2 = current.value.slice()
       if(CheckWinner(value2) || value2[i]){
      return
    }
    value2[i] = state? 'X':' O'

 

    setHistory(showHistory.concat([{value:value2}]))
    setSteps(showHistory.length)
    setState(!state)

  }

  const handleJump = (step)=>{
    setSteps(step) 
  }

  const currentMove = history[steps]
  const winner = CheckWinner(currentMove.value)

   let status;
   if(winner){
     status = winner + " WINS"
   }else{
     status = (state? 'X' : 'O') + ' Plays'
   }

   const moves = history.map((step,move)=>{
     const number = move? "Return to #" + move:"Restart"
     return(
       <li key={move}>
         <button onClick={()=>handleJump(move)}>{number}</button>
       </li>
     )
   })
  return (

  <div className='game'>
  <div className='game-board'>

    {status}
  
  <Board move={currentMove.value} click={(i)=>handleClick(i)}/>
</div>
  <div className='game-info'>
    <ol>{moves}</ol>
  </div>
  
  
  
  </div>
  );
}

export default App;
