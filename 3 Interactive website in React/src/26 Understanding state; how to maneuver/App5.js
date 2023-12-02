import React from "react"

export default function App() {


const [messageArray, setMessageArray] = React.useState(
    [{
        name: "temple",
        age: 13,
        sign: 'dicor',
        on: true
    }, 
    {
        name: "john",
        age: 45,
        sign: 'div',
        on : false
    },
    {
        name: "faith",
        age : 56,
        sign: 'big',
        on: true
    }
    ])

    function newChanges(){
        setMessageArray(prevMessageArray=> {
            prevMessageArray=[...messageArray]
            const updatedMessageArray = [...prevMessageArray]
             updatedMessageArray[0] = {...updatedMessageArray[0], name: 'dof', age: 43 }
        } )
    }

    return (
        <p></p>
    )
}