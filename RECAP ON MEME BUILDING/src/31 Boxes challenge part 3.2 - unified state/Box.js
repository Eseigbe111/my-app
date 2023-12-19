import React from "react"

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={function(){    // the same as  onCick={()=> props.handleClick(props.id)}
                props.handleClick(props.id)}}
        >
        </div>
    )
}