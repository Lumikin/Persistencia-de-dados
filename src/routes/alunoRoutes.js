const express = require('express')
const app = express()
const router = express.Router()
const alunoController = require('../controllers/alunoController');
const { inserirAluno } = require('../models/alunoModel');
router.get('/alunos', alunoController.buscarTodosAlunos); // => Mostra todos os alunos
router.get('/alunos/:id', alunoController.buscarIdAluno) // => Busca o aluno pelo ID
router.post('/alunos', alunoController.criarNovoRegistro) // => Criar novo aluno é POST não GET
router.put('/alunos/:id', alunoController.updateRegistro) // => Alterar um registro existente
router.delete('/alunos/:id', alunoController.delAluno) // => Deleta um Registro existente

module.exports = router 
