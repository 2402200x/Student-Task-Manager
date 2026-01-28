const express = require('express');
const app = express();

// app.use(express.urlencoded({ extended: true }));


const port = 5000;
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
// app.use(cors())

const todos = [
    {
        id: 1,
        desc: "write python code",
        completed: false,
    },
    {
        id: 2,
        desc: "write js code",
        completed: true,
    },
]

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Student Task Manager API</h1>');
});

app.get('/todos', (req, res) => {
    res.json(todos);    
});

app.get('/todos/:id', (req, res) => {
  console.log(req.params.id);
  let todo = todos.filter((todo) => todo.id == req.params.id)
  res.json(todo) 
});

app.post("/todos", (req,res) => {
    let body = req.body;
    console.log(body)
    todos.push({id: uuid.v4(), ...body});
    res.json(todos)
});

app.put("/todos/:id", (req,res) => {
    let todo = todos.find((todo) => todo.id == req.params.id);
    if(todo){
        todo.desc = req.body.desc;
        todo.completed = req.body.completed;
        // res.json(todos);
    }else{
        res.send("todo with given id does not exist")
    }
    res.json(todos)
});
app.delete("/todos/:id", (req,res) => {
    res.json([])
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
