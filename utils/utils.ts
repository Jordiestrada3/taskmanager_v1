"use server";
import fs from "fs/promises";
import { get } from "http";
import { revalidatePath } from "next/cache";
import path from "path";
import { Task } from "@/types/task";
import { User } from "@/types/user";

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

export async function deleteTask(task: Task) {
  const filePath = path.join(process.cwd(), "data", "tasks.json");
  const tasksData = await getTasks();
  const newTasksData = tasksData.filter((item: Task) => item.id !== task.id);
  await fs.writeFile(filePath, JSON.stringify(newTasksData, null, 2));
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

export async function deleteUser(user: User) {
  const filePath = path.join(process.cwd(), "data", "users.json");
  const usersData = await getUsers();
  const newUsersData = usersData.filter((item: User) => item.id !== user.id);
  await fs.writeFile(filePath, JSON.stringify(newUsersData, null, 2));
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
