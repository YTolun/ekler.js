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

test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse ekin biçimciği "-ümüz" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('sizin')).toBe('hoparlörünüz');
});

// Ünsüz Yumuşaması
test('Son harfi "k" olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('sizin')).toBe('köpeğiniz');
});

test('Son harfi "ç" olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.iyelikEki('sizin')).toBe('haracınız');
});

test('Son harfi "p" olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.iyelikEki('sizin')).toBe('kitabınız');
});

test('Son harfi "t" olan bir kelimeye ikinci çoğul şahıs eki "-nız" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.iyelikEki('sizin')).toBe('muradınız');
});

// Kaynaştırma
test('Su kelimesine ikinci çoğul şahıs iyelik eki "-nız" gelirse ekin biçimciği "-yunuz" olur', () => {
  const isim = new Isim('su');
  expect(isim.iyelikEki('sizin')).toBe('suyunuz');
});