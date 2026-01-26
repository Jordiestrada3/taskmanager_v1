import Footer from "../components/Footer";
import Header from "../components/Header";
import UsersList from "../components/UsersList";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // To show latest data in the build

export default async function UsersPage() {
  const prismaUsers = await prisma.user.findMany();

  return (
    <div className="site">
      <Header createType="user" />
      <main style={{ margin: 10 }}>
        <UsersList users={prismaUsers} />
      </main>
      <Footer />
    </div>
  );
}
