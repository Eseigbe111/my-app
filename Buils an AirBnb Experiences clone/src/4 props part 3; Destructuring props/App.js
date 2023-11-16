import './style.css'
import cat1 from "./images/cat1.jpg"
import cat2 from "./images/cat2.jpg"
import cat3 from "./images/cat3.jpg"
import cat4 from "./images/cat4.jpg"
import telephone from "./images/telephone.svg"
import mail from "./images/mail.svg"
import Contact from "./Contact"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

export default function App() {

    return (
        <div className="contacts">
            <Contact 
                img={cat1}
                name="Mr. Whiskerson" 
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"

            />

            <Contact 
                img={cat2}
                name="Fluffykins" 
                phone="(212) 555-2345"
                email="fluff@me.com"
            
            />

            <Contact 
                img={cat3}
                name="Felix" 
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            
            />
            <Contact 
                img={cat4}
                name="Pumpkin" 
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            
            />
        </div>

    )
}

