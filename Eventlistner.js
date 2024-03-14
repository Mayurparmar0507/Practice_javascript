console.log('working');
// 
const clickevent = document.querySelector('#hello');
console.log(clickevent);
clickevent.addEventListener('click',()=> console.log('hello'));
// 
const action = document.querySelector('.action');
console.log(action);
// 
function actionDone(){
    console.log('Action performed');
} 
action.addEventListener('click',actionDone);
// 
const comboaction = document.querySelectorAll('button.action')
// 
function comAction(butn){
    console.log('group of button click');
    console.log(butn.target.textContent);
}
// 
comboaction.forEach(function(comboaction){
    comboaction.addEventListener('click',comAction);
});
// 
// const link = document.querySelector('.action'); 
// 
clickevent.addEventListener('click',function(event){
        const pageChange = "page hase been chnage"; 
        console.log(alert('am i changing')); 
        // event.preventDefault(); 
});
// 
const form = document.querySelector('[name="signUp"]');
console.log(form);
form.addEventListener('submit',function(event)
{
    event.preventDefault();
    console.dir(event.target.fname.value);
});
const vars =1;
if(vars == 100){
    console.log("hello true");

} else if(vars === 10){
    console.log("hello false");
}else {
    console.log('nothing')
}