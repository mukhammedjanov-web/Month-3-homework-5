

let input=document.querySelector('#distance');
let result1=document.querySelector('#result1');
let result2=document.querySelector('#result2');
let result3=document.querySelector('#result3');
let result4=document.querySelector('#result4');
let button=document.querySelector('#button');


let b=3.6;
let c=20.1;
let d=70;
let e=800;


function travel(){

     let w=input.value*1/b;
     let g=input.value*1/c;
     let h=input.value*1/d;
     let z=input.value*1/e;
     
     result1.textContent = `${Math.round(w)} soat vaqt ketadi`
     result2.textContent = `${Math.round(g)} soat vaqt ketadi `
     result3.textContent = `${Math.round(h)} soat vaqt ketadi `
     result4.textContent = `${Math.round(z*60)} daqiqa vaqt ketadi `    
}





























