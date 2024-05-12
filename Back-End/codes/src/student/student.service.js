const {
  findAllStudents,
  findStudentById,
  removeAllStudents,
  removeStudentById,
  insertStudent,
  editStudentById,
} = require("./student.repository");

const getAllStudents = async () => {
  const students = await findAllStudents();

  return students;
};

const addStudent = async (name, email, password) => {
  const student = await insertStudent(name, email, password);

  return student;
};

const getStudentById = async (id) => {
  const student = await findStudentById(id);

  return student;
};

const deleteStudentById = async (id) => {
  const student = await removeStudentById(id);

  return student;
};

const deleteAllStudents = async () => {
  const students = await removeAllStudents();

  return students;
};

const updateStudentById = async (id, name, email, password) => {
  const student = await editStudentById(id, name, email, password);

  return student;
};

module.exports = {
  getAllStudents,
  getStudentById,
  deleteStudentById,
  deleteAllStudents,
  addStudent,
  updateStudentById,
};
