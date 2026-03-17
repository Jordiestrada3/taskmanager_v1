import EventsList from "../components/EventsList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // To show latest data in the build

export default async function EventsPage() {
  const prismaEvents = await prisma.event.findMany();

  return (
    <div className="site">
      <Header createType="member" />
      <main style={{ margin: 10 }}>
        <h1 style={{ textAlign: "left", fontSize: 36, width: "100%", padding: "0px 25px" }}>Events</h1>
        <EventsList events={prismaEvents} />
      </main>
      <Footer />
    </div>
  );
}
