"use client";

import React from "react";
import UsersList from "./UsersList";
import FormTrigger from "./FormTrigger/FormTrigger";
import { User } from "@/types/user";

type UsersPageContentsProps = {
  users: User[];
};

export default function UsersPageContents({ users }: UsersPageContentsProps) {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <UsersList users={users} isEditing={isEditing} />
      <FormTrigger />

      <button className="editButton" onClick={() => setIsEditing(!isEditing)}>
        EDIT
      </button>
    </div>
  );
}
