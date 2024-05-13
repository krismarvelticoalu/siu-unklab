-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "attendance_enrollmentStudentId_enrollmentCourseId_fkey";

-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_studentId_fkey";

-- DropForeignKey
ALTER TABLE "enrollment" DROP CONSTRAINT "enrollment_teacherId_fkey";

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollment" ADD CONSTRAINT "enrollment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_enrollmentStudentId_enrollmentCourseId_fkey" FOREIGN KEY ("enrollmentStudentId", "enrollmentCourseId") REFERENCES "enrollment"("studentId", "courseId") ON DELETE CASCADE ON UPDATE CASCADE;
