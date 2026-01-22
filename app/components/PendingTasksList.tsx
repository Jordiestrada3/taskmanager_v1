"use client";

import { Task } from "@/types/task";
import DoTaskDialog from "./DoTaskDialog";
import "./FormTrigger/DialogStyle.css";
import { User } from "@/types/user";
import PendingTaskCard from "./PendingTaskCard";
import { useState } from "react";

type PendingTasksListProps = {
  tasks: Task[];
  users: User[];
};

export default function PendingTasksList({
  tasks,
  users,
}: PendingTasksListProps) {
  console.log("dev ~ PendingTasksList ~ tasks:", tasks);

    const [openId, setOpenId] = useState('');
  
  const now = Date.now();

  const pendingTasks = tasks.filter((task) => {
    return now - task.lastTimeDone > task.frequencyTime;
  });
  console.log("dev ~ PendingTasksList ~ pendingTasks:", pendingTasks)

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
      {pendingTasks.map((task, index) => (
        <PendingTaskCard key={index} task={task} users={users} isOpen={openId === task.id}
          onToggle={() =>
            setOpenId(openId === task.id ? '' : task.id)
          }/>

      ))}
    </div>
  );
}
