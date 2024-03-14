console.log('working');

const item = document.querySelector('.item');
//console.log(item);

const src = `img1.jpeg`;
const htmls =`
<div class=dir>
<h2 >hello h2</h2>
<img id='nn' src = "${src}" alt="hello">
</div>
`;
item.innerHTML= htmls;

const imgele = document.querySelector('.dir #nn');
console.log(imgele);
imgele.classList.add('.img1');
//console.log(item.innerHTML);

// create string to dom element 
const strtodom = document.createRange().createContextualFragment(htmls);
document.body.append(strtodom);
console.log(strtodom);