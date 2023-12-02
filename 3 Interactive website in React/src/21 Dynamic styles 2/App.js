import React from "react"
import boxes from "./boxes"
import './style.css'


export default function App(props) {
    /**
     * Challenge: 
     * -To make some of the boxes have different colors
     */

    /* const styles = {
            backgroundColor: props.darkMode? '#FDCC0D' : "#282D35"
        } 
        */
    const [Boxes, setBoxes] = React.useState(boxes)
    const allBoxes = Boxes.map((item, index) =>{
        const BackGroundColor = (index%2 ===0)? "#FDCC0D": "#282D35"
        const styles = {
            backgroundColor: BackGroundColor
        } 
        return(
            <div style={styles} key={item.id} className="box"></div>
        )
    })

    return (
        <main>
            <h1>{allBoxes}</h1>
        </main>
    )
}
