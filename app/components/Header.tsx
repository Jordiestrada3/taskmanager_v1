"use client";
import Link from "next/link";
import { Plus, ClipboardClock } from "lucide-react";
import CreateItemDialog from "./FormTrigger/CreateItemDialog";

type HeaderProps = {
  createType?: "member" | "task";
  showEventsLink?: boolean;
};

export default function Header({ createType, showEventsLink }: HeaderProps) {
  return (
    <header className="custom-header">
      <h1 style={{ alignSelf: "center" }}>BeHive</h1>
      {createType && (
        <CreateItemDialog type={createType}>
          <div className="header-add-button">
            <Plus />
          </div>
        </CreateItemDialog>
      )}
      {showEventsLink && (
        <Link href="/events" rel="Members">
          <div className="header-add-button">
            <ClipboardClock />
          </div>
        </Link>
      )}
    </header>
  );
}
