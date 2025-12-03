import PendingTasksList from "./components/PendingTasksList";
import { getTasks, getUsers } from "../utils/utils";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default async function Home() {
  const tasks = await getTasks();
  const users = await getUsers();

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
