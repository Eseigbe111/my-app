import React from "react"
import './style.css'

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    const [signUpForm, setSignUpForm] = React.useState
    (
        {
            email: "",
            password: "",
            confirmpassword: "",
            okayToEmail: false
        }
    )

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setSignUpForm(prevSignUpForm => {
            return {
                ...prevSignUpForm,
                [name] : type === "checkbox"? checked : value
            }
        })
    }

    console.log(signUpForm)
    
    function handleSubmit(event) {
        event.preventDefault()
        if(signUpForm.password === signUpForm.confirmpassword){
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        if(signUpForm.okayToEmail){
            console.log("Thanks for signing up for our newsletter!")
        }

    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    onChange={handleChange}
                    name="email"
                    value={signUpForm.email}
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={signUpForm.password}
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    onChange={handleChange}
                    name="confirmpassword"
                    value={signUpForm.confirmpassword}
                    className="form--input"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={signUpForm.okayToEmail}
                        onChange={handleChange}
                        name="okayToEmail"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
