"use client";
import Link from "next/link";
import { useState } from "react";

import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="custom-footer">
      <div className={pathname === "/tasks" ? "footer-item active-footer-item" : "footer-item"}>
        <Link href="/tasks" rel="Tasks">
          Tasks
        </Link>
      </div>
      <div className={pathname === "/" ? "footer-item active-footer-item" : "footer-item"}>
        <Link href="/" rel="Pending Tasks">
          Pending Tasks
        </Link>
      </div>
      <div className={pathname === "/users" ? "footer-item active-footer-item" : "footer-item"}>
        <Link href="/users" rel="Users">
          Users
        </Link>
      </div>
    </footer>
  );
}
