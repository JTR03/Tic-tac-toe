import React from 'react'
import Square from './Square'

function Board({click,move}) {

    const renderSquare = (i)=>{
        return(
            <Square clickSquare={()=>click(i)} move={move[i]}/>
        )
    }
    return (
        <>
          <div className='status'></div>
          <div className='board-row'>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
        </div> 
        <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
            </div> 
          <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
              </div>  

        </>
    )
}

export default Board
