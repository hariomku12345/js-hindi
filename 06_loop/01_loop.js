// for loop

// for( let i=1; i<= 10;i++)
// {
//     console.log(`outer loop ${i}`)
//     for(let j=1;j<=10;j++)
//     {
//         console.log(` ${i} * ${j} = ${i*j}`)
//     }
// }

let myArray = ['hariom','sanjeet','krishna']
for(let index = 0;index < myArray.length;index++)
{
    const element = myArray[index]
    console.log(element)
}

// break and continue
// break ke baad pura loop ke bahar aa jata h
// continue se ek baar maaf kar do ek baaar skip par loop se bahar nahi jata h