'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

type PendingTasksListProps = {
  tasks: object[];
};

export default function PendingTasksList({tasks}: PendingTasksListProps) {
console.log("dev ~ PendingTasksList ~ tasks:", tasks)

    
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
