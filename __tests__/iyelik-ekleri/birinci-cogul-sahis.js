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

test('Son harfi sessiz harf ve son hecesi ince yuvarlak olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse ekin biçimciği "-ümüz" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.iyelikEki('bizim')).toBe('hoparlörümüz');
});

// Ünsüz Yumuşaması
test('Son harfi "k" olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.iyelikEki('bizim')).toBe('köpeğimiz');
});

test('Son harfi "ç" olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.iyelikEki('bizim')).toBe('haracımız');
});

test('Son harfi "p" olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.iyelikEki('bizim')).toBe('kitabımız');
});

test('Son harfi "t" olan bir kelimeye birinci çoğul şahıs eki "-mız" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.iyelikEki('bizim')).toBe('muradımız');
});

// Kaynaştırma
test('Su kelimesine birinci çoğul şahıs iyelik eki "-mız" gelirse ekin biçimciği "-yumuz" olur', () => {
  const isim = new Isim('su');
  expect(isim.iyelikEki('bizim')).toBe('suyumuz');
});