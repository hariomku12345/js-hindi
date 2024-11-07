// shopping kart wala

function calculateCartPrice(...num1){
    // ...num1 is spread operator and rest operator
    // it's return array 
    return num1
}
console.log(calculateCartPrice(200,800,4285,51))
//  it's return array,after this we perform addion of all element of array

// how to pass object in function

const user = {
    username: "hariom ku",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}rs.`)
}
// handleObject(user)

// handleObject({
//     username:"enna",
//     price:399
// })


// array pass in function
const myNewArray = [200,325,12,9]
function returnSecoundValue(getArray){
    return getArray[1]
}
console.log(returnSecoundValue(myNewArray))
console.log(returnSecoundValue([22,'boy',89,'apple']))