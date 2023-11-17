const nums = ['4','5','6','7','8','9','16',]

const sqrts = nums.map(item => (Math.sqrt(item)))
//console.log(sqrts)
//console.log("**** its the same as the below ***")
const sqr = nums.map(item => (Math.sqrt(item)))
//console.log(sqr)

//console.log('***********************')


const list = nums.map(items => items =`<li>${items}</li>`)
//console.log(list)
//console.log("**** its the same as the below ***")

const lists = nums.map(items => `<li>${items}</li>`)
//console.log(list)
const newlist = list.join('')
//console.log(newlist)


//console.log("******* Given this below *******")

const people = [
    {"first": 'Gandalf', 'last': 'Greyjoy', 'age': '1000'},
    {"first": 'John', 'last': 'Snow', 'age': '16'},
    {"first": 'Arya', 'last': 'Stark', 'age': '14'},
    {"first": 'Harry', 'last': 'Potter', 'age': '11'}
]

const fullName = people.map(items => items= `${items.first} ${items.last}`)
//console.log(fullName)

console.log('*********************************')

const fulName = people.map(person =>person = ({
    fullName: `${person.first} ${person.last}`,
    age: `${person.age}` 
})) 
console.log(fulName)