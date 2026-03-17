import { Member } from "@/types/member";
import React, { useRef } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Event } from "@/types/event";
import ScoreHex from "./ScoreHex";
import { deletePrismaMember, markPrismaTaskAsDone } from "@/utils/utils";
import DeleteButton from "./DeleteButon";
import EditMemberDialog from "./EditMemberDialog";

type MemberCardProps = {
  member: Member;
  memberEvents: Event[];
  isOpen: boolean;
  onToggle: () => void;
};

export default function MemberCard({
  member,
  memberEvents,
  isOpen,
  onToggle,
}: MemberCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const memberScoreFromEvents = memberEvents.reduce(
    (acc, event) => acc + event.taskScore,
    0,
  );

  return (
    <div className="custom-card">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={onToggle}
      >
        <h1 style={{ lineHeight: 1.4 }}>{member.name}</h1>
        <ScoreHex score={memberScoreFromEvents} hexColor="#ffb300" />
      </div>
      <div
        className="card-extra"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div
          ref={contentRef}
          style={{
            paddingTop: 20,
          }}
        >
          <hr
            style={{
              opacity: 0.3,
              border: "none",
              borderTop: "1px solid #94a3b8",
              width: "75%",
              margin: "0 auto",
            }}
          />
          <div
            ref={contentRef}
            style={{
              padding: "25px 0 5px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EditMemberDialog member={member}>
              <button className="edit-item-button">
                <Pencil />
              </button>
            </EditMemberDialog>
            <DeleteButton
              action={() => deletePrismaMember(member)}
              item={member}
            >
              <button className="delete-item-button">
                <Trash2 />
              </button>
            </DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
