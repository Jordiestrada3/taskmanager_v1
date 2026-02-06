"use client";

import React from "react";
import { Dialog } from "radix-ui";
import { markPrismaTaskAsDone } from "@/utils/utils";
import { Task } from "@/types/task";
import { Member } from "@/types/member";

type DoTaskDialogProps = {
  task: Task;
  members: Member[];
  children: any;
};

export default function DoTaskDialog({
  task,
  children,
  members,
}: DoTaskDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState("");

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Who did the task?</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Assign the task to someone and click save when you're done.
          </Dialog.Description>
          <form
            className="custom-form"
            action={() => {
              markPrismaTaskAsDone(task, selectedMember), setOpen(false);
            }}
          >
            <select
              name="member"
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
              className="do-task-select"
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
            <button type="submit">Save</button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
