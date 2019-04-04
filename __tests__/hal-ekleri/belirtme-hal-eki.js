const Isim = require('../../isim');

//Ünlü Uyumları
test('Son hecesi kalın düz olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-ı" olur', () => {
  const isim = new Isim('çatal');
  expect(isim.halEki('belirtme')).toBe('çatalı');
});

test('Son hecesi ince düz olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-i" olur', () => {
  const isim = new Isim('ev');
  expect(isim.halEki('belirtme')).toBe('evi');
});

test('Son hecesi kalın yuvarlak olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-u" olur', () => {
  const isim = new Isim('horoz');
  expect(isim.halEki('belirtme')).toBe('horozu');
});

test('Son hecesi ince yuvarlak olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-ü" olur', () => {
  const isim = new Isim('hoparlör');
  expect(isim.halEki('belirtme')).toBe('hoparlörü');
});

// Kaynaştırma
test('Son harfi kalın düz sesli harf olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yı" olur', () => {
  const isim = new Isim('araba');
  expect(isim.halEki('belirtme')).toBe('arabayı');
});

test('Son harfi ince düz sesli harf olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yi" olur', () => {
  const isim = new Isim('levye');
  expect(isim.halEki('belirtme')).toBe('levyeyi');
});

test('Son harfi kalın yuvarlak sesli harf olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yu" olur', () => {
  const isim = new Isim('su');
  expect(isim.halEki('belirtme')).toBe('suyu');
});

test('Son harfi ince yuvarlak sesli harf olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yü" olur', () => {
  const isim = new Isim('örtü');
  expect(isim.halEki('belirtme')).toBe('örtüyü');
});

// Sessiz Yumuşaması
test('Son harfi "k" olan bir kelimeye belirtme hal eki "-i" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.halEki('belirtme')).toBe('köpeği');
});

test('Son harfi "ç" olan bir kelimeye belirtme hal eki "-i" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.halEki('belirtme')).toBe('haracı');
});

test('Son harfi "p" olan bir kelimeye belirtme hal eki "-i" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.halEki('belirtme')).toBe('kitabı');
});

test('Son harfi "t" olan bir kelimeye belirtme hal eki "-i" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.halEki('belirtme')).toBe('muradı');
});

// Sessiz Yumuşamasının İstisnaları
test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('aşk');
  expect(isim.halEki('belirtme')).toBe('aşkı');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('çit');
  expect(isim.halEki('belirtme')).toBe('çiti');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('sap');
  expect(isim.halEki('belirtme')).toBe('sapı');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('saç');
  expect(isim.halEki('belirtme')).toBe('saçı');
});

test('Bazı tek heceli kelimeler ünsüz yumuşamasına uğrarlar', () => {
  const isim = new Isim('kap');
  expect(isim.halEki('belirtme')).toBe('kabı');
});

test('Bazı yabancı kökenli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('hukuk');
  expect(isim.halEki('belirtme')).toBe('hukuku');
});