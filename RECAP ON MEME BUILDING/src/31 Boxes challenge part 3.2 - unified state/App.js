import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import './style.css'

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id){
        console.log(id)
    }


    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            handleClick ={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
