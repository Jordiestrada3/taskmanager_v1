"use client";

import { Task } from "@/types/task";
import DoTaskDialog from "./DoTaskDialog";
import "./FormTrigger/DialogStyle.css";
import { User } from "@/types/user";

type PendingTasksListProps = {
  tasks: Task[];
  users: User[];
};

export default function PendingTasksList({
  tasks,
  users,
}: PendingTasksListProps) {
  console.log("dev ~ PendingTasksList ~ tasks:", tasks);
  const now = Date.now();

  const pendingTasks = tasks.filter((task) => {
    return now - task.lastTimeDone > task.frequencyTime;
  });

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
      {pendingTasks.map((task, index) => (
        <DoTaskDialog key={index} task={task} users={users}>
          <div className="customCard">
            <div>
              <h1>{task.name}</h1>
              <p>Score: {task.score}</p>
              <p>
                Last Time Done:
                {new Date(task.lastTimeDone).toLocaleDateString()} (
                {Math.trunc((now - task.lastTimeDone) / (24 * 60 * 60 * 1000))}
                days ago)
              </p>
            </div>
          </div>
        </DoTaskDialog>
      ))}
    </div>
  );
}
