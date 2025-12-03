"use client";

import { markTaskAsDone } from "@/utils/utils";
import { Dialog } from "radix-ui";
import React from "react";

type DoTaskDialogProps = {
  task: object;
  users: object[];
  children: any;
};

export default function DoTaskDialog({
  task,
  children,
  users,
}: DoTaskDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({});
  console.log("dev ~ DoTaskDialog ~ selectedUser:", selectedUser);

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
              onChange={(e) => {
                setSelectedUser(e.target.value);
              }}
              className="doTaskSelect"
            >
              <option value="" disabled selected>
                Select a user
              </option>
              {users.map((user: any) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            {/* <Dialog.Close asChild> */}
            <button type="submit">Save</button>
            {/* </Dialog.Close> */}
          </form>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          ></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
