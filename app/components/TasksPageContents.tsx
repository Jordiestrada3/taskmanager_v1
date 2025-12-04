"use client";

import React from "react";
import TasksList from "./TasksList";
import { Task } from "@/types/task";
import CreateItemDialog from "./FormTrigger/CreateItemDialog";

type TasksPageContentsProps = {
  tasks: Task[];
};

export default function TasksPageContents({ tasks }: TasksPageContentsProps) {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      <TasksList tasks={tasks} isEditing={isEditing} />
      <CreateItemDialog type={"task"} />

      <button className="editButton" onClick={() => setIsEditing(!isEditing)}>
        EDIT
      </button>
    </div>
  );
}
