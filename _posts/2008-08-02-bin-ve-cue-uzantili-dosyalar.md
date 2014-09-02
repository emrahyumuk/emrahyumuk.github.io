---
title: .bin ve .cue uzantılı dosyalar
author: emrahyumuk
layout: post
permalink: /bin-ve-cue-uzantili-dosyalar/
sayfa_sayac_bilgi:
  - 'a:3:{s:12:"sayac_toplam";s:4:"1899";s:11:"sayac_bugun";s:1:"1";s:9:"son_okuma";s:10:"1364802984";}'
categories:
  - Bilgisayar
tags:
  - bin
  - cue
  - iso
  - nero
---
<img class="alignleft" style="margin: 5px; float: left;" title=".bin .cue uzantılı dosyalar" src="http://img143.imageshack.us/img143/4898/cdbinuc6.png" alt="" width="150" height="150" />Bir dosya indirdik ve **.bin** uzantılı. eğer bu dosyanın yanında **.cue** uzantılı bir dosya varsa Nero ile cd&#8217;ye yazabiliriz. eğer cue uzantılı dosya yoksa bu dosyayı bizim oluşturmamız gerekiyor. Nasıl mı?

<!--more-->

ilk olarak &#8220;Yeni Metin Belgesi.txt&#8221; oluşturalım. oluşturduğumuz bu boş metin dosyasının içine,

<pre>&lt;span style="color: #ffffff;"&gt;.&lt;/span&gt;</pre>

FILE &#8220;DOSYA_ISMI.BIN&#8221;  
BINARY TRACK 01 MODE1/2352  
INDEX 01 00:00:00

**DOSYA_ISMI** kısmına .bin uzantılı dosyamızın ismi neyse onu yazıyoruz.

&#8220;Farklı Kaydet&#8221; i seçip **DOSYA_ISMI.CUE** olarak kaydediyoruz.

Sonra Nero ile iso dosyalarını yazdırdırır gibi bu dosyayı cdye yazabiliriz.

<a href="http://www.webhatti.com/resimli-program-anlatim/198240-iso-dosyalari-neroyla-cd-ye-yazma.html" target="_blank">Nero ile .cue veya .iso dosyaları nasıl cd veya dvd&#8217;ye yazılır</a>

<span style="color: #ffffff;">.</span>