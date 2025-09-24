//Questão 1
//Número é primo: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.

const pattern = [{
        0: "\[\s*[0-9]+(\s*,\s*[0-9]+)*\s*\]"
    }] 

function primo(numeros) {
    const primos = [];

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        if (num < 2) { continue };
        let primo = true;
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            primos.push(num);
        }
    }
    return primos;
}

module.exports = {primo, pattern};