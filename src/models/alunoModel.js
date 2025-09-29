const pool = require('../config/db');

const selecionaTodosAlunos = async () => {
    const sql = "SELECT * FROM alunos;";
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = { selecionaTodosAlunos }