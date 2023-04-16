import React from "react";
import "./todo.css";
import { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (todo) => {
    const newTask = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="todolist">
      <div className="fill">
        <input
          value={input}
          type="text"
          placeholder="Add a New Task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTask(input)}>Add</button>
      </div>
      <div className="display">
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              <p>
                {todo ? <h1>{todo.todo}</h1> : <h1>No Taks</h1>}
              </p>
              <button onClick={() => deleteTask(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ! Empty add task error
// ? Edit button
// * Empty task bar message
