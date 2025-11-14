"use server";
import fs from "fs/promises";
import { get } from "http";
import { revalidatePath } from "next/cache";
import path from "path";

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
  const score = formData.get("score");
  // const resetTime = formData.get("resetTime");

  const filePath = path.join(process.cwd(), "data", "tasks.json");  
  const tasksData = await getTasks();
  const newTask = {
        id: 1,
        name: name,
        score: score,
        pending: true,
        resetTime: null,
        createdAt: "2024-06-15T10:00:00Z",
    };
  tasksData.push(newTask);
  await fs.writeFile(filePath, JSON.stringify(tasksData, null, 2));
  revalidatePath('/')
}








export async function updateTask() {
  // Placeholder for future implementation
}

export async function deleteTask() {
  // Placeholder for future implementation
}
