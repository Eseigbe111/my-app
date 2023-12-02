import React from "react"

export default function App() {


const [messageArray, setMessageArray] = React.useState(
    [{
        name: "temple",
        age: 13,
        sign: 'dicor'
    }, 
    {
        name: "john",
        age: 45,
        sign: 'div'
    },
    {
        name: "faith",
        age : 56,
        sign: 'big'
    }
    ])

    function newChanges(){
        setMessageArray(prevMessageArray => {
            prevMessageArray=[...messageArray]
            const updatedMessageArray = prevMessageArray.map(item => {
                return {...item, sign : 'small'}
            })
            return updatedMessageArray
        })
        
    }

    return (
        <p></p>
    )
}