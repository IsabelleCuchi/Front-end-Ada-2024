const permissoes = "pasta";

switch (permissoes) {
  case "aluno":
    console.log("Vizualização apenas das aulas");
    break;

  case "professor":
    console.log("Modefique e adicione aulas e exercicios");
    break;

  case "admin":
    console.log("Pode fazer o que quiser");
    break;

  default:
    console.log("Não existe no sistema");
}
