import React from "react"
import './style.css'
import user from './images/user.svg'
import emptystar from './images/emptystar.svg'

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    
    function toggleFavorite() {
        console.log("Toggle Favorite")
        
    }
    
    return (
        <main>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <img 
                        src={emptystar} 
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
