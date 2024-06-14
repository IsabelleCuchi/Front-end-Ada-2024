// APRENDENDO A PRINTAR
// console.log("hello, World!")
// console.log("começo das aulas basicas sobre javascript")

var nomeDaAluna = "isabelle"; // string
var idade = 20; // number
var altura = 1.64; //number
var estudando = true; //boolean

console.log(nomeDaAluna, typeof nomeDaAluna);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var curso = "front-end em react",
  topico = "javascript basico I";

console.log(curso, topico);

// NÃO UTILIZAR O (VAR)

let nota = 10; //é uma variavel que possa ser mudada
const media = 7; // é uma variavel que NÃO PODE ser mudada

nota = 9;
// media = 9

console.log(nota)
console.log(media)