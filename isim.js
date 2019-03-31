'use strict';

const Kelime = require('./lib/kelime');

/**
 * İsimleri tanımlayan class
 */
class Isim extends Kelime {
  /**
   * Tanımlanacak ismin özelliklerinden yeni bir isim nesnesi oluştur
   * @extends Kelime
   * @param {string} isim
   * @param {bool} ozelIsim
   */
  constructor(isim, ozelIsim = false) {
    super(isim);
    this.ozelIsim = ozelIsim;
  }

  /**
   *  Çoğul eki ekle
   * @return {string} İsmin çoğul hali
   */
  cogul() {
    return this.ekle('cogul', 'lar');
  }

  /**
   * Hal eki ekle
   * @param {string} hal İsme eklenecek hal eki
   * @return {string} İsmin hal eki eklenmiş hali
   */
  halEki(hal) {
    const ayrac = this.ozelIsim ? '\'' : '';
    const halEkleri = {
      'belirtme': 'i',
      'yönelme': 'e',
      'bulunma': 'de',
      'ayrılma': 'den',
    };
    return this.ekle('hal', halEkleri[hal], ayrac);
  }

  /**
   * İyelik eki ekle
   * @param {string} zamir İsmin sahibin kişi zamirinin iyelik eki almış hali
   * @return {string} İsmin iyelik eki eklenmiş hali
   */
  iyelikEki(zamir) {
    const ayrac = this.ozelIsim ? '\'' : '';
    const iyelikEkleri = {
      'benim': 'm',
      'senin': 'n',
      'onun': 'ı',
      'bizim': 'mız',
      'sizin': 'nız',
      'onların': 'ları',
    };
    return this.ekle('iyelik', iyelikEkleri[zamir], ayrac);
  }
}

module.exports = Isim;
