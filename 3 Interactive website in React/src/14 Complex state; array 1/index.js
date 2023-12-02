import './style.css'
import React from 'react'


export default function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    //const thingsArray = ["Thing 1", "Thing 2"]

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
    // Copy the existing array into a new array
        const newThingsArray = [...thingsArray]
    // Calculate the index for the new item
        const newIndex = newThingsArray.length + 1
    // Create the new item
        const newThing = `Thing ${newIndex}`
    // Add the new item to the array
        newThingsArray.push(newThing)
    // Set the state with the updated array
        setThingsArray(newThingsArray)

    /* u could doit this way be
    function addItem() {
        
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }*/

    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
// const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)