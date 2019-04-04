const Isim = require('../../isim');

//Ünlü Uyumları
test('Son hecesi kalın olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-a" olur', () => {
  const isim = new Isim('tezgah');
  expect(isim.halEki('yönelme')).toBe('tezgaha');
});

test('Son hecesi ince olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-e" olur', () => {
  const isim = new Isim('ev');
  expect(isim.halEki('yönelme')).toBe('eve');
});

// Kaynaştırma
test('Son harfi kalın düz sesli harf olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-ye" olur', () => {
  const isim = new Isim('araba');
  expect(isim.halEki('yönelme')).toBe('arabaya');
});

test('Son harfi ince düz sesli harf olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-ye" olur', () => {
  const isim = new Isim('levye');
  expect(isim.halEki('yönelme')).toBe('levyeye');
});

test('Son harfi kalın yuvarlak sesli harf olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-ya" olur', () => {
  const isim = new Isim('su');
  expect(isim.halEki('yönelme')).toBe('suya');
});

test('Son harfi ince yuvarlak sesli harf olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-ya" olur', () => {
  const isim = new Isim('örtü');
  expect(isim.halEki('yönelme')).toBe('örtüye');
});

// Sessiz Yumuşaması
test('Son harfi "k" olan bir kelimeye yönelme hal eki "-e" gelirse kelimenin sonundaki harf yumuşayarak "ğ" olur', () => {
  const isim = new Isim('köpek');
  expect(isim.halEki('yönelme')).toBe('köpeğe');
});

test('Son harfi "ç" olan bir kelimeye yönelme hal eki "-e" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('haraç');
  expect(isim.halEki('yönelme')).toBe('haraca');
});

test('Son harfi "p" olan bir kelimeye yönelme hal eki "-e" gelirse kelimenin sonundaki harf yumuşayarak "b" olur', () => {
  const isim = new Isim('kitap');
  expect(isim.halEki('yönelme')).toBe('kitaba');
});

test('Son harfi "t" olan bir kelimeye yönelme hal eki "-e" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('murat');
  expect(isim.halEki('yönelme')).toBe('murada');
});

// Sessiz Yumuşamasının İstisnaları
test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('aşk');
  expect(isim.halEki('yönelme')).toBe('aşka');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('çit');
  expect(isim.halEki('yönelme')).toBe('çite');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('sap');
  expect(isim.halEki('yönelme')).toBe('sapa');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('saç');
  expect(isim.halEki('yönelme')).toBe('saça');
});

test('Bazı tek heceli kelimeler ünsüz yumuşamasına uğrarlar', () => {
  const isim = new Isim('kap');
  expect(isim.halEki('yönelme')).toBe('kaba');
});

test('Bazı yabancı kökenli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('hukuk');
  expect(isim.halEki('yönelme')).toBe('hukuka');
});