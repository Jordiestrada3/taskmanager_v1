"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButon";
import { deleteTask } from "@/utils/utils";
import EditTaskForm from "./EditTaskDialog";
import { Task } from "@/types/task";

type TasksListProps = {
  tasks: Task[];
  isEditing: boolean;
};

export default function TasksList({ tasks, isEditing }: TasksListProps) {
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
          {isEditing ? (
            <>
              <DeleteButton item={task} action={() => deleteTask(task)} />
              <EditTaskForm task={task} key={index}>
                <div>
                  <h1>{task.name}</h1>
                  <p>Score: {task.score}</p>
                  <p>
                    Frequency Time (days):{" "}
                    {task.frequencyTime / (24 * 60 * 60 * 1000)}
                  </p>
                </div>
              </EditTaskForm>
            </>
          ) : (
            <div>
              <h1>{task.name}</h1>
              <p>Score: {task.score}</p>
              <p>
                Frequency Time (days):{" "}
                {task.frequencyTime / (24 * 60 * 60 * 1000)}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}