import image from "./react-logo.svg"

export default function Navbar() {
    return(
        <nav className="Navbar">
            <div className="firstpart">
                <img src={image}/>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}