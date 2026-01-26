"use server";
import { revalidatePath } from "next/cache";
import { Task } from "@/types/task";
import { User } from "@/types/user";
import prisma from "@/lib/prisma";

export async function createPrismaTask(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const score = Number(formData.get("score"));
  const frequencyTime =
    Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000;
  // Convert days to milliseconds
  const lastTimeDone = Date.now() - Number(frequencyTime); // Set to pending automaticly
  await prisma.task.create({
    data: {
      name: String(name),
      description: String(description),
      score,
      frequencyTime: BigInt(frequencyTime), // Prisma BigInt type
      lastTimeDone: BigInt(lastTimeDone), // Prisma BigInt type
    },
  });
  revalidatePath("/");
}

export async function deletePrismaTask(task: Task) {
  await prisma.task.delete({
    where: {
      id: task.id,
    },
  });
  revalidatePath("/");
}

export async function updatePrismaTask(task: Task, formData: FormData) {
  "use server";

  const taskId = task.id;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const score = Number(formData.get("score"));
  const frequencyTime =
    Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000;

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      name,
      description,
      score,
      frequencyTime: BigInt(frequencyTime),
    },
  });

  revalidatePath("/");
}

export async function createPrismaUser(formData: FormData) {
  const name = formData.get("name");
  const score = Number(formData.get("score"));

  await prisma.user.create({
    data: {
      name: String(name),
      score,
    },
  });
  revalidatePath("/");
}

export async function deletePrismaUser(user: User) {
  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });
  revalidatePath("/");
}

export async function updatePrismaUser(user: User, formData: FormData) {
  "use server";

  const userId = user.id;
  const name = formData.get("name") as string;

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });

  revalidatePath("/");
}

export async function markPrismaTaskAsDone(task: Task, userId: string) {
  "use server";
  const taskId = task.id;

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      lastTimeDone: Date.now(),
    },
  });

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      score: { increment: task.score },
    },
  });

  revalidatePath("/");
}
