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
   
    function handleChange(event) {
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    
    function handleCheckbox(event) {
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name] : event.target.checked
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
                id="checkbox"
                name="isFriendly"
                onChange={handleCheckbox}
                checked= {formData.isFriendly}
            />
            <label htmlFor="checkbox">Are you friendly</label>

        </form>
    )
}
