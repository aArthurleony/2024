const comparaSenhas = require('../js/senha');

test('compara senhas iguais', () => {
  expect(comparaSenhas('senha123', 'senha123')).toBe('Senhas iguais. Sucesso!');
});

test('compara senhas diferentes', () => {
  expect(comparaSenhas('senha123', 'outraSenha')).toBe('Erro: As senhas são diferentes.');
});
