import { getTasks, createTask } from "../../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TasksPageContents from "../components/TasksPageContents";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Tasks Page</h1>
        <TasksPageContents tasks={tasks} />
      </main>
      <Footer />
    </div>
  );
}
