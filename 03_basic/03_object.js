// we have 2 method to make object
// 1 . literals
// 2 . constructor

// singleton (when we make object using constructor)
// object literals 

const mySym = Symbol("key1")

const jsUser = {
    name: "Hariom",
    "full name": "hario kumar mahto",
    age: 22,
    [mySym]: "newkey1",
    location: "patna",
    email: "hariomkumar5190@google.com",
    isLogin: false,
    lastLoginDay: ["monday","friday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])
// // console.log(jsUser.mySym)
// console.log(typeof (jsUser[mySym]))
// console.log(typeof mySym)

// jsUser.email = "hariomkumar5190@cgatgpt.com"
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.email = "hariomkumar5190@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user, aana loves you");
}
console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}  loves you`)
}
console.log(jsUser.greetingTwo())