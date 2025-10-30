const qs = require("../javascript/quickSort");

//dados
const num1 = [40,30,47,60,2,4,8,22,37];
const num2 = [2,4,8,22,37,66,80,6];

//teste1
test("Ordenar um array de numeros, por ordem de valor crescente",()=>{
    expect(qs.quickSort(num1)).toEqual([2, 4, 8, 22, 30, 37, 40, 47, 60]);
});

//teste2
test("Ordenar um array de numeros, por ordem de valor crescente",()=>{
    expect(qs.quickSort(num2)).toEqual([2, 4, 6, 8, 22, 37, 66, 80]);
});