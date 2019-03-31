const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sesli harf olan bir kelimeye üçüncü çoğul şahıs eki "-ları" gelirse ekin biçimciği "-ları" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('onların')).toBe('arabaları');
});

test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye üçüncü çoğul şahıs eki "-ları" gelirse ekin biçimciği "-ınız" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('onların')).toBe('çatalları');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye üçüncü çoğul şahıs eki "-ları" gelirse ekin biçimciği "-iniz" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('onların')).toBe('evleri');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye üçüncü çoğul şahıs eki "-ları" gelirse ekin biçimciği "-unuz" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('onların')).toBe('horozları');
});

// Ünsüz Yumuşaması
test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye üçüncü çoğul şahıs eki "-ları" gelirse ekin biçimciği "-ünüz" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('onların')).toBe('hoparlörleri');
});

test('üçüncü çoğul şahıs iyelik eki ünsüz yumuşamasına uyar', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('onların')).toBe('köpekleri');
});