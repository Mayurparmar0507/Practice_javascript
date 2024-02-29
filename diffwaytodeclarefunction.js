//different way to define funstions 


function sayhello(firstname){
    return `hello+${firstname}`
}
//Anonomus funstion 
// console.log('Anonomus funstion ');
// function(firstname){
//     return `hello+${firstname}`
// }

//Funstion expression 
console.log('Funstion expression');
const docname = function(firstname){
   return `hello ${firstname}`
}

// Arrow funstion 
console.log('arrow funstion');
// your ca only remove brecket if ther is only one aregyument  
// remove function keywork by Adding '=>' 
// for arrow function all things should be in one line 
const kmtom = km => km*1000; //this is arrow function 

let add =(a,b=9) => a+b;

// returning an object 

 
const  getdetail = (fname,lname)=> ({ name : `${fname} ${lname}`,age :10});

//iife funstion 
(function(age){
    console.log('running annon');
    return `you are cool ${age}`;
})(10);


//methods

const mayur = {
    name :  'mayur parmar',
    //Methods
    sayhellotome : function(){
            console.log("how are you");
            return 'fine';
    },
    // shor end method 
    saynice(){
        console.log('nice to meet you');
    },
    //Arrow funstion
    afun : () => {
        console.log('arro method');
    }
}

//callback function 

const button = document.querySelector('.clickme');

button.addEventListener('click',function(){
    console.log('get clicked');
});

setTimeout(() => {
   mayur.sayhellotome(); 
}, 1000);
