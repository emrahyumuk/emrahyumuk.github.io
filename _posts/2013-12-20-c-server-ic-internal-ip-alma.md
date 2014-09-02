---
title: 'C# Server İç (Internal) IP Alma'
author: emrahyumuk
layout: post
permalink: /c-server-ic-internal-ip-alma/
categories:
  - Programlama
tags:
  - 'c# ip adres'
  - dns
  - iç ip
  - internal ip
  
image:
  feature: abstract-3.jpg
  credit: dargadgetz
  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
comments: true
share: true
---
C#&#8217;ta server iç (internal) ip adresi alma:

<pre>var ipAddress = Dns.GetHostEntry(Dns.GetHostName()).AddressList.FirstOrDefault(ip =&gt; ip.AddressFamily == AddressFamily.InterNetwork);</pre>

Şu şekilde **GetAddressByte()** metodu ile istediğimiz her bir byte&#8217;ına da ulaşabiliyoruz.

<pre>var ipBytes = ipAddress.GetAddressBytes();
var lastByte = ipBytes[3];</pre>