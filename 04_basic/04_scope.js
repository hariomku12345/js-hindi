// scope part 2
function one(){
    const username = 'hariom'

    function two(){
        const website = "youtube"
        console.log(username)
        // child can access parents properties
        // but not parents can access child property
    }
    // console.log(website)
    // two()
}
// one()

if(true){
    const username = "hariom"
    if(username === "hariom"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // yhis line gives error
}

//  ++++++++++++++ interesting  +++++++++++++++
console.log(addone(3))
function addone(num){
    return num + 1
}
// ham decleration se pahle function call kar sakte h isme
console.log(addone(5))

// console.log(addTwo(6)) // this line gives error
// addTwo also called expression
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6))