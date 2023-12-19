import React from "react"
import reactIcon from  "./images/react-icon-small.png"



export default function Navbar(props) {
 



    return (
         <nav 
            className={props.colorChange? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={reactIcon}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}