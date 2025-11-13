import Image from "next/image";
import PendingTasksList from "../components/PendingTasksList";
import { get } from "http";
import { getTasks, createTask } from "../../utils/utils";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <main
      style={{
        margin: 20,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Tasks Page</h1>
      <PendingTasksList tasks={tasks} />
      <TaskForm />
      <Footer />
    </main>
  );
}
