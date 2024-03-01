const public = [
    {name:'hello', cool:false, country:'india'}
    ,{name:'mayur', cool:true, country:'canada'}
    ,{name:'akshay', cool:true, country:'USA'},
];


function publicdata(name,number){
    console.group(`detail of ${name}`);
    console.error('mayur geting fewer');
    console.warn('get medicine');
    console.groupEnd('end of detail');
debugger;
    console.group(`Table data peaple`);
    console.table(public);
    console.groupEnd('end of detail');

}