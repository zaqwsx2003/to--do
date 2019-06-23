function addTodo() {
    const title = document.getElementById("title").value;
    const todo = document.getElementById("todo");
    const todoItem = document.createElement("li");
    const todoTitle = document.createTextNode(title);

    todoItem.appendChild(todoTitle);
    todoItem.addEventListener("click", function (event) {
        todo.removeChild(event.target);
    });

    todo.appendChild(todoItem);
}









