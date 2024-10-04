/* 
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const fs = require("fs");

function loadJSON(filename = "billing.json") {
  const data = fs.readFileSync(filename, "utf8");
  const formatedData = JSON.parse(data);

  return formatedData;
}

function calculeBilling(data) {
  const billing = data
    .filter((item) => item.valor > 0)
    .map((item) => item.valor);

  const minValue = Math.min(...billing);
  const maxValue = Math.max(...billing);

  const monthlyAverage =
    billing.reduce((acc, curr) => acc + curr, 0) / billing.length;

  const daysAboveAverage = billing.filter(
    (item) => item > monthlyAverage
  ).length;

  return [minValue, maxValue, daysAboveAverage];
}

console.log(calculeBilling(loadJSON()));
