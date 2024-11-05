// object de_structure 

const course = {
    courseName : "javascript",
    price : 1999,
    courseInstructor : "hariom"
}
// console.log(course.courseInstructor)

const {courseInstructor} = course
console.log(courseInstructor)

// we can also use
const {courseInstructor: cs} = course
console.log(cs)