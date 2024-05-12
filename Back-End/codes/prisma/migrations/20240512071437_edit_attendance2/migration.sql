/*
  Warnings:

  - The primary key for the `attendance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `attendance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "attendance_pkey" PRIMARY KEY ("enrollmentStudentId", "enrollmentCourseId", "date");
