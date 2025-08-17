var bill=document.getElementById("bill");
var tip=document.getElementById("tip");
var people=document.getElementById("people");
var calculate=document.getElementById("calculate");
var res=document.getElementById("result");
calculate.addEventListener("click",calcualtebill);
function calcualtebill(e){
    var val=Number(bill.value)*Number(tip.value)/100
    var totalprice=Number(bill.value)+val;
    var pertotal=totalprice/Number(people.value);
    var pertip=val/Number(people.value);
    res.innerHTML=`<p>Per Person Total amount:${pertotal}</p>
     <p>Per Person Tip amount:${pertip}</p>`

}