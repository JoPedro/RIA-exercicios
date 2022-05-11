let prompt = require('prompt-sync')();

let n1; 
do {
    n1 = parseInt(prompt("Insira o primeiro número diferente de zero: "));
} while(n1 == 0)

let n2; 
do {
    n2 = parseInt(prompt("Insira o segundo número diferente de zero: "));
} while(n2 == 0)

console.log(n1 + " + " + n2 + " = " + (n1+n2));
console.log(n1 + " - " + n2 + " = " + (n1-n2));
console.log(n1 + " * " + n2 + " = " + n1*n2);
console.log(n1 + " / " + n2 + " = " + n1/n2);
console.log("Média aritmética = " + (n1+n2)/2);