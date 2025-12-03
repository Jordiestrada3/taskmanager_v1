"use client";
import React from "react";
import { createTask } from "../../utils/utils";
import { Task } from "@/types/task";

type TaskFormProps ={
  buttonText: string;
  action: (formData: FormData) => void | Promise<void>;
  task?: Task;  
}

export default function TaskForm({buttonText, action, task}: TaskFormProps) {
  return (
    <form className="customForm" action={action}>
      <fieldset>
        <label>Name</label>
        <input type="text" name="name" placeholder="Task Name" defaultValue={task?.name} required />
      </fieldset>
      <fieldset>
        <label>Score</label>
        <input type="number" name="score" placeholder="Score" defaultValue={task?.score} required />
      </fieldset>
      <fieldset>
        <label>Frequency Time (days)</label>
        <input type="number" name="frequencyTime" placeholder="Frequency Time (days)" defaultValue={(task?.frequencyTime ?? 0) / 1000 / 60 / 60 / 24} required />
      </fieldset>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
