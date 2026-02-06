

import PendingTasksList from "./components/PendingTasksList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // To show latest data in the build


export default async function Loading() {



  return (
    <div className="site">
      <Header />
      <main style={{ margin: 10, color: 'grey' }}>
        Loading...
      </main>
      <Footer />
    </div>
  );
}