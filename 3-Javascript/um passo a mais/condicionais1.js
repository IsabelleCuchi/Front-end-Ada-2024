const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual sua idade? "));

const maiorDeIdade = idade >= 18;

// estrutura condicional (if/else)

if (maiorDeIdade) {
    console.log('Você e maior de idade!')
}
else {
    console.log('!!! Você e menor de idade !!!')
}

const mediaDoAluno = 8

if (mediaDoAluno >= 7) {
    console.log('Aprovado')
    console.log('Parabens 😉👊')
}
else if (mediaDoAluno >= 5) {
    console.log('prova final')
}

else {
    console.log('Reprovado')
}