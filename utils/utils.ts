import fs from "fs/promises";
import path from "path";

export async function getTasks() {
    const dataDirectory = path.join(process.cwd(), "data");
    const filePath = path.join(dataDirectory, "tasks.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const tasksData = JSON.parse(fileContents);
    return tasksData;
  }