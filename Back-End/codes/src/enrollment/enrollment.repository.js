const prisma = require("../db");

const findAllEnrollments = async () => {
  const enrollments = await prisma.enrollment.findMany();

  return enrollments;
};

const insertEnrollment = async (
  studentId,
  courseId,
  teacherId,
  semester,
  grade,
  location,
  timePeriod,
  day
) => {
  const enrollment = await prisma.enrollment.create({
    data: {
      studentId,
      courseId,
      teacherId,
      semester,
      grade,
      location,
      timePeriod,
      day,
    },
  });

  return enrollment;
};

const findEnrollmentById = async (studentId, courseId) => {
  const enrollment = await prisma.enrollment.findUnique({
    where: {
      studentId_courseId: {
        studentId,
        courseId,
      },
    },
  });

  return enrollment;
};

const removeEnrollmentById = async (studentId, courseId) => {
  const enrollment = await prisma.enrollment.delete({
    where: {
      studentId_courseId: {
        studentId,
        courseId,
      },
    },
  });

  return enrollment;
};

const removeAllEnrollments = async () => {
  const enrollment = await prisma.enrollment.deleteMany();

  return enrollment;
};

const editEnrollmentById = async (
  studentId1,
  courseId1,
  studentId2,
  courseId2,
  teacherId,
  semester,
  grade,
  location,
  timePeriod,
  day
) => {
  const enrollment = await prisma.enrollment.update({
    where: {
      studentId_courseId: {
        studentId: studentId1,
        courseId: courseId1,
      },
    },
    data: {
      studentId: studentId2,
      courseId: courseId2,
      teacherId,
      semester,
      grade,
      location,
      timePeriod,
      day,
    },
  });

  return enrollment;
};

module.exports = {
  findAllEnrollments,
  findEnrollmentById,
  insertEnrollment,
  removeEnrollmentById,
  removeAllEnrollments,
  editEnrollmentById,
};
