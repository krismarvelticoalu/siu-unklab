const prisma = require("../db");

const findAllStudents = async () => {
  const students = await prisma.student.findMany();

  return students;
};

const insertStudent = async (name, email, password) => {
  const student = await prisma.student.create({
    data: {
      name,
      email,
      password,
    },
  });

  return student;
};

const findStudentById = async (id) => {
  const student = await prisma.student.findUnique({
    where: {
      id,
    },
  });

  return student;
};

const removeStudentById = async (id) => {
  const student = await prisma.student.delete({
    where: {
      id,
    },
  });

  return student;
};

const removeAllStudents = async () => {
  const student = await prisma.student.deleteMany();

  // Reset the sequence back to 1 after deleting all students
  const tableName = "student"; // replace with your table name
  const columnName = "id"; // replace with your column name
  await prisma.$executeRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('${tableName}', '${columnName}'), 1, false);`
  );

  return student;
};

const editStudentById = async (id, name, email, password) => {
  const student = await prisma.student.update({
    where: {
      id,
    },
    data: { name, email, password },
  });

  return student;
};

module.exports = {
  findAllStudents,
  findStudentById,
  insertStudent,
  removeStudentById,
  removeAllStudents,
  editStudentById,
};
