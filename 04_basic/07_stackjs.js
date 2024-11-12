// execution stack and call stack

// javascript execution context -> how to run a js code code ko 2 phase
// me run karti h
// jab bhi javascript ko koi code dete h o sabse pahle global execution context banta h
// aur global execution context ko this variable ke ander rakh diya jata h

// browzer ka global execution context alag hota h aur nodejs ya dusra envorment ka alag aata h
// browzer ka this ka value window object hota h

// we have also function execution context and eval execution context

// phase -> memory allocation phase
//       -> execution phase

// let val1 = 10;
// let val2 = 5;
// function addNum(num1,num2){
//     let totel  = num1 + num2
//     return totel
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(12,8)

// 1-> global execution ->  this

// 2-> memory allocation phase
//    val1 -> undefined
//    val2  -> undefined
//    addNum ->  defination
//    result1 -> undefined
//    result2 -> undefined

// 3-> execution phase
    //    val1 = 10
    //    val2 = 5
    //    addNum -> new variable envorment + execution thread


//  call stack