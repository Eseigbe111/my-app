import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function WatchWidth() {
            console.log('setting up')
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", WatchWidth)

        return function() {
            console.log("Cleaning up")
            window.removeEventListener("resize", WatchWidth)
        }
        
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
