import { Task } from "@/types/task";
import { User } from "@/types/user";
import React, { useRef, useState } from "react";
import ScoreHex from "./ScoreHex";
import { markPrismaTaskAsDone } from "@/utils/utils";

type PendingTaskCardProps = {
  task: Task;
  users: User[];
};

export default function PendingTaskCard({ task, users }: PendingTaskCardProps) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = React.useState("");

  const contentRef = useRef<HTMLDivElement>(null);

  const now = Date.now();

  return (
    <div onClick={() => setOpen(true)} className="customCard">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ lineHeight: 1.4 }}>{task.name}</h1>
          <p style={{ lineHeight: 1.4 }}>
            Done {Math.trunc((now - task.lastTimeDone) / (24 * 60 * 60 * 1000))}{" "}
            days ago
          </p>
        </div>
        <ScoreHex score={task.score} />
      </div>

      <div
        className="card-extra"
        style={{
          height: open ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div ref={contentRef} >
          <p style={{paddingTop: 10, fontWeight: 600, fontSize: 15}}>{task.description}</p>
          <form
            className="custom-form"
            action={() => {
              (markPrismaTaskAsDone(task, selectedUser), setOpen(false));
            }}
            style={{margin: 0, padding: 2}}
          >
            <select
              name="user"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a user
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button type="submit">Done!</button>
          </form>
        </div>
      </div>
    </div>
  );
}
