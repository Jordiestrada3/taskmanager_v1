import { Task } from "@/types/task";
import { Member } from "@/types/member";
import React, { useRef, useState } from "react";
import ScoreHex from "./ScoreHex";
import { markPrismaTaskAsDone } from "@/utils/utils";
import { set } from "zod";

type PendingTaskCardProps = {
  task: Task;
  members: Member[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function PendingTaskCard({
  task,
  members,
  isOpen,
  onToggle,
}: PendingTaskCardProps) {
  const [selectedMemberId, setSelectedMemberId] = React.useState("");
  const [isPending, setIsPending] = useState(false);

const handleTaskDone = async (task: Task, selectedMember: string) => {
  if (isPending) return;
  setIsPending(true);
  try {
    await markPrismaTaskAsDone(task, selectedMember);
    setSelectedMemberId("");
  } catch (error) {
    console.error("Error marking task as done:", error);
  } finally {
      setIsPending(false);
  }
};

  const contentRef = useRef<HTMLDivElement>(null);

  const now = Date.now();

  return (
    <div className="custom-card">
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
        <ScoreHex score={task.score} hexColor="#ffb300" />
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
              await handleTaskDone(task, selectedMemberId);
            }}
            style={{ margin: 0, padding: 2 }}
          >
            <select
              name="member"
              value={selectedMemberId}
              onChange={(e) => setSelectedMemberId(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a member
              </option>
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
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
