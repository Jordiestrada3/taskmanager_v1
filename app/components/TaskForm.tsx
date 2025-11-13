"use client";
import React from "react";
import { createTask } from "../../utils/utils";

export default function TaskForm() {
  return (
    <form className="taskForm" method="post" action={createTask}>
      <input type="text" name="name" placeholder="Task Name" required />
      <input type="number" name="score" placeholder="Score" required />
      {/* <input type="datetime-local" name="resetTime" placeholder="Reset Time" /> */}
      <button type="submit">Add Task</button>
    </form>
  );
}
