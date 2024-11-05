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
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"1",2:"2"}
const obj2 = {3:"a",4:"2"}
const obj4 = {5:"a",6:"2"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

// database se jo value aata h o array of object ke form me aata h

const users = [
    {
        id: 1,
        email:"hari@gmsil.com"
    },
    {

    }
]
console.log(users[0].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogin'))