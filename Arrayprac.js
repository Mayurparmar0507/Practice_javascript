console.log('works');

const arrayPrac= ["mayur",'sahil','jaimin','ankit','maulik',56,90,"gopa"];

const sampleArray =["mayur",'sahil','jaimin','ankit','maulik'];
console.log(sampleArray); 
console.log(typeof arrayPrac);
console.log(arrayPrac);  

const concatingArray =[...arrayPrac.slice(0,3),'concat_text',...arrayPrac.slice(4,9)];
console.log(concatingArray)
console.log(arrayPrac[1]);
let length = arrayPrac.length;
const stri = sampleArray.toString();
sampleArray.flat(3);
sampleArray.indexOf('ankit',1);
const dat ='maulik';
if(sampleArray.includes(dat)){
    console.log(`sampleArray contain ${dat} length of practice array is ${length}`);
}
else if (sampleArray.includes('ankit')){
    console.log('pass massge to ankit');
}
else{
    console.log("no one is available");
}
console.log(sampleArray.sort());
console.log(arrayPrac.reverse());

const combineArray =[...arrayPrac,'and',...sampleArray];
console.log(combineArray+[...'mayur']);
//create spred items
const Arrysprate = [...'mayur'];
console.log(Arrysprate);
//const rray =[];

const con = Array.from({length:10},(function(intem,index){
    return 'staticObject';
}));
console.log(con);

console.log(Array.of('mayur','prahil','swagat'));
const arrayFrom = Array.from({length :10, function(item,index){
    return index;
}}); 
//arrayPrac => name=> arrayPrac === 'mayur');

const mayurIndex = arrayPrac.findIndex((arrayPrac) => {if(arrayPrac==='mayur'){
     return true
}
    }
    );

    console.log([`${mayurIndex}`,...arrayPrac]);
const objectArray =[
    {name:'mayur',rollNumber:01},
    {name:'dhaval',rollNumber:02},
    {name:'vishal',rollNumber:03},
    {name:'devyang',rollNumber:03},
    {name:'rajan',rollNumber:05},
    {name:'chirag',rollNumber:06},
];
    function deleteName(id,name){
        const numberName = objectArray.findIndex(objectArray => objectArray.id===id? 0:1);


    }


    const objectArray1 ={
        rollNumber:01,
        rollNumber1:02,
        rollNumber3:03,
        rollNumber4:03,
        rollNumber5:05,
        rollNumber6:06,
    };
//console.log(objectArray1.keys(objectArray1));
//(objectArray1));

    // const objectArray1 = {
        
    // }object

    const findelement = objectArray.find(objectArray => objectArray.name='dhaval' ?1:0);
    console.log(findelement);
