"use client";
import React from "react";
import TaskForm from "../TaskForm";
import { Dialog } from "radix-ui";
import "./DialogStyle.css";
import { PlusIcon } from "@radix-ui/react-icons";
import { createTask } from "@/utils/utils";
// import useScrollbarFix from "./useScrollbarFix.js";

export default function FormTrigger() {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <PlusIcon
            style={{ color: "white", fontSize: 60, width: 30, height: 30 }}
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>

          <TaskForm buttonText={"Add Task"} action={createTask} />

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
