
const coading = ['js','ruby',"java","python",'cpp']

// ab ham forEach loop lagate h
// hamko pata h iske ander ek callback function likhte h
// iske ander ke value ko ham item ya language ya value kuch bhi bool sakte h

// const values = coading.forEach( (item)=>{
//     console.log(item)
//     return item
//     // forEach loop return kuch nahi karta
//     // ye undefined batata h
// })
// console.log(values)

const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter( (num) => {
    // ager ham curly brackets{} lagate h tho return 
    // keyword likhna padega  ager nahi likhte tho esse likhna padega
    // myNum.filter((num)=> num>4) tho bhi kaam karega
    return num >4
})
console.log(newNums)

// do same chij by using forEach loop

const newNum2 = []
myNum.forEach( (num)=>{
    if(num > 4){
        newNum2.push(num)
    }
})
console.log(newNum2)