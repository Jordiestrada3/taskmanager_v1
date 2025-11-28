"use client";

import { Dialog } from "radix-ui";
import UserForm from "./UserForm";
import { updateUser } from "@/utils/utils";

type EditUserFormProps = {
  user: object;
  children: any;
};

export default function EditUserForm({ user, children }: EditUserFormProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit User</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to this user here. Click save when you're done.
          </Dialog.Description>

          <UserForm buttonText={"Edit User"} action={(formData) => updateUser(user, formData)} user={user} />

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
