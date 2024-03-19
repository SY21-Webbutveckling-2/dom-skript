// 4. Skapa element

let header = document.getElementsByTagName('header')[0];
let main = document.getElementsByTagName('main')[0];

let btn = document.createElement('button');
btn.innerText = 'Min knapp';
btn.classList.add('button')

header.append(btn);


main.append(btn);