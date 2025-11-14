'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

type TasksListProps = {
  tasks: object[];
};

export default function TasksList({tasks}: TasksListProps) {
console.log("dev ~ TasksList ~ tasks:", tasks)

    
  return (
    <div style={{ margin: 20 }}>
      {tasks.map((task, index) => (
        <div key={index} className="customCard">
          <div>
            <h1>{task.name}</h1>
            <p>Score: {task.score}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
