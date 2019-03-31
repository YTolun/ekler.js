const Isim = require('../../isim');

// Ünlü Uyumları
test('Son hecesi kalın düz olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-ı" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.halEki('belirtme')).toBe('çatalı');
});

test('Son hecesi ince düz olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-i" olur', () => {
  const isim = new Isim('ev');
  expect(isim.halEki('belirtme')).toBe('evi');
});

test('Son hecesi kalın yuvarlak olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-u" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.halEki('belirtme')).toBe('horozu');
});

test('Son hecesi ince yuvarlak olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-ü" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.halEki('belirtme')).toBe('hoparlörü');
});
