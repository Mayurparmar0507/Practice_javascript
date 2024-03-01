console.log('hello I am here');

function india(){
    const country = 'i am india';
  
    function gujarat(){
        const state='i am in india name gujarat';
        console.log(state);
        console.log(country);
    }
    return gujarat();
}

const closure = india;
closure();

function good(title=''){
    const ti = title.toUpperCase();
    return function Time(daytime){
        return `Hello ${ti} ${daytime}`
    }
}
const Good = good('Good');
const veryGood = good('very Good');
console.log(Good('Morning'));
console.log(veryGood('evening'));
console.log(good('morning')('good'));// can Assign value to inter funstion by another round brecket 
