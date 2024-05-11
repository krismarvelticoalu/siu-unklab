/*
  Warnings:

  - You are about to drop the column `day` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `timePeriod` on the `course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "day",
DROP COLUMN "location",
DROP COLUMN "teacherId",
DROP COLUMN "timePeriod";

-- CreateTable
CREATE TABLE "enrollment" (
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "grade" TEXT,
    "location" TEXT NOT NULL,
    "timePeriod" TEXT NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "enrollment_pkey" PRIMARY KEY ("studentId","courseId")
);

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
