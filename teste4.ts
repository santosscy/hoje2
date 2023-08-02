const entrada4= require("readline-sync");

let anterior = 0;
let proximo = 1;

for (let i = 0; i <= 10; i++){
    let f = anterior + proximo;

    console.log(f);

    proximo = anterior
    anterior = f
}