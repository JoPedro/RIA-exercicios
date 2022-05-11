let prompt = require('prompt-sync')();

let l = prompt("Informe o comprimento do lado do quadrado: ");

console.log("\nÁrea: " + l*l);
console.log("Perímetro: " + l*4);