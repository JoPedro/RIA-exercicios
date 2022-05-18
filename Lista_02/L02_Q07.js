let prompt = require('prompt-sync')();

let lado = parseFloat(prompt("Insira o lado do quadrado: "));

console.log("O dobro da área do quadrado de lado " + lado + " é: " + (lado*lado)*2);
