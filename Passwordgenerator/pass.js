const display=document.getElementById("password");
const btn=document.getElementById("generate");
const length=document.getElementById("length");
const lower=document.getElementById("lowercase");
const upper=document.getElementById("uppercase");
const number=document.getElementById("numbers");
const symbol=document.getElementById("symbols");
btn.addEventListener("click",generate);
const Upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lower="abcdefghijklmnopqrstuvwxyz";
const Num= "0123456789";
const Sym= "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";
function generate(e){
    const len=Number(length.value);
    let charachters="";
    let pass="";
    if(lower.checked){
        charachters+=Lower;
    }
    if(upper.checked){
        charachters+=Upper;
    }
    if(number.checked){
        charachters+=Num;
    }
    if(symbol.checked){
        charachters+=Sym;
    }

    for(let i=0;i<len;i++){
        pass+=charachters.charAt(Math.floor(Math.random()*charachters.length))
    }
    display.value=pass;

}

