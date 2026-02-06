import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const memberData: Prisma.MemberCreateInput[] = [
  {
    name: "John Cena",
    score: 0,
  },
  {
    name: "Jane Doe",
    score: 0,
  },
];

const taskData: Prisma.TaskCreateInput[] = [
  {
    name: "Escombrar la casa",
    score: 3,
    description: "Netejar tota la casa amb escombra i recollir la brutícia.",
    frequencyTime: 86400000, // in ms (24 hours)
    lastTimeDone: Date.now() - 259200000, // timestamp 3 days ago from now
  },
  {
    name: "Fer el menjar",
    score: 5,
    description: "Preparar el menjar per a tota la família.",
    frequencyTime: 172800000, // in ms (48 hours)
    lastTimeDone: Date.now() - 172800000, // timestamp 48 hours ago from now
  },
];

export async function main() {
  for (const member of memberData) {
    await prisma.member.create({ data: member });
  }
  for (const task of taskData) {
    await prisma.task.create({ data: task });
  }
}

main();
