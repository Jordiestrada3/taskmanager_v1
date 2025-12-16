"use server";
import fs from "fs/promises";
import { get } from "http";
import { revalidatePath } from "next/cache";
import path from "path";
import { Task } from "@/types/task";
import { User } from "@/types/user";
import prisma from "@/lib/prisma";

export async function getTasks() {
  const dataDirectory = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirectory, "tasks.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const tasksData = JSON.parse(fileContents);
  return tasksData;
}

export async function createTask(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const score = Number(formData.get("score"));
  const frequencyTime =
    Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000; // Convert days to milliseconds

  const filePath = path.join(process.cwd(), "data", "tasks.json");
  const tasksData = await getTasks();
  const newTask = {
    id: Math.random().toString(36).substr(2, 9),
    name: name as string,
    score: score as number,
    frequencyTime: frequencyTime as number,
    lastTimeDone: Date.now() - frequencyTime, // Set to pending automaticly
  };
  const newTasksData = [...tasksData, newTask];
  await fs.writeFile(filePath, JSON.stringify(newTasksData, null, 2));
  revalidatePath("/");
}

export async function createPrismaTask(formData: FormData) {
  const name = formData.get("name");
  const score = Number(formData.get("score"));
  const frequencyTime =
    Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000;
  // Convert days to milliseconds
  const lastTimeDone = Date.now() - Number(frequencyTime); // Set to pending automaticly
  await prisma.task.create({
    data: {
      name: String(name),
      description: "hola soc una prova",
      score,
      frequencyTime: BigInt(frequencyTime), // Prisma BigInt type
      lastTimeDone: BigInt(lastTimeDone), // Prisma BigInt type
    },
  });
  revalidatePath("/");
}

export async function deleteTask(task: Task) {
  const filePath = path.join(process.cwd(), "data", "tasks.json");
  const tasksData = await getTasks();
  const newTasksData = tasksData.filter((item: Task) => item.id !== task.id);
  await fs.writeFile(filePath, JSON.stringify(newTasksData, null, 2));
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

export async function updateTask(task: Task, formData: FormData) {
  "use server";

  const taskId = task.id;
  const name = formData.get("name") as string;
  const score = Number(formData.get("score"));
  const frequencyTime =
    Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000;

  const filePath = path.join(process.cwd(), "data", "tasks.json");
  const tasksData = await getTasks();

  const updatedTasks = tasksData.map((task: Task) => {
    if (task.id === taskId) {
      return {
        ...task,
        name,
        score,
        frequencyTime,
      };
    }
    return task;
  });

  await fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2));

  revalidatePath("/");
}

export async function updatePrismaTask(task: Task, formData: FormData) {
  "use server";

  const taskId = task.id;
  const name = formData.get("name") as string;
  const score = Number(formData.get("score"));
  const frequencyTime =
    Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000;

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      name,
      score,
      frequencyTime: BigInt(frequencyTime),
    },
  });

  revalidatePath("/");
}

export async function getUsers() {
  const dataDirectory = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirectory, "users.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const usersData = JSON.parse(fileContents);
  return usersData;
}

export async function createUser(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const score = Number(formData.get("score"));

  const filePath = path.join(process.cwd(), "data", "users.json");
  const usersData = await getUsers();
  const newUser = {
    id: Math.random().toString(36).substr(2, 9),
    name: name as string,
    score: score as number,
  };
  const newUsersData = [...usersData, newUser];
  await fs.writeFile(filePath, JSON.stringify(newUsersData, null, 2));
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

export async function deleteUser(user: User) {
  const filePath = path.join(process.cwd(), "data", "users.json");
  const usersData = await getUsers();
  const newUsersData = usersData.filter((item: User) => item.id !== user.id);
  await fs.writeFile(filePath, JSON.stringify(newUsersData, null, 2));
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

export async function updateUser(user: User, formData: FormData) {
  "use server";

  const userId = user.id;
  const name = formData.get("name") as string;

  const filePath = path.join(process.cwd(), "data", "users.json");
  const usersData = await getUsers();

  const updatedUsers = usersData.map((user: User) => {
    if (user.id === userId) {
      return {
        ...user,
        name,
      };
    }
    return user;
  });

  await fs.writeFile(filePath, JSON.stringify(updatedUsers, null, 2));

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

export async function markTaskAsDone(task: Task, userId: string) {
  "use server";
  const taskId = task.id;

  const tasksFilePath = path.join(process.cwd(), "data", "tasks.json");
  const tasksData = await getTasks();

  const updatedTasks = tasksData.map((task: Task) => {
    if (task.id === taskId) {
      return { ...task, lastTimeDone: Date.now() };
    }
    return task;
  });

  await fs.writeFile(tasksFilePath, JSON.stringify(updatedTasks, null, 2));

  const usersFilePath = path.join(process.cwd(), "data", "users.json");
  const usersData = await getUsers();
  const updatedUsers = usersData.map((user: User) => {
    if (user.id === userId) {
      return { ...user, score: user.score + task.score };
    }
    return user;
  });

  await fs.writeFile(usersFilePath, JSON.stringify(updatedUsers, null, 2));
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
