// scope
// {} curly braces is scope
// {} ke ander hi scope use hona chaiye na ki out of scope
if(true){
    let a =10;
    const b = 20
    var c = 30 // c print out of scope,that is wrong
    d = 5  // d also print out of scope,that is wrong
}
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// in above code a and b does not print but c print
// but all tree are out of scope but it print,so we
// does not use var.


// console ke ander ka scope alag h aur code inverment wala 
// scope jo node use kar ke karte h o alag h