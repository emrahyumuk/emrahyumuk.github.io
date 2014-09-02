---
title: Sql Server 1605 Nolu Kurulum Hatası ve Çözümü
author: emrahyumuk
layout: post
permalink: /sql-server-1605-nolu-kurulum-hatasi-ve-cozumu/
yazi_resmi:
  - http://dl.dropbox.com/u/21850338/EmrahYumuk.com/SQL_Server_k.jpg
sayfa_sayac_bilgi:
  - 'a:3:{s:12:"sayac_toplam";i:7426;s:11:"sayac_bugun";i:1;s:9:"son_okuma";i:1366292691;}'
categories:
  - Programlama
tags:
  - microsoft sql server
  - ms sql
  - sql
  - sql server 2008
  - sql server error 1605
  - sql server setup failure
---
Sql Server 2005&#8242;ten 2008&#8242;e veya 2008&#8242;den 2008 R2&#8242;ye geçiş yaparken şu hatayla karşılaşabilirsiniz:

**Sql Server Setup has encountered the following error:**

**MsiGetProductInfo failed to retrieve ProductVersion for package with Product Code = ‘{80A58174-1448-4124-E21D-2D1AE71626A3}’. Error code: 1605..**

<!--more-->

<img class="alignnone" title="sql server error 1605" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-error-1605.png" alt="sql server error 1605" width="540" height="149" />

Bu sorunu şöyle çözebilirsiniz:

Hata mesajındaki Product Code kısmının ilk bölmünü (ilk 8 hanesini) tersten yazıyoruz. Mesela yukarıdaki hata mesajında **Product Code = {80A58174-1448-4124-E21D-2D1AE71626A3}**&#8216;dur. ilk 8 hanesi **80A58174**, bunu tersten yazıyoruz ve **47185A08** oluyor. Bu kodu Kayıt Defteri Düzenleyicisinde aratacağız.

**Başlat>Çalıştır**&#8216; a **regedit** yazıp enter&#8217;a basıyoruz.

<img class="alignnone" title="sql server error 1605" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-error-1605-a.jpg" alt="sql server error 1605" width="573" height="334" />

Üst kısımdaki araç çubuğundan Düzen>Bul&#8217; a tıklıyoruz.

<img class="alignnone" title="sql server error 1605" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-error-1605-b.jpg" alt="sql server error 1605" width="407" height="194" />

Arama kısmında tersine çevirdiğimiz kodu (**47185A08**) kopyalayıp yapıştırıyoruz ve **Sonrakini Bul** butonuna tıklıyoruz.

<img class="alignnone" title="sql server error 1605" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-error-1605-c.jpg" alt="sql server error 1605" width="522" height="253" />

Arama sonrası bulunan değerin üzerine sağ tıklayıp **Sil** diyoruz.