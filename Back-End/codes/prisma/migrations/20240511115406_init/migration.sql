-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "timePeriod" TEXT NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
