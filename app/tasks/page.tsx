import Image from "next/image";
import TasksList from "../components/TasksList";
import { get } from "http";
import { getTasks, createTask } from "../../utils/utils";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer";
import FormTrigger from "../components/FormTrigger/FormTrigger";
import { Dialog } from "radix-ui";
import Header from "../components/Header";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Tasks Page</h1>
        <TasksList tasks={tasks} />
        <FormTrigger />
        <Footer />
      </main>
    </div>
  );
}
