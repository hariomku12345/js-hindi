// stack (primitive datatype)
//  Heap  (non-primitive)

let myName = "hariom"
let newName = myName
newName = "hello"

console.log(newName)

let userOne = {
    email: "usergoogle.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "hariom@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)