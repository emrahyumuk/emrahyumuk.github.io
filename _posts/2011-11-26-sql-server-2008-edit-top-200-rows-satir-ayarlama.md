---
title: 'SQL Server 2008 &#8220;Edit Top 200 Rows&#8221; Satır Sayısını Ayarlama'
author: emrahyumuk
layout: post
permalink: /sql-server-2008-edit-top-200-rows-satir-ayarlama/
Hide SexyBookmarks:
  - 0
Hide OgTags:
  - 0
sayfa_sayac_bilgi:
  - 'a:3:{s:12:"sayac_toplam";s:4:"2253";s:11:"sayac_bugun";s:1:"0";s:9:"son_okuma";s:10:"1364790055";}'
yazi_resmi:
  - http://dl.dropbox.com/u/21850338/EmrahYumuk.com/SQL_Server_k.jpg
categories:
  - Programlama
tags:
  - edit top 200 rows
  - microsoft sql server
  - ms sql
  - sql
  - sql server
  - sql server 2008
---
Sql Server&#8217;da tablodaki verileri görmek ve editlemek istediğimizde **&#8220;Edit Top 200 Rows**&#8220;u açarız, bazen tablodaki veriler 200&#8242;den daha fazla olabilir. Bu durumda 200 sınırını arttırmak için ne yapmalıyız?

Sadece o anki tabloda 200 satır değil de daha fazla görebilme veya sürekli her tabloyu istediğimiz satır sayısında açabilme olmak üzere 2 seçeneğimiz mevcut.

<!--more-->

<span style="text-decoration: underline;"><strong>1.SEÇENEK:</strong></span>

Sql Server&#8217;da bir tablonun üzerine sağ tıklayıp &#8220;**Edit Top 200 Rows**&#8221; u açtık. Ve o tabloda 200&#8242;den fazla satır var diğer satırları da görmek ve editlemek istiyoruz.

&nbsp;

<img class="alignnone" title="sql server 2008 edit top 200 rows - 01" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/01.jpg" alt="sql server 2008 edit top 200 rows değiştirme" width="325" height="463" />

Tablomuz edit modta açıldıktan sonra üstte toolbardan &#8220;**Show SQL Pane**&#8221; butonuna tıklıyoruz.

<img class="alignnone" title="sql server edit top 200 rows 02" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/02.jpg" alt="sql server edit top 200 rows değiştirme" width="353" height="117" />

&nbsp;

Karşımıza tabloyu 200 satır olarak edit modta açan sql kodu gelecek.

<img class="alignnone" title="sql server edit top 200 rows - 03" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/03.jpg" alt="sql server edit top 200 rows değiştirme" width="551" height="83" />

&nbsp;

Bu kodda 200 yazan yeri mesela 1000 olarak değiştirip yüne üstteki toolbardan &#8220;**Execute SQL**&#8221; butonuna tıklıyoruz.

<img class="alignnone" title="sql server edit top 200 rows - 04" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/04.jpg" alt="sql server edit top 200 rows değiştirme" width="355" height="124" />

&nbsp;

Artık alt kısımda gördüğümüz tablo verileri en fazla 200 değil de 1000 satır olarak görülecek ve bu satırları editleyebileceğiz.

&nbsp;

<span style="text-decoration: underline;"><strong>2.SEÇENEK:</strong></span>

Bu seçenekte &#8220;**Edit Top 200 Rows**&#8220;taki varsayılan 200 olan satır sayısını değiştireceğiz ve artık bütün tablolara sağ tıkladığımızda &#8220;**Edit Top 1000 Rows**&#8221; yazacak ve 1000 satır görüntülenecek.

Üst kısımda araç çubuğundan **Tools>Options**&#8216; a giriyoruz.

<img class="alignnone" title="sql server edit top 200 rows " src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/05.jpg" alt="sql server edit top 200 rows değiştirme" width="508" height="238" />

&nbsp;

Options penceresi karşımıza gelecek ve bu pencerede &#8220;**SQL Server Object Explorer**&#8220;&#8216;a tıklıyoruz.

<img class="alignnone" title="sql server edit top 200 rows" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/06.jpg" alt="sql server edit top 200 rows değiştirme" width="602" height="346" />

&nbsp;

Sağ kısımda &#8220;**Value for Edit Top <n> Rows command**&#8221; satırındaki 200&#8242;ü 1000 olarak değiştirirsek artık sql serverda hangi tabloya sağ tıklarsak &#8220;**Edit Top 1000 Rows**&#8221; olarak göreceğiz.  Ayrıca gördüğünüz gibi buradan &#8220;Select Top 1000 Rows&#8221;un da satır sayısını değişitirebiliyoruz.

<img class=" alignnone" title="sql server edit top 200 rows" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/sql-server-edit-top-200-rows/07.jpg" alt="sql server edit top 200 rows değiştirme" width="356" height="478" />