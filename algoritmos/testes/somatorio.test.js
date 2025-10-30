const somatorio = require("../javascript/somatorio");

//dados
let numeros1 = [1,2,3,4,5];
let numeros2 = [5,6,7,8];

//teste 1
test("Somar o array numeros1 [1,2,3,4,5] para dar 15", ()=>{
    expect(somatorio.somatorio(numeros1)).toEqual(15);
});

//teste 2
test("Somar o array numeros2 [5,6,7,8] para dar 26", ()=>{
    expect(somatorio.somatorio(numeros2)).toEqual(26);
});