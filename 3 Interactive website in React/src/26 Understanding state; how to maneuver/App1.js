import React from "react"

export default function App() {


const [messageArray, setMessages] = React.useState(
    [{
        name: "temple",
        age: 13
    }, 
    {
        name: "john",
        age: 45
    },
    {
        name: "faith",
        age : 56
    }
    ])

    setMessages(prevMessageArray => {
        prevMessageArray = [...messageArray]
        const newMessageArray = [...prevMessageArray] 
        newMessageArray[1] = {...newMessageArray[1], age: 50}

        return newMessageArray

    })
    
}

