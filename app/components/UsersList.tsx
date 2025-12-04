"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButon";
import { deleteTask, deleteUser } from "@/utils/utils";
import EditTaskForm from "./EditTaskDialog";
import EditUserForm from "./EditUserDialog";
import { User } from "@/types/user";

type UsersListProps = {
  users: User[];
  isEditing: boolean;
};

export default function UsersList({ users, isEditing }: UsersListProps) {

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {users.map((user, index) => (
        <div key={index} className="customCard">
          {isEditing ? (
            <>
              <DeleteButton item={user} action={() => deleteUser(user)} />
              <EditUserForm user={user} key={index}>
                <div>
                  <h1>{user.name}</h1>
                  <p>Score: {user.score}</p>
                </div>
              </EditUserForm>
            </>
          ) : (
            <div>
              <h1>{user.name}</h1>
              <p>Score: {user.score}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}