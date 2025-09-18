//Questão 2
let numeros = [10, 20, 30, 40, 50];

function somatorio(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somatorio(numeros));