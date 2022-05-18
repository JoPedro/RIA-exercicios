let prompt = require("prompt-sync")();

let altura = parseFloat(prompt("Insira sua altura: "));

console.log("Peso ideal para homens da sua altura: " + ((72.7*altura) - 58).toFixed(2));
console.log("Peso ideal para mulheres da sua altura: " + ((62.1*altura) - 44.7).toFixed(2));