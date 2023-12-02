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
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])

    }
    const thingsElement = things.map(item => {
        return <p key={item}>{item}</p> /* the key added is just to prevent some unnecessary error */   
    })

    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            { thingsElement}
        </div>
    )
}