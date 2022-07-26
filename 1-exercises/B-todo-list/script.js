function todoList(todos) {
  let toDoList = document.createElement("ul");
  document.querySelector("#content").appendChild(toDoList);

  todos.forEach(assignment => {
    let toDoListValue = document.createElement("li");
    toDoListValue.innerText = assignment.todo;

    function toggleAssignment(event) {
      event.stopImmediatePropagation();
      if(toDoListValue.className === "assignment-done-color") {
        toDoListValue.className = "";
      }
      else {
        toDoListValue.className = "assignment-done-color";
      };
    };

    toDoListValue.addEventListener("click", toggleAssignment);
    toDoList.appendChild(toDoListValue);
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);