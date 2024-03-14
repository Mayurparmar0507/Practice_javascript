console.log('hello Working');
const picture = document.querySelector(".stimg");
console.log(picture.classList);
console.log(picture.classList.add('second'));//.contains("i am second"));
picture.classList.add('third');//.contains("i am third'");
picture.classList.contains("second");
console.log(picture.classList);
picture.classList.remove('second');
picture.classList.replace('third', 'clss');
console.log(picture.classList);
picture.classList.add('imgst');
picture.alt = "new";
console.log(picture.alt);
console.log(picture.natuaralWidth);//getter
// loading for picture waiting
window.addEventListener('load',function(){
    console.log(picture.naturalWidth);
});
picture.setAttribute('alt','seted new Attribute');
console.log(picture.getAttribute('alt'));

// do not create new object with custom name instat use data- feture for prevanting future class in name

const custom = document.querySelectorAll(".Added1");
console.log(custom.dataset);