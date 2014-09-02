---
title: NuGet Nedir ve Nasıl Kurulur?
author: emrahyumuk
layout: post
permalink: /nuget-nedir-ve-nasil-kurulur/
yazi_resmi:
  - http://dl.dropbox.com/u/21850338/EmrahYumuk.com/nuget-hata/nuget.jpg
sayfa_sayac_bilgi:
  - 'a:3:{s:12:"sayac_toplam";s:4:"9550";s:11:"sayac_bugun";s:1:"9";s:9:"son_okuma";s:10:"1364922307";}'
categories:
  - Programlama
tags:
  - dll
  - extension manager
  - kütüphane
  - nuget
  - nuget kullanım
  - nuget kurulum
  - nuget package manager
  - nuget paket ekleme
  - nuget paket yöneticisi
  - paket
  - Visual Studio
  - Visual Studio 2010
---
**Nuget**, **Visual Studio** projemiz için eklemek istediğimiz 3. parti paket ve dll&#8217;leri (AjaxControlToolkit, Jquery, Facebook, log4net vb.) bizim yerimize otomatik olarak ekleyen ücretsiz paket yöneticisidir.

İlk önce **nuget paket yöneticisi** visual studio&#8217;ya nasıl kurulur ona bakacağız.

İlk olarak **Visual Studio 2010** kısayoluna sağ tıklayıp **&#8220;Yönetici Olarak Çalıştır&#8221;** ile açınız.

Daha sonra Visual Studio&#8217;da en üstteki araç çubuğunda **Tools**&#8216;un altında **Extension Manager**&#8216;e tıklayınız.

<!--more-->

<img class="alignnone" title="nuget kurulum" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/nuget-kurulum/01.jpg" alt="nuget package manager" width="314" height="414" />

Açılan pencerede sağ kısımdan **Online Galery**&#8216;yi seçiniz. Eğer listede **NuGet Package Manager**&#8216;i göremiyorsanız sağ üst kısımdaki arama kutusuna **nuget** yazarak aratınız. Listede **NuGet Package Manager**&#8216;i göreceksiniz. Eğer daha önce yüklemediyseniz **Download** butonu çıkacak. **Nuget Package Manager**&#8216;i indirmek için **Download** butonuna tıklayınız. Ve daha sonra karşınıza gelecek pencerede **Install** butonuna tıklayarak yükleyiniz.

<img class="alignnone" title="nuget kurulum" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/nuget-kurulum/02.jpg" alt="nuget package manager" width="602" height="367" />

Yükleme başarı ile tamamlandıysa Visual Studio&#8217;yu yeniden başlatınız.

Araç çubuğunda **Tools** altında &#8220;**Library Package Manager**&#8220;i görüyorsanız **NuGet Package Manager** başarıyla yüklenmiş demektir.

<img class="alignnone" title="nuget kurulum" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/nuget-kurulum/03.jpg" alt="nuget package manager" width="315" height="433" />

Şimdi ise 3. parti yazılımlara nasıl ulaşacağız ve projemize nasıl ekleyeceğiz onu göreceğiz.

İlk olarak yeni bir proje oluşturun veya var olan projenizi açınız. **Tools** altında **Library Package Manager**&#8216;den &#8220;**Manage NuGet Packages for Solution&#8230;**&#8220;a tıklayınız.

<img class="alignnone" title="nuget kurulum" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/nuget-kurulum/04.jpg" alt="nuget package manager" width="587" height="457" />

Karşınıza gelen pencereden istediğiniz paketi seçerek **Install** butonuna tıklayarak projenize ekleyebilirsiniz.

<img class="alignnone" title="nuget kurulum" src="http://dl.dropbox.com/u/21850338/EmrahYumuk.com/nuget-kurulum/05.jpg" alt="nuget package manager" width="569" height="380" />

<a href="http://nuget.codeplex.com/" target="_blank">http://nuget.codeplex.com/</a>