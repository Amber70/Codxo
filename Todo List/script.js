const inputbox=document.getElementById("input-box");
const todolist=document.getElementById("todo-list");
function addTask(){
    if(inputbox.value === ''){
        alert("You must add Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        todolist.appendChild(li);

        let span =document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        }
        inputbox.value='';
        saveDate();
}
todolist.addEventListener("click" , function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }

},false );

function saveDate(){
    localStorage.setItem("data",todolist.innerHTML);
}

   function showTask(){
    todolist.innerHTML=localStorage.getItem("data");
   }
   showTask();