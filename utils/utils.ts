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
  const score = Number(formData.get("score"));
  const frequencyTime = Number(formData.get("frequencyTime")) * 24 * 60 * 60 * 1000; // Convert days to milliseconds

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
  revalidatePath('/')
}


export async function deleteTask(task: object) {
  const filePath = path.join(process.cwd(), "data", "tasks.json");  
  const tasksData = await getTasks();
  const newTasksData = tasksData.filter((item: object) => item.id !== task.id);
  await fs.writeFile(filePath, JSON.stringify(newTasksData, null, 2));
  revalidatePath('/')
}







export async function updateTask() {
  // Placeholder for future implementation
}
