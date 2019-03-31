const Isim = require('../../isim');

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

test('Son harfi "t" olan bir kelimeye belirtme hal eki "-e" gelirse kelimenin sonundaki harf yumuşayarak "d" olur', () => {
  const isim = new Isim('evlat');
  expect(isim.halEki('yönelme')).toBe('evlada');
});

test('Son harfi "ç" olan bir kelimeye belirtme hal eki "-e" gelirse kelimenin sonundaki harf yumuşayarak "c" olur', () => {
  const isim = new Isim('araç');
  expect(isim.halEki('yönelme')).toBe('araca');
});

// İstisnalar
test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('aşk');
  expect(isim.halEki('belirtme')).toBe('aşkı');
});

test('Tek heceli kelimeler ünsüz yumuşamasına uğramazlar', () => {
  const isim = new Isim('çit');
  expect(isim.halEki('belirtme')).toBe('çiti');
});