"use client";

import { Dialog } from "radix-ui";
import TaskForm from "./TaskForm";
import { updateTask } from "@/utils/utils";
import { Task } from "@/types/task";

type EditTaskDialogProps = {
  task: Task;
  children: any;
};

export default function EditTaskDialog({ task, children }: EditTaskDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>

          <TaskForm buttonText={"Edit Task"} action={(formData: FormData) => updateTask(task, formData)} task={task} />

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
