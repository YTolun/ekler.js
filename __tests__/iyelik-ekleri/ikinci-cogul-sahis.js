const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sesli harf olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse ekin biçimciği "-nız" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('sizin')).toBe('arabanız');
});

test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse ekin biçimciği "-ınız" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('sizin')).toBe('çatalınız');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse ekin biçimciği "-iniz" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('sizin')).toBe('eviniz');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse ekin biçimciği "-unuz" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('sizin')).toBe('horozunuz');
});

// Ünsüz Yumuşaması
test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse ekin biçimciği "-ünüz" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('sizin')).toBe('hoparlörünüz');
});

test('ikinci çoğul şahıs iyelik eki ünsüz yumuşamasına uyar', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('sizin')).toBe('köpeğiniz');
});