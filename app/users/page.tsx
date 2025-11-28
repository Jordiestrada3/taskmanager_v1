import { getUsers } from "../../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UsersPageContents from "../components/UsersPageContents";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Users Page</h1>
        <UsersPageContents users={users} />
      </main>
      <Footer />
    </div>
  );
}
