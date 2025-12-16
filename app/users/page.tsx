import { User } from "@/types/user";
import { getUsers } from "../../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UsersPageContents from "../components/UsersPageContents";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic'; // To show latest data in the build

export default async function UsersPage() {
  const users: User[] = await getUsers();

  const prismaUsers = await prisma.user.findMany();

  return (
    <div className="site">
      <Header />
      <main>
        <h1>Users Page</h1>
        <UsersPageContents users={prismaUsers} />
      </main>
      <Footer />
    </div>
  );
}
