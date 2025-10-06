const alunoModel = require('../models/alunoModel')
const buscarTodosAlunos = async (req, res) => {

    try {
        const resultado = await alunoModel.selecionaTodosAlunos();
        res.status(200).json({ message: 'Rota funcionando perfeitamente!', dados: resultado })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'ocorreu um erro no servidor', errorMessage: error.message });
    }
}

const buscarAluno = async (req, res) => {
    try {
        const id = req.params.id
        const resultadoAluno = await alunoModel.selecionaAluno(id);
        res.status(200).json({ message: 'Aluno encontrado!', dados: resultadoAluno })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Aluno não encontrado', errorMessage: error.message });
    }
}
module.exports = { buscarTodosAlunos, buscarAluno }