/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Course";

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "timePeriod" TEXT NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);
