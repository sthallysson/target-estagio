/* 
2)Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
 ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function isFibonacci(n) {
  const fib_sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib_sequence.push(fib_sequence[i - 1] + fib_sequence[i - 2]);
  }

  if (fib_sequence.includes(n)) {
    return `O numero ${n} está na sequência de fibonacci`;
  }

  return `O numero ${n} não está na sequência de fibonacci`;
}

console.log(isFibonacci(10));
console.log(isFibonacci(1));
console.log(isFibonacci(15));
console.log(isFibonacci(55));
