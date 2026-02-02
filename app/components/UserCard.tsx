import { User } from "@/types/user";
import React, { useRef, useState } from "react";
import { Delete, Pencil, Trash2 } from "lucide-react";
import ScoreHex from "./ScoreHex";
import EditUserForm from "./EditUserDialog";
import { deletePrismaUser, markPrismaTaskAsDone } from "@/utils/utils";
import DeleteButton from "./DeleteButon";
import EditUserDialog from "./EditUserDialog";

type UserCardProps = {
  user: User;
  isOpen: boolean;
  onToggle: () => void;
};

export default function UserCard({ user, isOpen, onToggle }: UserCardProps) {
  const [selectedUser, setSelectedUser] = React.useState("");

  const contentRef = useRef<HTMLDivElement>(null);

  const now = Date.now();

  return (
    <div className="customCard">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={onToggle}
      >
        <h1 style={{ lineHeight: 1.4 }}>{user.name}</h1>
        <ScoreHex score={user.score} hexColor="#ffb300" />
      </div>
      <div
        className="card-extra"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div
          ref={contentRef}
          style={{
            paddingTop: 20,
          }}
        >
          <hr
            style={{
              opacity: 0.3,
              border: "none",
              borderTop: "1px solid #94a3b8",
              width: "75%",
              margin: "0 auto",
            }}
          />
          <div
            ref={contentRef}
            style={{
              padding: "25px 0 5px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EditUserDialog user={user}>
              <button
                style={{
                  color: "white",
                  width: "48%",
                  height: 50,
                  backgroundColor: "#94a3b8",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Pencil />
              </button>
            </EditUserDialog>
            <DeleteButton action={() => deletePrismaUser(user)} item={user}>
              <button
                style={{
                  color: "white",
                  width: "48%",
                  height: 50,
                  backgroundColor: "#e57373",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Trash2 />
              </button>
            </DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
