---
title: Visual Studio &#8211; Varsayılan Ayarlara Geri Dönme (Reset Settings)
date: 2010-12-22 00:00:00 +02:00
permalink: "/visual-studio-ilk-ayarlara-geri-donme-reset-settings/"
categories:
- Programlama
tags:
- microsoft
- programlama
- reset settings
- Visual Studio
- Visual Studio 2010
author: emrahyumuk
layout: post
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";s:4:"2301";s:11:"sayac_bugun";s:1:"0";s:9:"son_okuma";s:10:"1364914326";}
yazi_resmi:
- http://www.emrahyumuk.com/images/blog/visualstudio2010.png
---

Microsof Visual Studio&#8217;da ayarları değiştirmiş ve eski ayarlara geri dönemiyorsanız;

Visual Studio 2010 en üstteki menü çubuğundan **Tools>Import and Export Settings**&#8216; e tıklayın. Açılan pencerede &#8220;**Reset All Setting**&#8221; i seçin ve **Next**&#8216; e tıklayın. Sonraki pencerede tekrar **Next**&#8216;e tıklayın ve en son karşınıza geliştirme yapacağınız ortamı seçebileceğiniz bir pencere çıkacak. Mesela, eğer c# üzerinde çalışacaksınız &#8220;**Visual C# Development Settings**&#8221; i seçip **Finish**&#8216;e tıklayın.  
<!--more-->

Visual Studio, varsayılan ayarları yükleyecek ve ayarlarınız ilk haline dönecektir.

Diğer bir yol ise;  
**Başlat>Çalıştır** açın (**Windows+R** kısayol tuşlarını kullanarak da açabilirsiniz).  
**devenv /resetsettings** yazın ve **Tamam**&#8216; a tıklayın. (devenv kelimesinden sonra boşluk var dikkat edin)

<span><a href="http://www.emrahyumuk.com">www.emrahyumuk.com</a></span>