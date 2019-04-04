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
test('Son harfi "k" olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('onun')).toBe('köpeği');
});

test('Son harfi "ç" olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.iyelikEki('onun')).toBe('haracı');
});

test('Son harfi "p" olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.iyelikEki('onun')).toBe('kitabı');
});

test('Son harfi "t" olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.iyelikEki('onun')).toBe('muradı');
});

// Kaynaştırma
test('Son harfi sesli harf olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse ekin biçimciği "-sı" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('onun')).toBe('arabası');
});

test('Su kelimesine üçüncü tekil şahıs iyelik eki "-ı" gelirse ekin biçimciği "-yu" olur', () => {
  const isim = new Isim('su');
  expect(isim.iyelikEki('onun')).toBe('suyu');
});

test('Ne kelimesine üçüncü tekil şahıs iyelik eki "-ı" gelirse ekin biçimciği "-yi" olur', () => {
  const isim = new Isim('ne');
  expect(isim.iyelikEki('onun')).toBe('neyi');
});