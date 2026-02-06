

import PendingTasksList from "./components/PendingTasksList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import prisma from "@/lib/prisma";
import { Loader } from "lucide-react";

export const dynamic = "force-dynamic"; // To show latest data in the build


export default async function Loading() {



  return (
    <div className="site">
      <Header />
      <main style={{ margin: 10, color: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <span className="loader"/>
      </main>
      <Footer />
    </div>
  );
}