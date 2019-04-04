const Isim = require('../../isim');

//Ünlü Uyumları
test('Son hecesi kalın olan bir kelimeye ayrılma hal eki "-den" gelirse ekin biçimciği "-dan" olur', () => {
  const isim = new Isim('villa');
  expect(isim.halEki('ayrılma')).toBe('villadan');
});

test('Son hecesi ince olan bir kelimeye ayrılma hal eki "-den" gelirse ekin biçimciği "-den" olur', () => {
  const isim = new Isim('gemi');
  expect(isim.halEki('ayrılma')).toBe('gemiden');
});

// Sessiz Sertleşmesi
test('Son hecesi kalın ve son harfi sert sessiz harf olan bir kelimeye ayrılma hal eki "-da" gelirse ekin biçimciği "-tan" olur', () => {
  const isim = new Isim('yatak');
  expect(isim.halEki('ayrılma')).toBe('yataktan');
});

test('Son hecesi ince ve son harfi sert sessiz harf olan bir kelimeye ayrılma hal eki "-da" gelirse ekin biçimciği "-ten" olur', () => {
  const isim = new Isim('ateş');
  expect(isim.halEki('ayrılma')).toBe('ateşten');
});