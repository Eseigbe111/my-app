/*
    1. create an array called "practice" with numbers 25-30 (inclusive)
    2. create another array using map that squares each number in "practice"
    3. print out "practice" and the new mapped array
*/ 
const practice = ['25', '26', '27', '28','29','30']

const newpractice = practice.map(number => ({
    practice: number * number,
    newnum: number * 7
}))
console.log(practice)
console.log(newpractice) 