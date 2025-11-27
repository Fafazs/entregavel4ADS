//Questão 6
//Dado um conjunto de dados, retorne os valores inteiros entre o primeiro elemento, e o valor N excluindo-o do intervalo.

const pattern = [{
    0: "\[\s*([0-9]+|\"[^\"]*\")(\s*,\s*([0-9]+|\"[^\"]*\"))*\s*\]",  // Regex para array de números
    1: "\\d+"  // Regex para encontrar números inteiros
}];

function contarValoresInteiros(dataset, N) {
    // Converter todos os valores para números, mas preservar o tipo original (string ou número)
    const data = dataset.map(item => {
        if (typeof item === "string") {
            // Verificar se o item é um número representado como string
            return isNaN(Number(item)) ? item : Number(item);
        }
        return item;
    });

    // Validar se N existe dentro do array original
    const indexN = data.findIndex(v => v == N);
    if (indexN === -1) {
        throw new Error("O valor N deve existir dentro do array.");
    }

    // Pegar o primeiro valor do array
    const inicio = data[0];

    // Pegar os valores entre o índice 0 e o índice onde N está
    const intervalo = data.slice(0, indexN); // Pega os valores do início até o valor N (sem incluir o N)

    // Filtrar os inteiros dentro desse intervalo
    const inteiros = intervalo.filter(v => Number.isInteger(v) && v !== N); // Exclui N

    // Retornar os valores encontrados e a quantidade de inteiros
    return {
        valores: inteiros,
        quantidade: inteiros.length
    };
}



module.exports = { contarValoresInteiros, pattern };
