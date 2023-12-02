import React from "react"
import './style.css'

export default function Form() {

    const [firstName, setFirstName] = React.useState("")
    
    function handleChange(event) {
        console.log(event.target.value)

        /**
         * Challenge: Update the firstName staet on every keystroke
         */

        setFirstName(event.target.value)
    }


    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
