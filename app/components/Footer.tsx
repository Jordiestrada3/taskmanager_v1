"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-item">
        <Link href="/" rel="Pending Tasks">
          Pending Tasks
        </Link>
      </div>
      <div className="custom-footer-item">
        <Link href="/tasks" rel="Tasks">
          Tasks
        </Link>
      </div>
      <div className="custom-footer-item">
        <Link href="/users" rel="Users">
          Users
        </Link>
      </div>
    </footer>
  );
}
