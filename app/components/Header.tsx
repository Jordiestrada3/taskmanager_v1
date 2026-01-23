"use client";
import Link from "next/link";
import { Plus } from "lucide-react";

type HeaderProps = {
  add?: boolean
};

export default function Header({ add }: HeaderProps) {
  return (
    <header className="custom-header">
      <h1 style={{alignSelf: 'center'}}>BeHive</h1>
      {
        add && (
          <div className="header-add-button">
            <Plus />
          </div>
        )
      }
    </header>
  );
}
