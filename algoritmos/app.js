const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

// Middleware CORS (IMPORTANTE!)
app.use(cors());

// Serve arquivos estáticos
app.use(express.static('public'));

// Importando as rotas
const javaRoutes = require('./get/java');
const javascriptRoutes = require('./get/javascript');

// Usando as rotas
app.use('/algoritmos/java', javaRoutes);
app.use('/algoritmos/javascript', javascriptRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo à raiz do servidor!</h1>');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    console.log(`📋 Acesse a interface web para testar!`);
});