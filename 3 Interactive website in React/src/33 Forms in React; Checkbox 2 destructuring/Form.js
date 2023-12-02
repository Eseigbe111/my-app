import React from "react"
import './style.css'

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstName:"", 
            lastName:"",
            email:"",
            comments:"",
            isFriendly: true
        }
        )
        console.log(formData)
    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes
     */

    
    function handleChange(event) {
        setFormData(prevFormData =>{
            const {name, value, type, checked} = event.target
            return{
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
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
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder = "Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder = "Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder = "Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input
                 type="checkbox"
                 id="isFriendly"
                 checked={formData.isFriendly} /* we use checked in place of value*/
                 onChange={handleChange}
                 name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly</label>
            <br />
        </form>
    )
}
