import Footer from "../components/Footer";
import Header from "../components/Header";
import TasksList from "../components/TasksList";
import prisma from "@/lib/prisma";
import { Info  } from "lucide-react";

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
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              fontSize: 14,
              marginBottom: 10,
              gap: 5,
              backgroundColor: "#fff8e1",
              color: "#856404",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              border: "2px solid #ffb300",
            }}
          >
            <Info style={{color: "#ffb300"}} />
            <p>Manage and organize your hive's tasks here.</p>
          
        </div>
        <TasksList tasks={formattedTasks} />
      </main>

      <Footer />
    </div>
  );
}
