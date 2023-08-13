const input = document.querySelector(".Input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");


button.addEventListener("click", addtodo);
todolist.addEventListener("click", deleteTodo);

function addtodo (event){
    event.preventDefault();
    // console.log(input.value);

    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    tododiv.appendChild(todoItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    tododiv.appendChild(deleteButton);


    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML='<i class="fa-solid fa-check"></i>';
    tododiv.appendChild(completeButton);


    todolist.appendChild(tododiv);
    input.value= "";
    
}

function deleteTodo(event){
    console.log(event.target);

    const item= event.target;
    if(item.classList[0] === "delete-btn"){
        const delItem= item.parentElement;
        delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const CompleteItem= item.parentElement;
        CompleteItem.classList.toggle("completed");
    }
}