const entrada1 = require('readline-sync');
let numero: number = entrada1.question('Digite um numero positivo: ');
for (let i = 0; i<= numero; i = i+2){
    console.log(i);
}

const linha = require('readline-sync');
let test = false; 

while(teste == false){
    let senha = linha.question("Senha: ");
    if(senha == 'abc')
    teste == true;