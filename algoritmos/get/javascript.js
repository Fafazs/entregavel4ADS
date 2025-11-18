const express = require('express');
const router = express.Router();
const exercicios = require('../javascript/index');
router.use(express.json());



// Aqui você coloca os algoritmos Javascript que quer expor
router.get('/', (req, res) => {
    const funcoesComInfo = Object.keys(exercicios).map(nomeFuncao => {
        const funcao = exercicios[nomeFuncao];
        const funcaoChave = Object.keys(funcao).find(key => typeof funcao[key] === 'function');
        
        return {
            nome: nomeFuncao,
            quantidadeParametros: funcaoChave ? funcao[funcaoChave].length : 0,
            pattern: funcao.pattern || "N/A"
        };
    });

    res.json({
        mensagem: "Lista de algoritmos disponíveis 🚀",
        funcoes: funcoesComInfo,
    });
});

//posts


router.post('/contagemInt', (req, res) => {

    const body = req.body;
    //array de numeros
    const dataSet = body.param1.trim().slice(1, -1).split(',').map(item => item.trim());
    const arr = []
    for( let i = 0; i < dataSet.length; i++){
        arr[i] = Number(dataSet[i]);
    }
    //numero de dentro do array que é o limite
    const N = Number(body.param2);
 
    
    //resposta
    const resultado = exercicios.contagemInt.contarValoresInteiros(dataSet, N);

    if(arr || N){
        res.status(200).json({
            resultado: `Considerando entre o primeiro elemento e o elemento ${N} selecionado.
            Existem: ${resultado.quantidade} inteiros!
            Inteiros encontrados: ${resultado.valores}`
        });

    } else {
        res.status(400).json({ erro: "Parâmetros inválidos. Certifique-se de enviar 'param1' como array de números e 'param2' como número." });
    }
});

router.post('/somatorio', (req, res) => {
    const body = req.body;
    //array de numeros
    const numeros = body.param1.trim().slice(1, -1).split(',').map(item => item.trim());
    const arr = []
    for( let i = 0; i < numeros.length; i++){
        arr[i] = Number(numeros[i]);
    }
    
    //resposta
    if(arr.isArray || arr.length > 0){
    res.status(200).json({ resultado: `A soma dos números do array [${arr.toString()}] é ${exercicios.somatorio.somatorio(arr)}`});
    } else {
        res.status(400).json({ erro: "Parâmetro inválido. Certifique-se de enviar 'param1' como array de números." });
    }
    
});
router.post('/mdc', (req, res) => {
    const body = req.body;
    //param tem que ser de numeros
    const a = Number(body.param1);
    const b = Number(body.param2);
    
    //resposta
    if(a || b ){
    res.status(200).json({ resultado: `O maior divisor comum de ${a} e ${b} é ${exercicios.mdc.mdc(a, b)}`});
    } else {
        res.status(400).json({ erro: "Parâmetros inválidos. Certifique-se de enviar 'param1' e 'param2' como números." });
    }
    
});
router.post('/primo', (req, res) => {
    const body = req.body;
    //param tem que ser uma array de numeros
    const numeros = body.param1.trim().slice(1, -1).split(',').map(item => item.trim());
    const arr = []
    for( let i = 0; i < numeros.length; i++){
        arr[i] = Number(numeros[i]);
    }

    //resposta
    if( numeros){
    res.status(200).json({ resultado: `Os números primos achados no array são: ${exercicios.primo.primo(numeros)}`});
    } else {
        res.status(400).json({ erro: "Parâmetro inválido. Certifique-se de enviar 'param1' como array de números." });
    }
   
});
router.post('/quickSort', (req, res) => {
    const body = req.body;
    //param tem que ser uma array de numeros desornedados
    const numeros = body.param1.trim().slice(1, -1).split(',').map(item => item.trim());
    const arr = []
    for( let i = 0; i < numeros.length; i++){
        arr[i] = Number(numeros[i]);
    }

    //resposta
    if(numeros){
    res.status(200).json({ resultado: `utilizando o array [${arr}] e o ordenando fica: [${exercicios.quickSort.quickSort(arr)}]`});
    } else {
        res.status(400).json({ erro: "Parâmetro inválido. Certifique-se de enviar 'param1' como array de números." });
    }
    
});
router.post('/fibonacci', (req, res) => {
    const body = req.body;
    //numero inteiro de interacoes do fibonacci
    const n = Number(body.param1);

    if(n){
    res.status(200).json({ resultado: ` Sequencia de fibonacci com ${n} números é [${exercicios.fibonacci.fibonacci(n)}]`});
    } else {
        res.status(400).json({ erro: "Parâmetro inválido. Certifique-se de enviar 'param1' como número." });
    }
 
});



// Exporta o router para ser usado no server.js
module.exports = router;
