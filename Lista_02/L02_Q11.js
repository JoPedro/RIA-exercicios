let prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let n2 = parseInt(prompt("Digite o segundo número inteiro: "));
let nr = parseFloat(prompt("Digite o número real: "));
 
console.log("\na) " + 2*n1 * (n2/2));
console.log("b) " + (3*n1 + nr).toFixed(2));
console.log("c) " + Math.pow(nr, 3).toFixed(2));