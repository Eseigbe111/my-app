import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import './style.css'


export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    /*function toggle(id) {
       setSquares(prevSquares => 
        prevSquares.map(square => 
            square.id === id? {...square, on: !square.on} : square))
    
    }*/

    function toggle(id) {
        setSquares(prevSquares => {
            const newSquareArray =[]
            for (let i=0; i< prevSquares.length;i++) {
                let currentSquare = prevSquares[i]
                if (currentSquare.id === id) {
                    let updatedSquare = {...currentSquare, on:!currentSquare.on}
                    newSquareArray.push(updatedSquare)
                } else {
                    newSquareArray.push(currentSquare)
                }

            }
            return newSquareArray
        })
    }

        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
