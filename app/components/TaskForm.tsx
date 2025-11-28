"use client";
import React from "react";
import { createTask } from "../../utils/utils";

type TaskFormProps ={
  buttonText: string;
  action: Function;
  task?: object;  
}

export default function TaskForm({buttonText, action, task}: TaskFormProps) {
  return (
    <form className="taskForm" action={action}>
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
        <input type="number" name="frequencyTime" placeholder="Frequency Time (days)" defaultValue={task?.frequencyTime  / 24 / 60 / 60 / 1000} required />
      </fieldset>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
