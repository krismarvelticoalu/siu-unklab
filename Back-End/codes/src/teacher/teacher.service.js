const {
  findAllTeachers,
  findTeacherById,
  removeAllTeachers,
  removeTeacherById,
  insertTeacher,
  editTeacherById,
} = require("./teacher.repository");

const getAllTeachers = async () => {
  const teachers = await findAllTeachers();

  return teachers;
};

const addTeacher = async (name, email, password) => {
  const teacher = await insertTeacher(name, email, password);

  return teacher;
};

const getTeacherById = async (id) => {
  const teacher = await findTeacherById(id);

  return teacher;
};

const deleteTeacherById = async (id) => {
  const teacher = await removeTeacherById(id);

  return teacher;
};

const deleteAllTeachers = async () => {
  const teachers = await removeAllTeachers();

  return teachers;
};

const updateTeacherById = async (id, name, email, password) => {
  const teacher = await editTeacherById(id, name, email, password);

  return teacher;
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  deleteTeacherById,
  deleteAllTeachers,
  addTeacher,
  updateTeacherById,
};
