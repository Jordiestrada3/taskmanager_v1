import PendingTasksList from "./components/PendingTasksList";
import { getTasks, getUsers } from "../utils/utils";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { User } from "@/types/user";
import { Task } from "@/types/task";
import prisma from "@/lib/prisma";

export default async function Home() {
  const tasks: Task[] = await getTasks();
  const users: User[] = await getUsers();

  const prismaUsers = await prisma.user.findMany();
  const prismaTasks = await prisma.task.findMany();

  const formattedTasks = prismaTasks.map((task) => ({
    ...task,
    frequencyTime: Number(task.frequencyTime), // Convert BigInt from Prisma db to number
    lastTimeDone: Number(task.lastTimeDone), // Convert BigInt from Prisma db to number
  }));

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Pending Tasks Page</h1>
        <PendingTasksList tasks={formattedTasks} users={prismaUsers} />
      </main>
      <Footer />
    </div>
  );
}
