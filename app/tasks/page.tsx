import { Task } from "@/types/task";
import { getTasks, createTask } from "../../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TasksPageContents from "../components/TasksPageContents";
import prisma from '@/lib/prisma'

export default async function TasksPage() {
  const tasks: Task[] = await getTasks();

  const prismaTasks = await prisma.task.findMany()

  const formattedTasks = prismaTasks.map(task => ({
  ...task,
  frequencyTime: Number(task.frequencyTime), // Convert BigInt from Prisma db to number
  lastTimeDone: Number(task.lastTimeDone), // Convert BigInt from Prisma db to number
}));


  return (
    <div className="site">
      <Header />
      <main>
        <h1>Tasks Page</h1>
        <TasksPageContents tasks={formattedTasks} />
      </main>
      <Footer />
    </div>
  );
}
