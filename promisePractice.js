console.log('working');
const pror = new Promise((resolved,reject)=> 
reject('rejected'),
setTimeout(()=>{
console.log('promiss is rejected');
},100)
);

const proA = new Promise((resolved,reject)=>{
    console.log('promiss is resoved');
    resolved('resolved dat match match');
    return pror;
    });
    

function res(pror){
    setTimeout(()=>{
        console.log('resolved');

    },1000);
}

function makePromise(){
    console.log(res());
   
}

//makePromise();
setTimeout(()=>{proA.then(()=>{
    console.log('get after promiss pass');
});},1000)

pror.catch((Ara)=>{
    console.log('get error'+Ara);
    hello();
})
function wait(ms =0){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hello(){
    console.log('start car');
    wait(2000);
    console.log('in gear');
    wait(2000);
    console.log("preas break");
};
