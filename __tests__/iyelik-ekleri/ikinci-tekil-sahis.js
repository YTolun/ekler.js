const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sesli harf olan bir kelimeye birinci tekil şahıs eki "-n" gelirse ekin biçimciği "-n" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('senin')).toBe('araban');
});

test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye birinci tekil şahıs eki "-n" gelirse ekin biçimciği "-ın" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('senin')).toBe('çatalın');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye birinci tekil şahıs eki "-n" gelirse ekin biçimciği "-in" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('senin')).toBe('evin');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye birinci tekil şahıs eki "-n" gelirse ekin biçimciği "-un" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('senin')).toBe('horozun');
});

// Ünsüz Yumuşaması
test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye birinci tekil şahıs eki "-n" gelirse ekin biçimciği "-ün" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('senin')).toBe('hoparlörün');
});

test('Birinci tekil şahıs iyelik eki ünsüz yumuşamasına uyar', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('senin')).toBe('köpeğin');
});