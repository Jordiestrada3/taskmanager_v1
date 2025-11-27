"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButon";
import { deleteTask } from "@/utils/utils";

type TasksListProps = {
  tasks: object[];
};

export default function TasksList({ tasks }: TasksListProps) {
  console.log("dev ~ TasksList ~ tasks:", tasks);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {tasks.map((task, index) => (
        <div key={index} className="customCard">
          <DeleteButton item={task} action={() => deleteTask(task)} />
          <div>
            <h1>{task.name}</h1>
            <p>Score: {task.score}</p>
            <p>Frequency Time (days): {task.frequencyTime / (24 * 60 * 60 * 1000)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
