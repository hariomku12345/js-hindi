// Arrow function - this keyword 
// this keyword current context ko batata h ya refer karta h

const user ={
    username:"hariom",
    price: 999,
    welcomeMessage: function(){
        // current context ke liye ham this.username or this.price
        // likhe h yaha ka current context curly bracket ke ander jo h o h
        console.log(`${this.username}, welcome to here`)
        console.log(this)
    }
}
// user.welcomeMessage()
// console.log(user.username)
// user.username = "vivek"
// console.log(user.username)
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username = 'hariom'
//     console.log(this.username)
//     // this yaha pe use nahi kar pa rha hu kyu ki
//     // ye ek function h ham kewal object ke ander hi 
//     // this ka use kar pata hu
// }
// chai()

// arrowFunction

// const chai = ()=> {
//     let username = 'hariom'
//     console.log(this)
// }
// chai()

// basic arrow function
const addTwo = (num1,num2)=> {
    return num1 + num2
}
console.log(addTwo(5,9))

//implecit return (arrow function me h)
// curly bracket{} remove kiye aur tho return keyword hatana padega
//ager {} use kiye tho return keyword likhna padega
// it is very useful in reactjs
const addTwo2 = (num1,num2)=> num1 + num2
console.log(addTwo2(5,9))