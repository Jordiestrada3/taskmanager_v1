"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButon";
import { deleteTask } from "@/utils/utils";
import EditTaskForm from "./EditTaskForm";

type TasksListProps = {
  tasks: object[];
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
        <div>
          {isEditing ? (
            <>
              <DeleteButton item={task} action={() => deleteTask(task)} />
              <EditTaskForm task={task} key={index}>
                <div key={index} className="customCard">
                  <div>
                    <h1>{task.name}</h1>
                    <p>Score: {task.score}</p>
                    <p>
                      Frequency Time (days):{" "}
                      {task.frequencyTime / (24 * 60 * 60 * 1000)}
                    </p>
                  </div>
                </div>
              </EditTaskForm>
            </>
          ) : (
            <div key={index} className="customCard">
              <div>
                <h1>{task.name}</h1>
                <p>Score: {task.score}</p>
                <p>
                  Frequency Time (days):{" "}
                  {task.frequencyTime / (24 * 60 * 60 * 1000)}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

{
  /* {isEditing ? (
          ) : null} */
}
