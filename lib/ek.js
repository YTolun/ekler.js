'use strict';

const Harf = require('./harf');
const kurallar = require('./kurallar');

/**
 * Ekleri tanımlayan class
 * KAVRAMLAR:
 *   Dilbilimde dilin anlamlı en küçük sözcük dilsel birimine BİÇİMBİRİM denir.
 *   Biçimbirimler anlamlı (kök) ve görevli (ek) olmak üzere ikiye ayrılır.
 *   EKLER (görevli biçimbirimler) dil kurallarına uyarak şekil değiştirebilir.
 *   Şekil değiştirerek son halini almış eke BİÇİMCİK denir.
 *   Bir biçimbirimin varyasyonlarının tamamına ALT BİÇİMCİKLER denir.
 * ÖRNEK:
 *   Dilimizde çoğul ekinin biçimbirimi 'lar'dır.
 *   Son hecesi ince olan bir kelimeye eklenirse
 *   çoğul ekinin biçimciği 'ler' olur. (Büyük Ünlü Uyumu)
 *   Bu halde çoğul ekinin alt biçimcikleri 'lar' ve 'ler'dir.
 */
class Ek {
  /**
   * Tanımlanacak ekin özelliklerinden yeni bir ek nesnesi oluşturur
   * @param {string} gorev Ekin görevi
   * @param {string} bicimbirim Ekin hiçbir değişime uğramamış hali
   */
  constructor(gorev, bicimbirim) {
    this.gorev = gorev;
    // Henüz hiçbir kural uygulanmadığından Biçimcik = Biçimbirim ve Yalın = Biçimbirim
    this.bicimcik = bicimbirim;
    this.yalin = bicimbirim;
    // Biçimbirimin tüm özelliklerini bul ve sakla
    this.bicimbirim = ekler[this.gorev][bicimbirim];
    this.uygulanacakKurallar = this.bicimbirim.uygulanacakKurallar;
    // Bazı kuralların uygulanabilmesi için ilk harfin özelliklerini tanımla
    this.ilkHarf = new Harf(this.bicimcik[0]);
  }

  /**
   * Biçimbirime gerekli kuralları uygular
   * @param {string} kelime Biçimciğin ekleneceği kelime
   * @return {Object}
   */
  kurallarıUygula(kelime) {
    this.uygulanacakKurallar.map((kural) => {
      this.bicimcik = kurallar[kural](kelime, this);
    });

    // Kurallara göre değişen biçimciğe göre ilk harfi yeniden tanımla
    this.ilkHarf = new Harf(this.bicimcik[0]);

    return this;
  }
}

/**
 * Desteklenen ekleri, bunlara uygulanacak kuralları
 * ve alt biçimciklerini içeren nesne
 */
const ekler = {
  cogul: {
    'lar': {
      uygulanacakKurallar: ['buyukUnluUyumu'],
    },
  },
  hal: {
    'i': {
      uygulanacakKurallar: ['kucukUnluUyumu', 'buyukUnluUyumu', 'kaynastirma'],
    },
    'e': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kaynastirma'],
    },
    'de': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'unsuzSertlesmesi'],
    },
    'den': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'unsuzSertlesmesi'],
    },
  },
  iyelik: {
    'm': {
      uygulanacakKurallar: ['yardimciUnlu', 'kucukUnluUyumu', 'buyukUnluUyumu', 'kaynastirma'],
    },
    'n': {
      uygulanacakKurallar: ['yardimciUnlu', 'kucukUnluUyumu', 'buyukUnluUyumu', 'kaynastirma'],
    },
    'ı': {
      uygulanacakKurallar: ['kucukUnluUyumu', 'buyukUnluUyumu', 'kaynastirma'],
    },
    'mız': {
      uygulanacakKurallar: ['yardimciUnlu', 'kucukUnluUyumu', 'buyukUnluUyumu', 'kaynastirma'],
    },
    'nız': {
      uygulanacakKurallar: ['yardimciUnlu', 'kucukUnluUyumu', 'buyukUnluUyumu', 'kaynastirma'],
    },
    'ları': {
      uygulanacakKurallar: ['buyukUnluUyumu'],
    },
  },
};

module.exports = Ek;
