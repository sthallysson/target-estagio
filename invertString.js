/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function invertString(string) {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
}

console.log(invertString("hello")); // olleh
console.log(invertString("world")); // dlrow
