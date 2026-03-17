import { Event } from "@/types/event";
import { useRef } from "react";
import { Trash2 } from "lucide-react";
import ScoreHex from "./ScoreHex";
import { deletePrismaEvent } from "@/utils/utils";
import DeleteButton from "./DeleteButon";

type EventCardProps = {
  event: Event;
  isOpen: boolean;
  onToggle: () => void;
};

export default function EventCard({ event, isOpen, onToggle }: EventCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const eventDate =
    event.createdAt.getDate() +
    "/" +
    (event.createdAt.getMonth() + 1) +
    "/" +
    event.createdAt.getFullYear() +
    " - " +
    event.createdAt.getHours() +
    ":" +
    event.createdAt.getMinutes() +
    ":" +
    event.createdAt.getSeconds();

  const backgroundColor = event.taskScore > 0 ? "#FBFBFA" : "#FFEAEA";
  const hexColor = event.taskScore > 0 ? "#ffb300" : "#e57373";
  const doneOrDeleted =
    (event.correction ? "Correction for: " : "") +
    (event.taskScore > 0 ? "Done: " : "Deleted: ");

  return (
    <div className="custom-card" style={{ backgroundColor }}>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={onToggle}
      >
        {
          event.correction ?
          <div>
            <h1 style={{ lineHeight: 1.4 }}>Correction for {event.taskName}</h1>
            <p style={{ lineHeight: 1.4 }}>Deleted on {eventDate}</p>
            <p style={{ lineHeight: 1.4 }}>The task was done by {event.memberName}</p>
          </div>
          :
          <div>
            <h1 style={{ lineHeight: 1.4 }}>{event.taskName}</h1>
            <p style={{ lineHeight: 1.4 }}>Done on {eventDate}</p>
            <p style={{ lineHeight: 1.4 }}>By {event.memberName}</p>
          </div>
        }

        <ScoreHex score={event.taskScore} hexColor={hexColor} />
      </div>
      <p style={{ paddingTop: 15, fontWeight: 600, fontSize: 15 }}>
        {event.taskDescription}
      </p>

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
              justifyContent: "center",
            }}
          >
            <DeleteButton action={() => deletePrismaEvent(event)} item={event}>
              <button
                style={{
                  color: "white",
                  width: "48%",
                  height: 50,
                  backgroundColor: "#e57373",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Trash2 />
              </button>
            </DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
