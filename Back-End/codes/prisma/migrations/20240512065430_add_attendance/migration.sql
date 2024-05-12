-- CreateTable
CREATE TABLE "attendance" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "wasPresent" BOOLEAN NOT NULL,
    "wasLate" BOOLEAN NOT NULL,
    "enrollmentStudentId" INTEGER,
    "enrollmentCourseId" INTEGER,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_enrollmentStudentId_enrollmentCourseId_fkey" FOREIGN KEY ("enrollmentStudentId", "enrollmentCourseId") REFERENCES "enrollment"("studentId", "courseId") ON DELETE SET NULL ON UPDATE CASCADE;
