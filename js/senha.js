function comparaSenhas(senha1, senha2) {

  if (senha1 === senha2) {
    return "Senhas iguais. Sucesso!";
  } else {
    return "Erro: As senhas são diferentes.";
  }
};
module.exports = comparaSenhas;
  