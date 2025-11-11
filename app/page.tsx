import Image from "next/image";
import PendingTasksList from "./components/PendingTasksList";
import { get } from "http";
import { getTasks } from "../utils/utils";

export default async function Home() {

  const tasks = await getTasks();

  return (
    <main style={{ margin: 20 }}>
      <PendingTasksList tasks={tasks} />
    </main>
  );
}
