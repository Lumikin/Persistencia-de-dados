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

// Selecionar por ID

const buscarIdAluno = async (req, res) => {
    try {
        const id = Number(req.params.id)
        // Verificacao se é um numeral e inteiro
        if (!id || !Number.isInteger(id)) {
            res.status(400).json({ message: 'Aluno Invalido' })
        }
        const resultadoAluno = await alunoModel.selecionaAluno(id);

        // retornar o ID do aluno
        res.status(200).json({ message: 'Aluno encontrado!', dados: resultadoAluno })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro Interno do Servidor', errorMessage: error.message });
    }
}


const criarNovoRegistro = async (req, res) => {
    try {
        const {nome, matricula} = req.body
        const resultadoRegistro = await alunoModel.inserirAluno(nome, matricula)
        if (!String(nome) || !String(matricula) || nome.length < 3 || matricula.length !== 5) {
            res.status(400).json({ message: 'verifique os dados e tente novamente' })
        }
        res.status(201).json({message: 'Resgistro incluido com sucesso', result: resultadoRegistro});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro Interno do Servidor', errorMessage: error.message });
    }
}
module.exports = { buscarTodosAlunos, buscarIdAluno, criarNovoRegistro }