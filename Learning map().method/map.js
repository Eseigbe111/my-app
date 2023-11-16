const products=[
    {
        name:'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price:1500,
        count: 2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    }
]

 const totalProduct = products.map(item => item.price * item.count)

 console.log(totalProduct)
 console.log('**************************************')

 const totalProd = products.map(item => ({
    name: item.name,
    totaValue: item.price * item.count
 }))

console.log(totalProd)
console.log('**************************************')

const numstr = ['1','2','3','4',]
const num = numstr.map(Number)
const numb = numstr.map(items => Number(items))

console.log(num)
console.log(numb)