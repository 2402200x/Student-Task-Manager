const todoContainer = document.querySelector(".todo-container");
const inputTodo = document.getElementById("input-todo");
const addTodo = document.getElementById("add-todo");


let todoArray = [];

const URL = "http://localhost:5000/todos";

async function get_Todos() {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
}

async function post_todos() {
  try {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputTodo.value,
        completed: false,
      }),
    };
    const resp = await fetch(URL, options);
    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
}

function display_Todos(todoArr) {
  todoArr.forEach((todoElem) => {
    console.log(todoElem);

    // Parent
    let todo = document.createElement("div");
    todo.classList.add("todo");

    // Children
    let todoInfo = document.createElement("div");
    todoInfo.classList.add("todo-info");
    let todoBtn = document.createElement("form");
    todoBtn.classList.add("todo-btn");

    // Grand Children
    let todoCompleted = document.createElement("input");
    todoCompleted.classList.add("todo-completed");
    todoCompleted.setAttribute("type", "checkbox");
    todoCompleted.checked = todoElem.completed;
    let todoName = document.createElement("p");
    todoName.classList.add("todo-name");
    todoName.innerHTML = todoElem.name;


    todoInfo.appendChild(todoCompleted);
    todoInfo.appendChild(todoName);
   

    todo.appendChild(todoInfo);
    todo.appendChild(todoBtn);

    todoContainer.appendChild(todo);
  });
}

get_Todos()
  .then((todoArr) => {
    todoArray = todoArr;
    console.log(todoArray);
    display_Todos(todoArray);
  })
  .catch((err) => console.log(err));

addTodo.addEventListener("click", () => {
  if (inputTodo.value != "") {
    post_todos();
  }
});