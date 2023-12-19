import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import './style.css'


export default function App(props) {
    const [darkMode, setdarkMode] = React.useState(props.darkMode)
    function changeDarkMode(){
        setdarkMode(prevDarkMode => !prevDarkMode)
        console.log("clicked")
    }
    
    return (
        <div className= "container" >
            <Navbar  colorChange={darkMode} toggleDarkMode= {changeDarkMode}/>
            <Main colorChange={darkMode} />
        </div>
    )
}