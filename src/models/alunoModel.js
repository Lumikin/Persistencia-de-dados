const pool = require('../config/db');

const selecionaTodosAlunos = async () => {
    const sql = "SELECT * FROM alunos;";
    const [rows] = await pool.query(sql);
    return rows;
}

const selecionaAluno = async (id) => {
    const sql = `select * from alunos where id_aluno=?;`
    const [rows] = await pool.query(sql, id);
    return rows;
}

const inserirAluno = async (pNome, pMatricula) => {
    const sql = 'INSERT INTO alunos (nome, matricula) VALUES (?,?);'
    const values = [pNome, pMatricula]
    const [rows] = await pool.query(sql, values )
    return rows;
};


module.exports = { selecionaTodosAlunos, selecionaAluno, inserirAluno }