---
title: Pardus 2011&#8242;de İnternet Sorunu ve Çözümü
date: 2011-01-28 00:00:00 +02:00
permalink: "/pardus-2011-internet-sorunu-ve-cozumu/"
categories:
- Linux
tags:
- İnternet
- işletim sistemi
- linux
- pardus
- pardus 2011
- pardus 2011 internet sorunu
- pardus 2011 internete bağlanmıyor
- pardus 2011 otomatik ip sorunu
- pardus internet bağlantı problemi
- pardus internete bağlanmıyor
author: emrahyumuk
layout: post
yazi_resmi:
- http://dl.dropbox.com/u/21850338/EmrahYumuk.com/pardus2011.jpg
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";i:20670;s:11:"sayac_bugun";i:2;s:9:"son_okuma";i:1366293904;}
---

Bazı bilgisayarlarda Pardus 2011&#8242;de internet sorunu oluyor. Bağlandı görünüyor fakat internete girilemiyor. Pardus&#8217;un eski sürümlerinde böyle bir sorun olmadığı halde ben de hem masaüstü bilgisayarımda hem de netbook&#8217;umda aynı sorunla karşılaştım.

Sorunu şöyle çözdüm:

<!--more-->

ilk olarak windows&#8217;tayken **Başlat>Donatılar>Komut İstemi**&#8216; ni açıyoruz. Karşımıza komut yazma ekranı gelecek.

ipconfig yazıp enter&#8217;a basıyoruz. Ve ağ ile ilgili bir çok bilgi karşımıza gelecek. ipconfig yazdığımız satırın hemen altında bir bölümde **IPv4 adresi,  Alt Ağ Maskesi, Varsayılan Ağ Geçidi** gibi bilgileri göreceksiniz.

<img class="alignnone" title="ipconfig" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/ipconfigmp.jpg" alt="" width="540" height="55" />

buradaki bilgileri not edin. siz de farklı olabilir. Ne yazıyorsa olduğu gibi bir kağıda not edin. Bu bilgileri pardus üzerinde kullanacağız.

Şimdi ise bilgisayarınızı yeniden başlatıp Pardus işletim sistemine geçiniz. Yapacağınız işlemler sırasında karşınıza şifre ekranı çıkarsa Pardus&#8217;u ilk kurarken belirlediğiniz şifrenizi giriniz.

<img class="alignnone" title="pardus 2011" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/pardus1.png" alt="" width="322" height="208" />

Pardus 2011 işletim sisteminizde sağ alt köşede ethernet simgesini göreceksiniz. Bu simgeye sağ tıklayıp **Ağ Yönetimi Ayarları**&#8216; na girin.

<img class="alignnone" title="pardus 2011" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/pardus2.png" alt="" width="563" height="335" />

Karşımıza gelen Ağ Yönetimi Ayarları ekranında sağdaki **Ekle** butonuna tıklayın.

<img class="alignnone" title="pardus 2011" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/pardus3.png" alt="" width="485" height="581" />

En üstteki Bağlantı Adı&#8217;nı **internet** olarak değiştirin ve altındaki **Otomatik Bağlan**&#8216;a tik atın.  Yöntem yazan yerde **El ile **seçeneği seçin. **IP Adresi, Alt Ağ Maskesi** ve **Ağ Geçidi** bölümlerine windows&#8217;ta ipconfig ile almış olduğunuz bilgilerin aynılarını sırası ile yazın.DNS Sunucularına Google DNS&#8217;leri olan **8.8.8.8** ve **8.8.4.4** girin. Ekran görüntüsünde görüldüğü gibi iki DNS arasına **virgül** koyun. ve **Tamam** butonuna tıklayın. Diğer ekranda da **Tamam**&#8216;a tıklayın ve bilgisayarınızı yeniden başlatın.

Pardus 2011 işletim sisteminde bilgisayarınız otomatik olarak internete bağlanacaktır.