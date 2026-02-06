"use client";

import { Member } from "@/types/member";
import MemberCard from "./MemberCard";
import { useState } from "react";

type MembersListProps = {
  members: Member[];
};

export default function MembersList({ members }: MembersListProps) {
  const [openId, setOpenId] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {members.map((member, index) => (
        <MemberCard
          key={index}
          member={member}
          isOpen={openId === member.id}
          onToggle={() => setOpenId(openId === member.id ? "" : member.id)}
        />
      ))}
    </div>
  );
}
