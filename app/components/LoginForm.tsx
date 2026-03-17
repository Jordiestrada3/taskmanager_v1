'use client';
import { Task } from "@/types/task";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MembersList from "../components/MembersList";
import prisma from "@/lib/prisma";
import React from "react";

export const dynamic = "force-dynamic"; // To show latest data in the build

type LoginFormProps = {
  buttonText: string;
  action: Function;
};

export default async function LoginForm({
  buttonText,
  action,
}: LoginFormProps) {
  const [isPending, setIsPending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isPending) return; //prevent multiple submissions
    setIsPending(true);
    try {
      e.preventDefault(); //the form does not reload the page
      const formData = new FormData(e.currentTarget);
      await action(
        // formData
    );
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
      <form className="custom-form" onSubmit={handleSubmit}>
        <fieldset>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
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
