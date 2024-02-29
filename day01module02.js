
// build in function example 

//math fuction for getting maximum
console.log(Math.max(10,12));
// floor for floor value
console.log(Math.floor(3.927));
// return float number from string 
console.log(parseFloat('3.99'));
// date in milesecound
Date.now();

//custome function 

console.log( 'working');


function calculatebill(){
var a=10;
var b=20;

var sum= a+b;
var div= a/b;
var mul =a*b;
var sub =a-b;
let x='new added'

console.log('Sum of a and b'+ sum);
console.log('Sub of a and b'+ sub);
console.log('div of a and b'+ div);
console.log('mul of a and b'+ mul);
console.log('running funstion');
var combine = {sum,div,mul,sub}
return combine;
}

var returnvalueofcalculatebill = {sum: calculatebill().sum , div: calculatebill().div,mul:calculatebill().mul};


console.log('fatching value of calculaebill funstion '+ returnvalueofcalculatebill.div +'  '+ returnvalueofcalculatebill.mul +'     ' +alert(returnvalueofcalculatebill.mul));



// parameter and argument with mathod 
console.log('parameter and argument with mathod ');

function calculatebill(a,b){
    // var a=10;
    // var b=20;
    
    var sum= a+b;
    var div= a/b;
    var mul =a*b;
    var sub =a-b;
    let x='new added'
    
    console.log('Sum of a and b'+ sum);
    console.log('Sub of a and b'+ sub);
    console.log('div of a and b'+ div);
    console.log('mul of a and b'+ mul);
    console.log('running funstion');
    var combine = {sum,div,mul,sub}
    return combine;
    } 

    console.log(calculatebill(10,100));