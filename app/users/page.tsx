import Image from "next/image";
import PendingTasksList from "../components/PendingTasksList";
import { get } from "http";
import { getTasks, createTask } from "../../utils/utils";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer";
import Link from "next/link";

export default async function UsersPage() {
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
      <h1>Users Page</h1>
      {/* <PendingTasksList tasks={tasks} /> */}
      {/* <TaskForm /> */}
      <Footer />
    </main>
  );
}
