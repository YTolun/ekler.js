'use strict';

const Harf = require('./harf');
const Ek = require('./ek');
/**
 * Kelimeleri tanımlayan class
 */
class Kelime {
  /**
   * Kelimenin string değerinden anlamlı özellikleri ayrıştırır
   * ve bunlardan yeni bir kelime nesnesi oluşturur
   * @param {string} kelime
   */
  constructor(kelime) {
    this.kelime = kelime;
    // Kelimenin tüm sesli harflerini bul ve sonuncunun özelliklerini sakla
    this.sesliHarfler = this.kelime.match(/[aeıioöuü]/g);
    this.sonSesliHarf = this.sesliHarfler[this.sesliHarfler.length - 1];
    this.sonSesliHarf = new Harf(this.sonSesliHarf);
    // Kelimenin son harfini bul ve sakla
    this.sonHarf = new Harf(kelime[kelime.length - 1]);
  }

  /**
   * Sert sessiz ile biten bir kelimenin ek alması durumunda son harfi yumuşatır
   * @param {Object} ek
   * @return {string} Son harfi yumuşatılmış kelimeyi içeren nesne
   */
  _unsuzYumusamasi(ek) {
    // Tek heceli olmasına rağmen sessiz yumuşamasına uğrayan kelimeler
    const tekHeceliIstinalar = ['çok', 'kap'];
    // Yabancı kökenli olduğu için sessiz yumuşamasına uğramayan kelimeler
    const yabanciKokenliIstisnalar = ['millet', 'hukuk', 'sanat', 'hayat', 'konut', 'taşıt'];

    if ((this.sesliHarfler.length === 1 && !tekHeceliIstinalar.includes(this.kelime)) || yabanciKokenliIstisnalar.includes(this.kelime)) {
      return this.kelime;
    }

    if (this.sonHarf.sessiz && this.sonHarf.sert && this.sonHarf.sureksiz && ek.ilkHarf.sesli) {
      this.kelime = this.kelime.slice(0, -1);
      this.kelime += this.sonHarf.yumusamisHali;
    }

    return this.kelime;
  };

  /**
   * Belirtilen eke kuralları uygular ve kelimeye ekler
   * @param {string} gorev Ekin görevi
   * @param {string} ek Ekin hiçbir değişime uğramamış hali
   * @param {string} ayrac Kelime ile ek arasına konulacak ayrac
   * @return {string} Kelimenin ek eklenmiş hali
   */
  ekle(gorev, ek, ayrac = '') {
    ek = new Ek(gorev, ek).kurallarıUygula(this);
    const kelime = this._unsuzYumusamasi(ek);
    return kelime + ayrac + ek.bicimcik;
  }
}

module.exports = Kelime;
