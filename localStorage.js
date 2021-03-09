'use strict';

// localStorage.setItem('number', 5);

// localStorage.removeItem('number')
// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
};

if (localStorage.getItem('bd') === 'changed') {
    form.style.backgroundColor = 'red';
} 

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bd') === 'changed') {
        localStorage.removeItem('bd');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bd', 'changed');
        form.style.backgroundColor = 'red';
    }
})

const person = {
    name: 'Kirill',
    age: 25,
};

const serializedPersone = JSON.stringify(person);

localStorage.setItem('kiril', serializedPersone);

console.log(JSON.parse(localStorage.getItem('kiril')))