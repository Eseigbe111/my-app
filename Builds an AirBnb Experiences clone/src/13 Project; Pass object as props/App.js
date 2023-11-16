import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Cards"
import "./style.css"
import data from './data'


export default function App() {
    // <Hero />
const cards = data.map(item => {
return (
    <Card 
        key={item.id}
        item={item}
    />
)
})        

return (
<div>
    <Navbar />
    <section className="cards-list">
        {cards}
    </section>
</div>
)
}