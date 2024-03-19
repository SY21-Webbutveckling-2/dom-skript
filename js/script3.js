// 3. Hantera ett elements attributer och egenskaper

let el = document.querySelector('main>div:nth-child(3)');

el.style.backgroundColor = 'green';

// console.log(el.style);

el.setAttribute('mitt-attribut', 'hej');

let light = document.querySelector('.light');

function toggleLight() {
    // if (light.classList.contains('on')) {
    //     light.classList.remove('on');
    // } else {
    //     light.classList.add('on');
    // }
    light.classList.toggle('on');
}

let test = document.getElementById('test');
console.log(test.id);

let myText = document.getElementById('my-text');
let myCheckbox = document.getElementById('my-checkbox');

console.log(myText.value);

myCheckbox.checked = false;
myText.value = 'dhsauids';