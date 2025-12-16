"use client";

import { Dialog } from "radix-ui";
import "./FormTrigger/DialogStyle.css";

type DeleteButtonProps = {
  item: object;
  action: Function;
};

export default function DeleteButton({ item, action }: DeleteButtonProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="deleteButton">X</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Delete Item?</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </Dialog.Description>

          <Dialog.Close asChild>
            <button className="dialogDeleteButton" onClick={() => action(item)}>Delete</button>
          </Dialog.Close>

          <Dialog.Close asChild>
            <button className="dialogCancelButton" onClick={() => console.log("Cancel")}>Cancel</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
