const contagem = require("../javascript/contagemInt");
//Dados

const array1 = [1,2,-3,4,-5,6,"X",8,9,10];
const n1 = array1[7];

const array2 = [-2,3,10,"olá",4,5,-10,90];
const n2 = array2[4];

//teste 1
test("Retorna a quantidade de numeros com valores inteiros de um array 1 entre o primeiro elemento e o valor N", ()=>{
expect(contagem.contarValoresInteiros(array1, n1)).toEqual(5);
});

//teste 2
test("Retorna a quantidade de numeros com valores inteiros de um array 2 entre o primeiro elemento e o valor N", ()=>{
    expect(contagem.contarValoresInteiros(array2, n2)).toEqual(3);
});