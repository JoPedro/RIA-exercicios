let prompt = require("prompt-sync")();

let salarioHora = parseFloat(prompt("Digite o quanto você ganha por hora: "));
let horasMes = parseInt(prompt("Digite quantas horas você trabalha ao mês: "));

let salarioBruto = salarioHora * horasMes;

console.log("Salário bruto: " + salarioBruto);
console.log("Pago ao INSS: " + salarioBruto * 0.08);
console.log("Pago ao Sindicato: " + salarioBruto * 0.05);
console.log("Salário líquido: " + (salarioBruto - (salarioBruto * 0.11 + salarioBruto * 0.08 + salarioBruto * 0.05)));

