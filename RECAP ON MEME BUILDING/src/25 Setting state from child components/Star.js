export default function Star(props){
    return(
        <img 
            src={props.isFilled} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}