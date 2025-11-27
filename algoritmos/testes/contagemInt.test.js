const contagem = require("../javascript/contagemInt");

// Dados
const array1 = [1, 2, -3, 4, -5, 6, "X", 8, 9, 10];
const n1 = array1[7]; // N = 8

const array2 = [-2, 3, 10, "olá", 4, 5, -10, 90];
const n2 = array2[5]; // N = 5

// Teste 1: Verifica a contagem de inteiros no array1 entre o primeiro elemento e o valor N
test("Retorna a quantidade de números inteiros em array1 entre o primeiro elemento e o valor N", () => {
  const resultado = contagem.contarValoresInteiros(array1, n1);
  expect(resultado.quantidade).toBe(6); // Espera-se 5 inteiros entre 1 e 8
  expect(resultado.valores).toEqual([1, 2, -3, 4, -5, 6]); // Inteiros entre 1 e 8 excluindo 8
});

// Teste 2: Verifica a contagem de inteiros no array2 entre o primeiro elemento e o valor N
test("Retorna a quantidade de números inteiros em array2 entre o primeiro elemento e o valor N", () => {
  const resultado = contagem.contarValoresInteiros(array2, n2);
  expect(resultado.quantidade).toBe(4); // Espera-se 3 inteiros entre -2 e 4
  expect(resultado.valores).toEqual([-2, 3, 10, 4]); // Inteiros entre -2 e 4 excluindo 4
});
