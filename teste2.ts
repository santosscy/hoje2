const entrada2 = require("readline-sync");
let = 0;

for(let i = 0; i < 5; i++){
    let valor = parseFloat(entrada2.question('Digite a nota: '));
    medi = medi + valor;
}

console.log(medi/5)

