import React from "react"
import boxes from "./boxes"
import './style.css'


export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to #222222
    // If darkMode is false, set it to #cccccc

    const newColor = props.darkMode? "#222222" : "#cccccc"
    const styles = {
        backgroundColor: newColor
    }

    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
