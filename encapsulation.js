'use strict'

const a = {
    prop: 1, 
    f: function() {
        console.log(this.prop)
    }
}

const b = {
    prop: 2,
    f: function() {
        console.log(this.prop);
    }
}
a.f();
b.f();


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }
//     #surname = 'Petrov';

//     say = () => {
//         console.log(`name user: ${this.name} ${this.#surname}, age ${this._age}`);
//     }
//     get age() {
//         return this._age;
//     }
//     set get(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Undefinded');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.surname)
// ivan.say(); 
