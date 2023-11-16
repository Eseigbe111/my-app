import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Cards"
import "./style.css"
import data from './data'


export default function App() {
    
const cards = data.map(item => {
return (
    
    <Card 
        key={item.id}
        {...item}
    />
)
})        

return (
<div className="container">
    <Navbar />
    <Hero />
    <section className="cards-list">
        {cards}
    </section>
</div>
)
}