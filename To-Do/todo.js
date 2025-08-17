let ul=document.getElementById("taskList");
let input=document.getElementById("taskInput");
let add=document.getElementById("addBtn");
add.addEventListener("click",addItem);
function addItem(e){
    let li=document.createElement("li");
    let te=document.createTextNode(input.value);//get input from add item
    li.appendChild(te);
    ul.appendChild(li);//adding new task

    let remove=document.createElement("button");//add remove button
    remove.className="remove-btn";
    let x=document.createTextNode("Remove");
    remove.appendChild(x);
    li.appendChild(remove);
    ul.appendChild(li);


    //remove button function
    remove.addEventListener("click",removeItem);
    function removeItem(e){
        if(e.target.classList.contains("remove-btn")){
            if (confirm("Are you sure")){
                let li=e.target.parentElement;
                ul.removeChild(li);
            }
        }
    }
    //search item
    let search=document.getElementById("search");
    search.addEventListener("keyup",searchItem);
    function searchItem(e){
        let text=e.target.value.toLowerCase();
        let itemList=ul.getElementsByTagName("li");
        Array.from(itemList).forEach(function(item){
            let items=item.firstChild.textContent.toLowerCase();
            if(items.indexOf(text)!==-1){
                item.style.display="block";

            }
            else{
                item.style.display="none"
            }

        });
    }

}

