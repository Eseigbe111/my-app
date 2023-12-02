import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsshown] = React.useState(false)

    function toggle(){
        console.log(isShown)
        setIsshown(prevIsshown => prevIsshown = !isShown) /* or use this !prevIsshown */
        
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button onClick={toggle}>show unchline</button>
            <hr />
        </div>
    )
}