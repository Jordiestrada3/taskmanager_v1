"use client";

import DeleteButton from "./DeleteButon";
import { deletePrismaUser } from "@/utils/utils";
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
              <DeleteButton item={user} action={() => deletePrismaUser(user)} />
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
