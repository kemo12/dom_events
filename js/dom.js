//note: this code was made by eng kamel dawoud
/********* Define importants variables********/
const firstButton = document.querySelector('body > div > ul > li.tab.active > button');
const secondButton = document.querySelector('body > div > ul > li:nth-child(2) > button');
const thirdButton = document.querySelector('body > div > ul > li:nth-child(3) > button');
const fourthButton = document.querySelector('body > div > ul > li:nth-child(4) > button');
const content1=document.getElementById('content-1');
const content2=document.getElementById('content-2');
const content3=document.getElementById('content-3');
const content4=document.getElementById('content-4');
const li_fisrt=document.querySelector('#li1');
const li_second=document.querySelector('#li2');
const li_third=document.querySelector('#li3');
const li_fourth=document.querySelector('#li4');
//define conuter variable
const counter=document.querySelector('.conuter');
let count=0;
counter.textContent='the times that pressed second tab  =  '+count ;
//define keyboard evet listener 
window.addEventListener('keydown',function(key){
if(key.keyCode=='49'||key.keyCode=='97'){tab1();}
else if (key.keyCode=='50'||key.keyCode=='98'){ tab2(); }
else if(key.keyCode=='51'||key.keyCode=='99'){ tab3();}
else if(key.keyCode=='52' ||key.keyCode=='100'){ tab4();}
});
//define button event listener
firstButton.addEventListener('click',tab1);
secondButton.addEventListener('click',tab2);
thirdButton.addEventListener('click',tab3);
fourthButton.addEventListener('click',tab4);
//define functions 
function tab1(){
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    li_second.classList.remove('active');
    li_third.classList.remove('active');
    li_fourth.classList.remove('active');
    li_fisrt.classList.add('active');
    content1.classList.add('active');   
}
function tab2(){
    content1.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content2.classList.add('active');
    li_fisrt.classList.remove('active');
    li_third.classList.remove('active');
    li_fourth.classList.remove('active');
    li_second.classList.add('active');
    count++;
    counter.textContent='the times that pressed second tab =  '+count ;
}
function tab3(){
    content1.classList.remove('active');
    content2.classList.remove('active');
    content4.classList.remove('active');
    content3.classList.add('active');
    li_second.classList.remove('active');
    li_fisrt.classList.remove('active');
    li_fourth.classList.remove('active');
    li_third.classList.add('active');
}
function tab4(){
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.add('active');
    li_second.classList.remove('active');
    li_third.classList.remove('active');
    li_fisrt.classList.remove('active');
    li_fourth.classList.add('active');
}