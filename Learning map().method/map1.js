const numbers = [1, -1,-2, 2, 3]

const filtered = numbers.filter(n => n >= 0)

const mapped = filtered.map(n => `<li>${n}</li>`)

const html = `<ul> ${mapped.join('')} </ul>`

//console.log(html)
console.log('1  *************************************')

const words = ['temple','john','june','sas']

const word = words.map(n => n = n.charAt(0).toUpperCase() + n.slice(1))

//console.log(word)
console.log("2  *************************************")

const digits = [1,2,3,4,5]

dig = digits.map(valueIndex)

function valueIndex(value,index) {
    return value * index
}

//console.log(dig)
console.log('3  ###################################')

let smallwords = ['yours', 'mine', 'you']
for (let  i=0; i< smallwords.length; i++) {
smallwords[i] = smallwords[i][0].toUpperCase() + smallwords[i].slice(1)

}

//console.log(smallwords)
console.log('4  ##################################')

let name = ['yours', 'mine', 'you']
for (let  i=0; i< name.length; i++) {
    name[i] = name[i][0].toUpperCase() + name[i][1].toUpperCase()  +name[i].substring(2)
}

//console.log(name)
console.log('5  ##################################')

let nam = ['yours', 'mine', 'you']
for (let  i=0; i< nam.length; i++) {
    nam[i] = nam[i][0].toUpperCase() + nam[i][1].toUpperCase()+ nam[i][2].toUpperCase() +nam[i].substring(3)
}

console.log(nam)
console.log('6  ##################################')
