// const name = "hariom"
// const repoCount = 100

// console.log(name + repoCount + "value")
//above line is outdated tady we are prefare to not use

// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)
// above code is more readable

// 2nd method is initilised string

const gameName = new String('hariom')
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('o'))

// const newString = gameName.substring(1,4)
//start index 0 include and end index 4 exclude
// console.log(newString)

// const anotherString = gameName.slice(-5,-2)
// we can use -ve indexing for slice
// console.log(anotherString)

// const newStringOne = "   hariom.   ";
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://hariom.com-20kumar"
console.log(url)
console.log(url.replace('-','%'))