import React, { useState, useEffect } from "react";

const data = [
  // A2 Seviyesi (1-25)
  {
    cumle: "Ich habe Brot gekauft.",
    turkce: "Ben ekmek satın aldım.",
    level: "A2",
    partizip: "gekauft",
    notes: "kaufen fiilinin Partizip 2 hali: gekauft",
  },
  {
    cumle: "Sie hat einen Brief geschrieben.",
    turkce: "O (kadın) bir mektup yazdı.",
    level: "A2",
    partizip: "geschrieben",
    notes: "schreiben fiilinin Partizip 2 hali: geschrieben",
  },
  {
    cumle: "Wir haben zusammen gegessen.",
    turkce: "Biz birlikte yemek yedik.",
    level: "A2",
    partizip: "gegessen",
    notes: "essen fiilinin Partizip 2 hali: gegessen",
  },
  {
    cumle: "Er hat Deutsch gelernt.",
    turkce: "O (erkek) Almanca öğrendi.",
    level: "A2",
    partizip: "gelernt",
    notes: "lernen fiilinin Partizip 2 hali: gelernt",
  },
  {
    cumle: "Hast du gut geschlafen?",
    turkce: "İyi uyudun mu?",
    level: "A2",
    partizip: "geschlafen",
    notes: "schlafen fiilinin Partizip 2 hali: geschlafen",
  },
  {
    cumle: "Ich bin nach Hause gegangen.",
    turkce: "Eve gittim.",
    level: "A2",
    partizip: "gegangen",
    notes:
      "gehen fiilinin Partizip 2 hali: gegangen - hareket fiili olduğu için sein yardımcı fiiliyle kullanılır",
  },
  {
    cumle: "Sie haben Musik gehört.",
    turkce: "Onlar müzik dinlediler.",
    level: "A2",
    partizip: "gehört",
    notes: "hören fiilinin Partizip 2 hali: gehört",
  },
  {
    cumle: "Ich habe meine Hausaufgaben gemacht.",
    turkce: "Ödevlerimi yaptım.",
    level: "A2",
    partizip: "gemacht",
    notes: "machen fiilinin Partizip 2 hali: gemacht",
  },
  {
    cumle: "Er ist spät aufgestanden.",
    turkce: "O (erkek) geç kalktı.",
    level: "A2",
    partizip: "aufgestanden",
    notes:
      "aufstehen fiilinin Partizip 2 hali: aufgestanden - ayrılabilir fiil",
  },
  {
    cumle: "Wir haben einen Film gesehen.",
    turkce: "Bir film izledik.",
    level: "A2",
    partizip: "gesehen",
    notes: "sehen fiilinin Partizip 2 hali: gesehen",
  },
  {
    cumle: "Hast du dein Zimmer geputzt?",
    turkce: "Odanı temizledin mi?",
    level: "A2",
    partizip: "geputzt",
    notes: "putzen fiilinin Partizip 2 hali: geputzt",
  },
  {
    cumle: "Ich habe Kaffee getrunken.",
    turkce: "Kahve içtim.",
    level: "A2",
    partizip: "getrunken",
    notes: "trinken fiilinin Partizip 2 hali: getrunken",
  },
  {
    cumle: "Sie ist mit dem Bus gefahren.",
    turkce: "O (kadın) otobüsle gitti.",
    level: "A2",
    partizip: "gefahren",
    notes:
      "fahren fiilinin Partizip 2 hali: gefahren - hareket fiili olduğu için sein ile kullanılır",
  },
  {
    cumle: "Wir haben viel gelacht.",
    turkce: "Çok güldük.",
    level: "A2",
    partizip: "gelacht",
    notes: "lachen fiilinin Partizip 2 hali: gelacht",
  },
  {
    cumle: "Er hat sein Handy gefunden.",
    turkce: "O (erkek) telefonunu buldu.",
    level: "A2",
    partizip: "gefunden",
    notes: "finden fiilinin Partizip 2 hali: gefunden",
  },
  {
    cumle: "Ich habe ihm geholfen.",
    turkce: "Ona yardım ettim.",
    level: "A2",
    partizip: "geholfen",
    notes: "helfen fiilinin Partizip 2 hali: geholfen",
  },
  {
    cumle: "Wir haben Fußball gespielt.",
    turkce: "Futbol oynadık.",
    level: "A2",
    partizip: "gespielt",
    notes: "spielen fiilinin Partizip 2 hali: gespielt",
  },
  {
    cumle: "Sie hat das Fenster geöffnet.",
    turkce: "O (kadın) pencereyi açtı.",
    level: "A2",
    partizip: "geöffnet",
    notes: "öffnen fiilinin Partizip 2 hali: geöffnet",
  },
  {
    cumle: "Habt ihr die Nachrichten gesehen?",
    turkce: "Haberleri izlediniz mi?",
    level: "A2",
    partizip: "gesehen",
    notes: "sehen fiilinin Partizip 2 hali: gesehen",
  },
  {
    cumle: "Ich bin früh eingeschlafen.",
    turkce: "Erken uyudum.",
    level: "A2",
    partizip: "eingeschlafen",
    notes:
      "einschlafen fiilinin Partizip 2 hali: eingeschlafen - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Er hat seine Brille verloren.",
    turkce: "O (erkek) gözlüğünü kaybetti.",
    level: "A2",
    partizip: "verloren",
    notes: "verlieren fiilinin Partizip 2 hali: verloren",
  },
  {
    cumle: "Wir haben das Haus gesäubert.",
    turkce: "Evi temizledik.",
    level: "A2",
    partizip: "gesäubert",
    notes: "säubern fiilinin Partizip 2 hali: gesäubert",
  },
  {
    cumle: "Sie haben viel gearbeitet.",
    turkce: "Onlar çok çalıştılar.",
    level: "A2",
    partizip: "gearbeitet",
    notes: "arbeiten fiilinin Partizip 2 hali: gearbeitet",
  },
  {
    cumle: "Ich habe ein Lied gesungen.",
    turkce: "Bir şarkı söyledim.",
    level: "A2",
    partizip: "gesungen",
    notes: "singen fiilinin Partizip 2 hali: gesungen",
  },
  {
    cumle: "Er ist ins Kino gegangen.",
    turkce: "O (erkek) sinemaya gitti.",
    level: "A2",
    partizip: "gegangen",
    notes: "gehen fiilinin Partizip 2 hali: gegangen - sein ile kullanılır",
  },

  // A2 Seviyesi (26-50)
  {
    cumle: "Ich habe das Licht ausgemacht.",
    turkce: "Işığı kapattım.",
    level: "A2",
    partizip: "ausgemacht",
    notes: "ausmachen fiilinin Partizip 2 hali: ausgemacht - ayrılabilir fiil",
  },
  {
    cumle: "Sie ist um 8 Uhr aufgewacht.",
    turkce: "O (kadın) saat 8'de uyandı.",
    level: "A2",
    partizip: "aufgewacht",
    notes:
      "aufwachen fiilinin Partizip 2 hali: aufgewacht - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Hast du dein Zimmer aufgeräumt?",
    turkce: "Odanı topladın mı?",
    level: "A2",
    partizip: "aufgeräumt",
    notes: "aufräumen fiilinin Partizip 2 hali: aufgeräumt - ayrılabilir fiil",
  },
  {
    cumle: "Er hat den Bus verpasst.",
    turkce: "O (erkek) otobüsü kaçırdı.",
    level: "A2",
    partizip: "verpasst",
    notes:
      "verpassen fiilinin Partizip 2 hali: verpasst - ayrılamaz fiil, 'ge-' öneki almaz",
  },
  {
    cumle: "Wir sind mit dem Zug gefahren.",
    turkce: "Trenle yolculuk ettik.",
    level: "A2",
    partizip: "gefahren",
    notes: "fahren fiilinin Partizip 2 hali: gefahren - sein ile kullanılır",
  },
  {
    cumle: "Sie haben die Prüfung bestanden.",
    turkce: "Onlar sınavı geçtiler.",
    level: "A2",
    partizip: "bestanden",
    notes: "bestehen fiilinin Partizip 2 hali: bestanden - ayrılamaz fiil",
  },
  {
    cumle: "Ich habe meinen Schlüssel verloren.",
    turkce: "Anahtarımı kaybettim.",
    level: "A2",
    partizip: "verloren",
    notes: "verlieren fiilinin Partizip 2 hali: verloren",
  },
  {
    cumle: "Er hat seine Freundin angerufen.",
    turkce: "O (erkek) kız arkadaşını aradı.",
    level: "A2",
    partizip: "angerufen",
    notes: "anrufen fiilinin Partizip 2 hali: angerufen - ayrılabilir fiil",
  },
  {
    cumle: "Wir haben uns gut unterhalten.",
    turkce: "Biz iyi sohbet ettik.",
    level: "A2",
    partizip: "unterhalten",
    notes:
      "sich unterhalten fiilinin Partizip 2 hali: unterhalten - ayrılamaz fiil",
  },
  {
    cumle: "Sie hat viel zugenommen.",
    turkce: "O (kadın) çok kilo aldı.",
    level: "A2",
    partizip: "zugenommen",
    notes: "zunehmen fiilinin Partizip 2 hali: zugenommen - ayrılabilir fiil",
  },
  {
    cumle: "Ich habe im Restaurant reserviert.",
    turkce: "Restoranda rezervasyon yaptım.",
    level: "A2",
    partizip: "reserviert",
    notes:
      "reservieren fiilinin Partizip 2 hali: reserviert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Er ist umgezogen.",
    turkce: "O (erkek) taşındı.",
    level: "A2",
    partizip: "umgezogen",
    notes:
      "umziehen fiilinin Partizip 2 hali: umgezogen - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Wir haben das Geschenk eingepackt.",
    turkce: "Hediyeyi paketledik.",
    level: "A2",
    partizip: "eingepackt",
    notes: "einpacken fiilinin Partizip 2 hali: eingepackt - ayrılabilir fiil",
  },
  {
    cumle: "Sie hat ihren Freund besucht.",
    turkce: "O (kadın) arkadaşını ziyaret etti.",
    level: "A2",
    partizip: "besucht",
    notes: "besuchen fiilinin Partizip 2 hali: besucht - ayrılamaz fiil",
  },
  {
    cumle: "Hast du die Zeitung gelesen?",
    turkce: "Gazeteyi okudun mu?",
    level: "A2",
    partizip: "gelesen",
    notes: "lesen fiilinin Partizip 2 hali: gelesen",
  },
  {
    cumle: "Er hat die Tür zugemacht.",
    turkce: "O (erkek) kapıyı kapattı.",
    level: "A2",
    partizip: "zugemacht",
    notes: "zumachen fiilinin Partizip 2 hali: zugemacht - ayrılabilir fiil",
  },
  {
    cumle: "Ich bin gestern angekommen.",
    turkce: "Dün vardım/geldim.",
    level: "A2",
    partizip: "angekommen",
    notes:
      "ankommen fiilinin Partizip 2 hali: angekommen - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Sie haben das Problem erklärt.",
    turkce: "Onlar problemi açıkladılar.",
    level: "A2",
    partizip: "erklärt",
    notes: "erklären fiilinin Partizip 2 hali: erklärt - ayrılamaz fiil",
  },
  {
    cumle: "Wir haben im Restaurant gegessen.",
    turkce: "Restoranda yemek yedik.",
    level: "A2",
    partizip: "gegessen",
    notes: "essen fiilinin Partizip 2 hali: gegessen",
  },
  {
    cumle: "Ich habe mein Auto verkauft.",
    turkce: "Arabamı sattım.",
    level: "A2",
    partizip: "verkauft",
    notes: "verkaufen fiilinin Partizip 2 hali: verkauft - ayrılamaz fiil",
  },
  {
    cumle: "Er hat lange geschlafen.",
    turkce: "O (erkek) uzun süre uyudu.",
    level: "A2",
    partizip: "geschlafen",
    notes: "schlafen fiilinin Partizip 2 hali: geschlafen",
  },
  {
    cumle: "Sie sind nach Berlin geflogen.",
    turkce: "Onlar Berlin'e uçtular.",
    level: "A2",
    partizip: "geflogen",
    notes: "fliegen fiilinin Partizip 2 hali: geflogen - sein ile kullanılır",
  },
  {
    cumle: "Wir haben viel fotografiert.",
    turkce: "Çok fotoğraf çektik.",
    level: "A2",
    partizip: "fotografiert",
    notes:
      "fotografieren fiilinin Partizip 2 hali: fotografiert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Er hat das Lied komponiert.",
    turkce: "O (erkek) şarkıyı besteledi.",
    level: "A2",
    partizip: "komponiert",
    notes:
      "komponieren fiilinin Partizip 2 hali: komponiert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Ich habe den Termin abgesagt.",
    turkce: "Randevuyu iptal ettim.",
    level: "A2",
    partizip: "abgesagt",
    notes: "absagen fiilinin Partizip 2 hali: abgesagt - ayrılabilir fiil",
  },

  // B1 Seviyesi (51-75)
  {
    cumle: "Ich habe gestern schwimmen können.",
    turkce: "Dün yüzebildim.",
    level: "B1",
    partizip: "können",
    notes:
      "Modal fiil können ile kullanımı: Perfekt zamanda infinitif formda kalır",
  },
  {
    cumle: "Sie hat das Buch zu Ende gelesen.",
    turkce: "O (kadın) kitabı sonuna kadar okudu.",
    level: "B1",
    partizip: "gelesen",
    notes: "zu Ende lesen: deyimsel bir kullanım, 'sonuna kadar okumak'",
  },
  {
    cumle: "Er hat die Rechnung bezahlt bekommen.",
    turkce: "O (erkek) hesabı ödendi (başkası tarafından).",
    level: "B1",
    partizip: "bekommen",
    notes:
      "bekommen fiilinin Partizip 2 hali: bekommen - 'ge-' öneki almayan fiil",
  },
  {
    cumle: "Das gewaschene Auto steht in der Garage.",
    turkce: "Yıkanmış araba garajda duruyor.",
    level: "B1",
    partizip: "gewaschene",
    notes: "waschen fiilinin Partizip 2 hali sıfat olarak: gewaschene",
  },
  {
    cumle: "Mit den gefundenen Schlüsseln bin ich nach Hause gegangen.",
    turkce: "Bulunan anahtarlarla eve gittim.",
    level: "B1",
    partizip: "gefundenen",
    notes: "finden fiilinin Partizip 2 hali sıfat olarak: gefundenen",
  },
  {
    cumle: "Sie hat ihren Urlaub in Italien verbracht.",
    turkce: "O (kadın) tatilini İtalya'da geçirdi.",
    level: "B1",
    partizip: "verbracht",
    notes: "verbringen fiilinin Partizip 2 hali: verbracht - ayrılamaz fiil",
  },
  {
    cumle: "Wir haben uns über das bestandene Examen gefreut.",
    turkce: "Geçilen sınavdan dolayı sevindik.",
    level: "B1",
    partizip: "bestandene",
    notes: "bestehen fiilinin Partizip 2 hali sıfat olarak: bestandene",
  },
  {
    cumle: "Er hat sich das Bein gebrochen.",
    turkce: "O (erkek) bacağını kırdı.",
    level: "B1",
    partizip: "gebrochen",
    notes: "brechen fiilinin Partizip 2 hali: gebrochen",
  },
  {
    cumle: "Die von mir gekochte Suppe schmeckt gut.",
    turkce: "Benim pişirdiğim çorba lezzetli.",
    level: "B1",
    partizip: "gekochte",
    notes: "kochen fiilinin Partizip 2 hali sıfat olarak: gekochte",
  },
  {
    cumle: "Sie hat den ganzen Tag geschlafen gehabt.",
    turkce: "O (kadın) bütün gün uyumuştu.",
    level: "B1",
    partizip: "geschlafen",
    notes:
      "Plusquamperfekt: haben + Partizip 2 + gehabt - bir olay diğerinden önce olduğunu belirtir",
  },
  {
    cumle: "Er hat mir zu helfen versprochen.",
    turkce: "O (erkek) bana yardım etmeyi söz verdi.",
    level: "B1",
    partizip: "versprochen",
    notes:
      "versprechen fiilinin Partizip 2 hali: versprochen - ayrılamaz fiil ve zu infinitif yapısıyla kullanımı",
  },
  {
    cumle: "Wir haben lange warten müssen.",
    turkce: "Uzun süre beklemek zorunda kaldık.",
    level: "B1",
    partizip: "müssen",
    notes: "müssen modal fiilinin Partizip 2 ile kullanımı",
  },
  {
    cumle: "Der gestrige Regen hat die Straßen überschwemmt.",
    turkce: "Dünkü yağmur sokakları sel altında bıraktı.",
    level: "B1",
    partizip: "überschwemmt",
    notes:
      "überschwemmen fiilinin Partizip 2 hali: überschwemmt - ayrılamaz fiil",
  },
  {
    cumle: "Sie ist früh aufgestanden und hat gefrühstückt.",
    turkce: "O (kadın) erken kalktı ve kahvaltı yaptı.",
    level: "B1",
    partizip: "aufgestanden, gefrühstückt",
    notes: "aufstehen ve frühstücken fiillerinin Partizip 2 halleri",
  },
  {
    cumle: "Die gestellte Frage war schwer zu beantworten.",
    turkce: "Sorulan soru yanıtlaması zordu.",
    level: "B1",
    partizip: "gestellte",
    notes: "stellen fiilinin Partizip 2 hali sıfat olarak: gestellte",
  },
  {
    cumle: "Er hat den ganzen Film gedreht.",
    turkce: "O (erkek) tüm filmi çekti.",
    level: "B1",
    partizip: "gedreht",
    notes: "drehen fiilinin Partizip 2 hali: gedreht",
  },
  {
    cumle: "Wir sind durch den Park gelaufen.",
    turkce: "Parktan yürüdük.",
    level: "B1",
    partizip: "gelaufen",
    notes: "laufen fiilinin Partizip 2 hali: gelaufen - sein ile kullanılır",
  },
  {
    cumle: "Ich habe an der Universität studiert.",
    turkce: "Üniversitede okudum.",
    level: "B1",
    partizip: "studiert",
    notes:
      "studieren fiilinin Partizip 2 hali: studiert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Sie hat mir den Weg gezeigt.",
    turkce: "O (kadın) bana yolu gösterdi.",
    level: "B1",
    partizip: "gezeigt",
    notes: "zeigen fiilinin Partizip 2 hali: gezeigt",
  },
  {
    cumle: "Der beschädigte Computer funktioniert nicht mehr.",
    turkce: "Hasarlı bilgisayar artık çalışmıyor.",
    level: "B1",
    partizip: "beschädigte",
    notes: "beschädigen fiilinin Partizip 2 hali sıfat olarak: beschädigte",
  },
  {
    cumle: "Er hat seiner Mutter ein Geschenk mitgebracht.",
    turkce: "O (erkek) annesine bir hediye getirdi.",
    level: "B1",
    partizip: "mitgebracht",
    notes:
      "mitbringen fiilinin Partizip 2 hali: mitgebracht - ayrılabilir fiil",
  },
  {
    cumle: "Wir haben die Nachricht übermittelt.",
    turkce: "Haberi ilettik.",
    level: "B1",
    partizip: "übermittelt",
    notes: "übermitteln fiilinin Partizip 2 hali: übermittelt - ayrılamaz fiil",
  },
  {
    cumle: "Sie hat das Problem verstanden.",
    turkce: "O (kadın) problemi anladı.",
    level: "B1",
    partizip: "verstanden",
    notes: "verstehen fiilinin Partizip 2 hali: verstanden - ayrılamaz fiil",
  },
  {
    cumle: "Der entwickelte Plan war gut.",
    turkce: "Geliştirilen plan iyiydi.",
    level: "B1",
    partizip: "entwickelte",
    notes: "entwickeln fiilinin Partizip 2 hali sıfat olarak: entwickelte",
  },
  {
    cumle: "Ich habe mein Passwort vergessen.",
    turkce: "Şifremi unuttum.",
    level: "B1",
    partizip: "vergessen",
    notes: "vergessen fiilinin Partizip 2 hali: vergessen - ayrılamaz fiil",
  },

  // B2 Seviyesi (76-100)
  {
    cumle: "Das Haus wird renoviert.",
    turkce: "Ev yenileniyor.",
    level: "B2",
    partizip: "renoviert",
    notes: "Vorgangspassiv - werden ile pasif yapı",
  },
  {
    cumle: "Der Film wurde gestern Abend gezeigt.",
    turkce: "Film dün akşam gösterildi.",
    level: "B2",
    partizip: "gezeigt",
    notes: "Vorgangspassiv, Präteritum: wurde + Partizip 2",
  },
  {
    cumle: "Die Tür ist geschlossen worden.",
    turkce: "Kapı kapatılmış.",
    level: "B2",
    partizip: "geschlossen",
    notes: "Vorgangspassiv, Perfekt: ist + Partizip 2 + worden",
  },
  {
    cumle: "Das im Ofen gebackene Brot riecht gut.",
    turkce: "Fırında pişirilen ekmek güzel kokuyor.",
    level: "B2",
    partizip: "gebackene",
    notes: "backen fiilinin genişletilmiş Partizip 2 sıfat yapısı",
  },
  {
    cumle: "In München angekommen, suchte er ein Hotel.",
    turkce: "Münih'e vardığında, bir otel aradı.",
    level: "B2",
    partizip: "angekommen",
    notes: "Partizipialsatz - yan cümle yerine kısaltılmış cümle yapısı",
  },
  {
    cumle: "Von allen bewundert, stand sie auf der Bühne.",
    turkce: "Herkes tarafından hayranlık duyularak, sahnede duruyordu.",
    level: "B2",
    partizip: "bewundert",
    notes: "Partizipialsatz - pasif anlamlı",
  },
  {
    cumle: "Der Dieb ist von der Polizei verhaftet worden.",
    turkce: "Hırsız polis tarafından tutuklandı.",
    level: "B2",
    partizip: "verhaftet",
    notes: "Vorgangspassiv, von + Dativ ile fail belirtimi",
  },
  {
    cumle: "Die im Kühlschrank aufbewahrten Lebensmittel sind frisch.",
    turkce: "Buzdolabında saklanan yiyecekler taze.",
    level: "B2",
    partizip: "aufbewahrten",
    notes: "aufbewahren fiilinin genişletilmiş Partizip 2 sıfat yapısı",
  },
  {
    cumle: "Das gestohlene Auto wurde gefunden.",
    turkce: "Çalınan araba bulundu.",
    level: "B2",
    partizip: "gestohlene",
    notes:
      "stehlen fiilinin Partizip 2 sıfat hali: gestohlene + Vorgangspassiv",
  },
  {
    cumle: "Mit geschlossenen Augen hörte er der Musik zu.",
    turkce: "Kapalı gözlerle müziği dinledi.",
    level: "B2",
    partizip: "geschlossenen",
    notes: "schließen fiilinin Partizip 2 sıfat hali: geschlossenen",
  },
  {
    cumle: "Das Problem konnte gelöst werden.",
    turkce: "Problem çözülebildi.",
    level: "B2",
    partizip: "gelöst",
    notes: "Vorgangspassiv ile modal fiil kombinasyonu",
  },
  {
    cumle: "Die gesammelten Daten wurden analysiert.",
    turkce: "Toplanan veriler analiz edildi.",
    level: "B2",
    partizip: "gesammelten",
    notes:
      "sammeln fiilinin Partizip 2 sıfat hali: gesammelten + Vorgangspassiv",
  },
  {
    cumle: "Der vor zwei Jahren geschriebene Brief wurde endlich gefunden.",
    turkce: "İki yıl önce yazılan mektup sonunda bulundu.",
    level: "B2",
    partizip: "geschriebene",
    notes:
      "schreiben fiilinin genişletilmiş Partizip 2 sıfat yapısı + Vorgangspassiv",
  },
  {
    cumle: "Die vom Chef getroffene Entscheidung war richtig.",
    turkce: "Şef tarafından alınan karar doğruydu.",
    level: "B2",
    partizip: "getroffene",
    notes: "treffen fiilinin Partizip 2 sıfat hali: getroffene",
  },
  {
    cumle: "Das ist eine weitverbreitete Meinung.",
    turkce: "Bu, yaygın bir görüştür.",
    level: "B2",
    partizip: "verbreitete",
    notes:
      "verbreiten fiilinin Partizip 2 sıfat hali: verbreitete, weit- ile birleşimi",
  },
  {
    cumle: "In der Stadt angekommen, regnete es stark.",
    turkce: "Şehre vardığımızda, şiddetli yağmur yağıyordu.",
    level: "B2",
    partizip: "angekommen",
    notes: "Partizipialsatz - zaman ilişkisi belirten kısaltılmış cümle",
  },
  {
    cumle: "Die neu eingerichtete Wohnung gefällt mir.",
    turkce: "Yeni döşenmiş daire hoşuma gidiyor.",
    level: "B2",
    partizip: "eingerichtete",
    notes: "einrichten fiilinin Partizip 2 sıfat hali: eingerichtete",
  },
  {
    cumle: "Der lang erwartete Brief ist endlich gekommen.",
    turkce: "Uzun zamandır beklenen mektup sonunda geldi.",
    level: "B2",
    partizip: "erwartete",
    notes: "erwarten fiilinin Partizip 2 sıfat hali:期待ete",
  },
  {
    cumle: "Das Konzert musste verschoben werden.",
    turkce: "Konser ertelenmek zorunda kaldı.",
    level: "B2",
    partizip: "verschoben",
    notes: "Vorgangspassiv ile müssen modal fiili",
  },
  {
    cumle: "Die Arbeit ist getan worden.",
    turkce: "İş yapılmış.",
    level: "B2",
    partizip: "getan",
    notes: "Vorgangspassiv, Perfekt: ist + Partizip 2 + worden",
  },
  {
    cumle: "Das gut versteckte Geschenk wurde nicht gefunden.",
    turkce: "İyi saklanmış hediye bulunmadı.",
    level: "B2",
    partizip: "versteckte",
    notes:
      "verstecken fiilinin Partizip 2 sıfat hali: versteckte + Vorgangspassiv",
  },
  {
    cumle: "Die Tür wird geöffnet sein.",
    turkce: "Kapı açılmış olacak.",
    level: "B2",
    partizip: "geöffnet",
    notes: "Zustandspassiv + Futur I: wird + Partizip 2 + sein",
  },
  {
    cumle: "Der Aufsatz ist überarbeitet worden.",
    turkce: "Makale revize edildi.",
    level: "B2",
    partizip: "überarbeitet",
    notes:
      "überarbeiten fiilinin Partizip 2 hali: überarbeitet + Vorgangspassiv Perfekt",
  },
  {
    cumle: "Einmal verloren, ist das Vertrauen schwer wiederzugewinnen.",
    turkce: "Bir kez kaybedildiğinde, güven yeniden kazanılması zordur.",
    level: "B2",
    partizip: "verloren",
    notes: "Partizipialsatz - koşul belirten",
  },
  {
    cumle: "Die Aufgabe wurde erfolgreich abgeschlossen.",
    turkce: "Görev başarıyla tamamlandı.",
    level: "B2",
    partizip: "abgeschlossen",
    notes:
      "abschließen fiilinin Partizip 2 hali: abgeschlossen + Vorgangspassiv",
  },
];

const Konusmak3 = () => {
  // Son index'i saklamak için state
  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const saved = localStorage.getItem("currentIndex");
      const index = parseInt(saved, 10);
      // Validate index: must be a number and within bounds
      if (isNaN(index) || index < 0 || index >= data.length) {
        return 0;
      }
      return index;
    } catch (e) {
      console.error("Failed to parse currentIndex from localStorage", e);
      return 0;
    }
  });

  // Almanca göster/gizle state'i
  const [showAlmanca, setShowAlmanca] = useState(false);

  // Notları göster/gizle state'i
  const [showNotes, setShowNotes] = useState(false);

  // Favorileri saklamak için state
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      const parsed = saved ? JSON.parse(saved) : [];
      // Validate favorites: ensure they exist in data
      return parsed.filter((fav) =>
        data.some(
          (item) => item.cumle === fav.cumle && item.turkce === fav.turkce
        )
      );
    } catch (e) {
      console.error("Failed to parse favorites from localStorage", e);
      return [];
    }
  });

  // Favoriler görünümünü aç/kapa
  const [showFavorites, setShowFavorites] = useState(false);

  // currentIndex değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex.toString());
  }, [currentIndex]);

  // favorites değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Klavye navigasyonu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Enter") setShowAlmanca((prev) => !prev);
      if (e.key === "n") setShowNotes((prev) => !prev); // 'n' tuşu notları toggles
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
    setShowNotes(false); // Yeni cümleye geçince notlar kapanır
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
    setShowNotes(false); // Yeni cümleye geçince notlar kapanır
  };

  // Favori ekleme/kaldırma
  const toggleFavorite = () => {
    const currentItem = data[currentIndex];
    if (!currentItem) return; // Safety check
    if (favorites.some((fav) => fav.cumle === currentItem.cumle)) {
      // Favorilerde varsa kaldır
      setFavorites(favorites.filter((fav) => fav.cumle !== currentItem.cumle));
    } else {
      // Favorilerde yoksa ekle
      setFavorites([...favorites, currentItem]);
    }
  };

  // Eğer data boşsa veya currentIndex geçersizse hata mesajı göster
  if (!data.length || !data[currentIndex]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center text-gray-600">
          No sentences available or invalid index.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Progress indicator */}
        <p className="text-sm text-gray-500 mb-4 text-center">
          Card {currentIndex + 1} of {data.length} (Level:{" "}
          {data[currentIndex].level})
        </p>

        {/* Favoriler butonu */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            aria-label={showFavorites ? "Return to cards" : "Show favorites"}
          >
            {showFavorites ? "Kartlara Dön" : "Favorileri Göster"}
          </button>
        </div>

        {/* Favoriler görünümü */}
        {showFavorites ? (
          <div>
            <h2 className="text-lg font-semibold mb-4">Favoriler</h2>
            {favorites.length === 0 ? (
              <p className="text-gray-600">Henüz favori eklemediniz.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {favorites.map((fav, index) => (
                    <li
                      key={index}
                      className="border-b pb-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        const favIndex = data.findIndex(
                          (item) =>
                            item.cumle === fav.cumle &&
                            item.turkce === fav.turkce
                        );
                        if (favIndex !== -1) {
                          setCurrentIndex(favIndex);
                          setShowFavorites(false);
                        }
                      }}
                    >
                      <p className="font-semibold">{fav.turkce}</p>
                      <p className="text-gray-600">{fav.cumle}</p>
                      <p className="text-sm text-gray-500">
                        Level: {fav.level}
                      </p>
                      <p className="text-sm text-gray-500">
                        Partizip II: {fav.partizip}
                      </p>
                      <p className="text-sm text-gray-500">{fav.notes}</p>
                    </li>
                  ))}
                </ul>
                {/* Clear Favorites button */}
                <button
                  onClick={() => setFavorites([])}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-4"
                  aria-label="Clear all favorites"
                >
                  Tüm Favorileri Temizle
                </button>
              </>
            )}
          </div>
        ) : (
          <>
            {/* Flashcard görünümü */}
            <div className="text-center mb-4">
              <p className="text-lg font-semibold text-gray-800">
                {data[currentIndex].turkce}
              </p>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => setShowAlmanca(!showAlmanca)}
                  className="text-blue-500 hover:underline focus:outline-none"
                  aria-label={
                    showAlmanca
                      ? "Hide German translation"
                      : "Show German translation"
                  }
                >
                  {showAlmanca ? "Almanca’yı Gizle" : "Almanca’yı Göster"}
                </button>
                {showAlmanca && (
                  <p className="mt-2 text-gray-600">
                    {data[currentIndex].cumle}
                  </p>
                )}
                <br />
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="text-blue-500 hover:underline focus:outline-none"
                  aria-label={showNotes ? "Hide notes" : "Show notes"}
                >
                  {showNotes ? "Notları Gizle" : "Notları Göster"}
                </button>
                {showNotes && (
                  <div className="mt-2 text-gray-600">
                    <p>Partizip II: {data[currentIndex].partizip}</p>
                    <p>{data[currentIndex].notes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Favori butonu */}
            <div className="text-center mb-4">
              <button
                onClick={toggleFavorite}
                className={`px-4 py-2 rounded transition ${
                  favorites.some(
                    (fav) => fav.cumle === data[currentIndex].cumle
                  )
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-yellow-500 text-white hover:bg-yellow-600"
                }`}
                aria-label={
                  favorites.some(
                    (fav) => fav.cumle === data[currentIndex].cumle
                  )
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                {favorites.some((fav) => fav.cumle === data[currentIndex].cumle)
                  ? "Favorilerden Çıkar"
                  : "Favorilere Ekle"}
              </button>
            </div>

            {/* Geri/İleri butonları */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                aria-label="Previous sentence"
              >
                Geri
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                aria-label="Next sentence"
              >
                İleri
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Konusmak3;
