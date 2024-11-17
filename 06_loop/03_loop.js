// array specific loop

// ["","",""]  array ke ander value
// [{},{},{}]  array ke ander object h 

// for of loop
// ham for of loop ka use kahi bhi like array,string ,
// number pe kar sakkte h

const arr = [1,2,3,4,5]

// for (const element of object) {
    // element ke jagah koi variable aacha ss
    // aur object ke jagah kis chij pe loop lagana h uska naam
// }
// for (const val of arr) {
//     console.log(val); 
// }

// const greeting = 'hello world !'
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`)
// }

// map -> key value pair . object

const map = new Map()
map.set('IN' , 'india')
map.set('USA',"united state of america")
map.set('Fr' , "france")

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }
// for (const [key,value] of map) {
//     console.log(key, ':-', value)
// }
for (const key in map) {
    // for in loop not useful in map.it does not work
    console.log(key)
}
// map ke tarah object pe ham ye apply nahi kar sakte h
// object ke liye for in loop ka use karte h

const myObject = {
    js:'javascript',
    cpp:'c++',
    py:'python'
}
// for (const key in myObject) {
//     console.log(`${key} shortcut for ${myObject[key]}`)
// }