let prompt = require('prompt-sync')();

let perHour = parseFloat(prompt("Informe o quanto você ganha por hora: "));
let hours = parseInt(prompt("Informe quantas horas você trabalha no mês: "));

console.log("Seu salário no referido mês é: " + hours * perHour);