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

const buscarIdAluno = async (req, res) => {
    try {
        const id = req.params.id
        if (!id || isNaN(id)) {
            res.status(400).json({ message: 'Aluno Invalido!' })
        }
        const resultadoAluno = await alunoModel.selecionaAluno(id);
        res.status(200).json({ message: 'Aluno encontrado!', dados: resultadoAluno })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro Interno do Servidor', errorMessage: error.message });
    }
}
module.exports = { buscarTodosAlunos, buscarIdAluno }