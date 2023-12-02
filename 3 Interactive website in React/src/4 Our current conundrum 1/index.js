import React from 'react';
import './style.css'


    
/**
 * Challenge : Map over the thingsArray to generate
 * a <p> element for each item and render them on the page
 * below the button
 */

export default function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const things = thingsArray.map(item => {
        return <p key={item}>{item}</p> /* the key added is just to prevent some unnecessary error */   
    })


    return (
        <div>
            <button>Add Item</button>
            { things /* Insert the things here*/ }
        </div>
    )
}