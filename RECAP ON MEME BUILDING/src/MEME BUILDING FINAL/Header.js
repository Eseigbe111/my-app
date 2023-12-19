
import trollface from './images/Troll Face.png'


export default function Header() {
    return (
        <div>
            <img className='troll-face'
                src={trollface} />
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </div>
    )
}
