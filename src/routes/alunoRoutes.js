const express = require('express')
const app = express()
const router = express.Router()
const alunoController = require('../controllers/alunoController');
const { inserirAluno } = require('../models/alunoModel');
router.get('/alunos', alunoController.buscarTodosAlunos);
//Nova rota
router.get('/alunos/:id', alunoController.buscarIdAluno)
router.post('/alunos', alunoController.criarNovoRegistro) // => Criar novo aluno é POST não GET
router.put('/alunos/:id', alunoController.updateRegistro) // => Alterar um registro existente

module.exports = router 
