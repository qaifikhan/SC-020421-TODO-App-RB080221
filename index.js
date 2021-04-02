console.log("Script Loaded!!")

var todoForm = document.getElementById('todo-form');
todoForm.onsubmit = function(e) {
    e.preventDefault();
}

function renderTodoCard(message) {
    // <div class="todo-card">
    //     <h3 class="todo-message">Todo Item One</h3>
    // </div>

    var mainCard = document.createElement('div');
    mainCard.className = "todo-card";

    var todoMessage = document.createElement('h3');
    todoMessage.classList.add('todo-message');
    todoMessage.innerHTML = message;
    mainCard.appendChild(todoMessage);

    var todoList = document.getElementById('todo-list');
    todoList.appendChild(mainCard);
}

var todoInput = document.getElementById('todo-input');

todoInput.onkeyup = function(eObj) {
    if(eObj.key === "Enter") {
        if(todoInput.value.length > 0){
            renderTodoCard(todoInput.value);
            todoInput.value = "";
        } else {
            alert("Please enter the message!!")
        }
    }
}