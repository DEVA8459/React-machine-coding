```js
import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add a new task
  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setInput("");
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do App</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```
with check box
```js
import { useState } from "react";
export const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const add = (task) => {
  //here we take array of tasks and not of task 
  //and  iam contineusly forgetting triwala
    if (task.trim) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setInput("");
    }
  };

  const Del = (id) => {
    //yaha filter bhool raha hoo mai
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const strike = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div>
      <h1>TO-DO App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add(input);
        }}
      >
        <input
          type="text"
          placeholder="Enter Text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {tasks.map((task) => (
          <ul
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => strike(task.id)}
            />
            {task.text}
            <button onClick={() => Del(task.id)}>❌</button>
          </ul>
        ))}
      </div>
    </div>
  );
};
```
