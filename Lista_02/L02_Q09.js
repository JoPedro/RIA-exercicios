let prompt = require('prompt-sync')();

let tempF = parseFloat(prompt("Informe a temperatura em graus Fahrenheit: "));
 
console.log("A temperatura informada em graus Celsius é: " + (5 * ((tempF - 32) / 9)).toFixed(2));