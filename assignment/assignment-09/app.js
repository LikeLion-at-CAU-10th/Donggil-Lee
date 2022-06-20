const checkbox=document.querySelector('.checkbox');
checkbox.addEventListener('click', toggleClick);
function toggleClick(){
    document.body.classList.toggle('dark');
    document.querySelector('.menu').classList.toggle('dark');
    document.querySelector('#home').classList.toggle('dark');
    document.querySelector('#aboutme').classList.toggle('dark');
    document.querySelector('.header').classList.toggle('dark');
    document.querySelector('#study').classList.toggle('dark');
    document.querySelector('.content').classList.toggle('dark');
    document.querySelector('.main').classList.toggle('dark');
    document.querySelector('#contact').classList.toggle('dark');
}
// 사진 위에 글자 띄우기. 이거 왜 토글로 안댐...
const img1=document.querySelector('.activeimg1');
const img2=document.querySelector('.activeimg2');
const img3=document.querySelector('.activeimg3');
img1.addEventListener('mouseover', f1);
img1.addEventListener('mouseout',f1out);
img2.addEventListener('mouseover', f2);
img2.addEventListener('mouseout',f2out);
img3.addEventListener('mouseover', f3);
img3.addEventListener('mouseout',f3out);
function f1(){
    document.querySelector('.imgtext1').classList.add('visible');
}
function f1out(){
    document.querySelector('.imgtext1').classList.remove('visible');
}
function f2(){
    document.querySelector('.imgtext2').classList.add('visible');
}
function f2out(){
    document.querySelector('.imgtext2').classList.remove('visible');
}
function f3(){
    document.querySelector('.imgtext3').classList.add('visible');
}
function f3out(){
    document.querySelector('.imgtext3').classList.remove('visible');
}