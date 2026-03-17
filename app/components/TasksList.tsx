"use client";

import DeleteButton from "./DeleteButon";
import { deletePrismaTask } from "@/utils/utils";
import EditTaskForm from "./EditTaskDialog";
import { Task } from "@/types/task";
import TaskCard from "./TaskCard";
import { useState } from "react";

type TasksListProps = {
  tasks: Task[];
};

export default function TasksList({ tasks }: TasksListProps) {
console.log("dev ~ TasksList ~ tasks:", tasks)

    const [openId, setOpenId] = useState("");
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {tasks
      .filter((task) => task.isActive) //filter out deleted tasks
      .map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            isOpen={openId === task.id}
            onToggle={() => setOpenId(openId === task.id ? "" : task.id)}
          />
      ))}
    </div>  
  );
}
