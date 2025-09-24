const express = require('express');
const router = express.Router();
router.use(express.json());

// Aqui você coloca os algoritmos Java que quer expor
router.get('/', (req, res) => {

    //algoritmo 1
    res.json({
        mensagem: "Algoritmos em Java 🚀",
        exemplo: "Esse poderia ser o resultado de um algoritmo Java"
    });
});

// Exporta o router para ser usado no server.js
module.exports = router;