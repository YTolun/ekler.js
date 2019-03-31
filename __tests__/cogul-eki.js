const Isim = require('../isim');

test('Son hecesi kalın olan bir isme çoğul eki gelirse ekin biçimciği "-lar" olur', () => {
  const isim = new Isim('araba');
  expect(isim.cogul()).toBe('arabalar');
});

test('Son hecesi harfi ince olan bir isme çoğul eki gelirse ekin biçimciği "-ler" olur', () => {
  const isim = new Isim('çiçek');
  expect(isim.cogul()).toBe('çiçekler');
});
