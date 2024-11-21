import Input from "./Input";

import { useState } from "react";
import TodoList from "./TodoList";

export const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  }
  const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  
  const StrikeThrough =(id)=>{
    setTasks(tasks.map((task)=>task.id === id ?{...task ,completed:!task.completed }:task ))
  }

  return (
    <div>
      <h1>To-Do</h1>
      <Input addTask={addTask}/>
      
      <TodoList tasks={tasks} deleteTask={deleteTask} StrikeThrough={StrikeThrough}/>
    </div>
  );
};
