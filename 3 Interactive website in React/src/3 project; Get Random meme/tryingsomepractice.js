 data = [
    {
    name: "Temple",
    "lastname": "john",
    age: 24,
    height: "1.84m"
    },
    {
        name: "sam",
        lastname: "esther",
        age: 24,
        height: "1.84m"
    },
    {
        name: "lisa",
        lastname: "pre",
        age: 24,
        height: "1.84m"
    }
]

function getrandomlastName(){
    const randomNum = Math.floor(Math.random() * data.length)
    const randomIndex = data[randomNum]
    const randomlastName = randomIndex.lastname
    console.log(randomlastName)
    
}
getrandomlastName()
