import { Task } from "@/types/task";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MembersList from "../components/MembersList";
import prisma from "@/lib/prisma";
import React from "react";
import LoginForm from "../components/LoginForm";

export const dynamic = "force-dynamic"; // To show latest data in the build

export default async function LoginPage() {
  return (
    <div className="site">
      <Header />
      <main style={{ margin: 10 }}>
        <h1>Login</h1>
        {/* <LoginForm
          buttonText={"Login"}
          action={console.log("dev: user logged in")}
        /> */}
      </main>
    </div>
  );
}
