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
    const Arr = thingsArray.map(item => (
        <p key={item}>{item}</p>
    ))



    function addItem(){
        const newThing = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        console.log(thingsArray)
    }
    

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {Arr}
        </div>
    )
}

