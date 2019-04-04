const Isim = require('../../isim');

//Ünlü Uyumları
test('Son hecesi kalın olan bir kelimeye bulunma hal eki "-de" gelirse ekin biçimciği "-da" olur', () => {
  const isim = new Isim('villa');
  expect(isim.halEki('bulunma')).toBe('villada');
});

test('Son hecesi ince olan bir kelimeye bulunma hal eki "-de" gelirse ekin biçimciği "-de" olur', () => {
  const isim = new Isim('gemi');
  expect(isim.halEki('bulunma')).toBe('gemide');
});

// Sessiz Sertleşmesi
test('Son hecesi kalın ve son harfi sert sessiz harf olan bir kelimeye bulunma hal eki "-da" gelirse ekin biçimciği "-ta" olur', () => {
  const isim = new Isim('yatak');
  expect(isim.halEki('bulunma')).toBe('yatakta');
});

test('Son hecesi ince ve son harfi sert sessiz harf olan bir kelimeye bulunma hal eki "-da" gelirse ekin biçimciği "-te" olur', () => {
  const isim = new Isim('ateş');
  expect(isim.halEki('bulunma')).toBe('ateşte');
});