"use client";

import { Dialog } from "radix-ui";
import UserForm from "./UserForm";
import { updatePrismaUser } from "@/utils/utils";
import { User } from "@/types/user";
import { useState } from "react";

type EditUserDialogProps = {
  user: User;
  children: React.ReactNode;
};

export default function EditUserDialog({
  user,
  children,
}: EditUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit User</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to the selected user here. Click save when you're done.
          </Dialog.Description>
          <UserForm
            buttonText={"Edit User"}
            action={(formData: FormData) => updatePrismaUser(user, formData)}
            user={user}
            onSuccess={() => setIsOpen(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
