import { Task } from "@/types/task";
import React from "react";
import ScoreHex from "./ScoreHex";

type PendingTaskCardProps = {
  task: Task;
};

export default function PendingTaskCard({ task }: PendingTaskCardProps) {
  const [active, setActive] = React.useState(false);

  const now = Date.now();

  return (
    <div className="customCard">
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
    </div>
  );
}
