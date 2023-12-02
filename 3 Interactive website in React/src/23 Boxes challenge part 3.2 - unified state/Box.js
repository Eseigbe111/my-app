import React from "react"

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={function(){        /* or onClick={()=>props.click(props.id)} */
                props.click(props.id)}
            }
            
        >
        </div>
    )
}