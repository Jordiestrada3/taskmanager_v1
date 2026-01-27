import { he } from "zod/locales";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TasksList from "../components/TasksList";
import prisma from "@/lib/prisma";
import { AlertTriangle } from "lucide-react";

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
        
          <div
            style={{
              width: "100%",
              borderRadius: 10,
              padding: "10px 0",
              textAlign: "center",
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
              gap: 5,
              backgroundColor: "#cac0a0",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <AlertTriangle />
            <p>This page is only for editing the task list.</p>
          
        </div>
        <TasksList tasks={formattedTasks} />
      </main>

      <Footer />
    </div>
  );
}
