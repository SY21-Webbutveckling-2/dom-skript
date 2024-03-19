// 2. Hantera ett elements innehåll

let test = document.getElementById('test');

// console.log(test.innerText);
// console.log(test.innerHTML);
// console.log(test.outerText);
// console.log(test.outerHTML);

test.innerText = '<ul> <li>Tjena</li> <li>re</li> </ul>';

// console.log(test.innerHTML);

let hej = document.getElementsByClassName('hej');

console.log(hej);

let texts = [];
for (let i = 0; i < hej.length; i++) {
    texts.push(hej[i].innerText);
}

console.log(texts);