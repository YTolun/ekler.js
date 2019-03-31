# ekler.js
İsimlere hal ve iyelik eklerini eklemenizi kolaylaştıran, VUI'lar düşünülerek geliştirilmiş bir JS kütüphanesidir.

## Özellikleri
Desteklediği ekleri gerekli dil bilgisi kurallarına uydurarak isme ekler

### Desteklediği Ekler
* Çoğul eki

* Hal ekleri
  * Belirtme
  * Yönelme
  * Bulunma
  * Ayrılma

* İyelik ekleri
  * Benim
  * Senin
  * Onun
  * Bizim
  * Sizin
  * Onların


## Kullanımı
~~~
require('./isim');

const dog = new Isim('köpek');
return dog.iyelikEki('bizim'); // köpeğimiz
~~~

Dökümantasyon gelinceye dek detaylı kullanım yörüngeleri için kodu incelemeniz gerekiyor.

## Yapılacaklar
* Özellikle testlerin sınıflandırılması ve bazı kuralların uygulanması bakımından köklü değişiklikler olacağını tahmin ediyorum
* Henüz ele alınmayan istisnaların ele alınması için çalışılması gerek
* Kendi eklerinizi ve/veya kurallarınızı da tanıtmayı anlatan bir dökümantasyon yazılacak
* npm paketi olarak sunulacak
* İleride VUI geliştirirken orataya çıkacak ihtiyaçlarıma bağlı olarak fiilden isim yapma ekleri gibi daha karmaşık ekler desteklenebilir

## İlham Kaynakları
* https://github.com/biberlabs/ekler
* https://github.com/yasinkuyu/Turkish.js
* https://github.com/sercaneraslan/haller.js