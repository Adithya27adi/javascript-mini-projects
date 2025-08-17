var principle=document.getElementById("principle")
var intrest=document.getElementById("Intrestrate")
var tenure=document.getElementById("tenure")
var btn=document.getElementById("calculatebtn")
var result=document.getElementById("result")
btn.addEventListener("click",calculate);
function calculate(e){
    var Intrestrate=(parseFloat(principle.value)*parseFloat(intrest.value)*parseFloat(tenure.value))/100;
    var maturity=parseFloat(principle.value)+Intrestrate;
    result.innerHTML=`<p>Maturity Amount:${maturity.toFixed(2)}</p>`

}
