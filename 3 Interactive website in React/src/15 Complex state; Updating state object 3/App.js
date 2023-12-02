import React from "react"
import './style.css'
import user from './images/user.svg'
import starempty from './images/star-empty.svg'
import starfilled from './images/star-filled.svg'

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     *  Then use the starIcon value to display the correct image
     */
    
     let starIcon = (contact.isFavorite)? `${starfilled}` : `${starempty}`   // Your code here
     
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact => ({ 
            ...prevContact, 
            isFavorite: prevContact.isFavorite? false : true
        }))
            
    }
    
    return (
        <main>
            <article className="card">
                <img src={user} className="card--image" />
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
