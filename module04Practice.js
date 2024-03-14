const p = document.querySelectorAll('div');
const div = document.querySelectorAll('p');
const img = document.querySelectorAll('.w3-content .w3-third img');
const header = document.querySelector('h1');
console.log(header.textContent); // get text contant from heading
console.log(header.innerText); // get text from css in header
console.log(header);
console.log(img);
console.log(p);
console.log(div);
console.log(p);
const p1 = document.getElementById('#p');
const cheking = document.querySelector('.chek');
console.log(document.textContent);// Add the text available in tag and also hidden text also 
console.log(cheking.tagName);
console.log(cheking.innerHTML);
console.log(cheking.innerText);
cheking.textContent = 'chenge is applied';
cheking.insertAdjacentText('afterend','new');
console.log(cheking.textContent);

console.log(document.body);

const checkMap = new Map();
checkMap.set('QA','mayur');
checkMap.set('dev','devlop');
checkMap.set('seo','close');
checkMap.set('','empty');
checkMap.set('devops','ragav');
checkMap.set('keyless');

console.log(checkMap.values());


const person = [{name: 'Jaimin', gender: 'male', age: 18}, 
    {name: 'Vishrant', gender:'male', age: 32}, 
    {name: 'Umesh',gender: 'male' , age: 37}, 
    {name: 'Krishna', gender: 'female', age: 33}, 
    {name: 'Nikita', gender: 'female', age: 29}];

   // const finder = person;


   
const finder =   person.filter((element) => (element.gender ===  'female' && element.age > 30 && element.age < 40)).map((element) => element.name);
    console.log(finder);
    //person.forEach((person.name) =>{if(person(na=>na.gender==='male' && na.age <40 && na.age>30 ,na.name)==='name')console.log(arrayExample)});


//    person.forEach(valueOf().gender==='male')

  //  person.forEach(()=>person.gender==='male')
