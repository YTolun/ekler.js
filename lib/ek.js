'use strict';

const Harf = require('./harf');

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
    // Henüz hiçbir kural uygulanmadığından Biçimcik = Biçimbirim
    this.bicimcik = bicimbirim;
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
      altBicimcikler: {
        kalin: 'lar',
        ince: 'ler',
      },
    },
  },
  hal: {
    'i': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kucukUnluUyumu', 'kaynastirma'],
      altBicimcikler: {
        kalin: {
          duz: 'ı',
          yuvarlak: 'u',
        },
        ince: {
          duz: 'i',
          yuvarlak: 'ü',
        },
      },
    },
    'e': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kaynastirma'],
      altBicimcikler: {
        kalin: 'a',
        ince: 'e',
      },
    },
    'de': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'unsuzSertlesmesi'],
      altBicimcikler: {
        kalin: 'da',
        ince: 'de',
      },
    },
    'den': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'unsuzSertlesmesi'],
      altBicimcikler: {
        kalin: 'dan',
        ince: 'den',
      },
    },
  },
  iyelik: {
    'm': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kucukUnluUyumu', 'yardimciUnlu'],
      altBicimcikler: {
        yalin: 'm',
        kalin: {
          duz: 'ım',
          yuvarlak: 'um',
        },
        ince: {
          duz: 'im',
          yuvarlak: 'üm',
        },
      },
    },
    'n': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kucukUnluUyumu', 'yardimciUnlu'],
      altBicimcikler: {
        yalin: 'n',
        kalin: {
          duz: 'ın',
          yuvarlak: 'un',
        },
        ince: {
          duz: 'in',
          yuvarlak: 'ün',
        },
      },
    },
    'ı': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kucukUnluUyumu', 'kaynastirma'],
      altBicimcikler: {
        yalin: 'ı',
        kalin: {
          duz: 'ı',
          yuvarlak: 'u',
        },
        ince: {
          duz: 'i',
          yuvarlak: 'ü',
        },
      },
    },
    'mız': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kucukUnluUyumu', 'yardimciUnlu'],
      altBicimcikler: {
        yalin: 'mız',
        kalin: {
          duz: 'ımız',
          yuvarlak: 'umuz',
        },
        ince: {
          duz: 'imiz',
          yuvarlak: 'ümüz',
        },
      },
    },
    'nız': {
      uygulanacakKurallar: ['buyukUnluUyumu', 'kucukUnluUyumu', 'yardimciUnlu'],
      altBicimcikler: {
        yalin: 'nız',
        kalin: {
          duz: 'ınız',
          yuvarlak: 'unuz',
        },
        ince: {
          duz: 'iniz',
          yuvarlak: 'ünüz',
        },
      },
    },
    'ları': {
      uygulanacakKurallar: ['buyukUnluUyumu'],
      altBicimcikler: {
        kalin: 'ları',
        ince: 'leri',
      },
    },
  },
};

/**
 * Dil bilgisi kurallarını içeren nesne
 */
const kurallar = {
  buyukUnluUyumu: function(kelime, ek) {
    if (kelime.sonSesliHarf.kalin) {
      ek.bicimcik = ek.bicimbirim.altBicimcikler.kalin;
    } else {
      ek.bicimcik = ek.bicimbirim.altBicimcikler.ince;
    }

    return ek.bicimcik;
  },
  kucukUnluUyumu: function(kelime, ek) {
    if (kelime.sonSesliHarf.duz) {
      ek.bicimcik = ek.bicimcik.duz;
    } else {
      ek.bicimcik = ek.bicimcik.yuvarlak;
    }

    return ek.bicimcik;
  },
  kaynastirma: function(kelime, ek) {
    // İsitisnalar hal eki aldıklarında kaynaştırma he zaman uygulanır
    const istisnalar = ['su', 'ne'];
    if (ek.gorev === 'hal' && (kelime.sonHarf.sesli || istisnalar.includes(kelime.kelime))) {
      ek.bicimcik = 'y' + ek.bicimcik;
    }

    if (ek.gorev === 'iyelik' && kelime.sonHarf.sesli) {
      ek.bicimcik = 's' + ek.bicimcik;
    }

    return ek.bicimcik;
  },
  unsuzSertlesmesi: function(kelime, ek) {
    if (kelime.sonHarf.sessiz && kelime.sonHarf.sert && ek.ilkHarf.sessiz && ek.ilkHarf.yumusak) {
      ek.bicimcik = ek.ilkHarf.sertlesmisHali + ek.bicimcik.substr(1);
    }
    return ek.bicimcik;
  },
  yardimciUnlu: function(kelime, ek) {
    if (kelime.sonHarf.sesli) {
      ek.bicimcik = ek.bicimbirim.altBicimcikler.yalin;
    }

    return ek.bicimcik;
  },
};

module.exports = Ek;
