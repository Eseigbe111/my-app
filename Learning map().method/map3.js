const ages = [16, 18, 20]
const names = ['John','Jane','Mark']

const details = names.map((name,index) => ({
    name: name,
    age: ages[index]
}))

//console.log(details)

console.log("******* ******  *********")
const existingArray = ['decode', 'dom', 'javascript']
const newArray = existingArray.map(function(value) {
   return value  
})
//console.log(newArray)
console.log('*********************')

const newAray = existingArray.map(function(value,ind) {
    return `${ind} ${':'} ${value}` 
})

//console.log(newAray)
console.log('*********************')
 

const newArr = existingArray.map(function(value,ind,arr) {
    return `${arr}` 
})

console.log(newArr)
console.log('*********************')