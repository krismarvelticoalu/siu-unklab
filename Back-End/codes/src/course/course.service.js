const {
  findAllCourses,
  findCourseById,
  removeAllCourses,
  removeCourseById,
  insertCourse,
} = require("./course.repository");

const getAllCourses = async () => {
  const courses = await findAllCourses();

  return courses;
};

const getCourseById = async (id) => {
  const course = await findCourseById(id);

  return course;
};

const addCourse = async (id, nama, ruangan, paralel) => {
  const course = await insertCourse(id, nama, ruangan, paralel);

  return course;
};

const deleteCourseById = async (id) => {
  const course = await removeCourseById(id);

  return course;
};

const deleteAllCourses = async () => {
  const courses = await removeAllCourses();

  return courses;
};

module.exports = {
  getAllCourses,
  getCourseById,
  deleteCourseById,
  deleteAllCourses,
  addCourse,
};
