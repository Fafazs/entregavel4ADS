//Questão 6
//Dado um conjunto de dados, retorne os valores inteiros entre o primeiro elemento, e o valor N.

const pattern = [{
        0: "\[\s*([0-9]+|\"[^\"]*\")(\s*,\s*([0-9]+|\"[^\"]*\"))*\s*\]",
        1: "\\d+"
    }];

    function contarValoresInteiros(dataset, N) {
        // Converter tudo para número
        const data = dataset.map(Number);
    
        // Validar se N existe dentro do array original
        if (!dataset.some(v => Number(v) === Number(N))) {
            throw new Error("O valor N deve existir dentro do array.");
        }
    
        const inicio = data[0];     // primeiro elemento
        const fim = Number(N);      // valor N informado
    
        // Criar intervalo adequado
        const menor = Math.min(inicio, fim);
        const maior = Math.max(inicio, fim);
    
        // Filtrar apenas INTEIROS ENTRANDO NO INTERVALO,
        // MAS EXCLUINDO explicitamente o valor N
        const inteiros = data.filter(v =>
            Number.isInteger(v) && 
            v >= menor &&
            v <= maior &&
            v !== fim   // ← EXCLUSÃO DO N
        );
    
        return {
            valores: inteiros,
            quantidade: inteiros.length
        };
    }
    
    module.exports = { contarValoresInteiros, pattern };
