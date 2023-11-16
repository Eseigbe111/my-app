import Navbar from "./Navbar"
import Card from './Card'
import './style.css'
import data from './data'


export default function App() {

    const cards = data.map((item, index) =>{
        return(
            
            <div>
                <Card 
                    key={item.id}
                    {...item}
                    
                />
                {index !==data.length - 1  && <hr />}
            </div>
        )
    })


    return(
        <div className="container">
            <Navbar />
            {cards}
        </div>
    )
}