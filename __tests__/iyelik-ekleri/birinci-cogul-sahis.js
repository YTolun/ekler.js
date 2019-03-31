const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sesli harf olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse ekin biçimciği "-mız" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('bizim')).toBe('arabamız');
});

test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse ekin biçimciği "-ımız" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('bizim')).toBe('çatalımız');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse ekin biçimciği "-imiz" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('bizim')).toBe('evimiz');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse ekin biçimciği "-umuz" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('bizim')).toBe('horozumuz');
});

// Ünsüz Yumuşaması
test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse ekin biçimciği "-ümüz" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('bizim')).toBe('hoparlörümüz');
});

test('Birinci çoğul şahıs iyelik eki ünsüz yumuşamasına uyar', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('bizim')).toBe('köpeğimiz');
});