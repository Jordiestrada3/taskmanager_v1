"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="custom-header">
      <h1>
        <Link href="/" rel="Pending Tasks">
          Task Manager
        </Link>
      </h1>
    </header>
  );
}