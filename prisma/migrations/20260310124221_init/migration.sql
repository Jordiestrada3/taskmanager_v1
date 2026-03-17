/*
  Warnings:

  - You are about to drop the column `taskId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `descriprion` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_taskId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "taskId",
ADD COLUMN     "descriprion" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
