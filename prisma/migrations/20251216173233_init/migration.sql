/*
  Warnings:

  - Changed the type of `frequencyTime` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lastTimeDone` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "frequencyTime",
ADD COLUMN     "frequencyTime" BIGINT NOT NULL,
DROP COLUMN "lastTimeDone",
ADD COLUMN     "lastTimeDone" BIGINT NOT NULL;
