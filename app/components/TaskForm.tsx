"use client";
import React from "react";
import { createTask } from "../../utils/utils";

type TaskFormProps ={
  buttonText: string;
  action: Function;
}

export default function TaskForm({buttonText, action}: TaskFormProps) {
  return (
    <form className="taskForm" action={action}>
      <fieldset>
        <label>Name</label>
        <input type="text" name="name" placeholder="Task Name" required />
      </fieldset>
      <fieldset>
        <label>Score</label>
        <input type="number" name="score" placeholder="Score" required />
      </fieldset>
      <fieldset>
        <label>Frequency Time (days)</label>
        <input type="number" name="frequencyTime" placeholder="Frequency Time (days)" required />
      </fieldset>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
