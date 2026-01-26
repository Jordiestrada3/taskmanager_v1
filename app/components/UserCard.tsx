import { Task } from "@/types/task";
import { User } from "@/types/user";
import React, { useRef, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import ScoreHex from "./ScoreHex";
import { markPrismaTaskAsDone } from "@/utils/utils";

type PendingTaskCardProps = {
  user: User;
  isOpen: boolean;
  onToggle: () => void;
};

export default function PendingTaskCard({
  user,
  isOpen,
  onToggle,
}: PendingTaskCardProps) {
  const [selectedUser, setSelectedUser] = React.useState("");

  const contentRef = useRef<HTMLDivElement>(null);

  const now = Date.now();

  return (
    <div className="customCard">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems:'center',
          justifyContent: "space-between",
        }}
        onClick={onToggle}
      >
        <h1 style={{ lineHeight: 1.4 }}>{user.name}</h1>
        <ScoreHex score={user.score} />
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
            padding: "25px 0 5px 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              color: "white",
              width: "48%",
              height: 50,
              backgroundColor: "blue",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Pencil />
          </button>
          <button
            style={{
              color: "white",
              width: "48%",
              height: 50,
              backgroundColor: "red",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}
