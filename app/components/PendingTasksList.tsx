"use client";

import { Task } from "@/types/task";
import DoTaskDialog from "./DoTaskDialog";
import "./FormTrigger/DialogStyle.css";
import { Member } from "@/types/member";
import PendingTaskCard from "./PendingTaskCard";
import { useState } from "react";

type PendingTasksListProps = {
  tasks: Task[];
  members: Member[];
};

export default function PendingTasksList({
  tasks,
  members,
}: PendingTasksListProps) {
  const [openId, setOpenId] = useState("");

  const now = Date.now();

  const pendingTasks = tasks.filter((task) => {
    return now - task.lastTimeDone > task.frequencyTime;
  });

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
      {pendingTasks.length === 0 ? (
        <p
          style={{
            padding: 20,
            fontSize: 18,
            color: 'rgb(148 163 184 / 0.7)',
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Everything is buzzing! You have no pending tasks in your Hive.
        </p>
      ) : (
        pendingTasks.map((task, index) => (
          <PendingTaskCard
            key={index}
            task={task}
            members={members}
            isOpen={openId === task.id}
            onToggle={() => setOpenId(openId === task.id ? "" : task.id)}
          />
        ))
      )}
    </div>
  );
}
