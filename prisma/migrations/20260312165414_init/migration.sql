-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_taskId_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "memberId" DROP NOT NULL,
ALTER COLUMN "taskId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
