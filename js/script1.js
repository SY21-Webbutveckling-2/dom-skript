// 1. Hitta element

let test = document.getElementById('test');

console.log(test);

let hej = document.getElementsByClassName('tjena');

console.log(hej);

let h1 = document.getElementsByTagName('h1')[0];

console.log(h1);

// console.log(h1.parentElement);
let mainChildren = document.getElementsByTagName('main')[0].children;
// console.log(mainChildren);
console.log(h1.parentElement.children);

let x = document.querySelectorAll('main>div:nth-child(3)');
console.log(x);
