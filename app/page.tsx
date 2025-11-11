import Image from "next/image";
import PendingTasksList from "./components/PendingTasksList";
import { get } from "http";

export default async function Home() {

    const res = await fetch("http://localhost:3000/database.json");
    const tasks = await res.json();
    console.log("dev ~ Home ~ tasks:", tasks)


  return (
    <main style={{ margin: 20 }}>
      <PendingTasksList tasks={tasks} />
    </main>
  );
}
