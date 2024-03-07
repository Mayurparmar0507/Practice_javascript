const p = document.querySelectorAll('div');
const div = document.querySelectorAll('p');
const img = document.querySelectorAll('.w3-content .w3-third img');
const header = document.querySelector('h1');
// console.log(header.textContent); // get text contant from heading
// console.log(header.innerText); // get text from css in header
// console.log(header);
// console.log(img);
// console.log(p);
// console.log(div);

const cheking = document.querySelector('.chek');
console.log(document.textContent);// Add the text available in tag and also hidden text also 

console.log(cheking.innerHTML);
console.log(cheking.innerText);
cheking.textContent = 'chenge is applied';
cheking.insertAdjacentText('afterend','new');
console.log(cheking.textContent);

