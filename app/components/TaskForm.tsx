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
  const [isPending, setIsPending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isPending) return; //prevent multiple submissions
    setIsPending(true);
    try {
      e.preventDefault(); //the form does not reload the page
      const formData = new FormData(e.currentTarget);
      await action(formData);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsPending(false);
    }
  };

  const oneDay = 86400000; //milliseconds in a day

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
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
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Task Description"
          defaultValue={task?.description}
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
      {isPending ? (
        <button style={{ backgroundColor: "#d39401" }} disabled>
          Loading...
        </button>
      ) : (
        <button type="submit">{buttonText}</button>
      )}
    </form>
  );
}
