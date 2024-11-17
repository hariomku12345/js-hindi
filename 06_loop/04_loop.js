// for each loop, very useful

const coading = ['js','ruby',"java","python",'cpp']
// syntex ->
// arrayname.forEach( callback function ) 
// callback function means write function without name

// coading.forEach( function (item){
//     console.log(item)
// })

// coading.forEach( (item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coading.forEach(printMe)

// forEach sirf item hi nahi deta h ye index aur array bhi batata h
// coading.forEach( (item , index ,arr)=>{
//     console.log(item,index)
// })


// Array ke ander object

const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]
myCoading.forEach( (value)=>{
    console.log(value.languageFileName, value.languageName )
})
// myCoading.forEach( (index)=>{
//     console.log(index ) // it gives object
// })