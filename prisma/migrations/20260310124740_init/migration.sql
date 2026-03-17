/*
  Warnings:

  - You are about to drop the column `descriprion` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Event` table. All the data in the column will be lost.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "descriprion",
DROP COLUMN "timestamp",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "doneOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
