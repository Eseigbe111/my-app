import icon from './images/icon.png'
import journal from './images/my travel journal.png'

export default function Navbar() {
    return (
        <nav>
            <img src={icon}  className='icon1' />
            <img src={journal} className='icon2' />
        </nav>
    )
}


