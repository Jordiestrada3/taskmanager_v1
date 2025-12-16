/*
  Warnings:

  - Added the required column `description` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `frequencyTime` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lastTimeDone` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "description" TEXT NOT NULL,
DROP COLUMN "frequencyTime",
ADD COLUMN     "frequencyTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "lastTimeDone",
ADD COLUMN     "lastTimeDone" TIMESTAMP(3) NOT NULL;
