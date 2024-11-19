"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="m-5">
      <div className="heading"><h1>To Do List "Do your List"</h1></div>
      

      <div className="container">
      <div className="input">
        <input
          style={{width: "370px", height: "50px", fontSize:"30px"}}
          
          
          type="text"
          placeholder="Add a new task"
          value={task}
          className="border border-black"
          
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask} className="ml-3 bg-gray-500 p-2"           style={{width: "90px", height: "60px", fontSize:"25px"}}
>
          Add Task
        </button>
      </div>

      <ul className="items">
        {tasks.map((t) => (
          <li key={t.id}>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTaskCompletion(t.id)}
              />
              <span
                className={`${
                  t.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {t.text}
              </span>
            </div>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
