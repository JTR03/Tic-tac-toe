import React from 'react'

function Square({clickSquare,move}) {
    return (
        <button className='square' onClick={()=>clickSquare()}>
            {move}
        </button>
    )
}

export default Square
