let prompt = require('prompt-sync')();

let numHabitantes = prompt("Digite o número de habitantes: ");
let numCasos = prompt("Digite o número de casos: ");
let numMortes = prompt("Digite o número de óbitos: ");

console.log("\nMédia de casos da população: " + 100 * (numCasos/numHabitantes) + "%");
console.log("Média de óbitos da população: " + 100 * (numMortes/numHabitantes) + "%");