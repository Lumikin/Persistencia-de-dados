const pool = require('../config/db');

const selectTodosAlunos = async () => {
    const sql = "SELECT * FROM alunos;";
    const [rows] = await pool.query(sql);
    return rows;
}

const selectAluno = async (id) => {
    const sql = `select * from alunos where id_aluno=?;`
    const [rows] = await pool.query(sql, id);
    return rows;
}

const insertAluno = async (pNome, pMatricula) => {
    const sql = 'INSERT INTO alunos (nome, matricula) VALUES (?,?);'
    const values = [pNome, pMatricula]
    const [rows] = await pool.query(sql, values)
    return rows;
};

const UpdateAluno = async (pID, pNome, pMatricula) => {
    const sql = 'UPDATE alunos SET nome = ?, matricula = ? WHERE id_aluno =?;'
    const values = [pNome, pMatricula, pID]
    const [rows] = await pool.query(sql, values)
    return rows;
};

const deleteAluno = async (pID) => {
    const sql = 'DELETE FROM alunos WHERE id_aluno = ?;';
    const values = [pID];
    const [rows] = await pool.query(sql, values);
    return rows;
}

module.exports = { selectTodosAlunos, selectAluno, insertAluno, UpdateAluno, deleteAluno }