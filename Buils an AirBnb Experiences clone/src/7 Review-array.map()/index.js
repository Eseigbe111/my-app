/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
console.log("#### 1 ######")
const sqr = nums.map(numb => {
    return numb * numb
})
console.log(sqr)

console.log("*** the same with the above *******")

const sq = nums.map(numb => (numb * numb))
console.log(sq)


console.log('##### 2 #####')

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const name = names.map(word => (word[0].toUpperCase() + word.slice(1)))

console.log(name)
console.log('***** the same as the above *****')

const nam = names.map(word => (word[0].toUpperCase() + word.substring(1)))
console.log(nam)

console.log('***** the same as the above *****')
const na = names.map(word => {
    //return word[0].toUpperCase() + word.substring(1)  or 
     return `${word[0].toUpperCase()}${word.substring(1)}`
})
console.log(na)

console.log('##### 3 #######')
/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const poke = pokemon.map(word => `<p>${word}</p>`)
console.log(poke)

console.log('***** the same as the above ******')

const pok = pokemon.map(word => word = (`<p>${word}</p>`))
console.log(pok)

console.log('***** the same as the above ******')

const po = pokemon.map(word => {
    return '<p>' + word + '</p>' 
    // or return `<p>${word}</p>`
})
console.log(po)