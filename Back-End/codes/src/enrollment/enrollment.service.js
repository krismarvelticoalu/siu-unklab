const {
  findAllEnrollments,
  findEnrollmentById,
  removeAllEnrollments,
  removeEnrollmentById,
  insertEnrollment,
  editEnrollmentById,
} = require("./enrollment.repository");

const getAllEnrollments = async () => {
  const enrollments = await findAllEnrollments();

  return enrollments;
};

const addEnrollment = async (
  studentId,
  courseId,
  teacherId,
  semester,
  grade,
  location,
  timePeriod,
  day
) => {
  const enrollment = await insertEnrollment(
    studentId,
    courseId,
    teacherId,
    semester,
    grade,
    location,
    timePeriod,
    day
  );

  return enrollment;
};

const getEnrollmentById = async (studentId, courseId) => {
  const enrollment = await findEnrollmentById(studentId, courseId);

  return enrollment;
};

const deleteEnrollmentById = async (studentId, courseId) => {
  const enrollment = await removeEnrollmentById(studentId, courseId);

  return enrollment;
};

const deleteAllEnrollments = async () => {
  const enrollments = await removeAllEnrollments();

  return enrollments;
};

const updateEnrollmentById = async (
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
  const enrollment = await editEnrollmentById(
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
  );

  return enrollment;
};

module.exports = {
  getAllEnrollments,
  getEnrollmentById,
  deleteEnrollmentById,
  deleteAllEnrollments,
  addEnrollment,
  updateEnrollmentById,
};
