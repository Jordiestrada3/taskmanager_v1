"use client";
import React from "react";
import { createUser } from "../../utils/utils";
import { User } from "@/types/user";

type UserFormProps ={
  buttonText: string;
  action: (formData: FormData) => void | Promise<void>;
  user?: User;  
}

export default function UserForm({buttonText, action, user}: UserFormProps) {
  return (
    <form className="customForm" action={action}>
      <fieldset>
        <label>Name</label>
        <input type="text" name="name" placeholder="User Name" defaultValue={user?.name} required />
      </fieldset>
      <button type="submit">{buttonText}</button>
    </form>
  );
}