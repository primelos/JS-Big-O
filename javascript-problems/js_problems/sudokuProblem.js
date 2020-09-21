console.log('test')

function sudokuSolver  (puzzle) {
    let nonPossibilities = {}, impossibleNumbers
    let emptySpaces = 81;
    while (emptySpaces > 0){
        emptySpaces = 0
        for (let vert = 0; vert < puzzle.length; vert++){
            for (let horz = 0; horz < puzzle.length; horz++){
                if (puzzle[vert][horz] === 0){
                    for(let i = 0; i < 9 ; i++){
                        if (puzzle[vert][i] > 0){
                            nonPossibilities[puzzle[vert][i]] = true
                        }
                        if (puzzle[i][horz] > 0){
                            nonPossibilities[puzzle[i][horz]] =true
                        }
                    }
                    for(let vertbox = Math.floor(vert / 3) * 3; vertbox < Math.floor(vert / 3) * 3 + 3; vertbox++){
                        for(let horzbox = Math.floor(horz / 3) * 3; horzbox < Math.floor(horz / 3) * 3 + 3; horzbox++){
                            if (puzzle[vertbox][horzbox]){
                                nonPossibilities[puzzle[vertbox][horzbox]] = true
                            }
                        }
                    }
                    impossibleNumbers = Object.keys(nonPossibilities)
                    console.log(impossibleNumbers)
                    if(impossibleNumbers.length === 8){
                        for (let i = 1; i < 10; i++){
                            // console.log(impossibleNumbers.indexOf(i.toString()) < 0)
                            if (impossibleNumbers.indexOf(i.toString()) < 0){
                                console.log(vert, horz)
                                puzzle[vert][horz] = i
                            }
                        } 
                    } else {
                        emptySpaces++
                    }
                }  
            }
        }
    }
    return puzzle
}

let puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
]

console.log(sudokuSolver(puzzle))
