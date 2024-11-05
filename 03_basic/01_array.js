// array

const myArr = [0,3,54,69,2,4]
const myHero = ["hariom",5,true,"nagraaj"]

// console.log(myHero[0])
// console.log(myHero[1])
// console.log(myHero[2])
// console.log(myHero[3])

// const myarr2 = new Array(1,2,3,4)
// console.log(myarr2[1])
// console.log(myarr2.length)
// console.log(myarr2[myarr2.length-1])

// Array methods

// myArr.push(6)
// console.log(myArr)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()

// myArr.unshift(9)
// unshift pura array ko shift kar deta h aur suru me given number ko add kar deta h
// console.log(myArr)

// myArr.shift()
// isme koi parameter nahi dete hye suru ke index ke element ko hata deta h
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof(myArr))
// console.log(typeof(newArr))

// slice , splice

console.log("A" , myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C", myArr)