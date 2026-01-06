import React, { useState, useEffect } from "react";
import {
  BookOpen,
  AlertCircle,
  CheckCircle,
  XCircle,
  Trash2,
  RefreshCcw,
} from "lucide-react";

// 1. VERİ SETİ
const vocabularyList = [
  {
    id: 1,
    german: "abstammen von + D",
    turkish: "-den gelmek, soyundan olmak",
  },
  {
    id: 2,
    german: "anwerben + A",
    turkish: "(iş için) birini getirtmek, işe almak",
  },
  { id: 3, german: "aufwachsen", turkish: "Büyümek, yetişmek" },
  { id: 4, german: "beeindrucken + A", turkish: "Birini etkilemek" },
  { id: 5, german: "erkunden + A", turkish: "Keşfetmek, tanımak" },
  { id: 6, german: "sich anpassen an + A", turkish: "Bir şeye uyum sağlamak" },
  { id: 7, german: "aufbrechen", turkish: "Yola çıkmak, ayrılmak" },
  {
    id: 8,
    german: "sich austauschen mit + D über + A",
    turkish: "Biriyle bir konuda fikir alışverişi yapmak",
  },
  { id: 9, german: "sich einleben", turkish: "Yeni bir yere alışmak" },
  { id: 10, german: "gehören zu + D", turkish: "Bir şeye/gruba dahil olmak" },
  { id: 11, german: "herausfinden + A", turkish: "Öğrenmek, keşfetmek" },
  {
    id: 12,
    german: "konfrontiert sein mit + D",
    turkish: "Bir şeyle yüzleşmek, karşı karşıya kalmak",
  },
  {
    id: 13,
    german: "überstehen + A",
    turkish: "Bir zorluğun üstesinden gelmek, atlatmak",
  },
  {
    id: 14,
    german: "gelten als + N",
    turkish: "Olarak kabul edilmek, sayılmak",
  },
  {
    id: 15,
    german: "sich verbeugen vor + D",
    turkish: "Birinin önünde eğilmek (saygı)",
  },
  {
    id: 16,
    german: "sich identifizieren mit + D",
    turkish: "Kendini bir şeyle özdeşleştirmek",
  },
  { id: 17, german: "sich niederlassen", turkish: "Yerleşmek" },
  {
    id: 18,
    german: "zurechtkommen mit + D",
    turkish: "Biriyle/bir şeyle başa çıkmak, geçinmek",
  },
  { id: 19, german: "sich lohnen", turkish: "Değmek, zahmete değer olmak" },
  { id: 20, german: "ansehen als + A", turkish: "Olarak görmek/kabul etmek" },
  {
    id: 21,
    german: "jemandem die Hand geben",
    turkish: "Birinin elini sıkmak",
  },
  {
    id: 22,
    german: "jemandem fällt die Decke auf den Kopf",
    turkish: "Duvarlar üstüne gelmek, çok sıkılmak",
  },
  { id: 23, german: "auf eigene Faust", turkish: "Kendi başına, tek başına" },
  { id: 24, german: "mit Sack und Pack", turkish: "Pılı pırtıyı toplayıp" },
  {
    id: 25,
    german: "von selbst verstehen",
    turkish: "Kolayca anlaşılmak, aşikar olmak",
  },
  {
    id: 26,
    german: "Hand in Hand arbeiten",
    turkish: "El ele çalışmak, iş birliği yapmak",
  },
  {
    id: 27,
    german: "das Eis brechen",
    turkish: "Buzları eritmek, havayı yumuşatmak",
  },
  {
    id: 28,
    german: "seinen Horizont erweitern",
    turkish: "Ufkunu genişletmek",
  },
  { id: 29, german: "sich auf den Weg machen", turkish: "Yola koyulmak" },
  { id: 30, german: "sich ergeben", turkish: "(Bir durum) ortaya çıkmak" },
  { id: 31, german: "sich abnutzen", turkish: "Aşınmak, yıpranmak" },
  { id: 32, german: "aufbrauchen + A", turkish: "Tüketip bitirmek" },
  { id: 33, german: "loswerden + A", turkish: "Bir şeyden kurtulmak" },
  {
    id: 34,
    german: "sich zulegen + A",
    turkish: "(Kendine) bir şey almak, edinmek",
  },
  { id: 35, german: "zu Bruch gehen", turkish: "Kırılmak, parçalanmak" },
  { id: 36, german: "aufbewahren + A", turkish: "Saklamak, muhafaza etmek" },
  { id: 37, german: "aussortieren + A", turkish: "Ayıklamak, tasnif etmek" },
  { id: 38, german: "wegschmeißen + A", turkish: "(Çöpe) atmak" },
  { id: 39, german: "sich Mühe geben", turkish: "Çabalamak, özen göstermek" },
  {
    id: 40,
    german: "Gebrauch machen von + D",
    turkish: "Bir şeyden faydalanmak, yararlanmak",
  },
  {
    id: 41,
    german: "in Kauf nehmen + A",
    turkish: "Bir şeyi (olumsuz) göze almak, kabullenmek",
  },
  { id: 42, german: "aufkommen für + A", turkish: "(Masrafı) karşılamak" },
  { id: 43, german: "begleichen + A", turkish: "Bir hesabı/borcu ödemek" },
  {
    id: 44,
    german: "entsprechen + D",
    turkish: "Bir şeye uymak, denk gelmek, karşılamak",
  },
  {
    id: 45,
    german: "leisten + A (einen Beitrag)",
    turkish: "Katkıda bulunmak, bir şey yapmak",
  },
  {
    id: 46,
    german: "zur Verfügung stellen + A",
    turkish: "Kullanıma sunmak, tahsis etmek",
  },
  {
    id: 47,
    german: "auskommen ohne + A",
    turkish: "Bir şey olmadan idare etmek",
  },
  {
    id: 48,
    german: "dahinterkommen",
    turkish: "Bir şeyin aslını anlamak, sırrını çözmek",
  },
  {
    id: 49,
    german: "erstatten + A",
    turkish: "(Masrafı) geri ödemek, iade etmek",
  },
  { id: 50, german: "spenden (+ A)", turkish: "Bağışlamak" },
  { id: 51, german: "sich anfühlen", turkish: "Hissi vermek, hissettirmek" },
  { id: 52, german: "verstecken + A", turkish: "Saklamak, gizlemek" },
  { id: 53, german: "zerfallen", turkish: "Çürüyüp dağılmak, yıkılmak" },
  {
    id: 54,
    german: "erwerben + A",
    turkish: "Edinmek, kazanmak (bilgi, mülk)",
  },
  { id: 55, german: "zugutekommen + D", turkish: "Yaramak, fayda sağlamak" },
  { id: 56, german: "unterbringen + A", turkish: "Yerleştirmek, sığdırmak" },
  { id: 57, german: "zerdrücken + A", turkish: "Ezmek, püre yapmak" },
  { id: 58, german: "zerschlagen + A", turkish: "Kırıp parçalamak" },
  {
    id: 59,
    german: "eine Rolle spielen",
    turkish: "Rol oynamak, önemli olmak",
  },
  { id: 60, german: "entgehen + D", turkish: "Gözünden kaçmak, kaçırmak" },
  {
    id: 61,
    german: "jmdm. (Dat) zur Verfügung stehen",
    turkish: "Birinin emrinde/hizmetinde olmak",
  },
  { id: 62, german: "sich Mühe geben", turkish: "Çaba göstermek, özenmek" },
  {
    id: 63,
    german: "Gebrauch machen von + Dat",
    turkish: "-den/-dan faydalanmak, bir hakkı kullanmak",
  },
  {
    id: 64,
    german: "jmdm. (Dat) etwas (Akk) zur Verfügung stellen",
    turkish: "Birine bir şey tahsis etmek, sağlamak",
  },
  {
    id: 65,
    german: "etwas in Kauf nehmen",
    turkish: "(Olumsuz bir şeyi) göze almak, kabullenmek",
  },
  {
    id: 66,
    german: "sich beteiligen an + Dat",
    turkish: "Bir şeye katılmak, iştirak etmek",
  },
  {
    id: 67,
    german: "handeln von + Dat",
    turkish: "... hakkında olmak, ...'yı konu almak",
  },
  {
    id: 68,
    german: "basieren auf + Dat",
    turkish: "Bir şeye dayanmak, esas almak",
  },
  {
    id: 69,
    german: "jmdn. zu etwas inspirieren",
    turkish: "Birine bir şey için ilham vermek",
  },
  { id: 70, german: "den Takt halten", turkish: "Ritim tutmak" },
  { id: 71, german: "es geht um + Akk", turkish: "Konu ... olmak" },
  {
    id: 72,
    german: "etwas in Worte fassen",
    turkish: "Bir şeyi kelimelere dökmek, ifade etmek",
  },
  {
    id: 73,
    german: "eine Rolle spielen",
    turkish: "Rol oynamak, önemli olmak",
  },
  { id: 74, german: "ein Verbrechen begehen", turkish: "Suç işlemek" },
  { id: 75, german: "Spuren hinterlassen", turkish: "İz bırakmak" },
  { id: 76, german: "ein Geständnis ablegen", turkish: "İtirafta bulunmak" },
  { id: 77, german: "Anzeige erstatten", turkish: "Suç duyurusunda bulunmak" },
  { id: 78, german: "Beweise vorlegen", turkish: "Delil sunmak" },
  {
    id: 79,
    german: "eine Aussage verweigern",
    turkish: "İfade vermeyi reddetmek",
  },
  {
    id: 80,
    german: "einen Vertrag abschließen",
    turkish: "Bir anlaşma yapmak/imzalamak",
  },
  { id: 81, german: "Frieden schließen", turkish: "Barış yapmak" },
  { id: 82, german: "einen Krieg führen", turkish: "Savaşmak, savaş yürütmek" },
  {
    id: 83,
    german: "Einfluss nehmen auf + Akk",
    turkish: "Bir şeye etki etmek",
  },
  {
    id: 84,
    german: "sich zusammensetzen aus + Dat",
    turkish: "-den/-dan oluşmak",
  },
  {
    id: 85,
    german: "zu Bruch gehen",
    turkish: "Kırılmak, sona ermek (ilişki, dostluk, anlaşma)",
  },
  {
    id: 86,
    german: "ein Studium / einen Kurs abbrechen",
    turkish: "Bir bölümü / bir kursu yarıda bırakmak",
  },
  {
    id: 87,
    german: "ein Seminar / einen Kurs belegen",
    turkish: "Bir seminere / bir kursa kaydolmak, almak",
  },
  {
    id: 88,
    german: "eine Frist einhalten",
    turkish: "Bir teslim tarihine uymak",
  },
  { id: 89, german: "Unterlagen einreichen", turkish: "Evrak teslim etmek" },
  {
    id: 90,
    german: "sich an der Universität einschreiben",
    turkish: "Üniversiteye kaydolmak",
  },
  {
    id: 91,
    german: "eine Leistung erbringen",
    turkish: "Bir başarı/performans göstermek",
  },
  {
    id: 92,
    german: "sich um einen Studienplatz bewerben",
    turkish: "Üniversitede bir yer için başvurmak",
  },
  {
    id: 93,
    german: "eine Ausbildung / ein Studium absolvieren",
    turkish: "Bir eğitimi / bir bölümü başarıyla bitirmek",
  },
  {
    id: 94,
    german: "Voraussetzungen erfüllen",
    turkish: "Şartları/gereklilikleri yerine getirmek",
  },
  {
    id: 95,
    german: "einen Vortrag / ein Referat halten",
    turkish: "Bir sunum yapmak",
  },
  {
    id: 96,
    german: "an etwas (Dat) scheitern",
    turkish: "Bir şey yüzünden başarısız olmak",
  },
  {
    id: 97,
    german: "Erfahrung in etwas (Dat) sammeln",
    turkish: "Bir konuda deneyim kazanmak",
  },
  {
    id: 98,
    german: "sich auf etwas (Akk) bereithalten",
    turkish: "Bir şeye hazır olmak, hazırda beklemek",
  },
  {
    id: 99,
    german: "ein Problem / eine Situation bewältigen",
    turkish: "Bir problemin / durumun üstesinden gelmek",
  },
  {
    id: 100,
    german: "Zeit / Mühe in etwas (Akk) investieren",
    turkish: "Bir şeye zaman / çaba harcamak (yatırım yapmak)",
  },
  {
    id: 101,
    german: "Verantwortung für etwas (Akk) übernehmen",
    turkish: "Bir şeyin sorumluluğunu üstlenmek",
  },
  {
    id: 102,
    german: "sich (Dat) etwas vorstellen können",
    turkish: "Bir şeyi hayal edebilmek, düşünebilmek",
  },
  {
    id: 103,
    german: "sich (Dat) etwas zutrauen",
    turkish: "Bir şeyi yapabileceğine inanmak, kendine güvenmek",
  },
  {
    id: 104,
    german: "etwas auf die Beine stellen",
    turkish: "Bir şeyi organize etmek, sıfırdan kurmak",
  },
  {
    id: 105,
    german: "auf die Nase fallen",
    turkish: "Fena halde başarısız olmak, çuvallamak",
  },
  {
    id: 106,
    german: "ein Arbeitsverhältnis kündigen",
    turkish: "Bir iş sözleşmesini feshetmek",
  },
  { id: 107, german: "Überstunden machen", turkish: "Fazla mesai yapmak" },
  {
    id: 108,
    german: "sich bei jdm. um eine Stelle bewerben",
    turkish: "Birine bir pozisyon için başvurmak",
  },
  {
    id: 109,
    german: "Gespräche führen",
    turkish: "Görüşmeler yapmak/yürütmek",
  },
  {
    id: 110,
    german: "sich an etwas (Dat) beteiligen",
    turkish: "Bir şeye katılmak, dahil olmak",
  },
  {
    id: 111,
    german: "zu etwas (Dat) führen",
    turkish: "Bir şeye yol açmak, neden olmak",
  },
  {
    id: 112,
    german: "sich auf etwas (Akk) beziehen",
    turkish: "Bir şeye atıfta bulunmak, referans vermek",
  },
  {
    id: 113,
    german: "etwas an jdn. weitergeben",
    turkish: "Bir şeyi birine iletmek, aktarmak",
  },
  {
    id: 114,
    german: "an der Spitze stehen",
    turkish: "En başta/lider konumda olmak",
  },
  { id: 115, german: "Frieden schließen", turkish: "Barış yapmak" },
  {
    id: 116,
    german: "einen Vertrag schließen",
    turkish: "Bir sözleşme imzalamak",
  },
  {
    id: 117,
    german: "sich (Dat) etwas zum Ziel setzen",
    turkish: "Kendine bir şeyi hedef olarak belirlemek",
  },
  {
    id: 118,
    german: "die Grundlage für etwas bilden",
    turkish: "Bir şeyin temelini oluşturmak",
  },
  {
    id: 119,
    german: "sich für etwas (Akk) interessieren",
    turkish: "Bir şeyle ilgilenmek",
  },
  {
    id: 120,
    german: "sich auf etwas (Akk) freuen",
    turkish: "Bir şeyi dört gözle beklemek (gelecek)",
  },
  {
    id: 121,
    german: "etwas auf die Beine stellen",
    turkish: "Bir şeyi kurmak, başlatmak, hayata geçirmek",
  },
  {
    id: 122,
    german: "Schiffbruch erleiden",
    turkish: "Başarısızlığa uğramak, iflas etmek",
  },
  {
    id: 123,
    german: "eine Schwierigkeit bewältigen",
    turkish: "Bir zorluğun üstesinden gelmek",
  },
  {
    id: 124,
    german: "etwas an die Wand fahren",
    turkish: "Bir şeyi mahvetmek, berbat etmek",
  },
  {
    id: 125,
    german: "für etwas verantwortlich sein",
    turkish: "Bir şeyden sorumlu olmak",
  },
  {
    id: 126,
    german: "etwas zustande bringen",
    turkish: "Bir şeyi başarmak, becermek",
  },
  {
    id: 127,
    german: "auf die Nase fallen",
    turkish: "Başarısız olmak, fiyasko yaşamak",
  },
  {
    id: 128,
    german: "die Ausbildung durchziehen",
    turkish: "Eğitimi sonuna kadar götürmek",
  },
  {
    id: 129,
    german: "energischer auftreten",
    turkish: "Daha enerjik/kararlı davranmak",
  },
  { id: 130, german: "Blut abnehmen", turkish: "Kan almak" },
  { id: 131, german: "einen Verband anlegen", turkish: "Pansuman yapmak" },
  {
    id: 132,
    german: "an einer Krankheit leiden",
    turkish: "Bir hastalıktan muzdarip olmak",
  },
  {
    id: 133,
    german: "ein Schmerzmittel verschreiben",
    turkish: "Bir ağrı kesici reçete etmek",
  },
  { id: 134, german: "den Blutdruck messen", turkish: "Tansiyonu ölçmek" },
  { id: 135, german: "sich (Dat) etwas brechen", turkish: "Bir yerini kırmak" },
  {
    id: 136,
    german: "zu einem Spezialisten gehen",
    turkish: "Bir uzmana gitmek",
  },
  {
    id: 137,
    german: "auf etwas verzichten",
    turkish: "Bir şeyden feragat etmek",
  },
  {
    id: 138,
    german: "eine Wunde versorgen",
    turkish: "Bir yarayı tedavi etmek",
  },
  { id: 139, german: "Tabletten einnehmen", turkish: "Tablet/hap yutmak" },
  { id: 140, german: "Fieber messen", turkish: "Ateşi ölçmek" },
  { id: 141, german: "eine Spritze bekommen", turkish: "İğne olmak" },
  { id: 142, german: "sich mit Viren infizieren", turkish: "Virüs kapmak" },
  { id: 143, german: "den Puls messen", turkish: "Nabzı ölçmek" },
  {
    id: 144,
    german: "auf einen Datenträger zugreifen",
    turkish: "Bir veri taşıyıcısına erişmek",
  },
  { id: 145, german: "das System herunterfahren", turkish: "Sistemi kapatmak" },
  {
    id: 146,
    german: "einen Akku wechseln",
    turkish: "Bir pili/aküyü değiştirmek",
  },
  { id: 147, german: "ein Gerät bedienen", turkish: "Bir cihazı kullanmak" },
  { id: 148, german: "den Strom abstellen", turkish: "Elektriği kesmek" },
  {
    id: 149,
    german: "einen Stromschlag bekommen",
    turkish: "Elektrik çarpmak",
  },
  {
    id: 150,
    german: "eine Maschine anschließen",
    turkish: "Bir makineyi bağlamak",
  },
  { id: 151, german: "Hardware entfernen", turkish: "Donanımı kaldırmak" },
  { id: 152, german: "auf etwas warten", turkish: "Birini/bir şeyi beklemek" },
  { id: 153, german: "ein Gerät montieren", turkish: "Bir cihazı monte etmek" },
  {
    id: 154,
    german: "etwas (Akk) verstellen / einbauen / zusammenbauen",
    turkish:
      "Bir şeyin yerini/ayarını değiştirmek / monte etmek / birleştirmek",
  },
  {
    id: 155,
    german: "Wert auf etwas (Akk) legen",
    turkish: "Bir şeye değer vermek, önemsemek",
  },
  {
    id: 156,
    german: "auf etwas (Akk) zugreifen",
    turkish: "Bir şeye (veriye) erişmek",
  },
  {
    id: 157,
    german: "eine Änderung speichern / bestätigen",
    turkish: "Bir değişikliği kaydetmek / onaylamak",
  },
  {
    id: 158,
    german: "Schadstoffe / CO2 ausstoßen",
    turkish: "Zararlı madde / karbondioksit salmak",
  },
  {
    id: 159,
    german: "gelangen in + Akk",
    turkish: "Bir yere (örn. yeraltı suyuna) ulaşmak, karışmak",
  },
  {
    id: 160,
    german: "etwas (Akk) wiederverwenden",
    turkish: "Bir şeyi yeniden kullanmak",
  },
  {
    id: 161,
    german: "auf etwas (Akk) umsteigen",
    turkish: "Bir şeye geçiş yapmak (farklı bir sisteme)",
  },
  {
    id: 162,
    german: "den Konsum einschränken",
    turkish: "Tüketimi kısıtlamak, azaltmak",
  },
  { id: 163, german: "eine Rolle spielen", turkish: "Rol oynamak" },
  {
    id: 164,
    german: "zur Verfügung stehen",
    turkish: "Mevcut olmak, kullanılabilir olmak",
  },
  {
    id: 165,
    german: "der Grund (dafür) liegt in + Dat",
    turkish: "(Bunun) nedeni ...-da yatıyor",
  },
  {
    id: 166,
    german: "sich befassen mit + Dat",
    turkish: "Bir konu ile meşgul olmak, bir konuyu ele almak",
  },
  {
    id: 167,
    german: "ausgehen von + Dat",
    turkish: "Bir şeyi varsaymak, bir şeyden yola çıkmak",
  },
  {
    id: 168,
    german: "eine Studie / ein Experiment durchführen",
    turkish: "Bir araştırma / bir deney yapmak",
  },
  {
    id: 169,
    german: "zu einem Ergebnis / Schluss kommen",
    turkish: "Bir sonuca varmak",
  },
  {
    id: 170,
    german: "Bezug nehmen auf + Akk",
    turkish: "Bir şeye atıfta bulunmak, değinmek",
  },
  {
    id: 171,
    german: "eine These / ein Argument widerlegen",
    turkish: "Bir tezi / bir argümanı çürütmek",
  },
  {
    id: 172,
    german: "im Widerspruch stehen zu + Dat",
    turkish: "Bir şeyle çelişmek",
  },
  {
    id: 173,
    german: "einen Sachverhalt nachweisen",
    turkish: "Bir durumu kanıtlamak, ispatlamak",
  },
  {
    id: 174,
    german: "sich handeln um + Akkusativ",
    turkish: "Söz konusu olmak, ... hakkında olmak",
  },
  {
    id: 175,
    german: "gehen um + Akkusativ",
    turkish: "Konu ... olmak, ... ile ilgili olmak",
  },
  {
    id: 176,
    german: "sich beziehen auf + Akkusativ",
    turkish: "-e atıfta bulunmak, -e referans vermek",
  },
  {
    id: 177,
    german: "bestehen aus + Dativ",
    turkish: "-den oluşmak, -den meydana gelmek",
  },
  {
    id: 178,
    german: "gehören zu + Dativ",
    turkish: "-e ait olmak, bir parçası olmak",
  },
  { id: 179, german: "abhängen von + Dativ", turkish: "-e bağlı olmak" },
  {
    id: 180,
    german: "ausgehen von + Dativ",
    turkish: "-den yola çıkmak, ...-i varsaymak",
  },
  {
    id: 181,
    german: "sich ergeben aus + Dativ",
    turkish: "-den kaynaklanmak, ... sonucunda ortaya çıkmak",
  },
  {
    id: 182,
    german: "zurückgehen auf + Akkusativ",
    turkish: "-e dayanmak, kökeni ... olmak",
  },
  {
    id: 183,
    german: "an etwas (Dativ) teilnehmen",
    turkish: "Bir şeye katılmak",
  },
  {
    id: 184,
    german: "jemandem (Dativ) zustimmen",
    turkish: "Birine katılmak, aynı fikirde olmak",
  },
  {
    id: 185,
    german: "jemandem (Dativ) widersprechen",
    turkish: "Birine karşı çıkmak, itiraz etmek",
  },
  {
    id: 186,
    german: "mit etwas (Dativ) übereinstimmen",
    turkish: "Bir şey ile aynı fikirde olmak, örtüşmek",
  },
  {
    id: 187,
    german: "Bezug nehmen auf + Akkusativ",
    turkish: "-e atıfta bulunmak, -e değinmek (resmî)",
  },
  {
    id: 188,
    german: "sich befassen mit + Dativ",
    turkish: "Bir konuyu ele almak, bir konuyla meşgul olmak",
  },
  {
    id: 189,
    german: "eintreten für + Akkusativ",
    turkish: "-i savunmak, ... için mücadele etmek",
  },
  {
    id: 190,
    german: "sich einsetzen für + Akkusativ",
    turkish: "-i desteklemek, ... için çaba göstermek",
  },
  {
    id: 191,
    german: "verstoßen gegen + Akkusativ",
    turkish: "Bir şeye aykırı davranmak, kuralı/yasayı ihlal etmek",
  },
  {
    id: 192,
    german: "eine Rolle spielen",
    turkish: "Rol oynamak, önemli olmak",
  },
  { id: 193, german: "zu einem Ergebnis kommen", turkish: "Bir sonuca varmak" },
  {
    id: 194,
    german: "einen Antrag stellen auf + Akkusativ",
    turkish: "-e başvuruda bulunmak, dilekçe vermek",
  },
  {
    id: 195,
    german: "eine Frist einhalten",
    turkish: "Bir süreye/mühlete uymak",
  },
  {
    id: 196,
    german: "stattgeben + Dativ",
    turkish: "(Bir başvuruyu/itirazı) kabul etmek, olumlu yanıt vermek",
  },
  {
    id: 197,
    german: "zuständig sein für + Akkusativ",
    turkish: "-den sorumlu olmak, -nin yetki alanında olmak",
  },
  {
    id: 198,
    german: "in Kenntnis setzen über + Akkusativ",
    turkish: "Birini bir konuda bilgilendirmek, haberdar etmek",
  },
  {
    id: 199,
    german: "Auskunft erteilen über + Akkusativ",
    turkish: "Bir konuda bilgi vermek",
  },
  {
    id: 200,
    german: "einer Pflicht nachkommen",
    turkish: "Bir görevi/yükümlülüğü yerine getirmek",
  },
  {
    id: 201,
    german: "Unterlagen einreichen",
    turkish: "Evrak/belge teslim etmek",
  },
  {
    id: 202,
    german: "sich ergeben aus + Dativ",
    turkish: "-den kaynaklanmak, -den ileri gelmek",
  },
  {
    id: 203,
    german: "zugrunde liegen + Dativ",
    turkish: "Temelini oluşturmak, -e dayanmak",
  },
  {
    id: 204,
    german: "gelten als + Nominativ",
    turkish: "...olarak kabul edilmek, ...sayılmak",
  },
  {
    id: 205,
    german: "abhängen von + Dativ",
    turkish: "-e bağlı olmak, -e göre değişmek",
  },
  {
    id: 206,
    german: "Widerspruch einlegen gegen + Akkusativ",
    turkish: "-e itiraz etmek",
  },
  { id: 207, german: "Klage einreichen", turkish: "Dava açmak" },
  {
    id: 208,
    german: "verstoßen gegen + Akkusativ",
    turkish: "-i ihlal etmek, -e karşı gelmek",
  },
  {
    id: 209,
    german: "Anspruch haben auf + Akkusativ",
    turkish: "-e hakkı olmak",
  },
  {
    id: 210,
    german: "ein Verfahren einleiten",
    turkish: "Bir (yasal) süreç/işlem başlatmak",
  },
  {
    id: 211,
    german: "Anklage erheben gegen + Akkusativ",
    turkish: "-e dava açmak, suçlamada bulunmak",
  },
  { id: 212, german: "ein Urteil fällen", turkish: "Bir hüküm/karar vermek" },
  {
    id: 213,
    german: "die Kosten tragen",
    turkish: "Masrafları karşılamak, üstlenmek",
  },
  {
    id: 214,
    german: "einen Beruf ausüben",
    turkish: "Bir mesleği icra etmek, yapmak",
  },
  { id: 215, german: "sich scheiden lassen", turkish: "Boşanmak" },
  {
    id: 216,
    german: "mitwirken an + Dativ",
    turkish: "-e katkıda bulunmak, bir süreçte yer almak",
  },
  {
    id: 217,
    german: "leiden unter + Dativ",
    turkish: "-den mustarip olmak, (bir durumdan) çekmek",
  },
];

// Dizi karıştırma fonksiyonu
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [activeTab, setActiveTab] = useState("quiz"); // 'quiz' | 'mistakes'
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState(null); // null | 'correct' | 'wrong'
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [score, setScore] = useState(0);

  // Uygulama başladığında LocalStorage'dan hataları çek
  useEffect(() => {
    const savedMistakes = localStorage.getItem("almancaMistakes");
    if (savedMistakes) {
      setWrongAnswers(JSON.parse(savedMistakes));
    }
    generateNewQuestion();
  }, []);

  // Yeni Soru Oluşturma (Türkçe Sor, Almanca Şıklar)
  const generateNewQuestion = () => {
    setFeedback(null);
    const randomWord =
      vocabularyList[Math.floor(Math.random() * vocabularyList.length)];

    // Yanlış şıklar (Doğru cevap dışındakiler)
    const otherWords = vocabularyList.filter((w) => w.id !== randomWord.id);
    const wrongOptions = shuffleArray(otherWords).slice(0, 3);

    // Şıkları birleştir ve karıştır
    const allOptions = shuffleArray([randomWord, ...wrongOptions]);

    setCurrentQuestion(randomWord);
    setOptions(allOptions);
  };

  // Cevap Kontrolü
  const handleAnswer = (selectedWord) => {
    if (feedback) return; // Zaten cevaplandıysa dur

    if (selectedWord.id === currentQuestion.id) {
      setFeedback("correct");
      setScore((s) => s + 1);
      setTimeout(generateNewQuestion, 1200); // 1.2 saniye sonra yeni soru
    } else {
      setFeedback("wrong");
      saveMistake(currentQuestion);
    }
  };

  // Hatayı Kaydet
  const saveMistake = (word) => {
    const exists = wrongAnswers.find((w) => w.id === word.id);
    if (!exists) {
      const updatedList = [word, ...wrongAnswers];
      setWrongAnswers(updatedList);
      localStorage.setItem("almancaMistakes", JSON.stringify(updatedList));
    }
  };

  // Hatayı Sil (Öğrendim butonu için)
  const removeMistake = (id) => {
    const updatedList = wrongAnswers.filter((w) => w.id !== id);
    setWrongAnswers(updatedList);
    localStorage.setItem("almancaMistakes", JSON.stringify(updatedList));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 flex flex-col items-center">
      {/* Üst Başlık */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
          <BookOpen className="text-blue-600" /> Almanca Kalıplar
        </h1>
        <div className="bg-white px-4 py-1 rounded-full shadow-sm text-sm font-semibold text-slate-500">
          Skor: <span className="text-blue-600">{score}</span>
        </div>
      </div>

      {/* Tab Menüsü */}
      <div className="flex bg-white p-1 rounded-xl shadow-sm mb-6 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("quiz")}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
            activeTab === "quiz"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          Test Modu
        </button>
        <button
          onClick={() => setActiveTab("mistakes")}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all relative ${
            activeTab === "mistakes"
              ? "bg-red-500 text-white shadow-md"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          Hatalarım
          {wrongAnswers.length > 0 && (
            <span className="absolute top-2 right-4 bg-white text-red-500 text-xs px-2 rounded-full font-bold">
              {wrongAnswers.length}
            </span>
          )}
        </button>
      </div>

      {/* --- TEST EKRANI --- */}
      {activeTab === "quiz" && currentQuestion && (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Soru Alanı (Türkçe) */}
          <div className="bg-slate-800 p-8 text-center text-white">
            <span className="text-xs uppercase tracking-widest text-slate-400">
              Türkçe Anlamı
            </span>
            <h2 className="text-3xl font-bold mt-2 leading-relaxed">
              "{currentQuestion.turkish}"
            </h2>
          </div>

          {/* Şıklar (Almanca) */}
          <div className="p-6 grid gap-3">
            {options.map((opt) => {
              // Buton Rengi Belirleme
              let btnStyle =
                "border-slate-200 hover:border-blue-400 hover:bg-blue-50";
              let icon = null;

              if (feedback) {
                if (opt.id === currentQuestion.id) {
                  // Doğru Cevap (Her zaman yeşil yanar)
                  btnStyle = "bg-green-100 border-green-500 text-green-800";
                  icon = <CheckCircle size={20} />;
                } else if (
                  feedback === "wrong" &&
                  opt.id !== currentQuestion.id
                ) {
                  // Yanlış cevap verildiğinde diğer yanlış şıklar soluklaşır
                  btnStyle = "opacity-40 border-slate-100";
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!feedback}
                  className={`border-2 p-4 rounded-xl text-lg font-medium text-left transition-all duration-200 flex justify-between items-center ${btnStyle}`}
                >
                  <span>{opt.german}</span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Yanlış Cevap Footer'ı */}
          {feedback === "wrong" && (
            <div className="bg-red-50 p-4 border-t border-red-100 flex justify-between items-center animate-pulse">
              <div className="text-red-700 flex items-center gap-2">
                <AlertCircle size={20} />
                <span className="font-semibold">
                  Yanlış! Hatalarıma eklendi.
                </span>
              </div>
              <button
                onClick={generateNewQuestion}
                className="bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition"
              >
                Sonraki Soru
              </button>
            </div>
          )}
        </div>
      )}

      {/* --- HATALARIM EKRANI --- */}
      {activeTab === "mistakes" && (
        <div className="w-full max-w-2xl space-y-4">
          {wrongAnswers.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm text-slate-400">
              <CheckCircle size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-xl font-medium">Harika! Hiç hatan yok.</p>
              <p className="text-sm">
                Test çözdükçe yanlışların buraya eklenecek.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-end mb-2 px-2">
                <h3 className="text-slate-600 font-semibold">
                  Çalışman Gerekenler ({wrongAnswers.length})
                </h3>
                <button
                  onClick={() => {
                    localStorage.removeItem("almancaMistakes");
                    setWrongAnswers([]);
                  }}
                  className="text-xs text-red-500 hover:underline"
                >
                  Tümünü Temizle
                </button>
              </div>

              <div className="grid gap-3">
                {wrongAnswers.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 flex justify-between items-center group"
                  >
                    <div>
                      <p className="text-lg font-bold text-slate-800">
                        {item.german}
                      </p>
                      <p className="text-slate-500">{item.turkish}</p>
                    </div>
                    <button
                      onClick={() => removeMistake(item.id)}
                      className="text-slate-300 hover:text-green-600 hover:bg-green-50 p-2 rounded-full transition-all"
                      title="Öğrendim, listeden çıkar"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
