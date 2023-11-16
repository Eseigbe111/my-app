import logo from './reactjs-icon 2.png'

export default function Main() {
    return(
        <div className="Main">
            <h1>Fun facts about React</h1>
            <div className='secondpart'>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including<br/>mobile apps</li> {/* u can also use max-width in css to move mobile apps to the next line*/}
                </ul>
                <img src={logo} />
            </div>
        </div>
    )
}