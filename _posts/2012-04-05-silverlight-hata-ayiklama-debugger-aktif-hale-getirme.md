---
title: Silverlight Hata Ayıklama (Debugger) Aktif Hale Getirme
date: 2012-04-05 00:00:00 +03:00
permalink: "/silverlight-hata-ayiklama-debugger-aktif-hale-getirme/"
categories:
- Programlama
tags:
- debugger
- hata ayıklama
- silverlight
- Visual Studio
- Visual Studio 2010
author: emrahyumuk
layout: post
yazi_resmi:
- http://dl.dropbox.com/u/21850338/EmrahYumuk.com/silverlight-logo.jpg
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";s:5:"27120";s:11:"sayac_bugun";s:1:"1";s:9:"son_okuma";s:10:"1366288710";}
---

Silverlight projemizi çalıştırdığımızda breakpoint koyduğumuz yerlere düşmüyorsa, silverlight için hata ayıklama (debugger) aktif değil demektir. Bunu visual studio solution içindeki silverlight Web projesinin özellik ayarlarından yapacağız.

<span style="color: #c0c0c0;">.</span>

<!--more-->

<img class="alignnone" title="silverlight debugger hata ayıklama" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/silverlight-debugger-activate/01.png" alt="" width="308" height="550" />

Silverlight solution içindeki &#8220;**Silverlight.Web**&#8221; projesine sağ tıklayıp &#8220;**Properties**&#8220;e tıklıyoruz.

<img class="alignnone" title="silverlight debugger hata ayıklama" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/silverlight-debugger-activate/02.png" alt="" width="519" height="855" />

&nbsp;

Karşımıza çıkan ekranda **Web** sekmesine giriyoruz.

<img class="alignnone" title="silverlight debugger hata ayıklama" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/silverlight-debugger-activate/03.png" alt="" width="563" height="482" />

En altta bulunan Debuggers bölümüden Silverlight&#8217;ı işaretleyip kaydediyoruz.