/**
 1. create an array called 'bools' of the following booleans:
 [true,true,false,true,false,false]

 2. Map ever 'bools' and do the ffg:
 - if "true", return random in its place
 - if "false", return 0
 
 3.print out both arrays
 */

 const bools =  [true,true,false,true,false,false]

 const newbools = bools.map(item=> {
    if (item){
        return Math.floor(Math.random()*100) + 1
    } else {
        return 0
    }
 })

 console.log(newbools)