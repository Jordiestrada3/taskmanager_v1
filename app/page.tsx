import PendingTasksList from "./components/PendingTasksList";
import { getTasks, getUsers } from "../utils/utils";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { User } from "@/types/user";
import { Task } from "@/types/task";

export default async function Home() {
  const tasks: Task[] = await getTasks();
  const users: User[] = await getUsers();

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Pending Tasks Page</h1>
        <PendingTasksList tasks={tasks} users={users} />
      </main>
      <Footer />
    </div>
  );
}
