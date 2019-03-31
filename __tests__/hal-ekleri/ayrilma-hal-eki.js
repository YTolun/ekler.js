const Isim = require('../../isim');

// Ünlü Uyumları
test('Son hecesi kalın ve son harfi yumuşak sessiz harf olan bir kelimeye bulunma hal eki "-dan" gelirse ekin biçimciği "-dan" olur', () => {
  const isim = new Isim('villa');
  expect(isim.halEki('ayrılma')).toBe('villadan');
});

test('Son hecesi ince ve son harfi yumuşak sessiz harf olan bir kelimeye bulunma hal eki "-dan" gelirse ekin biçimciği "-den" olur', () => {
  const isim = new Isim('gemi');
  expect(isim.halEki('ayrılma')).toBe('gemiden');
});
