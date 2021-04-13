// //indexOf

// const a = [9,8,7,5];

// if (a.indexOf(7) !== -1) {
//     console.log('yes')
// } else (
//     console.log('no')
// ) 

// includes

// const a = [9,8,7,5];

// if (a.includes(3)) {
//     console.log('yes')
// } else (
//     console.log('no')
// ) 

// // //filter

// let a = [3, 4, 5, -8, -12, 0, 4]

// let b = []
// for (let i = 0; i < a.length; i++) {
//     if (a[i] >=0) b.push(a[i])
// }
// console.log(a)
// console.log(b)

// let c = a.filter(function(ell) {
//     return ell >= 0; 
// });

// console.log(c)

const people = [
    {name: 'Kiril', age: 26, budget: 4000},
    {name: 'Petr', age: 21, budget: 6000},
    {name: 'Ivan', age: 12, budget: 3000},
    {name: 'Kate', age: 15, budget: 2000},
    {name: 'Soniya', age: 45, budget: 7000},
    {name: 'Ostap', age: 43, budget: 5500},
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// for (let person of people) {
//     console.log(person)
// }

            // forEach

// people.forEach(function(person, index, peopleArr) {
//     console.log(person);
//     console.log(index)
//     console.log(peopleArr);
// })

// people.forEach(persone => console.log(persone))

            // map
// const newPeople = people.map( persone => `${persone.name} (${persone.age})`)
// console.log(newPeople)

// const newPeople = people.map(persone => persone.age + 300)
// console.log(newPeople)

            //Filter
// const arr = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >=18) {
//         arr.push(people[i])
//     }
// }
// console.log(arr)

// const arr = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(arr)

// const arr = people.filter(person => person.age >= 18)  
// console.log(arr)

            // reduce
// let res = 0
// for (let i = 0; i < people.length; i++) {
//     res += people[i].budget
// }
// console.log(res)

// const res = people.reduce((total, persone) => {
//     return total + persone.budget
// }, 0)
// console.log(res)

            //sort

let arr = [3, 1, 13, 134, 4]
 
arr.sort()

console.log(arr)