const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse ekin biçimciği "-ı" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('onun')).toBe('çatalı');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse ekin biçimciği "-i" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('onun')).toBe('evi');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse ekin biçimciği "-u" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('onun')).toBe('horozu');
});

test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse ekin biçimciği "-ü" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('onun')).toBe('hoparlörü');
});

// Ünsüz Yumuşaması
test('üçüncü tekil şahıs iyelik eki ünsüz yumuşamasına uyar', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('onun')).toBe('köpeği');
});
