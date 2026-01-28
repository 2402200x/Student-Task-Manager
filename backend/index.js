
const express = require("express");
const uuid = require("uuid");
const app = express();
const cors = require("cors");
const fs = require("fs");
const todosFile = "./task.json";


const PORT = 5000;

app.use(express.json());
app.use(cors());

const getTodos = () => {
  const data = fs.readFileSync(todosFile, "utf-8");
  return JSON.parse(data);
};

const saveTodos = (todos) => {
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
};

// We have to use data
// const todos = [
//   {
//     id: 1,
//     name: "Complete OOPS Assignment",
//     completed: true,
//   },
//   {
//     id: 2,
//     name: "Solve 5 LeetCode Problems",
//     completed: false,
//   },
// ];

app.get("/", (req, res) => {
  res.json({ msg: "Todo List Home Page" });
});

// app.get("/todos", (req, res) => {
//   res.json(todos);
// });
app.get("/todos", (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

// app.get("/todos/:id", (req, res) => {
//   let todo = todos.filter((todo) => todo.id == req.params.id);
//   res.json({ msg: "1 Todo", data: todo });
// });
app.get("/todos/:id", (req, res) => {
  const todos = getTodos();
  const todo = todos.filter(todo => todo.id == req.params.id);
  res.json({ msg: "1 Todo", data: todo });
});


// GET, POST, PUT
// app.post("/todos", (req, res) => {
//   console.log(req.body);
//   todos.push({ id: uuid.v4(), ...req.body });
//   res.json({ msg: "Add Todo", data: todos });
// });
app.post("/todos", (req, res) => {
  const todos = getTodos();
  todos.push({ id: uuid.v4(), ...req.body });
  saveTodos(todos);
  res.json({ msg: "Add Todo", data: todos });
});


// app.put("/todos/:id", (req, res) => {
//   let todo = todos.find((todo) => todo.id == req.params.id);
//   if (todo) {
//     todo.name = req.body.name;
//     todo.completed = req.body.completed;
//     res.json({ msg: "Edit Todo", data: todos });
//   } else {
//     res.json({ msg: "Todo not found." });
//   }
// });
// app.put("/todos/:id", (req, res) => {
//   const todos = getTodos();
//   const todo = todos.find(todo => todo.id == req.params.id);

//   if (todo) {
//     todo.name = req.body.name;
//     todo.completed = req.body.completed;
//     saveTodos(todos);
//     res.json({ msg: "Edit Todo", data: todos });
//   } else {
//     res.json({ msg: "Todo not found." });
//   }
// });


app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});