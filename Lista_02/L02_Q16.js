/* 
16. Faça um programa que peça o tamanho de um arquivo para download (em MB) 
e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo 
aproximado de download do arquivo  usando este link (em minutos).
*/

let prompt = require("prompt-sync")();

let tamanho = parseFloat(prompt("Digite o tamanho do arquivo em MB: "));
let velocidade = parseFloat(prompt("Digite a velocidade de download em Mbps: "));

let tempo = ((tamanho*8) / velocidade) / 60

console.log("ETA: " + (tempo).toFixed(2) + " minutos");