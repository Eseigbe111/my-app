import twitter from './images/Twitter Icon.png'
import facebook from './images/Facebook Icon.png'
import instagram from './images/Instagram Icon.png'
import github from './images/GitHub Icon.png'

export default function Third() {
    return(
        <div className='third'>
            <a href='https://twitter.com/EseigbeTemple' target='_blank'><img src={twitter} className='img-0'/></a>
            <img src={facebook} />
            <img src={instagram} />
            <a href='https://github.com/Eseigbe111' target='_blank'><img src={github} /></a>    
        </div>
    )
}