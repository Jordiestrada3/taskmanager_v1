import Image from "next/image";
import TasksList from "../components/TasksList";
import { get } from "http";
import { getTasks, createTask } from "../../utils/utils";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer";
import FormTrigger from "../components/FormTrigger/FormTrigger";
import { Dialog } from "radix-ui";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        margin: "20px",
      }}
    >
      <TasksList tasks={tasks} />
      <FormTrigger />
      <Footer />
    </main>
  );
}
