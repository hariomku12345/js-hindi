// map function  same as filter

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNumber.map((num) => num + 10)
console.log(newNum);

// chaining in map -> multiple baar map

const myNumber2 = [1,2,3,4,5,6,7,8,9,10]

const newNum2 = myNumber
                .map((num) => num * 10)
                .map((num)=>num +1)
                .filter((num) => num >= 40)
console.log(newNum2);
