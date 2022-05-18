let prompt = require('prompt-sync')();

let tempC = parseFloat(prompt("Informe a temperatura em graus Celsius: "));
 
console.log("A temperatura informada em graus Celsius é: " + (tempC * 9 / 5 + 32).toFixed(2));