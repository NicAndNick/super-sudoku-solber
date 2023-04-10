import { useEffect, useState, Fragment } from "react"

export function GetPuzzle () {

    const [puzzleState, setPuzzleState] = useState()
    async function fetchPuzzle () {
       const newPuzzle = await(await fetch("/api/get-sudoku")).json()
    //    setPuzzleState(newPuzzle) 
        console.log(newPuzzle)
    }

    return (
        <div className="flex justify-center align-center h-full w-full">
            <button onClick = {() => fetchPuzzle()} className="bg-blue-800 text-white transition duration-100 hover:bg-blue-500 hover:text-white rounded h-[10%] w-[20%]">Generate a Puzzle</button> 
        </div>   
        
    )
}