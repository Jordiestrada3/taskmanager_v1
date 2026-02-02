import { Task } from "@/types/task";
import { User } from "@/types/user";
import React, { useRef, useState } from "react";
import ScoreHex from "./ScoreHex";
import { markPrismaTaskAsDone } from "@/utils/utils";
import { set } from "zod";

type PendingTaskCardProps = {
  task: Task;
  users: User[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function PendingTaskCard({
  task,
  users,
  isOpen,
  onToggle,
}: PendingTaskCardProps) {
  const [selectedUserId, setSelectedUserId] = React.useState("");
  const [isPending, setIsPending] = useState(false);

const handleTaskDone = async (task: Task, selectedUser: string) => {
  if (isPending) return;
  setIsPending(true);
  try {
    await markPrismaTaskAsDone(task, selectedUser);
    setSelectedUserId("");
  } catch (error) {
    console.error("Error marking task as done:", error);
  } finally {
      setIsPending(false);
  }
};

  const contentRef = useRef<HTMLDivElement>(null);

  const now = Date.now();

  return (
    <div className="customCard">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
        onClick={onToggle}
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
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div ref={contentRef}>
          <p style={{ paddingTop: 10, fontWeight: 600, fontSize: 15 }}>
            {task.description}
          </p>
          <form
            className="custom-form"
            onSubmit={async (e) => {
              e.preventDefault(); 
              await handleTaskDone(task, selectedUserId);
            }}
            style={{ margin: 0, padding: 2 }}
          >
            <select
              name="user"
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
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
            {isPending ? (
              <button style={{backgroundColor:'#d39401'}} disabled>Loading...</button>
            ) : (
              <button type="submit">Done!</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
