const connection = require('../helpers/connection');

const getAll = async () => {
  const [rows] = await connection.execute(
    'SELECT * FROM database_example.persons'
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    `SELECT * FROM database_example.persons
    WHERE id = ?`,
    [id]
  );
  return rows;
};

const add = async (name, age) => {
  const [
    row,
  ] = await connection.execute(
    'INSERT INTO database_example.persons (name, age) VALUES (?, ?)',
    [name, age]
  );
  const result = {
    id: row.insertId,
    name,
    age,
  };
  return result;
};

const update = async (id, name, age) => {
  const [result] = await connection.execute(
    `UPDATE database_example.persons
      SET name = ?, age = ?
      WHERE id = ?`,
    [name, age, id]
  );

  return result.affectedRows;
};

const exclude = async (id) =>
  connection.execute(
    `DELETE FROM database_example.persons
    WHERE id = ?`,
    [id]
  );

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};