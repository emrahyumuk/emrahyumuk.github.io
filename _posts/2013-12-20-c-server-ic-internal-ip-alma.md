---
title: C# Server İç (Internal) IP Alma
date: 2013-12-20 00:00:00 +02:00
permalink: "/c-server-ic-internal-ip-alma/"
categories:
- Programlama
tags:
- c# ip adres
- dns
- iç ip
- internal ip
author: emrahyumuk
layout: post
image:
  feature: abstract-3.jpg
share: true
---

C#&#8217;ta server iç (internal) ip adresi alma:

<pre>var ipAddress = Dns.GetHostEntry(Dns.GetHostName()).AddressList.FirstOrDefault(ip =&gt; ip.AddressFamily == AddressFamily.InterNetwork);</pre>

<!-- more -->

Şu şekilde **GetAddressByte()** metodu ile istediğimiz her bir byte&#8217;ına da ulaşabiliyoruz.

<pre>var ipBytes = ipAddress.GetAddressBytes();
var lastByte = ipBytes[3];</pre>