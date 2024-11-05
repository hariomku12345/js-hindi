const marval_hero = ["thor","ironman","spiderman"]
const dc_hero = ["superman","flash","batman"]

// marval_hero.push(dc_hero)
// console.log(marval_hero)
// console.log(marval_hero.length)
// console.log(marval_hero[3])
// console.log(marval_hero[3][2])

// const allHero = marval_hero.concat(dc_hero)
// console.log(allHero.length)
// console.log(allHero)


// spreade operator
// it's work is to add two array, it is better than concate and push
// const all_new_hero = [...marval_hero,...dc_hero]
// console.log(all_new_hero)

// const another_array = [1,2,3,[4,5],7,[8,9,[10,11]]]
// console.log(another_array)
// flat is use for same level array element karne ke liye
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("hariom"))
// console.log(Array.from("hariom"))
// console.log(Array.from({name : "hariom"})) // intresting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))