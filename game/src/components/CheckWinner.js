

function CheckWinner(val) {
    const squares=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i<squares.length; i++){
        const [a,b,c]=squares[i]
        if(val[a] && val[a]===val[b] && val[a]===val[c]){
            return val[a]
        }
    }
    return null
}

export default CheckWinner
