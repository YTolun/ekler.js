const Isim = require('../../isim');

// Ünlü Uyumları
test('Son hecesi kalın ve son harfi yumuşak sessiz harf olan bir kelimeye bulunma hal eki "-da" gelirse ekin biçimciği "-da" olur', () => {
  const isim = new Isim('telefon');
  expect(isim.halEki('bulunma')).toBe('telefonda');
});

test('Son hecesi ince ve son harfi yumuşak sessiz harf olan bir kelimeye bulunma hal eki "-da" gelirse ekin biçimciği "-de" olur', () => {
  const isim = new Isim('ev');
  expect(isim.halEki('bulunma')).toBe('evde');
});
