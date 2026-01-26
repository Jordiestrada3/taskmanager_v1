"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import CreateItemDialog from "./FormTrigger/CreateItemDialog";

type HeaderProps = {
  createType?: "user" | "task";
};

export default function Header({ createType }: HeaderProps) {
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
    </header>
  );
}
