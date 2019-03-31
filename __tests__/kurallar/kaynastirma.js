const Isim = require('../../isim');

// Kaynaştırmanın uygulandığı birinci durum
//Belirtme Hal Eki
test('Son harfi kalın düz sesli harf olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yı" olur', () => {
  const isim = new Isim('araba');
  expect(isim.halEki('belirtme')).toBe('arabayı');
});

test('Son harfi ince düz sesli harf  olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yi" olur', () => {
  const isim = new Isim('levye');
  expect(isim.halEki('belirtme')).toBe('levyeyi');
});

test('Son harfi kalın yuvarlak sesli harf  olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yu" olur', () => {
  const isim = new Isim('su');
  expect(isim.halEki('belirtme')).toBe('suyu');
});

test('Son harfi ince yuvarlak sesli harf  olan bir kelimeye belirtme hal eki "-i" gelirse ekin biçimciği "-yü" olur', () => {
  const isim = new Isim('örtü');
  expect(isim.halEki('belirtme')).toBe('örtüyü');
});

// Yönelme Hal Eki
test('Son harfi kalın sesli harf olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-ya" olur', () => {
  const isim = new Isim('araba');
  expect(isim.halEki('yönelme')).toBe('arabaya');
});

test('Son harfi ince sesli harf olan bir kelimeye yönelme hal eki "-e" gelirse ekin biçimciği "-ye" olur', () => {
  const isim = new Isim('şişe');
  expect(isim.halEki('yönelme')).toBe('şişeye');
});

// Kaynaştırmanın uygulandığı ikinci durum
// Üçüncü Tekil Şahıs İyelik Eki
test('Son harfi sesli harf olan bir kelimeye üçüncü tekil şahıs eki "-ı" gelirse ekin biçimciği "-sı" olur', () => {
  const isim = new Isim('araba');
  expect(isim.iyelikEki('onun')).toBe('arabası');
});

// İstisnalar
test('Su kelimesine belirtme hal eki "-i" gelirse ekin biçimciği "-yu" olur', () => {
  const isim = new Isim('su');
  expect(isim.halEki('belirtme')).toBe('suyu');
});

test('Ne kelimesine belirtme hal eki "-i" gelirse ekin biçimciği "-yi" olur', () => {
  const isim = new Isim('ne');
  expect(isim.halEki('belirtme')).toBe('neyi');
});
