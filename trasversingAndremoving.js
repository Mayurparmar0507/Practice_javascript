//console.log('works');

const top1 = document.querySelector('.item');
console.log(top1.children);
console.log(top1.firstElementChild);
console.log(top1.lastElementChild);
console.log(top1.previousElementSibling);
console.log(top1.nextElementSibling);
console.log(top1.parentElement);

//remove 
top1.children[1].remove();
