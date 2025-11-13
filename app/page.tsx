import Image from "next/image";
import PendingTasksList from "./components/PendingTasksList";
import { get } from "http";
import { getTasks, createTask } from "../utils/utils";
import TaskForm from "./components/TaskForm";

export default async function Home() {

  const tasks = await getTasks();

  return (
    <main style={{ margin: 20 }}>
      <PendingTasksList tasks={tasks} />
      <TaskForm />
    </main>
  );
}
