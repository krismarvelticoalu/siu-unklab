const {
  findAllAttendances,
  findAttendanceById,
  removeAllAttendances,
  removeAttendanceById,
  insertAttendance,
  editAttendanceById,
} = require("./attendance.repository");

const getAllAttendances = async () => {
  const attendances = await findAllAttendances();

  return attendances;
};

const addAttendance = async (
  date,
  wasPresent,
  wasLate,
  enrollmentStudentId,
  enrollmentCourseId
) => {
  const attendance = await insertAttendance(
    date,
    wasPresent,
    wasLate,
    enrollmentStudentId,
    enrollmentCourseId
  );

  return attendance;
};

const getAttendanceById = async (
  enrollmentStudentId,
  enrollmentCourseId,
  date
) => {
  const attendance = await findAttendanceById(
    enrollmentStudentId,
    enrollmentCourseId,
    date
  );

  return attendance;
};

const deleteAttendanceById = async (
  enrollmentStudentId,
  enrollmentCourseId,
  date
) => {
  const attendance = await removeAttendanceById(
    enrollmentStudentId,
    enrollmentCourseId,
    date
  );

  return attendance;
};

const deleteAllAttendances = async () => {
  const attendances = await removeAllAttendances();

  return attendances;
};

const updateAttendanceById = async (
  enrollmentStudentId1,
  enrollmentCourseId1,
  date1,
  date2,
  wasPresent,
  wasLate,
  enrollmentStudentId2,
  enrollmentCourseId2
) => {
  const attendance = await editAttendanceById(
    enrollmentStudentId1,
    enrollmentCourseId1,
    date1,
    date2,
    wasPresent,
    wasLate,
    enrollmentStudentId2,
    enrollmentCourseId2
  );

  return attendance;
};

module.exports = {
  getAllAttendances,
  getAttendanceById,
  deleteAttendanceById,
  deleteAllAttendances,
  addAttendance,
  updateAttendanceById,
};
