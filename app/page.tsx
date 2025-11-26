import Image from "next/image";
import PendingTasksList from "./components/PendingTasksList";
import { get } from "http";
import { getTasks, createTask } from "../utils/utils";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Pending Tasks Page</h1>
        <PendingTasksList tasks={tasks} />
      </main>
      <Footer />
    </div>
  );
}
