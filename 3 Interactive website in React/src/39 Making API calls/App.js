import React from "react"
import './style.css'

export default function App() {
    const [starWarsdata, setStarWarsData] = React.useState({})

    console.log("Component rendered")

    // 1. GET the data (fetch)
    // 2. Save the data to state

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data)) 

    return (
        <div>
            <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
        </div>
    )
}
