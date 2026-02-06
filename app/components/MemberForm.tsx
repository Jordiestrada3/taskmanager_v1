"use client";
import React from "react";
import { Member } from "@/types/member";

type MemberFormProps = {
  buttonText: string;
  action: (formData: FormData) => void | Promise<void>;
  member?: Member;
  onSuccess?: () => void;
};

export default function MemberForm({
  buttonText,
  action,
  member,
  onSuccess,
}: MemberFormProps) {
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

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Member Name"
          defaultValue={member?.name}
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
