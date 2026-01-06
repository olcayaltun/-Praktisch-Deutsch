import React, { useState, useEffect } from "react";

const textData = [
  {
    title: "1. Verbposition in einfachen Sätzen",
    sentences: [
      {
        text: "Martin schloss die Augen.",
        translation: "Martin gözlerini kapattı.",
        explanation:
          "Basit cümlelerde çekimli fiil ikinci konumdadır. Burada 'schloss' (kapattı), özne 'Martin'den sonra gelir.",
      },
      {
        text: "Er atmete tief ein und aus.",
        translation: "Derin bir nefes aldı ve verdi.",
        explanation:
          "Çekimli fiil 'atmete' (nefes aldı) ikinci konumdadır. Koordinatif bağlaç 'und' ile bağlı ikinci fiil de aynı kuralı takip eder.",
      },
      {
        text: "Das Vorstellungsgespräch begann in nur zwanzig Minuten.",
        translation: "Mülakat yirmi dakika içinde başlayacaktı.",
        explanation:
          "Fiil 'begann' (başlayacaktı) ikinci konumdadır. Zaman zarfı 'in nur zwanzig Minuten' cümlenin sonunda yer alır.",
      },
      {
        text: "Seine Hände zitterten leicht.",
        translation: "Elleri hafifçe titriyordu.",
        explanation:
          "Fiil 'zitterten' (titriyordu) ikinci konumdadır. Zarf 'leicht' fiilden sonra gelir ve eylemi nitelendirir.",
      },
      {
        text: "Der Kandidat bereitete sich mental auf die schwierigen Fragen vor.",
        translation: "Aday, zor sorulara zihinsel olarak hazırlandı.",
        explanation:
          "Fiil 'bereitete' (hazırlandı) ikinci konumdadır. 'Sich vor' fiilden sonra gelir ve hazırlık eylemini tamamlar.",
      },
      {
        text: "Auf dem Tisch lag seine perfekt gestaltete Bewerbungsmappe.",
        translation:
          "Masanın üzerinde mükemmel hazırlanmış başvuru dosyası duruyordu.",
        explanation:
          "Fiil 'lag' (duruyordu) ikinci konumdadır. Mekan zarfı 'auf dem Tisch' cümlenin başında, nesne ise fiilden sonra yer alır.",
      },
      {
        text: "Neben ihm saßen drei weitere Bewerber.",
        translation: "Onun yanında üç başka aday oturuyordu.",
        explanation:
          "Fiil 'saßen' (oturuyordu) ikinci konumdadır. Mekan zarfı 'neben ihm' fiilden önce gelir.",
      },
      {
        text: "Die Sekretärin rief plötzlich seinen Namen.",
        translation: "Sekreter aniden onun adını çağırdı.",
        explanation:
          "Fiil 'rief' (çağırdı) ikinci konumdadır. Zarf 'plötzlich' fiilden sonra gelir ve eylemin nasıl gerçekleştiğini belirtir.",
      },
      {
        text: "Martin stand sofort auf.",
        translation: "Martin hemen ayağa kalktı.",
        explanation:
          "Fiil 'stand' (ayağa kalktı) ikinci konumdadır. Zarf 'sofort' fiilden sonra gelir.",
      },
      {
        text: "Er folgte ihr durch einen langen Korridor.",
        translation: "Onu uzun bir koridordan takip etti.",
        explanation:
          "Fiil 'folgte' (takip etti) ikinci konumdadır. Mekan zarfı 'durch einen langen Korridor' fiilden sonra gelir.",
      },
      {
        text: "Die Tür zum Besprechungsraum öffnete sich langsam.",
        translation: "Toplantı odasının kapısı yavaşça açıldı.",
        explanation:
          "Fiil 'öffnete' (açıldı) ikinci konumdadır. Zarf 'langsam' fiilden sonra gelir ve eylemin hızını belirtir.",
      },
    ],
  },
  {
    title: "2. Verbposition in Satzverbindungen",
    sentences: [
      {
        text: "Als Martin den Raum betrat, lächelte ihm eine Frau in einem eleganten Anzug freundlich zu.",
        translation:
          "Martin odaya girdiğinde, şık bir takım elbiseli bir kadın ona dostça gülümsedi.",
        explanation:
          "Bağımlı yan cümlede fiil ('betrat') cümlenin sonunda yer alır. Ana cümlede çekimli fiil 'lächelte' (gülümsedi) ikinci konumdadır.",
      },
      {
        text: "Er wusste sofort, dass sie die Personalchefin sein musste, weil ihre Ausstrahlung Autorität vermittelte.",
        translation:
          "Onun personel müdürü olması gerektiğini hemen anladı, çünkü duruşu otorite yayıyordu.",
        explanation:
          "Ana cümlede fiil 'wusste' (anladı) ikinci konumdadır. 'Dass' ile başlayan yan cümlede fiil 'sein musste' sonda, 'weil' ile başlayan yan cümlede fiil 'vermittelte' sonda yer alır.",
      },
      {
        text: "Obwohl er gut vorbereitet war, spürte er, wie sein Herz schneller schlug.",
        translation:
          "İyi hazırlanmış olmasına rağmen, kalbinin daha hızlı attığını hissetti.",
        explanation:
          "'Obwohl' ile başlayan yan cümlede fiil 'war' sonda yer alır. Ana cümlede fiil 'spürte' (hissetti) ikinci konumdadır.",
      },
      {
        text: "Er setzte sich auf den angebotenen Stuhl, nachdem die Personalchefin ihm dies mit einer Handbewegung signalisiert hatte.",
        translation:
          "Personel müdürü ona el hareketiyle işaret ettikten sonra, sunulan sandalyeye oturdu.",
        explanation:
          "Ana cümlede fiil 'setzte' (oturdu) ikinci konumdadır. 'Nachdem' ile başlayan yan cümlede fiil 'hatte' sonda yer alır.",
      },
      {
        text: '"Wir haben Ihren Lebenslauf mit großem Interesse gelesen", begann sie das Gespräch, während sie seine Unterlagen durchblätterte.',
        translation:
          '"Özgeçmişinizi büyük bir ilgiyle okuduk," diye konuşmaya başladı, belgelerini karıştırırken.',
        explanation:
          "Ana cümlede fiil 'begann' (başladı) ikinci konumdadır. 'Während' ile başlayan yan cümlede fiil 'durchblätterte' sonda yer alır.",
      },
      {
        text: "Martin holte tief Luft und antwortete ruhig, sodass sein Nervenkitzel nicht zu bemerken war.",
        translation:
          "Martin derin bir nefes aldı ve sakin bir şekilde cevap verdi, böylece heyecanı fark edilmedi.",
        explanation:
          "Ana cümlede fiil 'antwortete' (cevap verdi) ikinci konumdadır. 'Sodass' ile başlayan yan cümlede fiil 'war' sonda yer alır.",
      },
      {
        text: "Da er sich seit Wochen auf diesen Moment vorbereitet hatte, konnte er ihre Fragen souverän beantworten.",
        translation:
          "Haftalardır bu ana hazırlandığı için, sorularını kendine güvenerek cevaplayabildi.",
        explanation:
          "'Da' ile başlayan yan cümlede fiil 'hatte' sonda yer alır. Ana cümlede fiil 'konnte' (cevaplayabildi) ikinci konumdadır.",
      },
    ],
  },
  {
    title: "3. Position von Datum und Ortsangabe zum Subjekt",
    sentences: [
      {
        text: "Am nächsten Morgen erhielt Martin in seiner kleinen Wohnung den ersehnten Anruf.",
        translation:
          "Ertesi sabah Martin küçük dairesinde beklenen telefon çağrısını aldı.",
        explanation:
          "Zaman zarfı 'am nächsten Morgen' cümlenin başında yer alır. Çekimli fiil 'erhielt' (aldı) ikinci konumdadır. Mekan zarfı 'in seiner kleinen Wohnung' fiilden sonra gelir.",
      },
      {
        text: "Die Personalchefin teilte ihm gestern Abend nach langer Überlegung die frohe Nachricht mit.",
        translation:
          "Personel müdürü dün akşam uzun bir düşünce sürecinden sonra ona müjdeli haberi verdi.",
        explanation:
          "Zaman zarfı 'gestern Abend' ve 'nach langer Überlegung' fiilden önce veya sonra yer alabilir. Fiil 'teilte' (verdi) ikinci konumdadır.",
      },
      {
        text: "In Berlin würde er ab dem ersten August seine neue Stelle antreten.",
        translation:
          "Berlin’de 1 Ağustos’tan itibaren yeni görevine başlayacaktı.",
        explanation:
          "Mekan zarfı 'in Berlin' cümlenin başında, zaman zarfı 'ab dem ersten August' fiilden sonra gelir. Fiil 'würde' ikinci konumdadır.",
      },
      {
        text: "Martin feierte am Wochenende mit seinen Freunden im Lieblingsrestaurant seinen Erfolg.",
        translation:
          "Martin hafta sonunda arkadaşlarıyla favori restoranında başarısını kutladı.",
        explanation:
          "Zaman zarfı 'am Wochenende' cümlenin başında, mekan zarfı 'im Lieblingsrestaurant' fiilden sonra gelir. Fiil 'feierte' (kutladı) ikinci konumdadır.",
      },
      {
        text: "Während der kommenden Wochen musste er in seiner Heimatstadt alles für den Umzug vorbereiten.",
        translation:
          "Önümüzdeki haftalarda memleketinde taşınma için her şeyi hazırlamak zorundaydı.",
        explanation:
          "Zaman zarfı 'während der kommenden Wochen' cümlenin başında, mekan zarfı 'in seiner Heimatstadt' fiilden sonra gelir. Fiil 'musste' ikinci konumdadır.",
      },
      {
        text: "Vor seiner Abreise besuchte er noch einmal in Ruhe seine Eltern.",
        translation:
          "Ayrılmadan önce bir kez daha sakin bir şekilde ailesini ziyaret etti.",
        explanation:
          "Zaman zarfı 'vor seiner Abreise' cümlenin başında, mekan zarfı 'in Ruhe' fiilden sonra gelir. Fiil 'besuchte' (ziyaret etti) ikinci konumdadır.",
      },
      {
        text: "Nach einer sechsstündigen Zugfahrt kam er schließlich in der deutschen Hauptstadt an.",
        translation:
          "Altı saatlik bir tren yolculuğundan sonra nihayet Alman başkentine ulaştı.",
        explanation:
          "Zaman zarfı 'nach einer sechsstündigen Zugfahrt' cümlenin başında, mekan zarfı 'in der deutschen Hauptstadt' fiilden sonra gelir. Fiil 'kam' (ulaştı) ikinci konumdadır.",
      },
    ],
  },
  {
    title: "4. Position der Angaben im Satz",
    sentences: [
      {
        text: "Martin hat glücklicherweise schnell eine schöne Wohnung in der Nähe seines neuen Arbeitsplatzes gefunden.",
        translation:
          "Martin şans eseri yeni iş yerinin yakınında güzel bir daire buldu.",
        explanation:
          "Fiil 'hat gefunden' ikinci konumdadır. Zarf 'glücklicherweise' cümlenin başında, mekan zarfı 'in der Nähe seines neuen Arbeitsplatzes' fiilden sonra gelir.",
      },
      {
        text: "Er hat sich trotz anfänglicher Zweifel gut in der Großstadt eingelebt.",
        translation:
          "Başlangıçtaki şüphelerine rağmen büyük şehirde iyi bir şekilde yerleşti.",
        explanation:
          "Fiil 'hat eingelebt' ikinci konumdadır. Zarf 'trotz anfänglicher Zweifel' cümlenin başında gelir.",
      },
      {
        text: "Die Kollegen haben ihn von Anfang an herzlich in ihrem Team aufgenommen.",
        translation:
          "Meslektaşları onu baştan beri içtenlikle ekiplerine kabul ettiler.",
        explanation:
          "Fiil 'haben aufgenommen' ikinci konumdadır. Zaman zarfı 'von Anfang an' fiilden sonra gelir.",
      },
      {
        text: "Martin arbeitet jetzt seit einem Monat mit großer Freude in der Marketingabteilung des Unternehmens.",
        translation:
          "Martin şimdi bir aydır büyük bir keyifle şirketin pazarlama bölümünde çalışıyor.",
        explanation:
          "Fiil 'arbeitet' ikinci konumdadır. Zaman zarfı 'seit einem Monat' ve mekan zarfı 'in der Marketingabteilung' fiilden sonra gelir.",
      },
      {
        text: "Er hat bereits mehrere kreative Projekte mit seinen Teamkollegen erfolgreich abgeschlossen.",
        translation:
          "Zaten ekip arkadaşlarıyla birkaç yaratıcı projeyi başarıyla tamamladı.",
        explanation:
          "Fiil 'hat abgeschlossen' ikinci konumdadır. Zarf 'bereits' fiilden önce gelir.",
      },
      {
        text: "Sein Chef lobte ihn gestern wegen seiner innovativen Ideen in der Teambesprechung.",
        translation:
          "Patronu dün yenilikçi fikirleri nedeniyle ekip toplantısında onu övdü.",
        explanation:
          "Fiil 'lobte' (övdü) ikinci konumdadır. Zaman zarfı 'gestern' ve neden zarfı 'wegen seiner innovativen Ideen' fiilden sonra gelir.",
      },
      {
        text: "Martin kann sich momentan kein besseres Arbeitsleben vorstellen.",
        translation: "Martin şu anda daha iyi bir iş hayatı hayal edemez.",
        explanation:
          "Fiil 'kann' ikinci konumdadır. Zaman zarfı 'momentan' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "5. Informationen direkt zum Verb",
    sentences: [
      {
        text: "In seinem neuen Alltag lernt Martin täglich Deutsch.",
        translation: "Yeni günlük yaşamında Martin her gün Almanca öğreniyor.",
        explanation:
          "Fiil 'lernt' (öğreniyor) ikinci konumdadır. Zaman zarfı 'täglich' fiilden sonra gelir ve eylemin sıklığını belirtir.",
      },
      {
        text: "Er spricht mittlerweile fließend mit seinen Kollegen.",
        translation: "Artık meslektaşlarıyla akıcı bir şekilde konuşuyor.",
        explanation:
          "Fiil 'spricht' (konuşuyor) ikinci konumdadır. Zarf 'mittlerweile' fiilden önce gelir.",
      },
      {
        text: "Seine Freundin Sarah kommt nächste Woche zu Besuch.",
        translation: "Kız arkadaşı Sarah önümüzdeki hafta ziyarete gelecek.",
        explanation:
          "Fiil 'kommt' (gelecek) ikinci konumdadır. Zaman zarfı 'nächste Woche' fiilden sonra gelir.",
      },
      {
        text: "Sie bleibt wahrscheinlich für zwei Wochen in Berlin.",
        translation: "Muhtemelen iki hafta Berlin’de kalacak.",
        explanation:
          "Fiil 'bleibt' (kalacak) ikinci konumdadır. Zaman zarfı 'für zwei Wochen' fiilden sonra gelir.",
      },
      {
        text: "Martin zeigt ihr gerne seine neue Lieblingsorte.",
        translation:
          "Martin ona yeni favori yerlerini memnuniyetle gösterecek.",
        explanation:
          "Fiil 'zeigt' (gösterecek) ikinci konumdadır. Zarf 'gerne' fiilden sonra gelir.",
      },
      {
        text: "Die beiden gehen bestimmt oft essen.",
        translation: "İkisi kesinlikle sık sık yemeğe çıkacak.",
        explanation:
          "Fiil 'gehen' (çıkacak) ikinci konumdadır. Zarf 'bestimmt' fiilden sonra gelir.",
      },
      {
        text: "Sie werden gemeinsam das Brandenburger Tor besichtigen.",
        translation: "Birlikte Brandenburg Kapısı’nı ziyaret edecekler.",
        explanation:
          "Fiil 'werden' ikinci konumdadır. Nesne 'das Brandenburger Tor' fiilden sonra gelir.",
      },
      {
        text: "Martin hofft insgeheim auf einen Heiratsantrag.",
        translation: "Martin gizlice bir evlenme teklifi umuyor.",
        explanation:
          "Fiil 'hofft' (umuyor) ikinci konumdadır. Zarf 'insgeheim' fiilden sonra gelir.",
      },
      {
        text: "Er wartet schon lange auf den richtigen Moment.",
        translation: "Doğru anı uzun süredir bekliyor.",
        explanation:
          "Fiil 'wartet' (bekliyor) ikinci konumdadır. Zaman zarfı 'schon lange' fiilden sonra gelir.",
      },
      {
        text: "Sarah reist leider bald wieder ab.",
        translation: "Sarah ne yazık ki yakında tekrar ayrılacak.",
        explanation:
          "Fiil 'reist' (ayrılacak) ikinci konumdadır. Zarf 'leider' fiilden sonra gelir.",
      },
      {
        text: "Martin begleitet sie selbstverständlich zum Flughafen.",
        translation: "Martin onu tabii ki havalimanına götürecek.",
        explanation:
          "Fiil 'begleitet' (götürecek) ikinci konumdadır. Zarf 'selbstverständlich' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "6. Position von *nicht*",
    sentences: [
      {
        text: "Nach Sarahs Abreise war Martin nicht mehr so motiviert wie zuvor.",
        translation:
          "Sarah’nın ayrılışından sonra Martin eskisi kadar motive değildi.",
        explanation:
          "'Nicht', fiilden önce yer alır ve fiili olumsuz yapar. Burada 'war' fiilini olumsuzlaştırır.",
      },
      {
        text: "Er konnte sich nicht auf die Arbeit konzentrieren.",
        translation: "İşe konsantre olamadı.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'konzentrieren' fiilini olumsuz yapar.",
      },
      {
        text: "Seine Vorgesetzte bemerkte seine Unaufmerksamkeit nicht sofort.",
        translation: "Amiri onun dikkatsizliğini hemen fark etmedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'bemerkte' fiilini olumsuz yapar.",
      },
      {
        text: "Martin wollte nicht darüber sprechen, was ihn bedrückte.",
        translation: "Martin onu rahatsız eden şey hakkında konuşmak istemedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'wollte' fiilini olumsuz yapar.",
      },
      {
        text: "Er ging nicht mehr regelmäßig ins Fitnessstudio.",
        translation: "Artık düzenli olarak spor salonuna gitmiyordu.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'ging' fiilini olumsuz yapar.",
      },
      {
        text: "Die Kollegen luden ihn zum Abendessen ein, aber er kam nicht mit.",
        translation:
          "Meslektaşları onu akşam yemeğine davet etti, ama o gelmedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'kam' fiilini olumsuz yapar.",
      },
      {
        text: "Es war nicht leicht für ihn, die Trennung zu verarbeiten.",
        translation: "Ayrılığı kabullenmek onun için kolay değildi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'war' fiilini olumsuz yapar.",
      },
      {
        text: "Sarah hatte ihm nicht die Wahrheit gesagt.",
        translation: "Sarah ona gerçeği söylememişti.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'hatte gesagt' fiilini olumsuz yapar.",
      },
      {
        text: "Sie kam nicht zu ihm zurück, wie versprochen.",
        translation: "Söz verdiği gibi ona geri dönmedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'kam' fiilini olumsuz yapar.",
      },
      {
        text: "Martin wollte nicht länger traurig sein.",
        translation: "Martin artık üzgün olmak istemedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'wollte' fiilini olumsuz yapar.",
      },
      {
        text: "Er entschied sich, nicht aufzugeben.",
        translation: "Vazgeçmemeye karar verdi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'aufzugeben' fiilini olumsuz yapar.",
      },
    ],
  },
  {
    title: "7. Position von *auch* und Fokuspartikeln",
    sentences: [
      {
        text: "Martin wollte auch sein soziales Leben wieder aktivieren.",
        translation: "Martin sosyal hayatını da yeniden canlandırmak istedi.",
        explanation:
          "'Auch', fiilden önce gelir ve ek bir unsuru vurgular. Burada 'sein soziales Leben' vurgulanır.",
      },
      {
        text: "Besonders seine alten Hobbys nahm er wieder auf.",
        translation: "Özellikle eski hobilerini yeniden aldı.",
        explanation:
          "'Besonders', fiilden önce gelir ve 'seine alten Hobbys' üzerinde vurgu yapar.",
      },
      {
        text: "Sogar ein neues Hobby entdeckte er für sich: das Fotografieren.",
        translation: "Hatta yeni bir hobi keşfetti: fotoğrafçılık.",
        explanation:
          "'Sogar', fiilden önce gelir ve beklenmedik bir unsuru ('ein neues Hobby') vurgular.",
      },
      {
        text: "Martin hatte sich schon immer für Architektur interessiert und fotografierte nun auch die beeindruckenden Gebäude Berlins.",
        translation:
          "Martin her zaman mimariye ilgi duymuştu ve şimdi Berlin’in etkileyici binalarını da fotoğraflıyordu.",
        explanation:
          "'Auch', fiilden sonra gelir ve 'die beeindruckenden Gebäude Berlins' üzerinde ek bir vurgu yapar.",
      },
      {
        text: "Seine Kollegen waren ebenfalls von seinen Fotos begeistert.",
        translation: "Meslektaşları da onun fotoğraflarından etkilenmişti.",
        explanation:
          "'Ebenfalls', fiilden önce gelir ve 'seine Kollegen' üzerinde ek bir vurgu yapar.",
      },
      {
        text: "Fast täglich machte er jetzt Spaziergänge durch verschiedene Viertel.",
        translation:
          "Artık neredeyse her gün farklı mahallelerde yürüyüş yapıyordu.",
        explanation:
          "'Fast', fiilden önce gelir ve 'täglich' üzerinde yoğunluk vurgusu yapar.",
      },
      {
        text: "Vor allem die historischen Gebäude hatten es ihm angetan.",
        translation: "Özellikle tarihi binalar onu büyülemişti.",
        explanation:
          "'Vor allem', fiilden önce gelir ve 'die historischen Gebäude' üzerinde vurgu yapar.",
      },
      {
        text: "Nur am Wochenende blieb er manchmal zu Hause.",
        translation: "Sadece hafta sonları bazen evde kalıyordu.",
        explanation:
          "'Nur', fiilden önce gelir ve 'am Wochenende' üzerinde kısıtlayıcı bir vurgu yapar.",
      },
      {
        text: "Selbst dann experimentierte er mit Bildbearbeitung.",
        translation: "O zaman bile görüntü düzenlemeyle deneyler yapıyordu.",
        explanation:
          "'Selbst', fiilden önce gelir ve 'dann' üzerinde beklenmedik bir vurgu yapar.",
      },
      {
        text: "Auch seine berufliche Motivation kehrte allmählich zurück.",
        translation: "Mesleki motivasyonu da yavaş yavaş geri döndü.",
        explanation:
          "'Auch', fiilden önce gelir ve 'seine berufliche Motivation' üzerinde ek bir vurgu yapar.",
      },
    ],
  },
  {
    title: "8. Informationsverteilung im Satz",
    sentences: [
      {
        text: "Die neue Leidenschaft für Fotografie brachte Martin auf eine Idee für die aktuelle Marketingkampagne seines Unternehmens.",
        translation:
          "Fotoğrafçılığa olan yeni tutku, Martin’e şirketinin mevcut pazarlama kampanyası için bir fikir verdi.",
        explanation:
          "Fiil 'brachte' (verdi) ikinci konumdadır. Nesne 'eine Idee' fiilden sonra, amaç zarfı 'für die aktuelle Marketingkampagne' cümlenin sonunda yer alır.",
      },
      {
        text: "Seinen Chef überzeugte er mit authentischen Stadtbildern für die Werbestrategie.",
        translation:
          "Patronunu reklam stratejisi için otantik şehir görüntüleriyle ikna etti.",
        explanation:
          "Fiil 'überzeugte' (ikna etti) ikinci konumdadır. Nesne 'seinen Chef' fiilden önce, araç zarfı 'mit authentischen Stadtbildern' fiilden sonra gelir.",
      },
      {
        text: "Dem Kreativteam präsentierte er stolz seine besten Aufnahmen in einer digitalen Mappe.",
        translation:
          "Yaratıcı ekibe en iyi çekimlerini gururla dijital bir dosyada sundu.",
        explanation:
          "Fiil 'präsentierte' (sundu) ikinci konumdadır. Nesne 'dem Kreativteam' fiilden önce, nesne 'seine besten Aufnahmen' fiilden sonra gelir.",
      },
      {
        text: "Von seinen Kollegen erhielt er viel Zuspruch und konstruktive Kritik.",
        translation: "Meslektaşlarından çok destek ve yapıcı eleştiri aldı.",
        explanation:
          "Fiil 'erhielt' (aldı) ikinci konumdadır. Kaynak zarfı 'von seinen Kollegen' fiilden önce gelir.",
      },
      {
        text: "Bei der Vorstandssitzung stellte er letzte Woche das komplette Konzept vor.",
        translation:
          "Yönetim kurulu toplantısında geçen hafta tüm konsepti sundu.",
        explanation:
          "Fiil 'stellte' (sundu) ikinci konumdadır. Zaman zarfı 'letzte Woche' fiilden sonra gelir.",
      },
      {
        text: "Den größten Applaus bekam er für die emotionale Geschichte hinter den Bildern.",
        translation:
          "En büyük alkışı resimlerin ardındaki duygusal hikaye için aldı.",
        explanation:
          "Fiil 'bekam' (aldı) ikinci konumdadır. Neden zarfı 'für die emotionale Geschichte' fiilden sonra gelir.",
      },
      {
        text: "Dem Erfolg seiner Karriere stand nun nichts mehr im Weg.",
        translation: "Artık kariyerinin başarısının önünde hiçbir engel yoktu.",
        explanation:
          "Fiil 'stand' (yoktu) ikinci konumdadır. Nesne 'dem Erfolg seiner Karriere' fiilden önce gelir.",
      },
      {
        text: "Seiner Familie in der Heimat berichtete er begeistert von den positiven Entwicklungen.",
        translation:
          "Memleketindeki ailesine olumlu gelişmelerden heyecanla bahsetti.",
        explanation:
          "Fiil 'berichtete' (bahsetti) ikinci konumdadır. Nesne 'seiner Familie' fiilden önce, kaynak zarfı 'von den positiven Entwicklungen' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "9. Partnerseite 1: Word positions – Give a speech together",
    sentences: [
      {
        text: '"Meine sehr geehrten Damen und Herren," begann Martin seine Präsentation auf der Marketingkonferenz, während seine neue Kollegin Anna die Technik vorbereitete.',
        translation:
          '"Sayın bayanlar ve baylar," diyerek Martin pazarlama konferansındaki sunumuna başladı, yeni meslektaşı Anna tekniği hazırlarken.',
        explanation:
          "Ana cümlede fiil 'begann' (başladı) ikinci konumdadır. 'Während' ile başlayan yan cümlede fiil 'vorbereitete' sonda yer alır.",
      },
      {
        text: '"Ich freue mich außerordentlich," fuhr er fort, "Ihnen heute unser innovatives Stadtmarketing-Konzept vorstellen zu dürfen."',
        translation:
          '"Bugün yenilikçi şehir pazarlama konseptimizi sunmaktan büyük mutluluk duyuyorum," diye devam etti.',
        explanation:
          "Fiil 'freue' (duyuyorum) ikinci konumdadır. Alıntı cümlede fiil 'vorstellen' sonda yer alır.",
      },
      {
        text: 'Anna übernahm nahtlos: "Wie Sie auf dieser Grafik erkennen können, haben wir die authentischen Perspektiven der Stadt eingefangen."',
        translation:
          'Anna sorunsuzca devraldı: "Bu grafikte görebileceğiniz gibi, şehrin otantik perspektiflerini yakaladık."',
        explanation:
          "Fiil 'übernahm' (devraldı) ikinci konumdadır. Alıntı cümlede fiil 'haben eingefangen' ikinci konumdadır.",
      },
      {
        text: 'Martin ergänzte geschickt: "Dabei war es uns besonders wichtig, die Vielfalt Berlins zu zeigen."',
        translation:
          'Martin ustalıkla ekledi: "Bu sırada Berlin’in çeşitliliğini göstermek bizim için özellikle önemliydi."',
        explanation:
          "Fiil 'ergänzte' (ekledi) ikinci konumdadır. Alıntı cümlede fiil 'war' ikinci konumdadır.",
      },
      {
        text: '"Genau," bestätigte Anna, "denn unsere Zielgruppe sucht nach echten Erlebnissen."',
        translation:
          '"Kesinlikle," diye onayladı Anna, "çünkü hedef kitlemiz gerçek deneyimler arıyor."',
        explanation:
          "Fiil 'bestätigte' (onayladı) ikinci konumdadır. Alıntı cümlede fiil 'sucht' ikinci konumdadır.",
      },
      {
        text: "Sie wechselten sich perfekt ab, ergänzten gegenseitig ihre Sätze und schufen so einen harmonischen Redefluss.",
        translation:
          "Mükemmel bir şekilde sırayla konuştular, birbirlerinin cümlelerini tamamladılar ve böylece uyumlu bir konuşma akışı yarattılar.",
        explanation:
          "Fiil 'wechselten' (konuştular) ikinci konumdadır. Nesne 'ihre Sätze' fiilden sonra gelir.",
      },
      {
        text: '"Zusammenfassend lässt sich sagen," schloss Martin die gelungene Präsentation, "dass unser Konzept die perfekte Balance zwischen Tradition und Moderne darstellt."',
        translation:
          '"Özetle söylemek gerekirse," diyerek Martin başarılı sunumu tamamladı, "konseptimiz gelenek ve modernlik arasında mükemmel bir denge sunuyor."',
        explanation:
          "Fiil 'schloss' (tamamladı) ikinci konumdadır. Alıntı cümlede fiil 'lässt' ikinci konumdadır.",
      },
      {
        text: "Der tosende Applaus bestätigte ihren gemeinsamen Erfolg.",
        translation: "Gürültülü alkış, ortak başarılarını doğruladı.",
        explanation:
          "Fiil 'bestätigte' (doğruladı) ikinci konumdadır. Nesne 'ihren gemeinsamen Erfolg' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "Konjunktiv 2 der Gegenwart: Formen",
    sentences: [
      {
        text: "Nach der erfolgreichen Präsentation käme Martin endlich zur Ruhe, wenn nicht schon das nächste Projekt warten würde.",
        translation:
          "Başarılı sunumdan sonra Martin nihayet dinlenebilirdi, eğer bir sonraki proje beklemiyor olsaydı.",
        explanation:
          "Konjunktiv 2, irreale durumları ifade eder. 'Käme' ve 'würde' fiilleri, koşullu bir durumu belirtir.",
      },
      {
        text: "Er nähme sich gerne eine Auszeit, aber die Arbeit ließe das momentan nicht zu.",
        translation:
          "Kendine memnuniyetle bir mola alırdı, ama iş şu anda buna izin vermiyor.",
        explanation:
          "'Nähme' ve 'ließe', Konjunktiv 2 formlarıdır ve irreale istekleri ifade eder.",
      },
      {
        text: "Sein Chef sähe es nicht gern, wenn wichtige Termine verschoben würden.",
        translation:
          "Patronu önemli tarihlerin ertelenmesini hoş karşılamazdı.",
        explanation:
          "'Sähe' ve 'würden', Konjunktiv 2 formlarıdır ve irreale bir durumu belirtir.",
      },
      {
        text: "Martin dächte oft an einen kurzen Urlaub.",
        translation: "Martin sık sık kısa bir tatili düşünürdü.",
        explanation:
          "'Dächte', Konjunktiv 2 formudur ve irreale bir düşünceyi ifade eder.",
      },
      {
        text: "Er führe gerne für ein paar Tage ans Meer.",
        translation: "Birkaç günlüğüne memnuniyetle denize giderdi.",
        explanation:
          "'Führe', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Das täte ihm sicherlich gut.",
        translation: "Bu ona kesinlikle iyi gelirdi.",
        explanation:
          "'Täte', Konjunktiv 2 formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Anna meinte, sie hülfe ihm gerne bei der Vorbereitung der nächsten Kampagne.",
        translation:
          "Anna, bir sonraki kampanyanın hazırlığında ona memnuniyetle yardım edeceğini söyledi.",
        explanation:
          "'Hülfe', Konjunktiv 2 formudur ve irreale bir yardımı ifade eder.",
      },
      {
        text: '"Du bräuchtest wirklich eine Pause", sagte sie besorgt.',
        translation: "Gerçekten bir molaya ihtiyacın var, dedi endişeyle.",
        explanation:
          "'Bräuchtest', Konjunktiv 2 formudur ve irreale bir ihtiyacı ifade eder.",
      },
      {
        text: '"Ich wüsste auch schon, wer dich vertreten könnte."',
        translation: '"Seni kimin vekalet edebileceğini de biliyorum."',
        explanation:
          "'Wüsste', Konjunktiv 2 formudur ve irreale bir bilgiyi ifade eder.",
      },
      {
        text: "Martin lächelte. Er wüsste ihre Unterstützung sehr zu schätzen.",
        translation: "Martin gülümsedi. Onun desteğini çok takdir ederdi.",
        explanation:
          "'Wüsste', Konjunktiv 2 formudur ve irreale bir takdiri ifade eder.",
      },
    ],
  },
  {
    title: "Konjunktiv 2 der Vergangenheit: Formen",
    sentences: [
      {
        text: "Hätte Martin gewusst, wie anspruchsvoll sein neuer Job werden würde, hätte er vielleicht mehr über das Angebot nachgedacht.",
        translation:
          "Martin yeni işinin ne kadar zor olacağını bilseydi, belki teklif hakkında daha fazla düşünürdü.",
        explanation:
          "Konjunktiv 2 geçmiş zaman, irreale geçmiş durumları ifade eder. 'Hätte gewusst' ve 'hätte nachgedacht' koşullu geçmiş durumları belirtir.",
      },
      {
        text: "Er wäre ohne die Unterstützung seiner Kollegen sicherlich überfordert gewesen.",
        translation:
          "Meslektaşlarının desteği olmadan kesinlikle bunalmış olurdu.",
        explanation:
          "'Wäre gewesen', Konjunktiv 2 geçmiş formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Seine Freundin Sarah hätte ihm bei diesem Stress helfen können, wäre sie noch bei ihm geblieben.",
        translation:
          "Kız arkadaşı Sarah bu stresle ona yardım edebilirdi, eğer yanında kalsaydı.",
        explanation:
          "'Hätte helfen können' ve 'wäre geblieben', Konjunktiv 2 geçmiş formlarıdır ve irreale koşulları ifade eder.",
      },
      {
        text: "Martin hätte ihr mehr Zeit widmen sollen.",
        translation: "Martin ona daha fazla zaman ayırmalıydı.",
        explanation:
          "'Hätte widmen sollen', Konjunktiv 2 geçmiş formudur ve geçmişte yapılması gereken bir şeyi ifade eder.",
      },
      {
        text: "Er hätte auf ihre Bedürfnisse besser eingehen müssen.",
        translation: "Onun ihtiyaçlarına daha iyi yanıt vermeliydi.",
        explanation:
          "'Hätte eingehen müssen', Konjunktiv 2 geçmiş formudur ve geçmişte yapılması gereken bir şeyi ifade eder.",
      },
      {
        text: "Sie hätte sich mehr Aufmerksamkeit gewünscht.",
        translation: "O daha fazla ilgi istemiş olurdu.",
        explanation:
          "'Hätte gewünscht', Konjunktiv 2 geçmiş formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Wäre er nicht so auf seine Karriere fokussiert gewesen, hätte ihre Beziehung vielleicht noch eine Chance gehabt.",
        translation:
          "Kariyerine bu kadar odaklanmış olmasaydı, ilişkileri belki hâlâ bir şans bulabilirdi.",
        explanation:
          "'Wäre gewesen' ve 'hätte gehabt', Konjunktiv 2 geçmiş formlarıdır ve irreale koşulları ifade eder.",
      },
      {
        text: "Er hätte diese Lektion früher lernen sollen: Beruflicher Erfolg ist nicht alles im Leben.",
        translation:
          "Bu dersi daha önce öğrenmeliydi: Mesleki başarı hayatta her şey değildir.",
        explanation:
          "'Hätte lernen sollen', Konjunktiv 2 geçmiş formudur ve geçmişte yapılması gereken bir şeyi ifade eder.",
      },
    ],
  },
  {
    title: "Höflichkeit, Vorschläge, Ratschläge und Vorwürfe",
    sentences: [
      {
        text: '"Könnten Sie mir bitte die Unterlagen für das Meeting zusenden?", fragte Martin seine Assistentin höflich.',
        translation:
          '"Toplantı için belgeleri bana gönderebilir misiniz lütfen?" diye Martin asistanına kibar bir şekilde sordu.',
        explanation:
          "Konjunktiv 2, kibar talepler için kullanılır. 'Könnten' kibar bir rica ifade eder.",
      },
      {
        text: '"Würden Sie mir auch einen Termin mit Herrn Müller vereinbaren?"',
        translation: '"Bay Müller ile bir randevu da ayarlar mısınız?"',
        explanation:
          "'Würden', Konjunktiv 2 formudur ve kibar bir talebi ifade eder.",
      },
      {
        text: 'Anna kam in sein Büro und meinte: "Du solltest wirklich eine Pause machen."',
        translation:
          'Anna ofisine geldi ve dedi ki: "Gerçekten bir mola yapmalısın."',
        explanation:
          "'Solltest', Konjunktiv 2 formudur ve bir öneriyi ifade eder.",
      },
      {
        text: '"Es wäre besser, wenn du früher nach Hause gehen würdest."',
        translation: '"Eve daha erken gitsen daha iyi olur."',
        explanation:
          "'Wäre' ve 'würdest', Konjunktiv 2 formlarıdır ve bir öneriyi ifade eder.",
      },
      {
        text: 'Sein Chef riet ihm: "An Ihrer Stelle würde ich die Präsentation nochmals überarbeiten."',
        translation:
          'Patronu ona tavsiyede bulundu: "Sizin yerinizde olsam sunumu bir kez daha gözden geçirirdim."',
        explanation:
          "'Würde', Konjunktiv 2 formudur ve bir tavsiyeyi ifade eder.",
      },
      {
        text: "Martin dachte bei sich: Das hättest du mir auch früher sagen können.",
        translation:
          "Martin kendi kendine düşündü: Bunu bana daha önce de söyleyebilirdin.",
        explanation:
          "'Hättest', Konjunktiv 2 geçmiş formudur ve bir sitemi ifade eder.",
      },
      {
        text: '"Dürfte ich Sie um einen Vorschlag bitten, was genau verbessert werden sollte?"',
        translation:
          '"Neyin tam olarak iyileştirilmesi gerektiği konusunda bir öneri isteyebilir miyim?"',
        explanation:
          "'Dürfte', Konjunktiv 2 formudur ve kibar bir ricayı ifade eder.",
      },
      {
        text: 'Seine Mutter rief an und warf ihm vor: "Du könntest ruhig öfter anrufen!"',
        translation:
          'Annesi aradı ve ona sitem etti: "Daha sık arayabilirdin!"',
        explanation:
          "'Könntest', Konjunktiv 2 formudur ve bir sitemi ifade eder.",
      },
      {
        text: '"Wir hätten dich gerne öfter zu Besuch."',
        translation: '"Seni daha sık ziyaret etmeni isterdik."',
        explanation:
          "'Hätten', Konjunktiv 2 formudur ve bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "Wünsche, irreale Wünsche, irreale Bedingungen",
    sentences: [
      {
        text: 'Martin seufzte: "Wenn ich nur mehr Zeit für mich hätte!"',
        translation:
          'Martin iç çekti: "Keşke kendime daha fazla zamanım olsaydı!"',
        explanation:
          "'Hätte', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Er wünschte, er könnte eine längere Reise machen.",
        translation: "Daha uzun bir yolculuk yapabilmeyi diledi.",
        explanation:
          "'Könnte', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Wenn er nicht so viele Verpflichtungen hätte, würde er sofort seinen Rucksack packen und losziehen.",
        translation:
          "Eğer bu kadar çok yükümlülüğü olmasaydı, hemen sırt çantasını toplar ve yola çıkardı.",
        explanation:
          "'Hätte' ve 'würde', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: "Falls das Projekt früher abgeschlossen wäre, hätte er vielleicht im Sommer frei.",
        translation:
          "Eğer proje daha erken tamamlanmış olsaydı, belki yazın boş vakti olurdu.",
        explanation:
          "'Wäre' ve 'hätte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Ach, wenn Sarah doch noch hier wäre", dachte er wehmütig.',
        translation:
          '"Ah, keşke Sarah hâlâ burada olsaydı," diye hüzünle düşündü.',
        explanation:
          "'Wäre', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Wenn sie sich nicht getrennt hätten, würden sie jetzt gemeinsam Pläne schmieden.",
        translation:
          "Eğer ayrılmamış olsalardı, şimdi birlikte planlar yapıyor olurlardı.",
        explanation:
          "'Hätten' ve 'würden', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: "Sollte er sie anrufen?",
        translation: "Onu aramalı mı?",
        explanation:
          "'Sollte', Konjunktiv 2 formudur ve bir olasılığı ifade eder.",
      },
      {
        text: "Falls sie antworten würde, könnte er ihr von seinen Erfolgen erzählen.",
        translation: "Eğer cevap verseydi, ona başarılarından bahsedebilirdi.",
        explanation:
          "'Würde' ve 'könnte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: "Wenn er damals nicht so stur gewesen wäre, wären sie vielleicht noch zusammen.",
        translation:
          "Eğer o zaman bu kadar inatçı olmasaydı, belki hâlâ birlikte olurlardı.",
        explanation:
          "'Wäre' ve 'wären', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Wenn ich doch nur eine zweite Chance bekäme", flüsterte er leise.',
        translation:
          '"Keşke bir ikinci şansım olsaydı," diye fısıldadı usulca.',
        explanation:
          "'Bekäme', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "Irreale Vergleiche und irreale Folgen",
    sentences: [
      {
        text: "Martin arbeitete, als ob er gegen die Zeit kämpfen würde.",
        translation:
          "Martin, zamana karşı mücadele ediyormuş gibi çalışıyordu.",
        explanation:
          "'Als ob' ile başlayan cümlede Konjunktiv 2 kullanılır. 'Würde', irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Er fühlte sich, als hätte er tagelang nicht geschlafen.",
        translation: "Günlerdir uyumamış gibi hissediyordu.",
        explanation:
          "'Als hätte', Konjunktiv 2 geçmiş formudur ve irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Die Situation war so anstrengend, dass er fast seine Gesundheit riskiert hätte.",
        translation:
          "Durum o kadar yorucuydu ki neredeyse sağlığını riske atabilirdi.",
        explanation:
          "'Hätte', Konjunktiv 2 geçmiş formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Seine Kollegin behandelte ihn, als wäre er ein Roboter ohne Gefühle.",
        translation: "Meslektaşı ona, duygusuz bir robotmuş gibi davranıyordu.",
        explanation:
          "'Als wäre', Konjunktiv 2 formudur ve irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Der Terminplan war so eng, dass niemand ihn hätte einhalten können.",
        translation: "Takvim o kadar yoğundu ki kimse ona uyamazdı.",
        explanation:
          "'Hätte', Konjunktiv 2 geçmiş formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Martin war zu erschöpft, als dass er sich noch konzentrieren könnte.",
        translation: "Martin o kadar yorgundu ki artık konsantre olamazdı.",
        explanation:
          "'Als dass' ile Konjunktiv 2 kullanılır. 'Könnte', irreale bir sonucu ifade eder.",
      },
      {
        text: "Er verhielt sich manchmal, als ob er allein für den Erfolg der Firma verantwortlich wäre.",
        translation:
          "Bazen, şirketin başarısından tek başına sorumluymuş gibi davranıyordu.",
        explanation:
          "'Als ob' ile Konjunktiv 2 kullanılır. 'Wäre', irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Die Aufgabe erschien zu komplex, als dass sie in einer Woche zu bewältigen wäre.",
        translation: "Görev o kadar karmaşıktı ki bir haftada tamamlanamazdı.",
        explanation:
          "'Als dass' ile Konjunktiv 2 kullanılır. 'Wäre', irreale bir sonucu ifade eder.",
      },
      {
        text: "Er fühlte sich, als ob er auf der Stelle treten würde, anstatt voranzukommen.",
        translation: "İlerlemek yerine yerinde sayıyormuş gibi hissediyordu.",
        explanation:
          "'Als ob' ile Konjunktiv 2 kullanılır. 'Würde', irreale bir karşılaştırmayı ifade eder.",
      },
    ],
  },
  {
    title:
      "Partnerseite 2: Unreal conditions in present and past – Guessing game",
    sentences: [
      {
        text: "Beim Teambuilding-Event spielten Martin und seine Kollegen ein Ratespiel mit irrealen Bedingungen.",
        translation:
          "Ekip oluşturma etkinliğinde Martin ve meslektaşları irreale koşullarla bir tahmin oyunu oynadılar.",
        explanation:
          "Fiil 'spielten' (oynadılar) ikinci konumdadır. Nesne 'ein Ratespiel' fiilden sonra gelir.",
      },
      {
        text: 'Anna begann: "Wenn ich ein Tier wäre, würde ich durch die Lüfte gleiten."',
        translation:
          'Anna başladı: "Eğer bir hayvan olsaydım, havada süzülürdüm."',
        explanation:
          "'Wäre' ve 'würde', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: 'Martin überlegte: "Wenn du ein Adler wärest, könntest du die Welt von oben betrachten."',
        translation:
          'Martin düşündü: "Eğer bir kartal olsaydın, dünyayı yukarıdan görebilirdin."',
        explanation:
          "'Wärest' ve 'könntest', Konjunktiv 2 formმოდ and 'würde', Konjunktiv 2 formlarıdır ve irreale koşulları ifade eder.",
      },
      {
        text: '"Nein, nicht ganz", lachte sie. "Wenn ich nachts aktiv wäre und hervorragend hören könnte?"',
        translation:
          '"Tam değil," diye güldü. "Eğer geceleri aktif olsaydım ve mükemmel duysaydım?"',
        explanation:
          "'Wäre' ve 'könnte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Ah, wenn du eine Fledermaus wärest, würdest du Ultraschall zur Orientierung nutzen!"',
        translation:
          '"Ah, eğer bir yarasa olsaydın, yön bulmak için ultrason kullanırdın!"',
        explanation:
          "'Wärest' ve 'würdest', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Genau!" Nun war Martin an der Reihe: "Wenn ich ein Gebäude in Berlin wäre, hätte ich eine dramatische Geschichte erlebt."',
        translation:
          '"Tam isabet!" Şimdi sıra Martin’deydi: "Eğer Berlin’de bir bina olsaydım, dramatik bir hikaye yaşamış olurdum."',
        explanation:
          "'Wäre' ve 'hätte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: 'Anna riet: "Wenn du die Berliner Mauer gewesen wärest, hättest du den Fall des Kommunismus miterlebt."',
        translation:
          'Anna tahmin etti: "Eğer Berlin Duvarı olsaydın, komünizmin çöküşüne tanıklık etmiş olurdun."',
        explanation:
          "'Wärest' ve 'hättest', Konjunktiv 2 geçmiş formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Fast! Ich hätte viele wichtige politische Entscheidungen beherbergt."',
        translation:
          '"Neredeyse! Birär. "Birçok önemli siyasi kararı barındırmış olurdum."',
        explanation:
          "'Hätte', Konjunktiv 2 geçmiş formudur ve irreale bir durumu ifade eder.",
      },
      {
        text: '"Oh, wenn du der Reichstag gewesen wärest, hättest du Feuer, Krieg und Wiedervereinigung überstanden!"',
        translation:
          '"Oh, eğer Reichstag olsaydın, yangını, savaşı ve yeniden birleşmeyi atlatmış olurdun!"',
        explanation:
          "'Wärest' ve 'hättest', Konjunktiv 2 geçmiş formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Richtig getroffen!", bestätigte Martin beeindruckt.',
        translation: '"Doğru tahmin!" dedi Martin etkilenmiş bir şekilde.',
        explanation:
          "Fiil 'bestätigte' (dedi) ikinci konumdadır. Zarf 'beeindruckt' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "Passiv in allen Zeiten",
    sentences: [
      {
        text: "Die neue Marketingkampagne wurde von Martins Team entwickelt.",
        translation:
          "Yeni pazarlama kampanyası Martin’in ekibi tarafından geliştirildi.",
        explanation:
          "Passiv, eylemin özne tarafından değil, başka bir ajan tarafından yapıldığını gösterir. 'Wurde entwickelt', geçmiş zamanda passiv formudur.",
      },
      {
        text: "Sie wird nächste Woche offiziell vorgestellt.",
        translation: "Önümüzdeki hafta resmi olarak tanıtılacak.",
        explanation: "'Wird vorgestellt', gelecek zamanda passiv formudur.",
      },
      {
        text: "Das Konzept ist bereits vom Vorstand genehmigt worden.",
        translation: "Konsept zaten yönetim kurulu tarafından onaylandı.",
        explanation:
          "'Ist genehmigt worden', şimdiki zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Die Werbeplakate waren schon im Vormonat entworfen worden.",
        translation: "Reklam afişleri önceki ayda zaten tasarlanmıştı.",
        explanation:
          "'Waren entworfen worden', geçmiş zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Die Reaktionen der Zielgruppe werden regelmäßig analysiert werden.",
        translation: "Hedef kitlenin tepkileri düzenli olarak analiz edilecek.",
        explanation:
          "'Werden analysiert werden', gelecek zamanda passiv formudur.",
      },
      {
        text: "Das Budget war vom Finanzteam streng kalkuliert worden.",
        translation:
          "Bütçe finans ekibi tarafından sıkı bir şekilde hesaplanmıştı.",
        explanation:
          "'War kalkuliert worden', geçmiş zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Die Werbespots werden gerade von einer renommierten Agentur produziert.",
        translation:
          "Reklam filmleri şu anda tanınmış bir ajans tarafından üretiliyor.",
        explanation: "'Werden produziert', şimdiki zamanda passiv formudur.",
      },
      {
        text: "Die digitalen Anzeigen sind gestern veröffentlicht worden.",
        translation: "Dijital reklamlar dün yayınlandı.",
        explanation:
          "'Sind veröffentlicht worden', şimdiki zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Der Erfolg der Kampagne wird in drei Monaten gemessen werden.",
        translation: "Kampanyanın başarısı üç ay içinde ölçülecek.",
        explanation: "'Wird gemessen werden', gelecek zamanda passiv formudur.",
      },
      {
        text: "Jedes Detail wurde sorgfältig geplant.",
        translation: "Her detay özenle planlandı.",
        explanation: "'Wurde geplant', geçmiş zamanda passiv formudur.",
      },
      {
        text: "Die gesamte Stadt wird bald mit den kreativen Motiven geschmückt sein.",
        translation: "Tüm şehir yakında yaratıcı motiflerle süslenecek.",
        explanation: "'Wird geschmückt sein', gelecek zamanda passiv formudur.",
      },
    ],
  },
  {
    title: "Passiv mit Modalverben in allen Zeiten",
    sentences: [
      {
        text: "Die Termine müssen von allen Teammitgliedern eingehalten werden.",
        translation: "Tüm ekip üyeleri tarafından tarihler uyulmalıdır.",
        explanation:
          "'Müssen eingehalten werden', modal fiil 'müssen' ile passiv formudur.",
      },
      {
        text: "Die Präsentation musste zweimal verschoben werden.",
        translation: "Sunum iki kez ertelenmek zorunda kaldı.",
        explanation:
          "'Musste verschoben werden', geçmiş zamanda modal fiil ile passiv formudur.",
      },
      {
        text: "Die Zielgruppe soll durch emotionale Bilder angesprochen werden können.",
        translation:
          "Hedef kitle, duygusal görüntülerle hitap edilebilmelidir.",
        explanation:
          "'Soll angesprochen werden können', modal fiil 'sollen' ile passiv formudur.",
      },
      {
        text: "Die technischen Aspekte hatten von den Experten geprüft werden müssen.",
        translation:
          "Teknik yönler uzmanlar tarafından kontrol edilmek zorunda kalmıştı.",
        explanation:
          "'Hatten geprüft werden müssen', geçmiş zaman tamamlanmış modal fiil ile passiv formudur.",
      },
      {
        text: "Alle Texte dürfen erst nach der Freigabe veröffentlicht werden.",
        translation: "Tüm metinler ancak onaydan sonra yayınlanabilir.",
        explanation:
          "'Dürfen veröffentlicht werden', modal fiil 'dürfen' ile passiv formudur.",
      },
      {
        text: "Die Kosten konnten deutlich reduziert werden.",
        translation: "Maliyetler belirgin bir şekilde azaltılabildi.",
        explanation:
          "'Konnten reduziert werden', geçmiş zamanda modal fiil 'können' ile passiv formudur.",
      },
      {
        text: "Die Marketingstrategie wird noch einmal überarbeitet werden müssen.",
        translation:
          "Pazarlama stratejisi bir kez daha gözden geçirilmek zorunda kalacak.",
        explanation:
          "'Wird überarbeitet werden müssen', gelecek zamanda modal fiil ile passiv formudur.",
      },
      {
        text: "Die Kampagne hatte trotz Hindernissen pünktlich gestartet werden sollen.",
        translation: "Kampanya, engellere rağmen zamanında başlatılmalıydı.",
        explanation:
          "'Hatte gestartet werden sollen', geçmiş zaman tamamlanmış modal fiil ile passiv formudur.",
      },
      {
        text: "Die Botschaft mag von manchen Kunden missverstanden worden sein.",
        translation:
          "Mesaj bazı müşteriler tarafından yanlış anlaşılmış olabilir.",
        explanation:
          "'Mag missverstanden worden sein', modal fiil 'mögen' ile passiv formudur.",
      },
      {
        text: "Der Slogan wird eingängiger formuliert werden müssen.",
        translation:
          "Slogan daha akılda kalıcı bir şekilde formüle edilmek zorunda kalacak.",
        explanation:
          "'Wird formuliert werden müssen', gelecek zamanda modal fiil ile passiv formudur.",
      },
    ],
  },
  {
    title: "Alternativen zum Passiv",
    sentences: [
      {
        text: "Man diskutierte die Ergebnisse der Umfrage intensiv.",
        translation: "Anket sonuçları yoğun bir şekilde tartışıldı.",
        explanation: "'Man' ile aktif cümle, passiv yerine kullanılabilir.",
      },
      {
        text: "Die Agentur lässt die Werbefilme in einem Studio produzieren.",
        translation: "Ajans, reklam filmlerini bir stüdyoda ürettiriyor.",
        explanation: "'Lässt' ile aktif yapı, passiv yerine kullanılabilir.",
      },
      {
        text: "Es gibt verschiedene Meinungen zur neuen Kampagne.",
        translation: "Yeni kampanyaya dair farklı görüşler var.",
        explanation: "'Es gibt' yapısı, passiv yerine kullanılabilir.",
      },
      {
        text: "Die Plakate finden überall in der Stadt Beachtung.",
        translation: "Afişler şehirde her yerde dikkat çekiyor.",
        explanation: "Aktif fiil 'finden', passiv yerine kullanılabilir.",
      },
      {
        text: "Das Meeting ließ sich nicht länger verschieben.",
        translation: "Toplantı daha fazla ertelenemedi.",
        explanation: "'Ließ sich', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Der Bericht ist morgen abzugeben.",
        translation: "Rapor yarın teslim edilecek.",
        explanation: "'Ist abzugeben', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Verträge bedürfen noch der Unterschrift des Vorstands.",
        translation:
          "Sözleşmeler hâlâ yönetim kurulunun imzasını gerektiriyor.",
        explanation: "'Bedürfen', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Die Website erfährt gerade eine komplette Überarbeitung.",
        translation: "Web sitesi şu anda tamamen yenileniyor.",
        explanation: "'Erfährt', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Die Dokumente liegen zur Durchsicht bereit.",
        translation: "Belgeler inceleme için hazır duruyor.",
        explanation: "'Liegen bereit', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Diese Aufgabe bleibt zu erledigen.",
        translation: "Bu görev tamamlanmayı bekliyor.",
        explanation:
          "'Bleibt zu erledigen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die neuen Richtlinien kommen ab nächstem Monat zur Anwendung.",
        translation: "Yeni yönergeler önümüzdeki aydan itibaren uygulanacak.",
        explanation:
          "'Kommen zur Anwendung', passiv yerine kullanılan bir yapıdır.",
      },
    ],
  },
  {
    title: "Formen mit Passivbedeutung",
    sentences: [
      {
        text: "Die Broschüren sind leicht zu verstehen.",
        translation: "Broşürler kolayca anlaşılır.",
        explanation: "'Sind zu verstehen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Der Termin ist nicht zu verschieben.",
        translation: "Randevu ertelenemez.",
        explanation:
          "'Ist nicht zu verschieben', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Präsentation lässt sich verbessern.",
        translation: "Sunum iyileştirilebilir.",
        explanation:
          "'Lässt sich verbessern', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Das Problem erweist sich als lösbar.",
        translation: "Sorun çözülebilir olduğu ortaya çıkıyor.",
        explanation:
          "'Erweist sich als lösbar', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Kampagne ist binnen einer Woche fertigzustellen.",
        translation: "Kampanya bir hafta içinde tamamlanacak.",
        explanation:
          "'Ist fertigzustellen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die alten Werbekonzepte gehören überarbeitet.",
        translation: "Eski reklam konseptleri gözden geçirilmeli.",
        explanation:
          "'Gehören überarbeitet', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Kritik bleibt zu berücksichtigen.",
        translation: "Eleştiri dikkate alınmayı bekliyor.",
        explanation:
          "'Bleibt zu berücksichtigen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Das Meeting bekam eine neue Struktur verpasst.",
        translation: "Toplantıya yeni bir yapı kazandırıldı.",
        explanation: "'Bekam verpasst', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Der Vorschlag bekommt allgemeine Zustimmung.",
        translation: "Öneri genel onay alıyor.",
        explanation: "'Bekommt Zustimmung', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Daten bekommen eine neue Auswertung.",
        translation: "Veriler yeni bir değerlendirme alıyor.",
        explanation: "'Bekommt Auswertung', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Website erhält ein modernes Design.",
        translation: "Web sitesi modern bir tasarım alıyor.",
        explanation: "'Erhält Design', passiv anlamı taşıyan bir yapıdır.",
      },
    ],
  },
  {
    title: "Passivsätze ohne Subjekt",
    sentences: [
      {
        text: "Im Meeting wurde heftig diskutiert.",
        translation: "Toplantıda hararetli bir tartışma yapıldı.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wurde diskutiert' kullanılır.",
      },
      {
        text: "Über die neuen Ideen wird noch beraten.",
        translation: "Yeni fikirler hakkında hâlâ görüşülüyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird beraten' kullanılır.",
      },
      {
        text: "Bei der Präsentation wurde applaudiert.",
        translation: "Sunumda alkışlandı.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wurde applaudiert' kullanılır.",
      },
      {
        text: "An diesem Projekt wird mit Hochdruck gearbeitet.",
        translation: "Bu projede yüksek baskıyla çalışılıyor.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wird gearbeitet' kullanılır.",
      },
      {
        text: "Über das Budget wird noch verhandelt.",
        translation: "Bütçe hakkında hâlâ müzakere ediliyor.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wird verhandelt' kullanılır.",
      },
      {
        text: "In der Abteilung wird viel gelacht.",
        translation: "Bölümde çok gülünüyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird gelacht' kullanılır.",
      },
      {
        text: "Unter den Kollegen wird sich gegenseitig geholfen.",
        translation: "Meslektaşlar arasında birbirine yardım ediliyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird geholfen' kullanılır.",
      },
      {
        text: "Bei den Planungstreffen wird offen gesprochen.",
        translation: "Planlama toplantılarında açıkça konuşuluyor.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wird gesprochen' kullanılır.",
      },
      {
        text: "Nach innovativen Lösungen wird ständig gesucht.",
        translation: "Yenilikçi çözümler için sürekli aranıyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird gesucht' kullanılır.",
      },
      {
        text: "Am Konzept wird noch gefeilt.",
        translation: "Konsept üzerinde hâlâ ince ayar yapılıyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird gefeilt' kullanılır.",
      },
      {
        text: "Von einer Verzögerung wurde nicht ausgegangen.",
        translation: "Bir gecikme beklenmiyordu.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wurde ausgegangen' kullanılır.",
      },
    ],
  },
  {
    title: "Wann ist Passiv möglich, wann nicht?",
    sentences: [
      {
        text: "Die Idee wurde von Martin entwickelt.",
        translation: "Fikir Martin tarafından geliştirildi.",
        explanation:
          "Passiv mümkün: Eylem bir ajan (Martin) tarafından gerçekleştiriliyor.",
      },
      {
        text: "Der Erfolg wurde von allen gefeiert.",
        translation: "Başarı herkes tarafından kutlandı.",
        explanation:
          "Passiv mümkün: Eylem bir grup (herkes) tarafından gerçekleştiriliyor.",
      },
      {
        text: "Martin geht jeden Tag zur Arbeit.",
        translation: "Martin her gün işe gidiyor.",
        explanation:
          "Passiv mümkün değil: 'Geht' fiili bir ajan gerektirmez ve durum fiilidir.",
      },
      {
        text: "Das Projekt gefällt dem Kunden sehr gut.",
        translation: "Proje müşteriye çok hoş geliyor.",
        explanation:
          "Passiv mümkün değil: 'Gefällt' fiili bir ajan gerektirmez.",
      },
      {
        text: "Es wurde bis spät in die Nacht gearbeitet.",
        translation: "Geç saatlere kadar çalışıldı.",
        explanation:
          "Passiv mümkün: Öznesiz passiv cümlede eylem gerçekleşiyor.",
      },
      {
        text: "Der Chef vertraut seinem Team.",
        translation: "Patron ekibine güveniyor.",
        explanation:
          "Passiv mümkün değil: 'Vertraut' fiili bir ajan gerektirmez.",
      },
      {
        text: "Das Meeting dauerte drei Stunden.",
        translation: "Toplantı üç saat sürdü.",
        explanation:
          "Passiv mümkün değil: 'Dauerte' fiili bir ajan gerektirmez.",
      },
      {
        text: "Es wird angenommen, dass die Kampagne erfolgreich sein wird.",
        translation: "Kampanyanın başarılı olacağı varsayılıyor.",
        explanation:
          "Passiv mümkün: Öznesiz passiv cümlede bir varsayım ifade ediliyor.",
      },
      {
        text: "Der Marketingabteilung gehören fünfzehn Mitarbeiter an.",
        translation: "Pazarlama bölümünde on beş çalışan var.",
        explanation:
          "Passiv mümkün değil: 'Gehören' fiili bir ajan gerektirmez.",
      },
      {
        text: "Die neue Software wurde schnell erlernt.",
        translation: "Yeni yazılım hızla öğrenildi.",
        explanation:
          "Passiv mümkün: Eylem bir ajan tarafından gerçekleştiriliyor.",
      },
      {
        text: "Martin lächelte zufrieden.",
        translation: "Martin memnun bir şekilde gülümsedi.",
        explanation:
          "Passiv mümkün değil: 'Lächelte' fiili bir ajan gerektirmez.",
      },
      {
        text: "Die Meinung des Kunden wurde sehr geschätzt.",
        translation: "Müşterinin görüşü çok takdir edildi.",
        explanation:
          "Passiv mümkün: Eylem bir ajan tarafından gerçekleştiriliyor.",
      },
    ],
  },
  {
    title: "Partnerseite 3: Passive – Word games",
    sentences: [
      {
        text: '"Lass uns ein Wortspiel zum Passiv machen", schlug Anna vor, als sie mit Martin in der Kantine saß.',
        translation:
          '"Passivle bir kelime oyunu oynayalım," diye önerdi Anna, Martin’le kantinde otururken.',
        explanation:
          "Fiil 'schlug' (önerdi) ikinci konumdadır. Alıntı cümlede fiil 'machen' sonda yer alır.",
      },
      {
        text: '"Von wem wird dieses Spiel erfunden?", lachte Martin.',
        translation:
          '"Bu oyun kim tarafından icat ediliyor?" diye güldü Martin.',
        explanation:
          "Passiv cümlede fiil 'wird erfunden' kullanılır ve bir ajan (von wem) belirtilir.",
      },
      {
        text: '"Es wird gerade spontan von mir entwickelt", antwortete Anna schmunzelnd.',
        translation:
          '"Şu anda spontane bir şekilde benim tarafımdan geliştiriliyor," diye gülümseyerek cevap verdi Anna.',
        explanation:
          "Passiv cümlede fiil 'wird entwickelt' kullanılır ve ajan 'von mir' belirtilir.",
      },
      {
        text: '"Es könnte so gespielt werden: Ich nenne einen Satz im Aktiv, und der muss von dir ins Passiv umgewandelt werden."',
        translation:
          '"Böyle oynanabilir: Ben aktif bir cümle söylüyorum, sen onu passiv’e çevirmelisin."',
        explanation:
          "Fiil 'könnte' (oynanabilir) ikinci konumdadır. Passiv dönüşüm kuralı açıklanır.",
      },
      {
        text: 'Martin nickte: "Und dann wird von mir ein neuer Aktivsatz genannt?"',
        translation:
          'Martin başını salladı: "Ve sonra benim tarafımdan yeni bir aktif cümle mi söylenecek?"',
        explanation:
          "Passiv cümlede fiil 'wird genannt' kullanılır ve ajan 'von mir' belirtilir.",
      },
      {
        text: '"Genau! Es wird begonnen!", rief Anna.',
        translation: '"Tamam! Başlanıyor!" diye bağırdı Anna.',
        explanation: "Öznesiz passiv cümlede fiil 'wird begonnen' kullanılır.",
      },
      {
        text: '"Die Praktikanten organisieren die Weihnachtsfeier."',
        translation: '"Stajyerler yılbaşı partisini organize ediyor."',
        explanation:
          "Aktif cümle, passiv’e çevrilecek bir örnek olarak verilir.",
      },
      {
        text: 'Martin antwortete prompt: "Die Weihnachtsfeier wird von den Praktikanten organisiert."',
        translation:
          'Martin hemen cevap verdi: "Yılbaşı partisi stajyerler tarafından organize ediliyor."',
        explanation:
          "Passiv cümlede fiil 'wird organisiert' kullanılır ve ajan 'von den Praktikanten' belirtilir.",
      },
      {
        text: '"Der Chef lobt das Marketingteam."',
        translation: '"Patron pazarlama ekibini övüyor."',
        explanation:
          "Aktif cümle, passiv’e çevrilecek bir örnek olarak verilir.",
      },
      {
        text: 'Anna überlegte kurz: "Das Marketingteam wird vom Chef gelobt."',
        translation:
          'Anna kısa bir süre düşündü: "Pazarlama ekibi patron tarafından övülüyor."',
        explanation:
          "Passiv cümlede fiil 'wird gelobt' kullanılır ve ajan 'vom Chef' belirtilir.",
      },
      {
        text: '"In diesem Spiel können auch passivfähige von nicht-passivfähigen Verben unterschieden werden."',
        translation:
          '"Bu oyunda passiv’e uygun fiiller, uygun olmayanlardan ayırt edilebilir."',
        explanation:
          "Fiil 'können' (ayırt edilebilir) ikinci konumdadır. Passiv kuralı açıklanır.",
      },
      {
        text: 'Martin schmunzelte: "Dieser Unterschied wird von uns jetzt erkannt."',
        translation:
          'Martin gülümsedi: "Bu fark şimdi bizim tarafımızdan fark ediliyor."',
        explanation:
          "Passiv cümlede fiil 'wird erkannt' kullanılır ve ajan 'von uns' belirtilir.",
      },
      {
        text: '"Es wird von mir sehr geschätzt, dass von dir solche lehrreichen Spiele vorgeschlagen werden."',
        translation:
          '"Senin böyle öğretici oyunlar önermen benim tarafımdan çok takdir ediliyor."',
        explanation:
          "Passiv cümlede fiil 'wird geschätzt' kullanılır ve ajan 'von mir' belirtilir.",
      },
    ],
  },
  {
    title: "Wechselpräpositionen",
    sentences: [
      {
        text: "Martin stellte seine Kaffeetasse auf den Tisch.",
        translation: "Martin kahve fincanını masanın üzerine koydu.",
        explanation:
          "'Auf' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere koyma).",
      },
      {
        text: "Die Unterlagen lagen bereits auf dem Tisch.",
        translation: "Belgeler zaten masanın üzerindeydi.",
        explanation:
          "'Auf' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde duruyor).",
      },
      {
        text: "Er hängte seinen Mantel an die Garderobe.",
        translation: "Paltosunu askılığa astı.",
        explanation:
          "'An' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere asma).",
      },
      {
        text: "Das Bild hing an der Wand neben seinem Schreibtisch.",
        translation: "Resim, masasının yanındaki duvarda asılıydı.",
        explanation:
          "'An' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde asılı).",
      },
      {
        text: "Die Kollegen setzten sich in den Konferenzraum.",
        translation: "Meslektaşlar konferans odasına oturdular.",
        explanation:
          "'In' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir yere girme).",
      },
      {
        text: "Sie saßen schon seit einer Stunde in dem Raum.",
        translation: "Bir saattir odada oturuyorlardı.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir yerde bulunma).",
      },
      {
        text: "Martin legte die Präsentation unter den Projektor.",
        translation: "Martin sunumu projektörün altına koydu.",
        explanation:
          "'Unter' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere koyma).",
      },
      {
        text: "Die wichtigen Dokumente befanden sich unter dem Stapel Papiere.",
        translation: "Önemli belgeler kağıt yığınının altındaydı.",
        explanation:
          "'Unter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde).",
      },
      {
        text: "Er klebte eine Notiz neben das Whiteboard.",
        translation: "Beyaz tahtanın yanına bir not yapıştırdı.",
        explanation:
          "'Neben' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere yapıştırma).",
      },
      {
        text: "Seine To-Do-Liste stand neben der Tastatur seines Computers.",
        translation: "Yapılacaklar listesi bilgisayar klavyesinin yanındaydı.",
        explanation:
          "'Neben' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde).",
      },
      {
        text: "Anna trat hinter den Vorhang.",
        translation: "Anna perdenin arkasına geçti.",
        explanation:
          "'Hinter' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir yere geçme).",
      },
      {
        text: "Die Sonne schien bereits hinter dem Vorhang hervor.",
        translation: "Güneş zaten perdenin arkasından parlıyordu.",
        explanation:
          "'Hinter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde).",
      },
    ],
  },
  {
    title: "Oft gebrauchte lokale Präpositionen",
    sentences: [
      {
        text: "Martin wohnte in Berlin.",
        translation: "Martin Berlin’de yaşıyordu.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü bir şehirde yaşamayı ifade eder (sabit konum).",
      },
      {
        text: "Er fuhr jeden Morgen mit der U-Bahn zur Arbeit.",
        translation: "Her sabah metroyla işe gidiyordu.",
        explanation:
          "'Zu' ismin -e haliyle (Akkusativ) kullanılır, çünkü bir hedefe yönelmeyi ifade eder (hareket).",
      },
      {
        text: "Das Büro befand sich im Zentrum der Stadt.",
        translation: "Ofis şehrin merkezindeydi.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Seine Wohnung lag in einem ruhigen Viertel am Stadtrand.",
        translation: "Dairesi şehrin kenarında sakin bir mahalledeydi.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder. 'Am' de konum belirtir.",
      },
      {
        text: "Vor dem Gebäude stand eine alte Eiche.",
        translation: "Binanın önünde eski bir meşe ağacı duruyordu.",
        explanation:
          "'Vor' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Hinter dem Haus gab es einen kleinen Park.",
        translation: "Evin arkasında küçük bir park vardı.",
        explanation:
          "'Hinter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Martins Arbeitsplatz war neben dem Fenster mit Blick auf die Spree.",
        translation:
          "Martin’in çalışma yeri, Spree’ye bakan pencerenin yanındaydı.",
        explanation:
          "'Neben' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die U-Bahn-Station lag unter dem Hauptplatz.",
        translation: "Metro istasyonu ana meydanın altındaydı.",
        explanation:
          "'Unter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Auf dem Dach des Gebäudes befand sich eine Terrasse für die Mitarbeiter.",
        translation: "Binanın çatısında çalışanlar için bir teras vardı.",
        explanation:
          "'Auf' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Eine Bäckerei war gegenüber dem Eingang.",
        translation: "Girişin karşısında bir fırın vardı.",
        explanation:
          "'Gegenüber' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Durch die großen Fenster strömte helles Licht in das Büro.",
        translation: "Büyük pencerelerden ofise parlak ışık akıyordu.",
        explanation:
          "'Durch' ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şey bir yerden geçiyor).",
      },
    ],
  },
  {
    title: "Weitere lokale Präpositionen",
    sentences: [
      {
        text: "Die Kollegen kamen aus verschiedenen Ländern.",
        translation: "Meslektaşlar farklı ülkelerden geliyordu.",
        explanation:
          "'Aus' ismin -de haliyle (Dativ) kullanılır, çünkü bir kaynaktan gelmeyi ifade eder.",
      },
      {
        text: "Das Meeting fand außerhalb des Büros statt.",
        translation: "Toplantı ofisin dışında gerçekleşti.",
        explanation:
          "'Außerhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Der neue Kunde kam von jenseits der Grenzen Europas.",
        translation: "Yeni müşteri Avrupa sınırlarının ötesinden geldi.",
        explanation:
          "'Von' ismin -de haliyle (Dativ) kullanılır, çünkü bir kaynaktan gelmeyi ifade eder.",
      },
      {
        text: "Innerhalb der Abteilung herrschte ein freundliches Klima.",
        translation: "Bölüm içinde dostça bir atmosfer vardı.",
        explanation:
          "'Innerhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Unterlagen lagen unterhalb des Monitors.",
        translation: "Belgeler monitörün altında duruyordu.",
        explanation:
          "'Unterhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Wasserflasche stand oberhalb der Heizung.",
        translation: "Su şişesi radyatörün üstünde duruyordu.",
        explanation:
          "'Oberhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Martin ging entlang der Spree spazieren.",
        translation: "Martin Spree boyunca yürüyüş yaptı.",
        explanation:
          "'Entlang' ismin -de haliyle (Dativ) kullanılır, çünkü bir yol boyunca hareketi ifade eder.",
      },
      {
        text: "Der Kurier wartete diesseits der Schranke.",
        translation: "Kurye bariyerin bu tarafında bekledi.",
        explanation:
          "'Diesseits' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Konkurrenz befand sich jenseits des Flusses.",
        translation: "Rakip nehrin ötesindeydi.",
        explanation:
          "'Jenseits' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Martin stellte sich inmitten seiner Kollegen für das Gruppenfoto.",
        translation:
          "Martin grup fotoğrafı için meslektaşlarının ortasına geçti.",
        explanation:
          "'Inmitten' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Blumen standen unweit des Eingangs.",
        translation: "Çiçekler girişten uzak olmayan bir yerde duruyordu.",
        explanation:
          "'Unweit' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Seitlich des Gebäudes befand sich der Parkplatz.",
        translation: "Binanın yanında otopark vardı.",
        explanation:
          "'Seitlich' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
    ],
  },
  {
    title: "Die wichtigsten temporalen Präpositionen",
    sentences: [
      {
        text: "Martin kam um acht Uhr ins Büro.",
        translation: "Martin saat sekizde ofise geldi.",
        explanation:
          "'Um' belirli bir zaman noktasını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Während der Mittagspause aß er meistens in der Kantine.",
        translation: "Öğle arasında genellikle kantinde yemek yerdi.",
        explanation:
          "'Während' bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er arbeitete von Montag bis Freitag.",
        translation: "Pazartesiden cumaya kadar çalışıyordu.",
        explanation:
          "'Von ... bis' bir zaman aralığını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Nach Feierabend ging er oft ins Fitnessstudio.",
        translation: "Mesai sonrası sık sık spor salonuna giderdi.",
        explanation:
          "'Nach' bir olayın sonrasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Vor dem Wochenende erledigte er alle wichtigen Aufgaben.",
        translation: "Hafta sonundan önce tüm önemli görevleri tamamlardı.",
        explanation:
          "'Vor' bir olayın öncesini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bei der letzten Präsentation war er sehr nervös gewesen.",
        translation: "Son sunumda çok gergindi.",
        explanation:
          "'Bei' bir olay sırasında kullanılan bir zaman edatıdır ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Seit seiner Beförderung hatte er mehr Verantwortung.",
        translation: "Terfisinden beri daha fazla sorumluluğu vardı.",
        explanation:
          "'Seit' bir zaman noktasından itibaren devam eden durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die neue Kampagne startete ab nächstem Monat.",
        translation: "Yeni kampanya önümüzdeki aydan itibaren başlayacaktı.",
        explanation:
          "'Ab' bir zaman noktasından itibaren başlar ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "In drei Wochen würde er seinen Jahresurlaub nehmen.",
        translation: "Üç hafta içinde yıllık iznini alacaktı.",
        explanation:
          "'In' gelecekteki bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Innerhalb von zwei Tagen musste der Bericht fertig sein.",
        translation: "İki gün içinde rapor hazır olmalıydı.",
        explanation:
          "'Innerhalb' belirli bir zaman dilimi içinde olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Systemic 'v' is not a valid keyword, but I assume you meant 'von' or 'vom' since they sound similar",
        translation: "Raporu gece yarısına kadar cevaplaması gerekiyordu.",
        explanation:
          "'Bis' bir zaman sınırını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
    ],
  },
  {
    title: "Weitere temporale Präpositionen",
    sentences: [
      {
        text: "Binnen einer Woche sollte das Projekt abgeschlossen sein.",
        translation: "Proje bir hafta içinde tamamlanmalıydı.",
        explanation:
          "'Binnen' belirli bir zaman dilimi içinde tamamlanmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Während des Meetings kamen viele neue Ideen auf.",
        translation: "Toplantı sırasında birçok yeni fikir ortaya çıktı.",
        explanation:
          "'Während' bir olay sırasında olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Frist lief innerhalb von drei Tagen ab.",
        translation: "Süre üç gün içinde doldu.",
        explanation:
          "'Innerhalb' belirli bir zaman dilimi içinde olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Außerhalb der Arbeitszeiten war Martin selten erreichbar.",
        translation: "Çalışma saatleri dışında Martin’e nadiren ulaşılırdı.",
        explanation:
          "'Außerhalb' belirli bir zaman dilimi dışında olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Konferenz fand gegen Ende des Monats statt.",
        translation: "Konferans ayın sonuna doğru gerçekleşti.",
        explanation:
          "'Gegen' bir zaman dilimine yakın olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er hatte die Präsentation längst vor Beginn der Veranstaltung fertiggestellt.",
        translation: "Sunumu etkinliğin başlamasından çok önce tamamlamıştı.",
        explanation:
          "'Vor' bir olayın öncesini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin blieb über Nacht im Büro, um die Deadline einzuhalten.",
        translation:
          "Martin son teslim tarihine uymak için gece boyunca ofiste kaldı.",
        explanation:
          "'Über' bir zaman dilimini kapsayan durumu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Verhandlungen zogen sich durch den ganzen Tag.",
        translation: "Müzakereler bütün gün boyunca sürdü.",
        explanation:
          "'Durch' bir zaman dilimini kapsayan durumu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Nach einem anstrengenden Arbeitstag entspannte er sich zu Hause.",
        translation: "Yorucu bir iş gününden sonra evde dinlendi.",
        explanation:
          "'Nach' bir olayın sonrasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Zwischen den Terminen blieb ihm kaum Zeit für eine Pause.",
        translation:
          "Randevular arasında mola için neredeyse hiç vakti kalmadı.",
        explanation:
          "'Zwischen' iki zaman noktası arasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Seit seiner Ankunft in Berlin hatte sich viel verändert.",
        translation: "Berlin’e geldiğinden beri çok şey değişmişti.",
        explanation:
          "'Seit' bir zaman noktasından itibaren devam eden durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Kausale Präpositionen",
    sentences: [
      {
        text: "Wegen des schlechten Wetters nahm Martin heute ein Taxi.",
        translation: "Kötü hava nedeniyle Martin bugün taksi aldı.",
        explanation:
          "'Wegen' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Aufgrund der vielen Arbeit musste er Überstunden machen.",
        translation: "Yoğun iş yükü nedeniyle fazla mesai yapması gerekti.",
        explanation:
          "'Aufgrund' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Durch seine Hartnäckigkeit gewann er den wichtigen Kunden.",
        translation: "İnatçılığı sayesinde önemli bir müşteri kazandı.",
        explanation:
          "'Durch' bir aracı veya nedeni ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Dank Annas Hilfe konnte er das Projekt rechtzeitig abschließen.",
        translation:
          "Anna’nın yardımı sayesinde projeyi zamanında tamamlayabildi.",
        explanation:
          "'Dank' bir teşekkürü veya nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Infolge seiner guten Leistungen bekam er eine Gehaltserhöhung.",
        translation: "İyi performansı sonucunda maaş zammı aldı.",
        explanation:
          "'Infolge' bir sonucu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Um des Erfolges willen arbeitete das ganze Team am Wochenende.",
        translation: "Başarı için tüm ekip hafta sonu çalıştı.",
        explanation:
          "'Um ... willen' bir amacı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Aus Liebe zum Detail überprüfte Martin jedes Dokument mehrmals.",
        translation:
          "Detaylara olan sevgisinden dolayı Martin her belgeyi birkaç kez kontrol etti.",
        explanation:
          "'Aus' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Vor lauter Begeisterung vergaß er die Zeit.",
        translation: "Aşırı heyecanından zamanı unuttu.",
        explanation:
          "'Vor lauter' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Trotz der Schwierigkeiten gab er nicht auf.",
        translation: "Zorluklara rağmen pes etmedi.",
        explanation:
          "'Trotz' bir engeli ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Angesichts der Herausforderungen blieb er optimistisch.",
        translation: "Zorluklar karşısında iyimser kaldı.",
        explanation:
          "'Angesichts' bir durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Mangels besserer Alternativen entschied er sich für diesen Plan.",
        translation:
          "Daha iyi alternatiflerin olmaması nedeniyle bu planı seçti.",
        explanation:
          "'Mangels' bir eksikliği ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Präpositionen der Redewiedergabe und Referenz",
    sentences: [
      {
        text: "Laut dem Bericht war die Kampagne ein voller Erfolg.",
        translation: "Rapora göre kampanya büyük bir başarıydı.",
        explanation:
          "'Laut' bir kaynağa referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Zufolge der Marktanalyse stieg der Umsatz um 15%.",
        translation: "Pazar analizine göre ciro %15 arttı.",
        explanation:
          "'Zufolge' bir kaynağa referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Gemäß den Richtlinien musste jedes Dokument archiviert werden.",
        translation: "Yönergelere göre her belge arşivlenmeliydi.",
        explanation:
          "'Gemäß' bir kurala referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Nach Aussage des Kunden war er mit dem Ergebnis sehr zufrieden.",
        translation: "Müşterinin ifadesine göre sonuçtan çok memnundu.",
        explanation:
          "'Nach Aussage' bir beyana referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Dem Chef zufolge würde es bald eine Umstrukturierung geben.",
        translation: "Patrona göre yakında bir yeniden yapılandırma olacaktı.",
        explanation:
          "'Zufolge' bir kaynağa referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Entsprechend der Vereinbarung wurde die Zahlung bereits veranlasst.",
        translation: "Anlaşmaya uygun olarak ödeme zaten başlatılmıştı.",
        explanation:
          "'Entsprechend' bir anlaşmaya referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin handelte nach bestem Wissen und Gewissen.",
        translation: "Martin en iyi bildiği ve vicdanına göre hareket etti.",
        explanation:
          "'Nach' bir kritere referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Den Umfrageergebnissen nach zu urteilen, kam das Produkt gut an.",
        translation: "Anket sonuçlarına bakılırsa, ürün iyi karşılandı.",
        explanation:
          "'Nach' bir sonuca referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "In Bezug auf die Qualität gab es keine Kompromisse.",
        translation: "Kalite konusunda hiçbir taviz verilmedi.",
        explanation:
          "'In Bezug auf' bir konuya referans verir ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Hinsichtlich der Kosten mussten sie noch verhandeln.",
        translation: "Maliyetler konusunda hâlâ müzakere etmeleri gerekiyordu.",
        explanation:
          "'Hinsichtlich' bir konuya referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bezüglich seiner nächsten Aufgabe hatte Martin schon einige Ideen.",
        translation:
          "Bir sonraki göreviyle ilgili Martin’in zaten bazı fikirleri vardı.",
        explanation:
          "'Bezüglich' bir konuya referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Präpositionen mit verschiedenen Positionen",
    sentences: [
      {
        text: "Den ganzen Tag über arbeitete Martin an dem Projekt.",
        translation: "Bütün gün boyunca Martin proje üzerinde çalıştı.",
        explanation:
          "'Über' bir zaman dilimini kapsar ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Kollegen saßen um den Tisch herum.",
        translation: "Meslektaşlar masanın etrafında oturuyordu.",
        explanation:
          "'Um ... herum' bir çevreyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Der Fehler lag an Martin, ihm war das klar.",
        translation: "Hata Martin’dendi, bu ona açıktı.",
        explanation:
          "'An' bir sorumluluğu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Notizen lagen irgendwo zwischen den Unterlagen.",
        translation: "Notlar belgelerin arasında bir yerdeydi.",
        explanation:
          "'Zwischen' iki şey arasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Hund des Nachbarn lief an Martin vorbei.",
        translation: "Komşunun köpeği Martin’in yanından geçti.",
        explanation:
          "'An ... vorbei' bir yerden geçmeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Büro lag der Bushaltestelle gegenüber.",
        translation: "Ofis otobüs durağının karşısındaydı.",
        explanation:
          "'Gegenüber' bir konumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Fluss floss durch die Stadt hindurch.",
        translation: "Nehir şehir boyunca aktı.",
        explanation:
          "'Durch ... hindurch' bir yerden geçmeyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin stand dem Vorschlag positiv gegenüber.",
        translation: "Martin öneriye olumlu yaklaştı.",
        explanation:
          "'Gegenüber' bir tutumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Problem lag ihm schwer auf dem Herzen.",
        translation: "Sorun onun kalbinde ağır bir yük gibiydi.",
        explanation:
          "'Auf' bir yükü ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Tunnel führt unter dem Fluss hindurch.",
        translation: "Tünel nehrin altından geçiyor.",
        explanation:
          "'Unter ... hindurch' bir yerden geçmeyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Veränderungen traten von heute an in Kraft.",
        translation: "Değişiklikler bugünden itibaren yürürlüğe girdi.",
        explanation:
          "'Von ... an' bir başlangıç noktasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Bild hing schief an der Wand entlang.",
        translation: "Resim duvarda yamuk asılıydı.",
        explanation:
          "'An ... entlang' bir yüzey boyunca olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: '"Sprechende" Präpositionen',
    sentences: [
      {
        text: "Martin sprach mit Anna über das neue Projekt.",
        translation: "Martin, Anna ile yeni proje hakkında konuştu.",
        explanation:
          "'Mit' bir konuşma partnerini, 'über' konuşma konusunu ifade eder ve sırasıyla ismin -de haliyle (Dativ) ve -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er diskutierte mit seinem Chef über die Strategie.",
        translation: "Patronuyla strateji hakkında tartıştı.",
        explanation:
          "'Mit' bir tartışma partnerini, 'über' tartışma konusunu ifade eder.",
      },
      {
        text: "Die Kollegen freuten sich auf das Wochenende.",
        translation: "Meslektaşlar hafta sonunu iple çekiyordu.",
        explanation:
          "'Auf' bir beklentiyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin dachte oft an seine Heimat.",
        translation: "Martin sık sık memleketini düşünüyordu.",
        explanation:
          "'An' bir düşünceyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er hoffte auf einen baldigen Urlaub.",
        translation: "Yakın bir tatil umuyordu.",
        explanation:
          "'Auf' bir umudu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Das Team arbeitete an einer innovativen Lösung.",
        translation: "Ekip yenilikçi bir çözüm üzerinde çalışıyordu.",
        explanation:
          "'An' bir çalışma konusunu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Chef bestand auf pünktlicher Abgabe.",
        translation: "Patron zamanında teslimatta ısrar etti.",
        explanation:
          "'Auf' bir talebi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Abteilung verfügte über ausreichende Mittel.",
        translation: "Bölüm yeterli kaynaklara sahipti.",
        explanation:
          "'Über' bir varlığı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin wartete auf die Rückmeldung des Kunden.",
        translation: "Martin müşterinin geri dönüşünü bekliyordu.",
        explanation:
          "'Auf' bir beklentiyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Anna fragte nach dem Termin.",
        translation: "Anna randevuyu sordu.",
        explanation:
          "'Nach' bir şeyi sormayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin gewöhnte sich an das Leben in Berlin.",
        translation: "Martin Berlin’deki yaşama alıştı.",
        explanation:
          "'An' bir alışkanlığı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er erinnerte sich an seinen ersten Arbeitstag.",
        translation: "İlk iş gününü hatırladı.",
        explanation:
          "'An' bir hatırayı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
    ],
  },
  {
    title: "Bedeutungen von *in, an, auf, über, unter, vor*",
    sentences: [
      {
        text: "Martin lebte in Berlin, in einer kleinen Wohnung.",
        translation: "Martin Berlin’de, küçük bir dairede yaşıyordu.",
        explanation:
          "'In' bir şehirde veya mekânda olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er war in bester Stimmung.",
        translation: "En iyi ruh halindeydi.",
        explanation:
          "'In' bir durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Stadt befand sich in einer wirtschaftlichen Blütezeit.",
        translation: "Şehir ekonomik bir refah dönemindeydi.",
        explanation:
          "'In' bir dönemi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Anna saß an ihrem Schreibtisch.",
        translation: "Anna masasında oturuyordu.",
        explanation:
          "'An' bir yüzeyde konumlanmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Bild hing an der Wand.",
        translation: "Resim duvarda asılıydı.",
        explanation:
          "'An' bir yüzeyde asılı olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin zweifelte an der Entscheidung.",
        translation: "Martin karardan şüphe ediyordu.",
        explanation:
          "'An' bir şüpheyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Unterlagen lagen auf dem Tisch.",
        translation: "Belgeler masanın üzerindeydi.",
        explanation:
          "'Auf' bir yüzeyde olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er konzentrierte sich auf seine Arbeit.",
        translation: "İşine odaklandı.",
        explanation:
          "'Auf' bir odaklanmayı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin war auf einer Dienstreise.",
        translation: "Martin bir iş gezisindeydi.",
        explanation:
          "'Auf' bir etkinliği ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Sie sprachen über ihre Zukunftspläne.",
        translation: "Gelecek planları hakkında konuştular.",
        explanation:
          "'Über' bir konuyu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin machte sich Gedanken über das nächste Meeting.",
        translation: "Martin bir sonraki toplantı hakkında düşünüyordu.",
        explanation:
          "'Über' bir düşünceyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Der Artikel erschien über Nacht in der Zeitung.",
        translation: "Makale gece boyunca gazetede yayınlandı.",
        explanation:
          "'Über' bir zaman dilimini ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Das Budget lag unter dem geplanten Betrag.",
        translation: "Bütçe planlanan miktarın altındaydı.",
        explanation:
          "'Unter' bir sınırın altında olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Anna arbeitete unter Martins Leitung.",
        translation: "Anna Martin’in yönetimi altında çalışıyordu.",
        explanation:
          "'Unter' bir hiyerarşiyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er stand unter Zeitdruck.",
        translation: "Zaman baskısı altındaydı.",
        explanation:
          "'Unter' bir baskıyı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin kam vor Mittag ins Büro.",
        translation: "Martin öğleden önce ofise geldi.",
        explanation:
          "'Vor' bir zaman öncesini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er stellte sich vor seine Kollegen.",
        translation: "Meslektaşlarının önüne geçti.",
        explanation:
          "'Vor' bir konumu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Präsentation fand vor einer Woche statt.",
        translation: "Sunum bir hafta önce gerçekleşti.",
        explanation:
          "'Vor' bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Bedeutungen von *um, bei, von, nach, aus, mit, zu*",
    sentences: [
      {
        text: "Das Meeting begann um 14 Uhr.",
        translation: "Toplantı saat 14’te başladı.",
        explanation:
          "'Um' belirli bir zaman noktasını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Es handelte sich um ein wichtiges Projekt.",
        translation: "Bu önemli bir projeydi.",
        explanation:
          "'Um' bir konuyu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin kümmerte sich um die Details.",
        translation: "Martin detaylarla ilgilendi.",
        explanation:
          "'Um' bir ilgilenmeyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er arbeitete bei einer internationalen Firma.",
        translation: "Uluslararası bir şirkette çalışıyordu.",
        explanation:
          "'Bei' bir iş yerini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bei Regen nahm er einen Regenschirm mit.",
        translation: "Yağmurda şemsiye aldı.",
        explanation:
          "'Bei' bir durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bei genauerem Hinsehen entdeckte er den Fehler.",
        translation: "Daha yakından bakınca hatayı keşfetti.",
        explanation:
          "'Bei' bir etkinlik sırasında olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Büro war nicht weit von seiner Wohnung entfernt.",
        translation: "Ofis dairesinden uzak değildi.",
        explanation:
          "'Von' bir mesafeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er kam gerade von einem Kundentermin.",
        translation: "Bir müşteri görüşmesinden yeni gelmişti.",
        explanation:
          "'Von' bir kaynaktan gelmeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Brief war von seinem Chef.",
        translation: "Mektup patronundandı.",
        explanation:
          "'Von' bir kaynağı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Nach der Arbeit ging er nach Hause.",
        translation: "İşten sonra eve gitti.",
        explanation:
          "'Nach' bir hedefi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er sehnte sich nach einem Urlaub.",
        translation: "Bir tatil özlemi çekiyordu.",
        explanation:
          "'Nach' bir özlemi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Nach seiner Meinung war der Plan gut durchdacht.",
        translation: "Onun fikrine göre plan iyi düşünülmüştü.",
        explanation:
          "'Nach' bir görüşü ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Material bestand aus Recyclingpapier.",
        translation: "Malzeme geri dönüştürülmüş kağıttan yapılmıştı.",
        explanation:
          "'Aus' bir malzemeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Aus Erfahrung wusste er, dass Geduld wichtig war.",
        translation: "Tecrübesinden sabrın önemli olduğunu biliyordu.",
        explanation:
          "'Aus' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin kam aus Überzeugung pünktlich.",
        translation: "Martin inancından dolayı dakikti.",
        explanation:
          "'Aus' bir motivasyonu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er fuhr mit der U-Bahn zur Arbeit.",
        translation: "Metroyla işe gitti.",
        explanation:
          "'Mit' bir aracı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Mit großer Sorgfalt prüfte er die Dokumente.",
        translation: "Büyük bir özenle belgeleri kontrol etti.",
        explanation:
          "'Mit' bir tarzı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin war mit dem Ergebnis zufrieden.",
        translation: "Martin sonuçtan memnundu.",
        explanation:
          "'Mit' bir memnuniyeti ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er ging zu seinem Arbeitsplatz.",
        translation: "İş yerine gitti.",
        explanation:
          "'Zu' bir hedefi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Kollegen gratulierten ihm zu seinem Erfolg.",
        translation: "Meslektaşları başarısından dolayı onu tebrik etti.",
        explanation:
          "'Zu' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Projekt neigte sich zu Ende.",
        translation: "Proje sona eriyordu.",
        explanation:
          "'Zu' bir sonucu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
    ],
  },
  {
    title: "Partnerseite 4: Prepositions – Game: 5 in a row",
    sentences: [
      {
        text: 'In der Mittagspause schlugen Anna und Martin ein Spiel vor: "5 in einer Reihe" mit Präpositionen.',
        translation:
          'Öğle arasında Anna ve Martin bir oyun önerdi: Edatlarla "5’li sıra".',
        explanation:
          "Fiil 'schlugen' (önerdi) ikinci konumdadır. Nesne 'ein Spiel' fiilden sonra gelir.",
      },
      {
        text: 'Anna begann: "Ich komme aus Italien."',
        translation: 'Anna başladı: "İtalya’dan geliyorum."',
        explanation:
          "'Aus' bir kaynaktan gelmeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin folgte: "Mein Büro liegt neben dem Aufzug."',
        translation: 'Martin devam etti: "Ofisim asansörün yanında."',
        explanation:
          "'Neben' bir konumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Die Konferenz findet in zwei Wochen statt."',
        translation: 'Anna: "Konferans iki hafta içinde gerçekleşecek."',
        explanation:
          "'In' bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Wegen des Regens nehme ich heute ein Taxi."',
        translation: 'Martin: "Yağmur nedeniyle bugün taksi alıyorum."',
        explanation:
          "'Wegen' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Der Chef steht hinter unserer Entscheidung."',
        translation: 'Anna: "Patron kararımızın arkasında."',
        explanation:
          "'Hinter' bir desteği ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: '"Das sind fünf richtige Sätze! Du gewinnst diese Runde," sagte Martin anerkennend.',
        translation:
          '"Beş doğru cümle! Bu turu kazandın," dedi Martin takdirle.',
        explanation:
          "Fiil 'sagte' (dedi) ikinci konumdadır. Zarf 'anerkennend' fiilden sonra gelir.",
      },
      {
        text: 'Nun war Martin an der Reihe: "Die Unterlagen liegen auf meinem Schreibtisch."',
        translation: 'Şimdi sıra Martin’deydi: "Belgeler masamın üzerinde."',
        explanation:
          "'Auf' bir yüzeyde olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Sie arbeitet seit drei Jahren bei unserer Firma."',
        translation: 'Anna: "Üç yıldır firmamızda çalışıyor."',
        explanation:
          "'Bei' bir iş yerini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Trotz der Schwierigkeiten haben wir das Projekt abgeschlossen."',
        translation: 'Martin: "Zorluklara rağmen projeyi tamamladık."',
        explanation:
          "'Trotz' bir engeli ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Der Fehler liegt an der Software."',
        translation: 'Anna: "Hata yazılımdan kaynaklanıyor."',
        explanation:
          "'An' bir sorumluluğu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Nach dem Meeting gehen wir zusammen essen."',
        translation: 'Martin: "Toplantıdan sonra birlikte yemeğe gidiyoruz."',
        explanation:
          "'Nach' bir olayın sonrasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: '"Perfekt! Fünf in einer Reihe," jubelte Anna.',
        translation: '"Mükemmel! Beşli sıra," diye sevindi Anna.',
        explanation:
          "Fiil 'jubelte' (sevindi) ikinci konumdadır. Nesne 'Fünf in einer Reihe' fiilden sonra gelir.",
      },
      {
        text: '"Jetzt wird es schwieriger. Wir müssen Präpositionen mit Akkusativ und Dativ korrekt unterscheiden."',
        translation:
          '"Şimdi daha zor olacak. Akkusativ ve Dativ edatlarını doğru ayırt etmeliyiz."',
        explanation:
          "Fiil 'wird' ikinci konumdadır. Nesne 'Präpositionen' fiilden sonra gelir.",
      },
      {
        text: 'Martin nickte: "Ich stelle die Pflanze auf den Tisch."',
        translation:
          'Martin başını salladı: "Bitkiyi masanın üzerine koyuyorum."',
        explanation:
          "'Auf' hareket ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: 'Anna: "Die Blume steht auf dem Tisch."',
        translation: 'Anna: "Çiçek masanın üzerinde duruyor."',
        explanation:
          "'Auf' sabit konum ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Ich hänge das Bild an die Wand."',
        translation: 'Martin: "Resmi duvara asıyorum."',
        explanation:
          "'An' hareket ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: 'Anna: "Das Foto hängt an der Wand."',
        translation: 'Anna: "Fotoğraf duvarda asılı."',
        explanation:
          "'An' sabit konum ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Wir stellen die Stühle in den Konferenzraum."',
        translation: 'Martin: "Sandalyeleri konferans odasına koyuyoruz."',
        explanation:
          "'In' hareket ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: '"Sehr gut!", lachte Anna.',
        translation: '"Çok iyi!" diye güldü Anna.',
        explanation: "Fiil 'lachte' (güldü) ikinci konumdadır.",
      },
      {
        text: '"Du beherrschst die Wechselpräpositionen perfekt. Dieses Spiel macht nicht nur Spaß, sondern verbessert auch unsere Sprachkenntnisse."',
        translation:
          '"Wechselpräpositionen’i mükemmel kullanıyorsun. Bu oyun sadece eğlenceli değil, aynı zamanda dil becerilerimizi de geliştiriyor."',
        explanation:
          "Fiil 'macht' (yapıyor) ikinci konumdadır. Nesne 'Spaß' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "1. Verben mit Akkusativ und Dativ",
    sentences: [
      {
        text: "Lukas saß auf einer Bank am Ufer des Bodensees.",
        translation: "Lukas Bodensee kıyısındaki bir bankta oturuyordu.",
        explanation:
          "Fiil 'saß' (oturuyordu) ikinci konumdadır. 'Auf einer Bank' ve 'am Ufer des Bodensees' yer zarflarıdır, dativ ile kullanılır.",
      },
      {
        text: "Er beobachtete die Möwen.",
        translation: "Martıları gözlemledi.",
        explanation:
          "Fiil 'beobachtete' (gözlemledi) ikinci konumdadır. 'Die Möwen' akkusativ nesnesidir, doğrudan etkilenen nesneyi belirtir.",
      },
      {
        text: "Der kühle Herbstwind strich ihm durch das Haar.",
        translation: "Serin sonbahar rüzgarı saçlarından geçti.",
        explanation:
          "Fiil 'strich' (geçti) ikinci konumdadır. 'Ihm' dativ nesnesidir, 'durch das Haar' yer zarfıdır.",
      },
      {
        text: "Er sah dem Sonnenuntergang zu.",
        translation: "Güneş batışını izledi.",
        explanation:
          "Fiil 'sah' (izledi) ikinci konumdadır. 'Dem Sonnenuntergang' dativ nesnesidir, 'zusehen' fiili dativ ile kullanılır.",
      },
      {
        text: "Er nahm ein Buch aus seiner Tasche.",
        translation: "Çantasından bir kitap aldı.",
        explanation:
          "Fiil 'nahm' (aldı) ikinci konumdadır. 'Ein Buch' akkusativ nesnesidir, 'aus seiner Tasche' yer zarfıdır.",
      },
      {
        text: "Er hatte seinem Freund Marcus dieses Buch empfohlen.",
        translation: "Arkadaşı Marcus'a bu kitabı önermişti.",
        explanation:
          "Fiil 'hatte' (yardımcı fiil) ikinci konumdadır, 'empfohlen' geçmiş zaman formunu oluşturur. 'Seinem Freund Marcus' dativ, 'dieses Buch' akkusativ nesnesidir.",
      },
      {
        text: "Marcus zeigte kein Interesse daran.",
        translation: "Marcus buna ilgi göstermedi.",
        explanation:
          "Fiil 'zeigte' (göstermedi) ikinci konumdadır. 'Kein Interesse' akkusativ nesnesidir, 'daran' dativ ile kullanılan bir zamirdir.",
      },
      {
        text: "Ich kaufe dir ein Exemplar zum Geburtstag.",
        translation: "Sana doğum gününde bir kopya alacağım.",
        explanation:
          "Fiil 'kaufe' (alacağım) ikinci konumdadır. 'Dir' dativ, 'ein Exemplar' akkusativ nesnesidir.",
      },
      {
        text: "Er legte dem alten Mann seine Jacke über die Schultern.",
        translation: "Yaşlı adama ceketini omuzlarına örttü.",
        explanation:
          "Fiil 'legte' (örttü) ikinci konumdadır. 'Dem alten Mann' dativ, 'seine Jacke' akkusativ nesnesidir.",
      },
      {
        text: "Der Fremde schenkte ihm ein dankbares Lächeln.",
        translation: "Yabancı ona minnettar bir gülümseme sundu.",
        explanation:
          "Fiil 'schenkte' (sundu) ikinci konumdadır. 'Ihm' dativ, 'ein dankbares Lächeln' akkusativ nesnesidir.",
      },
      {
        text: "Er stellte sich als Professor Eichendorff vor.",
        translation: "Kendisini Profesör Eichendorff olarak tanıttı.",
        explanation:
          "Fiil 'stellte' (tanıttı) ikinci konumdadır. 'Sich' dönüşlü zamir, 'als Professor Eichendorff' tanıtım ifadesidir.",
      },
    ],
  },
  {
    title: "2. Verben mit Genitiv",
    sentences: [
      {
        text: "Er annahm sich des kulturellen Erbes der Region.",
        translation: "Bölgenin kültürel mirasını üstlendi.",
        explanation:
          "Fiil 'annahm' (üstlendi) ikinci konumdadır. 'Des kulturellen Erbes' genitiv nesnesidir, 'sich annehmen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Ich entsinne mich des Tages noch genau.",
        translation: "O günü hâlâ tam olarak hatırlıyorum.",
        explanation:
          "Fiil 'entsinne' (hatırlıyorum) ikinci konumdadır. 'Des Tages' genitiv nesnesidir, 'sich entsinnen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Der Professor erinnerte sich der vergangenen Zeiten.",
        translation: "Profesör geçmiş zamanları hatırladı.",
        explanation:
          "Fiil 'erinnerte' (hatırladı) ikinci konumdadır. 'Der vergangenen Zeiten' genitiv nesnesidir, 'sich erinnern' fiili genitiv ile kullanılır.",
      },
      {
        text: "Diese Geschichten entbehrten nicht des dramatischen Elements.",
        translation: "Bu hikayeler dramatik unsurdan yoksun değildi.",
        explanation:
          "Fiil 'entbehrten' (yoksun değildi) ikinci konumdadır. 'Des dramatischen Elements' genitiv nesnesidir, 'entbehren' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er bediente sich einer bildhaften Sprache.",
        translation: "Betimleyici bir dil kullandı.",
        explanation:
          "Fiil 'bediente' (kullandı) ikinci konumdadır. 'Einer bildhaften Sprache' genitiv nesnesidir, 'sich bedienen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Man beschuldigte mich des Diebstahls wertvoller Dokumente.",
        translation: "Beni değerli belgelerin hırsızlığıyla suçladılar.",
        explanation:
          "Fiil 'beschuldigte' (suçladı) ikinci konumdadır. 'Des Diebstahls' genitiv nesnesidir, 'beschuldigen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er schämte sich seines damaligen Leichtsinns.",
        translation: "O zamanki hafifliğinden utandı.",
        explanation:
          "Fiil 'schämte' (utandı) ikinci konumdadır. 'Seines damaligen Leichtsinns' genitiv nesnesidir, 'sich schämen' fiili genitiv ile kullanılır.",
      },
    ],
  },
  {
    title: "3. Verben, Nomen und Adjektive mit Präpositionen",
    sentences: [
      {
        text: "Lukas war fasziniert von der Geschichte des Professors.",
        translation: "Lukas profesörün hikayesinden büyülenmişti.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von der Geschichte' dativ ile kullanılan prepozisyonel ifadedir, 'fasziniert' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er dachte intensiv über dessen Worte nach.",
        translation: "Onun sözleri üzerine yoğun bir şekilde düşündü.",
        explanation:
          "Fiil 'dachte' (düşündü) ikinci konumdadır. 'Über dessen Worte' akkusativ ile kullanılan prepozisyonel ifadedir, 'nachdenken' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Er war interessiert an historischen Mysterien.",
        translation: "Tarihi gizemlere ilgi duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'An historischen Mysterien' dativ ile kullanılan prepozisyonel ifadedir, 'interessiert' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er sehnte sich nach einem Abenteuer.",
        translation: "Bir macera özlemi çekiyordu.",
        explanation:
          "Fiil 'sehnte' (özlem çekiyordu) ikinci konumdadır. 'Nach einem Abenteuer' dativ ile kullanılan prepozisyonel ifadedir, 'sich sehnen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Der Professor war reich an Erfahrungen.",
        translation: "Profesör deneyim açısından zengindi.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'An Erfahrungen' dativ ile kullanılan prepozisyonel ifadedir, 'reich' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er war bekannt für seine archäologischen Entdeckungen.",
        translation: "Arkeolojik keşifleriyle tanınıyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für seine archäologischen Entdeckungen' dativ ile kullanılan prepozisyonel ifadedir, 'bekannt' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich arbeite an einem Buch über die geheimen Tunnel.",
        translation: "Gizli tüneller hakkında bir kitap üzerinde çalışıyorum.",
        explanation:
          "Fiil 'arbeite' (çalışıyorum) ikinci konumdadır. 'An einem Buch' dativ ile, 'über die geheimen Tunnel' akkusativ ile kullanılan prepozisyonel ifadelerdir.",
      },
      {
        text: "Er war stolz auf seine Forschung.",
        translation: "Araştırmasıyla gurur duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf seine Forschung' akkusativ ile kullanılan prepozisyonel ifadedir, 'stolz' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Er war überzeugt von seiner Theorie.",
        translation: "Teorisinden emindi.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von seiner Theorie' dativ ile kullanılan prepozisyonel ifadedir, 'überzeugt' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er war bereit, sie mit Lukas zu teilen.",
        translation: "Bunu Lukas ile paylaşmaya hazırdı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit Lukas' dativ ile kullanılan prepozisyonel ifadedir, 'teilen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Lukas war begierig nach Wissen.",
        translation: "Lukas bilgiye açtı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Nach Wissen' dativ ile kullanılan prepozisyonel ifadedir, 'begierig' sıfatı 'nach' ile dativ alır.",
      },
      {
        text: "Sind Sie abhängig von finanzieller Unterstützung?",
        translation: "Mali desteğe bağımlı mısınız?",
        explanation:
          "Fiil 'sind' ikinci konumdadır. 'Von finanzieller Unterstützung' dativ ile kullanılan prepozisyonel ifadedir, 'abhängig' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Ich bin dankbar für jede Hilfe.",
        translation: "Her türlü yardım için minnettarım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Für jede Hilfe' dativ ile kullanılan prepozisyonel ifadedir, 'dankbar' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich bin nicht angewiesen auf große Geldgeber.",
        translation: "Büyük bağışçılara bağımlı değilim.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf große Geldgeber' akkusativ ile kullanılan prepozisyonel ifadedir, 'angewiesen' sıfatı 'auf' ile akkusativ alır.",
      },
    ],
  },
  {
    title:
      "4. Verben, Adjektive und Nomen mit festen Präpositionen + Akkusativ",
    sentences: [
      {
        text: "Der Professor deutete auf ein altes Gebäude.",
        translation: "Profesör eski bir binayı işaret etti.",
        explanation:
          "Fiil 'deutete' (işaret etti) ikinci konumdadır. 'Auf ein altes Gebäude' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich konzentriere mich auf die architektonischen Details.",
        translation: "Mimari detaylara odaklanıyorum.",
        explanation:
          "Fiil 'konzentriere' (odaklanıyorum) ikinci konumdadır. 'Auf die architektonischen Details' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich konzentrieren' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Lukas war erstaunt über die Präzision.",
        translation: "Lukas hassasiyete şaşırmıştı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Über die Präzision' akkusativ ile kullanılan prepozisyonel ifadedir, 'erstaunt' sıfatı 'über' ile akkusativ alır.",
      },
      {
        text: "Er argumentierte gegen die vorherrschende Meinung.",
        translation: "Hâkim görüşe karşı savundu.",
        explanation:
          "Fiil 'argumentierte' (savundu) ikinci konumdadır. 'Gegen die vorherrschende Meinung' akkusativ ile kullanılan prepozisyonel ifadedir, 'argumentieren' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Hinweise deuteten auf einen unterirdischen Gang.",
        translation: "İpuçları yeraltı geçidine işaret ediyordu.",
        explanation:
          "Fiil 'deuteten' (işaret ediyordu) ikinci konumdadır. 'Auf einen unterirdischen Gang' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich bin spezialisiert auf mittelalterliche Bauwerke.",
        translation: "Ortaçağ yapılarında uzmanım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf mittelalterliche Bauwerke' akkusativ ile kullanılan prepozisyonel ifadedir, 'spezialisiert' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich habe mich durch die Archive gearbeitet.",
        translation: "Arşivlerde çalıştım.",
        explanation:
          "Fiil 'habe' ikinci konumdadır, 'gearbeitet' geçmiş zaman formunu oluşturur. 'Durch die Archive' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich arbeiten' fiili 'durch' ile akkusativ alır.",
      },
      {
        text: "Lukas lehnte sich gegen den Baum.",
        translation: "Lukas ağaca yaslandı.",
        explanation:
          "Fiil 'lehnte' (yaslandı) ikinci konumdadır. 'Gegen den Baum' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich lehnen' fiili 'gegen' ile akkusativ alır.",
      },
    ],
  },
  {
    title: "5. Verben, Adjektive und Nomen mit festen Präpositionen + Dativ",
    sentences: [
      {
        text: "Er erzählte von seinen Entdeckungen.",
        translation: "Keşiflerinden bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) ikinci konumdadır. 'Von seinen Entdeckungen' dativ ile kullanılan prepozisyonel ifadedir, 'erzählen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Ich träume von einem durchschlagenden Beweis.",
        translation: "Kesin bir kanıt hayali kuruyorum.",
        explanation:
          "Fiil 'träume' (hayal kuruyorum) ikinci konumdadır. 'Von einem durchschlagenden Beweis' dativ ile kullanılan prepozisyonel ifadedir, 'träumen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Er sprach mit einer Überzeugung.",
        translation: "Bir inançla konuştu.",
        explanation:
          "Fiil 'sprach' (konuştu) ikinci konumdadır. 'Mit einer Überzeugung' dativ ile kullanılan prepozisyonel ifadedir, 'sprechen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Lukas half bei den Vorbereitungen.",
        translation: "Lukas hazırlıklarda yardımcı oldu.",
        explanation:
          "Fiil 'half' (yardımcı oldu) ikinci konumdadır. 'Bei den Vorbereitungen' dativ ile kullanılan prepozisyonel ifadedir, 'helfen' fiili 'bei' ile dativ alır.",
      },
      {
        text: "Er war zufrieden mit dem Plan.",
        translation: "Plandan memnundu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit dem Plan' dativ ile kullanılan prepozisyonel ifadedir, 'zufrieden' sıfatı 'mit' ile dativ alır.",
      },
      {
        text: "Er freute sich auf das morgige Abenteuer.",
        translation: "Yarınki maceraya sevindi.",
        explanation:
          "Fiil 'freute' (sevindi) ikinci konumdadır. 'Auf das morgige Abenteuer' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich freuen' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Der Professor warnte ihn vor den Gefahren.",
        translation: "Profesör onu tehlikelere karşı uyardı.",
        explanation:
          "Fiil 'warnte' (uyardı) ikinci konumdadır. 'Vor den Gefahren' dativ ile kullanılan prepozisyonel ifadedir, 'warnen' fiili 'vor' ile dativ alır.",
      },
      {
        text: "Lukas bestand auf seiner Teilnahme.",
        translation: "Lukas katılımında ısrar etti.",
        explanation:
          "Fiil 'bestand' (ısrar etti) ikinci konumdadır. 'Auf seiner Teilnahme' dativ ile kullanılan prepozisyonel ifadedir, 'bestehen' fiili 'auf' ile dativ alır.",
      },
      {
        text: "Sie verabredeten sich zu einem frühen Frühstück.",
        translation: "Erken bir kahvaltı için sözleştiler.",
        explanation:
          "Fiil 'verabredeten' (sözleştiler) ikinci konumdadır. 'Zu einem frühen Frühstück' dativ ile kullanılan prepozisyonel ifadedir, 'sich verabreden' fiili 'zu' ile dativ alır.",
      },
      {
        text: "Sie suchten nach einer geeigneten Ausrüstung.",
        translation: "Uygun bir ekipman aradılar.",
        explanation:
          "Fiil 'suchten' (aradılar) ikinci konumdadır. 'Nach einer geeigneten Ausrüstung' dativ ile kullanılan prepozisyonel ifadedir, 'suchen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Es liegt an Ihnen, ob Sie mitkommen wollen.",
        translation: "Gelip gelmemek size bağlı.",
        explanation:
          "Fiil 'liegt' (bağlı) ikinci konumdadır. 'An Ihnen' dativ ile kullanılan prepozisyonel ifadedir, 'liegen' fiili 'an' ile dativ alır.",
      },
      {
        text: "Lukas zweifelte nicht an der Wichtigkeit.",
        translation: "Lukas önemin şüphe etmedi.",
        explanation:
          "Fiil 'zweifelte' (şüphe etmedi) ikinci konumdadır. 'An der Wichtigkeit' dativ ile kullanılan prepozisyonel ifadedir, 'zweifeln' fiili 'an' ile dativ alır.",
      },
    ],
  },
  {
    title: "6. Verben und ihre Ergänzungen – Eine gemeinsame Geschichte",
    sentences: [
      {
        text: "Lukas notierte, was er dem Professor mitteilen wollte.",
        translation: "Lukas profesöre anlatmak istediklerini not etti.",
        explanation: "Fiil notierte (not etti) ikinci konum",
      },
    ],
  },

  {
    title: "1. Verben mit Akkusativ und Dativ",
    sentences: [
      {
        text: "Lukas saß auf einer Bank am Ufer des Bodensees.",
        translation: "Lukas Bodensee kıyısındaki bir bankta oturuyordu.",
        explanation:
          "Fiil 'saß' (oturuyordu) ikinci konumdadır. 'Auf einer Bank' ve 'am Ufer des Bodensees' yer zarflarıdır, dativ ile kullanılır.",
      },
      {
        text: "Er beobachtete die Möwen, die über das schimmernde Wasser kreisten.",
        translation:
          "Martıları gözlemledi, onlar pırıldayan suyun üzerinde daireler çiziyordu.",
        explanation:
          "Fiil 'beobachtete' (gözlemledi) ikinci konumdadır. 'Die Möwen' akkusativ nesnesidir. Yan cümlede 'kreisten' fiili sonda yer alır.",
      },
      {
        text: "Der kühle Herbstwind strich ihm durch das Haar.",
        translation: "Serin sonbahar rüzgarı saçlarından geçti.",
        explanation:
          "Fiil 'strich' (geçti) ikinci konumdadır. 'Ihm' dativ nesnesidir, 'durch das Haar' yer zarfıdır.",
      },
      {
        text: "Er sah dem Sonnenuntergang zu.",
        translation: "Güneş batışını izledi.",
        explanation:
          "Fiil 'sah' (izledi) ikinci konumdadır. 'Dem Sonnenuntergang' dativ nesnesidir, 'zusehen' fiili dativ ile kullanılır.",
      },
      {
        text: "Er nahm ein Buch aus seiner Tasche.",
        translation: "Çantasından bir kitap aldı.",
        explanation:
          "Fiil 'nahm' (aldı) ikinci konumdadır. 'Ein Buch' akkusativ nesnesidir, 'aus seiner Tasche' yer zarfıdır.",
      },
      {
        text: "Er hatte seinem Freund Marcus dieses Buch empfohlen.",
        translation: "Arkadaşı Marcus'a bu kitabı önermişti.",
        explanation:
          "Fiil 'hatte' (yardımcı fiil) ikinci konumdadır, 'empfohlen' geçmiş zaman formunu oluşturur. 'Seinem Freund Marcus' dativ, 'dieses Buch' akkusativ nesnesidir.",
      },
      {
        text: "Marcus zeigte kein Interesse daran.",
        translation: "Marcus buna ilgi göstermedi.",
        explanation:
          "Fiil 'zeigte' (göstermedi) ikinci konumdadır. 'Kein Interesse' akkusativ nesnesidir, 'daran' dativ ile kullanılan bir zamirdir.",
      },
      {
        text: "Ich kaufe dir ein Exemplar zum Geburtstag.",
        translation: "Sana doğum gününde bir kopya alacağım.",
        explanation:
          "Fiil 'kaufe' (alacağım) ikinci konumdadır. 'Dir' dativ, 'ein Exemplar' akkusativ nesnesidir.",
      },
      {
        text: "Er legte dem alten Mann, der sich neben ihn gesetzt hatte, seine Jacke über die Schultern.",
        translation: "Yanına oturan yaşlı adama ceketini omuzlarına örttü.",
        explanation:
          "Fiil 'legte' (örttü) ikinci konumdadır. 'Dem alten Mann' dativ, 'seine Jacke' akkusativ nesnesidir. Yan cümlede 'hatte' fiili sonda yer alır.",
      },
      {
        text: "Der Fremde schenkte ihm ein dankbares Lächeln.",
        translation: "Yabancı ona minnettar bir gülümseme sundu.",
        explanation:
          "Fiil 'schenkte' (sundu) ikinci konumdadır. 'Ihm' dativ, 'ein dankbares Lächeln' akkusativ nesnesidir.",
      },
      {
        text: "Er stellte sich als Professor Eichendorff vor.",
        translation: "Kendisini Profesör Eichendorff olarak tanıttı.",
        explanation:
          "Fiil 'stellte' (tanıttı) ikinci konumdadır. 'Sich' dönüşlü zamir, 'als Professor Eichendorff' tanıtım ifadesidir.",
      },
    ],
  },
  {
    title: "2. Verben mit Genitiv",
    sentences: [
      {
        text: "Er annahm sich des kulturellen Erbes der Region besonders.",
        translation: "Bölgenin kültürel mirasını özellikle üstlendi.",
        explanation:
          "Fiil 'annahm' (üstlendi) ikinci konumdadır. 'Des kulturellen Erbes' genitiv nesnesidir, 'sich annehmen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er war nach Konstanz gekommen, um sich einer wichtigen Forschungsarbeit zu widmen.",
        translation: "Önemli bir araştırmaya adanmak için Konstanz'a gelmişti.",
        explanation:
          "Fiil 'war' (yardımcı fiil) ikinci konumdadır, 'gekommen' geçmiş zaman formunu oluşturur. 'Einer wichtigen Forschungsarbeit' genitiv nesnesidir, 'sich widmen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Ich entsinne mich des Tages noch genau.",
        translation: "O günü hâlâ tam olarak hatırlıyorum.",
        explanation:
          "Fiil 'entsinne' (hatırlıyorum) ikinci konumdadır. 'Des Tages' genitiv nesnesidir, 'sich entsinnen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Lukas hörte aufmerksam zu, als der Professor sich der vergangenen Zeiten erinnerte.",
        translation:
          "Lukas dikkatle dinledi, profesör geçmiş zamanları hatırlarken.",
        explanation:
          "Fiil 'hörte' (dinledi) ikinci konumdadır. 'Der vergangenen Zeiten' genitiv nesnesidir, 'sich erinnern' fiili genitiv ile kullanılır.",
      },
      {
        text: "Diese Geschichten entbehrten nicht des dramatischen Elements.",
        translation: "Bu hikayeler dramatik unsurdan yoksun değildi.",
        explanation:
          "Fiil 'entbehrten' (yoksun değildi) ikinci konumdadır. 'Des dramatischen Elements' genitiv nesnesidir, 'entbehren' fiili genitiv ile kullanılır.",
      },
      {
        text: "Der alte Mann bediente sich einer bildhaften Sprache.",
        translation: "Yaşlı adam betimleyici bir dil kullandı.",
        explanation:
          "Fiil 'bediente' (kullandı) ikinci konumdadır. 'Einer bildhaften Sprache' genitiv nesnesidir, 'sich bedienen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Man beschuldigte mich des Diebstahls wertvoller Dokumente.",
        translation: "Beni değerli belgelerin hırsızlığıyla suçladılar.",
        explanation:
          "Fiil 'beschuldigte' (suçladı) ikinci konumdadır. 'Des Diebstahls' genitiv nesnesidir, 'beschuldigen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er schämte sich seines damaligen Leichtsinns.",
        translation: "O zamanki hafifliğinden utandı.",
        explanation:
          "Fiil 'schämte' (utandı) ikinci konumdadır. 'Seines damaligen Leichtsinns' genitiv nesnesidir, 'sich schämen' fiili genitiv ile kullanılır.",
      },
    ],
  },
  {
    title: "3. Verben, Nomen und Adjektive mit Präpositionen",
    sentences: [
      {
        text: "Lukas war fasziniert von der Geschichte des Professors.",
        translation: "Lukas profesörün hikayesinden büyülenmişti.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von der Geschichte' dativ ile kullanılan prepozisyonel ifadedir, 'fasziniert' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er dachte intensiv über dessen Worte nach.",
        translation: "Onun sözleri üzerine yoğun bir şekilde düşündü.",
        explanation:
          "Fiil 'dachte' (düşündü) ikinci konumdadır. 'Über dessen Worte' akkusativ ile kullanılan prepozisyonel ifadedir, 'nachdenken' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Er war schon immer interessiert an historischen Mysterien.",
        translation: "Her zaman tarihi gizemlere ilgi duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'An historischen Mysterien' dativ ile kullanılan prepozisyonel ifadedir, 'interessiert' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er sehnte sich nach einem Abenteuer.",
        translation: "Bir macera özlemi çekiyordu.",
        explanation:
          "Fiil 'sehnte' (özlem çekiyordu) ikinci konumdadır. 'Nach einem Abenteuer' dativ ile kullanılan prepozisyonel ifadedir, 'sich sehnen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Der Professor schien reich an Erfahrungen zu sein.",
        translation: "Profesör deneyim açısından zengin görünüyordu.",
        explanation:
          "Fiil 'schien' (görünüyordu) ikinci konumdadır. 'An Erfahrungen' dativ ile kullanılan prepozisyonel ifadedir, 'reich' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er war bekannt für seine archäologischen Entdeckungen.",
        translation: "Arkeolojik keşifleriyle tanınıyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für seine archäologischen Entdeckungen' dativ ile kullanılan prepozisyonel ifadedir, 'bekannt' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich arbeite momentan an einem Buch über die geheimen Tunnel unter dem Bodensee.",
        translation:
          "Şu anda Bodensee altındaki gizli tüneller hakkında bir kitap üzerinde çalışıyorum.",
        explanation:
          "Fiil 'arbeite' (çalışıyorum) ikinci konumdadır. 'An einem Buch' dativ, 'über die geheimen Tunnel' akkusativ ile kullanılan prepozisyonel ifadelerdir.",
      },
      {
        text: "Er war sichtlich stolz auf seine Forschung.",
        translation: "Araştırmasıyla açıkça gurur duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf seine Forschung' akkusativ ile kullanılan prepozisyonel ifadedir, 'stolz' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Er war überzeugt von seiner Theorie.",
        translation: "Teorisinden emindi.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von seiner Theorie' dativ ile kullanılan prepozisyonel ifadedir, 'überzeugt' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er war bereit, sie mit Lukas zu teilen.",
        translation: "Bunu Lukas ile paylaşmaya hazırdı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit Lukas' dativ ile kullanılan prepozisyonel ifadedir, 'teilen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Die Begeisterung für das Thema war ansteckend.",
        translation: "Konuya duyulan coşku bulaşıcıydı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für das Thema' dativ ile kullanılan prepozisyonel ifadedir, 'Begeisterung' ismi 'für' ile dativ alır.",
      },
      {
        text: "Lukas war begierig nach Wissen.",
        translation: "Lukas bilgiye açtı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Nach Wissen' dativ ile kullanılan prepozisyonel ifadedir, 'begierig' sıfatı 'nach' ile dativ alır.",
      },
      {
        text: "Sind Sie abhängig von finanzieller Unterstützung für Ihre Forschung?",
        translation: "Araştırmanız için mali desteğe bağımlı mısınız?",
        explanation:
          "Fiil 'sind' ikinci konumdadır. 'Von finanzieller Unterstützung' ve 'für Ihre Forschung' dativ ile kullanılan prepozisyonel ifadelerdir, 'abhängig' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Ich bin dankbar für jede Hilfe.",
        translation: "Her türlü yardım için minnettarım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Für jede Hilfe' dativ ile kullanılan prepozisyonel ifadedir, 'dankbar' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich bin nicht angewiesen auf große Geldgeber.",
        translation: "Büyük bağışçılara bağımlı değilim.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf große Geldgeber' akkusativ ile kullanılan prepozisyonel ifadedir, 'angewiesen' sıfatı 'auf' ile akkusativ alır.",
      },
    ],
  },
  {
    title:
      "4. Verben, Adjektive und Nomen mit festen Präpositionen + Akkusativ",
    sentences: [
      {
        text: "Der Professor blickte durch das Fernglas.",
        translation: "Profesör dürbünle baktı.",
        explanation:
          "Fiil 'blickte' (baktı) ikinci konumdadır. 'Durch das Fernglas' akkusativ ile kullanılan prepozisyonel ifadedir, 'blicken' fiili 'durch' ile akkusativ alır.",
      },
      {
        text: "Er deutete auf ein altes Gebäude am gegenüberliegenden Ufer.",
        translation: "Karşı kıyıdaki eski bir binayı işaret etti.",
        explanation:
          "Fiil 'deutete' (işaret etti) ikinci konumdadır. 'Auf ein altes Gebäude' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich konzentriere mich auf die architektonischen Details.",
        translation: "Mimari detaylara odaklanıyorum.",
        explanation:
          "Fiil 'konzentriere' (odaklanıyorum) ikinci konumdadır. 'Auf die architektonischen Details' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich konzentrieren' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Er reichte Lukas das Fernglas.",
        translation: "Lukas'a dürbünü uzattı.",
        explanation:
          "Fiil 'reichte' (uzattı) ikinci konumdadır. 'Lukas' dativ, 'das Fernglas' akkusativ nesnesidir.",
      },
      {
        text: "Lukas war erstaunt über die Präzision.",
        translation: "Lukas hassasiyete şaşırmıştı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Über die Präzision' akkusativ ile kullanılan prepozisyonel ifadedir, 'erstaunt' sıfatı 'über' ile akkusativ alır.",
      },
      {
        text: "Er argumentierte gegen die vorherrschende Meinung der akademischen Welt.",
        translation: "Akademik dünyanın hâkim görüşüne karşı savundu.",
        explanation:
          "Fiil 'argumentierte' (savundu) ikinci konumdadır. 'Gegen die vorherrschende Meinung' akkusativ ile kullanılan prepozisyonel ifadedir, 'argumentieren' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Hinweise deuteten auf einen unterirdischen Gang.",
        translation: "İpuçları yeraltı geçidine işaret ediyordu.",
        explanation:
          "Fiil 'deuteten' (işaret ediyordu) ikinci konumdadır. 'Auf einen unterirdischen Gang' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich bin spezialisiert auf mittelalterliche Bauwerke.",
        translation: "Ortaçağ yapılarında uzmanım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf mittelalterliche Bauwerke' akkusativ ile kullanılan prepozisyonel ifadedir, 'spezialisiert' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich habe mich durch die Archive der umliegenden Klöster gearbeitet.",
        translation: "Çevredeki manastırların arşivlerinde çalıştım.",
        explanation:
          "Fiil 'habe' ikinci konumdadır, 'gearbeitet' geçmiş zaman formunu oluşturur. 'Durch die Archive' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich arbeiten' fiili 'durch' ile akkusativ alır.",
      },
      {
        text: "Lukas lehnte sich gegen den Baum.",
        translation: "Lukas ağaca yaslandı.",
        explanation:
          "Fiil 'lehnte' (yaslandı) ikinci konumdadır. 'Gegen den Baum' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich lehnen' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Begeisterung des alten Mannes hatte sich auf ihn übertragen.",
        translation: "Yaşlı adamın coşkusu ona bulaşmıştı.",
        explanation:
          "Fiil 'hatte' ikinci konumdadır, 'übertragen' geçmiş zaman formunu oluşturur. 'Auf ihn' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich übertragen' fiili 'auf' ile akkusativ alır.",
      },
    ],
  },
  {
    title: "5. Verben, Adjektive und Nomen mit festen Präpositionen + Dativ",
    sentences: [
      {
        text: "Professor Eichendorff erzählte von seinen Entdeckungen mit einer Lebendigkeit.",
        translation:
          "Profesör Eichendorff keşiflerinden büyük bir canlılıkla bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) ikinci konumdadır. 'Von seinen Entdeckungen' ve 'mit einer Lebendigkeit' dativ ile kullanılan prepozisyonel ifadelerdir, 'erzählen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Ich träume von einem durchschlagenden Beweis für meine Theorie.",
        translation: "Teorim için kesin bir kanıt hayali kuruyorum.",
        explanation:
          "Fiil 'träume' (hayal kuruyorum) ikinci konumdadır. 'Von einem durchschlagenden Beweis' dativ ile kullanılan prepozisyonel ifadedir, 'träumen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Der alte Mann sprach mit einer Überzeugung, die keinen Zweifel zuließ.",
        translation: "Yaşlı adam, şüpheye yer bırakmayan bir inançla konuştu.",
        explanation:
          "Fiil 'sprach' (konuştu) ikinci konumdadır. 'Mit einer Überzeugung' dativ ile kullanılan prepozisyonel ifadedir, 'sprechen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Lukas half bei den Vorbereitungen für eine kleine Expedition.",
        translation:
          "Lukas küçük bir keşif gezisi için hazırlıklarda yardımcı oldu.",
        explanation:
          "Fiil 'half' (yardımcı oldu) ikinci konumdadır. 'Bei den Vorbereitungen' ve 'für eine kleine Expedition' dativ ile kullanılan prepozisyonel ifadelerdir, 'helfen' fiili 'bei' ile dativ alır.",
      },
      {
        text: "Er war zufrieden mit dem Plan.",
        translation: "Plandan memnundu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit dem Plan' dativ ile kullanılan prepozisyonel ifadedir, 'zufrieden' sıfatı 'mit' ile dativ alır.",
      },
      {
        text: "Er freute sich auf das morgige Abenteuer.",
        translation: "Yarınki maceraya sevindi.",
        explanation:
          "Fiil 'freute' (sevindi) ikinci konumdadır. 'Auf das morgige Abenteuer' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich freuen' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Der Professor warnte ihn vor den Gefahren eines solchen Unterfangens.",
        translation:
          "Profesör onu böyle bir girişimin tehlikelerine karşı uyardı.",
        explanation:
          "Fiil 'warnte' (uyardı) ikinci konumdadır. 'Vor den Gefahren' dativ ile kullanılan prepozisyonel ifadedir, 'warnen' fiili 'vor' ile dativ alır.",
      },
      {
        text: "Lukas bestand auf seiner Teilnahme.",
        translation: "Lukas katılımında ısrar etti.",
        explanation:
          "Fiil 'bestand' (ısrar etti) ikinci konumdadır. 'Auf seiner Teilnahme' dativ ile kullanılan prepozisyonel ifadedir, 'bestehen' fiili 'auf' ile dativ alır.",
      },
      {
        text: "Die beiden verabredeten sich zu einem frühen Frühstück im Hotel des Professors.",
        translation:
          "İkisi, profesörün otelinde erken bir kahvaltı için sözleşti.",
        explanation:
          "Fiil 'verabredeten' (sözleştiler) ikinci konumdadır. 'Zu einem frühen Frühstück' dativ ile kullanılan prepozisyonel ifadedir, 'sich verabreden' fiili 'zu' ile dativ alır.",
      },
      {
        text: "Die Sonne verschwand langsam hinter den Bergen.",
        translation: "Güneş yavaşça dağların ardında kayboldu.",
        explanation:
          "Fiil 'verschwand' (kayboldu) ikinci konumdadır. 'Hinter den Bergen' dativ ile kullanılan prepozisyonel ifadedir, 'verschwinden' fiili 'hinter' ile dativ alır.",
      },
      {
        text: "Sie suchten nach einer geeigneten Ausrüstung.",
        translation: "Uygun bir ekipman aradılar.",
        explanation:
          "Fiil 'suchten' (aradılar) ikinci konumdadır. 'Nach einer geeigneten Ausrüstung' dativ ile kullanılan prepozisyonel ifadedir, 'suchen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Es liegt an Ihnen, ob Sie wirklich mitkommen wollen.",
        translation: "Gelip gelmemek size bağlı.",
        explanation:
          "Fiil 'liegt' (bağlı) ikinci konumdadır. 'An Ihnen' dativ ile kullanılan prepozisyonel ifadedir, 'liegen' fiili 'an' ile dativ alır.",
      },
      {
        text: "Lukas zweifelte nicht an der Wichtigkeit dieser Expedition.",
        translation: "Lukas bu keşif gezisinin öneminden şüphe etmedi.",
        explanation:
          "Fiil 'zweifelte' (şüphe etmedi) ikinci konumdadır. 'An der Wichtigkeit' dativ ile kullanılan prepozisyonel ifadedir, 'zweifeln' fiili 'an' ile dativ alır.",
      },
    ],
  },
  {
    title: "6. Verben und ihre Ergänzungen – Eine gemeinsame Geschichte",
    sentences: [
      {
        text: "Lukas saß in seinem Hotelzimmer.",
        translation: "Lukas otel odasında oturuyordu.",
        explanation:
          "Fiil 'saß' (oturuyordu) ikinci konumdadır. 'In seinem Hotelzimmer' dativ ile kullanılan yer zarfıdır.",
      },
      {
        text: "Er notierte, was er dem Professor seine Erfahrungen mitteilen wollte.",
        translation:
          "Lukas, profesöre deneyimlerini anlatmak istediklerini not etti.",
        explanation:
          "Fiil 'notierte' (not etti) ikinci konumdadır. 'Dem Professor' dativ, 'seine Erfahrungen' akkusativ nesnesidir, 'mitteilen' fiili dativ ve akkusativ alır.",
      },
      {
        text: "Er hatte sich des Gefühls nicht erwehren können.",
        translation: "Bu histen kendini alıkoyamamıştı.",
        explanation:
          "Fiil 'hatte' ikinci konumdadır, 'erwehren' geçmiş zaman formunu oluşturur. 'Des Gefühls' genitiv nesnesidir, 'sich erwehren' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er dachte über die Bedeutung dieser Expedition nach.",
        translation: "Bu keşif gezisinin anlamı üzerine düşündü.",
        explanation:
          "Fiil 'dachte' (düşündü) ikinci konumdadır. 'Über die Bedeutung' akkusativ ile kullanılan prepozisyonel ifadedir, 'nachdenken' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Es klopfte plötzlich an der Tür.",
        translation: "Aniden kapı çalındı.",
        explanation:
          "Fiil 'klopfte' (çalındı) ikinci konumdadır. 'An der Tür' dativ ile kullanılan prepozisyonel ifadedir.",
      },
      {
        text: "Es war Marcus, der auf seine Einladung hin angereist war.",
        translation: "Daveti üzerine gelen Marcus'tu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf seine Einladung' akkusativ ile kullanılan prepozisyonel ifadedir, yan cümlede 'war' sonda yer alır.",
      },
      {
        text: "Lukas freute sich über das unerwartete Wiedersehen.",
        translation: "Lukas beklenmedik buluşmaya sevindi.",
        explanation:
          "Fiil 'freute' (sevindi) ikinci konumdadır. 'Über das unerwartete Wiedersehen' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich freuen' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Er erzählte seinem Freund aufgeregt von seinem Treffen mit dem Professor.",
        translation: "Arkadaşına profesörle buluşmasını heyecanla anlattı.",
        explanation:
          "Fiil 'erzählte' (anlattı) ikinci konumdadır. 'Seinem Freund' dativ, 'von seinem Treffen' dativ ile kullanılan prepozisyonel ifadedir.",
      },
      {
        text: "Ich habe dir die Wahrheit verschwiegen.",
        translation: "Sana gerçeği sakladım.",
        explanation:
          "Fiil 'habe' ikinci konumdadır, 'verschwiegen' geçmiş zaman formunu oluşturur. 'Dir' dativ, 'die Wahrheit' akkusativ nesnesidir.",
      },
      {
        text: "Er zog einen alten Brief aus seiner Tasche.",
        translation: "Cebinden eski bir mektup çıkardı.",
        explanation:
          "Fiil 'zog' (çıkardı) ikinci konumdadır. 'Einen alten Brief' akkusativ nesnesidir, 'aus seiner Tasche' yer zarfıdır.",
      },
      {
        text: "Ich arbeite mit Professor Eichendorff seit Jahren zusammen.",
        translation: "Yıllardır Profesör Eichendorff ile birlikte çalışıyorum.",
        explanation:
          "Fiil 'arbeite' (çalışıyorum) ikinci konumdadır. 'Mit Professor Eichendorff' dativ ile kullanılan prepozisyonel ifadedir, 'zusammenarbeiten' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Ich war es, der ihn auf dich aufmerksam gemacht hat.",
        translation: "Seni ona fark ettiren bendim.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf dich' akkusativ ile kullanılan prepozisyonel ifadedir, 'aufmerksam machen' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Lukas war sprachlos.",
        translation: "Lukas nutku tutulmuştu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Sprachlos' sıfat, durum bildiren bir tamamlayıcıdır.",
      },
      {
        text: "Er erinnerte sich des Moments, als der Professor sich neben ihn gesetzt hatte.",
        translation: "Profesörün yanına oturduğu anı hatırladı.",
        explanation:
          "Fiil 'erinnerte' (hatırladı) ikinci konumdadır. 'Des Moments' genitiv nesnesidir, 'sich erinnern' fiili genitiv ile kullanılır.",
      },
      {
        text: "Marcus half bei der Aufklärung.",
        translation: "Marcus açıklamaya yardım etti.",
        explanation:
          "Fiil 'half' (yardım etti) ikinci konumdadır. 'Bei der Aufklärung' dativ ile kullanılan prepozisyonel ifadedir, 'helfen' fiili 'bei' ile dativ alır.",
      },
      {
        text: "Der Professor ist abhängig von deinen Sprachkenntnissen.",
        translation: "Profesör senin dil bilgine bağımlı.",
        explanation:
          "Fiil 'ist' ikinci konumdadır. 'Von deinen Sprachkenntnissen' dativ ile kullanılan prepozisyonel ifadedir, 'abhängig' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Die drei trafen sich zu einem späten Abendessen.",
        translation: "Üçü geç bir akşam yemeği için buluştu.",
        explanation:
          "Fiil 'trafen' (buluştu) ikinci konumdadır. 'Zu einem späten Abendessen' dativ ile kullanılan prepozisyonel ifadedir, 'sich treffen' fiili 'zu' ile dativ alır.",
      },
      {
        text: "Der Professor legte Lukas die alten Pergamente vor.",
        translation: "Profesör Lukas'a eski parşömenleri sundu.",
        explanation:
          "Fiil 'legte' (sundu) ikinci konumdadır. 'Lukas' dativ, 'die alten Pergamente' akkusativ nesnesidir, 'vorlegen' fiili dativ ve akkusativ alır.",
      },
      {
        text: "Er bat ihn um Hilfe.",
        translation: "Ondan yardım istedi.",
        explanation:
          "Fiil 'bat' (istedi) ikinci konumdadır. 'Ihn' akkusativ, 'um Hilfe' akkusativ ile kullanılan prepozisyonel ifadedir, 'bitten' fiili 'um' ile akkusativ alır.",
      },
      {
        text: "Er war dankbar für die Unterstützung.",
        translation: "Destek için minnettardı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für die Unterstützung' dativ ile kullanılan prepozisyonel ifadedir, 'dankbar' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Er versprach, Lukas an der Entdeckung teilhaben zu lassen.",
        translation: "Lukas'ı keşfe ortak etmeye söz verdi.",
        explanation:
          "Fiil 'versprach' (söz verdi) ikinci konumdadır. 'An der Entdeckung' dativ ile kullanılan prepozisyonel ifadedir, 'teilhaben' fiili 'an' ile dativ alır.",
      },
      {
        text: "Sie machten sich bereit für die Expedition.",
        translation: "Keşif gezisi için hazırlandılar.",
        explanation:
          "Fiil 'machten' (hazırlandılar) ikinci konumdadır. 'Für die Expedition' dativ ile kullanılan prepozisyonel ifadedir, 'sich bereit machen' fiili 'für' ile dativ alır.",
      },
      {
        text: "Lukas war gespannt auf das Abenteuer.",
        translation: "Lukas maceraya meraklıydı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf das Abenteuer' akkusativ ile kullanılan prepozisyonel ifadedir, 'gespannt' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Er wusste, dass dieser Tag sein Leben verändern würde.",
        translation: "Bu günün hayatını değiştireceğini biliyordu.",
        explanation:
          "Fiil 'wusste' (biliyordu) ikinci konumdadır. Yan cümlede fiil 'würde' sonda yer alır.",
      },
      {
        text: "Er blickte durch das Fenster auf den See hinaus.",
        translation: "Pencereden göle doğru baktı.",
        explanation:
          "Fiil 'blickte' (baktı) ikinci konumdadır. 'Durch das Fenster' ve 'auf den See' akkusativ ile kullanılan prepozisyonel ifadelerdir.",
      },
      {
        text: "Er war sich sicher: Dies war erst der Anfang.",
        translation: "Kendinden emindi: Bu sadece başlangıçtı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Sich sicher' dönüşlü bir yapıdır, durum bildiren tamamlayıcıdır.",
      },
      {
        text: "Er würde gegen die Zeit antreten, um des Rätsels Lösung zu finden.",
        translation:
          "Gizemlerin çözümünü bulmak için zamana karşı yarışacaktı.",
        explanation:
          "Fiil 'würde' ikinci konumdadır. 'Gegen die Zeit' akkusativ, 'des Rätsels' genitiv nesnesidir, 'antreten' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Vergangenheit wartete darauf, entdeckt zu werden.",
        translation: "Geçmiş, keşfedilmeyi bekliyordu.",
        explanation:
          "Fiil 'wartete' (bekliyordu) ikinci konumdadır. 'Darauf' dativ zamiridir, 'entdeckt zu werden' mastar yapısıdır.",
      },
      {
        text: "Lukas war bereit, sich dieser Herausforderung zu stellen.",
        translation: "Lukas bu meydan okumaya hazırdı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Sich dieser Herausforderung' dativ ile kullanılan prepozisyonel ifadedir, 'sich stellen' fiili dativ alır.",
      },
    ],
  },
  {
    title: "1. Bildung der Vergangenheitszeiten",
    sentences: [
      {
        text: "Am frühen Morgen brach Lukas mit Professor Eichendorff und Marcus zum See auf.",
        translation:
          "Sabah erken saatlerde Lukas, Profesör Eichendorff ve Marcus ile göle doğru yola çıktı.",
        explanation:
          "Fiil 'brach' (yola çıktı) Präteritum formundadır, geçmişteki bir olayı anlatır. İkinci konumdadır.",
      },
      {
        text: "Die Sonne schien bereits hell am Himmel, als sie das kleine Boot bestiegen.",
        translation:
          "Onlar küçük tekneye binerken güneş zaten gökyüzünde parlak bir şekilde parlıyordu.",
        explanation:
          "Fiil 'schien' (parlıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'bestiegen' (bindiler) fiili sonda yer alır.",
      },
      {
        text: "Der Professor erklärte ihnen den Weg zu der kleinen Insel.",
        translation: "Profesör onlara küçük adaya giden yolu açıkladı.",
        explanation:
          "Fiil 'erklärte' (açıkladı) Präteritum formundadır, geçmişteki bir eylemi belirtir. 'Ihnen' dativ nesnesidir.",
      },
      {
        text: "Marcus nahm das Ruder in die Hand und steuerte geschickt durch die leichten Wellen.",
        translation:
          "Marcus küreği eline aldı ve hafif dalgalar arasında ustalıkla yönlendirdi.",
        explanation:
          "Fiiller 'nahm' (aldı) ve 'steuerte' (yönlendirdi) Präteritum formundadır, geçmişteki eylemleri ifade eder. Her ikisi de ikinci konumdadır.",
      },
      {
        text: "Der Wind wehte sanft, und die Vögel kreisten über ihnen.",
        translation:
          "Rüzgar hafifçe esiyordu ve kuşlar üzerlerinde daireler çiziyordu.",
        explanation:
          "Fiiller 'wehte' (esiyordu) ve 'kreisten' (daireler çiziyordu) Präteritum formundadır, geçmişteki durumu anlatır. İkisi de ikinci konumdadır.",
      },
      {
        text: "Vor dreißig Jahren entdeckte ich in der Bibliothek des Klosters Reichenau einen Hinweis.",
        translation:
          "Otuz yıl önce Reichenau Manastırı kütüphanesinde bir ipucu keşfettim.",
        explanation:
          "Fiil 'entdeckte' (keşfettim) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich verbrachte damals Monate mit der Suche.",
        translation: "O zamanlar aylarca aramakla geçirdim.",
        explanation:
          "Fiil 'verbrachte' (geçirdim) Präteritum formundadır, geçmişteki bir süreci ifade eder. İkinci konumdadır.",
      },
      {
        text: "Bis ich sie endlich fand.",
        translation: "Ta ki onları sonunda bulana kadar.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir sonucu belirtir. İkinci konumdadır.",
      },
      {
        text: "Doch dann geschah etwas Unerwartetes – ich musste sie verstecken.",
        translation:
          "Ama sonra beklenmedik bir şey oldu – onları saklamak zorunda kaldım.",
        explanation:
          "Fiiller 'geschah' (oldu) ve 'musste' (zorunda kaldım) Präteritum formundadır, geçmişteki olayları ifade eder. İkisi de ikinci konumdadır.",
      },
      {
        text: "Lukas hörte aufmerksam zu.",
        translation: "Lukas dikkatle dinledi.",
        explanation:
          "Fiil 'hörte' (dinledi) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Der ernste Blick des Professors ließ keinen Zweifel daran, dass er die Wahrheit sprach.",
        translation:
          "Profesörün ciddi bakışı, gerçeği konuştuğuna dair hiçbir şü  bırakmadı.",
        explanation:
          "Fiil 'ließ' (bırakmadı) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'sprach' (konuştu) fiili sonda yer alır.",
      },
      {
        text: "Ich habe diese Geschichte noch nie jemandem erzählt.",
        translation: "Bu hikayeyi daha önce hiç kimseye anlatmadım.",
        explanation:
          "Fiil 'habe ... erzählt' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Nur Marcus hat über die Jahre von meinen Forschungen erfahren.",
        translation:
          "Yıllar boyunca sadece Marcus araştırmalarımdan haberdar oldu.",
        explanation:
          "Fiil 'hat ... erfahren' Perfekt formundadır, geçmişteki bir süreci ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Lukas war erstaunt, dass sein Freund ihm nie davon berichtet hat.",
        translation:
          "Lukas, arkadaşının ona bundan hiç bahsetmediğine şaşırdı.",
        explanation:
          "Fiil 'war' Präteritum, yan cümlede 'hat ... berichtet' Perfekt formundadır, geçmişteki bir durumu ve tamamlanmış bir eylemi ifade eder.",
      },
      {
        text: "Wir haben es für besser gehalten, dich erst jetzt einzuweihen.",
        translation: "Seni şimdi bilgilendirmeyi daha iyi bulduk.",
        explanation:
          "Fiil 'haben ... gehalten' Perfekt formundadır, geçmişteki bir kararı ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Die kleine Gruppe ist inzwischen an der Insel angekommen.",
        translation: "Küçük grup bu arada adaya varmıştı.",
        explanation:
          "Fiil 'ist ... angekommen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Ist' ikinci konumdadır.",
      },
      {
        text: "Hier habe ich vor Jahren die Nacht verbracht und die Dokumente versteckt.",
        translation:
          "Burada yıllar önce geceyi geçirdim ve belgeleri sakladım.",
        explanation:
          "Fiiller 'habe ... verbracht' ve 'versteckt' Perfekt formundadır, geçmişteki tamamlanmış eylemleri ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie auf der Insel ankamen, hatte Lukas schon viel über die mittelalterliche Geschichte gelernt.",
        translation:
          "Adaya varmadan önce Lukas ortaçağ tarihi hakkında çok şey öğrenmişti.",
        explanation:
          "Fiil 'hatte ... gelernt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Der Professor hatte ihm während der Bootsfahrt von den alten Klöstern erzählt.",
        translation:
          "Profesör ona tekne yolculuğu sırasında eski manastırlardan bahsetmişti.",
        explanation:
          "Fiil 'hatte ... erzählt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Marcus hatte diese Geschichten bereits als Kind gehört.",
        translation: "Marcus bu hikayeleri çocukken zaten duymuştu.",
        explanation:
          "Fiil 'hatte ... gehört' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die Dokumente waren ursprünglich Teil einer größeren Sammlung gewesen.",
        translation: "Belgeler aslen daha büyük bir koleksiyonun parçasıydı.",
        explanation:
          "Fiil 'waren ... gewesen' Plusquamperfekt formundadır, geçmişteki bir durumdan önceki bir durumu ifade eder. 'Waren' ikinci konumdadır.",
      },
      {
        text: "Ich hatte nie damit gerechnet, dass meine Forschungen mich hierher führen würden.",
        translation:
          "Araştırmalarımın beni buraya getireceğini hiç beklememiştim.",
        explanation:
          "Fiil 'hatte ... gerechnet' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir beklentiyi ifade eder. 'Hatte' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "2. Besondere Perfektformen: Modalverben und sehen, hören, lassen",
    sentences: [
      {
        text: "Als Student habe ich die alten Pergamente zum ersten Mal sehen können.",
        translation: "Öğrenciyken eski parşömenleri ilk kez görebildim.",
        explanation:
          "Fiil 'habe ... können' Perfekt formunda, modal fiil 'können' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir yeteneği ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen, dass sie von historischer Bedeutung sind.",
        translation:
          "O zamanlar kimse onların tarihi önemine inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar olarak kullanılır, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Der Professor hat mir oft erzählen müssen, wie er nächtelang in den Archiven arbeiten müssen hat.",
        translation:
          "Profesör bana sık sık, gecelerce arşivlerde çalışmak zorunda kaldığını anlatmak zorunda kaldı.",
        explanation:
          "Fiil 'hat ... müssen' Perfekt formunda, iki kez modal fiil 'müssen' ile birlikte. 'Erzählen' ve 'arbeiten' mastar olarak kullanılır, geçmişteki zorunluluğu ifade eder.",
      },
      {
        text: "In der Klosterbibliothek habe ich einmal einen alten Mönch eine seltsame Melodie singen hören.",
        translation:
          "Manastır kütüphanesinde bir keresinde yaşlı bir keşişin garip bir melodi söylediğini duydum.",
        explanation:
          "Fiil 'habe ... hören' Perfekt formunda, algı fiili 'hören' ile birlikte. 'Singen' mastar olarak kullanılır, geçmişteki bir algıyı ifade eder.",
      },
      {
        text: "Diese Melodie hat mir später den Weg zeigen sollen.",
        translation: "Bu melodi daha sonra bana yolu gösterecekti.",
        explanation:
          "Fiil 'hat ... sollen' Perfekt formunda, modal fiil 'sollen' ile birlikte. 'Zeigen' mastar olarak kullanılır, geçmişteki bir amacı ifade eder.",
      },
      {
        text: "Haben Sie die Originaldokumente jemals fotografieren lassen?",
        translation: "Orijinal belgeleri hiç fotoğraflattınız mı?",
        explanation:
          "Fiil 'haben ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Fotografieren' mastar olarak kullanılır, geçmişteki bir eylemi sorgular.",
      },
      {
        text: "Ich habe damals niemandem trauen dürfen.",
        translation: "O zamanlar kimseye güvenmemeliydim.",
        explanation:
          "Fiil 'habe ... dürfen' Perfekt formunda, modal fiil 'dürfen' ile birlikte. 'Trauen' mastar olarak kullanılır, geçmişteki bir izni ifade eder.",
      },
      {
        text: "Ich habe alles genau abzeichnen lassen.",
        translation: "Her şeyi tam olarak çizdirdim.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Abzeichnen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Der Professor hat mir die Kopien sehen lassen.",
        translation: "Profesör bana kopyaları gösterdi.",
        explanation:
          "Fiil 'hat ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Deshalb habe ich ihn unterstützen wollen.",
        translation: "Bu yüzden onu desteklemek istedim.",
        explanation:
          "Fiil 'habe ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Unterstützen' mastar olarak kullanılır, geçmişteki bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "3. Gebrauch von Zeiten der Vergangenheit",
    sentences: [
      {
        text: "Als sie tiefer in die Insel vordrangen, erzählte der Professor von seinen Entdeckungen.",
        translation:
          "Adaya daha derinlemesine ilerlediklerinde, profesör keşiflerinden bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) Präteritum formundadır, geçmişteki bir anlatımı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich fand die ersten Hinweise im Jahr 1985.",
        translation: "İlk ipuçlarını 1985 yılında buldum.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Damals arbeitete ich noch an der Universität Konstanz.",
        translation: "O zamanlar hâlâ Konstanz Üniversitesi'nde çalışıyordum.",
        explanation:
          "Fiil 'arbeitete' (çalışıyordum) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "In jenem Sommer habe ich meine wichtigste Entdeckung gemacht.",
        translation: "O yaz en önemli keşfimi yaptım.",
        explanation:
          "Fiil 'habe ... gemacht' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi vurgular. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Ich bin durch Zufall auf einen verschlüsselten Text gestoßen.",
        translation: "Tesadüfen şifreli bir metne rastladım.",
        explanation:
          "Fiil 'bin ... gestoßen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Bevor der Professor diesen Text entdeckt hatte, hatten viele Historiker die Existenz dieses Archivs nur für eine Legende gehalten.",
        translation:
          "Profesör bu metni keşfetmeden önce, birçok tarihçi bu arşivin varlığını sadece bir efsane sanmıştı.",
        explanation:
          "Fiiller 'hatte ... entdeckt' ve 'hatten ... gehalten' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki durumu ifade eder. 'Hatte' ve 'hatten' ikinci konumdadır.",
      },
      {
        text: "Hier versteckte ich die Dokumente vor genau fünfzehn Jahren.",
        translation: "Tam on beş yıl önce burada belgeleri sakladım.",
        explanation:
          "Fiil 'versteckte' (sakladım) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich hatte zuvor sichergestellt, dass der Ort trocken und geschützt war.",
        translation:
          "Daha önce buranın kuru ve korunaklı olduğundan emin olmuştum.",
        explanation:
          "Fiil 'hatte ... sichergestellt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Seitdem bin ich nicht mehr hier gewesen.",
        translation: "O zamandan beri burada bulunmadım.",
        explanation:
          "Fiil 'bin ... gewesen' Perfekt formundadır, geçmişten bugüne kadar olan bir durumu ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Habt ihr beide jemals darüber nachgedacht, was in diesen Dokumenten stehen könnte?",
        translation:
          "İkiniz hiç bu belgelerde neler olabileceği hakkında düşündünüz mü?",
        explanation:
          "Fiil 'habt ... nachgedacht' Perfekt formundadır, geçmişteki bir düşünce sürecini sorgular. 'Habt' ikinci konumdadır.",
      },
      {
        text: "Wir haben oft darüber diskutiert.",
        translation: "Bunu sık sık tartıştık.",
        explanation:
          "Fiil 'haben ... diskutiert' Perfekt formundadır, geçmişteki tekrarlanan bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Der Professor vermutete, dass sie ein Geheimnis enthüllen.",
        translation:
          "Profesör, onların bir sırrı açığa çıkaracağını tahmin etti.",
        explanation:
          "Fiil 'vermutete' (tahmin etti) Präteritum formundadır, geçmişteki bir tahmini ifade eder. Yan cümlede fiil sonda yer alır.",
      },
    ],
  },
  {
    title: "4. Vermutung und Zukunft mit dem Futur",
    sentences: [
      {
        text: "Was werden wir in den Dokumenten finden?",
        translation: "Belgelerde ne bulacağız?",
        explanation:
          "Fiil 'werden ... finden' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Die Pergamente werden uns Aufschluss über die geheimen Tunnel geben.",
        translation: "Parşömenler bize gizli tüneller hakkında bilgi verecek.",
        explanation:
          "Fiil 'werden ... geben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Morgen werden wir bereits mit der Übersetzung beginnen.",
        translation: "Yarın zaten çeviriye başlayacağız.",
        explanation:
          "Fiil 'werden ... beginnen' Futur I formundadır, yakın gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ihr werdet erstaunt sein, was diese alten Texte offenbaren.",
        translation:
          "Bu eski metinlerin neler ortaya koyacağına şaşıracaksınız.",
        explanation:
          "Fiil 'werdet ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werdet' ikinci konumdadır.",
      },
      {
        text: "Der Schatz wird wohl in einer der Höhlen versteckt sein.",
        translation: "Hazine muhtemelen mağaralardan birinde saklı olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Er wird vermutlich aus Gold und wertvollen Manuskripten bestehen.",
        translation: "Muhtemelen altın ve değerli el yazmalarından oluşacak.",
        explanation:
          "Fiil 'wird ... bestehen' Futur I formundadır, 'vermutlich' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Du wirst wohl vom großen Reichtum träumen.",
        translation: "Muhtemelen büyük bir zenginlik hayali kuruyorsun.",
        explanation:
          "Fiil 'wirst ... träumen' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wirst' ikinci konumdadır.",
      },
      {
        text: "Die wahre Bedeutung wird eine andere sein.",
        translation: "Gerçek anlam başka olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Die Einheimischen werden nichts von diesem Ort wissen.",
        translation: "Yerliler bu yer hakkında hiçbir şey bilmeyecek.",
        explanation:
          "Fiil 'werden ... wissen' Futur I formundadır, bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Sonst wird es hier nicht so verlassen sein.",
        translation: "Aksi takdirde burası bu kadar terk edilmiş olmaz.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Bis heute Abend werden wir alle Dokumente gesichtet haben.",
        translation: "Bu akşam tüm belgeleri gözden geçirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende der Woche werden wir die wichtigsten Passagen übersetzt haben.",
        translation:
          "Hafta sonuna kadar en önemli pasajları çevirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Wenn wir zurückkehren, werden die anderen Wissenschaftler überrascht sein.",
        translation: "Döndüğümüzde diğer bilim insanları şaşıracak.",
        explanation:
          "Fiil 'werden ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis dahin wird die Welt noch nichts von unserer Entdeckung erfahren haben.",
        translation: "O zamana kadar dünya keşfimizden haberdar olmayacak.",
        explanation:
          "Fiil 'wird ... haben' Futur II formundadır, gelecekte tamamlanmamış bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "5. Überblick über die Zeiten im Deutschen",
    sentences: [
      {
        text: "Mit zitternden Händen zog der Professor eine wasserdichte Metallschatulle aus der Höhlung.",
        translation:
          "Titreyen ellerle profesör, kayanın oyuğundan su geçirmez bir metal kutu çıkardı.",
        explanation:
          "Fiil 'zog' (çıkardı) Präteritum formundadır, geçmişteki bir eylemi anlatır. İkinci konumdadır.",
      },
      {
        text: "Eine historische Entdeckung lag vor ihnen.",
        translation: "Onların önünde tarihi bir keşif yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich habe all die Jahre darauf gewartet, diese Dokumente wieder in den Händen zu halten.",
        translation: "Bunca yıl bu belgeleri tekrar elimde tutmayı bekledim.",
        explanation:
          "Fiil 'habe ... gewartet' Perfekt formundadır, geçmişten bugüne uzanan bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie die Schatulle öffneten, hatte der Professor bereits spezielle Handschuhe angezogen.",
        translation:
          "Kutuyu açmadan önce profesör zaten özel eldivenler giymişti.",
        explanation:
          "Fiil 'hatte ... angezogen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Wir werden diese Dokumente sorgfältig untersuchen.",
        translation: "Bu belgeleri dikkatle inceleyeceğiz.",
        explanation:
          "Fiil 'werden ... untersuchen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende des Jahres werden wir alle Texte entschlüsselt haben.",
        translation: "Yıl sonuna kadar tüm metinleri çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Während sie vorsichtig das erste Pergament entfalten, halten alle drei den Atem an.",
        translation:
          "İlk parşömeni dikkatlice açarken, üçü de nefeslerini tutuyor.",
        explanation:
          "Fiil 'halten' (tutuyor) Präsens formundadır, şu anki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Hier steht etwas in einer alten Geheimschrift, die ich kenne.",
        translation:
          "Burada bildiğim eski bir gizli yazıyla yazılmış bir şey var.",
        explanation:
          "Fiil 'steht' (var) Präsens formundadır, mevcut bir durumu ifade eder. İkinci konumdadır.",
      },
    ],
  },
  {
    title: "6. Zeiten – Eine gemeinsame Geschichte erzählen",
    sentences: [
      {
        text: "Die drei Abenteurer saßen bis spät in die Nacht im Hotelzimmer.",
        translation:
          "Üç maceraperest gece geç saatlere kadar otel odasında oturdu.",
        explanation:
          "Fiil 'saßen' (oturdu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Der Professor hatte bereits vor Jahren einen Schlüssel für die seltsame Codierung entwickelt.",
        translation:
          "Profesör yıllar önce garip kodlama için bir anahtar geliştirmişti.",
        explanation:
          "Fiil 'hatte ... entwickelt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Ich habe so etwas noch nie gesehen.",
        translation: "Böyle bir şeyi daha önce hiç görmedim.",
        explanation:
          "Fiil 'habe ... gesehen' Perfekt formundadır, geçmişteki bir deneyimi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Marcus hat plötzlich aufgeregt ausgerufen: 'Dort unten muss ein verborgener Raum sein!'",
        translation:
          "Marcus birden heyecanla bağırdı: 'Orada gizli bir oda olmalı!'",
        explanation:
          "Fiil 'hat ... ausgerufen' Perfekt formundadır, geçmişteki ani bir eylemi ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Wir werden morgen früh aufbrechen und diesen Ort finden.",
        translation: "Yarın sabah yola çıkacağız ve bu yeri bulacağız.",
        explanation:
          "Fiil 'werden ... aufbrechen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis morgen Abend werden wir das Geheimnis gelüftet haben.",
        translation: "Yarın akşam sırrı çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Als Lukas am nächsten Morgen erwachte, hatte der Professor bereits alle Vorbereitungen getroffen.",
        translation:
          "Lukas ertesi sabah uyandığında, profesör zaten tüm hazırlıkları yapmıştı.",
        explanation:
          "Fiil 'erwachte' Präteritum, 'hatte ... getroffen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder.",
      },
      {
        text: "Ich bin schon um fünf Uhr aufgestanden.",
        translation: "Sabah beşte zaten kalktım.",
        explanation:
          "Fiil 'bin ... aufgestanden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Die Tunnel werden wohl seit Jahrhunderten nicht mehr betreten worden sein.",
        translation: "Tüneller yüzyıllardır girilmemiş olacak.",
        explanation:
          "Fiil 'werden ... sein' Futur II formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ich habe alles mitnehmen lassen, was wir brauchen könnten.",
        translation: "İhtiyacımız olabilecek her şeyi aldırdım.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Mitnehmen' mastar, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen.",
        translation: "O zamanlar kimse bana inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Hier muss es sein.",
        translation: "Burası olmalı.",
        explanation:
          "Fiil 'muss' (olmalı) Präsens formundadır, bir tahmini ifade eder. İkinci konumdadır.",
      },
      {
        text: "Unter diesem Felsen wird der Eingang verborgen sein.",
        translation: "Bu kayanın altında giriş gizli olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Mit vereinten Kräften schoben sie den schweren Stein beiseite.",
        translation: "Birleşik güçlerle ağır taşı kenara ittiler.",
        explanation:
          "Fiil 'schoben' (ittiler) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ein kühler Luftzug kam ihnen entgegen.",
        translation: "Soğuk bir hava akımı onlara doğru geldi.",
        explanation:
          "Fiil 'kam' (geldi) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich werde vorangehen.",
        translation: "Önden gideceğim.",
        explanation:
          "Fiil 'werde ... vorangehen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werde' ikinci konumdadır.",
      },
      {
        text: "Wenn wir die Kammer erreicht haben werden, werden wir verstehen.",
        translation: "Odaya ulaştığımızda, anlayacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II, 'werden ... verstehen' Futur I formundadır, gelecekte tamamlanmış bir eylemi ve sonucu ifade eder.",
      },
      {
        text: "Vor ihnen lag ein vollständig erhaltenes unterirdisches Archiv.",
        translation: "Önlerinde tamamen korunmuş bir yeraltı arşivi yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Wir haben tatsächlich gefunden, wonach Generationen von Forschern vergeblich gesucht haben.",
        translation:
          "Gerçekten, nesiller boyu araştırmacıların boşuna aradığı şeyi bulduk.",
        explanation:
          "Fiil 'haben ... gefunden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Dies wird die Geschichte des Bodensees neu schreiben.",
        translation: "Bu, Bodensee tarihini yeniden yazacak.",
        explanation:
          "Fiil 'wird ... schreiben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Lukas drehte sich lächelnd zu seinen Gefährten um.",
        translation: "Lukas gülümseyerek yoldaşlarına döndü.",
        explanation:
          "Fiil 'drehte' (döndü) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Morgen werden wir mit der systematischen Dokumentation begonnen haben.",
        translation:
          "Yarın sistematik belgeleme çalışmalarına başlamış olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "In einem Jahr werden wir der Welt von dieser Entdeckung berichten.",
        translation: "Bir yıl içinde dünyaya bu keşfi bildireceğiz.",
        explanation:
          "Fiil 'werden ... berichten' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "So begann für die drei Freunde ein Abenteuer.",
        translation: "Böylece üç arkadaş için bir macera başladı.",
        explanation:
          "Fiil 'begann' (başladı) Präteritum formundadır, geçmişteki bir başlangıcı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Die geheimnisvolle Begegnung am Bodensee hatte zu einer Entdeckung geführt.",
        translation: "Bodensee'deki gizemli karşılaşma bir keşfe yol açmıştı.",
        explanation:
          "Fiil 'hatte ... geführt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir sonucu ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die ihr Leben für immer verändern wird.",
        translation: "Bu, hayatlarını sonsuza dek değiştirecek.",
        explanation:
          "Fiil 'wird ... verändern' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "1. Bildung der Vergangenheitszeiten",
    sentences: [
      {
        text: "Am frühen Morgen brach Lukas mit Professor Eichendorff und Marcus zum See auf.",
        translation:
          "Sabah erken saatlerde Lukas, Profesör Eichendorff ve Marcus ile göle doğru yola çıktı.",
        explanation:
          "Fiil 'brach' (yola çıktı) Präteritum formundadır, geçmişteki bir olayı anlatır. İkinci konumdadır.",
      },
      {
        text: "Die Sonne schien bereits hell am Himmel, als sie das kleine Boot bestiegen.",
        translation:
          "Onlar küçük tekneye binerken güneş zaten gökyüzünde parlak bir şekilde parlıyordu.",
        explanation:
          "Fiil 'schien' (parlıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'bestiegen' (bindiler) fiili sonda yer alır.",
      },
      {
        text: "Der Professor erklärte ihnen den Weg zu der kleinen Insel.",
        translation: "Profesör onlara küçük adaya giden yolu açıkladı.",
        explanation:
          "Fiil 'erklärte' (açıkladı) Präteritum formundadır, geçmişteki bir eylemi belirtir. 'Ihnen' dativ nesnesidir.",
      },
      {
        text: "Marcus nahm das Ruder in die Hand und steuerte geschickt durch die leichten Wellen.",
        translation:
          "Marcus küreği eline aldı ve hafif dalgalar arasında ustalıkla yönlendirdi.",
        explanation:
          "Fiiller 'nahm' (aldı) ve 'steuerte' (yönlendirdi) Präteritum formundadır, geçmişteki eylemleri ifade eder. Her ikisi de ikinci konumdadır.",
      },
      {
        text: "Der Wind wehte sanft, und die Vögel kreisten über ihnen.",
        translation:
          "Rüzgar hafifçe esiyordu ve kuşlar üzerlerinde daireler çiziyordu.",
        explanation:
          "Fiiller 'wehte' (esiyordu) ve 'kreisten' (daireler çiziyordu) Präteritum formundadır, geçmişteki durumu anlatır. İkisi de ikinci konumdadır.",
      },
      {
        text: "Vor dreißig Jahren entdeckte ich in der Bibliothek des Klosters Reichenau einen Hinweis.",
        translation:
          "Otuz yıl önce Reichenau Manastırı kütüphanesinde bir ipucu keşfettim.",
        explanation:
          "Fiil 'entdeckte' (keşfettim) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich verbrachte damals Monate mit der Suche.",
        translation: "O zamanlar aylarca aramakla geçirdim.",
        explanation:
          "Fiil 'verbrachte' (geçirdim) Präteritum formundadır, geçmişteki bir süreci ifade eder. İkinci konumdadır.",
      },
      {
        text: "Bis ich sie endlich fand.",
        translation: "Ta ki onları sonunda bulana kadar.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir sonucu belirtir. İkinci konumdadır.",
      },
      {
        text: "Doch dann geschah etwas Unerwartetes – ich musste sie verstecken.",
        translation:
          "Ama sonra beklenmedik bir şey oldu – onları saklamak zorunda kaldım.",
        explanation:
          "Fiiller 'geschah' (oldu) ve 'musste' (zorunda kaldım) Präteritum formundadır, geçmişteki olayları ifade eder. İkisi de ikinci konumdadır.",
      },
      {
        text: "Lukas hörte aufmerksam zu.",
        translation: "Lukas dikkatle dinledi.",
        explanation:
          "Fiil 'hörte' (dinledi) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Der ernste Blick des Professors ließ keinen Zweifel daran, dass er die Wahrheit sprach.",
        translation:
          "Profesörün ciddi bakışı, gerçeği konuştuğuna dair hiçbir şü  bırakmadı.",
        explanation:
          "Fiil 'ließ' (bırakmadı) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'sprach' (konuştu) fiili sonda yer alır.",
      },
      {
        text: "Ich habe diese Geschichte noch nie jemandem erzählt.",
        translation: "Bu hikayeyi daha önce hiç kimseye anlatmadım.",
        explanation:
          "Fiil 'habe ... erzählt' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Nur Marcus hat über die Jahre von meinen Forschungen erfahren.",
        translation:
          "Yıllar boyunca sadece Marcus araştırmalarımdan haberdar oldu.",
        explanation:
          "Fiil 'hat ... erfahren' Perfekt formundadır, geçmişteki bir süreci ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Lukas war erstaunt, dass sein Freund ihm nie davon berichtet hat.",
        translation:
          "Lukas, arkadaşının ona bundan hiç bahsetmediğine şaşırdı.",
        explanation:
          "Fiil 'war' Präteritum, yan cümlede 'hat ... berichtet' Perfekt formundadır, geçmişteki bir durumu ve tamamlanmış bir eylemi ifade eder.",
      },
      {
        text: "Wir haben es für besser gehalten, dich erst jetzt einzuweihen.",
        translation: "Seni şimdi bilgilendirmeyi daha iyi bulduk.",
        explanation:
          "Fiil 'haben ... gehalten' Perfekt formundadır, geçmişteki bir kararı ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Die kleine Gruppe ist inzwischen an der Insel angekommen.",
        translation: "Küçük grup bu arada adaya varmıştı.",
        explanation:
          "Fiil 'ist ... angekommen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Ist' ikinci konumdadır.",
      },
      {
        text: "Hier habe ich vor Jahren die Nacht verbracht und die Dokumente versteckt.",
        translation:
          "Burada yıllar önce geceyi geçirdim ve belgeleri sakladım.",
        explanation:
          "Fiiller 'habe ... verbracht' ve 'versteckt' Perfekt formundadır, geçmişteki tamamlanmış eylemleri ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie auf der Insel ankamen, hatte Lukas schon viel über die mittelalterliche Geschichte gelernt.",
        translation:
          "Adaya varmadan önce Lukas ortaçağ tarihi hakkında çok şey öğrenmişti.",
        explanation:
          "Fiil 'hatte ... gelernt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Der Professor hatte ihm während der Bootsfahrt von den alten Klöstern erzählt.",
        translation:
          "Profesör ona tekne yolculuğu sırasında eski manastırlardan bahsetmişti.",
        explanation:
          "Fiil 'hatte ... erzählt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Marcus hatte diese Geschichten bereits als Kind gehört.",
        translation: "Marcus bu hikayeleri çocukken zaten duymuştu.",
        explanation:
          "Fiil 'hatte ... gehört' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die Dokumente waren ursprünglich Teil einer größeren Sammlung gewesen.",
        translation: "Belgeler aslen daha büyük bir koleksiyonun parçasıydı.",
        explanation:
          "Fiil 'waren ... gewesen' Plusquamperfekt formundadır, geçmişteki bir durumdan önceki bir durumu ifade eder. 'Waren' ikinci konumdadır.",
      },
      {
        text: "Ich hatte nie damit gerechnet, dass meine Forschungen mich hierher führen würden.",
        translation:
          "Araştırmalarımın beni buraya getireceğini hiç beklememiştim.",
        explanation:
          "Fiil 'hatte ... gerechnet' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir beklentiyi ifade eder. 'Hatte' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "2. Besondere Perfektformen: Modalverben und sehen, hören, lassen",
    sentences: [
      {
        text: "Als Student habe ich die alten Pergamente zum ersten Mal sehen können.",
        translation: "Öğrenciyken eski parşömenleri ilk kez görebildim.",
        explanation:
          "Fiil 'habe ... können' Perfekt formunda, modal fiil 'können' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir yeteneği ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen, dass sie von historischer Bedeutung sind.",
        translation:
          "O zamanlar kimse onların tarihi önemine inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar olarak kullanılır, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Der Professor hat mir oft erzählen müssen, wie er nächtelang in den Archiven arbeiten müssen hat.",
        translation:
          "Profesör bana sık sık, gecelerce arşivlerde çalışmak zorunda kaldığını anlatmak zorunda kaldı.",
        explanation:
          "Fiil 'hat ... müssen' Perfekt formunda, iki kez modal fiil 'müssen' ile birlikte. 'Erzählen' ve 'arbeiten' mastar olarak kullanılır, geçmişteki zorunluluğu ifade eder.",
      },
      {
        text: "In der Klosterbibliothek habe ich einmal einen alten Mönch eine seltsame Melodie singen hören.",
        translation:
          "Manastır kütüphanesinde bir keresinde yaşlı bir keşişin garip bir melodi söylediğini duydum.",
        explanation:
          "Fiil 'habe ... hören' Perfekt formunda, algı fiili 'hören' ile birlikte. 'Singen' mastar olarak kullanılır, geçmişteki bir algıyı ifade eder.",
      },
      {
        text: "Diese Melodie hat mir später den Weg zeigen sollen.",
        translation: "Bu melodi daha sonra bana yolu gösterecekti.",
        explanation:
          "Fiil 'hat ... sollen' Perfekt formunda, modal fiil 'sollen' ile birlikte. 'Zeigen' mastar olarak kullanılır, geçmişteki bir amacı ifade eder.",
      },
      {
        text: "Haben Sie die Originaldokumente jemals fotografieren lassen?",
        translation: "Orijinal belgeleri hiç fotoğraflattınız mı?",
        explanation:
          "Fiil 'haben ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Fotografieren' mastar olarak kullanılır, geçmişteki bir eylemi sorgular.",
      },
      {
        text: "Ich habe damals niemandem trauen dürfen.",
        translation: "O zamanlar kimseye güvenmemeliydim.",
        explanation:
          "Fiil 'habe ... dürfen' Perfekt formunda, modal fiil 'dürfen' ile birlikte. 'Trauen' mastar olarak kullanılır, geçmişteki bir izni ifade eder.",
      },
      {
        text: "Ich habe alles genau abzeichnen lassen.",
        translation: "Her şeyi tam olarak çizdirdim.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Abzeichnen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Der Professor hat mir die Kopien sehen lassen.",
        translation: "Profesör bana kopyaları gösterdi.",
        explanation:
          "Fiil 'hat ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Deshalb habe ich ihn unterstützen wollen.",
        translation: "Bu yüzden onu desteklemek istedim.",
        explanation:
          "Fiil 'habe ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Unterstützen' mastar olarak kullanılır, geçmişteki bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "3. Gebrauch von Zeiten der Vergangenheit",
    sentences: [
      {
        text: "Als sie tiefer in die Insel vordrangen, erzählte der Professor von seinen Entdeckungen.",
        translation:
          "Adaya daha derinlemesine ilerlediklerinde, profesör keşiflerinden bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) Präteritum formundadır, geçmişteki bir anlatımı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich fand die ersten Hinweise im Jahr 1985.",
        translation: "İlk ipuçlarını 1985 yılında buldum.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Damals arbeitete ich noch an der Universität Konstanz.",
        translation: "O zamanlar hâlâ Konstanz Üniversitesi'nde çalışıyordum.",
        explanation:
          "Fiil 'arbeitete' (çalışıyordum) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "In jenem Sommer habe ich meine wichtigste Entdeckung gemacht.",
        translation: "O yaz en önemli keşfimi yaptım.",
        explanation:
          "Fiil 'habe ... gemacht' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi vurgular. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Ich bin durch Zufall auf einen verschlüsselten Text gestoßen.",
        translation: "Tesadüfen şifreli bir metne rastladım.",
        explanation:
          "Fiil 'bin ... gestoßen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Bevor der Professor diesen Text entdeckt hatte, hatten viele Historiker die Existenz dieses Archivs nur für eine Legende gehalten.",
        translation:
          "Profesör bu metni keşfetmeden önce, birçok tarihçi bu arşivin varlığını sadece bir efsane sanmıştı.",
        explanation:
          "Fiiller 'hatte ... entdeckt' ve 'hatten ... gehalten' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki durumu ifade eder. 'Hatte' ve 'hatten' ikinci konumdadır.",
      },
      {
        text: "Hier versteckte ich die Dokumente vor genau fünfzehn Jahren.",
        translation: "Tam on beş yıl önce burada belgeleri sakladım.",
        explanation:
          "Fiil 'versteckte' (sakladım) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich hatte zuvor sichergestellt, dass der Ort trocken und geschützt war.",
        translation:
          "Daha önce buranın kuru ve korunaklı olduğundan emin olmuştum.",
        explanation:
          "Fiil 'hatte ... sichergestellt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Seitdem bin ich nicht mehr hier gewesen.",
        translation: "O zamandan beri burada bulunmadım.",
        explanation:
          "Fiil 'bin ... gewesen' Perfekt formundadır, geçmişten bugüne kadar olan bir durumu ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Habt ihr beide jemals darüber nachgedacht, was in diesen Dokumenten stehen könnte?",
        translation:
          "İkiniz hiç bu belgelerde neler olabileceği hakkında düşündünüz mü?",
        explanation:
          "Fiil 'habt ... nachgedacht' Perfekt formundadır, geçmişteki bir düşünce sürecini sorgular. 'Habt' ikinci konumdadır.",
      },
      {
        text: "Wir haben oft darüber diskutiert.",
        translation: "Bunu sık sık tartıştık.",
        explanation:
          "Fiil 'haben ... diskutiert' Perfekt formundadır, geçmişteki tekrarlanan bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Der Professor vermutete, dass sie ein Geheimnis enthüllen.",
        translation:
          "Profesör, onların bir sırrı açığa çıkaracağını tahmin etti.",
        explanation:
          "Fiil 'vermutete' (tahmin etti) Präteritum formundadır, geçmişteki bir tahmini ifade eder. Yan cümlede fiil sonda yer alır.",
      },
    ],
  },
  {
    title: "4. Vermutung und Zukunft mit dem Futur",
    sentences: [
      {
        text: "Was werden wir in den Dokumenten finden?",
        translation: "Belgelerde ne bulacağız?",
        explanation:
          "Fiil 'werden ... finden' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Die Pergamente werden uns Aufschluss über die geheimen Tunnel geben.",
        translation: "Parşömenler bize gizli tüneller hakkında bilgi verecek.",
        explanation:
          "Fiil 'werden ... geben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Morgen werden wir bereits mit der Übersetzung beginnen.",
        translation: "Yarın zaten çeviriye başlayacağız.",
        explanation:
          "Fiil 'werden ... beginnen' Futur I formundadır, yakın gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ihr werdet erstaunt sein, was diese alten Texte offenbaren.",
        translation:
          "Bu eski metinlerin neler ortaya koyacağına şaşıracaksınız.",
        explanation:
          "Fiil 'werdet ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werdet' ikinci konumdadır.",
      },
      {
        text: "Der Schatz wird wohl in einer der Höhlen versteckt sein.",
        translation: "Hazine muhtemelen mağaralardan birinde saklı olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Er wird vermutlich aus Gold und wertvollen Manuskripten bestehen.",
        translation: "Muhtemelen altın ve değerli el yazmalarından oluşacak.",
        explanation:
          "Fiil 'wird ... bestehen' Futur I formundadır, 'vermutlich' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Du wirst wohl vom großen Reichtum träumen.",
        translation: "Muhtemelen büyük bir zenginlik hayali kuruyorsun.",
        explanation:
          "Fiil 'wirst ... träumen' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wirst' ikinci konumdadır.",
      },
      {
        text: "Die wahre Bedeutung wird eine andere sein.",
        translation: "Gerçek anlam başka olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Die Einheimischen werden nichts von diesem Ort wissen.",
        translation: "Yerliler bu yer hakkında hiçbir şey bilmeyecek.",
        explanation:
          "Fiil 'werden ... wissen' Futur I formundadır, bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Sonst wird es hier nicht so verlassen sein.",
        translation: "Aksi takdirde burası bu kadar terk edilmiş olmaz.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Bis heute Abend werden wir alle Dokumente gesichtet haben.",
        translation: "Bu akşam tüm belgeleri gözden geçirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende der Woche werden wir die wichtigsten Passagen übersetzt haben.",
        translation:
          "Hafta sonuna kadar en önemli pasajları çevirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Wenn wir zurückkehren, werden die anderen Wissenschaftler überrascht sein.",
        translation: "Döndüğümüzde diğer bilim insanları şaşıracak.",
        explanation:
          "Fiil 'werden ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis dahin wird die Welt noch nichts von unserer Entdeckung erfahren haben.",
        translation: "O zamana kadar dünya keşfimizden haberdar olmayacak.",
        explanation:
          "Fiil 'wird ... haben' Futur II formundadır, gelecekte tamamlanmamış bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "5. Überblick über die Zeiten im Deutschen",
    sentences: [
      {
        text: "Mit zitternden Händen zog der Professor eine wasserdichte Metallschatulle aus der Höhlung.",
        translation:
          "Titreyen ellerle profesör, kayanın oyuğundan su geçirmez bir metal kutu çıkardı.",
        explanation:
          "Fiil 'zog' (çıkardı) Präteritum formundadır, geçmişteki bir eylemi anlatır. İkinci konumdadır.",
      },
      {
        text: "Eine historische Entdeckung lag vor ihnen.",
        translation: "Onların önünde tarihi bir keşif yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich habe all die Jahre darauf gewartet, diese Dokumente wieder in den Händen zu halten.",
        translation: "Bunca yıl bu belgeleri tekrar elimde tutmayı bekledim.",
        explanation:
          "Fiil 'habe ... gewartet' Perfekt formundadır, geçmişten bugüne uzanan bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie die Schatulle öffneten, hatte der Professor bereits spezielle Handschuhe angezogen.",
        translation:
          "Kutuyu açmadan önce profesör zaten özel eldivenler giymişti.",
        explanation:
          "Fiil 'hatte ... angezogen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Wir werden diese Dokumente sorgfältig untersuchen.",
        translation: "Bu belgeleri dikkatle inceleyeceğiz.",
        explanation:
          "Fiil 'werden ... untersuchen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende des Jahres werden wir alle Texte entschlüsselt haben.",
        translation: "Yıl sonuna kadar tüm metinleri çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Während sie vorsichtig das erste Pergament entfalten, halten alle drei den Atem an.",
        translation:
          "İlk parşömeni dikkatlice açarken, üçü de nefeslerini tutuyor.",
        explanation:
          "Fiil 'halten' (tutuyor) Präsens formundadır, şu anki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Hier steht etwas in einer alten Geheimschrift, die ich kenne.",
        translation:
          "Burada bildiğim eski bir gizli yazıyla yazılmış bir şey var.",
        explanation:
          "Fiil 'steht' (var) Präsens formundadır, mevcut bir durumu ifade eder. İkinci konumdadır.",
      },
    ],
  },
  {
    title: "6. Zeiten – Eine gemeinsame Geschichte erzählen",
    sentences: [
      {
        text: "Die drei Abenteurer saßen bis spät in die Nacht im Hotelzimmer.",
        translation:
          "Üç maceraperest gece geç saatlere kadar otel odasında oturdu.",
        explanation:
          "Fiil 'saßen' (oturdu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Der Professor hatte bereits vor Jahren einen Schlüssel für die seltsame Codierung entwickelt.",
        translation:
          "Profesör yıllar önce garip kodlama için bir anahtar geliştirmişti.",
        explanation:
          "Fiil 'hatte ... entwickelt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Ich habe so etwas noch nie gesehen.",
        translation: "Böyle bir şeyi daha önce hiç görmedim.",
        explanation:
          "Fiil 'habe ... gesehen' Perfekt formundadır, geçmişteki bir deneyimi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Marcus hat plötzlich aufgeregt ausgerufen: 'Dort unten muss ein verborgener Raum sein!'",
        translation:
          "Marcus birden heyecanla bağırdı: 'Orada gizli bir oda olmalı!'",
        explanation:
          "Fiil 'hat ... ausgerufen' Perfekt formundadır, geçmişteki ani bir eylemi ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Wir werden morgen früh aufbrechen und diesen Ort finden.",
        translation: "Yarın sabah yola çıkacağız ve bu yeri bulacağız.",
        explanation:
          "Fiil 'werden ... aufbrechen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis morgen Abend werden wir das Geheimnis gelüftet haben.",
        translation: "Yarın akşam sırrı çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Als Lukas am nächsten Morgen erwachte, hatte der Professor bereits alle Vorbereitungen getroffen.",
        translation:
          "Lukas ertesi sabah uyandığında, profesör zaten tüm hazırlıkları yapmıştı.",
        explanation:
          "Fiil 'erwachte' Präteritum, 'hatte ... getroffen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder.",
      },
      {
        text: "Ich bin schon um fünf Uhr aufgestanden.",
        translation: "Sabah beşte zaten kalktım.",
        explanation:
          "Fiil 'bin ... aufgestanden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Die Tunnel werden wohl seit Jahrhunderten nicht mehr betreten worden sein.",
        translation: "Tüneller yüzyıllardır girilmemiş olacak.",
        explanation:
          "Fiil 'werden ... sein' Futur II formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ich habe alles mitnehmen lassen, was wir brauchen könnten.",
        translation: "İhtiyacımız olabilecek her şeyi aldırdım.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Mitnehmen' mastar, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen.",
        translation: "O zamanlar kimse bana inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Hier muss es sein.",
        translation: "Burası olmalı.",
        explanation:
          "Fiil 'muss' (olmalı) Präsens formundadır, bir tahmini ifade eder. İkinci konumdadır.",
      },
      {
        text: "Unter diesem Felsen wird der Eingang verborgen sein.",
        translation: "Bu kayanın altında giriş gizli olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Mit vereinten Kräften schoben sie den schweren Stein beiseite.",
        translation: "Birleşik güçlerle ağır taşı kenara ittiler.",
        explanation:
          "Fiil 'schoben' (ittiler) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ein kühler Luftzug kam ihnen entgegen.",
        translation: "Soğuk bir hava akımı onlara doğru geldi.",
        explanation:
          "Fiil 'kam' (geldi) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich werde vorangehen.",
        translation: "Önden gideceğim.",
        explanation:
          "Fiil 'werde ... vorangehen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werde' ikinci konumdadır.",
      },
      {
        text: "Wenn wir die Kammer erreicht haben werden, werden wir verstehen.",
        translation: "Odaya ulaştığımızda, anlayacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II, 'werden ... verstehen' Futur I formundadır, gelecekte tamamlanmış bir eylemi ve sonucu ifade eder.",
      },
      {
        text: "Vor ihnen lag ein vollständig erhaltenes unterirdisches Archiv.",
        translation: "Önlerinde tamamen korunmuş bir yeraltı arşivi yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Wir haben tatsächlich gefunden, wonach Generationen von Forschern vergeblich gesucht haben.",
        translation:
          "Gerçekten, nesiller boyu araştırmacıların boşuna aradığı şeyi bulduk.",
        explanation:
          "Fiil 'haben ... gefunden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Dies wird die Geschichte des Bodensees neu schreiben.",
        translation: "Bu, Bodensee tarihini yeniden yazacak.",
        explanation:
          "Fiil 'wird ... schreiben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Lukas drehte sich lächelnd zu seinen Gefährten um.",
        translation: "Lukas gülümseyerek yoldaşlarına döndü.",
        explanation:
          "Fiil 'drehte' (döndü) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Morgen werden wir mit der systematischen Dokumentation begonnen haben.",
        translation:
          "Yarın sistematik belgeleme çalışmalarına başlamış olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "In einem Jahr werden wir der Welt von dieser Entdeckung berichten.",
        translation: "Bir yıl içinde dünyaya bu keşfi bildireceğiz.",
        explanation:
          "Fiil 'werden ... berichten' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "So begann für die drei Freunde ein Abenteuer.",
        translation: "Böylece üç arkadaş için bir macera başladı.",
        explanation:
          "Fiil 'begann' (başladı) Präteritum formundadır, geçmişteki bir başlangıcı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Die geheimnisvolle Begegnung am Bodensee hatte zu einer Entdeckung geführt.",
        translation: "Bodensee'deki gizemli karşılaşma bir keşfe yol açmıştı.",
        explanation:
          "Fiil 'hatte ... geführt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir sonucu ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die ihr Leben für immer verändern wird.",
        translation: "Bu, hayatlarını sonsuza dek değiştirecek.",
        explanation:
          "Fiil 'wird ... verändern' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "1. Modalverben in der Grundbedeutung",
    sentences: [
      {
        text: "Sara musste früh aufstehen.",
        translation: "Sara erken kalkmak zorundaydı.",
        explanation:
          "Modal fiil 'musste' (zorundaydı) Präteritum, zorunluluğu ifade eder. Mastar 'aufstehen' sonda.",
      },
      {
        text: "Sie sollte heute in der alten Stadtbibliothek arbeiten.",
        translation: "Bugün eski şehir kütüphanesinde çalışması gerekiyordu.",
        explanation:
          "Modal fiil 'sollte' (gerekliydi) Präteritum, bir beklenti veya görevi ifade eder. Mastar 'arbeiten' sonda.",
      },
      {
        text: "Sie durfte auf keinen Fall zu spät kommen.",
        translation: "Hiçbir şekilde geç kalmamalıydı.",
        explanation:
          "Modal fiil 'durfte' (izinliydi/olmamalıydı) Präteritum, izin veya yasaklamayı ifade eder. Mastar 'kommen' sonda.",
      },
      {
        text: "Sie konnte endlich praktische Erfahrungen sammeln.",
        translation: "Sonunda pratik deneyimler toplayabiliyordu.",
        explanation:
          "Modal fiil 'konnte' (biliyordu) Präteritum, yeteneği ifade eder. Mastar 'sammeln' sonda.",
      },
      {
        text: "Sie wollte einen guten Eindruck machen.",
        translation: "İyi bir izlenim bırakmak istiyordu.",
        explanation:
          "Modal fiil 'wollte' (istiyordu) Präteritum, isteği ifade eder. Mastar 'machen' sonda.",
      },
      {
        text: "Ich mag vielleicht neu sein, aber ich kann schon viel.",
        translation: "Belki yeni olabilirim, ama zaten çok şey yapabilirim.",
        explanation:
          "Modal fiiller 'mag' (olabilir) ve 'kann' (yapabilirim) Präsens, olasılık ve yeteneği ifade eder. 'Sein' ve fiil sonda.",
      },
      {
        text: "Sie müssen um acht Uhr da sein.",
        translation: "Saat sekizde orada olmalısınız.",
        explanation:
          "Modal fiil 'müssen' (olmalısınız) Präsens, zorunluluğu ifade eder. Mastar 'sein' sonda.",
      },
      {
        text: "Wir wollen mit der Katalogisierung beginnen.",
        translation: "Kataloglamaya başlamak istiyoruz.",
        explanation:
          "Modal fiil 'wollen' (istiyoruz) Präsens, isteği ifade eder. Mastar 'beginnen' sonda.",
      },
      {
        text: "Sie durfte ihren Studentenausweis nicht vergessen.",
        translation: "Öğrenci kimliğini unutmamalıydı.",
        explanation:
          "Modal fiil 'durfte' (izinliydi/olmamalıydı) Präteritum, yasaklamayı ifade eder. Mastar 'vergessen' sonda.",
      },
      {
        text: "Sie soll pünktlich sein.",
        translation: "Zamanında olmalı.",
        explanation:
          "Modal fiil 'soll' (olmalı) Präsens, bir beklenti veya görevi ifade eder. Mastar 'sein' sonda.",
      },
    ],
  },
  {
    title:
      "2. Andere Bedeutung von Modalverben: Vermutungen über die Gegenwart",
    sentences: [
      {
        text: "Herr Weber muss noch nicht hier sein.",
        translation: "Bay Weber henüz burada değildir herhalde.",
        explanation:
          "Modal fiil 'muss' (herhalde) Präsens, mevcut durum hakkında tahmini ifade eder. Mastar 'sein' sonda.",
      },
      {
        text: "Er könnte vielleicht den Hintereingang benutzen.",
        translation: "Belki arka girişi kullanıyordur.",
        explanation:
          "Modal fiil 'könnte' (belki) Konjunktiv II, mevcut durum hakkında tahmini ifade eder. Mastar 'benutzen' sonda.",
      },
      {
        text: "Sie dürften auf Herrn Weber warten.",
        translation: "Bay Weber’i bekliyor olmalısınız.",
        explanation:
          "Modal fiil 'dürften' (olmalısınız) Konjunktiv II, mevcut durum hakkında nazik bir tahmini ifade eder. Mastar 'warten' sonda.",
      },
      {
        text: "Er mag normalerweise pünktlich sein.",
        translation: "Normalde zamanında olabilir.",
        explanation:
          "Modal fiil 'mag' (olabilir) Präsens, mevcut durum hakkında olasılığı ifade eder. Mastar 'sein' sonda.",
      },
      {
        text: "Er soll bei einer Besprechung im Rathaus sein.",
        translation: "Belediye binasında bir toplantıda olmalı.",
        explanation:
          "Modal fiil 'soll' (olmalı) Präsens, mevcut durum hakkında tahmini ifade eder. Mastar 'sein' sonda.",
      },
      {
        text: "Er müsste aber bald kommen.",
        translation: "Ama yakında gelmesi gerekir.",
        explanation:
          "Modal fiil 'müsste' (gerekir) Konjunktiv II, mevcut durum hakkında tahmini ifade eder. Mastar 'kommen' sonda.",
      },
      {
        text: "Das kann stimmen.",
        translation: "Bu doğru olabilir.",
        explanation:
          "Modal fiil 'kann' (olabilir) Präsens, mevcut durum hakkında olasılığı ifade eder. Mastar 'stimmen' sonda.",
      },
      {
        text: "Er kann die Zeit vergessen haben.",
        translation: "Zamanı unutmuş olabilir.",
        explanation:
          "Modal fiil 'kann' (olabilir) Präsens, mevcut durum hakkında tahmini ifade eder. Perfekt mastar 'vergessen haben' sonda.",
      },
      {
        text: "Sie müssen die neue Praktikantin sein.",
        translation: "Yeni stajyer olmalısınız.",
        explanation:
          "Modal fiil 'müssen' (olmalısınız) Präsens, mevcut durum hakkında tahmini ifade eder. Mastar 'sein' sonda.",
      },
      {
        text: "Herr Weber will immer alles perfekt organisieren.",
        translation: "Bay Weber her şeyi mükemmel organize etmek ister.",
        explanation:
          "Modal fiil 'will' (ister) Präsens, alışkanlık veya eğilimi ifade eder. Mastar 'organisieren' sonda.",
      },
      {
        text: "Er kann manchmal wichtige Informationen vergessen.",
        translation: "Bazen önemli bilgileri unutabilir.",
        explanation:
          "Modal fiil 'kann' (unutabilir) Präsens, mevcut durum hakkında olasılığı ifade eder. Mastar 'vergessen' sonda.",
      },
    ],
  },
  {
    title:
      "3. Andere Bedeutung von Modalverben: Vermutungen über die Vergangenheit",
    sentences: [
      {
        text: "Sie müssen die U-Bahn erwischt haben.",
        translation: "Metroyu yakalamış olmalısınız.",
        explanation:
          "Modal fiil 'müssen' (olmalısınız) Präsens, geçmiş hakkında tahmini ifade eder. Perfekt mastar 'erwischt haben' sonda.",
      },
      {
        text: "Ich sollte pünktlich sein und bin deshalb früher losgegangen.",
        translation: "Zamanında olmalıydım ve bu yüzden erken yola çıktım.",
        explanation:
          "Modal fiil 'sollte' (olmalıydım) Präteritum, geçmişteki bir görevi ifade eder. Mastar 'sein' sonda.",
      },
      {
        text: "Sie müssten sie erhalten haben?",
        translation: "Onu almış olmalısınız, değil mi?",
        explanation:
          "Modal fiil 'müssten' (olmalısınız) Konjunktiv II, geçmiş hakkında tahmini ifade eder. Perfekt mastar 'erhalten haben' sonda.",
      },
      {
        text: "Der letzte Praktikant konnte mit den alten Handschriften nicht umgehen.",
        translation: "Son stajyer eski el yazmalarıyla başa çıkamadı.",
        explanation:
          "Modal fiil 'konnte' (başarabildi) Präteritum, geçmişteki yeteneksizliği ifade eder. Mastar 'umgehen' sonda.",
      },
      {
        text: "Er mag wohl nicht so sorgfältig gewesen sein.",
        translation: "Muhtemelen o kadar dikkatli olmamıştır.",
        explanation:
          "Modal fiil 'mag' (olabilir) Präsens, geçmiş hakkında tahmini ifade eder. Perfekt mastar 'gewesen sein' sonda.",
      },
      {
        text: "Er sollte eigentlich die Sammlung im Keller ordnen.",
        translation: "Aslında bodrumdaki koleksiyonu düzenlemeliydi.",
        explanation:
          "Modal fiil 'sollte' (gerekliydi) Präteritum, geçmişteki bir görevi ifade eder. Mastar 'ordnen' sonda.",
      },
      {
        text: "Er dürfte die Aufgabe zu langweilig gefunden haben.",
        translation: "Görevi çok sıkıcı bulmuş olmalı.",
        explanation:
          "Modal fiil 'dürfte' (olmalı) Konjunktiv II, geçmiş hakkında tahmini ifade eder. Perfekt mastar 'gefunden haben' sonda.",
      },
      {
        text: "Wir hätten genauere Anweisungen geben müssen.",
        translation: "Daha kesin talimatlar vermeliydik.",
        explanation:
          "Modal fiil 'hätten ... müssen' Konjunktiv II Perfekt, geçmişteki bir zorunluluğu ifade eder. Mastar 'geben' sonda.",
      },
    ],
  },
  {
    title: "4. Das Verb lassen",
    sentences: [
      {
        text: "Herr Weber ließ Sara an einem alten Schreibtisch Platz nehmen.",
        translation: "Bay Weber, Sara’yı eski bir masada oturtmaya bıraktı.",
        explanation:
          "Fiil 'ließ' (bıraktı) Präteritum, causative anlamında, bir eylemin yapılmasını sağlama. Mastar 'Platz nehmen' sonda.",
      },
      {
        text: "Ich lasse Sie hier allein arbeiten.",
        translation: "Sizi burada yalnız çalışmaya bırakıyorum.",
        explanation:
          "Fiil 'lasse' (bırakıyorum) Präsens, causative anlamında, bir eylemin yapılmasına izin verme. Mastar 'arbeiten' sonda.",
      },
      {
        text: "Lassen Sie bitte die besonders wertvollen Dokumente in ihren Schutzhüllen.",
        translation:
          "Lütfen özellikle değerli belgeleri koruyucu kaplarında bırakın.",
        explanation:
          "Fiil 'lassen' (bırakın) Imperativ, rica anlamında, bir eylemin yapılmasını isteme. Mastar 'bleiben' sonda (örtük).",
      },
      {
        text: "Diese Sammlung lässt mich immer wieder staunen.",
        translation: "Bu koleksiyon beni her zaman hayrete düşürüyor.",
        explanation:
          "Fiil 'lässt' (düşürüyor) Präsens, duygusal etki anlamında, bir şeyin bir duyguya yol açması. Mastar 'staunen' sonda.",
      },
      {
        text: "Lassen Sie sich Zeit, um sich mit allem vertraut zu machen.",
        translation: "Her şeye alışmak için kendinize zaman tanıyın.",
        explanation:
          "Fiil 'lassen' (tanıyın) Imperativ, reflexive anlamında, bir eylemin rahatça yapılmasını isteme. Mastar 'vertraut machen' sonda.",
      },
      {
        text: "Ich lasse mich nicht so leicht ablenken.",
        translation: "Kolayca dikkatin dağılmasına izin vermem.",
        explanation:
          "Fiil 'lasse' (izin vermem) Präsens, reflexive anlamında, bir duruma izin vermeme. Mastar 'ablenken' sonda.",
      },
      {
        text: "Wo haben Sie die Katalogisierungssoftware installieren lassen?",
        translation: "Kataloglama yazılımını nerede kurdurdunuz?",
        explanation:
          "Fiil 'haben ... lassen' Perfekt, causative anlamında, bir eylemin başkasına yaptırılması. Mastar 'installieren' sonda.",
      },
      {
        text: "Ich habe sie auf dem Computer einrichten lassen.",
        translation: "Onu bilgisayara kurdurdum.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt, causative anlamında, bir eylemin başkasına yaptırılması. Mastar 'einrichten' sonda.",
      },
      {
        text: "Lassen Sie uns gemeinsam die ersten Einträge machen.",
        translation: "İlk girişleri birlikte yapmamıza izin verin.",
        explanation:
          "Fiil 'lassen' (izin verin) Imperativ, ortak bir eylemi önerme. Mastar 'machen' sonda.",
      },
      {
        text: "Die alten Karten lassen sich besonders schwer kategorisieren.",
        translation: "Eski haritalar özellikle zor kategorize ediliyor.",
        explanation:
          "Fiil 'lassen' (ediliyor) Präsens, reflexive anlamında, bir eylemin zorluğunu ifade eder. Mastar 'kategorisieren' sonda.",
      },
    ],
  },
  {
    title: "5. Trennbare und untrennbare Verben 1",
    sentences: [
      {
        text: "Sara fing sofort mit der Arbeit an.",
        translation: "Sara hemen işe başladı.",
        explanation:
          "Trennbare fiil 'anfangen' (başlamak), Präteritum 'fing ... an'. Önek 'an' cümle sonunda yer alır.",
      },
      {
        text: "Sie nahm vorsichtig eine alte Karte heraus.",
        translation: "Dikkatlice eski bir harita çıkardı.",
        explanation:
          "Trennbare fiil 'herausnehmen' (çıkarmak), Präteritum 'nahm ... heraus'. Önek 'heraus' cümle sonunda yer alır.",
      },
      {
        text: "Herr Weber kam zurück und beobachtete ihre sorgfältige Arbeit.",
        translation:
          "Bay Weber geri geldi ve onun dikkatli çalışmasını gözlemledi.",
        explanation:
          "Trennbare fiil 'zurückkommen' (geri gelmek), Präteritum 'kam ... zurück'. Önek 'zurück' cümle sonunda yer alır.",
      },
      {
        text: "Sie verstehen schnell.",
        translation: "Hızlı anlıyorsunuz.",
        explanation:
          "Untrennbare fiil 'verstehen' (anlamak), Präsens 'verstehen'. Önek 'ver-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Ich bereite gerade die Einträge für die ersten zehn Dokumente vor.",
        translation: "Şu anda ilk on belge için girişleri hazırlıyorum.",
        explanation:
          "Trennbare fiil 'vorbereiten' (hazırlamak), Präsens 'bereite ... vor'. Önek 'vor' cümle sonunda yer alır.",
      },
      {
        text: "Ich stelle eine Liste der beschädigten Exemplare zusammen.",
        translation: "Hasarlı kopyaların bir listesini derliyorum.",
        explanation:
          "Trennbare fiil 'zusammenstellen' (derlemek), Präsens 'stelle ... zusammen'. Önek 'zusammen' cümle sonunda yer alır.",
      },
      {
        text: "Ich umreiße später den Plan für die nächsten Wochen.",
        translation:
          "Daha sonra gelecek haftalar için planı ana hatlarıyla çizeceğim.",
        explanation:
          "Untrennbare fiil 'umreißen' (ana hatlarıyla çizmek), Präsens 'umreiße'. Önek 'um-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Ich stelle Ihnen die anderen Mitarbeiter vor.",
        translation: "Size diğer çalışanları tanıtacağım.",
        explanation:
          "Trennbare fiil 'vorstellen' (tanıtmak), Präsens 'stelle ... vor'. Önek 'vor' cümle sonunda yer alır.",
      },
      {
        text: "Ich habe bereits einige ungewöhnliche Merkmale entdeckt.",
        translation: "Zaten bazı olağandışı özellikleri keşfettim.",
        explanation:
          "Untrennbare fiil 'entdecken' (keşfetmek), Perfekt 'habe ... entdeckt'. Önek 'ent-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Ich habe sie aufgeschrieben.",
        translation: "Onları yazdım.",
        explanation:
          "Trennbare fiil 'aufschreiben' (yazmak), Perfekt 'habe ... aufgeschrieben'. Önek 'auf-' cümle sonunda yer alır.",
      },
      {
        text: "Sie erkennen wirklich interessante Details!",
        translation: "Gerçekten ilginç detayları fark ediyorsunuz!",
        explanation:
          "Untrennbare fiil 'erkennen' (fark etmek), Präsens 'erkennen'. Önek 'er-' ayrılmaz, fiille birleşik kalır.",
      },
    ],
  },
  {
    title: "6. Trennbare und untrennbare Verben 2",
    sentences: [
      {
        text: "Sie entdeckte eine Sammlung alter Briefe zwischen den Karten.",
        translation:
          "Haritalar arasında eski mektuplardan oluşan bir koleksiyon keşfetti.",
        explanation:
          "Untrennbare fiil 'entdecken' (keşfetmek), Präteritum 'entdeckte'. Önek 'ent-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Sie entschloss sich, diese separat zu katalogisieren.",
        translation: "Bunları ayrı ayrı kataloglamaya karar verdi.",
        explanation:
          "Untrennbare fiil 'entschließen' (karar vermek), Präteritum 'entschloss'. Önek 'ent-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Sie besprach ihre Idee mit Herrn Weber.",
        translation: "Fikrini Bay Weber ile tartıştı.",
        explanation:
          "Untrennbare fiil 'besprechen' (tartışmak), Präteritum 'besprach'. Önek 'be-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Er umarmte symbolisch die alten Dokumente.",
        translation: "Eski belgeleri sembolik olarak kucakladı.",
        explanation:
          "Untrennbare fiil 'umarmen' (kucaklamak), Präteritum 'umarmte'. Önek 'um-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Sara erholte sich kurz bei einer Tasse Tee.",
        translation: "Sara bir fincan çay ile kısa bir dinlenme molası verdi.",
        explanation:
          "Untrennbare fiil 'erholen' (dinlenmek), Präteritum 'erholte'. Önek 'er-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Sie erzählte dabei von ihrem Studium.",
        translation: "Bu sırada eğitiminden bahsetti.",
        explanation:
          "Untrennbare fiil 'erzählen' (anlatmak), Präteritum 'erzählte'. Önek 'er-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Ich empfehle Ihnen, sich besonders mit der Geschichte des 19. Jahrhunderts zu beschäftigen.",
        translation:
          "Size özellikle 19. yüzyıl tarihiyle ilgilenmenizi öneriyorum.",
        explanation:
          "Untrennbare fiil 'empfehlen' (önermek), Präsens 'empfehle'. Önek 'em-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Wir bewahren hier viele Dokumente aus dieser Zeit auf.",
        translation: "Burada bu dönemden birçok belgeyi saklıyoruz.",
        explanation:
          "Trennbare fiil 'aufbewahren' (saklamak), Präsens 'bewahren ... auf'. Önek 'auf' cümle sonunda yer alır.",
      },
      {
        text: "Ich entspanne mich am besten bei der Arbeit mit historischen Dokumenten.",
        translation: "En iyi tarihi belgelerle çalışırken rahatlarım.",
        explanation:
          "Untrennbare fiil 'entspannen' (rahatlamak), Präsens 'entspanne'. Önek 'ent-' ayrılmaz, fiille birleşik kalır.",
      },
      {
        text: "Ich entscheide mich wahrscheinlich für eine Spezialisierung in diesem Bereich.",
        translation: "Muhtemelen bu alanda bir uzmanlaşma seçeceğim.",
        explanation:
          "Untrennbare fiil 'entscheiden' (karar vermek), Präsens 'entscheide'. Önek 'ent-' ayrılmaz, fiille birleşik kalır.",
      },
    ],
  },
  {
    title: "1. Genusregeln",
    sentences: [
      {
        text: "Der Student Alex plante einen Ausflug.",
        translation: "Öğrenci Alex bir gezi planladı.",
        explanation:
          "‘Der Student’ maskulin, nominativ. ‘Student’ erkek öğrenciler için maskulin cinsiyet kuralına uyar.",
      },
      {
        text: "Die Reise sollte durch ganz Deutschland führen.",
        translation: "Seyahat tüm Almanya’yı kapsamalıydı.",
        explanation:
          "‘Die Reise’ feminin, nominativ. ‘Reise’ soyut bir kavram olarak genellikle feminin cinsiyet alır.",
      },
      {
        text: "Das Abenteuer begann an einem sonnigen Morgen.",
        translation: "Macera güneşli bir sabah başladı.",
        explanation:
          "‘Das Abenteuer’ nötr, nominativ. ‘Abenteuer’ soyut olaylar için nötr cinsiyet kuralına uyar.",
      },
      {
        text: "Der Rucksack war gepackt.",
        translation: "Sırt çantası hazırlanmıştı.",
        explanation:
          "‘Der Rucksack’ maskulin, nominativ. ‘Rucksack’ somut bir nesne olarak maskulin cinsiyet alır.",
      },
      {
        text: "Die Landkarte lag bereit.",
        translation: "Harita hazır duruyordu.",
        explanation:
          "‘Die Landkarte’ feminin, nominativ. ‘Landkarte’ somut bir nesne olarak feminin cinsiyet alır.",
      },
      {
        text: "Das Handy war aufgeladen.",
        translation: "Telefon şarj edilmişti.",
        explanation:
          "‘Das Handy’ nötr, nominativ. ‘Handy’ teknolojik aletler için nötr cinsiyet kuralına uyar.",
      },
      {
        text: "Die Begeisterung war groß.",
        translation: "Heyecan büyüktü.",
        explanation:
          "‘Die Begeisterung’ feminin, nominativ. ‘Begeisterung’ soyut duygu olarak feminin cinsiyet alır.",
      },
      {
        text: "Der Zug einfuhr.",
        translation: "Tren istasyona girdi.",
        explanation:
          "‘Der Zug’ maskulin, nominativ. ‘Zug’ ulaşım aracı olarak maskulin cinsiyet kuralına uyar.",
      },
      {
        text: "Die Namen der Städte klangen verheißungsvoll.",
        translation: "Şehirlerin isimleri umut verici geliyordu.",
        explanation:
          "‘Die Namen’ feminin, nominativ plural. ‘Name’ soyut bir kavram olarak feminin cinsiyet alır.",
      },
      {
        text: "Der Schwarzwald mit seinen dichten Wäldern.",
        translation: "Yoğun ormanlarıyla Kara Orman.",
        explanation:
          "‘Der Schwarzwald’ maskulin, nominativ. Bölge isimleri genellikle maskulin cinsiyet alır.",
      },
      {
        text: "Die Ostsee mit ihren weiten Stränden.",
        translation: "Geniş plajlarıyla Baltık Denizi.",
        explanation:
          "‘Die Ostsee’ feminin, nominativ. Deniz isimleri genellikle feminin cinsiyet alır.",
      },
      {
        text: "Das Allgäu mit seinen grünen Wiesen.",
        translation: "Yeşil çayırlarıyla Allgäu.",
        explanation:
          "‘Das Allgäu’ nötr, nominativ. Bazı bölge isimleri nötr cinsiyet kuralına uyar.",
      },
      {
        text: "In seinem Notizbuch hatte Alex wichtige Informationen gesammelt.",
        translation: "Alex not defterinde önemli bilgiler toplamıştı.",
        explanation:
          "‘Seinem Notizbuch’ nötr, dativ. ‘Notizbuch’ somut bir nesne olarak nötr cinsiyet alır.",
      },
      {
        text: "Der Preis für das Ticket.",
        translation: "Biletin fiyatı.",
        explanation:
          "‘Der Preis’ maskulin, nominativ. ‘Preis’ soyut bir kavram olarak maskulin cinsiyet alır.",
      },
      {
        text: "Die Adresse der ersten Unterkunft.",
        translation: "İlk konaklama yerinin adresi.",
        explanation:
          "‘Die Adresse’ feminin, nominativ. ‘Adresse’ soyut bir kavram olarak feminin cinsiyet alır.",
      },
      {
        text: "Das Datum der Rückreise.",
        translation: "Dönüş yolculuğunun tarihi.",
        explanation:
          "‘Das Datum’ nötr, nominativ. ‘Datum’ soyut bir kavram olarak nötr cinsiyet alır.",
      },
      {
        text: "Der Tipp eines Freundes führte ihn zur Jugendherberge.",
        translation:
          "Bir arkadaşının önerisi onu gençlik hostelına yönlendirdi.",
        explanation:
          "‘Der Tipp’ maskulin, nominativ. ‘Tipp’ soyut bir öneri olarak maskulin cinsiyet alır.",
      },
      {
        text: "Die Empfehlung eines Reiseblogs.",
        translation: "Bir seyahat blogunun tavsiyesi.",
        explanation:
          "‘Die Empfehlung’ feminin, nominativ. ‘Empfehlung’ soyut bir kavram olarak feminin cinsiyet alır.",
      },
      {
        text: "Das Angebot einer lokalen Tour.",
        translation: "Yerel bir turun teklifi.",
        explanation:
          "‘Das Angebot’ nötr, nominativ. ‘Angebot’ soyut bir kavram olarak nötr cinsiyet alır.",
      },
      {
        text: "Der Bahnhof war voller Menschen.",
        translation: "Tren istasyonu insanlarla doluydu.",
        explanation:
          "‘Der Bahnhof’ maskulin, nominativ. ‘Bahnhof’ bir yapı olarak maskulin cinsiyet alır.",
      },
      {
        text: "Die Atmosphäre aufregend.",
        translation: "Atmosfer heyecan vericiydi.",
        explanation:
          "‘Die Atmosphäre’ feminin, nominativ. ‘Atmosphäre’ soyut bir kavram olarak feminin cinsiyet alır.",
      },
      {
        text: "Das Gefühl von Freiheit unbeschreiblich.",
        translation: "Özgürlük hissi tarif edilemezdi.",
        explanation:
          "‘Das Gefühl’ nötr, nominativ. ‘Gefühl’ soyut bir duygu olarak nötr cinsiyet alır.",
      },
      {
        text: "Der Gedanke an die kommenden Wochen ließ sein Herz höher schlagen.",
        translation: "Gelecek haftalar düşüncesi kalbini daha hızlı attırdı.",
        explanation:
          "‘Der Gedanke’ maskulin, nominativ. ‘Gedanke’ soyut bir kavram olarak maskulin cinsiyet alır.",
      },
      {
        text: "Die Vorfreude überwog alle Bedenken.",
        translation: "Heyecan tüm endişeleri bastırdı.",
        explanation:
          "‘Die Vorfreude’ feminin, nominativ. ‘Vorfreude’ soyut bir duygu olarak feminin cinsiyet alır.",
      },
      {
        text: "Das Lächeln wich nicht mehr von seinem Gesicht.",
        translation: "Gülümseme yüzünden hiç kaybolmadı.",
        explanation:
          "‘Das Lächeln’ nötr, nominativ. ‘Lächeln’ soyut bir ifade olarak nötr cinsiyet alır.",
      },
    ],
  },
  {
    title: "2. Artikelgebrauch",
    sentences: [
      {
        text: "Alex liebte das Reisen mehr als alles andere.",
        translation: "Alex seyahat etmeyi her şeyden çok severdi.",
        explanation:
          "‘Das Reisen’ nötr, akkusativ, belirli artikel. Soyut bir kavram olarak genel bir ifadede kullanılır.",
      },
      {
        text: "Die Erfahrungen einer Reise waren für ihn unbezahlbar.",
        translation: "Bir seyahatin deneyimleri onun için paha biçilemezdi.",
        explanation:
          "‘Die Erfahrungen’ feminin, nominativ plural, belirli artikel. ‘Einer Reise’ belirsiz artikel, genellemeyi belirtir.",
      },
      {
        text: "Er trank gerne den Kaffee in kleinen, gemütlichen Cafés.",
        translation: "Küçük, rahat kafelerde kahve içmeyi severdi.",
        explanation:
          "‘Den Kaffee’ maskulin, akkusativ, belirli artikel. Genel bir alışkanlığı ifade eder.",
      },
      {
        text: "Er aß das traditionelle Essen jeder Region.",
        translation: "Her bölgenin geleneksel yemeğini yedi.",
        explanation:
          "‘Das traditionelle Essen’ nötr, akkusativ, belirli artikel. Genel bir kategoriyi ifade eder.",
      },
      {
        text: "Das Leben eines Reisenden gefiel ihm.",
        translation: "Bir gezginin hayatı ona cazip geliyordu.",
        explanation:
          "‘Das Leben’ nötr, nominativ, belirli artikel. ‘Eines Reisenden’ belirsiz artikel, genellemeyi belirtir.",
      },
      {
        text: "Er besuchte den Reichstag und die Museumsinsel.",
        translation: "Reichstag’ı ve Müzeler Adası’nı ziyaret etti.",
        explanation:
          "‘Den Reichstag’ maskulin, akkusativ, belirli artikel. ‘Die Museumsinsel’ feminin, akkusativ, belirli artikel. Özel isimlerde kullanılır.",
      },
      {
        text: "Er bewunderte die Architektur der Gebäude.",
        translation: "Binaların mimarisini hayranlıkla izledi.",
        explanation:
          "‘Die Architektur’ feminin, akkusativ, belirli artikel. Genel bir kavramı ifade eder.",
      },
      {
        text: "Er fotografierte das Brandenburger Tor im Abendlicht.",
        translation: "Brandenburg Kapısı’nı akşam ışığında fotoğrafladı.",
        explanation:
          "‘Das Brandenburger Tor’ nötr, akkusativ, belirli artikel. Özel bir yapıyı belirtir.",
      },
      {
        text: "Ohne einen Stadtplan hätte er sich verlaufen.",
        translation: "Bir şehir haritası olmadan kaybolurdu.",
        explanation:
          "‘Einen Stadtplan’ maskulin, akkusativ, belirsiz artikel. Belirli olmayan bir nesneyi ifade eder.",
      },
      {
        text: "Mit dem Smartphone fand er leicht den Weg.",
        translation: "Akıllı telefonla kolayca yolu buldu.",
        explanation:
          "‘Dem Smartphone’ nötr, dativ, belirli artikel. Belirli bir nesneyi ifade eder.",
      },
      {
        text: "Hast du die Eintrittskarten für das Konzert?",
        translation: "Konser için giriş biletlerin var mı?",
        explanation:
          "‘Die Eintrittskarten’ feminin, akkusativ plural, belirli artikel. Belirli nesneleri ifade eder.",
      },
      {
        text: "Er hatte _ Tickets für ein Orchester am Abend gekauft.",
        translation: "Akşam için bir orkestra için biletler almıştı.",
        explanation:
          "‘_ Tickets’ nötr, akkusativ plural, artikel yok. İngilizce kelime, artikel olmadan kullanılır.",
      },
      {
        text: "Er mochte _ klassische Musik sehr.",
        translation: "Klasik müziği çok severdi.",
        explanation:
          "‘_ klassische Musik’ feminin, akkusativ, artikel yok. Genel bir kategoriyi ifade eder.",
      },
      {
        text: "In einem Restaurant _ Berliner Currywurst zu probieren.",
        translation: "Bir restoranda Berlin usulü sosis denemeyi planladı.",
        explanation:
          "‘_ Berliner Currywurst’ feminin, akkusativ, artikel yok. Özel bir yemeği genellemeyle ifade eder.",
      },
      {
        text: "In Deutschland isst man _ Brot zu fast jeder Mahlzeit.",
        translation: "Almanya’da neredeyse her öğünde ekmek yenir.",
        explanation:
          "‘_ Brot’ nötr, akkusativ, artikel yok. Genel bir alışkanlığı ifade eder.",
      },
      {
        text: "Alex war gespannt auf _ deutsche Küche.",
        translation: "Alex Alman mutfağına merakla bakıyordu.",
        explanation:
          "‘_ deutsche Küche’ feminin, akkusativ, artikel yok. Genel bir kategoriyi ifade eder.",
      },
      {
        text: "Und _ kulturellen Unterschiede zwischen den Regionen.",
        translation: "Ve bölgeler arasındaki kültürel farklılıklar.",
        explanation:
          "‘_ kulturellen Unterschiede’ maskulin, akkusativ plural, artikel yok. Genel bir kavramı ifade eder.",
      },
    ],
  },
  {
    title: "3. Genitiv",
    sentences: [
      {
        text: "Alex führte ein Tagebuch des Abenteuers.",
        translation: "Alex maceranın günlüğünü tuttu.",
        explanation:
          "‘Des Abenteuers’ nötr, genitiv, belirli artikel. Sahiplik veya ilişki belirtir, ‘Abenteuer’ genitiv eki ‘-s’.",
      },
      {
        text: "Die Eindrücke der verschiedenen Städte füllten bald viele Seiten.",
        translation:
          "Farklı şehirlerin izlenimleri kısa sürede birçok sayfayı doldurdu.",
        explanation:
          "‘Der verschiedenen Städte’ feminin, genitiv plural, belirli artikel. İlişki belirtir, ‘Stadt’ plural genitiv eki ‘-e’.",
      },
      {
        text: "Die Schönheit der Landschaft übertraf seine Erwartungen.",
        translation: "Manzaranın güzelliği beklentilerini aştı.",
        explanation:
          "‘Der Landschaft’ feminin, genitiv, belirli artikel. Özellik belirtir, ‘Landschaft’ genitiv eki ‘-Ø’.",
      },
      {
        text: "Die Freundlichkeit der Menschen überraschte ihn angenehm.",
        translation: "İnsanların nezaketi onu hoş bir şekilde şaşırttı.",
        explanation:
          "‘Der Menschen’ maskulin, genitiv plural, belirli artikel. Özellik belirtir, ‘Mensch’ plural genitiv eki ‘-Ø’.",
      },
      {
        text: "Die Pracht des Schlosses Nymphenburg.",
        translation: "Nymphenburg Sarayı’nın ihtişamı.",
        explanation:
          "‘Des Schlosses’ nötr, genitiv, belirli artikel. Özellik belirtir, ‘Schloss’ genitiv eki ‘-es’.",
      },
      {
        text: "Das Museum der Bayerischen Geschichte.",
        translation: "Bavyera Tarihi Müzesi.",
        explanation:
          "‘Der Bayerischen Geschichte’ feminin, genitiv, belirli artikel. İlişki belirtir, ‘Geschichte’ genitiv eki ‘-Ø’.",
      },
      {
        text: "Der Charme der Altstadt verzauberte ihn.",
        translation: "Eski şehrin cazibesi onu büyüledi.",
        explanation:
          "‘Der Altstadt’ feminin, genitiv, belirli artikel. Özellik belirtir, ‘Altstadt’ genitiv eki ‘-Ø’.",
      },
      {
        text: "Die Atmosphäre des berühmten Biergartens ließ ihn länger bleiben.",
        translation:
          "Ünlü bira bahçesinin atmosferi onu daha uzun kalmaya ikna etti.",
        explanation:
          "‘Des berühmten Biergartens’ maskulin, genitiv, belirli artikel. Özellik belirtir, ‘Biergarten’ genitiv eki ‘-s’.",
      },
      {
        text: "Die Farbe des Himmels wechselte von strahlendem Blau zu tiefem Rot.",
        translation: "Gökyüzünün rengi parlak maviden koyu kırmızıya değişti.",
        explanation:
          "‘Des Himmels’ maskulin, genitiv, belirli artikel. Özellik belirtir, ‘Himmel’ genitiv eki ‘-s’.",
      },
      {
        text: "Die Ufer der Isar waren voller Menschen.",
        translation: "Isar’ın kıyıları insanlarla doluydu.",
        explanation:
          "‘Der Isar’ feminin, genitiv, belirli artikel. İlişki belirtir, ‘Isar’ genitiv eki ‘-Ø’.",
      },
      {
        text: "Das ist wirklich die Stadt des Bieres und der guten Laune.",
        translation: "Bu gerçekten biranın ve iyi ruh halinin şehri.",
        explanation:
          "‘Des Bieres’ nötr, genitiv, belirli artikel. İlişki belirtir, ‘Bier’ genitiv eki ‘-es’. ‘Der guten Laune’ feminin, genitiv.",
      },
      {
        text: "Im Tagebuch eines glücklichen Reisenden.",
        translation: "Mutlu bir gezginin günlüğünde.",
        explanation:
          "‘Eines glücklichen Reisenden’ maskulin, genitiv, belirsiz artikel. İlişki belirtir, ‘Reisender’ genitiv eki ‘-n’ (n-deklination).",
      },
      {
        text: "Die Besichtigung des Deutschen Museums nahm den größten Teil des Tages in Anspruch.",
        translation: "Alman Müzesi’nin ziyareti günün büyük bir kısmını aldı.",
        explanation:
          "‘Des Deutschen Museums’ nötr, genitiv, belirli artikel. İlişki belirtir, ‘Museum’ genitiv eki ‘-s’.",
      },
      {
        text: "Die Geschichte der Technologie faszinierte Alex.",
        translation: "Teknolojinin tarihi Alex’i büyüledi.",
        explanation:
          "‘Der Technologie’ feminin, genitiv, belirli artikel. İlişki belirtir, ‘Technologie’ genitiv eki ‘-Ø’.",
      },
      {
        text: "Die Experimente des Museums machten komplexe wissenschaftliche Phänomene verständlich.",
        translation:
          "Müzenin deneyleri karmaşık bilimsel fenomenleri anlaşılır kıldı.",
        explanation:
          "‘Des Museums’ nötr, genitiv, belirli artikel. İlişki belirtir, ‘Museum’ genitiv eki ‘-s’.",
      },
      {
        text: "Im Laden des Museums kaufte er einige Souvenirs.",
        translation: "Müzenin mağazasında bazı hediyelik eşyalar aldı.",
        explanation:
          "‘Des Museums’ nötr, genitiv, belirli artikel. İlişki belirtir, ‘Museum’ genitiv eki ‘-s’.",
      },
      {
        text: "Für die Familie seines besten Freundes.",
        translation: "En iyi arkadaşının ailesi için.",
        explanation:
          "‘Seines besten Freundes’ maskulin, genitiv, possessiv pronomen. İlişki belirtir, ‘Freund’ genitiv eki ‘-es’.",
      },
    ],
  },
  {
    title: "4. n-Deklination",
    sentences: [
      {
        text: "In Köln traf Alex einen Studenten.",
        translation: "Köln’de Alex bir öğrenciyle tanıştı.",
        explanation:
          "‘Einen Studenten’ maskulin, akkusativ, n-deklination. ‘Student’ akkusativde ‘-n’ eki alır.",
      },
      {
        text: "Der Student kannte jeden Winkel seiner Heimatstadt.",
        translation: "Öğrenci memleketinin her köşesini biliyordu.",
        explanation:
          "‘Der Student’ maskulin, nominativ, n-deklination. ‘Student’ nominativde ‘-Ø’ eki alır.",
      },
      {
        text: "Sie besichtigten den Dom, das Wahrzeichen der Stadt.",
        translation: "Şehrin simgesi olan Katedrali ziyaret ettiler.",
        explanation:
          "‘Den Dom’ maskulin, akkusativ, n-deklination. ‘Dom’ akkusativde ‘-n’ eki alır.",
      },
      {
        text: "Alex machte ein Foto von dem Elefanten im Zoo.",
        translation: "Alex hayvanat bahçesindeki filden bir fotoğraf çekti.",
        explanation:
          "‘Dem Elefanten’ maskulin, dativ, n-deklination. ‘Elefant’ dativde ‘-n’ eki alır.",
      },
      {
        text: "Er bewunderte den Löwen, der majestätisch in der Sonne döste.",
        translation:
          "Güneşte mağrur bir şekilde uyuklayan aslanı hayranlıkla izledi.",
        explanation:
          "‘Den Löwen’ maskulin, akkusativ, n-deklination. ‘Löwe’ akkusativde ‘-n’ eki alır.",
      },
      {
        text: "Kennst du die Geschichte von dem Bären?",
        translation:
          "Orta Çağ’da Köln’de dolaştığı söylenen ayının hikayesini biliyor musun?",
        explanation:
          "‘Dem Bären’ maskulin, dativ, n-deklination. ‘Bär’ dativde ‘-n’ eki alır.",
      },
      {
        text: "Er half dem Touristen, den Weg zum Museum zu finden.",
        translation: "Turiste müzeye giden yolu bulmasında yardım etti.",
        explanation:
          "‘Dem Touristen’ maskulin, dativ, n-deklination. ‘Tourist’ dativde ‘-n’ eki alır.",
      },
      {
        text: "Die Freundlichkeit des Menschen beeindruckte den Japaner.",
        translation: "İnsanın nezaketi Japon’u etkiledi.",
        explanation:
          "‘Des Menschen’ maskulin, genitiv, n-deklination. ‘Mensch’ genitivde ‘-n’ eki alır.",
      },
      {
        text: "Sie beschlossen, gemeinsam einen Kollegen des Studenten zu besuchen.",
        translation:
          "Birlikte öğrencinin bir meslektaşını ziyaret etmeye karar verdiler.",
        explanation:
          "‘Des Studenten’ maskulin, genitiv, n-deklination. ‘Student’ genitivde ‘-n’ eki alır.",
      },
      {
        text: "Der Architekt erzählte von dem Präsidenten eines bekannten Bauunternehmens.",
        translation:
          "Mimar, tanınmış bir inşaat şirketinin başkanından bahsetti.",
        explanation:
          "‘Dem Präsidenten’ maskulin, dativ, n-deklination. ‘Präsident’ dativde ‘-n’ eki alır.",
      },
      {
        text: "Die Vision des Unternehmers hatte schon vielen alten Strukturen neues Leben eingehaucht.",
        translation:
          "Girişimcinin vizyonu birçok eski yapıya yeni bir hayat vermişti.",
        explanation:
          "‘Des Unternehmers’ maskulin, genitiv, n-deklination. ‘Unternehmer’ genitivde ‘-n’ eki alır.",
      },
      {
        text: "Ohne die Hilfe des Millionärs wären viele Projekte nicht möglich gewesen.",
        translation: "Milyonerin yardımı olmadan birçok proje mümkün olmazdı.",
        explanation:
          "‘Des Millionärs’ maskulin, genitiv, n-deklination. ‘Millionär’ genitivde ‘-n’ eki alır.",
      },
    ],
  },
  {
    title: "5. Drei Deklinationen",
    sentences: [
      {
        text: "Ein alter Fischer erzählte ihm Geschichten vom Meer.",
        translation: "Yaşlı bir balıkçı ona denizden hikayeler anlattı.",
        explanation:
          "‘Ein alter Fischer’ maskulin, nominativ, stark deklination. Sıfat ‘alt’ nominativde ‘-er’. ‘Fischer’ maskulin.",
      },
      {
        text: "Kleine Kinder spielten am Strand.",
        translation: "Küçük çocuklar sahilde oynuyordu.",
        explanation:
          "‘Kleine Kinder’ nötr, nominativ plural, stark deklination. Sıfat ‘klein’ nominativde ‘-e’. ‘Kind’ nötr.",
      },
      {
        text: "Junge Männer segelten auf der Alster.",
        translation: "Genç adamlar Alster’de yelken açtı.",
        explanation:
          "‘Junge Männer’ maskulin, nominativ plural, stark deklination. Sıfat ‘jung’ nominativde ‘-e’. ‘Mann’ maskulin.",
      },
      {
        text: "Alex beobachtete einen klugen Hund.",
        translation: "Alex zeki bir köpeği izledi.",
        explanation:
          "‘Einen klugen Hund’ maskulin, akkusativ, stark deklination. Sıfat ‘klug’ akkusativde ‘-en’. ‘Hund’ maskulin.",
      },
      {
        text: "Der seinem fröhlichen Besitzer Tricks vorführte.",
        translation: "Neşeli sahibine numaralar sergileyen.",
        explanation:
          "‘Seinem fröhlichen Besitzer’ maskulin, dativ, schwach deklination. Sıfat ‘fröhlich’ dativde ‘-en’. ‘Besitzer’ maskulin.",
      },
      {
        text: "Ist das Ihr Hund?",
        translation: "Bu sizin köpeğiniz mi?",
        explanation:
          "‘Ihr Hund’ maskulin, nominativ, gemischt deklination. Possessiv ‘Ihr’ nominativde ‘-Ø’. ‘Hund’ maskulin.",
      },
      {
        text: "Ich kenne den netten Herrn, dem er gehört.",
        translation: "Ona sahip olan nazik beyefendiyi tanıyorum.",
        explanation:
          "‘Den netten Herrn’ maskulin, akkusativ, schwach deklination. Sıfat ‘nett’ akkusativde ‘-en’. ‘Herr’ maskulin.",
      },
      {
        text: "Welche Sehenswürdigkeiten haben Sie schon besucht?",
        translation: "Hangi turistik yerleri ziyaret ettiniz?",
        explanation:
          "‘Welche Sehenswürdigkeiten’ feminin, akkusativ plural, stark deklination. Sıfat ‘welch’ akkusativde ‘-e’. ‘Sehenswürdigkeit’ feminin.",
      },
      {
        text: "Hohe Berge, weite Täler, tiefe Wälder.",
        translation: "Yüksek dağlar, geniş vadiler, derin ormanlar.",
        explanation:
          "‘Hohe Berge’ maskulin, nominativ plural, stark deklination. Sıfat ‘hoch’ nominativde ‘-e’. ‘Berg’ maskulin.",
      },
      {
        text: "Der aufmerksame Kellner empfahl ihm frischen Fisch.",
        translation: "Dikkatli garson ona taze balık önerdi.",
        explanation:
          "‘Der aufmerksame Kellner’ maskulin, nominativ, stark deklination. Sıfat ‘aufmerksam’ nominativde ‘-e’. ‘Kellner’ maskulin.",
      },
      {
        text: "Unsere talentierte Köchin bereitet ihn nach einem alten Rezept zu.",
        translation: "Yetenekli aşçımız onu eski bir tarife göre hazırlar.",
        explanation:
          "‘Unsere talentierte Köchin’ feminin, nominativ, gemischt deklination. Sıfat ‘talentiert’ nominativde ‘-e’. ‘Köchin’ feminin.",
      },
      {
        text: "Die norddeutsche Küche ist eine besondere Entdeckung!",
        translation: "Kuzey Alman mutfağı özel bir keşif!",
        explanation:
          "‘Die norddeutsche Küche’ feminin, nominativ, stark deklination. Sıfat ‘norddeutsch’ nominativde ‘-e’. ‘Küche’ feminin.",
      },
    ],
  },
  {
    title: "6. Deklination der Indefinit- und Possessivpronomen",
    sentences: [
      {
        text: "Haben Sie Ihre Karte schon?",
        translation: "Biletinizi aldınız mı?",
        explanation:
          "‘Ihre Karte’ feminin, akkusativ, possessiv pronomen. ‘Ihr’ akkusativde ‘-e’, ‘Karte’ feminin ile uyumlu.",
      },
      {
        text: "Alex zeigte ihr seine Eintrittskarte.",
        translation: "Alex ona giriş biletini gösterdi.",
        explanation:
          "‘Seine Eintrittskarte’ feminin, akkusativ, possessiv pronomen. ‘Sein’ akkusativde ‘-e’, ‘Eintrittskarte’ feminin ile uyumlu.",
      },
      {
        text: "Ist dieser Platz noch frei?",
        translation: "Bu yer hâlâ boş mu?",
        explanation:
          "‘Dieser Platz’ maskulin, nominativ, demonstrativ pronomen. ‘Dieser’ nominativde ‘-er’, ‘Platz’ maskulin ile uyumlu.",
      },
      {
        text: "Mein Platz ist daneben.",
        translation: "Benim yerim hemen yanında.",
        explanation:
          "‘Mein Platz’ maskulin, nominativ, possessiv pronomen. ‘Mein’ nominativde ‘-Ø’, ‘Platz’ maskulin ile uyumlu.",
      },
      {
        text: "Wie gefällt Ihnen unsere Stadt?",
        translation: "Şehrimiz size nasıl geliyor?",
        explanation:
          "‘Unsere Stadt’ feminin, nominativ, possessiv pronomen. ‘Unser’ nominativde ‘-e’, ‘Stadt’ feminin ile uyumlu.",
      },
      {
        text: "Ihre Architektur ist atemberaubend.",
        translation: "Mimarisi nefes kesici.",
        explanation:
          "‘Ihre Architektur’ feminin, nominativ, possessiv pronomen. ‘Ihr’ nominativde ‘-e’, ‘Architektur’ feminin ile uyumlu.",
      },
      {
        text: "Ihr kulturelles Angebot ist beeindruckend.",
        translation: "Kültürel teklifleri etkileyici.",
        explanation:
          "‘Ihr kulturelles Angebot’ nötr, nominativ, possessiv pronomen. ‘Ihr’ nominativde ‘-Ø’, ‘Angebot’ nötr ile uyumlu.",
      },
      {
        text: "Ist euer Hotel in der Nähe des Zwingers?",
        translation: "Oteliniz Zwinger’in yakınında mı?",
        explanation:
          "‘Euer Hotel’ nötr, nominativ, possessiv pronomen. ‘Euer’ nominativde ‘-Ø’, ‘Hotel’ nötr ile uyumlu.",
      },
      {
        text: "Unser Hotel liegt direkt gegenüber.",
        translation: "Otelimiz tam karşısında yer alıyor.",
        explanation:
          "‘Unser Hotel’ nötr, nominativ, possessiv pronomen. ‘Unser’ nominativde ‘-Ø’, ‘Hotel’ nötr ile uyumlu.",
      },
      {
        text: "Dieser Weg sollte der kürzeste sein.",
        translation: "Bu yol en kısa olmalı.",
        explanation:
          "‘Dieser Weg’ maskulin, nominativ, demonstrativ pronomen. ‘Dieser’ nominativde ‘-er’, ‘Weg’ maskulin ile uyumlu.",
      },
      {
        text: "Eure Unterkunft liegt in einer schönen Gegend!",
        translation: "Konaklama yeriniz güzel bir bölgede!",
        explanation:
          "‘Eure Unterkunft’ feminin, nominativ, possessiv pronomen. ‘Euer’ nominativde ‘-e’, ‘Unterkunft’ feminin ile uyumlu.",
      },
    ],
  },
  {
    title: "7. Indefinitpronomen für Menschen",
    sentences: [
      {
        text: "Man konnte dort Autoren aus aller Welt treffen.",
        translation: "Orada dünyanın her yerinden yazarlarla tanışılabilirdi.",
        explanation:
          "‘Man’ indefinit pronomen, nominativ, genel bir kişiyi ifade eder. Fiil ‘konnte’ ile uyumlu.",
      },
      {
        text: "Jemand hatte ihm empfohlen, an einer Lesung teilzunehmen.",
        translation: "Birisi ona bir okuma etkinliğine katılmasını önermişti.",
        explanation:
          "‘Jemand’ indefinit pronomen, nominativ, belirsiz bir kişiyi ifade eder. Fiil ‘hatte’ ile uyumlu.",
      },
      {
        text: "Hat jemand einen Stift, den ich ausleihen könnte?",
        translation: "Birinde ödünç alabileceğim bir kalem var mı?",
        explanation:
          "‘Jemand’ indefinit pronomen, nominativ, belirsiz bir kişiyi sorgular. Fiil ‘hat’ ile uyumlu.",
      },
      {
        text: "Niemand in seiner Nähe hatte einen.",
        translation: "Yakınında kimse kalem taşımıyordu.",
        explanation:
          "‘Niemand’ indefinit pronomen, nominativ, hiçbir kişiyi ifade eder. Fiil ‘hatte’ ile uyumlu.",
      },
      {
        text: "Hat irgendjemand Erfahrungen mit diesem Autor?",
        translation: "Bu yazarla ilgili deneyimi olan biri var mı?",
        explanation:
          "‘Irgendjemand’ indefinit pronomen, nominativ, belirsiz bir kişiyi sorgular. Fiil ‘hat’ ile uyumlu.",
      },
      {
        text: "Ich habe alle seine Bücher gelesen.",
        translation: "Onun tüm kitaplarını okudum.",
        explanation:
          "‘Alle’ indefinit pronomen, akkusativ plural, tüm nesneleri ifade eder. Fiil ‘habe’ ile uyumlu.",
      },
      {
        text: "Man sagt, dass sein neuer Roman autobiografisch ist.",
        translation: "Onun yeni romanının otobiyografik olduğu söyleniyor.",
        explanation:
          "‘Man’ indefinit pronomen, nominativ, genel bir kişiyi ifade eder. Fiil ‘sagt’ ile uyumlu.",
      },
      {
        text: "Jeder durfte seine Meinung äußern.",
        translation: "Herkes fikrini ifade edebilirdi.",
        explanation:
          "‘Jeder’ indefinit pronomen, nominativ maskulin, her bir kişiyi ifade eder. Fiil ‘durfte’ ile uyumlu.",
      },
      {
        text: "Was denkt man in Ihrem Land über deutsche Literatur?",
        translation: "Ülkenizde Alman edebiyatı hakkında ne düşünülüyor?",
        explanation:
          "‘Man’ indefinit pronomen, nominativ, genel bir kişiyi ifade eder. Fiil ‘denkt’ ile uyumlu.",
      },
      {
        text: "Bei uns liest man vor allem die Klassiker wie Goethe und Schiller.",
        translation:
          "Bizde özellikle Goethe ve Schiller gibi klasikler okunur.",
        explanation:
          "‘Man’ indefinit pronomen, nominativ, genel bir kişiyi ifade eder. Fiil ‘liest’ ile uyumlu.",
      },
      {
        text: "Niemand kennt viele zeitgenössische deutsche Autoren.",
        translation: "Çağdaş Alman yazarları pek kimse tanımıyor.",
        explanation:
          "‘Niemand’ indefinit pronomen, nominativ, hiçbir kişiyi ifade eder. Fiil ‘kennt’ ile uyumlu.",
      },
      {
        text: "Jemand sprach ihn an: 'Würden Sie morgen an unserem Workshop teilnehmen?'",
        translation: "Biri ona seslendi: 'Yarın atölyemize katılır mısınız?'",
        explanation:
          "‘Jemand’ indefinit pronomen, nominativ, belirsiz bir kişiyi ifade eder. Fiil ‘sprach’ ile uyumlu.",
      },
      {
        text: "Wir brauchen jemanden mit einer internationalen Perspektive.",
        translation:
          "Uluslararası bir bakış açısına sahip birine ihtiyacımız var.",
        explanation:
          "‘Jemanden’ indefinit pronomen, akkusativ, belirsiz bir kişiyi ifade eder. Fiil ‘brauchen’ ile uyumlu.",
      },
    ],
  },
  {
    title: "8. Indefinitpronomen für Menschen und Dinge",
    sentences: [
      {
        text: "Hast du alles für deinen Aufenthalt vorbereitet?",
        translation: "Konaklaman için her şeyi hazırladın mı?",
        explanation:
          "‘Alles’ indefinit pronomen, akkusativ nötr, tüm şeyleri ifade eder. Fiil ‘hast’ ile uyumlu.",
      },
      {
        text: "Ich habe nichts vergessen.",
        translation: "Hiçbir şeyi unutmadım.",
        explanation:
          "‘Nichts’ indefinit pronomen, akkusativ nötr, hiçbir şeyi ifade eder. Fiil ‘habe’ ile uyumlu.",
      },
      {
        text: "Ich habe so vieles gesehen und erlebt!",
        translation: "O kadar çok şey gördüm ve yaşadım ki!",
        explanation:
          "‘Vieles’ indefinit pronomen, akkusativ nötr, birçok şeyi ifade eder. Fiil ‘habe’ ile uyumlu.",
      },
      {
        text: "Jede Stadt hat etwas Besonderes zu bieten.",
        translation: "Her şehir özel bir şey sunuyor.",
        explanation:
          "‘Etwas’ indefinit pronomen, akkusativ nötr, belirsiz bir şeyi ifade eder. Fiil ‘hat’ ile uyumlu.",
      },
      {
        text: "Alle deutschen Regionen haben ihre eigene Kultur und Traditionen.",
        translation: "Tüm Alman bölgeleri kendi kültür ve geleneklerine sahip.",
        explanation:
          "‘Alle’ indefinit pronomen, nominativ plural, tüm nesneleri ifade eder. Fiil ‘haben’ ile uyumlu.",
      },
      {
        text: "Hast du schon etwas von unserer lokalen Spezialität probiert?",
        translation: "Yerel spesiyalitemizden bir şey denedin mi?",
        explanation:
          "‘Etwas’ indefinit pronomen, akkusativ nötr, belirsiz bir şeyi ifade eder. Fiil ‘hast’ ile uyumlu.",
      },
      {
        text: "Gibt es hier irgendetwas, das man unbedingt gesehen haben muss?",
        translation: "Burada mutlaka görülmesi gereken bir şey var mı?",
        explanation:
          "‘Irgendetwas’ indefinit pronomen, nominativ nötr, belirsiz bir şeyi sorgular. Fiil ‘gibt’ ile uyumlu.",
      },
      {
        text: "Einiges! Der Main Tower bietet einen fantastischen Blick.",
        translation: "Bazı şeyler! Main Kulesi harika bir manzara sunuyor.",
        explanation:
          "‘Einiges’ indefinit pronomen, nominativ nötr, belirli bir miktar şeyi ifade eder. Fiil ‘bietet’ ile uyumlu.",
      },
      {
        text: "In dieser Gegend gibt es nichts Besseres als das 'Apfelwein-Haus'.",
        translation: "Bu bölgede ‘Apfelwein-Haus’tan daha iyisi yok.",
        explanation:
          "‘Nichts’ indefinit pronomen, nominativ nötr, hiçbir şeyi ifade eder. Fiil ‘gibt’ ile uyumlu.",
      },
      {
        text: "Dort kann man alles probieren, was die hessische Küche zu bieten hat.",
        translation:
          "Orada Hessen mutfağının sunduğu her şeyi deneyebilirsiniz.",
        explanation:
          "‘Alles’ indefinit pronomen, akkusativ nötr, tüm şeyleri ifade eder. Fiil ‘probiren’ ile uyumlu.",
      },
      {
        text: "Etwas Vergleichbares findet man nirgendwo sonst.",
        translation: "Buna benzer bir şey başka hiçbir yerde bulunmaz.",
        explanation:
          "‘Etwas’ indefinit pronomen, nominativ nötr, belirsiz bir şeyi ifade eder. Fiil ‘findet’ ile uyumlu.",
      },
    ],
  },
  {
    title: "9. Deklination – Würfelspiel",
    sentences: [
      {
        text: "Man würfelt und bildet einen korrekten Satz mit dem entsprechenden Fall.",
        translation: "Zar atılır ve ilgili durumla doğru bir cümle kurulur.",
        explanation:
          "‘Man’ indefinit pronomen, nominativ. ‘Einen korrekten Satz’ maskulin, akkusativ, belirsiz artikel. Fiil ‘bildet’ Präsens.",
      },
      {
        text: "Ein freundlicher Mitreisender – Alex würfelte eine Drei für den Dativ.",
        translation: "Nazik bir yol arkadaşı – Alex dativ için üç attı.",
        explanation:
          "‘Ein freundlicher Mitreisender’ maskulin, nominativ, stark deklination. Sıfat ‘freundlich’ nominativde ‘-er’. ‘Mitreisender’ maskulin.",
      },
      {
        text: "Ich habe einem freundlichen Mitreisenden geholfen, seinen Koffer zu tragen.",
        translation: "Nazik bir yol arkadaşına valizini taşımada yardım ettim.",
        explanation:
          "‘Einem freundlichen Mitreisenden’ maskulin, dativ, stark deklination. Sıfat ‘freundlich’ dativde ‘-en’. ‘Mitreisender’ maskulin.",
      },
      {
        text: "Die interessante Geschichte – Eine Vier zeigte der Würfel, das bedeutete Genitiv.",
        translation: "İlginç hikaye – Zar dört gösterdi, bu genitiv demekti.",
        explanation:
          "‘Die interessante Geschichte’ feminin, nominativ, stark deklination. Sıfat ‘interessant’ nominativde ‘-e’. ‘Geschichte’ feminin.",
      },
      {
        text: "Wegen der interessanten Geschichte blieb ich länger in dieser Stadt.",
        translation: "İlginç hikaye yüzünden bu şehirde daha uzun kaldım.",
        explanation:
          "‘Der interessanten Geschichte’ feminin, genitiv, stark deklination. Sıfat ‘interessant’ genitivde ‘-en’. ‘Geschichte’ feminin.",
      },
      {
        text: "Das alte Schloss – Bei der Zwei musste man den Akkusativ bilden.",
        translation: "Eski kale – İki, akkusativ oluşturmayı gerektiriyordu.",
        explanation:
          "‘Das alte Schloss’ nötr, nominativ, stark deklination. Sıfat ‘alt’ nominativde ‘-e’. ‘Schloss’ nötr.",
      },
      {
        text: "Gestern haben wir das alte Schloss besichtigt.",
        translation: "Dün eski kaleyi ziyaret ettik.",
        explanation:
          "‘Das alte Schloss’ nötr, akkusativ, stark deklination. Sıfat ‘alt’ akkusativde ‘-e’. ‘Schloss’ nötr.",
      },
      {
        text: "Der berühmte Komponist – Die Eins stand für den Nominativ.",
        translation: "Ünlü besteci – Bir, nominativ içindi.",
        explanation:
          "‘Der berühmte Komponist’ maskulin, nominativ, stark deklination. Sıfat ‘berühmt’ nominativde ‘-e’. ‘Komponist’ maskulin.",
      },
      {
        text: "Der berühmte Komponist lebte viele Jahre in dieser Stadt.",
        translation: "Ünlü besteci bu şehirde yıllarca yaşadı.",
        explanation:
          "‘Der berühmte Komponist’ maskulin, nominativ, stark deklination. Sıfat ‘berühmt’ nominativde ‘-e’. ‘Komponist’ maskulin.",
      },
      {
        text: "Die deutsche Sprache ist wie ein Puzzle.",
        translation: "Almanca bir yapboz gibi.",
        explanation:
          "‘Die deutsche Sprache’ feminin, nominativ, stark deklination. Sıfat ‘deutsch’ nominativde ‘-e’. ‘Sprache’ feminin.",
      },
      {
        text: "Wenn man die Regeln versteht, ergibt alles einen Sinn.",
        translation: "Kuralları anladığında her şey anlam kazanıyor.",
        explanation:
          "‘Man’ indefinit pronomen, nominativ. ‘Alles’ indefinit pronomen, nominativ nötr, tüm şeyleri ifade eder.",
      },
    ],
  },
  {
    title: "1. Adjektivdeklination",
    sentences: [
      {
        text: "Der talentierte junge Künstler betrat die große Ausstellungshalle.",
        translation: "Yetenekli genç sanatçı büyük sergi salonuna girdi.",
        explanation:
          "‘Talentierte junge Künstler’ maskulin, nominativ, stark deklination. Sıfatlar ‘talentiert’ ve ‘jung’ nominativde ‘-e’. ‘Künstler’ maskulin.",
      },
      {
        text: "Sein neues Projekt hatte eine ungewöhnliche Thematik.",
        translation: "Yeni projesi alışılmadık bir temaya sahipti.",
        explanation:
          "‘Neues Projekt’ nötr, nominativ, gemischt deklination. Sıfat ‘neu’ nominativde ‘-es’. ‘Projekt’ nötr.",
      },
      {
        text: "Frischer Wind in der zeitgenössischen Kunstszene war dringend nötig.",
        translation:
          "Çağdaş sanat sahnesinde taze bir rüzgar acilen gerekliydi.",
        explanation:
          "‘Frischer Wind’ maskulin, nominativ, stark deklination. Sıfat ‘frisch’ nominativde ‘-er’. ‘Wind’ maskulin.",
      },
      {
        text: "Die bekannte Kuratorin hatte ihm diese einmalige Chance gegeben.",
        translation: "Tanınmış küratör ona bu eşsiz şansı vermişti.",
        explanation:
          "‘Bekannte Kuratorin’ feminin, nominativ, stark deklination. Sıfat ‘bekannt’ nominativde ‘-e’. ‘Kuratorin’ feminin.",
      },
      {
        text: "Ein mutiger Schritt für eine konservative Institution.",
        translation: "Muhafazakâr bir kurum için cesur bir adım.",
        explanation:
          "‘Mutiger Schritt’ maskulin, nominativ, stark deklination. Sıfat ‘mutig’ nominativde ‘-er’. ‘Schritt’ maskulin.",
      },
      {
        text: "Die strahlenden Farben kontrastierten wunderbar mit dem schlichten Hintergrund.",
        translation:
          "Parlayan renkler sade arka planla harika bir kontrast oluşturuyordu.",
        explanation:
          "‘Strahlenden Farben’ feminin, dativ plural, stark deklination. Sıfat ‘strahlend’ dativde ‘-en’. ‘Farben’ feminin plural.",
      },
      {
        text: "Den ganzen Tag hatte er mit der komplizierten Installation verbracht.",
        translation: "Bütün günü karmaşık enstalasyonla geçirmişti.",
        explanation:
          "‘Komplizierten Installation’ feminin, dativ, stark deklination. Sıfat ‘kompliziert’ dativde ‘-en’. ‘Installation’ feminin.",
      },
      {
        text: "Das kreative Konzept hatte monatelange Arbeit erfordert.",
        translation: "Yaratıcı konsept aylarca süren çalışma gerektirmişti.",
        explanation:
          "‘Kreative Konzept’ nötr, nominativ, stark deklination. Sıfat ‘kreativ’ nominativde ‘-e’. ‘Konzept’ nötr.",
      },
      {
        text: "Eine elegante Dame betrat den stillen Raum.",
        translation: "Zarif bir kadın sessiz odaya girdi.",
        explanation:
          "‘Elegante Dame’ feminin, nominativ, stark deklination. Sıfat ‘elegant’ nominativde ‘-e’. ‘Dame’ feminin.",
      },
      {
        text: "Ist dies die neue Ausstellung?",
        translation: "Bu yeni sergi mi?",
        explanation:
          "‘Neue Ausstellung’ feminin, nominativ, stark deklination. Sıfat ‘neu’ nominativde ‘-e’. ‘Ausstellung’ feminin.",
      },
      {
        text: "Ja, die offizielle Eröffnung findet morgen statt.",
        translation: "Evet, resmi açılış yarın gerçekleşecek.",
        explanation:
          "‘Offizielle Eröffnung’ feminin, nominativ, stark deklination. Sıfat ‘offiziell’ nominativde ‘-e’. ‘Eröffnung’ feminin.",
      },
      {
        text: "Er antwortete mit höflichem Ton.",
        translation: "Nazik bir tonda cevap verdi.",
        explanation:
          "‘Höflichem Ton’ maskulin, dativ, stark deklination. Sıfat ‘höflich’ dativde ‘-em’. ‘Ton’ maskulin.",
      },
    ],
  },
  {
    title: "2. Artikelwörter und Adjektivdeklination",
    sentences: [
      {
        text: "Diese wunderbare Gelegenheit kam wie gerufen.",
        translation: "Bu harika fırsat tam zamanında geldi.",
        explanation:
          "‘Wunderbare Gelegenheit’ feminin, nominativ, schwach deklination. Sıfat ‘wunderbar’ nominativde ‘-e’. ‘Gelegenheit’ feminin, demonstrativ ‘diese’ ile.",
      },
      {
        text: "Sein letztes erfolgreiches Projekt lag schon einige Zeit zurück.",
        translation: "Son başarılı projesi bir süredir geride kalmıştı.",
        explanation:
          "‘Erfolgreiches Projekt’ nötr, nominativ, gemischt deklination. Sıfat ‘erfolgreich’ nominativde ‘-es’. ‘Projekt’ nötr, possessiv ‘sein’ ile.",
      },
      {
        text: "Jedes einzelne Kunstwerk erzählte eine persönliche Geschichte.",
        translation: "Her bir sanat eseri kişisel bir hikaye anlatıyordu.",
        explanation:
          "‘Einzelne Kunstwerk’ nötr, nominativ, gemischt deklination. Sıfat ‘einzeln’ nominativde ‘-e’. ‘Kunstwerk’ nötr, indefinit ‘jedes’ ile.",
      },
      {
        text: "Manche kritischen Stimmen würden sich sicher melden.",
        translation: "Bazı eleştirel sesler kesinlikle ortaya çıkacaktı.",
        explanation:
          "‘Kritischen Stimmen’ feminin, dativ plural, schwach deklination. Sıfat ‘kritisch’ dativde ‘-en’. ‘Stimmen’ feminin, indefinit ‘manche’ ile.",
      },
      {
        text: "Eine interessierte Besucherin betrachtete das großformatige Gemälde.",
        translation: "İlgili bir ziyaretçi büyük formatlı tabloyu inceledi.",
        explanation:
          "‘Interessierte Besucherin’ feminin, nominativ, stark deklination. Sıfat ‘interessiert’ nominativde ‘-e’. ‘Besucherin’ feminin.",
      },
      {
        text: "Welche tiefe Symbolik!",
        translation: "Ne derin bir sembolizm!",
        explanation:
          "‘Tiefe Symbolik’ feminin, nominativ, stark deklination. Sıfat ‘tief’ nominativde ‘-e’. ‘Symbolik’ feminin, artikel yok.",
      },
      {
        text: "Dieses besondere Werk hatte ihm viel bedeutet.",
        translation: "Bu özel eser onun için çok şey ifade etmişti.",
        explanation:
          "‘Besondere Werk’ nötr, nominativ, schwach deklination. Sıfat ‘besonder’ nominativde ‘-e’. ‘Werk’ nötr, demonstrativ ‘dieses’ ile.",
      },
      {
        text: "Alle anwesenden Journalisten stellten Fragen.",
        translation: "Tüm mevcut gazeteciler sorular sordu.",
        explanation:
          "‘Anwesenden Journalisten’ maskulin, nominativ plural, schwach deklination. Sıfat ‘anwesend’ nominativde ‘-en’. ‘Journalisten’ maskulin, indefinit ‘alle’ ile.",
      },
      {
        text: "Mehrere bekannte Kritiker machten sich Notizen.",
        translation: "Birçok tanınmış eleştirmen notlar aldı.",
        explanation:
          "‘Bekannte Kritiker’ maskulin, nominativ plural, schwach deklination. Sıfat ‘bekannt’ nominativde ‘-e’. ‘Kritiker’ maskulin, indefinit ‘mehrere’ ile.",
      },
      {
        text: "Ein renommierter Galerist zeigte Interesse an einigen abstrakten Gemälden.",
        translation: "Saygın bir galerici bazı soyut tablolara ilgi gösterdi.",
        explanation:
          "‘Renommierter Galerist’ maskulin, nominativ, stark deklination. Sıfat ‘renommiert’ nominativde ‘-er’. ‘Galerist’ maskulin.",
      },
      {
        text: "Viele verschiedene Interpretationen wurden diskutiert.",
        translation: "Birçok farklı yorum tartışıldı.",
        explanation:
          "‘Verschiedene Interpretationen’ feminin, nominativ plural, schwach deklination. Sıfat ‘verschieden’ nominativde ‘-e’. ‘Interpretationen’ feminin, indefinit ‘viele’ ile.",
      },
      {
        text: "Seine ehemalige Professorin nickte anerkennend.",
        translation: "Eski profesörü takdirle başını salladı.",
        explanation:
          "‘Ehemalige Professorin’ feminin, nominativ, gemischt deklination. Sıfat ‘ehemalig’ nominativde ‘-e’. ‘Professorin’ feminin, possessiv ‘seine’ ile.",
      },
      {
        text: "Sie lobte dessen innovativen Ansatz.",
        translation: "Onun yenilikçi yaklaşımını övdü.",
        explanation:
          "‘Innovativen Ansatz’ maskulin, akkusativ, schwach deklination. Sıfat ‘innovativ’ akkusativde ‘-en’. ‘Ansatz’ maskulin, demonstrativ ‘dessen’ ile.",
      },
    ],
  },
  {
    title: "3. Komparation",
    sentences: [
      {
        text: "Der Eröffnungsabend war erfolgreicher als erwartet.",
        translation: "Açılış akşamı beklenenden daha başarılıydı.",
        explanation:
          "‘Erfolgreicher’ sıfat, komparativ, ‘-er’ ekiyle. ‘Als’ karşılaştırma bağlacı, beklenenden üstünlüğü ifade eder.",
      },
      {
        text: "Die Ausstellung zog mehr Besucher an als die vorherige.",
        translation: "Sergi, bir öncekinden daha fazla ziyaretçi çekti.",
        explanation:
          "‘Mehr’ sıfat, komparativ, miktar karşılaştırması. ‘Als’ önceki sergiyle kıyaslamayı belirtir.",
      },
      {
        text: "Deine Werke sind ausdrucksvoller geworden.",
        translation: "Eserlerin daha etkileyici hale geldi.",
        explanation:
          "‘Ausdrucksvoller’ sıfat, komparativ, ‘-er’ ekiyle. Geçmişle kıyaslamayı ifade eder.",
      },
      {
        text: "Du bist jetzt viel mutiger in deiner Farbwahl.",
        translation: "Şimdi renk seçiminde çok daha cesursun.",
        explanation:
          "‘Mutiger’ sıfat, komparativ, ‘-er’ ekiyle. ‘Viel’ üstünlüğü vurgular, önceki duruma kıyaslar.",
      },
      {
        text: "Die Kritiken sind besser als beim letzten Mal.",
        translation: "Eleştiriler geçen seferkinden daha iyi.",
        explanation:
          "‘Besser’ sıfat, komparativ, ‘gut’ fiilinin düzensiz hali. ‘Als’ önceki etkinlikle karşılaştırır.",
      },
      {
        text: "Am wichtigsten ist, dass ich mich künstlerisch weiterentwickelt habe.",
        translation: "En önemlisi, sanatsal olarak gelişmiş olmam.",
        explanation:
          "‘Wichtigsten’ sıfat, superlativ, ‘-sten’ ekiyle. ‘Am’ en üstün derecede önem ifade eder.",
      },
      {
        text: "Welches Ihrer Werke halten Sie für das gelungenste?",
        translation: "Eserlerinizden hangisini en başarılı buluyorsunuz?",
        explanation:
          "‘Gelungenste’ sıfat, superlativ, ‘-ste’ ekiyle. ‘Das’ en üstün başarıyı ifade eder.",
      },
      {
        text: "Das großformatige Bild im Hauptraum war am herausforderndsten.",
        translation: "Ana salondaki büyük formatlı tablo en zorlayıcıydı.",
        explanation:
          "‘Herausforderndsten’ sıfat, superlativ, ‘-sten’ ekiyle. ‘Am’ en yüksek zorluk derecesini belirtir.",
      },
      {
        text: "Die Ausstellung wurde immer beliebter.",
        translation: "Sergi giderek daha popüler hale geldi.",
        explanation:
          "‘Beliebter’ sıfat, komparativ, ‘-er’ ekiyle. ‘Immer’ artan popülerliği ifade eder.",
      },
      {
        text: "Die Schlange vor dem Museum wurde täglich länger.",
        translation: "Müze önündeki kuyruk her gün daha uzundu.",
        explanation:
          "‘Länger’ sıfat, komparativ, ‘-er’ ekiyle. Günlük artışı ifade eder.",
      },
      {
        text: "Dies ist die meistbesuchte Ausstellung des Jahres.",
        translation: "Bu, yılın en çok ziyaret edilen sergisi.",
        explanation:
          "‘Meistbesuchte’ sıfat, superlativ, ‘-ste’ ekiyle. ‘Die’ en yüksek ziyaret oranını belirtir.",
      },
      {
        text: "Der Künstler war am glücklichsten, als er sah, wie intensiv die Besucher interagierten.",
        translation:
          "Sanatçı, ziyaretçilerin eserlerle yoğun etkileşimini görünce en mutlu oldu.",
        explanation:
          "‘Glücklichsten’ sıfat, superlativ, ‘-sten’ ekiyle. ‘Am’ en yüksek mutluluğu ifade eder.",
      },
    ],
  },
  {
    title: "4. Partizip I und II als Adjektiv",
    sentences: [
      {
        text: "Eine lächelnde Kuratorin führte die Besucher.",
        translation: "Gülümseyen bir küratör ziyaretçilere rehberlik etti.",
        explanation:
          "‘Lächelnde’ Partizip I, sıfat olarak, nominativ feminin, stark deklination. ‘Lächeln’ fiilinden, ‘-e’ ekiyle.",
      },
      {
        text: "Die faszinierende, zum Nachdenken anregende Ausstellung begeisterte das Publikum.",
        translation:
          "Büyüleyici, düşündürücü sergi izleyicileri heyecanlandırdı.",
        explanation:
          "‘Faszinierende’ ve ‘anregende’ Partizip I, sıfat olarak, nominativ feminin, stark deklination. ‘Faszinieren’ ve ‘anregen’ fiillerinden, ‘-e’ ekiyle.",
      },
      {
        text: "Das in dunklen Tönen gehaltene Hauptwerk dominierte den Raum.",
        translation: "Koyu tonlarda yapılmış ana eser odaya hakimdi.",
        explanation:
          "‘Gehaltene’ Partizip II, sıfat olarak, nominativ nötr, stark deklination. ‘Halten’ fiilinden, ‘-e’ ekiyle.",
      },
      {
        text: "Die verstörenden, die Seele berührenden Elemente wurden diskutiert.",
        translation: "Rahatsız edici, ruhu dokunan unsurlar tartışıldı.",
        explanation:
          "‘Verstörenden’ ve ‘berührenden’ Partizip I, sıfat olarak, nominativ plural, stark deklination. ‘Verstören’ ve ‘berühren’ fiillerinden, ‘-en’ ekiyle.",
      },
      {
        text: "Die aus recycelten Materialien geschaffenen Skulpturen standen im Nebenraum.",
        translation:
          "Geri dönüştürülmüş malzemelerden yaratılmış heykeller yan odadaydı.",
        explanation:
          "‘Geschaffenen’ Partizip II, sıfat olarak, nominativ plural, stark deklination. ‘Schaffen’ fiilinden, ‘-en’ ekiyle.",
      },
      {
        text: "Ein weinender Junge, in Bronze gegossen, zog Aufmerksamkeit auf sich.",
        translation: "Bronzdan dökülmüş ağlayan bir çocuk dikkat çekti.",
        explanation:
          "‘Weinender’ Partizip I, sıfat olarak, nominativ maskulin, stark deklination. ‘Weinen’ fiilinden, ‘-er’ ekiyle. ‘Gegossen’ Partizip II, ‘gießen’ fiilinden.",
      },
      {
        text: "Die zerbrechlich wirkenden, überraschend stabilen Konstruktionen beeindruckten.",
        translation:
          "Kırılgan görünen, şaşırtıcı derecede sağlam yapılar etkiledi.",
        explanation:
          "‘Wirkenden’ Partizip I, sıfat olarak, nominativ plural, stark deklination. ‘Wirken’ fiilinden, ‘-en’ ekiyle. ‘Stabilen’ sıfat, ‘-en’ ekiyle.",
      },
      {
        text: "Die von Ihnen gewählte Technik ist außergewöhnlich.",
        translation: "Sizin seçtiğiniz teknik olağanüstü.",
        explanation:
          "‘Gewählte’ Partizip II, sıfat olarak, nominativ feminin, stark deklination. ‘Wählen’ fiilinden, ‘-e’ ekiyle.",
      },
      {
        text: "Die während der Pandemie entstandenen Werke spiegelten die Isolation wider.",
        translation:
          "Pandemi sırasında ortaya çıkan eserler izolasyonu yansıtıyordu.",
        explanation:
          "‘Entstandenen’ Partizip II, sıfat olarak, nominativ plural, stark deklination. ‘Entstehen’ fiilinden, ‘-en’ ekiyle.",
      },
      {
        text: "Das überraschend optimistische Finale der Ausstellung ließ niemanden unberührt.",
        translation:
          "Serginin şaşırtıcı derecede iyimser finali kimseyi duyarsız bırakmadı.",
        explanation:
          "‘Optimistische’ sıfat, nominativ nötr, stark deklination. ‘-e’ ekiyle. ‘Überraschend’ zarf olarak destekler.",
      },
      {
        text: "Die bemalten, kunstvoll beleuchteten Wände rundeten das Erlebnis ab.",
        translation:
          "Boyalı, sanatsal olarak aydınlatılmış duvarlar deneyimi tamamladı.",
        explanation:
          "‘Bemalten’ Partizip II, sıfat olarak, nominativ plural, stark deklination. ‘Bemalen’ fiilinden, ‘-en’ ekiyle. ‘Beleuchteten’ Partizip II, ‘beleuchten’ fiilinden.",
      },
    ],
  },
  {
    title: "5. Adjektivendungen – Bildbeschreibung",
    sentences: [
      {
        text: "Ein großes Gemälde einer idyllischen Landschaft.",
        translation: "İdil bir manzaranın büyük bir tablosu.",
        explanation:
          "‘Großes Gemälde’ nötr, nominativ, stark deklination. Sıfat ‘groß’ nominativde ‘-es’. ‘Idyllischen Landschaft’ feminin, genitiv, stark deklination, ‘-en’ ekiyle.",
      },
      {
        text: "Ein klarer blauer Himmel erstreckte sich über grünen Hügeln.",
        translation: "Açık mavi bir gökyüzü yeşil tepeler üzerinde uzanıyordu.",
        explanation:
          "‘Klarer blauer Himmel’ maskulin, nominativ, stark deklination. Sıfatlar ‘klar’ ve ‘blau’ nominativde ‘-er’. ‘Grünen Hügeln’ maskulin, dativ plural, stark deklination, ‘-en’ ekiyle.",
      },
      {
        text: "Ein alter knorriger Baum stand auf einem steilen felsigen Abhang.",
        translation:
          "Yaşlı, budaklı bir ağaç dik, kayalık bir yamaçta duruyordu.",
        explanation:
          "‘Alter knorriger Baum’ maskulin, nominativ, stark deklination. Sıfatlar ‘alt’ ve ‘knorrig’ nominativde ‘-er’. ‘Steilen felsigen Abhang’ maskulin, dativ, stark deklination, ‘-en’ ekiyle.",
      },
      {
        text: "Die warme goldene Abendsonne tauchte die Szenerie in weiches Licht.",
        translation:
          "Sıcak altın rengi akşam güneşi sahneyi yumuşak bir ışığa batırdı.",
        explanation:
          "‘Warme goldene Abendsonne’ feminin, nominativ, stark deklination. Sıfatlar ‘warm’ ve ‘golden’ nominativde ‘-e’. ‘Weiches Licht’ nötr, akkusativ, stark deklination, ‘-es’ ekiyle.",
      },
      {
        text: "Ein schmaler gewundener Pfad führte zu einem kleinen versteckten See.",
        translation:
          "Dar, kıvrımlı bir patika küçük, gizli bir göle gidiyordu.",
        explanation:
          "‘Schmaler gewundener Pfad’ maskulin, nominativ, stark deklination. Sıfatlar ‘schmal’ ve ‘gewunden’ nominativde ‘-er’. ‘Kleinen versteckten See’ maskulin, dativ, stark deklination, ‘-en’ ekiyle.",
      },
      {
        text: "Dichter grüner Wald umgab das ruhige Gewässer.",
        translation: "Yoğun yeşil orman sakin suyu çevreliyordu.",
        explanation:
          "‘Dichter grüner Wald’ maskulin, nominativ, stark deklination. Sıfatlar ‘dicht’ ve ‘grün’ nominativde ‘-er’. ‘Ruhige Gewässer’ nötr, akkusativ, stark deklination, ‘-e’ ekiyle.",
      },
      {
        text: "Am gegenüberliegenden sandigen Ufer stand ein einsames verlassenes Boot.",
        translation:
          "Karşıdaki kumlu kıyıda yalnız, terk edilmiş bir tekne duruyordu.",
        explanation:
          "‘Gegenüberliegenden sandigen Ufer’ nötr, dativ, schwach deklination. Sıfatlar ‘gegenüberliegend’ ve ‘sandig’ dativde ‘-en’. ‘Einsames verlassenes Boot’ nötr, nominativ, stark deklination, ‘-es’ ekiyle.",
      },
      {
        text: "Auf einer sanften grasigen Anhöhe erhob sich ein traditionelles bayerisches Haus.",
        translation:
          "Yumuşak çimli bir tepede geleneksel bir Bavyera evi yükseliyordu.",
        explanation:
          "‘Sanften grasigen Anhöhe’ feminin, dativ, stark deklination. Sıfatlar ‘sanft’ ve ‘grasig’ dativde ‘-en’. ‘Traditionelles bayerisches Haus’ nötr, nominativ, stark deklination, ‘-es’ ekiyle.",
      },
      {
        text: "Aus dem roten ziegelgedeckten Dach stieg dünner grauer Rauch auf.",
        translation:
          "Kırmızı kiremit kaplı çatıdan ince gri duman yükseliyordu.",
        explanation:
          "‘Roten ziegelgedeckten Dach’ nötr, dativ, schwach deklination. Sıfatlar ‘rot’ ve ‘ziegelgedeckt’ dativde ‘-en’. ‘Dünner grauer Rauch’ maskulin, nominativ, stark deklination, ‘-er’ ekiyle.",
      },
      {
        text: "Die kraftvolle emotionale Wirkung des Bildes überraschte die Besucher.",
        translation: "Resmin güçlü duygusal etkisi ziyaretçileri şaşırttı.",
        explanation:
          "‘Kraftvolle emotionale Wirkung’ feminin, nominativ, stark deklination. Sıfatlar ‘kraftvoll’ ve ‘emotional’ nominativde ‘-e’. ‘Bildes’ nötr, genitiv.",
      },
      {
        text: "Die solch romantische deutsche Landschaftsmalerei nicht erwartet hatten.",
        translation:
          "Böylesine romantik Alman manzara resmini beklememişlerdi.",
        explanation:
          "‘Romantische deutsche Landschaftsmalerei’ feminin, akkusativ, stark deklination. Sıfatlar ‘romantisch’ ve ‘deutsch’ akkusativde ‘-e’. ‘Solch’ sıfatı destekler.",
      },
    ],
  },
  {
    title: "1. Indirekte Rede und Konjunktiv 1",
    sentences: [
      {
        text: "Der Journalist notierte, der Künstler habe jahrelang an diesem Konzept gearbeitet.",
        translation:
          "Gazeteci, sanatçının bu konsept üzerinde yıllarca çalıştığını not etti.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir eylemi ifade eder. Ana cümle ‘notierte’ Präteritum.",
      },
      {
        text: "Die Natur sei seine größte Inspirationsquelle.",
        translation: "Doğa onun en büyük ilham kaynağıymış.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, mevcut bir durumu ifade eder. Ana cümle ‘fügte’ Präteritum.",
      },
      {
        text: "Der Künstler betone, dass er täglich male.",
        translation: "Sanatçı her gün resim yaptığını vurguluyormuş.",
        explanation:
          "Konjunktiv I ‘male’ ile dolaylı anlatım, düzenli bir eylemi ifade eder. Ana cümle ‘betone’ Präsens.",
      },
      {
        text: "Er erwähne auch, dass er früher als Restaurator tätig gewesen sei.",
        translation:
          "Ayrıca daha önce restoratör olarak çalıştığını belirtmiş.",
        explanation:
          "Konjunktiv I ‘gewesen sei’ ile dolaylı anlatım, geçmişteki bir durumu ifade eder. Ana cümle ‘erwähne’ Präsens.",
      },
      {
        text: "Die Kuratorin erzählte, die Ausstellung werde noch zwei Monate zu sehen sein.",
        translation: "Küratör, serginin iki ay daha görülebileceğini anlattı.",
        explanation:
          "Konjunktiv I ‘werde’ ile dolaylı anlatım, gelecekteki bir durumu ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Sie sei besonders stolz auf die Zusammenarbeit.",
        translation: "İş birliğinden özellikle gurur duyuyormuş.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, mevcut bir duyguyu ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Man könne die Werke auch online betrachten.",
        translation: "Eserlerin çevrimiçi de incelenebileceği söylenmiş.",
        explanation:
          "Konjunktiv I ‘könne’ ile dolaylı anlatım, bir olasılığı ifade eder. Ana cümle ‘erklärte’ Präteritum.",
      },
      {
        text: "Die physische Erfahrung sei unvergleichlich.",
        translation: "Fiziksel deneyimin eşsiz olduğu belirtilmiş.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, mevcut bir durumu ifade eder. Ana cümle ‘erklärte’ Präteritum.",
      },
      {
        text: "Es gebe auch ein umfangreiches Begleitprogramm mit Workshops.",
        translation: "Atölyelerle birlikte kapsamlı bir yan program da varmış.",
        explanation:
          "Konjunktiv I ‘gebe’ ile dolaylı anlatım, mevcut bir durumu ifade eder. Ana cümle ‘versicherte’ Präteritum.",
      },
      {
        text: "Die Ausstellung setze neue Maßstäbe.",
        translation: "Sergi yeni standartlar belirliyormuş.",
        explanation:
          "Konjunktiv I ‘setze’ ile dolaylı anlatım, mevcut bir etkiyi ifade eder. Ana cümle ‘behauptete’ Präteritum.",
      },
      {
        text: "Der Künstler werfe wichtige gesellschaftliche Fragen auf.",
        translation: "Sanatçı önemli toplumsal sorular ortaya atıyormuş.",
        explanation:
          "Konjunktiv I ‘werfe’ ile dolaylı anlatım, mevcut bir eylemi ifade eder. Ana cümle ‘fügte’ Präteritum.",
      },
      {
        text: "Der Künstler finde die Balance zwischen Ästhetik und Botschaft.",
        translation: "Sanatçı estetik ve mesaj arasında denge buluyormuş.",
        explanation:
          "Konjunktiv I ‘finde’ ile dolaylı anlatım, mevcut bir durumu ifade eder. Ana cümle ‘fügte’ Präteritum.",
      },
      {
        text: "Seine Werke seien sowohl schön als auch bedeutsam.",
        translation: "Eserleri hem güzel hem de anlamlıymış.",
        explanation:
          "Konjunktiv I ‘seien’ ile dolaylı anlatım, mevcut bir özelliği ifade eder. Ana cümle ‘fügte’ Präteritum.",
      },
    ],
  },
  {
    title: "2. Indirekte Rede – Vergangenheitsaussagen",
    sentences: [
      {
        text: "Er habe schon als Kind ständig gezeichnet.",
        translation: "Çocukken sürekli çizim yaptığını söylemiş.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir alışkanlığı ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Seine Eltern hätten seine Begabung früh erkannt und gefördert.",
        translation: "Ebeveynleri yeteneğini erken fark etmiş ve desteklemiş.",
        explanation:
          "Konjunktiv I ‘hätten’ ile dolaylı anlatım, geçmişteki bir eylemi ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Er sei mit zwölf Jahren auf eine Kunstschule gekommen.",
        translation: "On iki yaşında bir sanat okuluna gitmiş.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, geçmişteki bir durumu ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Dort habe er verschiedene Techniken erlernt.",
        translation: "Orada çeşitli teknikler öğrenmiş.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir eylemi ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Der junge Mann sei immer sein begabtester Student gewesen.",
        translation: "Genç adam her zaman en yetenekli öğrencisiymiş.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, geçmişteki bir durumu ifade eder. Ana cümle ‘berichtete’ Präteritum.",
      },
      {
        text: "Er habe bereits damals unkonventionelle Ideen gehabt.",
        translation: "O zamanlar zaten alışılmadık fikirler üretmiş.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir özelliği ifade eder. Ana cümle ‘berichtete’ Präteritum.",
      },
      {
        text: "Die anderen Studenten hätten oft versucht, seinen Stil zu kopieren.",
        translation:
          "Diğer öğrenciler sık sık onun tarzını taklit etmeye çalışmış.",
        explanation:
          "Konjunktiv I ‘hätten’ ile dolaylı anlatım, geçmişteki bir eylemi ifade eder. Ana cümle ‘berichtete’ Präteritum.",
      },
      {
        text: "Der Professor habe ihm geraten, seinen eigenen Weg zu gehen.",
        translation: "Profesör ona kendi yolunu izlemesini önermiş.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir tavsiyeyi ifade eder. Ana cümle ‘berichtete’ Präteritum.",
      },
      {
        text: "Ihr Enkel habe als Jugendlicher das Familienfotoalbum neu gestaltet.",
        translation:
          "Torunu gençken aile fotoğraf albümünü yeniden tasarlamış.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir eylemi ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Er sei schon immer ein Träumer gewesen.",
        translation: "Her zaman bir hayalperestmiş.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, geçmişteki bir özelliği ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Sie habe gewusst, dass er eines Tages erfolgreich sein würde.",
        translation: "Onun bir gün başarılı olacağını biliyormuş.",
        explanation:
          "Konjunktiv I ‘habe’ ile dolaylı anlatım, geçmişteki bir bilgiyi ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
      {
        text: "Die ganze Familie sei sehr stolz auf ihn.",
        translation: "Tüm aile onunla çok gurur duyuyormuş.",
        explanation:
          "Konjunktiv I ‘sei’ ile dolaylı anlatım, mevcut bir duyguyu ifade eder. Ana cümle ‘erzählte’ Präteritum.",
      },
    ],
  },
  {
    title: "3. Wiedergabe von Aufforderungen, Gerüchten und Selbstaussagen",
    sentences: [
      {
        text: "Die Museumsdirektorin bat die Besucher, die Kunstwerke nicht zu fotografieren.",
        translation:
          "Müze direktörü ziyaretçilerden sanat eserlerini fotoğraflamamalarını rica etti.",
        explanation:
          "Dolaylı emir, ‘bat’ fiiliyle. ‘Nicht zu fotografieren’ mastar, fotoğraf çekme yasağını ifade eder.",
      },
      {
        text: "Sie forderte alle auf, die Sicherheitsabstände zu respektieren.",
        translation:
          "Herkesten güvenlik mesafelerine saygı göstermelerini istedi.",
        explanation:
          "Dolaylı emir, ‘forderte’ fiiliyle. ‘Zu respektieren’ mastar, mesafeye uyulmasını ifade eder.",
      },
      {
        text: "Die Aufsicht wies darauf hin, dass man keine Taschen mit in die Ausstellung nehmen solle.",
        translation: "Gözetmen, sergiye çanta alınmaması gerektiğini belirtti.",
        explanation:
          "Dolaylı emir, ‘wies’ fiiliyle. Konjunktiv I ‘sole’ ile, çanta yasağını ifade eder.",
      },
      {
        text: "Ein Schild empfahl den Besuchern, sich mindestens zwei Stunden Zeit zu nehmen.",
        translation:
          "Bir tabela ziyaretçilere en az iki saat ayırmalarını önerdi.",
        explanation:
          "Dolaylı öneri, ‘empfahl’ fiiliyle. ‘Sich Zeit zu nehmen’ mastar, zaman ayırmayı ifade eder.",
      },
      {
        text: "Man sage, er habe einen millionenschweren Vertrag abgeschlossen.",
        translation: "Onun milyonluk bir sözleşme imzaladığı söyleniyormuş.",
        explanation:
          "Dolaylı söylenti, ‘man sage’ ile. Konjunktiv I ‘habe’ ile geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Angeblich plane er bereits seine nächste internationale Ausstellung.",
        translation:
          "İddiaya göre bir sonraki uluslararası sergisini planlıyormuş.",
        explanation:
          "Dolaylı söylenti, ‘angeblich’ ile. Konjunktiv I ‘plane’ ile mevcut bir eylemi ifade eder.",
      },
      {
        text: "Es heiße, mehrere Museen bemühten sich um den Ankauf seiner Werke.",
        translation:
          "Birkaç müzenin eserlerini satın almak için çaba gösterdiği söyleniyormuş.",
        explanation:
          "Dolaylı söylenti, ‘es heiße’ ile. Konjunktiv I ‘bemühten’ ile mevcut bir çabayı ifade eder.",
      },
      {
        text: "Einige behaupteten, er lebe zurückgezogen in einem Schloss.",
        translation:
          "Bazıları onun bir şatoda münzevi bir hayat yaşadığını iddia etti.",
        explanation:
          "Dolaylı söylenti, ‘behaupteten’ fiiliyle. Konjunktiv I ‘lebe’ ile mevcut bir durumu ifade eder.",
      },
      {
        text: "Er sagte, er arbeite am liebsten nachts.",
        translation: "En çok geceleri çalışmayı sevdiğini söyledi.",
        explanation:
          "Dolaylı kendi ifadesi, ‘sagte’ fiiliyle. Konjunktiv I ‘arbeite’ ile mevcut bir alışkanlığı ifade eder.",
      },
      {
        text: "Er fühle sich dann inspirierter.",
        translation:
          "O zamanlar kendini daha ilham almış hissettiğini söylemiş.",
        explanation:
          "Dolaylı kendi ifadesi, ‘sagte’ fiiliyle. Konjunktiv I ‘fühle’ ile mevcut bir duyguyu ifade eder.",
      },
      {
        text: "Er behaupte nicht, ein Genie zu sein.",
        translation: "Dahi olduğunu iddia etmediğini söylemiş.",
        explanation:
          "Dolaylı kendi ifadesi, ‘behaupte’ fiiliyle. Konjunktiv I ‘behaupte’ ile mevcut bir durumu ifade eder.",
      },
      {
        text: "Er arbeite einfach hart.",
        translation: "Sadece çok çalıştığını söylemiş.",
        explanation:
          "Dolaylı kendi ifadesi, ‘sagte’ fiiliyle. Konjunktiv I ‘arbeite’ ile mevcut bir eylemi ifade eder.",
      },
      {
        text: "Er glaube, dass Kunst die Welt verändern könne.",
        translation: "Sanatın dünyayı değiştirebileceğine inandığını söylemiş.",
        explanation:
          "Dolaylı kendi ifadesi, ‘glaube’ fiiliyle. Konjunktiv I ‘glaube’ ve ‘könne’ ile bir olasılığı ifade eder.",
      },
      {
        text: "Er sei überzeugt, dass jeder Mensch kreatives Potenzial habe.",
        translation:
          "Herkesin yaratıcı potansiyeli olduğuna ikna olduğunu söylemiş.",
        explanation:
          "Dolaylı kendi ifadesi, ‘sei’ fiiliyle. Konjunktiv I ‘sei’ ve ‘habe’ ile mevcut bir inancı ifade eder.",
      },
      {
        text: "Er hoffe, mit seiner Kunst Menschen zum Nachdenken anzuregen.",
        translation:
          "Sanatıyla insanları düşünmeye teşvik etmeyi umduğunu söylemiş.",
        explanation:
          "Dolaylı kendi ifadesi, ‘hoffe’ fiiliyle. Konjunktiv I ‘hoffe’ ile mevcut bir umudu ifade eder.",
      },
    ],
  },

  {
    title: "1. Temporale Nebensätze",
    sentences: [
      {
        text: "Als Kommissar Weber in Bad Reichenhall ankam, regnete es in Strömen.",
        translation:
          "Komiser Weber Bad Reichenhall’a vardığında, yağmur bardaktan boşanırcasına yağıyordu.",
        explanation:
          "‘Als’ ile temporale nebensatz, geçmişteki tek seferlik bir olayı belirtir. Ana cümle Präteritum ‘regnete’.",
      },
      {
        text: "Er zog seinen Mantel enger, während er zum Hotel eilte.",
        translation: "Otel’e acele ederken paltosunu daha sıkı çekti.",
        explanation:
          "‘Während’ ile temporale nebensatz, eşzamanlı bir eylemi ifade eder. Ana cümle Präteritum ‘zog’.",
      },
      {
        text: "Die kleine Stadt wirkte verschlafen, obwohl es erst früher Nachmittag war.",
        translation:
          "Küçük kasaba uykulu görünüyordu, oysa henüz öğleden sonra erken saatlerdi.",
        explanation:
          "‘Obwohl’ ile konzessive nebensatz, beklenenin aksine bir durumu belirtir. Ana cümle Präteritum ‘wirkte’.",
      },
      {
        text: "Nachdem er sein Gepäck im Zimmer abgestellt hatte, machte er sich auf den Weg zum Polizeirevier.",
        translation:
          "Valizini odaya bıraktıktan sonra karakola doğru yola çıktı.",
        explanation:
          "‘Nachdem’ ile temporale nebensatz, önceki bir eylemi belirtir. Ana cümle Präteritum ‘machte’.",
      },
      {
        text: "Bevor wir zum Tatort fahren, sollte ich Ihnen die bisherigen Erkenntnisse mitteilen.",
        translation:
          "Olay yerine gitmeden önce, size şimdiye kadarki bulguları anlatmalıyım.",
        explanation:
          "‘Bevor’ ile temporale nebensatz, gelecekteki bir sırayı belirtir. Ana cümle Präsens ‘sollte’.",
      },
      {
        text: "Seit der Entdeckung des gestohlenen Gemäldes waren bereits zwei Tage vergangen.",
        translation: "Çalınan tablonun keşfinden bu yana iki gün geçmişti.",
        explanation:
          "‘Seit’ ile temporale nebensatz, bir zaman diliminden beri olan durumu ifade eder. Ana cümle Plusquamperfekt ‘waren’.",
      },
      {
        text: "Weber hörte aufmerksam zu, bis sie ihre Ausführungen beendet hatte.",
        translation:
          "Weber dikkatle dinledi, ta ki o açıklamalarını bitirene kadar.",
        explanation:
          "‘Bis’ ile temporale nebensatz, bir eylemin sonlanma zamanını belirtir. Ana cümle Präteritum ‘hörte’.",
      },
      {
        text: "Sobald Sie die Verdächtigen befragt haben, wird sich das Bild klarer zeichnen.",
        translation: "Şüphelileri sorgular sorgulamaz tablo daha netleşecek.",
        explanation:
          "‘Sobald’ ile temporale nebensatz, bir eylemin hemen sonrasını belirtir. Ana cümle Futur I ‘wird’.",
      },
      {
        text: "Immer wenn er an einem neuen Fall arbeitete, ließ er sich Zeit.",
        translation: "Ne zaman yeni bir dava üzerinde çalışsa, acele etmezdi.",
        explanation:
          "‘Immer wenn’ ile temporale nebensatz, tekrarlanan bir durumu belirtir. Ana cümle Präteritum ‘ließ’.",
      },
      {
        text: "Sooft er konnte, besichtigte er den Tatort persönlich.",
        translation: "Ne zaman mümkün olsa, olay yerini bizzat incelerdi.",
        explanation:
          "‘So oft’ ile temporale nebensatz, sık tekrarlanan bir eylemi belirtir. Ana cümle Präteritum ‘besichtigte’.",
      },
      {
        text: "Warten wir, bis der Regen nachlässt, dann fahren wir hin.",
        translation: "Yağmur dinene kadar bekleyelim, sonra oraya gideriz.",
        explanation:
          "‘Bis’ ile temporale nebensatz, bir eylemin tamamlanmasını belirtir. Ana cümle Präsens ‘warten’.",
      },
    ],
  },
  {
    title: "2. Kausale und konzessive Nebensätze",
    sentences: [
      {
        text: "Die Villa am Stadtrand stand unter Denkmalschutz, weil sie ein hervorragendes Beispiel für den Jugendstil war.",
        translation:
          "Şehir kenarındaki villa, Jugendstil’in mükemmel bir örneği olduğu için koruma altındaydı.",
        explanation:
          "‘Weil’ ile kausale nebensatz, bir neden belirtir. Ana cümle Präteritum ‘stand’.",
      },
      {
        text: "Da das gestohlene Gemälde sehr wertvoll gewesen war, hatte man die Landeskriminalpolizei eingeschaltet.",
        translation:
          "Çalınan tablo çok değerli olduğu için eyalet kriminal polisi devreye sokulmuştu.",
        explanation:
          "‘Da’ ile kausale nebensatz, bir sebep belirtir. Ana cümle Plusquamperfekt ‘hatte’.",
      },
      {
        text: "Der Eigentümer wirkte nervös, weil er keine Versicherung für das Kunstwerk abgeschlossen hatte.",
        translation:
          "Sahibi gergin görünüyordu, çünkü sanat eseri için sigorta yaptırmamıştı.",
        explanation:
          "‘Weil’ ile kausale nebensatz, bir nedeni ifade eder. Ana cümle Präteritum ‘wirkte’.",
      },
      {
        text: "Obwohl die örtliche Polizei bereits alle Anwesenden befragt hatte, wollte Kommissar Weber seine eigenen Gespräche führen.",
        translation:
          "Yerel polis herkesi sorgulamış olmasına rağmen, Komiser Weber kendi görüşmelerini yapmak istedi.",
        explanation:
          "‘Obwohl’ ile konzessive nebensatz, beklenenin aksine bir durumu belirtir. Ana cümle Präteritum ‘wollte’.",
      },
      {
        text: "Obschon die Spurensicherung keine Einbruchsspuren gefunden hatte, ging man von einem Diebstahl aus.",
        translation:
          "Delil toplama ekibi hırsızlık izi bulamamış olmasına rağmen, bir hırsızlık olduğu düşünüldü.",
        explanation:
          "‘Obschon’ ile konzessive nebensatz, ters bir durumu belirtir. Ana cümle Präteritum ‘ging’.",
      },
      {
        text: "Trotzdem dieser Fall auf den ersten Blick eindeutig erscheint, habe ich Zweifel.",
        translation:
          "Bu dava ilk bakışta açık gibi görünmesine rağmen, şüphelerim var.",
        explanation:
          "‘Trotzdem’ ile konzessive nebensatz, görünüşe rağmen bir şüpheyi ifade eder. Ana cümle Präsens ‘habe’.",
      },
      {
        text: "Wenngleich die Beweise gegen den Gärtner sprachen, wollte der Kommissar auch andere Möglichkeiten in Betracht ziehen.",
        translation:
          "Bahçıvana karşı kanıtlar olmasına rağmen, Komiser diğer olasılıkları da değerlendirmek istedi.",
        explanation:
          "‘Wenngleich’ ile konzessive nebensatz, ters bir durumu belirtir. Ana cümle Präteritum ‘wollte’.",
      },
      {
        text: "Obzwar er müde von der langen Fahrt war, begann er sofort mit der Arbeit.",
        translation:
          "Uzun yolculuktan yorgun olmasına rağmen, hemen çalışmaya başladı.",
        explanation:
          "‘Obzwar’ ile konzessive nebensatz, bir zıtlığı ifade eder. Ana cümle Präteritum ‘begann’.",
      },
      {
        text: "Die Villa war weitläufig, sodass es für einen Einzeltäter schwierig gewesen wäre, unbemerkt zu entkommen.",
        translation:
          "Villa genişti, bu yüzden tek bir hırsızın fark edilmeden kaçması zor olurdu.",
        explanation:
          "‘Sodass’ ile konsekutive nebensatz, bir sonucu belirtir. Ana cümle Präteritum ‘war’.",
      },
    ],
  },
  {
    title: "3. Konsekutive Nebensätze",
    sentences: [
      {
        text: "Das Gemälde war so wertvoll, dass es normalerweise in einem Tresor aufbewahrt wurde.",
        translation:
          "Tablo o kadar değerliydi ki normalde bir kasada saklanırdı.",
        explanation:
          "‘So…dass’ ile konsekutive nebensatz, bir sonucu belirtir. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Die Sicherheitsmaßnahmen waren derart umfassend, dass ein gewöhnlicher Einbrecher kaum eine Chance gehabt hätte.",
        translation:
          "Güvenlik önlemleri o kadar kapsamlıydı ki sıradan bir hırsızın şansı neredeyse olmazdı.",
        explanation:
          "‘Derart…dass’ ile konsekutive nebensatz, bir sonucu ifade eder. Ana cümle Präteritum ‘waren’.",
      },
      {
        text: "Der Dieb musste die Gewohnheiten im Haus gut genug gekannt haben, sodass er genau wusste, wann die Küste frei war.",
        translation:
          "Hırsız evdeki alışkanlıkları yeterince iyi bilmiş olmalıydı ki ne zaman uygun olduğunu tam olarak biliyordu.",
        explanation:
          "‘Sodass’ ile konsekutive nebensatz, bir sonucu belirtir. Ana cümle Perfekt ‘musste’.",
      },
      {
        text: "Der Alarm wurde deaktiviert, sodass der Täter ohne Probleme eindringen konnte.",
        translation:
          "Alarm devre dışı bırakılmıştı, böylece hırsız sorunsuzca girebildi.",
        explanation:
          "‘Sodass’ ile konsekutive nebensatz, bir sonucu ifade eder. Ana cümle Passiv Präteritum ‘wurde’.",
      },
      {
        text: "Die Spuren waren so professionell verwischt worden, dass die Polizei kaum verwertbare Hinweise fand.",
        translation:
          "İzler o kadar profesyonelce silinmişti ki polis neredeyse hiçbir kullanılabilir ipucu bulamadı.",
        explanation:
          "‘So…dass’ ile konsekutive nebensatz, bir sonucu belirtir. Ana cümle Passiv Plusquamperfekt ‘waren’.",
      },
      {
        text: "Das Zeitfenster war zu knapp, als dass ein Fremder es hätte schaffen können.",
        translation:
          "Zaman aralığı o kadar dardı ki bir yabancı bunu başaramazdı.",
        explanation:
          "‘Zu…als dass’ ile konsekutive nebensatz, imkânsız bir sonucu ifade eder. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Die Hausdame wirkte dermaßen aufgelöst, dass der Kommissar sie beruhigen musste.",
        translation:
          "Hizmetçi o kadar perişandı ki Komiser onu sakinleştirmek zorunda kaldı.",
        explanation:
          "‘Dermaßen…dass’ ile konsekutive nebensatz, bir sonucu belirtir. Ana cümle Präteritum ‘wirkte’.",
      },
      {
        text: "Die Situation war dergestalt verfahren, dass Weber beschloss, noch einmal ganz von vorne anzufangen.",
        translation:
          "Durum o kadar karışıktı ki Weber baştan başlamaya karar verdi.",
        explanation:
          "‘Dergestalt…dass’ ile konsekutive nebensatz, bir sonucu ifade eder. Ana cümle Präteritum ‘beschloss’.",
      },
    ],
  },
  {
    title: "4. Konditionale und konzessive Nebensätze",
    sentences: [
      {
        text: "Falls der Dieb das Gemälde über die Grenze bringen will, haben wir ein Problem.",
        translation:
          "Eğer hırsız tabloyu sınırdan geçirmek isterse, bir sorunumuz var.",
        explanation:
          "‘Falls’ ile konditionale nebensatz, bir koşulu belirtir. Ana cümle Präsens ‘haben’.",
      },
      {
        text: "Wenn Weber seine Vermutung bestätigen könnte, wäre der Fall schnell gelöst.",
        translation:
          "Eğer Weber şüphesini doğrulayabilse, dava çabucak çözülürdü.",
        explanation:
          "‘Wenn’ ile konditionale nebensatz, hipotetik bir durumu belirtir. Ana cümle Konjunktiv II ‘wäre’.",
      },
      {
        text: "Sofern keine neuen Beweise auftauchten, müssten sie sich auf die Befragungen konzentrieren.",
        translation:
          "Yeni kanıtlar ortaya çıkmazsa, sorgulamalara odaklanmaları gerekirdi.",
        explanation:
          "‘Sofern’ ile konditionale nebensatz, bir koşulu ifade eder. Ana cümle Konjunktiv II ‘müssten’.",
      },
      {
        text: "Sollte jemand aus dem Personal beteiligt sein, müsste dieser Person der Wert des Gemäldes bekannt gewesen sein.",
        translation:
          "Eğer personelden biri dahil olsaydı, bu kişi tablonun değerini bilmiş olmalıydı.",
        explanation:
          "‘Sollte’ ile konditionale nebensatz, bir olasılığı belirtir. Ana cümle Konjunktiv II ‘müsste’.",
      },
      {
        text: "Falls sie die Überwachungsvideos nochmals überprüften, könnten ihnen vielleicht Details auffallen.",
        translation:
          "Eğer güvenlik videolarını tekrar inceleseler, belki bazı detaylar dikkatlerini çekebilirdi.",
        explanation:
          "‘Falls’ ile konditionale nebensatz, bir olasılığı ifade eder. Ana cümle Konjunktiv II ‘könnten’.",
      },
      {
        text: "Selbst wenn der Dieb professionell vorgegangen war, hatte er sicher Spuren hinterlassen.",
        translation:
          "Hırsız profesyonelce hareket etmiş olsa bile, kesinlikle iz bırakmıştı.",
        explanation:
          "‘Selbst wenn’ ile konzessive nebensatz, bir zıtlığı belirtir. Ana cümle Perfekt ‘hatte’.",
      },
      {
        text: "Auch wenn der Verdacht auf den Gärtner fiel, wollte Weber alle Möglichkeiten offen halten.",
        translation:
          "Şüphe bahçıvana yönelse de, Weber tüm olasılıkları açık tutmak istedi.",
        explanation:
          "‘Auch wenn’ ile konzessive nebensatz, bir zıtlığı ifade eder. Ana cümle Präteritum ‘wollte’.",
      },
      {
        text: "Die Villa war gut gesichert, es sei denn, jemand hatte einen Schlüssel.",
        translation:
          "Villa iyi korunuyordu, tabii biri anahtar sahibi değilse.",
        explanation:
          "‘Es sei denn’ ile konzessive nebensatz, bir istisnayı belirtir. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Wenn der Täter nicht aus dem inneren Kreis kam, dann hatte er jedenfalls Insiderwissen.",
        translation:
          "Eğer suçlu iç çevreden değilse, her halükârda içeriden bilgi sahibiydi.",
        explanation:
          "‘Wenn’ ile konditionale nebensatz, bir koşulu belirtir. Ana cümle Perfekt ‘hatte’.",
      },
    ],
  },
  {
    title: "5. Modale Nebensätze",
    sentences: [
      {
        text: "Kommissar Weber untersuchte den Tatort, indem er jeden Winkel genau betrachtete.",
        translation:
          "Komiser Weber olay yerini her köşeyi dikkatlice inceleyerek araştırdı.",
        explanation:
          "‘Indem’ ile modale nebensatz, bir eylemin nasıl gerçekleştiğini belirtir. Ana cümle Präteritum ‘untersuchte’.",
      },
      {
        text: "Die Hausdame beschrieb den normalen Tagesablauf, wobei sie besonders die Sicherheitsroutinen betonte.",
        translation:
          "Hizmetçi günlük rutini tarif ederken özellikle güvenlik prosedürlerini vurguladı.",
        explanation:
          "‘Wobei’ ile modale nebensatz, bir eylemin detayını belirtir. Ana cümle Präteritum ‘beschrieb’.",
      },
      {
        text: "Der Besitzer hatte das Gemälde erworben, ohne dessen wahre Herkunft zu kennen.",
        translation:
          "Sahibi, tablonun gerçek kökenini bilmeden tabloyu satın almıştı.",
        explanation:
          "‘Ohne…zu’ ile modale nebensatz, bir eylemin gerçekleşmediğini belirtir. Ana cümle Plusquamperfekt ‘hatte’.",
      },
      {
        text: "Die Polizisten durchsuchten das Anwesen, ohne dabei auf weitere Hinweise zu stoßen.",
        translation: "Polisler malikâneyi aradı, ancak başka ipucu bulmadan.",
        explanation:
          "‘Ohne…zu’ ile modale nebensatz, bir eylemin eksikliğini ifade eder. Ana cümle Präteritum ‘durchsuchten’.",
      },
      {
        text: "Der Dieb hatte das Alarmsystem umgangen, anstatt es zu deaktivieren.",
        translation:
          "Hırsız alarm sistemini devre dışı bırakmak yerine atlattı.",
        explanation:
          "‘Anstatt…zu’ ile modale nebensatz, alternatif bir eylemi belirtir. Ana cümle Perfekt ‘hatte’.",
      },
      {
        text: "Er muss das Haus verlassen haben, ohne gesehen zu werden.",
        translation: "Evden görülmeden ayrılmış olmalı.",
        explanation:
          "‘Ohne…zu’ ile modale nebensatz, bir eylemin gizli gerçekleştiğini ifade eder. Ana cümle Perfekt ‘muss’.",
      },
      {
        text: "Je länger er die Beweise betrachtete, desto mehr Zweifel kamen ihm.",
        translation:
          "Kanıtları ne kadar uzun incelerse, o kadar çok şüphe duyuyordu.",
        explanation:
          "‘Je…desto’ ile modale nebensatz, bir orantıyı belirtir. Ana cümle Präteritum ‘kamen’.",
      },
      {
        text: "Der Täter hatte gehandelt, als ob er jede Ecke des Hauses kannte.",
        translation: "Suçlu, evin her köşesini biliyormuş gibi davranmıştı.",
        explanation:
          "‘Als ob’ ile modale nebensatz, bir varsayımı ifade eder. Ana cümle Perfekt ‘hatte’.",
      },
      {
        text: "Die Kameras waren ausgeschaltet worden, wie wenn jemand genau wusste, wo sich die Kontrolleinheit befand.",
        translation:
          "Kameralar, biri kontrol ünitesinin yerini tam biliyormuş gibi kapatılmıştı.",
        explanation:
          "‘Wie wenn’ ile modale nebensatz, bir benzetmeyi belirtir. Ana cümle Passiv Plusquamperfekt ‘waren’.",
      },
      {
        text: "Das Gemälde verschwand, ohne dass die Sensoren ausgelöst wurden.",
        translation: "Tablo, sensörler tetiklenmeden kayboldu.",
        explanation:
          "‘Ohne dass’ ile modale nebensatz, bir eylemin eksikliğini ifade eder. Ana cümle Präteritum ‘verschwand’.",
      },
    ],
  },
  {
    title: "6. Infinitiv mit und ohne zu",
    sentences: [
      {
        text: "Weber konnte das Motiv für den Diebstahl nicht verstehen.",
        translation: "Weber hırsızlığın motifini anlayamadı.",
        explanation:
          "Infinitiv ‘verstehen’ ohne ‘zu’, modal fiil ‘konnte’ ile kullanılır. Ana cümle Präteritum.",
      },
      {
        text: "Der Besitzer schien etwas zu verbergen.",
        translation: "Sahibi bir şey saklıyor gibiydi.",
        explanation:
          "Infinitiv ‘verbergen’ mit ‘zu’, fiil ‘schien’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Die Ermittler hofften, bald eine Spur zu finden.",
        translation: "Dedektifler yakında bir iz bulmayı umuyordu.",
        explanation:
          "Infinitiv ‘finden’ mit ‘zu’, fiil ‘hofften’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Es war schwer, in diesem Fall klar zu sehen.",
        translation: "Bu davada net görmek zordu.",
        explanation:
          "Infinitiv ‘sehen’ mit ‘zu’, sıfat ‘schwer’ ile. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Wir müssen versuchen, die Überwachungsvideos der Nachbarhäuser zu bekommen.",
        translation: "Komşu evlerin güvenlik videolarını almayı denemeliyiz.",
        explanation:
          "Infinitiv ‘bekommen’ mit ‘zu’, fiil ‘versuchen’ ile. Ana cümle Präsens ‘müssen’.",
      },
      {
        text: "Er begann, systematisch jeden Verdächtigen zu überprüfen.",
        translation: "Her şüpheliyi sistematik olarak kontrol etmeye başladı.",
        explanation:
          "Infinitiv ‘überprüfen’ mit ‘zu’, fiil ‘begann’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Die Hausdame ließ sich bereitwillig befragen.",
        translation: "Hizmetçi isteyerek sorgulanmasına izin verdi.",
        explanation:
          "Infinitiv ‘befragen’ ohne ‘zu’, fiil ‘ließ’ ile kausativ. Ana cümle Präteritum.",
      },
      {
        text: "Der Kommissar hatte den Gärtner kommen lassen, um ihn persönlich zu verhören.",
        translation: "Komiser bahçıvanı çağırttı, onu bizzat sorgulamak için.",
        explanation:
          "Infinitiv ‘kommen’ ohne ‘zu’, kausativ ‘lassen’. ‘Verhören’ mit ‘zu’, final. Ana cümle Perfekt.",
      },
      {
        text: "Ich habe das Gemälde hängen sehen, als ich die Pflanzen gegossen habe.",
        translation: "Bitkileri sularken tablonun asılı olduğunu gördüm.",
        explanation:
          "Infinitiv ‘hängen’ ohne ‘zu’, algı fiili ‘sehen’ ile. Ana cümle Perfekt.",
      },
      {
        text: "Weber beschloss, die Geschichte genauer zu recherchieren.",
        translation: "Weber hikayeyi daha detaylı araştırmaya karar verdi.",
        explanation:
          "Infinitiv ‘recherchieren’ mit ‘zu’, fiil ‘beschloss’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Es galt nun, das Alibi jedes Verdächtigen zu überprüfen.",
        translation:
          "Şimdi her şüphelinin alibisini kontrol etmek gerekiyordu.",
        explanation:
          "Infinitiv ‘überprüfen’ mit ‘zu’, ifade ‘es galt’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Der Besitzer schien etwas zu verschweigen, anstatt offen zu kooperieren.",
        translation:
          "Sahibi açıkça işbirliği yapmak yerine bir şey gizliyor gibiydi.",
        explanation:
          "Infinitiv ‘verschweigen’ ve ‘kooperieren’ mit ‘zu’, fiil ‘schien’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Ich höre Sie telefonieren.",
        translation: "Sizi telefonla konuşurken duyuyorum.",
        explanation:
          "Infinitiv ‘telefonieren’ ohne ‘zu’, algı fiili ‘höre’ ile. Ana cümle Präsens.",
      },
      {
        text: "Lassen Sie mich wissen, wenn Sie bereit sind zu reden.",
        translation: "Konuşmaya hazır olduğunuzda bana haber verin.",
        explanation:
          "Infinitiv ‘wissen’ ohne ‘zu’, kausativ ‘lassen’. ‘Reden’ mit ‘zu’, final. Ana cümle Imperativ.",
      },
    ],
  },
  {
    title: "7. Nebensätze mit dass und Infinitiv mit zu",
    sentences: [
      {
        text: "Der Hausherr behauptete, dass er zum Zeitpunkt des Diebstahls nicht anwesend gewesen sei.",
        translation: "Ev sahibi, hırsızlık anında orada olmadığını iddia etti.",
        explanation:
          "‘Dass’ ile nebensatz, Konjunktiv I ‘sei’ ile geçmiş durumu belirtir. Ana cümle Präteritum ‘behauptete’.",
      },
      {
        text: "Es war bekannt, dass das Gemälde erst kürzlich erworben worden war.",
        translation: "Tablonun yakın zamanda satın alındığı biliniyordu.",
        explanation:
          "‘Dass’ ile nebensatz, Passiv Plusquamperfekt ‘war’ ile bir bilgiyi ifade eder. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Weber hatte den Verdacht, dass mehr hinter der Geschichte steckte.",
        translation:
          "Weber, hikayenin ardında daha fazlası olduğundan şüpheleniyordu.",
        explanation:
          "‘Dass’ ile nebensatz, bir şüpheyi belirtir. Ana cümle Perfekt ‘hatte’.",
      },
      {
        text: "Es ist wichtig, dass wir alle Fakten kennen.",
        translation: "Tüm gerçekleri bilmemiz önemli.",
        explanation:
          "‘Dass’ ile nebensatz, bir gerekliliği ifade eder. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Die Tatsache, dass keine Einbruchsspuren gefunden wurden, ließ vermuten, dass es sich um einen Insider handelte.",
        translation:
          "Hırsızlık izi bulunmaması, içeriden birinin yaptığına işaret ediyordu.",
        explanation:
          "‘Dass’ ile nebensatz, bir sonucu destekler. Ana cümle Präteritum ‘ließ’.",
      },
      {
        text: "Es schien, dass der Dieb mit dem Sicherheitssystem vertraut war.",
        translation: "Hırsızın güvenlik sistemiyle aşina olduğu anlaşılıyordu.",
        explanation:
          "‘Dass’ ile nebensatz, bir gözlemi belirtir. Ana cümle Präteritum ‘schien’.",
      },
      {
        text: "Der Kommissar bat darum, die Finanzunterlagen des Besitzers zu überprüfen.",
        translation:
          "Komiser, sahibinin mali kayıtlarını kontrol etmeyi talep etti.",
        explanation:
          "Infinitiv ‘überprüfen’ mit ‘zu’, fiil ‘bat’ ile. Ana cümle Präteritum.",
      },
      {
        text: "Es war notwendig, jeden Hinweis zu verfolgen.",
        translation: "Her ipucunu takip etmek gerekliydi.",
        explanation:
          "Infinitiv ‘verfolgen’ mit ‘zu’, sıfat ‘notwendig’ ile. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Er hatte vor, auch mit den Nachbarn zu sprechen.",
        translation: "Komşularla da konuşmayı planlıyordu.",
        explanation:
          "Infinitiv ‘sprechen’ mit ‘zu’, ifade ‘hatte vor’ ile. Ana cümle Perfekt.",
      },
      {
        text: "Weber hielt es für unwahrscheinlich, dass niemand etwas bemerkt hatte.",
        translation:
          "Weber, kimsenin bir şey fark etmemiş olmasını olası görmüyordu.",
        explanation:
          "‘Dass’ ile nebensatz, bir olasılığı reddeder. Ana cümle Präteritum ‘hielt’.",
      },
      {
        text: "Ich glaube nicht, dass der Gärtner allein gehandelt hat.",
        translation: "Bahçıvanın tek başına hareket ettiğine inanmıyorum.",
        explanation:
          "‘Dass’ ile nebensatz, bir şüpheyi ifade eder. Ana cümle Präsens ‘glaube’.",
      },
      {
        text: "Es ist schwer, ein so großes Gemälde unbemerkt zu transportieren.",
        translation: "Böylesine büyük bir tabloyu fark edilmeden taşımak zor.",
        explanation:
          "Infinitiv ‘transportieren’ mit ‘zu’, sıfat ‘schwer’ ile. Ana cümle Präsens ‘ist’.",
      },
    ],
  },
  {
    title: "8. Finale und modale Infinitiv- und Nebensätze",
    sentences: [
      {
        text: "Der Kommissar setzte sich mit dem Sicherheitsexperten zusammen, um die Alarmanlagen zu überprüfen.",
        translation:
          "Komiser, alarm sistemlerini kontrol etmek için güvenlik uzmanıyla bir araya geldi.",
        explanation:
          "Infinitiv ‘überprüfen’ mit ‘zu’, final, amaç belirtir. Ana cümle Präteritum ‘setzte’.",
      },
      {
        text: "Er war nach Bad Reichenhall gekommen, um diesen mysteriösen Fall zu lösen.",
        translation:
          "Bu gizemli davayı çözmek için Bad Reichenhall’a gelmişti.",
        explanation:
          "Infinitiv ‘lösen’ mit ‘zu’, final, amacı ifade eder. Ana cümle Plusquamperfekt ‘war’.",
      },
      {
        text: "Man hatte einen Kunstexperten hinzugezogen, damit er den Wert des Gemäldes genau bestimmen konnte.",
        translation:
          "Tablonun değerini tam olarak belirlemesi için bir sanat uzmanı çağrılmıştı.",
        explanation:
          "‘Damit’ ile final nebensatz, bir amacı belirtir. Ana cümle Passiv Plusquamperfekt ‘hatte’.",
      },
      {
        text: "Weber untersuchte alle Akten, anstatt sich nur auf die Aussagen zu verlassen.",
        translation:
          "Weber, sadece ifadelere dayanmak yerine tüm dosyaları inceledi.",
        explanation:
          "Infinitiv ‘verlassen’ mit ‘zu’, modale, alternatif bir eylemi reddeder. Ana cümle Präteritum ‘untersuchte’.",
      },
      {
        text: "Die Polizei hatte Straßensperren errichtet, um mögliche Fluchtwege zu kontrollieren.",
        translation:
          "Polis, olası kaçış yollarını kontrol etmek için yol bariyerleri kurmuştu.",
        explanation:
          "Infinitiv ‘kontrollieren’ mit ‘zu’, final, amacı ifade eder. Ana cümle Plusquamperfekt ‘hatte’.",
      },
      {
        text: "Der Besitzer schien nervös, ohne dass es dafür einen ersichtlichen Grund gab.",
        translation: "Sahibi, görünür bir sebep olmaksızın gergin görünüyordu.",
        explanation:
          "‘Ohne dass’ ile modale nebensatz, bir eksikliği belirtir. Ana cümle Präteritum ‘schien’.",
      },
      {
        text: "Der Kommissar ging zum Fenster, um den Garten zu überblicken.",
        translation: "Komiser bahçeyi görmek için pencereye gitti.",
        explanation:
          "Infinitiv ‘überblicken’ mit ‘zu’, final, amacı ifade eder. Ana cümle Präteritum ‘ging’.",
      },
      {
        text: "Ich habe das Team gebeten, das Grundstück zu durchsuchen, ohne dabei Aufsehen zu erregen.",
        translation: "Ekipten, dikkat çekmeden araziyi aramasını rica ettim.",
        explanation:
          "Infinitiv ‘durchsuchen’ ve ‘erregen’ mit ‘zu’, final ve modale. Ana cümle Perfekt ‘habe’.",
      },
      {
        text: "Sie waren nach Bad Reichenhall gefahren, um herauszufinden, was wirklich passiert war.",
        translation:
          "Gerçekte ne olduğunu öğrenmek için Bad Reichenhall’a gitmişlerdi.",
        explanation:
          "Infinitiv ‘herauszufinden’ mit ‘zu’, final, amacı ifade eder. Ana cümle Plusquamperfekt ‘waren’.",
      },
      {
        text: "Wir sollten mit dem Nachbarn sprechen, statt nur Vermutungen anzustellen.",
        translation: "Sadece tahmin yürütmek yerine komşuyla konuşmalıyız.",
        explanation:
          "Infinitiv ‘anzustellen’ mit ‘zu’, modale, alternatif bir eylemi reddeder. Ana cümle Präsens ‘sollten’.",
      },
      {
        text: "Um Zeit zu sparen, teilten sie sich auf.",
        translation: "Zaman kazanmak için görevleri bölüştüler.",
        explanation:
          "Infinitiv ‘sparen’ mit ‘zu’, final, amacı ifade eder. Ana cümle Präteritum ‘teilten’.",
      },
    ],
  },
  {
    title: "9. Relativpronomen im Nominativ, Akkusativ und Dativ",
    sentences: [
      {
        text: "Die Villa, die am Stadtrand stand, gehörte einem bekannten Industriellen.",
        translation:
          "Şehir kenarında bulunan villa, tanınmış bir sanayiciye aitti.",
        explanation:
          "Relativpronomen ‘die’ nominativ, feminin, ‘Villa’ için. Nebensatz bir tanımlama yapar.",
      },
      {
        text: "Der Mann, der das Gemälde als Erster vermisst hatte, war der Butler.",
        translation: "Tabloyu ilk fark eden adam, uşaktı.",
        explanation:
          "Relativpronomen ‘der’ nominativ, maskulin, ‘Mann’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Das Team, das aus München angereist war, unterstützte die örtliche Polizei.",
        translation: "Münih’ten gelen ekip, yerel polisi destekledi.",
        explanation:
          "Relativpronomen ‘das’ nominativ, nötr, ‘Team’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Weber befragte die Köchin, die am Abend des Diebstahls Dienst hatte.",
        translation: "Weber, hırsızlık akşamı görevde olan aşçıyı sorguladı.",
        explanation:
          "Relativpronomen ‘die’ akkusativ, feminin, ‘Köchin’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Gärtner, den die Polizei zunächst verdächtigt hatte, konnte ein Alibi vorweisen.",
        translation:
          "Polisin başlangıçta şüphelendiği bahçıvan, bir alibi sunabildi.",
        explanation:
          "Relativpronomen ‘den’ akkusativ, maskulin, ‘Gärtner’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Das Sicherheitssystem, das erst kürzlich installiert worden war, hatte versagt.",
        translation:
          "Yakın zamanda kurulan güvenlik sistemi başarısız olmuştu.",
        explanation:
          "Relativpronomen ‘das’ nominativ, nötr, ‘Sicherheitssystem’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Nachbarin, der das Grundstück nebenan gehörte, hatte einen verdächtigen Wagen gesehen.",
        translation:
          "Yan araziye sahip olan komşu kadın, şüpheli bir araba görmüştü.",
        explanation:
          "Relativpronomen ‘der’ dativ, feminin, ‘Nachbarin’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Kunsthändler, dem der Besitzer das Gemälde abgekauft hatte, wurde ebenfalls befragt.",
        translation:
          "Sahibin tabloyu satın aldığı sanat tüccarı da sorgulandı.",
        explanation:
          "Relativpronomen ‘dem’ dativ, maskulin, ‘Kunsthändler’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Das Team, mit dem Weber zusammenarbeitete, war sehr erfahren.",
        translation: "Weber’in birlikte çalıştığı ekip çok deneyimliydi.",
        explanation:
          "Relativpronomen ‘dem’ dativ, nötr, ‘Team’ için, prep. ‘mit’. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Mann, dem das Gemälde ursprünglich gehörte, lebt nicht mehr.",
        translation: "Tablonun orijinal sahibi olan adam artık hayatta değil.",
        explanation:
          "Relativpronomen ‘dem’ dativ, maskulin, ‘Mann’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Kunstsammlung, die er hinterlassen hat, wird vom Museum verwaltet.",
        translation:
          "Onun geride bıraktığı sanat koleksiyonu müze tarafından yönetiliyor.",
        explanation:
          "Relativpronomen ‘die’ nominativ, feminin, ‘Kunstsammlung’ için. Nebensatz tanımlayıcı.",
      },
    ],
  },
  {
    title: "10. Relativpronomen im Genitiv",
    sentences: [
      {
        text: "Der Besitzer, dessen Villa am Stadtrand lag, war ein zurückgezogener Mann.",
        translation:
          "Villası şehir kenarında olan sahip, içine kapanık bir adamdı.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Besitzer’ için, sahip olmayı belirtir.",
      },
      {
        text: "Die Hausdame, deren Aussage besonders wichtig war, kannte alle Gewohnheiten des Haushalts.",
        translation:
          "İfadesi özellikle önemli olan hizmetçi, evin tüm alışkanlıklarını biliyordu.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, feminin, ‘Hausdame’ için, sahip olmayı belirtir.",
      },
      {
        text: "Das Gemälde, dessen Wert auf mehrere Millionen geschätzt wurde, war nicht versichert.",
        translation:
          "Değeri milyonlarla tahmin edilen tablo sigortalanmamıştı.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, nötr, ‘Gemälde’ için, özelliğe işaret eder.",
      },
      {
        text: "Die Überwachungskamera, deren Aufzeichnungen gelöscht worden waren, hätte wichtige Hinweise liefern können.",
        translation:
          "Kayıtları silinen güvenlik kamerası önemli ipuçları sağlayabilirdi.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, feminin, ‘Überwachungskamera’ için, sahip olmayı belirtir.",
      },
      {
        text: "Der Tresor, dessen Code nur wenigen bekannt war, wurde nicht aufgebrochen.",
        translation: "Kodu sadece birkaç kişiye bilinen kasa açılmamıştı.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Tresor’ için, özelliğe işaret eder.",
      },
      {
        text: "Die Ermittler, deren Arbeit methodisch voranschritt, entdeckten immer mehr Ungereimtheiten.",
        translation:
          "Çalışmaları metodik ilerleyen dedektifler, giderek daha fazla tutarsızlık keşfetti.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, plural, ‘Ermittler’ için, özelliğe işaret eder.",
      },
      {
        text: "Der Kunstexperte, dessen Gutachten wir erwarten, hat sich verspätet.",
        translation: "Raporunu beklediğimiz sanat uzmanı gecikti.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Kunstexperte’ için, sahip olmayı belirtir.",
      },
      {
        text: "Die Familie, deren Vermögen aus der Stahlindustrie stammte, lebte seit Generationen in der Villa.",
        translation:
          "Serveti çelik endüstrisinden gelen aile, nesillerdir villada yaşıyordu.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, feminin, ‘Familie’ için, özelliğe işaret eder.",
      },
      {
        text: "Das Museum, dessen Direktor sich für das Gemälde interessiert hatte, lag in München.",
        translation: "Müdürü tabloyla ilgilenen müze, Münih’teydi.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, nötr, ‘Museum’ için, sahip olmayı belirtir.",
      },
      {
        text: "Die junge Frau, deren Auto in der Nähe gesehen wurde, ist die Nichte des Besitzers.",
        translation: "Arabası yakınlarda görülen genç kadın, sahibin yeğeni.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, feminin, ‘Frau’ için, sahip olmayı belirtir.",
      },
      {
        text: "Der Fall, dessen Lösung immer komplizierter schien, beschäftigte ihn Tag und Nacht.",
        translation:
          "Çözümü giderek karmaşıklaşan dava, onu gece gündüz meşgul ediyordu.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Fall’ için, özelliğe işaret eder.",
      },
    ],
  },
  {
    title: "11. Relativpronomen mit w- und als",
    sentences: [
      {
        text: "Das Gemälde, wofür der Besitzer angeblich eine hohe Summe bezahlt hatte, war ein Renoir.",
        translation:
          "Sahibin sözde yüksek bir meblağ ödediği tablo, bir Renoir’di.",
        explanation:
          "Relativpronomen ‘wofür’ prep. ‘für’ ile, nötr ‘Gemälde’ için, amacı belirtir.",
      },
      {
        text: "Die Sicherheitsmaßnahmen, worauf der Hausherr besonders stolz war, hatten versagt.",
        translation:
          "Ev sahibinin özellikle gurur duyduğu güvenlik önlemleri başarısız olmuştu.",
        explanation:
          "Relativpronomen ‘worauf’ prep. ‘auf’ ile, feminin ‘Sicherheitsmaßnahmen’ için, bir özelliği belirtir.",
      },
      {
        text: "Die Alarmanlage, wodurch jeder Eindringling hätte entdeckt werden müssen, war manipuliert worden.",
        translation:
          "Her davetsiz misafiri tespit etmesi gereken alarm sistemi manipüle edilmişti.",
        explanation:
          "Relativpronomen ‘wodurch’ prep. ‘durch’ ile, feminin ‘Alarmanlage’ için, aracı belirtir.",
      },
      {
        text: "Die Situation, worin sich der Kommissar befand, war komplex.",
        translation: "Komiserin bulunduğu durum karmaşıktı.",
        explanation:
          "Relativpronomen ‘worin’ prep. ‘in’ ile, feminin ‘Situation’ için, yeri belirtir.",
      },
      {
        text: "Das Verhör, wobei der Gärtner seine Unschuld beteuerte, brachte keine neuen Erkenntnisse.",
        translation:
          "Bahçıvanın masumiyetini savunduğu sorgulama yeni bilgiler getirmedi.",
        explanation:
          "Relativpronomen ‘wobei’ prep. ‘bei’ ile, nötr ‘Verhör’ için, eşzamanlı durumu belirtir.",
      },
      {
        text: "Das Gespräch, woran sich die Hausdame nur vage erinnern konnte, fand am Vorabend des Diebstahls statt.",
        translation:
          "Hizmetçinin sadece belirsiz hatırladığı konuşma, hırsızlıktan önceki akşam gerçekleşti.",
        explanation:
          "Relativpronomen ‘woran’ prep. ‘an’ ile, nötr ‘Gespräch’ için, bağlantıyı belirtir.",
      },
      {
        text: "Das war der Moment, als mir klar wurde, dass etwas nicht stimmte.",
        translation: "Bir şeylerin yanlış olduğunu anladığım an buydu.",
        explanation:
          "‘Als’ ile relativsatz, belirli bir zamanı belirtir. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Der Kommissar, als erfahrener Ermittler, spürte, dass der Schlüssel zur Lösung im Verhalten des Besitzers lag.",
        translation:
          "Deneyimli bir dedektif olarak Komiser, çözümün sahibin davranışlarında yattığını hissetti.",
        explanation:
          "‘Als’ ile relativsatz, bir sıfatı nitelendirir. Ana cümle Präteritum ‘spürte’.",
      },
      {
        text: "Das Jahr 1989, als das Gemälde zuerst auftauchte, war entscheidend für die Ermittlungen.",
        translation:
          "Tablonun ilk ortaya çıktığı 1989 yılı, soruşturma için kritikti.",
        explanation:
          "‘Als’ ile relativsatz, belirli bir zamanı belirtir. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Der Tag, an dem das Kunstwerk verschwand, war ausgerechnet der Jahrestag seines Erwerbs.",
        translation:
          "Sanat eserinin kaybolduğu gün, tesadüfen satın alınmasının yıldönümüydü.",
        explanation:
          "Relativpronomen ‘dem’ dativ, maskulin, ‘Tag’ için, prep. ‘an’. Nebensatz zamanı belirtir.",
      },
      {
        text: "Der Besitzer, als Sammler moderner Kunst bekannt, hatte das Gemälde erst vor kurzem in seine Sammlung aufgenommen.",
        translation:
          "Modern sanat koleksiyoncusu olarak bilinen sahip, tabloyu yakın zamanda koleksiyonuna eklemişti.",
        explanation:
          "‘Als’ ile relativsatz, bir özelliği nitelendirir. Ana cümle Plusquamperfekt ‘hatte’.",
      },
    ],
  },
  {
    title: "12. Relativsätze – Löst gemeinsam einen Kriminalfall",
    sentences: [
      {
        text: "Die Villa, deren prunkvolle Einrichtung von dem Reichtum des Besitzers zeugte, war der Schauplatz.",
        translation:
          "Sahibin zenginliğini yansıtan gösterişli mobilyalara sahip villa, olay yeriydi.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, feminin, ‘Villa’ için, özelliğe işaret eder.",
      },
      {
        text: "Das Gemälde, das gestohlen wurde, ist nicht wirklich verschwunden.",
        translation: "Çalınan tablo aslında kaybolmadı.",
        explanation:
          "Relativpronomen ‘das’ nominativ, nötr, ‘Gemälde’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Mann, dem das Anwesen gehörte, hat den Diebstahl inszeniert.",
        translation: "Malikâneye sahip olan adam, hırsızlığı düzenledi.",
        explanation:
          "Relativpronomen ‘dem’ dativ, maskulin, ‘Mann’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Hausdame, die seit zwanzig Jahren für die Familie arbeitete, keuchte erschrocken auf.",
        translation:
          "Yirmi yıldır aile için çalışan hizmetçi, şaşkınlıkla nefesini tuttu.",
        explanation:
          "Relativpronomen ‘die’ nominativ, feminin, ‘Hausdame’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Butler, dessen Gesicht bisher keine Regung gezeigt hatte, runzelte die Stirn.",
        translation:
          "Yüzü şimdiye kadar hiçbir tepki göstermeyen uşak, kaşlarını çattı.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Butler’ için, özelliğe işaret eder.",
      },
      {
        text: "Die Versicherungssumme, für die das Gemälde angeblich nicht versichert war, existiert tatsächlich.",
        translation:
          "Tablonun sözde sigortalanmadığı sigorta miktarı aslında mevcut.",
        explanation:
          "Relativpronomen ‘die’ akkusativ, feminin, ‘Versicherungssumme’ için, prep. ‘für’. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Alarmanlage, die angeblich manipuliert wurde, hat man absichtlich deaktiviert.",
        translation:
          "Sözde manipüle edilen alarm sistemi, kasıtlı olarak devre dışı bırakılmıştı.",
        explanation:
          "Relativpronomen ‘die’ nominativ, feminin, ‘Alarmanlage’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Besitzer, den alle bisher für das Opfer gehalten hatten, wurde blass.",
        translation: "Herkesin şimdiye kadar kurban sandığı sahip, soldu.",
        explanation:
          "Relativpronomen ‘den’ akkusativ, maskulin, ‘Besitzer’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Finanzunterlagen, die wir überprüft haben, zeigen erhebliche Schulden.",
        translation: "İncelediğimiz mali kayıtlar, büyük borçları gösteriyor.",
        explanation:
          "Relativpronomen ‘die’ akkusativ, feminin, ‘Finanzunterlagen’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Nichte, deren Auto in der Nähe gesehen wurde, hat das Gemälde auf Anweisung ihres Onkels in Sicherheit gebracht.",
        translation:
          "Arabası yakınlarda görülen yeğen, amcasının talimatıyla tabloyu güvenli bir yere taşıdı.",
        explanation:
          "Relativpronomen ‘deren’ genitiv, feminin, ‘Nichte’ için, sahip olmayı belirtir.",
      },
      {
        text: "Der Keller des Nachbarhauses, worin wir heute Morgen gesucht haben, enthielt einen Geheimgang.",
        translation:
          "Bu sabah aradığımız komşu evin bodrumu, gizli bir geçit içeriyordu.",
        explanation:
          "Relativpronomen ‘worin’ prep. ‘in’ ile, maskulin ‘Keller’ için, yeri belirtir.",
      },
      {
        text: "Der Besitzer, dessen Nervosität nun offensichtlich war, brach zusammen.",
        translation: "Gerginliği artık açık olan sahip, çöktü.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Besitzer’ için, özelliğe işaret eder.",
      },
      {
        text: "Das Gemälde, das ich vor einem Jahr erworben habe, hat mich finanziell ruiniert.",
        translation:
          "Bir yıl önce satın aldığım tablo, beni mali olarak mahvetti.",
        explanation:
          "Relativpronomen ‘das’ akkusativ, nötr, ‘Gemälde’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Schulden, die ich angehäuft habe, konnte ich nicht mehr bedienen.",
        translation: "Biriktirdiğim borçları artık ödeyemedim.",
        explanation:
          "Relativpronomen ‘die’ akkusativ, feminin, ‘Schulden’ için. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Plan, auf den Sie so stolz waren, hatte einen entscheidenden Fehler.",
        translation:
          "Çok gurur duyduğunuz planın belirleyici bir hatası vardı.",
        explanation:
          "Relativpronomen ‘den’ akkusativ, maskulin, ‘Plan’ için, prep. ‘auf’. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Überwachungskamera des Nachbarhauses, an die Sie nicht gedacht hatten, hat alles aufgezeichnet.",
        translation:
          "Düşünmediğiniz komşu evin güvenlik kamerası her şeyi kaydetmiş.",
        explanation:
          "Relativpronomen ‘die’ akkusativ, feminin, ‘Überwachungskamera’ için, prep. ‘an’. Nebensatz tanımlayıcı.",
      },
      {
        text: "Die Assistentin, mit der Weber den Fall gelöst hatte, lächelte zufrieden.",
        translation: "Weber’in davayı çözdüğü asistan, memnuniyetle gülümsedi.",
        explanation:
          "Relativpronomen ‘der’ dativ, feminin, ‘Assistentin’ için, prep. ‘mit’. Nebensatz tanımlayıcı.",
      },
      {
        text: "Der Versicherungsbetrug, als der sich dieser Fall herausgestellt hat, wird nun juristisch verfolgt werden.",
        translation:
          "Bu davanın bir sigorta dolandırıcılığı olduğu ortaya çıktı ve şimdi hukuken takip edilecek.",
        explanation:
          "‘Als’ ile relativsatz, bir özelliği nitelendirir. Ana cümle Futur I ‘wird’.",
      },
      {
        text: "Der Fall in Bad Reichenhall, dessen Lösung einfacher erschien, als sie tatsächlich war, fand damit sein Ende.",
        translation:
          "Bad Reichenhall’daki dava, çözümü göründüğünden daha basit gibiydi, böylece sona erdi.",
        explanation:
          "Relativpronomen ‘dessen’ genitiv, maskulin, ‘Fall’ için, özelliğe işaret eder.",
      },
      {
        text: "Die Villa, in der sich das Drama abgespielt hatte, würde bald neue Besitzer finden.",
        translation: "Dramın yaşandığı villa, yakında yeni sahipler bulacaktı.",
        explanation:
          "Relativpronomen ‘der’ dativ, feminin, ‘Villa’ için, prep. ‘in’. Nebensatz tanımlayıcı.",
      },
    ],
  },
  {
    title: "1. Doppelkonnektoren",
    sentences: [
      {
        text: "Professor Weber saß an seinem Schreibtisch, während Lukas ungeduldig im Türrahmen wartete.",
        translation:
          "Profesör Weber masasında oturuyordu, bu sırada Lukas sabırsızca kapı eşiğinde bekliyordu.",
        explanation:
          "‘Während’ doppelkonnektor, eşzamanlı eylemi belirtir. Ana cümle Präteritum ‘saß’.",
      },
      {
        text: "Sowohl die Universität als auch das Museum sind an der Entdeckung interessiert.",
        translation: "Hem üniversite hem de müze keşifle ilgileniyor.",
        explanation:
          "‘Sowohl…als auch’ doppelkonnektor, iki unsuru bağlar. Ana cümle Präsens ‘sind’.",
      },
      {
        text: "Einerseits benötigen wir finanzielle Unterstützung, andererseits wollen wir die wissenschaftliche Unabhängigkeit bewahren.",
        translation:
          "Bir yandan mali destek gerekiyor, diğer yandan bilimsel bağımsızlığı korumak istiyoruz.",
        explanation:
          "‘Einerseits…andererseits’ doppelkonnektor, iki karşıt durumu ifade eder. Ana cümle Präsens ‘benötigen’, ‘wollen’.",
      },
      {
        text: "Je länger wir warten, desto schwieriger wird es, das Manuskript zu finden.",
        translation:
          "Ne kadar uzun beklersek, elyazmasını bulmak o kadar zorlaşır.",
        explanation:
          "‘Je…desto’ doppelkonnektor, orantılı ilişkiyi belirtir. Ana cümle Futur I ‘wird’.",
      },
      {
        text: "Zwar haben wir nur begrenzte Ressourcen, dennoch sollten wir bald aufbrechen.",
        translation:
          "Gerçi sadece sınırlı kaynaklarımız var, yine de yakında yola çıkmalıyız.",
        explanation:
          "‘Zwar…dennoch’ doppelkonnektor, bir zıtlığı ifade eder. Ana cümle Präsens ‘sollten’.",
      },
    ],
  },
  {
    title: "2. Negationswörter",
    sentences: [
      {
        text: "Niemand hat bisher das vollständige Manuskript gesehen.",
        translation: "Şimdiye kadar kimse tam elyazmasını görmedi.",
        explanation:
          "‘Niemand’ negationswort, özne olarak tüm kişileri reddeder. Ana cümle Perfekt ‘hat’.",
      },
      {
        text: "Nichts ist wichtiger als diese Entdeckung.",
        translation: "Bu keşiften daha önemli hiçbir şey yok.",
        explanation:
          "‘Nichts’ negationswort, nesne olarak tüm varlıkları reddeder. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Ich habe niemals an seiner Existenz gezweifelt.",
        translation: "Onun varlığından asla şüphe etmedim.",
        explanation:
          "‘Niemals’ negationswort, zaman açısından reddeder. Ana cümle Perfekt ‘habe’.",
      },
      {
        text: "Keiner der früheren Expeditionsleiter hat je die richtige Stelle gefunden.",
        translation: "Önceki sefer liderlerinden hiçbiri doğru yeri bulamadı.",
        explanation:
          "‘Keiner’ negationswort, belirli bir grubu reddeder. Ana cümle Perfekt ‘hat’.",
      },
      {
        text: "Wir haben keinerlei Garantie für Erfolg.",
        translation: "Başarı için hiçbir garantimiz yok.",
        explanation:
          "‘Keinerlei’ negationswort, herhangi bir türü reddeder. Ana cümle Präsens ‘haben’.",
      },
      {
        text: "Ich bin keineswegs entmutigt, aber wir sollten nicht übereilt handeln.",
        translation: "Kesinlikle cesaretim kırılmadı, ama acele etmemeliyiz.",
        explanation:
          "‘Keineswegs’ negationswort, bir durumu tamamen reddeder. Ana cümle Präsens ‘bin’.",
      },
    ],
  },
  {
    title: "3. Wörter mit irgend-",
    sentences: [
      {
        text: "Hat irgendjemand die Übersetzung überprüft?",
        translation: "Birisi çeviriyi kontrol etti mi?",
        explanation:
          "‘Irgendjemand’ belirsiz zamir, belirli olmayan bir kişiyi ifade eder. Ana cümle Perfekt ‘hat’.",
      },
      {
        text: "Nein, das hat noch niemand getan.",
        translation: "Hayır, bunu henüz kimse yapmadı.",
        explanation:
          "‘Niemand’ ile ‘irgendjemand’a yanıt, eylemi reddeder. Ana cümle Perfekt ‘hat’.",
      },
      {
        text: "Irgendwann müssen wir das nachholen.",
        translation: "Bir ara bunu telafi etmeliyiz.",
        explanation:
          "‘Irgendwann’ belirsiz zaman zarfı, belirli olmayan bir zamanı belirtir. Ana cümle Präsens ‘müssen’.",
      },
      {
        text: "Irgendwie habe ich das Gefühl, dass wir irgendwo einen Hinweis übersehen haben.",
        translation:
          "Nedense bir ipucunu gözden kaçırdığımız hissine kapılıyorum.",
        explanation:
          "‘Irgendwie’ belirsiz zarf, yöntemi; ‘irgendwo’ belirsiz yer zarfı, yeri belirtir. Ana cümle Präsens ‘habe’.",
      },
      {
        text: "Wir könnten irgendwelche wichtigen Details übersehen haben.",
        translation: "Bazı önemli detayları gözden kaçırmış olabiliriz.",
        explanation:
          "‘Irgendwelche’ belirsiz sıfat, belirli olmayan nesneleri niteler. Ana cümle Konjunktiv II ‘könnten’.",
      },
      {
        text: "Ich überprüfe es irgendwann heute Nachmittag.",
        translation: "Bunu bugün öğleden sonra bir ara kontrol ederim.",
        explanation:
          "‘Irgendwann’ belirsiz zaman zarfı, belirli olmayan zaman dilimini ifade eder. Ana cümle Präsens ‘überprüfe’.",
      },
    ],
  },
  {
    title: "4. Position und Direktion",
    sentences: [
      {
        text: "Die Karte liegt oben auf dem Schrank.",
        translation: "Harita dolabın üstünde duruyor.",
        explanation:
          "‘Oben’ pozisyon zarfı, yeri belirtir. Ana cümle Präsens ‘liegt’.",
      },
      {
        text: "Gehen Sie geradeaus durch den Korridor und dann links die Treppe hinauf.",
        translation:
          "Koridordan düz gidin ve sonra sola dönüp merdivenlerden yukarı çıkın.",
        explanation:
          "‘Geradeaus’, ‘links’, ‘hinauf’ direktion zarfları, yönü belirtir. Ana cümle Imperativ ‘gehen’.",
      },
      {
        text: "Das Archiv befindet sich unten im Keller.",
        translation: "Arşiv bodrum katında yer alıyor.",
        explanation:
          "‘Unten’ pozisyon zarfı, yeri belirtir. Ana cümle Präsens ‘befindet’.",
      },
      {
        text: "Die wertvollsten Dokumente sind drinnen im Safe.",
        translation: "En değerli belgeler kasanın içinde.",
        explanation:
          "‘Drinnen’ pozisyon zarfı, iç mekânı belirtir. Ana cümle Präsens ‘sind’.",
      },
      {
        text: "Ich stelle die Materialien hierhin.",
        translation: "Malzemeleri buraya koyuyorum.",
        explanation:
          "‘Hierhin’ direktion zarfı, hedef yeri belirtir. Ana cümle Präsens ‘stelle’.",
      },
      {
        text: "Dorthin kommen die Übersetzungen.",
        translation: "Çeviriler oraya konacak.",
        explanation:
          "‘Dorthin’ direktion zarfı, hedef yeri ifade eder. Ana cümle Präsens ‘kommen’.",
      },
      {
        text: "Der Professor will, dass alles aufwärts sortiert wird.",
        translation:
          "Profesör her şeyin eskiden yeniye doğru sıralanmasını istiyor.",
        explanation:
          "‘Aufwärts’ direktion zarfı, sıralama yönünü belirtir. Ana cümle Präsens ‘will’.",
      },
    ],
  },
  {
    title: "5. Es",
    sentences: [
      {
        text: "Es regnete, als Lukas am nächsten Morgen aufbrach.",
        translation: "Lukas ertesi sabah yola çıktığında yağmur yağıyordu.",
        explanation:
          "‘Es’ hava durumu için yalın özne. Ana cümle Präteritum ‘regnete’.",
      },
      {
        text: "Es handelte sich um eine komplizierte Forschungsreise.",
        translation: "Bu karmaşık bir araştırma yolculuğuydu.",
        explanation:
          "‘Es’ sabit ifadede (‘sich handeln um’), durumu tanımlar. Ana cümle Präteritum ‘handelte’.",
      },
      {
        text: "Es gab zahlreiche Hindernisse zu überwinden.",
        translation: "Aşılması gereken çok sayıda engel vardı.",
        explanation:
          "‘Es’ yalın özne, varlığı belirtir. Ana cümle Präteritum ‘gab’.",
      },
      {
        text: "Es ist wichtig, alle Dokumente zu sichern.",
        translation: "Tüm belgeleri güvence altına almak önemli.",
        explanation:
          "‘Es’ yalın özne, sıfat cümlesinde önem ifade eder. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Es fehlte an präzisen Übersetzungen.",
        translation: "Hassas çeviriler eksikti.",
        explanation:
          "‘Es’ yalın özne, eksikliği ifade eder. Ana cümle Präteritum ‘fehlte’.",
      },
      {
        text: "Es wurde Abend, bevor er alle Vorbereitungen abgeschlossen hatte.",
        translation: "Tüm hazırlıkları tamamlamadan akşam oldu.",
        explanation:
          "‘Es’ zamanı ifade eden yalın özne. Ana cümle Präteritum ‘wurde’.",
      },
      {
        text: "Es freut mich, dass Sie so engagiert sind.",
        translation: "Bu kadar hevesli olmanız beni sevindiriyor.",
        explanation:
          "‘Es’ yalın özne, duygu ifade eder. Ana cümle Präsens ‘freut’.",
      },
      {
        text: "Es klang, als sei er zufrieden.",
        translation: "Sanki memnunmuş gibi geliyordu.",
        explanation:
          "‘Es’ yalın özne, bir izlenimi ifade eder. Ana cümle Präteritum ‘klang’.",
      },
    ],
  },
  {
    title: "6. Funktionsverbgefüge 1",
    sentences: [
      {
        text: "Der Professor brachte seine Bedenken zum Ausdruck.",
        translation: "Profesör endişelerini dile getirdi.",
        explanation:
          "‘Zum Ausdruck bringen’ funktionsverbgefüge, görüş bildirmeyi ifade eder. Ana cümle Präteritum ‘brachte’.",
      },
      {
        text: "Wir müssen Rücksicht auf die lokalen Behörden nehmen.",
        translation: "Yerel makamlara saygı göstermeliyiz.",
        explanation:
          "‘Rücksicht nehmen’ funktionsverbgefüge, dikkat etmeyi ifade eder. Ana cümle Präsens ‘müssen’.",
      },
      {
        text: "Kontakt mit ihnen aufnehmen.",
        translation: "Onlarla iletişime geçmek.",
        explanation:
          "‘Kontakt aufnehmen’ funktionsverbgefüge, iletişim kurmayı ifade eder. Ana cümle Infinitiv.",
      },
      {
        text: "Ich werde die Verantwortung übernehmen.",
        translation: "Sorumluluğu üstleneceğim.",
        explanation:
          "‘Verantwortung übernehmen’ funktionsverbgefüge, yükümlülük almayı ifade eder. Ana cümle Futur I ‘werde’.",
      },
      {
        text: "Zur Verfügung stehen, falls Fragen auftauchen.",
        translation: "Sorular çıkarsa hazır bulunmak.",
        explanation:
          "‘Zur Verfügung stehen’ funktionsverbgefüge, erişilebilir olmayı ifade eder. Ana cümle Infinitiv.",
      },
      {
        text: "Die Universität stellte finanzielle Mittel zur Verfügung.",
        translation: "Üniversite mali kaynak sağladı.",
        explanation:
          "‘Zur Verfügung stellen’ funktionsverbgefüge, kaynak sağlamayı ifade eder. Ana cümle Präteritum ‘stellte’.",
      },
      {
        text: "In Betracht ziehen, dass die Expedition länger dauern könnte.",
        translation: "Seferin daha uzun sürebileceğini dikkate almak.",
        explanation:
          "‘In Betracht ziehen’ funktionsverbgefüge, olasılığı değerlendirmeyi ifade eder. Ana cümle Infinitiv.",
      },
      {
        text: "Wir sollten das Risiko in Kauf nehmen.",
        translation: "Riski göze almalıyız.",
        explanation:
          "‘In Kauf nehmen’ funktionsverbgefüge, risk kabul etmeyi ifade eder. Ana cümle Präsens ‘sollten’.",
      },
    ],
  },
  {
    title: "7. Funktionsverbgefüge 2",
    sentences: [
      {
        text: "Die Expedition geriet ins Stocken, als ein Unwetter Schaden anrichtete.",
        translation: "Bir fırtına zarar verdiğinde sefer aksadı.",
        explanation:
          "‘Ins Stocken geraten’ funktionsverbgefüge, ilerlemenin durmasını ifade eder. Ana cümle Präteritum ‘geriet’.",
      },
      {
        text: "Lukas musste seine Pläne in Einklang mit den neuen Umständen bringen.",
        translation:
          "Lukas planlarını yeni koşullarla uyumlu hale getirmek zorundaydı.",
        explanation:
          "‘In Einklang bringen’ funktionsverbgefüge, uyum sağlamayı ifade eder. Ana cümle Präteritum ‘musste’.",
      },
      {
        text: "Wir müssen die Situation unter Kontrolle bringen.",
        translation: "Durumu kontrol altına almalıyız.",
        explanation:
          "‘Unter Kontrolle bringen’ funktionsverbgefüge, hâkimiyet kurmayı ifade eder. Ana cümle Präsens ‘müssen’.",
      },
      {
        text: "Die Forscher zogen die Möglichkeit in Erwägung, die Route zu ändern.",
        translation:
          "Araştırmacılar rotayı değiştirme olasılığını değerlendirdi.",
        explanation:
          "‘In Erwägung ziehen’ funktionsverbgefüge, bir seçeneği düşünmeyi ifade eder. Ana cümle Präteritum ‘zogen’.",
      },
      {
        text: "Alles stand auf dem Spiel.",
        translation: "Her şey tehlikede idi.",
        explanation:
          "‘Auf dem Spiel stehen’ funktionsverbgefüge, risk altında olmayı ifade eder. Ana cümle Präteritum ‘stand’.",
      },
      {
        text: "Sie setzten ihre Hoffnung darauf, dass das Wetter sich bessern würde.",
        translation: "Havanın düzeleceğine dair umut beslediler.",
        explanation:
          "‘Hoffnung setzen’ funktionsverbgefüge, umut bağlamayı ifade eder. Ana cümle Präteritum ‘setzten’.",
      },
      {
        text: "Der Professor hielt mit seiner Meinung nicht zurück.",
        translation: "Profesör fikrini sakınmadı.",
        explanation:
          "‘Zurückhalten’ funktionsverbgefüge, gizlememeyi ifade eder. Ana cümle Präteritum ‘hielt’.",
      },
      {
        text: "Wir müssen die Entscheidung in Angriff nehmen.",
        translation: "Kararı hayata geçirmeliyiz.",
        explanation:
          "‘In Angriff nehmen’ funktionsverbgefüge, bir eylemi başlatmayı ifade eder. Ana cümle Präsens ‘müssen’.",
      },
    ],
  },
  {
    title: "8. Wörter mit da-",
    sentences: [
      {
        text: "Darüber habe ich schon nachgedacht.",
        translation: "Bunu zaten düşündüm.",
        explanation:
          "‘Darüber’ da-kelimesi, ‘über’ prep. ile düşünce konusunu belirtir. Ana cümle Perfekt ‘habe’.",
      },
      {
        text: "Damit kommen wir nicht weiter.",
        translation: "Bununla ilerleyemeyiz.",
        explanation:
          "‘Damit’ da-kelimesi, ‘mit’ prep. ile aracı reddeder. Ana cümle Präsens ‘kommen’.",
      },
      {
        text: "Darin liegt das Problem.",
        translation: "Sorun burada yatıyor.",
        explanation:
          "‘Darin’ da-kelimesi, ‘in’ prep. ile sorunu belirtir. Ana cümle Präsens ‘liegt’.",
      },
      {
        text: "Daran arbeite ich bereits.",
        translation: "Bunun üzerinde zaten çalışıyorum.",
        explanation:
          "‘Daran’ da-kelimesi, ‘an’ prep. ile çalışılan konuyu ifade eder. Ana cümle Präsens ‘arbeite’.",
      },
      {
        text: "Davon hängt unser Erfolg ab.",
        translation: "Başarımız buna bağlı.",
        explanation:
          "‘Davon’ da-kelimesi, ‘von’ prep. ile bağımlılığı belirtir. Ana cümle Präsens ‘hängt’.",
      },
      {
        text: "Daraus können wir lernen.",
        translation: "Bundan ders çıkarabiliriz.",
        explanation:
          "‘Daraus’ da-kelimesi, ‘aus’ prep. ile öğrenme kaynağını belirtir. Ana cümle Präsens ‘können’.",
      },
      {
        text: "Damit zukünftige Expeditionen erfolgreicher sind.",
        translation: "Böylece gelecekteki seferler daha başarılı olur.",
        explanation:
          "‘Damit’ da-kelimesi, amaç bağlacı, sonucu ifade eder. Ana cümle Präsens ‘sind’.",
      },
    ],
  },
  {
    title: "9. Modalpartikeln",
    sentences: [
      {
        text: "Das Manuskript ist ja angeblich in einer Höhle versteckt.",
        translation: "Elyazması güya bir mağarada gizliymiş.",
        explanation:
          "‘Ja’ modalpartikel, şüphe veya söylenti vurgular. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Wir haben doch alle Hinweise sorgfältig geprüft.",
        translation: "Tüm ipuçlarını dikkatle incelemedik mi zaten?",
        explanation:
          "‘Doch’ modalpartikel, doğruluğu hatırlatır. Ana cümle Perfekt ‘haben’.",
      },
      {
        text: "Es war halt nicht so einfach wie gedacht.",
        translation: "İşte düşündüğümüz kadar basit değildi.",
        explanation:
          "‘Halt’ modalpartikel, durumu kabullenmeyi vurgular. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Die Koordinaten waren eben falsch übersetzt.",
        translation: "Koordinatlar işte yanlış çevrilmiş.",
        explanation:
          "‘Eben’ modalpartikel, bir gerçeği vurgular. Ana cümle Präteritum ‘waren’.",
      },
      {
        text: "Wir sollten mal die alternative Route prüfen.",
        translation: "Bir alternatif rotayı kontrol etsek iyi olur.",
        explanation:
          "‘Mal’ modalpartikel, öneriyi hafifletir. Ana cümle Präsens ‘sollten’.",
      },
      {
        text: "Das ist eigentlich ganz logisch, wenn man die alten Karten betrachtet.",
        translation: "Eski haritalara bakarsan bu aslında tamamen mantıklı.",
        explanation:
          "‘Eigentlich’ modalpartikel, mantığı vurgular. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Die ursprüngliche Theorie war schon ziemlich gewagt.",
        translation: "Orijinal teori zaten epey cesurdu.",
        explanation:
          "‘Schon’ modalpartikel, değerlendirmeyi güçlendirir. Ana cümle Präteritum ‘war’.",
      },
    ],
  },
  {
    title: "10. Nominalisierung",
    sentences: [
      {
        text: "Die Entdeckung des Manuskripts erfolgte durch sie.",
        translation: "Elyazmasının keşfi onlar tarafından gerçekleşti.",
        explanation:
          "‘Entdeckung’ nominalisierung, fiil ‘entdecken’den. Ana cümle Präteritum ‘erfolgte’.",
      },
      {
        text: "Die Erforschung der alten Schriften war die Aufgabe des Professors.",
        translation: "Eski yazıların araştırılması profesörün göreviydi.",
        explanation:
          "‘Erforschung’ nominalisierung, fiil ‘erforschen’den. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Die präzise Übersetzung des Textes verdanken wir Lukas.",
        translation: "Metnin hassas çevirisini Lukas’a borçluyuz.",
        explanation:
          "‘Übersetzung’ nominalisierung, fiil ‘übersetzen’den. Ana cümle Präsens ‘verdanken’.",
      },
      {
        text: "Die Überwindung aller Hindernisse gelang dem Team.",
        translation: "Tüm engellerin aşılması ekibe nasip oldu.",
        explanation:
          "‘Überwindung’ nominalisierung, fiil ‘überwinden’den. Ana cümle Präteritum ‘gelang’.",
      },
    ],
  },
  {
    title: "11. Links- und Rechtsattribute",
    sentences: [
      {
        text: "Der Professor, der jahrelang geforscht hatte, fand endlich das gesuchte, jahrhundertealte Manuskript.",
        translation:
          "Yıllarca araştırma yapmış olan profesör, nihayet aranan, yüzyıllık elyazmasını buldu.",
        explanation:
          "‘Der jahrelang geforscht hatte’ linksattribut, relativsatz; ‘gesuchte, jahrhundertealte’ rechtsattribut, sıfat tamlaması.",
      },
      {
        text: "Die in der Höhle versteckte, mit seltsamen Symbolen verzierte Schriftrolle enthielt die vom Team lang ersehnten Informationen.",
        translation:
          "Mağarada gizlenmiş, tuhaf sembollerle süslenmiş yazıt rulosu, ekibin uzun süredir beklediği bilgileri içeriyordu.",
        explanation:
          "‘In der Höhle versteckte, mit seltsamen Symbolen verzierte’ linksattribut, Partizip I; ‘vom Team lang ersehnten’ rechtsattribut, sıfat tamlaması.",
      },
      {
        text: "Lukas, ein erfahrener Linguist mit ausgezeichneten Kenntnissen alter Sprachen, begann sofort mit der Übersetzung des in einer unbekannten Sprache verfassten Textes.",
        translation:
          "Eski dillerde mükemmel bilgiye sahip deneyimli bir dilbilimci olan Lukas, bilinmeyen bir dilde yazılmış metnin çevirisine hemen başladı.",
        explanation:
          "‘Ein erfahrener Linguist mit ausgezeichneten Kenntnissen alter Sprachen’ linksattribut, apozisyon; ‘in einer unbekannten Sprache verfassten’ rechtsattribut, Partizip II.",
      },
    ],
  },
  {
    title: "12. Präposition – Adverb – Konnektor 1",
    sentences: [
      {
        text: "Trotz der Schwierigkeiten kommen wir voran.",
        translation: "Zorluklara rağmen ilerliyoruz.",
        explanation:
          "‘Trotz’ präposition, engeli belirtir. Ana cümle Präsens ‘kommen’.",
      },
      {
        text: "Trotzdem müssen wir vorsichtig sein.",
        translation: "Yine de dikkatli olmalıyız.",
        explanation:
          "‘Trotzdem’ konnektor, zıtlığı ifade eder. Ana cümle Präsens ‘müssen’.",
      },
      {
        text: "Während der Expedition haben wir viel gelernt.",
        translation: "Sefer sırasında çok şey öğrendik.",
        explanation:
          "‘Während’ präposition, zamanı belirtir. Ana cümle Perfekt ‘haben’.",
      },
      {
        text: "Währenddessen haben wir wichtige Entdeckungen gemacht.",
        translation: "Bu arada önemli keşifler yaptık.",
        explanation:
          "‘Währenddessen’ adverb, eşzamanlılığı ifade eder. Ana cümle Perfekt ‘haben’.",
      },
      {
        text: "Wegen des schlechten Wetters mussten wir umkehren.",
        translation: "Kötü hava nedeniyle geri dönmek zorunda kaldık.",
        explanation:
          "‘Wegen’ präposition, nedeni belirtir. Ana cümle Präteritum ‘mussten’.",
      },
      {
        text: "Deswegen haben wir Zeit verloren.",
        translation: "Bu yüzden zaman kaybettik.",
        explanation:
          "‘Deswegen’ konnektor, sonucu ifade eder. Ana cümle Perfekt ‘haben’.",
      },
    ],
  },
  {
    title: "13. Präposition – Adverb – Konnektor 2",
    sentences: [
      {
        text: "Anstatt aufzugeben, finden wir einen neuen Weg.",
        translation: "Vazgeçmek yerine yeni bir yol buluyoruz.",
        explanation:
          "‘Anstatt’ präposition, alternatifi reddeder. Ana cümle Präsens ‘finden’.",
      },
      {
        text: "Stattdessen konzentrieren wir uns auf die zweite Höhle.",
        translation: "Onun yerine ikinci mağaraya odaklanıyoruz.",
        explanation:
          "‘Stattdessen’ adverb, alternatifi ifade eder. Ana cümle Präsens ‘konzentrieren’.",
      },
      {
        text: "Seit unserer Ankunft haben wir viel erreicht.",
        translation: "Varışımızdan beri çok şey başardık.",
        explanation:
          "‘Seit’ präposition, zaman dilimini belirtir. Ana cümle Perfekt ‘haben’.",
      },
      {
        text: "Seitdem ist eine Woche vergangen.",
        translation: "O zamandan beri bir hafta geçti.",
        explanation:
          "‘Seitdem’ konnektor, zaman geçişini ifade eder. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Nach dem Fund müssen wir alles dokumentieren.",
        translation: "Buluntudan sonra her şeyi belgele meliyiz.",
        explanation:
          "‘Nach’ präposition, sırayı belirtir. Ana cümle Präsens ‘müssen’.",
      },
      {
        text: "Nachdem wir das erledigt haben, kehren wir zurück.",
        translation: "Bunu hallettikten sonra geri döneriz.",
        explanation:
          "‘Nachdem’ konnektor, tamamlanan bir eylemi ifade eder. Ana cümle Futur I ‘kehren’.",
      },
    ],
  },
  {
    title: "14. Präposition – Adverb – Konnektor 3",
    sentences: [
      {
        text: "Ich arbeite mit Ihnen zusammen. Mithin teilen wir die Verantwortung.",
        translation:
          "Sizinle birlikte çalışıyorum. Dolayısıyla sorumluluğu paylaşıyoruz.",
        explanation:
          "‘Mithin’ konnektor, sonucu mantıksal olarak bağlar. Ana cümle Präsens ‘teilen’.",
      },
      {
        text: "Gegen alle Erwartungen haben wir es geschafft!",
        translation: "Tüm beklentilere karşı başardık!",
        explanation:
          "‘Gegen’ präposition, zıtlığı belirtir. Ana cümle Perfekt ‘haben’.",
      },
      {
        text: "Dagegen kann niemand etwas einwenden.",
        translation: "Buna kimse itiraz edemez.",
        explanation:
          "‘Dagegen’ adverb, karşı çıkmayı reddeder. Ana cümle Präsens ‘kann’.",
      },
      {
        text: "Innerhalb der Höhle ist es kühl.",
        translation: "Mağaranın içinde serin.",
        explanation:
          "‘Innerhalb’ präposition, mekân sınırını belirtir. Ana cümle Präsens ‘ist’.",
      },
      {
        text: "Innerhalb von Stunden werden wir die Übersetzung abschließen.",
        translation: "Saatler içinde çeviriyi tamamlayacağız.",
        explanation:
          "‘Innerhalb’ präposition, zaman sınırını belirtir. Ana cümle Futur I ‘werden’.",
      },
    ],
  },
  {
    title: "15. Kommaregeln",
    sentences: [
      {
        text: "Die Expedition, die monatelang vorbereitet wurde, begann endlich.",
        translation: "Aylar boyunca hazırlanan sefer nihayet başladı.",
        explanation:
          "Relativsatz ‘die monatelang vorbereitet wurde’ virgülle ayrılır, ek bilgi verir. Ana cümle Präteritum ‘begann’.",
      },
      {
        text: "Lukas, ein erfahrener Archäologe, führte das Team an.",
        translation: "Deneyimli bir arkeolog olan Lukas, ekibi yönetti.",
        explanation:
          "Apozisyon ‘ein erfahrener Archäologe’ virgülle ayrılır, tanımlayıcı bilgi. Ana cümle Präteritum ‘führte’.",
      },
      {
        text: "Als sie die Höhle erreichten, war es bereits dunkel.",
        translation: "Mağaraya ulaştıklarında, hava zaten kararmıştı.",
        explanation:
          "Temporale nebensatz ‘als sie die Höhle erreichten’ virgülle ayrılır. Ana cümle Präteritum ‘war’.",
      },
      {
        text: "Der Professor, erschöpft, aber glücklich, dokumentierte jeden Schritt.",
        translation: "Yorgun ama mutlu olan profesör, her adımı belgeledi.",
        explanation:
          "Ekleme ‘erschöpft, aber glücklich’ virgülle ayrılır, ek bilgi. Ana cümle Präteritum ‘dokumentierte’.",
      },
      {
        text: "Das Manuskript, falls sie es fänden, würde die Geschichte umschreiben.",
        translation: "Eğer bulurlarsa elyazması, tarihi yeniden yazacaktı.",
        explanation:
          "Konditionale nebensatz ‘falls sie es fänden’ virgülle ayrılır. Ana cümle Konjunktiv II ‘würde’.",
      },
    ],
  },
  {
    title: "16. Besondere Formen der mündlichen Sprache",
    sentences: [
      {
        text: "Haste die Kamera dabei?",
        translation: "Kamerayı yanına aldın mı?",
        explanation:
          "‘Haste’ = ‘hast du’, konuşma dilinde kısaltma. Ana cümle Präsens, soru.",
      },
      {
        text: "Klar, hab ich alles mit.",
        translation: "Tabii, her şeyi aldım.",
        explanation:
          "‘Hab ich’ = ‘habe ich’, konuşma dilinde. Ana cümle Präsens.",
      },
      {
        text: "Komm ma her und hilf mir!",
        translation: "Bi’ gel de yardım et!",
        explanation:
          "‘Ma’ = ‘mal’, konuşma dilinde hafifletici. Ana cümle Imperativ.",
      },
      {
        text: "Nu macht mal langsam, Leute.",
        translation: "Şimdi yavaş olun, millet.",
        explanation:
          "‘Nu’ = ‘nun’, ‘mal’ konuşma dilinde vurgu. Ana cümle Imperativ.",
      },
      {
        text: "Woll’n wir nich erstmal frühstücken?",
        translation: "Önce kahvaltı yapmayalım mı?",
        explanation:
          "‘Woll’n’ = ‘wollen’, ‘nich’ = ‘nicht’, konuşma dilinde. Ana cümle Präsens, soru.",
      },
      {
        text: "Ne, lieber gleich loslegen.",
        translation: "Yok, hemen başlayalım.",
        explanation: "‘Ne’ = ‘nein’, konuşma dilinde. Ana cümle Infinitiv.",
      },
      {
        text: "’türlich müssen wir noch warten, bis es hell wird.",
        translation: "Tabii ki hava aydınlanana kadar beklemeliyiz.",
        explanation:
          "‘’türlich’ = ‘natürlich’, konuşma dilinde. Ana cümle Präsens ‘müssen’.",
      },
    ],
  },
  {
    title: "17. Anhang",
    sentences: [
      {
        text: "Während sie die letzten Meter zur geheimnisvollen Kammer zurücklegten, ging Lukas die vielen grammatikalischen Strukturen durch.",
        translation:
          "Gizemli odaya son metreleri kat ederken, Lukas birçok dilbilgisi yapısını gözden geçirdi.",
        explanation:
          "‘Während’ temporale nebensatz, eşzamanlı eylemi belirtir. Ana cümle Präteritum ‘ging’.",
      },
      {
        text: "Die Präpositionen mit verschiedenen Fällen, die Verben mit Präpositionen, die unregelmäßigen Verbformen – all das half ihm.",
        translation:
          "Farklı durumlarla prepozisyonlar, prepozisyonlu fiiller, düzensiz fiil formları – tüm bunlar ona yardımcı oldu.",
        explanation:
          "Sıralama, tire ile ayrılır, ek bilgi verir. Ana cümle Präteritum ‘half’.",
      },
      {
        text: "Als sie schließlich vor dem verschollenen Manuskript standen, wusste er, dass sein Deutsch auf C1-Niveau ihm ermöglicht hatte, diesen Moment festzuhalten.",
        translation:
          "Nihayet kayıp elyazmasının önünde durduklarında, C1 seviyesindeki Almancasının bu anı kaydetmesini sağladığını biliyordu.",
        explanation:
          "‘Als’ temporale nebensatz, belirli bir zamanı belirtir. Ana cümle Präteritum ‘wusste’.",
      },
      {
        text: "Die Satzumformungen und besonderen Wortkombinationen würden ihm helfen, einen wissenschaftlichen Artikel zu verfassen.",
        translation:
          "Cümle dönüşümleri ve özel kelime kombinasyonları, bilimsel bir makale yazmasına yardımcı olacaktı.",
        explanation:
          "Nominal ifadeler, amacı belirtir. Ana cümle Konjunktiv II ‘würden’.",
      },
      {
        text: "Das Manuskript, nach dem sie so lange gesucht hatten, lag nun vor ihnen.",
        translation: "Uzun süredir aradıkları elyazması şimdi önlerindeydi.",
        explanation:
          "Relativpronomen ‘dem’ dativ, nötr, ‘Manuskript’ için, prep. ‘nach’. Ana cümle Präteritum ‘lag’.",
      },
      {
        text: "Bereit, seine Geheimnisse zu offenbaren.",
        translation: "Sırlarını açığa vurmaya hazır.",
        explanation:
          "Infinitiv ‘offenbaren’ mit ‘zu’, final, amacı ifade eder. Ana cümle eksik, bağlamsal.",
      },
    ],
  },
];

function Gramatik() {
  const [modalContent, setModalContent] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Save scroll position to localStorage on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll position when component mounts
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo({ top: parseInt(savedScrollPosition), behavior: "auto" });
    }
  }, []);

  const handleSentenceClick = (sentence, translation, explanation) => {
    setScrollPosition(window.scrollY);
    localStorage.setItem("scrollPosition", window.scrollY); // Save position before opening modal
    setModalContent({ sentence, translation, explanation });
  };

  const closeModal = () => {
    setModalContent(null);
    // Scroll to the saved position
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: "auto" });
    }, 0);
  };

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center p-4">
      <div className="bg-amber-50 shadow-2xl rounded-lg max-w-3xl w-full p-8 font-semibold">
        <h1 className="text-3xl font-serif text-center mb-6">
          Beklenmedik Bir Karşılaşma
        </h1>
        <div className="space-y-6">
          {textData?.map((section, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.sentences?.map((sentence, sIndex) => (
                  <span
                    key={sIndex}
                    className="cursor-pointer hover:bg-red-300  transition-colors duration-200"
                    onClick={() =>
                      handleSentenceClick(
                        sentence.text,
                        sentence.translation,
                        sentence.explanation
                      )
                    }
                  >
                    {sentence.text}{" "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-2">Cümle:</h3>
              <p className="text-gray-700 mb-4">{modalContent.sentence}</p>
              <h3 className="text-lg font-semibold mb-2">Türkçe Çeviri:</h3>
              <p className="text-gray-600 mb-4">{modalContent.translation}</p>
              <h3 className="text-lg font-semibold mb-2">
                Dilbilgisi Açıklaması:
              </h3>
              <p className="text-gray-600">{modalContent.explanation}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gramatik;
