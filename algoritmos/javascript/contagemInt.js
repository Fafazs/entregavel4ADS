//Questão 6
//Dado um conjunto de dados, retorne os valores inteiros entre o primeiro elemento, e o valor N.

const pattern = [{
        0: "\[\s*([0-9]+|\"[^\"]*\")(\s*,\s*([0-9]+|\"[^\"]*\"))*\s*\]",
        1: "\\d+"
    }];

function contarValoresInteiros(dataset, N) {
    let limite;

    const data  = dataset.map(Number);
    const int = Number(N);

    if (int > data.length) {
        limite = data.length;
    } else if (int < 1) {
        return 0;
    } else {
        limite = int;
    }
    
    const inicio = data[0];
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        const valor = data[i];
        if (Number.isInteger(valor) && valor >= inicio && valor <= limite) {
            count++;
        }
    }

    return count;
    
}

module.exports = {contarValoresInteiros, pattern};
