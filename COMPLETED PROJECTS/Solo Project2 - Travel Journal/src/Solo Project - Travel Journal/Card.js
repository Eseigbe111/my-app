import gps from './images/location.svg'

export default function Card(props) {
   
    return(
        
        <div className='card'>
            <img src={props.img}  className='img1'/>
            <div className='together'>
                <div className='first--part'>
                    <img src={gps} className='img2'/>
                    <h3>{props.country}</h3>
                    <a href='https://www.google.com/maps/@-18.9806401,29.0455394,10z?entry=ttu'>View on Google Maps</a>
                </div>
                <div className='second--part'>
                    <h2>{props.location}</h2>
                    <h4>{props.date}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    
    )
}