const Isim = require('../../isim');

// Ünlü Uyumları
test('Son harfi sesli harf olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse ekin biçimciği "-n" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('senin')).toBe('araban');
});

test('Son harfi sessiz harf ve son hecesi kalın düz olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse ekin biçimciği "-ın" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.iyelikEki('senin')).toBe('çatalın');
});

test('Son harfi sessiz harf ve son hecesi ince düz olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse ekin biçimciği "-in" olur', () => {
  const isim = new Isim('ev');
  expect(isim.iyelikEki('senin')).toBe('evin');
});

test('Son harfi sessiz harf ve son hecesi kalın yuvarlak olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse ekin biçimciği "-un" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.iyelikEki('senin')).toBe('horozun');
});

test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse ekin biçimciği "-ün" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('senin')).toBe('hoparlörün');
});

// Ünsüz Yumuşaması
test('Son harfi "k" olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('senin')).toBe('köpeğin');
});

test('Son harfi "ç" olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.iyelikEki('senin')).toBe('haracın');
});

test('Son harfi "p" olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.iyelikEki('senin')).toBe('kitabın');
});

test('Son harfi "t" olan bir kelimeye ikinci tekil şahıs eki "-n" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.iyelikEki('senin')).toBe('muradın');
});

// Kaynaştırma
test('Su kelimesine ikinci tekil şahıs iyelik eki "-n" gelirse ekin biçimciği "-yun" olur', () => {
  const isim = new Isim('su');
  expect(isim.iyelikEki('senin')).toBe('suyun');
});