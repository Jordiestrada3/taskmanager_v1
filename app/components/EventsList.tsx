"use client";

import EventCard from "./EventCard";
import { useState } from "react";
import { Event } from "@/types/event";

type EventsListProps = {
  events: Event[];
};

export default function EventsList({
  events,
}: EventsListProps) {
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
      {[...events]
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .map((event, index) => (
          <EventCard
            key={index}
            isOpen={openId === event.id}
            onToggle={() => setOpenId(openId === event.id ? "" : event.id)}
            event={event}
          />
        ))}
    </div>
  );
}
