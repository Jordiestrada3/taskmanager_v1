import Footer from "../components/Footer";
import Header from "../components/Header";
import TasksList from "../components/TasksList";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // To show latest data in the build

export default async function TasksPage() {

  const prismaTasks = await prisma.task.findMany();

  const formattedTasks = prismaTasks.map((task) => ({
    ...task,
    frequencyTime: Number(task.frequencyTime), // Convert BigInt from Prisma db to number
    lastTimeDone: Number(task.lastTimeDone), // Convert BigInt from Prisma db to number
  }));

  return (
    <div className="site">
      <Header createType="task" />
      <main style={{ margin: 10 }}>
        <TasksList tasks={formattedTasks}/>
      </main>
      <Footer />
    </div>
  );
}
