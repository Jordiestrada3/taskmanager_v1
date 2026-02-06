import Footer from "../components/Footer";
import Header from "../components/Header";
import MembersList from "../components/MembersList";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // To show latest data in the build

export default async function MembersPage() {
  const prismaMembers = await prisma.member.findMany();

  return (
    <div className="site">
      <Header createType="member" />
      <main style={{ margin: 10 }}>
        <MembersList members={prismaMembers} />
      </main>
      <Footer />
    </div>
  );
}
