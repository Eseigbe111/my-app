import cat1 from "./images/cat1.jpg"
import telephone from "./images/telephone.svg"
import mail from "./images/mail.svg"



export default function Contact() {
    return (
    
    <div className="contact-card">
        <img src={cat1}/>
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
            <img src={telephone} />
            <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
            <img src={mail} />
            <p>mr.whiskaz@catnap.meow</p>
        </div>
    </div>
    )
} 