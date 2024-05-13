const {
  findAllCourses,
  findCourseById,
  removeAllCourses,
  removeCourseById,
  insertCourse,
  editCourseById,
} = require("./course.repository");

const getAllCourses = async () => {
  const courses = await findAllCourses();

  return courses;
};

const getCourseById = async (id) => {
  const course = await findCourseById(id);

  return course;
};

const addCourse = async (title, credit) => {
  const course = await insertCourse(title, credit);

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

const updateCourseById = async (id, title, credit) => {
  const course = await editCourseById(id, title, credit);

  return course;
};

module.exports = {
  getAllCourses,
  getCourseById,
  deleteCourseById,
  deleteAllCourses,
  addCourse,
  updateCourseById,
};
