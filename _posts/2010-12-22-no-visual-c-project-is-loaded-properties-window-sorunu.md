---
title: Properties Window &#8220;No Visual C++ Project Is Loaded&#8221; Sorunu ve Çözümü
date: 2010-12-22 00:00:00 +02:00
permalink: "/no-visual-c-project-is-loaded-properties-window-sorunu/"
categories:
- Programlama
tags:
- C#
- programlama
- visual c#
- Visual Studio 2010
author: emrahyumuk
layout: post
yazi_resmi:
- http://dl.dropbox.com/u/21850338/EmrahYumuk.com/visualstudio2010.png
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";s:4:"1125";s:11:"sayac_bugun";s:1:"0";s:9:"son_okuma";s:10:"1364914331";}
---

Visual Studio 2010&#8242; u açtığınızda &#8220;Properties Window&#8221; içinde herhangi bir şey görünmüyor ve &#8220;No Visual C++ Project Is Loaded&#8221; yazıyorsa Visual Studio ayarlarınıza reset atmanız gerekmektedir.

[Burada][1] da anlattığm gibi Visual Studio 2010 en üstteki menü çubuğundan **Tools>Import and Export Settings**&#8216; e tıklayın. Açılan pencerede &#8220;**Reset All Setting**&#8221; i seçin ve **Next**&#8216; e tıklayın. Sonraki pencerede tekrar **Next**&#8216;e tıklayın ve en son karşınıza geliştirme yapacağınız ortamı seçebileceğiniz bir pencere çıkacak. Mesela, eğer c# üzerinde çalışıyorsanız &#8220;**Visual C# Development Settings**&#8221; i seçip **Finish**&#8216;e tıklayın.

<!--more-->

Visual Studio, varsayılan ayarları yükleyecek ve ayarlarınız ilk haline dönecektir. Ve sorun ortadan kalkacaktır.

www.emrahyumuk.com

 [1]: http://www.emrahyumuk.com/blog/visual-studio-ilk-ayarlara-geri-donme-reset-settings/