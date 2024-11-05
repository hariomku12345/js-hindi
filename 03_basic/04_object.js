// const tinderUser = new Object()
const tinderUser = {}
// above both are same declear object
// difference only that 1st is singleton and 2nd is not

tinderUser.id = "123asd"
tinderUser.name = "hariom"
tinderUser.isLogin = false
tinderUser.status = "single"

// console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullname: {
            firstname: "hariom",
            lastname: "kumar"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userFullname.firstname);