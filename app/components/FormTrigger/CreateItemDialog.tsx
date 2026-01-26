"use client";
import React from "react";
import { Dialog } from "radix-ui";
import "./DialogStyle.css";
import { PlusIcon } from "@radix-ui/react-icons";
import UserForm from "../UserForm";
import TaskForm from "../TaskForm";
import { createPrismaTask, createPrismaUser } from "@/utils/utils";

type CreateItemDialogProps = {
  type: "user" | "task";
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
          {type === "user" && (
            <UserForm
              buttonText={"Add User"}
              action={createPrismaUser}
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
