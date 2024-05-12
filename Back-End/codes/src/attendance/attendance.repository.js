const prisma = require("../db");

const findAllAttendances = async () => {
  const attendances = await prisma.attendance.findMany();

  return attendances;
};

const insertAttendance = async (
  date,
  wasPresent,
  wasLate,
  enrollmentStudentId,
  enrollmentCourseId
) => {
  const attendance = await prisma.attendance.create({
    data: {
      date,
      wasPresent,
      wasLate,
      enrollmentStudentId,
      enrollmentCourseId,
    },
  });

  return attendance;
};

const findAttendanceById = async (
  enrollmentStudentId,
  enrollmentCourseId,
  date
) => {
  const attendance = await prisma.attendance.findUnique({
    where: {
      enrollmentStudentId_enrollmentCourseId_date: {
        enrollmentStudentId,
        enrollmentCourseId,
        date,
      },
    },
  });

  return attendance;
};

const removeAttendanceById = async (
  enrollmentStudentId,
  enrollmentCourseId,
  date
) => {
  const attendance = await prisma.attendance.delete({
    where: {
      enrollmentStudentId_enrollmentCourseId_date: {
        enrollmentStudentId,
        enrollmentCourseId,
        date,
      },
    },
  });

  return attendance;
};

const removeAllAttendances = async () => {
  const attendance = await prisma.attendance.deleteMany();

  return attendance;
};

const editAttendanceById = async (
  enrollmentStudentId1,
  enrollmentCourseId1,
  date1,
  date2,
  wasPresent,
  wasLate,
  enrollmentStudentId2,
  enrollmentCourseId2
) => {
  const attendance = await prisma.attendance.update({
    where: {
      enrollmentStudentId_enrollmentCourseId_date: {
        enrollmentStudentId: enrollmentStudentId1,
        enrollmentCourseId: enrollmentCourseId1,
        date: date1,
      },
    },
    data: {
      date: date2,
      wasPresent: wasPresent,
      wasLate: wasLate,
      enrollmentStudentId: enrollmentStudentId2,
      enrollmentCourseId: enrollmentCourseId2,
    },
  });

  return attendance;
};

module.exports = {
  findAllAttendances,
  findAttendanceById,
  insertAttendance,
  removeAttendanceById,
  removeAllAttendances,
  editAttendanceById,
};
