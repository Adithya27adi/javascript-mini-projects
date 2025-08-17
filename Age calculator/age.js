var dateval=document.querySelector(".date")
var btn=document.querySelector(".calculate")
var result=document.querySelector(".result")
btn.addEventListener("click",calculate);
function calculate(e){
    let date=dateval.value;
    let dob=new Date(date);
    let today=new Date();
    let age=today.getFullYear()-dob.getFullYear();
    result.innerText=`You are ${age} Year old`

}