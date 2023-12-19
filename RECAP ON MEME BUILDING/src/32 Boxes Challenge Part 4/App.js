import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import './style.css'

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
       /* setSquares(prevSquares => 
            prevSquares.map(square => 
            square.id === id? 
            {...square, on: !square.on} : {...square}  ))*/
            setSquares(prevSquares => {
                const newSquares = []
                for (let i=0; i <prevSquares.length; i++){
                    let updatedSquare
                    const currentSquare = prevSquares[i]
                    if(prevSquares[i].id ===id){
                        updatedSquare = {...currentSquare, on:!currentSquare.on}
                    }else {
                        updatedSquare = {...currentSquare}
                    }
                    newSquares.push(updatedSquare)
                }
                return newSquares
            })
            
    }

   
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() =>toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
