/**
 1. create the following array called "row"
 [10,20,30,40,50]

 2. create a new array called "matrix" that:
 - maps over "row" and return each item, but in an array
 (we should have a 2-dimensional array as a result)

 print out both arrays 

 "matrix" should look like this:
 [[10], [20], [30], [40], [50]]

 */


 const row = [10,20,30,40,50]
 const matrix = row.map(mat => ([mat]))
 const matr = row.map(mat => {
    return [mat]
 })
 console.log(matr)
 console.log(matrix)

 console.log('********** Also the same as thwe above ************')

 const matri = row.map(number => {
    const ma = []
    ma.push(number)
    return ma
 })
 console.log(matri)