//console.log('hii');
const Addparagraph = document.createElement('p');
Addparagraph.textContent =' Added new paragraph';
Addparagraph.classList.add('newp');
console.log(Addparagraph);
const image1 = document.createElement('img');
image1.src = 'img1.jpeg';
image1.alt ='picture pic';

const newDiv = document.createElement('div');
newDiv.classList.add('newAdd');
console.log(newDiv);

document.body.appendChild(newDiv);
newDiv.appendChild(Addparagraph);
newDiv.appendChild(image1);

const head = document.createElement('h2');
head.textContent = "I am heading";
newDiv.insertAdjacentElement('afterbegin',head);

const ui = document.createElement('ui');
//newDiv.appendChild(ui);

document.body.insertAdjacentElement('afterbegin',ui);

const li1 = document.createElement('li');
li1.textContent = 'first';
ui.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'second';
ui.append(li2);
const li3 = document.createElement('li');
li3.textContent = 'third';
ui.append(li3);
const li4 = document.createElement('li');
li4.textContent = 'four';
ui.append(li4);
const li5 = li4.cloneNode();
li5.textContent = 'five';
ui.append(li5);