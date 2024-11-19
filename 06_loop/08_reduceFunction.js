// Array.reduce()
// usfull in shopping kart
const myNums = [1,2,3,4,5]

// using function
// myTotel = myNums.reduce( function (acc ,currVal ){
//     console.log(`acc: ${acc} and current value ${currVal}`)
//     return acc + currVal
// },0)
// console.log(myTotel)

// using arrow function
myTotel = myNums.reduce( (acc ,currVal )=>{
    console.log(`acc: ${acc} and current value ${currVal}`)
    return acc + currVal
},0)
console.log(myTotel)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 3999,
    },
    {
        itemName: 'py course',
        price: 999,
    },
    {
        itemName: 'mobile dev course',
        price: 5999,
    },
    {
        itemName: 'data science course',
        price: 9999,
    },
    {
        itemName: 'design course',
        price: 4999,
    }
]

const priceToPay = shoppingCart.reduce( (acc,item)=>(acc + item.price),0)
console.log(priceToPay)