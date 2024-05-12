/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userType" AS ENUM ('STUDENT', 'TEACHER');

-- AlterTable
ALTER TABLE "student" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "teacher" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "type" "userType" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "student_userId_key" ON "student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_userId_key" ON "teacher"("userId");

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
