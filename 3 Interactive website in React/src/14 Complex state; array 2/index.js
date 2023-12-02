import './style.css'
import React from 'react'


export default function App() {
   
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
    setThingsArray(prevThingsArray => {
        return [...thingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
    /* or
    const newThingsArray = [...thingsArray]
    const newIndex = newThingsArray.length + 1
    const newThing = `Thing ${newIndex}`*/
    /*newThingsArray.push(newThing)
     setThingsArray(newThingsArray)*/
    }

   
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}