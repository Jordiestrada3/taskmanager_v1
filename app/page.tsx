"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

async function getTasks() {
  try {
    const res = await fetch("http://localhost:3000/database.json");
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

async function setTasksData() {
  const tasksData = await getTasks();
  setTasks(tasksData);
}

setTasksData();


  
  console.log("dev ~ Home ~ tasks:", tasks)
  return (
    <main style={{ margin: 20 }}>
      <h1>Welcome to My Next.js App</h1>
      {/* {tasks.map((task, index) => (
        <div key={index} className="customCard">
          <div>
            <h1>{task.name}</h1>
            <p>Score: {task.score}</p>
          </div>
        </div>
      ))} */}
      {/* Hardcoded example card */}
      
    </main>
  );
}
