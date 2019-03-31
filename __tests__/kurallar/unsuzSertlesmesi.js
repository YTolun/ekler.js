const Isim = require('../../isim');

// Bulunma Hal Eki
test('Son hecesi kalın ve son harfi sert sessiz harf olan bir kelimeye bulunma hal eki "-da" gelirse ekin biçimciği "-ta" olur', () => {
  const isim = new Isim('yatak');
  expect(isim.halEki('bulunma')).toBe('yatakta');
});

test('Son hecesi ince ve son harfi sert sessiz harf olan bir kelimeye bulunma hal eki "-da" gelirse ekin biçimciği "-te" olur', () => {
  const isim = new Isim('ateş');
  expect(isim.halEki('bulunma')).toBe('ateşte');
});