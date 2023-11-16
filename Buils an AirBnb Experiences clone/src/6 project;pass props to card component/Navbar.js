import airbnb from "./images/AirBnb.png"


export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo" />
        </nav>
    )
}