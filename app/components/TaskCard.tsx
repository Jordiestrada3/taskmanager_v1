import { Task } from "@/types/task";
import React, { useRef } from "react";
import { Pencil, Trash2 } from "lucide-react";
import ScoreHex from "./ScoreHex";
import EditTaskDialog from "./EditTaskDialog";
import { deletePrismaTask } from "@/utils/utils";
import DeleteButton from "./DeleteButon";

type PendingTaskCardProps = {
  task: Task;
  isOpen: boolean;
  onToggle: () => void;
};

export default function PendingTaskCard({
  task,
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
          alignItems: "center",
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
      <p style={{ paddingTop: 15, fontWeight: 600, fontSize: 15 }}>
        {task.description}
      </p>

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
          <EditTaskDialog task={task}>
            <button
              style={{
                color: "white",
                width: "48%",
                height: 50,
                backgroundColor: "#72694c",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Pencil />
            </button>
          </EditTaskDialog>
          <DeleteButton action={() => deletePrismaTask(task)} item={task}>
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
          </DeleteButton>
        </div>
      </div>
    </div>
  );
}
