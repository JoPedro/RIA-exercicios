let prompt = require('prompt-sync')();

let raio = parseFloat(prompt("Insira o raio do círculo: "));

console.log("A área do círculo de raio " + raio + " é: " + (Math.PI * (raio*raio)).toFixed(2));
