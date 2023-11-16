/**
 1.  create the following array called 'item':
 ["light", "banana", "phone", "book", "mouse"]

 2. create an new array called "plurals" that:
 -maps over "items" and adds an 's' to each one
 
 3. print out both arrays

 4.  change it so if we see "mouse", we instead return "mice"

 */


 const item = ["light", "banana", "phone", "book", "mouse"]

 const plurals = item.map(word => {
    if (word==="mouse") {
        return 'mice' + 's'
    }
    return word + "s"
    
 })

 console.log(item)
 console.log(plurals)