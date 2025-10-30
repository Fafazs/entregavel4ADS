const fibo = require("../javascript/fibonacci");

//teste 1
test("Espera retornar os 10 primeiros numeros da sequencia de Fibonacci",()=>{
    expect(fibo.fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

//teste 2
test("Espera retornar os 20 primeiros números da sequência de Fibonacci", () => {
    expect(fibo.fibonacci(20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
      55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
    ]);
  });