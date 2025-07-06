const express = require('express');

const app = express();
app.use(express.json());

let todos = [];


function writetodo(todo){
  todos.push(todo);
}

app.get('/',(req,res)=>{
  res.send(todos);
})

app.post('/',(req,res)=>{
  const title = req.body.title;
  const time = req.body.time;
  const done = req.body.done;

  
  const value = {
    title: title,
    time: time,
    done: done
  };
  writetodo(value);
  res.send('added susccessfully')
 
})

app.put('/',(req,res)=>{
  const done_ = req.body.done;
  const title_ = req.body.title;
  let flag = false;
  for (index of todos){
    if(index.title === title_){
      index.done = done_;
      flag = true;
      break;
    }
  }
  if(flag===true) res.send("marked as done");
  else res.send("such todo not found");
})

app.delete('/',(req,res)=>{
  const title_ = req.body.title;
  let flag = false
  for(index in todos){
    if(todos[index].title === title_){
      todos.splice(index,1);
      flag = true;
      break;
    }
  }
  if(flag===true) res.send("task removed successfully");
  else res.send("task not found");
})

app.listen(3000);