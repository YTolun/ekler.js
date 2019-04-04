const Isim = require('../isim');

// Özel İsimler
test('Özel isimlere gel gelen hal ekleri kesme işareti ile ayrılır', () => {
  const isim = new Isim('Ankara', true);
  expect(isim.halEki('belirtme')).toBe('Ankara\'yı');
});

test('Özel isimlere gel gelen iyelik ekleri kesme işareti ile ayrılır', () => {
  const isim = new Isim('Ankara', true);
  expect(isim.iyelikEki('bizim')).toBe('Ankara\'mız');
});