const array=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var hexbtn=document.querySelector(".hexbtn");
var body=document.querySelector('body');
const hexcode=document.querySelector(".hex");
 
hexbtn.addEventListener("click",createBackground);
function createBackground(){
 let background="#";

 for(let i=0;i<6;i++){
  let random=Math.floor(Math.random()*array.length);
  background +=array[random];


 }
 body.style.background=background;
 hexcode.innerHTML=background;
 }