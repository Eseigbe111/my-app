import React from "react"
import './style.css'


export default function App() {
    function handleClick() {
        console.log('i was clicked')
    }

    function onMouseListener() {
        console.log('i was overed over')
    }
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={onMouseListener} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
