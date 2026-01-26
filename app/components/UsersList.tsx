"use client";

import { User } from "@/types/user";
import UserCard from "./UserCard";
import { useState } from "react";

type UsersListProps = {
  users: User[];
  isEditing: boolean;
};

export default function UsersList({ users, isEditing }: UsersListProps) {
  const [openId, setOpenId] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {users.map((user, index) => (
        <UserCard
          key={index}
          user={user}
          isOpen={openId === user.id}
          onToggle={() => setOpenId(openId === user.id ? "" : user.id)}
        />
      ))}
    </div>
  );
}

{
  /* <>
              <DeleteButton item={user} action={() => deletePrismaUser(user)} />
              <EditUserForm user={user} key={index}>
                <div>
                  <h1>{user.name}</h1>
                  <p>Score: {user.score}</p>
                </div>
              </EditUserForm>
            </> */
}
