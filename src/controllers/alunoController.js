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


module.exports = { buscarTodosAlunos }