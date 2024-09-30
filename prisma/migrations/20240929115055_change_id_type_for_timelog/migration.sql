/*
  Warnings:

  - The primary key for the `TimeLog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `TimeLog` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "TimeLog" DROP CONSTRAINT "TimeLog_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "TimeLog_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "TimeLog_userId_idx" ON "TimeLog"("userId");

-- CreateIndex
CREATE INDEX "TimeLog_categoryId_idx" ON "TimeLog"("categoryId");
