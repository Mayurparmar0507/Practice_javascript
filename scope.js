const globelVar = 'Working'; //globel veriable 


var name = 'Hello'; 
let type = 'greeting';

//console.log(gvar);
//Globle funstion 
function typeOfText(){
    var name = 'namaste';// same name variable also allowed in different scope this type of variable called shedow variable 
    age = 100;
    console.log(name +' is a '+ type);
}

//console.age(age); give error for reference becouse of funstion scope

// let hello1;

//block scope
function sayCool(){
if(1==1){
    let result='cool';
    hello1 = result;
    var outOfScope= 'access me out side of this if';
}

console.log(outOfScope);// Accessable out od if block

//console.log(result); //can't access the result out of 'if' block due to let is have scop of block 
console.log(hello1)
return `${hello1}`; // ${result}
}


// scope look up

// this function always return for mayur due to globle scop of veriable 

const candidateName='mayur';
function customerName(){
    console.log(candidateName);
}
function overRideName(){
    const candidateName= 'samir';
    console.log(customerName());
}

overRideName();


//