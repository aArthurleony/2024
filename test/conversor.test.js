const conversorDeTemperatura = require('../js/conversor');
test('converte 0°C para Fahrenheit', () => {
  expect(conversorDeTemperatura(0)).toBe(32);
});
