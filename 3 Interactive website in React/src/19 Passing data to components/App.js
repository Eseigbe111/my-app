import React from "react"
import Header from "./Header"
import Body from "./Body"
import './style.css'

export default function App() {
    const [user, setUser] = React.useState("Joe")

    
    return (
        
        <main>
            <Header user1 = {user}/>
            <Body   user1 = {user}/>
        </main>
    )
}
