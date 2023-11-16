export default function Joke({Setup, Punchline}) {
    return(
       /* <div>
            <h2>{props.Setup}</h2>
            <h3>{props.Punchline}</h3>
        </div>*/
        <div>
            <h2>{Setup}</h2>
            <h3>{Punchline}</h3>
            <hr /> 
        </div>
    )
}