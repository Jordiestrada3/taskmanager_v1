"use client";

import { Dialog } from "radix-ui";
import TaskForm from "./TaskForm";
import { updatePrismaTask } from "@/utils/utils";
import { Task } from "@/types/task";
import { useState } from "react";

type EditTaskDialogProps = {
  task: Task;
  children: React.ReactNode;
};

export default function EditTaskDialog({
  task,
  children,
}: EditTaskDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit Task</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to the selected task here. Click save when you're done.
          </Dialog.Description>
          <TaskForm
            buttonText={"Edit Task"}
            action={(formData: FormData) => updatePrismaTask(task, formData)}
            task={task}
            onSuccess={() => setIsOpen(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
