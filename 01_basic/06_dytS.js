// data ko kis tarah memory me rakha gya h us hisaab se
// data 2 type ke hota h

//1.  primitive datatype

// all primitive datatype are call by value.it means hamko memory ko refrence
//  nahi diya jata h isme jo bhi kaam karte h oh copy me kaam karte h
//  7 type : string,Number, Boolean , null , undefined , symbol,BigInt

const score = 100
const scoreValue = 100.36

const isLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const newId = Symbol('123')
console.log(id == newId)
console.log(id === newId)

// 2.  Refrence type(non primitive)

// Array,object,function

// array
const hero = ["saktimaan","naagraj","krish"]

// object

let myObj ={
    name: "hariom",
    age: 22,
}

// function 
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof (myFunction))
console.log(typeof id)