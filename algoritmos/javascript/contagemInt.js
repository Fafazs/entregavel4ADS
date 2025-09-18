//Questão 6
//Dado um conjunto de dados, retorne os valores inteiros entre o primeiro elemento, e o valor N.

function contarValoresInteiros(dataset, N) {
    let limite;
    if (N > dataset.length) {
        limite = dataset.length;
    } else if (N < 1) {
        return 0;
    } else {
        limite = N;
    }
    
    const inicio = dataset[0];
    let count = 0;
    for (let i = 0; i < dataset.length; i++) {
        const valor = dataset[i];
        if (Number.isInteger(valor) && valor >= inicio && valor <= limite) {
            count++;
        }
    }

    return count;
}

const dados = [2, 3.5, 4, 5, 6, "texto", 7, 8.2, 9, 10, 20, 30, "text", "ola", 33.3, 100,22,55,66,77,88];

console.log(contarValoresInteiros(dados, 20));
console.log(contarValoresInteiros(dados, 6));  
console.log(contarValoresInteiros(dados, 10));  
console.log(contarValoresInteiros(dados, 0));  
