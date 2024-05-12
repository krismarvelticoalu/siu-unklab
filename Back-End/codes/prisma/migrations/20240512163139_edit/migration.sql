/*
  Warnings:

  - You are about to drop the column `userId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `teacher` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_userId_fkey";

-- DropForeignKey
ALTER TABLE "teacher" DROP CONSTRAINT "teacher_userId_fkey";

-- DropIndex
DROP INDEX "student_userId_key";

-- DropIndex
DROP INDEX "teacher_userId_key";

-- AlterTable
ALTER TABLE "attendance" ALTER COLUMN "wasPresent" SET DEFAULT false,
ALTER COLUMN "wasLate" SET DEFAULT false;

-- AlterTable
ALTER TABLE "student" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL DEFAULT '12345';

-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL DEFAULT '12345';

-- DropTable
DROP TABLE "user";

-- DropEnum
DROP TYPE "userType";

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_email_key" ON "teacher"("email");
