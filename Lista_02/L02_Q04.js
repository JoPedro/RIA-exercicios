let prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Insira a nota do primeiro bimestre: "));
let n2 = parseInt(prompt("Insira a nota do segundo bimestre: "));
let n3 = parseInt(prompt("Insira a nota do terceiro bimestre: "));
let n4 = parseInt(prompt("Insira a nota do quarto bimestre: "));

console.log("\nA média aritmética dos quatro bimestres é: " + (n1+n2+n3+n4)/4);