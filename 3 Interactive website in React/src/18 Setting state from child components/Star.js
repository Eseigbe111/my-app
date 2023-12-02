import starFilled from './images/star-filled.svg'
import starEmpty from './images/star-empty.svg'


export default function Star(props){
    const starIcon = props.isFilled ? starFilled : starEmpty
    return(
        <img 
            src={starIcon} 
            className="card--favorite"
            onClick={props.handleClick}
        
        />
    )
}