import React from 'react';
import './style.css'


    /**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

export default function App() {
    const thingsArray = ["Thing 1", "Thing 2"]

    function addthings() {
        const newThing = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        console.log(thingsArray)
    }


    const things = thingsArray.map(item => {
        return <p key={item}>{item}</p> /* the key added is just to prevent some unnecessary error */   
    })

    
    return (
        <div>
            <button onClick={addthings}>Add Item</button>
            { things /* Insert the things here*/ }
        </div>
    )
}