// immediately invoked function expression (IIFE)
// syntex
//  (function definition)(execution)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

// golobal scope ke polution se kai baar problem hoti h
// is us global scope ke polution ko hatane ke liye IIFE ke use kiye
// named IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();

// if we write two or more IIFE then semi column(;) is necessary
// without semicolumn it's gives error
(function sayhello(){
    console.log("hello user")
})();

// simple IIFE
((name) => {
    console.log(`DB TWO CONNECTED ${name}`)
})('hariom')