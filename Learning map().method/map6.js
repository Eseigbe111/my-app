/**
 1. create an array called 'prices' with the following values:
 [1.23,19.99,85.2,32.87,8,5.2]
 
 2. create a new array using map called "taxedprices" that 
 - if the price is greater than 10, add 20% tax to it 
 - otherwise, do not add any tax

 3. print out both arrays
 */



 const prices = [1.23,19.99,85.2,32.87,8,5.2]

 let taxedprices = prices.map(price => {
    if (price > 10) {
        return (price + (20 * price)/100)
    } else {
        return price
    }
 })

 console.log(taxedprices)