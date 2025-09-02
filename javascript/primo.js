//Questão 1
//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];

function primo(numeros) {
    const primos = [];
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        if (num < 2) continue; // 0 e 1 não são primos
        let ehPrimo = true;
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            primos.push(num);
        }
    }
    return primos;
}

console.log(primo(numeros));

