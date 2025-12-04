"use client";

import React from "react";
import { Dialog } from "radix-ui";
import { markTaskAsDone } from "@/utils/utils";
import { Task } from "@/types/task";
import { User } from "@/types/user";

type DoTaskDialogProps = {
  task: Task;
  users: User[];
  children: any;
};

export default function DoTaskDialog({
  task,
  children,
  users,
}: DoTaskDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState("");

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
            className="customForm"
            action={() => {
              markTaskAsDone(task, selectedUser), setOpen(false);
            }}
          >
            <select
              name="user"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="doTaskSelect"
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
            <button type="submit">Save</button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
