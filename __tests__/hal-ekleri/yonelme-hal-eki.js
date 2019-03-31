const Isim = require('../../isim');

// Ünlü Uyumları
test('Son hecesi kalın olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-a" olur', () => {
  const isim = new Isim('tezgah');
  expect(isim.halEki('yönelme')).toBe('tezgaha');
});

test('Son hecesi ince olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-e" olur', () => {
  const isim = new Isim('ev');
  expect(isim.halEki('yönelme')).toBe('eve');
});