"use client";

import React from "react";
import TasksList from "./TasksList";
import FormTrigger from "./FormTrigger/FormTrigger";

type TasksPageContentsProps = {
  tasks: object[];
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
