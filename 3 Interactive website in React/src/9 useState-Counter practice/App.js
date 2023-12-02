import React from "react"
import './style.css'

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [initialCount, setCount] = React.useState(0)

    let count
    
    function addCount(){
        count = initialCount + 1 
        setCount(count)

    }

    function reduceCount(){
        count = initialCount - 1
        
        if (count < 0){
            setCount(0)
        } else if(count === 0) {
            setCount(0)
        } else {
            setCount(count)
        }
        return setCount
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={reduceCount}>–</button>
            <div className="counter--count">
                <h1>{initialCount}</h1>
            </div>
            <button className="counter--plus" onClick={addCount}>+</button>
        </div>
    )
}
