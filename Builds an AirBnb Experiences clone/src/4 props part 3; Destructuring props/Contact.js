import cat1 from "./images/cat1.jpg"
import telephone from "./images/telephone.svg"
import mail from "./images/mail.svg"



export default function Contact({img, name, phone, email}) {
    return (
    
    <div className="contact-card">
        <img src={img}/>
        <h3>{name}</h3>
        <div className="info-group">
            <img src={telephone} />
            <p>{phone}</p>
        </div>
        <div className="info-group">
            <img src={mail} />
            <p>{email}</p>
        </div>
    </div>
    )
} 