const buscarTodosAlunos = (req, res) => {
    try {
        console.log('Rota funcionando corretamente')
        res.status(200).json({message: 'Rota funcionando perfeitamente!'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'ocorreu um erro no servidor', errorMessage: error.message });
    }
}

module.exports = { buscarTodosAlunos }