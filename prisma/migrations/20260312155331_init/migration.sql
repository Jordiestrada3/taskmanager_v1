/*
  Warnings:

  - You are about to drop the column `description` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Event` table. All the data in the column will be lost.
  - Added the required column `memberName` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskDescription` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskName` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskScore` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "score",
ADD COLUMN     "memberName" TEXT NOT NULL,
ADD COLUMN     "taskDescription" TEXT NOT NULL,
ADD COLUMN     "taskId" TEXT NOT NULL,
ADD COLUMN     "taskName" TEXT NOT NULL,
ADD COLUMN     "taskScore" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
