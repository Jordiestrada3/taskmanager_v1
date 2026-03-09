"use client";

import { Member } from "@/types/member";
import { Event } from "@/types/event";
import MemberCard from "./MemberCard";
import { useState } from "react";

type MembersListProps = {
  members: Member[];
  events: Event[];
};

export default function MembersList({ members, events }: MembersListProps) {
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
      {[...members]
      .sort((a, b) => b.score - a.score)
      .map((member, index) => (
        <MemberCard
          key={index}
          member={member}
          memberEvents={events.filter((e) => e.memberId === member.id)} // Filter events for the current member
          isOpen={openId === member.id}
          onToggle={() => setOpenId(openId === member.id ? "" : member.id)}
        />
      ))}
    </div>
  );
}
