import React from "react"
// Understanding ternary
export default function App() {


const [messageArray, setMessageArray] = React.useState(["a", "b"])

    const availableMessages = messageArray.length !==0
    return (
        <div>
            {availableMessages && <p>i love u</p>}
        </div>
    )
}