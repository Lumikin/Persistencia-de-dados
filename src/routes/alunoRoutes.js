const express = require('express')
const app = express()
const router = express.Router()
const alunoController = require('../controllers/alunoController')
router.get('/alunos', alunoController.buscarTodosAlunos);
module.exports = router 
