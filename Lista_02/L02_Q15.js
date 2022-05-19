/* 
15. Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros
quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada
3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
Informe ao usuário a  quantidades de latas de tinta a serem compradas e o preço total. 
*/

let prompt = require('prompt-sync')();

let tamanho = parseFloat(prompt("Digite o tamanho em m² da área a ser pintada: "));

let latas = Math.ceil((tamanho / 3) / 18);

console.log("A quantidade de latas de tinta a serem compradas é: " + latas);
console.log("Preço total: R$" + (latas * 80).toFixed(2));