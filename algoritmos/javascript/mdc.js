//Questão 4
//Maximo divisor comum
function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a); // valor absoluto, caso seja negativo
}

const a = 56, b = 98;
console.log(`MDC de ${a} e ${b} é:`, mdc(a, b));
