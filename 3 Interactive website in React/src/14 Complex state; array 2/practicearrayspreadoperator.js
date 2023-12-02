const array1 = [1, 2, 3]
const array2 = [...array1]

const concatarray = [...array1, `Thing ${array1.length + 1}` ]

console.log(concatarray)


for (let i = array2.length; i<= 5; i++) {
    const newIndex = i + 1
    const newThing = `Thing ${newIndex}`
    array2.push(newThing)
}
console.log(array2) 