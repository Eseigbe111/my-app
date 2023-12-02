import React from "react"
import './style.css'

export default function Form() {

    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    

    console.log(firstName, lastName)
    function handleFirstNameChange(event) {

        /**
         * Challenge: Track the applicant's last name as well
         */

        setFirstName(event.target.value)
    }


    function handleLastNameChange(event){
        setLastName(event.target.value)
    }


    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder = "Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}
