console.log('work');

const objectAdded ={
    age : 29,
    name :'mayur',
    '007' :'bond',
    profetion : 'QA',
    compuny: {
        compunyName : 'brevitaz',
    }
};
const objectAdded1 ={
    age : 22,
    name :'sahil',
    '007' :'non',
    profetion : 'sdet',
    compuny: {
        compunyName : 'Allego',
    }
};
console.log(objectAdded.compuny.compunyName);
console.log(objectAdded);
objectAdded.age =23;
console.log(objectAdded.age);
console.log(objectAdded['007']);
delete objectAdded['007'];
console.log(objectAdded['007']);

const objectAdded3 = objectAdded1;  // this will create referance for objectAdded1 to objectAdded3
const objectAdded2 ={...objectAdded1};
objectAdded3.name ='keyur';
console.log("object from objectAdded3 constracter "+ objectAdded3.name);
console.log("object from objectAdded1 constracter "+objectAdded1.name);
objectAdded2.name ='max';
objectAdded1.name ='rokx';

console.log("object from objectAdded2 constracter "+ objectAdded2.name)
console.log("object from objectAdded1 constracter "+objectAdded1.name);


const combineOprater= {
    ...objectAdded,
    ...objectAdded3,
    
}
console.dir(combineOprater);

console.log('map is starting from here only');

const newMap = new Map();
newMap.set('name' ,'sahil');
newMap.set('001','nonb');
newMap.set('profetion','sdet');
newMap.set('agr','200');
newMap.set('hello','greetings');
//newMap['sample'] ='color';
const entre = newMap.entries()
console.log(newMap.size);
//newMap.clear();
console.log(newMap.size);
console.log(newMap);

const Forloop   = document.querySelector('.newMap');
for(const name of newMap){
    console.log(name);
}
    