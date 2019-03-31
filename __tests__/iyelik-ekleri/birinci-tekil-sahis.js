const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sesli harf olan bir kelimeye birinci tekil şahıs eki "-m" gelirse ekin biçimciği "-m" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('benim')).toBe('arabam');
});

test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye birinci tekil şahıs eki "-m" gelirse ekin biçimciği "-ım" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('benim')).toBe('çatalım');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye birinci tekil şahıs eki "-m" gelirse ekin biçimciği "-im" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('benim')).toBe('evim');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye birinci tekil şahıs eki "-m" gelirse ekin biçimciği "-um" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('benim')).toBe('horozum');
});

// Ünsüz Yumuşaması
test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye birinci tekil şahıs eki "-m" gelirse ekin biçimciği "-üm" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('benim')).toBe('hoparlörüm');
});

test('Birinci tekil şahıs iyelik eki ünsüz yumuşamasına uyar', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('benim')).toBe('köpeğim');
});