"use client";
import React from "react";
import { Task } from "@/types/task";

type TaskFormProps = {
  buttonText: string;
  action: (formData: FormData) => void | Promise<void>;
  task?: Task;
  onSuccess?: () => void;
};

export default function TaskForm({
  buttonText,
  action,
  task,
  onSuccess,
}: TaskFormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //the form does not reload the page
    const formData = new FormData(e.currentTarget);
    await action(formData);
    if (onSuccess) onSuccess();
  };

  const oneDay = 86400000; //milliseconds in a day

  return (
    <form className="customForm" onSubmit={handleSubmit}>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          defaultValue={task?.name}
          required
        />
      </fieldset>
      <fieldset>
        <label>Score</label>
        <input
          type="number"
          name="score"
          placeholder="Score"
          defaultValue={task?.score}
          required
        />
      </fieldset>
      <fieldset>
        <label>Frequency Time (days)</label>
        <input
          type="number"
          name="frequencyTime"
          placeholder="Frequency Time (days)"
          defaultValue={(task?.frequencyTime ?? oneDay) / 1000 / 60 / 60 / 24}
          required
        />
      </fieldset>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
