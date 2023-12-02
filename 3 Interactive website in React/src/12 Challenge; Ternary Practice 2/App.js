import React from "react"
import './style.css'

export default function App() {
    /**
     * Now just use only the condition
     * Hint: you will no longer need the answer variable 
     */
    const isGoingOut = true
    
    //let answer = (isGoingOut === true) ? 'Yes': 'No' // Use ternary here

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{(isGoingOut === true) ? 'Yes': 'No'}</h1>
            </div>
        </div>
    )
}
