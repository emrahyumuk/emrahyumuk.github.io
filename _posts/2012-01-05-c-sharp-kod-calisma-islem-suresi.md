---
title: C# Kod Çalışma (İşlem) Süresi
date: 2012-01-05 00:00:00 +02:00
permalink: "/c-sharp-kod-calisma-islem-suresi/"
categories:
- Programlama
tags:
- C Sharp
- kod çalışma süresi
- kod işlem süresi
- Stopwatch
- System.Diagnostics
author: emrahyumuk
layout: post
Hide SexyBookmarks:
- 0
Hide OgTags:
- 0
yazi_resmi:
- http://dl.dropbox.com/u/21850338/EmrahYumuk.com/csharp.png
sayfa_sayac_bilgi:
- a:3:{s:12:"sayac_toplam";i:9930;s:11:"sayac_bugun";i:1;s:9:"son_okuma";i:1366293381;}
---

Yazmış olduğumuz kod bloğunun çalışma süresini **Stopwatch** sınıfı ile öğrenebiliriz. Mesela bir **for** döngümüz var ve bunun ne kadar zamanda işlem yaptığını öğrenmek istiyoruz.

<!--more-->

<div style="clear:both;">
</div>

<pre>using System.Diagnostics;

public string CalculateTheRunningTime()
{
    Stopwatch sw = new Stopwatch();
    sw.Start();

    int toplam = 0;
    for (int i = 0; i &gt; 100000; i++)
    {
        toplam += i;
    }

    sw.Stop();

    string runningTime = sw.Elapsed.ToString();

    return runningTime;
}</pre>

Bu şekilde **Stopwatch **sınıfını kullanarak aynı işlemi yapan kod bloklarının performanslarını karşılaştırabilirsiniz.