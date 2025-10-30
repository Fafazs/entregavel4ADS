const primo = require("../javascript/primo");

const numeros1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20];
const numeros2 = [10,11,12,13,15,16,17,18,19,20];

//teste1
test("Ao analisar um array de numeros, retornar somente os numeros primos do array",()=>{
    expect(primo.primo(numeros1)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

//teste2
test("Ao analisar um array de numeros, retornar somente os numeros primos do array",()=>{
    expect(primo.primo(numeros2)).toEqual([11, 13, 17, 19]);
});