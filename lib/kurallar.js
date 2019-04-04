'use strict';

/**
 * Dil bilgisi kurallarını içeren nesne
 */
const kurallar = {
  buyukUnluUyumu: function(kelime, ek) {
    const kalinSesliler = ['a', 'ı', 'o', 'u'];
    const inceSesliler = ['e', 'i', 'ö', 'ü'];

    if (kelime.sonSesliHarf.kalin) {
      inceSesliler.forEach((inceSesli, index) => {
        ek.bicimcik = ek.bicimcik.replace(new RegExp(inceSesli, 'g'), kalinSesliler[index]);
      });
    } else {
      kalinSesliler.forEach((kalinSesli, index) => {
        ek.bicimcik = ek.bicimcik.replace(new RegExp(kalinSesli, 'g'), inceSesliler[index]);
      });
    }

    return ek.bicimcik;
  },
  kucukUnluUyumu: function(kelime, ek) {
    if (kelime.sonSesliHarf.yuvarlak && kelime.sonSesliHarf.kalin) {
      ek.bicimcik = ek.bicimcik.replace(/ı|i/g, 'u');
    } else if (kelime.sonSesliHarf.yuvarlak && kelime.sonSesliHarf.ince) {
      ek.bicimcik = ek.bicimcik.replace(/ı|i/g, 'ü');
    }

    return ek.bicimcik;
  },
  kaynastirma: function(kelime, ek) {
    // İsitisnalar hal eki aldıklarında kaynaştırma he zaman uygulanır
    const istisnalar = ['su', 'ne'];

    if (ek.gorev === 'hal' && (kelime.sonHarf.sesli || istisnalar.includes(kelime.kelime))) {
      ek.bicimcik = 'y' + ek.bicimcik;
    }

    if (ek.gorev === 'iyelik' && istisnalar.includes(kelime.kelime)) {
      ek.bicimcik = 'y' + ek.bicimcik;
    }

    if (ek.gorev === 'iyelik' && ek.bicimcik === 'ı' && kelime.sonHarf.sesli && !(kelime.sonHarf.sessiz && kelime.sonHarf.sert)) {
      ek.bicimcik = 's' + ek.bicimcik;
    }

    return ek.bicimcik;
  },
  sessizSertlesmesi: function(kelime, ek) {
    if (kelime.sonHarf.sessiz && kelime.sonHarf.sert && ek.ilkHarf.sessiz && ek.ilkHarf.yumusak) {
      ek.bicimcik = ek.ilkHarf.sertlesmisHali + ek.bicimcik.substr(1);
    }
    return ek.bicimcik;
  },
  yardimciUnlu: function(kelime, ek) {
    const istisnalar = ['su', 'ne'];

    if (kelime.sonHarf.sesli && !istisnalar.includes(kelime.kelime)) {
      ek.bicimcik = ek.yalin;
      return ek.bicimcik;
    }

    ek.bicimcik = 'ı' + ek.bicimcik;
    return ek.bicimcik;
  },
};

module.exports = kurallar;
