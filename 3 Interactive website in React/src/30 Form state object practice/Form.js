import React from "react"
import './style.css'

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstName:"", 
            lastName:"",
            email:""
        }
        )
        console.log(formData)
    /**
     * Challenge: add an email field/state to the form
     */

    
    function handleChange(event) {
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }


   

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder = "Last Name"
                onChange={handleChange}
                name="lastName"
            />
            <input
                type="email"
                placeholder = "Email"
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}
