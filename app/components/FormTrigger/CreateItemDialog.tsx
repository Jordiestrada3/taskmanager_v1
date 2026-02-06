"use client";
import React from "react";
import { Dialog } from "radix-ui";
import "./DialogStyle.css";
import { PlusIcon } from "@radix-ui/react-icons";
import MemberForm from "../MemberForm";
import TaskForm from "../TaskForm";
import { createPrismaTask, createPrismaMember } from "@/utils/utils";

type CreateItemDialogProps = {
  type: "member" | "task";
  children: React.ReactNode;
};

export default function CreateItemDialog({ type, children }: CreateItemDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Create {type}</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Create a new {type} using the form below.
          </Dialog.Description>
          {type === "member" && (
            <MemberForm
              buttonText={"Add Member"}
              action={createPrismaMember}
              onSuccess={() => setIsOpen(false)}
            />
          )}
          {type === "task" && (
            <TaskForm
              buttonText={"Add Task"}
              action={createPrismaTask}
              onSuccess={() => setIsOpen(false)}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
