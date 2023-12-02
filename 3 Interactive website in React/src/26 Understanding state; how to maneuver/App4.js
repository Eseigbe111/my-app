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
        setMessageArray(prevMessageArray =>{
            return prevMessageArray.map(item => {
                return {...item, sign: "plus", age: 60}
            })
        })
    }

    return (
        <p></p>
    )
}