import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Cards"
import "./style.css"
import katie from "./images/katie-zaferes.png"



/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
            // <Hero />
    return (
        <div className="container">
            <Navbar />
            <Card 
                img = {katie}
                rating ="5.0"
                reviewCount = "(6) •"
                country ="USA"
                title ="Life Lessons with Katie Zaferes"
                price = "$136"
            />
        </div>
    )
} 
