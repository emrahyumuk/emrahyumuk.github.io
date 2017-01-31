---
title: Sql Server 2008 &#8211; Prevent Saving Changes
date: 2012-02-12 00:00:00 +02:00
permalink: "/sql-server-2008-prevent-saving-changes/"
categories:
- Programlama
tags:
- ms sql
- sql server 2008
- sql server hata
- tablo oluşturma engeli
- tablo oluşturma izni
author: emrahyumuk
layout: post
yazi_resmi:
- http://dl.dropbox.com/u/21850338/EmrahYumuk.com/SQL_Server_k.jpg
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";i:45453;s:11:"sayac_bugun";i:3;s:9:"son_okuma";i:1366295002;}
---

**Sql Server 2008**&#8216;de yeni bir tablo oluşturduğunuzda varsayılan olarak, oluşturduğunuz bu tabloda herhangi bir değişiklik yapmanıza izin vermez. Ve &#8220;**Saving changes is not permitted&#8230;.Prevent saving changes that require the table to be re-created**&#8221; şeklinde bi hata verir. Güvenlik amacıyla yapılan bu varsayılan durumu sql ayarlarından değiştirebiliriz.

<!--more-->

<img title="sql prevent saving changes" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-prevent-saving-changes/prevent-01.png" alt="sql prevent saving changes" width="431" height="348" />

Bu hata mesajı aşağıdaki işlemleri yaptığımızda çıkar;  
-kolonun özelliklerini değişirdiğimizde,  
-kolonu silmeye çalıştığımızda,  
-yeni bir kolon eklediğimizde,  
-Foreign Key ve Primary Key eklemek veya değiştirmek istediğimizde.

Şimdi ise çözümüne geçelim:

<img class="alignnone" title="sql prevent saving changes" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-prevent-saving-changes/prevent-02.png" alt="sql prevent saving changes" width="470" height="142" />

En üstte araç çubuğundan **Tools>Options**&#8216;a giriyoruz.

<img class="alignnone" title="sql prevent saving changes" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-prevent-saving-changes/prevent-03.png" alt="sql prevent saving changes" width="608" height="353" />

Karşımıza gelen ekranda soldan **Designer**&#8216;a tıklıyoruz ve &#8220;**Prevent saving changes that require table re-creation**&#8220;ın işaretini kaldırıyoruz.