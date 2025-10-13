const express = require('express')
const app = express()
alunoRoutes = require('./src/routes/alunoRoutes')
const PORT = 8081

app.use(express.json())
app.use('/', alunoRoutes)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
