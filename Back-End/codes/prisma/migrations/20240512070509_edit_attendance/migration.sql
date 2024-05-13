/*
  Warnings:

  - Made the column `enrollmentStudentId` on table `attendance` required. This step will fail if there are existing NULL values in that column.
  - Made the column `enrollmentCourseId` on table `attendance` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_enrollmentStudentId_enrollmentCourseId_fkey";

-- AlterTable
ALTER TABLE "attendance" ALTER COLUMN "enrollmentStudentId" SET NOT NULL,
ALTER COLUMN "enrollmentCourseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_enrollmentStudentId_enrollmentCourseId_fkey" FOREIGN KEY ("enrollmentStudentId", "enrollmentCourseId") REFERENCES "enrollment"("studentId", "courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
