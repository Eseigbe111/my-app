import React from "react"
import boxes from "./boxes"
import './style.css'

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const [Boxes, setBoxes] = React.useState(boxes)

    const boxArray = Boxes.map(box => <div key={box.id} className="square--box"></div>)




    return (
        <main>
            <h1>Boxes will go here</h1> 
            {boxArray}       
        </main>
    )
}
