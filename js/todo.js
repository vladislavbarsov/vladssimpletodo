var input = document.querySelector("input[type='text']");
var todoUl = document.querySelector("ul");
var textItems = document.getElementsByTagName("p");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");

input.addEventListener("keypress", (keypressed) => {
  if (keypressed.which === 13){
    var noteLi = document.createElement("li");
    noteLi.classList.add("list-group-item");
    var noteP = document.createElement("p");
    var newTodo = input.value;
    input.value = "";
    noteP.innerHTML = newTodo;
    noteLi.append(noteP);
    todoUl.appendChild(noteLi);

    deleteTodo();
  }
});

todoUl.addEventListener('click', function(listitem) {
    if (listitem.target.tagName === 'LI') {
      listitem.target.classList.toggle('checked');
    }
  },false
);

function deleteTodo(){
  for (let noteText of textItems){
    noteText.addEventListener("click", () =>{
      noteText.parentElement.remove();
      event.stopPropagation();
    });
  }
}

saveBtn.addEventListener("click", () => {
  localStorage.setItem("todoList", todoUl.innerHTML);
  alert("List Saved !")
});

clearBtn.addEventListener("click", ()=>{
  todoUl.innerHTML = "";
  localStorage.removeItem("todoList");
  alert("List Cleared !");
});

function loadTodo(){
  if(localStorage.getItem("todoList")){
    todoUl.innerHTML = localStorage.getItem("todoList");
    deleteTodo();
  }
}

loadTodo();
