"use client";

import { Dialog } from "radix-ui";
import MemberForm from "./MemberForm";
import { updatePrismaMember } from "@/utils/utils";
import { Member } from "@/types/member";
import { useState } from "react";

type EditMemberDialogProps = {
  member: Member;
  children: React.ReactNode;
};

export default function EditMemberDialog({
  member,
  children,
}: EditMemberDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit Member</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to the selected member here. Click save when you're done.
          </Dialog.Description>
          <MemberForm
            buttonText={"Edit Member"}
            action={(formData: FormData) => updatePrismaMember(member, formData)}
            member={member}
            onSuccess={() => setIsOpen(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
