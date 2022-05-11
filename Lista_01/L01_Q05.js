let prompt = require('prompt-sync')();

let num = prompt("Digite um número: ");

num % 2 == 0 ? console.log("O número " + num + " é divisível por dois.") : console.log("O número " + num + " não é divisível por dois."); 