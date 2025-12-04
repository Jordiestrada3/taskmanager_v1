"use client";

import React from "react";
import UsersList from "./UsersList";
import { User } from "@/types/user";
import CreateItemDialog from "./FormTrigger/CreateItemDialog";

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
      <CreateItemDialog type={"user"} />

      <button className="editButton" onClick={() => setIsEditing(!isEditing)}>
        EDIT
      </button>
    </div>
  );
}
