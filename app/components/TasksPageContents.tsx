"use client";

import React from "react";
import TasksList from "./TasksList";
import FormTrigger from "./FormTrigger/FormTrigger";

type TasksPageContentsProps = {
  tasks: object[];
};

export default function TasksPageContents({ tasks }: TasksPageContentsProps) {
  console.log("dev ~ TasksPageContents ~ tasks:", tasks)
  const [isEditing, setIsEditing] = React.useState(false);
  console.log("dev ~ TasksPageContents ~ isEditing:", isEditing)

  return (
    <>
      <TasksList tasks={tasks} />
      <FormTrigger />
      <button
        className="editButton"
        onClick={() => setIsEditing(!isEditing)}
      >EDIT</button>
    </>
  );
}
