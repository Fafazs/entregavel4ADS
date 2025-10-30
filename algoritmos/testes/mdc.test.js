const mdc = require("../javascript/mdc");

//teste1
test("MDC de 12 e 8 deve ser 4", () => {
    expect(mdc.mdc(12, 8)).toBe(4);
});

//teste2
test("MDC de 18 e 27 deve ser 9", () => {
    expect(mdc.mdc(18, 27)).toBe(9);
});