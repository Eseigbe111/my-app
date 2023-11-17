import Navbar from "./Navbar"
import Card from './Card'
import './style.css'
import data from './data'


export default function App() {

    const cards = data.map((item, index) =>{
        let line
        if (index !== data.length - 1){
            line = <hr />
        } else {
            line=''  /* or null*/
        }


        return(
            
            <div>            
                <Card 
                    key={item.id}
                    {...item}
                          
                />
                {line}
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