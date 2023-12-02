import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Only display the punchline paragraph if 'isShown' is true
     * 
     */
    const [isShown, setIsshown] = React.useState(false)

    function toggle(){
        console.log(isShown)
        setIsshown(prevIsshown => prevIsshown = !isShown) /* or use this !prevIsshown */
        
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>show Punchline</button>
            <hr />
        </div>
    )
}