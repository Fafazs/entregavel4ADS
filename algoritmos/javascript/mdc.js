//Questão 4
//Maximo divisor comum
 const pattern = [{
        0: "\d+",
        1: "\d+"
    }]

function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a); // valor absoluto, caso seja negativo
}

module.exports = {mdc, pattern};