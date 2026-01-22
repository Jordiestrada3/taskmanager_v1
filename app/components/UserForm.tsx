"use client";
import React from "react";
import { User } from "@/types/user";

type UserFormProps = {
  buttonText: string;
  action: (formData: FormData) => void | Promise<void>;
  user?: User;
  onSuccess?: () => void;
};

export default function UserForm({
  buttonText,
  action,
  user,
  onSuccess,
}: UserFormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //the form does not reload the page
    const formData = new FormData(e.currentTarget);
    await action(formData);
    if (onSuccess) onSuccess();
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          defaultValue={user?.name}
          required
        />
      </fieldset>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
