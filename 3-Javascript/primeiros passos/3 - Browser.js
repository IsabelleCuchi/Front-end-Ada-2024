const prompt = require("readline-sync");

// Se caso usar (TYPEOF) aparecer como string
const idade = prompt.question("Qual e sua idade?: ");

console.log("O usuario tem", idade, "anos de idade");

// Fazer aparecer qual o tipo da variavel corretamente
const age = prompt.question("How old are you?: ");
const ageNumber = Number(age);

console.log(ageNumber, typeof ageNumber);

// Coerção Explicita (Conversão Manual)

console.log(Number("X")); //NaN: Not a Number
console.log(String(10), typeof String(10));
console.log(Boolean(0)); 

//coerção implicita

console.log(1 + '1')
console.log('10' + 5)
console.log(10 - '5')
console.log(10 * '5')
console.log(10 / '5')

// Tentando entender o codigo abaixo

let n = 1 + '1' // '11'

n = n + 1  //11 - 1 + 10

console.log(n) 
console.log(2 + 3 + 4 + '5') //95
console.log('5' + 2 + 3 + 4) //5234
console.log('10' - '4' - '3' - 2 + '5') //15