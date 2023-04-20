import React from "react";
import "./todo.css";
import { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (todo) => {
    if (input !== "") {
      const newTask = {
        id: Math.random(),
        todo: todo,
      };
      setList([...list, newTask]);
      setInput("");
    } else {
      return;
    }
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
      <div className="display-todo">
        <ul>
          {list.length > 0 ? (
            list.map((todo) => (
              <li key={todo.id}>
                <p>{todo.todo}</p>
                <button onClick={() => deleteTask(todo.id)}>X</button>
              </li>
            ))
          ) : (
            <h1>No Task!</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

// * Enter key
