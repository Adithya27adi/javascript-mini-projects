var textarea=document.getElementById("inputText");
var btn=document.querySelector("button");
var result=document.getElementById("result");
btn.addEventListener("click",chekvowel);
function chekvowel(e){
    var vowel=["a","e","i","o","u"]
    var vowelcount=0;
    var text=textarea.value.toLowerCase()
    for(var i=0;i<=text.length;i++){
        if(vowel.includes(text[i])){
            vowelcount+=1
        }
        else{
            vowelcount
        }
         }
         result.innerText=`Total Vowels:${vowelcount}`
    }
    
          
       

    
