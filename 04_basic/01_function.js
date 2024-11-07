// function

function sayMyName(){
    console.log('H')
    console.log('A')
    console.log('R')
    console.log('I')
    console.log('O')
    console.log('M')
}
// -> onle sayMyName is refrence and sayMyName() is function call
// sayMyName()

// -> we make function that we use anywhere not only print somthing

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// }
// const result = addTwoNumber(5,9)
// addTwoNumber(3,'5')
// addTwoNumber(5,'a')
// addTwoNumber(null,5)

// console.log("result: ", result)
// iska result undefined aayega kyuki function kuch return
// nahi kiya h sirf print kiya h jab return hi nahi kiya h 
// tho variable result me kya store karega, ager console.log
// ke jagh return rahta tho result print karta ex..


function addTwoNumber(number1 , number2){
    return (number1 + number2)
}
const result = addTwoNumber(5,9)
// console.log('result:',result);

// function isLogin(username){
//     if(username === undefined)
//     // if(! username)
//     {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} is just loginned.`
// }
// console.log(isLogin('Hariom'))

// const result2 = isLogin('Hariom')
// console.log(result2)

// console.log(isLogin())
// if we do not give argument then its return undefined


function isLogin(username = 'Hariom'){
    // (username = 'Hariom') se ager ham ko argument na de tho
    //  defult me username ke jagh hariom aayega aur if wala line kabhi true nahi hoga
    if(! username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} is just loginned.`
}

console.log(isLogin())
console.log(isLogin('priyanka'))