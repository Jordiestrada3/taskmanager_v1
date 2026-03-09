/*
  Warnings:

  - You are about to drop the column `points` on the `Event` table. All the data in the column will be lost.
  - Added the required column `score` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "points",
ADD COLUMN     "score" INTEGER NOT NULL;
