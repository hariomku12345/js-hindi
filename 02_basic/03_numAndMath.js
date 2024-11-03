// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// we can make number to string and apply all property of string on it
// console.log(balance.toString().length)

// point . ke baad kitna 0 hoga uske liye tofixed use karte h
// console.log(balance.toFixed(3))

// const otherNum = 23.1253

// precision show totel kitna digit dikhana h
// console.log(otherNum.toPrecision(4))

// const hundred = 1000000
// console.log(hundred.toLocaleString())
// console.log(hundred.toLocaleString('en-IN'))

// ++++++++++++++ Maths +++++++++++++++

// console.log(Math.abs(-7))
// Math.abs() convert - to + only not + to -.
// console.log(Math.abs(7))

// console.log(Math.round(4.6))
// Math.round give round of value
// math.floor and math.cell can use for lower ya upper lena h

// console.log(Math.max(5,9,8,2,1,7))
// Math.max gives maximum value of a array

// console.log(Math.min(5,9,8,2,1,7))
// Math.max gives manimum value of a array

// console.log(Math.random())
// Math.random() very important

// console.log(Math.floor((Math.random()*10) +1))

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min )
