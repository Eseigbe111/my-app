import React from "react"
import user from "./images/user.svg"
import emptystar from './images/emptystar.svg'
import filledstar from './images/filledstar.svg'
import './style.css'



export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    
     let starIcon =   contact.isFavorite? filledstar : emptystar  // Your code here
    
    function toggleFavorite() {
        setContact(prevContact =>(
            {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        ))
    }
    
    return (
        <main>
            <article className="card">
                <img src={user}  className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
