let prompt = require('prompt-sync')();

let comp = parseFloat(prompt("Informe o comprimento em metros (m): "));

console.log("O comprimento informado em centímetros (cm) é: " + comp*100);