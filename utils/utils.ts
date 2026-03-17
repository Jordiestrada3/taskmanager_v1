"use server";
import { revalidatePath } from "next/cache";
import { Task } from "@/types/task";
import { Member } from "@/types/member";
import { Event } from "@/types/event";
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
  await prisma.task.update({
    where: {
      id: task.id,
    },
    data: {
      isActive: false,
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

export async function createPrismaMember(formData: FormData) {
  const name = formData.get("name");
  const score = Number(formData.get("score"));

  await prisma.member.create({
    data: {
      name: String(name),
      score,
    },
  });
  revalidatePath("/");
}

export async function deletePrismaMember(member: Member) {
  await prisma.member.update({
    where: {
      id: member.id,
    },
    data: {
      isActive: false,
    },
  });
  revalidatePath("/");
}

export async function updatePrismaMember(member: Member, formData: FormData) {
  "use server";

  const memberId = member.id;
  const name = formData.get("name") as string;

  await prisma.member.update({
    where: {
      id: memberId,
    },
    data: {
      name,
    },
  });

  revalidatePath("/");
}

export async function createPrismaEvent(task: Task, member: Member) {
  await prisma.event.create({
    data: {
      memberId: member.id,
      memberName: member.name,
      taskId: task.id,
      taskName: task.name,
      taskDescription: task.description,
      taskScore: task.score,
    },
  });
}

export async function deletePrismaEvent(event: Event) {
  if (event.correction) {
    await prisma.event.delete({
      where: {
        id: event.id,
      },
    });
  } else {
    await prisma.event.create({
      data: {
        memberId: event.memberId,
        memberName: event.memberName,
        taskId: event.taskId,
        taskName: event.taskName,
        taskDescription: event.taskDescription,
        taskScore: -event.taskScore,
        correction: true,
      },
    });
  }

  revalidatePath("/");
}

export async function markPrismaTaskAsDone(task: Task, member: Member) {
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

  await createPrismaEvent(task, member);

  revalidatePath("/");
}
