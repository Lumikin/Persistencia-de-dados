const pool = require('../config/db');

const selecionaTodosAlunos = async () => {
    const sql = "SELECT * FROM alunos;";
    const [rows] = await pool.query(sql);
    return rows;
}

const selecionaAluno = async (id) => {
    const sql = `SELECT * FROM alunos where id_aluno=?;`
    const [rows] = await pool.query(sql, id);
    return rows;
}


module.exports = { selecionaTodosAlunos, selecionaAluno }