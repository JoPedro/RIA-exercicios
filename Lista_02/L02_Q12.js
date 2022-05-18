let prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Insira sua altura: "));

console.log("Seu peso ideal é: " + ((72.7*altura) - 58).toFixed(2));
