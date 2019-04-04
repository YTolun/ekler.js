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

test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye birinci tekil şahıs eki "-m" gelirse ekin biçimciği "-üm" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('benim')).toBe('hoparlörüm');
});

// Ünsüz Yumuşaması
test('Son harfi "k" olan bir kelimeye birinci tekil şahıs eki "-m" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('benim')).toBe('köpeğim');
});

test('Son harfi "ç" olan bir kelimeye birinci tekil şahıs eki "-m" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.iyelikEki('benim')).toBe('haracım');
});

test('Son harfi "p" olan bir kelimeye birinci tekil şahıs eki "-m" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.iyelikEki('benim')).toBe('kitabım');
});

test('Son harfi "t" olan bir kelimeye birinci tekil şahıs eki "-m" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.iyelikEki('benim')).toBe('muradım');
});

// Kaynaştırma
test('Su kelimesine birinci tekil şahıs iyelik eki "-m" gelirse ekin biçimciği "-yum" olur', () => {
  const isim = new Isim('su');
  expect(isim.iyelikEki('benim')).toBe('suyum');
});