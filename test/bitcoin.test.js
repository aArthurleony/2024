const conversorDeBitcoin = require('../js/bitcoin');

test('converte 1 bitcoin para real', () => {
  expect(conversorDeBitcoin(1)).toBe(303372.95);
});

