const express = require('express');
const router = express.Router();

// Aqui você coloca os algoritmos Java que quer expor
router.get('/', (req, res) => {
    res.json({
        mensagem: "Algoritmos em Javacript 🚀",
        exemplo: "Esse poderia ser o resultado de um algoritmo Javascript"
    });
});

// Exporta o router para ser usado no server.js
module.exports = router;