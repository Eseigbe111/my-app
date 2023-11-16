import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Cards"
import "./style.css"
import data from './data'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    // <Hero />
    const components = data.map(items => {
        return <Card 
                img = {items.coverImg}
                rating= {items.stats.rating}
                reviewCount={items.stats.reviewCount}
                location={items.location}
                title={items.title}
                price={items.price}
                
            />
    })
return (
<div>
    <Navbar />
    {components}
</div>
)
}