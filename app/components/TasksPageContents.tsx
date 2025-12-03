"use client";

import React from "react";
import TasksList from "./TasksList";
import FormTrigger from "./FormTrigger/FormTrigger";
import { Task } from "@/types/task";

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
      <FormTrigger />

      <button className="editButton" onClick={() => setIsEditing(!isEditing)}>
        EDIT
      </button>
    </div>
  );
}
