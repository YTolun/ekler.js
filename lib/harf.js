'use strict';

/** Harfleri tanımlayan class  */
class Harf {
  /**
   * Tanımlanacak harfin özelliklerinden yeni bir harf nesnesi oluşturur
   * @param {string} harf
   */
  constructor(harf) {
    this.harf = harf;
    // Harfler nesnesinden harfi bul ve özelliklerini kopyala
    Object.keys(harfler[harf]).forEach((ozellik) => {
      this[ozellik] = harfler[harf][ozellik];
    });
  }
};

/**
 * Alfabedeki tüm harfleri ve bu harflerin kuralların
 * uygulanmasında işimize yarayacak özelliklerini içeren nesne
 */
const harfler = {
  'a': {
    sesli: true,
    kalin: true,
    duz: true,
    genis: true,
  },
  'b': {},
  'c': {},
  'ç': {
    sessiz: true,
    sert: true,
    sureksiz: true,
    yumusamisHali: 'c',
  },
  'd': {
    sessiz: true,
    yumusak: true,
    sertlesmisHali: 't',
  },
  'e': {
    sesli: true,
    ince: true,
    duz: true,
    genis: true,
  },
  'f': {
    sessiz: true,
    sert: true,
    surekli: true,
  },
  'g': {},
  'ğ': {},
  'h': {
    sessiz: true,
    sert: true,
    surekli: true,
  },
  'ı': {
    sesli: true,
    kalin: true,
    duz: true,
    dar: true,
  },
  'i': {
    sesli: true,
    ince: true,
    duz: true,
    dar: true,
  },
  'j': {},
  'k': {
    sessiz: true,
    sert: true,
    sureksiz: true,
    yumusamisHali: 'ğ',
  },
  'l': {},
  'm': {},
  'n': {},
  'o': {
    sesli: true,
    kalin: true,
    yuvarlak: true,
    genis: true,
  },
  'ö': {
    sesli: true,
    ince: true,
    yuvarlak: true,
    genis: true,
  },
  'p': {
    sessiz: true,
    sert: true,
    sureksiz: true,
    yumusamisHali: 'b',
  },
  'r': {},
  's': {
    sessiz: true,
    sert: true,
    surekli: true,
  },
  'ş': {
    sessiz: true,
    sert: true,
    surekli: true,
  },
  't': {
    sessiz: true,
    sert: true,
    sureksiz: true,
    yumusamisHali: 'd',
  },
  'u': {
    sesli: true,
    kalin: true,
    yuvarlak: true,
    dar: true,
  },
  'ü': {
    sesli: true,
    ince: true,
    yuvarlak: true,
    dar: true,
  },
  'v': {},
  'y': {},
  'z': {},
};

module.exports = Harf;
