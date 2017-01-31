---
title: USB Flash Bellekten Windows XP Kurulumu (Bootable USB Windows XP)
date: 2011-03-09 00:00:00 +02:00
permalink: "/usb-flash-bellekten-windows-xp-kurulumu-bootable/"
categories:
- Bilgisayar
tags:
- flash bellek
- resimli anlatım
- usb bellek
- win setup from usb
- Win Setup From USb 1.0
- windows xp
- windows xp bootable usb
- windows xp usb kurulum
- windows xp usb kurulum resimli anlatım
- winsetupfromusb
author: emrahyumuk
layout: post
yazi_resmi:
- http://dl.dropbox.com/u/21850338/EmrahYumuk.com/windowsxp-usb.jpg
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";i:110090;s:11:"sayac_bugun";i:12;s:9:"son_okuma";i:1366294287;}
---

Netbook&#8217;unuza veya cdrom&#8217;u olmayan eski bilgisayarlarınıza flash bellek ile windows xp kurmak istiyorsanız, size sorunsuz ve kolay bir şekilde nasıl bootable windows xp hazırlanıp nasıl kurulum yapacağınızı anlatacağım.

İlk önce**[ buradan][1]** WinSetupFromUSB programını indiriyoruz. Bilgisayarımızdaki Windows XP iso dosyasının içindekileri bir klasöre çıkartıyoruz veya kopyalıyoruz. Mesela masaüstünde xp isimli bir klasöre bu dosyaları çıkartabilirsiniz.

<!--more-->

Flash belleğimizi bilgisayara taktıktan sonra indirdiğimiz rar dosyası içindeki **WinSetupFromUSB** exe dosyasına tıklıyoruz.

<img class="alignnone" title="Win setup windows xp bootable usb" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/winsetup.jpg" alt="" width="446" height="584" />

Karşımıza gelen bu ekrandan ilk bölümde flash belleği seçiyoruz, ikinci bölümde **Windows 2000/XP/2003 Setup** kısmını seçip Windows XP dosyalarımızın yer aldığı klasörü gösteriyoruz. Son olarak **GO** butonuna tıklıyoruz ve dosyalar usb belleğimize kopyalanmaya başlıyor. Bu işlem uzun sürebilir, kopyalanana kadar bekleyiniz.

Kopyalama işlemi bittikten sonra bilgisayarımızı yeniden başlatıyoruz ve BIOS ayarları ile  USB bellekten başlamasını sağlıyoruz.

<img class="alignnone" title="winsetup usb windows xp bootable" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/winsetup2.jpg" alt="" width="498" height="277" />

Bilgisayarı USB bellekten başlattığımızda karşımıza bu ekran gelecek . **Windows XP/2000/2003 Setup**&#8216; ı seçiyoruz.

<img class="alignnone" title="winsetup bootable usb windows xp" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/winsetup3.jpg" alt="" width="496" height="277" />

Karşımıza gelen bu ekranda ise ilk olarak **First part of Windows XP Professional Setup**&#8216;a giriyoruz.

Windows XP kur dosyalarını yüklemeye başlayacak. XP kuracağınız diski seçiniz ve biçimlendiriniz.

**NOT:** <span style="color: #ff0000;">Eğer bu bölümde xp kurulumu yapacağınız harddisk bölümlerini göremiyorsanız BIOS ayarlarından Advanced Setting kısmında SATA kısmında seçili olan AHCI modu IDE veya Compatibility olarak değiştirin. Bunu yaptıktan sonra windows xp ile kurulum yapacağınız diski tekrar biçimlendirmeyi deneyin.</span>

Biçimlendirme işlemi ve Kur dosyaları yüklemesi bittikten sonra bilgisayar yeniden başlayacak.

Bilgisayar yeniden başladıktan sonra karşımıza tekrar aynı ekran gelecek. Bu kez **Second part of Windows XP Setup**&#8216;u seçiyoruz. Ve Windows XP kuruluma başlıyor.

USB Bellekten XP kurmak için birçok yöntem denedim, hepsi farklı farklı sorunlar verdi. Şu an için sorunsuz ve en kolay kurulum yaptığım yol bu. Umarım faydalı olmuştur.

 [1]: http://dl.dropbox.com/u/233963/Programlar/WinSetup-1-0-beta7.rar