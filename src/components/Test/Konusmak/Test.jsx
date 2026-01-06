import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/* const data = [
  {
    cumle: "Ich hätte gern einen Kaffee.",
    turkce: "Bir kahve almak isterdim.",
    level: "A1",
    notes: "Nezaket ifadesi olarak",
  },
  {
    cumle: "Könntest du mir bitte helfen?",
    turkce: "Bana yardım edebilir misin lütfen?",
    level: "A1",
    notes: "Kibar rica",
  },
  {
    cumle: "Ich würde gerne Deutsch lernen.",
    turkce: "Almanca öğrenmek isterdim.",
    level: "A1",
    notes: "İstek ifade etme",
  },
  {
    cumle: "Wärst du so nett?",
    turkce: "Nazik olur muydun?",
    level: "A1",
    notes: "Rica ifadesi",
  },
  {
    cumle: "Ich möchte ein Wasser, bitte.",
    turkce: "Bir su isterdim, lütfen.",
    level: "A1",
    notes: "Sipariş verme",
  },
  {
    cumle: "Das wäre schön!",
    turkce: "Bu güzel olurdu!",
    level: "A1",
    notes: "Beğeni ifadesi",
  },
  {
    cumle: "Hättest du Zeit morgen?",
    turkce: "Yarın vaktin olur muydu?",
    level: "A1",
    notes: "Zaman sorma",
  },
  {
    cumle: "Würdest du mir das Salz geben?",
    turkce: "Bana tuzu verir misin?",
    level: "A1",
    notes: "Masa başı rica",
  },
  {
    cumle: "Es wäre gut für dich.",
    turkce: "Senin için iyi olurdu.",
    level: "A1",
    notes: "Öneri/tavsiye",
  },
  {
    cumle: "Ich würde gerne bezahlen.",
    turkce: "Ödemek isterdim.",
    level: "A1",
    notes: "Restoranda ödeme isteği",
  },
  {
    cumle: "Könnten Sie langsamer sprechen?",
    turkce: "Daha yavaş konuşabilir misiniz?",
    level: "A1",
    notes: "Dil öğrenirken rica",
  },
  {
    cumle: "Das wäre alles, danke.",
    turkce: "Hepsi bu kadar olurdu, teşekkürler.",
    level: "A1",
    notes: "Alışveriş sonlandırma",
  },
  {
    cumle: "Ich hätte eine Frage.",
    turkce: "Bir sorum olurdu/var.",
    level: "A1",
    notes: "Soru sorma girişi",
  },
  {
    cumle: "Wäre das möglich?",
    turkce: "Bu mümkün olur muydu?",
    level: "A1",
    notes: "İmkan sorma",
  },
  {
    cumle: "Würdest du mir einen Gefallen tun?",
    turkce: "Bana bir iyilik yapar mısın?",
    level: "A1",
    notes: "Rica etme",
  },
  {
    cumle: "Ich hätte gern die Rechnung.",
    turkce: "Hesabı almak isterdim.",
    level: "A1",
    notes: "Restoranda hesap isteme",
  },
  {
    cumle: "Das würde ich nicht machen.",
    turkce: "Bunu yapmazdım.",
    level: "A1",
    notes: "Basit tavsiye",
  },
  {
    cumle: "Könnten Sie mir zeigen, wie das geht?",
    turkce: "Bana bunun nasıl yapıldığını gösterebilir misiniz?",
    level: "A1",
    notes: "Yardım isteme",
  },
  {
    cumle: "Ich wäre froh, wenn du kommst.",
    turkce: "Gelirsen sevinirim.",
    level: "A1",
    notes: "Davet ifadesi",
  },
  {
    cumle: "Würdest du mir einen Tee bringen?",
    turkce: "Bana bir çay getirir misin?",
    level: "A1",
    notes: "Rica",
  },

  // A2 Seviyesi (21-40)
  {
    cumle: "Wenn ich Zeit hätte, würde ich ins Kino gehen.",
    turkce: "Zamanım olsaydı, sinemaya giderdim.",
    level: "A2",
    notes: "Basit şartlı cümle",
  },
  {
    cumle: "An deiner Stelle würde ich früher aufstehen.",
    turkce: "Senin yerinde olsaydım daha erken kalkardım.",
    level: "A2",
    notes: "Tavsiye verme",
  },
  {
    cumle: "Ich wünschte, ich könnte schwimmen.",
    turkce: "Keşke yüzebilseydim.",
    level: "A2",
    notes: "Dilek ifadesi",
  },
  {
    cumle: "Was würdest du in meiner Situation tun?",
    turkce: "Benim durumumda ne yapardın?",
    level: "A2",
    notes: "Tavsiye isteme",
  },
  {
    cumle: "Wenn es nicht regnen würde, könnten wir spazieren gehen.",
    turkce: "Yağmur yağmasaydı, yürüyüşe çıkabilirdik.",
    level: "A2",
    notes: "Koşullu ifade",
  },
  {
    cumle: "Ich hätte gern eine größere Wohnung.",
    turkce: "Daha büyük bir eve sahip olmak isterdim.",
    level: "A2",
    notes: "İstek belirtme",
  },
  {
    cumle: "Es wäre besser, wenn du jetzt anrufen würdest.",
    turkce: "Şimdi arasan daha iyi olurdu.",
    level: "A2",
    notes: "Öneri",
  },
  {
    cumle: "Ohne deine Hilfe hätte ich es nicht geschafft.",
    turkce: "Senin yardımın olmadan başaramazdım.",
    level: "A2",
    notes: "Minnettarlık",
  },
  {
    cumle: "Würdest du mir deinen Stift leihen?",
    turkce: "Kalemini bana ödünç verir misin?",
    level: "A2",
    notes: "Rica",
  },
  {
    cumle: "Wenn ich mehr Geld hätte, würde ich reisen.",
    turkce: "Daha fazla param olsaydı, seyahat ederdim.",
    level: "A2",
    notes: "Hayali durum",
  },
  {
    cumle: "Es wäre schön, wenn du mitkommen könntest.",
    turkce: "Gelirsen güzel olurdu.",
    level: "A2",
    notes: "Davet",
  },
  {
    cumle: "Ich würde lieber zu Hause bleiben.",
    turkce: "Evde kalmayı tercih ederdim.",
    level: "A2",
    notes: "Tercih belirtme",
  },
  {
    cumle: "Könntest du mir bei den Hausaufgaben helfen?",
    turkce: "Ödevlerimde bana yardım edebilir misin?",
    level: "A2",
    notes: "Yardım isteme",
  },
  {
    cumle: "Wenn das Wetter schön wäre, würden wir grillen.",
    turkce: "Hava güzel olsaydı, mangal yapardık.",
    level: "A2",
    notes: "Koşullu etkinlik",
  },
  {
    cumle: "Ich würde dir gerne meine Stadt zeigen.",
    turkce: "Sana şehrimi göstermek isterdim.",
    level: "A2",
    notes: "İstek",
  },
  {
    cumle: "Hättest du Lust, ins Kino zu gehen?",
    turkce: "Sinemaya gitmeye hevesli olur muydun?",
    level: "A2",
    notes: "Davet",
  },
  {
    cumle: "Was würdest du mit einer Million Euro machen?",
    turkce: "Bir milyon Euro ile ne yapardın?",
    level: "A2",
    notes: "Hayali durum",
  },
  {
    cumle: "Ich hätte lieber einen Tee als Kaffee.",
    turkce: "Kahve yerine çay tercih ederdim.",
    level: "A2",
    notes: "Tercih",
  },
  {
    cumle: "Wenn ich du wäre, würde ich nicht so viel arbeiten.",
    turkce: "Ben sen olsaydım, bu kadar çok çalışmazdım.",
    level: "A2",
    notes: "Tavsiye",
  },
  {
    cumle: "Es wäre toll, wenn wir uns bald wiedersehen könnten.",
    turkce: "Yakında tekrar görüşebilsek harika olurdu.",
    level: "A2",
    notes: "Dilek",
  },

  // B1 Seviyesi (41-60)
  {
    cumle:
      "Wenn ich mehr Zeit gehabt hätte, hätte ich den Film fertig gesehen.",
    turkce: "Daha fazla zamanım olsaydı, filmi bitirmiş olurdum.",
    level: "B1",
    notes: "Geçmişteki hayali durum",
  },
  {
    cumle: "An deiner Stelle hätte ich anders gehandelt.",
    turkce: "Senin yerinde olsaydım, farklı davranırdım.",
    level: "B1",
    notes: "Geçmiş için tavsiye",
  },
  {
    cumle: "Ich würde gerne wissen, ob du Zeit hättest.",
    turkce: "Zamanın olup olmadığını bilmek isterdim.",
    level: "B1",
    notes: "Dolaylı soru",
  },
  {
    cumle: "Ohne den Stau wären wir pünktlich angekommen.",
    turkce: "Trafik sıkışıklığı olmasaydı, zamanında varmış olurduk.",
    level: "B1",
    notes: "Geçmişteki imkansız durum",
  },
  {
    cumle: "Es wäre besser gewesen, wenn du früher gekommen wärst.",
    turkce: "Daha erken gelseydin daha iyi olurdu.",
    level: "B1",
    notes: "Pişmanlık ifadesi",
  },
  {
    cumle: "Könntest du mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misin?",
    level: "B1",
    notes: "Açıklama isteme",
  },
  {
    cumle: "Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.",
    turkce: "Zengin olsaydım, deniz kenarında bir ev alırdım.",
    level: "B1",
    notes: "Hayali gelecek planı",
  },
  {
    cumle: "Ich hätte nicht gedacht, dass es so schwer sein würde.",
    turkce: "Bu kadar zor olacağını düşünmezdim.",
    level: "B1",
    notes: "Beklentinin tersine durum",
  },
  {
    cumle:
      "Wenn das Wetter besser gewesen wäre, hätten wir einen Ausflug gemacht.",
    turkce: "Hava daha iyi olsaydı, bir geziye çıkmış olurduk.",
    level: "B1",
    notes: "Geçmişteki imkansız etkinlik",
  },
  {
    cumle: "Was hättest du an meiner Stelle getan?",
    turkce: "Benim yerimde olsaydın ne yapardın?",
    level: "B1",
    notes: "Geçmiş hakkında fikir sorma",
  },
  {
    cumle: "Ich wünschte, ich könnte fliegen.",
    turkce: "Keşke uçabilseydim.",
    level: "B1",
    notes: "İmkansız dilek",
  },
  {
    cumle: "Es hätte dir gefallen, wenn du dabei gewesen wärst.",
    turkce: "Orada olsaydın, hoşuna giderdi.",
    level: "B1",
    notes: "Geçmiş hakkında varsayım",
  },
  {
    cumle:
      "Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst.",
    turkce: "Daha erken yola çıksaydım, treni kaçırmazdım.",
    level: "B1",
    notes: "Pişmanlık",
  },
  {
    cumle: "Hätte ich das gewusst, hätte ich anders entschieden.",
    turkce: "Bunu bilseydim, farklı karar verirdim.",
    level: "B1",
    notes: "Pişmanlık",
  },
  {
    cumle: "Ich würde dir gerne helfen, aber ich habe keine Zeit.",
    turkce: "Sana yardım etmek isterdim ama zamanım yok.",
    level: "B1",
    notes: "İmkansız istek",
  },
  {
    cumle: "Sie sieht aus, als ob sie müde wäre.",
    turkce: "Yorgunmuş gibi görünüyor.",
    level: "B1",
    notes: "Benzetme",
  },
  {
    cumle: "Wenn es nach mir ginge, würden wir sofort abreisen.",
    turkce: "Bana kalsaydı, hemen yola çıkardık.",
    level: "B1",
    notes: "Kişisel tercih",
  },
  {
    cumle: "Ich hätte nie gedacht, dass du das schaffen würdest.",
    turkce: "Bunu başaracağını hiç düşünmezdim.",
    level: "B1",
    notes: "Şaşkınlık ifadesi",
  },
  {
    cumle: "Es wäre schön, wenn wir mehr Zeit füreinander hätten.",
    turkce: "Birbirimiz için daha fazla zamanımız olsaydı güzel olurdu.",
    level: "B1",
    notes: "İstek",
  },
  {
    cumle:
      "Wenn du mich früher angerufen hättest, hätte ich dir helfen können.",
    turkce: "Beni daha erken arasaydın, sana yardım edebilirdim.",
    level: "B1",
    notes: "Geçmişteki imkansız yardım",
  },

  // B2 Seviyesi (61-100)
  {
    cumle: "Hätte ich doch bloß auf dich gehört!",
    turkce: "Keşke seni dinleseydim!",
    level: "B2",
    notes: "Pişmanlık ünlemi",
  },
  {
    cumle: "Selbst wenn ich es gewollt hätte, hätte ich nichts ändern können.",
    turkce: "İsteseydim bile, hiçbir şeyi değiştiremezdim.",
    level: "B2",
    notes: "İmkansızlık vurgusu",
  },
  {
    cumle: "Als hätten wir nicht genug Probleme!",
    turkce: "Sanki yeterince sorunumuz yokmuş gibi!",
    level: "B2",
    notes: "İroni",
  },
  {
    cumle:
      "Wenn du mir damals geholfen hättest, wäre ich jetzt nicht in dieser Situation.",
    turkce: "O zaman bana yardım etseydin, şimdi bu durumda olmazdım.",
    level: "B2",
    notes: "Nedensellik bağlantısı",
  },
  {
    cumle: "Es sei denn, du hättest eine bessere Idee.",
    turkce: "Daha iyi bir fikrin olmadığı sürece.",
    level: "B2",
    notes: "Koşullu istisna",
  },
  {
    cumle: "Das hätte ich dir gleich sagen können!",
    turkce: "Bunu sana hemen söyleyebilirdim!",
    level: "B2",
    notes: "Öngörü ifadesi",
  },
  {
    cumle: "Ich täte das nicht, wenn ich du wäre.",
    turkce: "Ben sen olsaydım bunu yapmazdım.",
    level: "B2",
    notes: "Alternatif konjunktiv II formu",
  },
  {
    cumle: "Wenn du nur ein bisschen vorsichtiger gewesen wärest!",
    turkce: "Keşke biraz daha dikkatli olsaydın!",
    level: "B2",
    notes: "Eleştirel pişmanlık",
  },
  {
    cumle: "Man könnte meinen, er hätte noch nie einen Computer benutzt.",
    turkce: "Sanki hiç bilgisayar kullanmamış gibi düşünülebilir.",
    level: "B2",
    notes: "Kınayıcı benzetme",
  },
  {
    cumle: "Es wäre schön gewesen, wenn du Bescheid gesagt hättest.",
    turkce: "Haber verseydin güzel olurdu.",
    level: "B2",
    notes: "Nezaket içeren sitem",
  },
  {
    cumle:
      "Ich hätte schwören können, dass ich den Schlüssel hier gelassen habe.",
    turkce: "Anahtarı buraya koyduğuma yemin edebilirdim.",
    level: "B2",
    notes: "Güçlü inanç",
  },
  {
    cumle: "Sie tat so, als ob sie mich nicht gesehen hätte.",
    turkce: "Beni görmemiş gibi davrandı.",
    level: "B2",
    notes: "Davranış betimleme",
  },
  {
    cumle:
      "Ohne deine Unterstützung wäre dieses Projekt nie zustande gekommen.",
    turkce: "Senin desteğin olmadan bu proje asla gerçekleşmezdi.",
    level: "B2",
    notes: "Minnettarlık",
  },
  {
    cumle: "Das hätte ins Auge gehen können!",
    turkce: "Bu kötü sonuçlanabilirdi!",
    level: "B2",
    notes: "Tehlikeli durum",
  },
  {
    cumle: "Man sollte meinen, er wäre klüger gewesen.",
    turkce: "Daha akıllı olduğunu düşünebilirdin.",
    level: "B2",
    notes: "Hayal kırıklığı",
  },
  {
    cumle: "An Ihrer Stelle würde ich die Finger davon lassen.",
    turkce: "Sizin yerinizde olsaydım, ona dokunmazdım.",
    level: "B2",
    notes: "Güçlü uyarı",
  },
  {
    cumle: "Ich hätte nie gedacht, dass es so weit kommen würde.",
    turkce: "İşin bu kadar ilerleyeceğini hiç düşünmezdim.",
    level: "B2",
    notes: "Şaşkınlık",
  },
  {
    cumle: "Es hätte schlimmer kommen können.",
    turkce: "Daha kötü olabilirdi.",
    level: "B2",
    notes: "Teselli",
  },
  {
    cumle: "Ich würde zu gerne wissen, was sie dazu gesagt hätte.",
    turkce: "Buna ne diyeceğini çok merak ederdim.",
    level: "B2",
    notes: "Merak/ilgi",
  },
  {
    cumle: "Hätte ich das Geld, würde ich sofort eine Weltreise machen.",
    turkce: "Param olsaydı, hemen dünya turuna çıkardım.",
    level: "B2",
    notes: "Hayali plan",
  },
  {
    cumle: "Das hätte ich mir denken können!",
    turkce: "Bunu düşünebilirdim!",
    level: "B2",
    notes: "Kendini eleştirme",
  },
  {
    cumle:
      "Wenn du ehrlich gewesen wärst, hätten wir das Problem längst gelöst.",
    turkce: "Dürüst olsaydın, sorunu çoktan çözmüş olurduk.",
    level: "B2",
    notes: "Eleştiri",
  },
  {
    cumle: "Da wäre ich mir nicht so sicher.",
    turkce: "Bu konuda bu kadar emin olmazdım.",
    level: "B2",
    notes: "Kuşku ifadesi",
  },
  {
    cumle: "Es wäre besser gewesen, wenn wir den anderen Weg genommen hätten.",
    turkce: "Diğer yolu seçseydik daha iyi olurdu.",
    level: "B2",
    notes: "Karar eleştirisi",
  },
  {
    cumle: "Als ob ich nichts Besseres zu tun hätte!",
    turkce: "Sanki yapacak daha iyi bir işim yokmuş gibi!",
    level: "B2",
    notes: "Sinirli tepki",
  },
  {
    cumle: "Solltest du Hilfe benötigen, wäre ich gerne für dich da.",
    turkce:
      "Yardıma ihtiyacın olursa, sana yardım etmekten memnuniyet duyarım.",
    level: "B2",
    notes: "Destek önerisi",
  },
  {
    cumle: "Hätte, hätte, Fahrradkette!",
    turkce: "Keşke keşke, bisiklet zinciri!",
    level: "B2",
    notes: "Alman atasözü: Sürekli 'keşke' demenin anlamsızlığı",
  },
  {
    cumle: "Es sähe besser aus, wenn du die Farben anders kombiniert hättest.",
    turkce: "Renkleri farklı kombine etseydin daha iyi görünürdü.",
    level: "B2",
    notes: "Estetik tavsiye",
  },
  {
    cumle: "Ich wäre fast gestorben vor Angst!",
    turkce: "Korkudan neredeyse ölecektim!",
    level: "B2",
    notes: "Abartı",
  },
  {
    cumle: "Diese Aufgabe hätte eigentlich nicht so schwierig sein sollen.",
    turkce: "Bu görev aslında bu kadar zor olmamalıydı.",
    level: "B2",
    notes: "Beklenti-gerçeklik tezatlığı",
  },
  {
    cumle: "Man könnte fast denken, du hättest das mit Absicht getan.",
    turkce: "Neredeyse bunu kasten yaptığını düşünebilirdim.",
    level: "B2",
    notes: "Hafif suçlama",
  },
  {
    cumle: "Wer hätte das gedacht?",
    turkce: "Kim düşünürdü?",
    level: "B2",
    notes: "Şaşkınlık ünlemi",
  },
  {
    cumle: "Wenn ich das früher gewusst hätte, hätte ich anders gehandelt.",
    turkce: "Bunu daha önce bilseydim, farklı davranırdım.",
    level: "B2",
    notes: "Pişmanlık",
  },
  {
    cumle: "Sie sprach, als wäre sie eine Expertin auf diesem Gebiet.",
    turkce: "Bu alanda uzmanmış gibi konuştu.",
    level: "B2",
    notes: "Davranış eleştirisi",
  },
  {
    cumle: "Das hätte dir eine Lehre sein sollen!",
    turkce: "Bu sana bir ders olmalıydı!",
    level: "B2",
    notes: "Ders çıkarma",
  },
  {
    cumle: "Es hätte mich gewundert, wenn er pünktlich gekommen wäre.",
    turkce: "Zamanında gelseydi şaşırırdım.",
    level: "B2",
    notes: "İroni",
  },
  {
    cumle:
      "Hätte er doch nur ein bisschen nachgedacht, bevor er das gesagt hat!",
    turkce: "Keşke bunu söylemeden önce biraz düşünseydi!",
    level: "B2",
    notes: "Eleştirel pişmanlık",
  },
  {
    cumle: "Ich würde es nicht so ausdrücken wollen, aber...",
    turkce: "Bu şekilde ifade etmek istemezdim, ama...",
    level: "B2",
    notes: "Nazikçe eleştiri girişi",
  },
  {
    cumle:
      "Es wäre vielleicht besser gewesen, wenn wir das unter vier Augen besprochen hätten.",
    turkce: "Belki bunu baş başa konuşsaydık daha iyi olurdu.",
    level: "B2",
    notes: "Durum değerlendirmesi",
  },
  {
    cumle: "Hätten Sie vielleicht einen Moment Zeit für mich?",
    turkce: "Acaba bana biraz zaman ayırabilir miydiniz?",
    level: "B2",
    notes: "Resmi rica",
  },
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
  {
    cumle: "Ich kann Deutsch sprechen.",
    turkce: "Almanca konuşabilirim.",
    level: "A1",
    notes: "Yetenek ifade eder",
  },
  {
    cumle: "Kannst du mir helfen?",
    turkce: "Bana yardım edebilir misin?",
    level: "A1",
    notes: "Kibar bir rica",
  },
  {
    cumle: "Wir können morgen ins Kino gehen.",
    turkce: "Yarın sinemaya gidebiliriz.",
    level: "A1",
    notes: "Olasılık veya plan belirtir",
  },
  {
    cumle: "Sie kann sehr gut kochen.",
    turkce: "O çok iyi yemek yapabilir.",
    level: "A1",
    notes: "Yetenek vurgusu",
  },
  {
    cumle: "Ich konnte gestern nicht schlafen.",
    turkce: "Dün uyuyamadım.",
    level: "A2",
    notes: "Geçmişte yeteneksizlik",
  },
  {
    cumle: "Man kann hier nicht parken.",
    turkce: "Burada park edilemez.",
    level: "A2",
    notes: "Genel bir kural",
  },
  {
    cumle: "Könntest du bitte das Fenster öffnen?",
    turkce: "Lütfen pencereyi açabilir misin?",
    level: "B1",
    notes: "Konditional ile kibar rica",
  },
  {
    cumle: "Ich könnte dir mein Auto leihen.",
    turkce: "Sana arabamı ödünç verebilirim.",
    level: "B1",
    notes: "Olasılık veya teklif",
  },
  {
    cumle: "Das kann nicht wahr sein!",
    turkce: "Bu doğru olamaz!",
    level: "B1",
    notes: "İnançsızlık ifadesi",
  },
  {
    cumle: "Sie können den Antrag online ausfüllen.",
    turkce: "Başvuruyu çevrimiçi doldurabilirsiniz.",
    level: "B2",
    notes: "Resmi bir izin veya seçenek",
  },

  // dürfen (izinli olmak)
  {
    cumle: "Darf ich fragen?",
    turkce: "Sorabilir miyim?",
    level: "A1",
    notes: "Kibar izin isteme",
  },
  {
    cumle: "Du darfst hier nicht rauchen.",
    turkce: "Burada sigara içemezsin.",
    level: "A1",
    notes: "Yasak ifade eder",
  },
  {
    cumle: "Wir dürfen heute länger bleiben.",
    turkce: "Bugün daha uzun kalabiliriz.",
    level: "A1",
    notes: "İzin verilen bir durum",
  },
  {
    cumle: "Darf ich Ihnen helfen?",
    turkce: "Size yardım edebilir miyim?",
    level: "A1",
    notes: "Resmi yardım teklifi",
  },
  {
    cumle: "Die Kinder dürfen nicht allein draußen spielen.",
    turkce: "Çocuklar dışarıda yalnız oynayamazlar.",
    level: "A2",
    notes: "Kısıtlama belirtir",
  },
  {
    cumle: "Hier darf man fotografieren.",
    turkce: "Burada fotoğraf çekilebilir.",
    level: "A2",
    notes: "Genel izin kuralı",
  },
  {
    cumle: "Dürfte ich kurz Ihr Handy benutzen?",
    turkce: "Kısa bir süre telefonunuzu kullanabilir miyim?",
    level: "B1",
    notes: "Konditional ile kibar rica",
  },
  {
    cumle: "Sie dürfen die Unterlagen mitnehmen.",
    turkce: "Belgeleri yanınıza alabilirsiniz.",
    level: "B1",
    notes: "Resmi izin",
  },
  {
    cumle: "Das dürfte kein Problem sein.",
    turkce: "Bu bir sorun olmamalı.",
    level: "B2",
    notes: "Olasılık tahmini",
  },
  {
    cumle: "Ab 18 Jahren darf man Auto fahren.",
    turkce: "18 yaşından itibaren araba kullanmak serbesttir.",
    level: "B2",
    notes: "Yasal izin kuralı",
  },

  // müssen (zorunda olmak)
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
    level: "A1",
    notes: "Zorunluluk ifade eder",
  },
  {
    cumle: "Musst du arbeiten?",
    turkce: "Çalışmak zorunda mısın?",
    level: "A1",
    notes: "Zorunluluk sorgulama",
  },
  {
    cumle: "Wir müssen um 8 Uhr aufstehen.",
    turkce: "Saat 8'de kalkmak zorundayız.",
    level: "A1",
    notes: "Grup zorunluluğu",
  },
  {
    cumle: "Sie muss heute zum Arzt.",
    turkce: "Bugün doktora gitmek zorunda.",
    level: "A1",
    notes: "Kişisel zorunluluk",
  },
  {
    cumle: "Ich musste lange warten.",
    turkce: "Uzun süre beklemek zorunda kaldım.",
    level: "A2",
    notes: "Geçmişte zorunluluk",
  },
  {
    cumle: "Man muss hier ein Ticket kaufen.",
    turkce: "Burada bilet satın almak gerekiyor.",
    level: "A2",
    notes: "Genel bir zorunluluk",
  },
  {
    cumle: "Du musst nicht alles essen.",
    turkce: "Her şeyi yemek zorunda değilsin.",
    level: "A2",
    notes: "Zorunluluk olmaması",
  },
  {
    cumle: "Wir müssen unbedingt darüber sprechen.",
    turkce: "Bu konuda kesinlikle konuşmalıyız.",
    level: "B1",
    notes: "Güçlü bir zorunluluk",
  },
  {
    cumle: "Das muss ein Irrtum sein.",
    turkce: "Bu bir hata olmalı.",
    level: "B1",
    notes: "Mantıksal çıkarım",
  },
  {
    cumle: "Sie müssen den Antrag bis Freitag einreichen.",
    turkce: "Başvuruyu Cuma gününe kadar sunmanız gerekiyor.",
    level: "B2",
    notes: "Resmi bir zorunluluk",
  },

  // sollen (gerekli olmak)
  {
    cumle: "Soll ich dir helfen?",
    turkce: "Sana yardım edeyim mi?",
    level: "A1",
    notes: "Yardım önerisi",
  },
  {
    cumle: "Du sollst pünktlich sein.",
    turkce: "Dakik olmalısın.",
    level: "A1",
    notes: "Tavsiye veya beklenti",
  },
  {
    cumle: "Wir sollen heute früh schlafen.",
    turkce: "Bugün erken uyumalıyız.",
    level: "A1",
    notes: "Grup tavsiyesi",
  },
  {
    cumle: "Was soll ich kochen?",
    turkce: "Ne pişirmeliyim?",
    level: "A1",
    notes: "Karar sorma", // Düzeltme: "What" yerine "Was"
  },
  {
    cumle: "Sollte ich einen Regenschirm mitnehmen?",
    turkce: "Şemsiye almalı mıyım?",
    level: "A2",
    notes: "Konditional ile tavsiye sorma",
  },
  {
    cumle: "Man soll jeden Tag Obst essen.",
    turkce: "Her gün meyve yemelidir.",
    level: "A2",
    notes: "Genel bir tavsiye",
  },
  {
    cumle: "Er soll sehr nett sein.",
    turkce: "O çok nazik olmalı/öyle söyleniyor.",
    level: "B1",
    notes: "Söylenti veya beklenti",
  },
  {
    cumle: "Du solltest mehr Sport treiben.",
    turkce: "Daha fazla spor yapmalısın.",
    level: "B1",
    notes: "Kişisel tavsiye",
  },
  {
    cumle: "Das sollte eigentlich funktionieren.",
    turkce: "Bu aslında çalışması gerekiyor.",
    level: "B2",
    notes: "Olasılık veya beklenti",
  },
  {
    cumle: "Sie sollen den Arzt sofort anrufen.",
    turkce: "Doktoru hemen aramalısınız.",
    level: "B2",
    notes: "Acil bir tavsiye",
  },

  // wollen (istemek)
  {
    cumle: "Ich will nach Hause gehen.",
    turkce: "Eve gitmek istiyorum.",
    level: "A1",
    notes: "Kişisel istek",
  },
  {
    cumle: "Willst du einen Kaffee?",
    turkce: "Kahve ister misin?",
    level: "A1",
    notes: "Kibar bir teklif",
  },
  {
    cumle: "Wir wollen am Wochenende wandern.",
    turkce: "Hafta sonu yürüyüşe çıkmak istiyoruz.",
    level: "A1",
    notes: "Grup planı",
  },
  {
    cumle: "Sie will Ärztin werden.",
    turkce: "Doktor olmak istiyor.",
    level: "A1",
    notes: "Uzun vadeli hedef",
  },
  {
    cumle: "Ich wollte dich anrufen.",
    turkce: "Seni aramak istedim.",
    level: "A2",
    notes: "Geçmişte istek",
  },
  {
    cumle: "Was willst du damit sagen?",
    turkce: "Bununla ne demek istiyorsun?",
    level: "A2",
    notes: "Anlam sorma",
  },
  {
    cumle: "Er will uns nicht helfen.",
    turkce: "Bize yardım etmek istemiyor.",
    level: "A2",
    notes: "Reddetme ifadesi",
  },
  {
    cumle: "Wir wollten eigentlich schon früher kommen.",
    turkce: "Aslında daha erken gelmek istedik.",
    level: "B1",
    notes: "Geçmişte planlanmış istek",
  },
  {
    cumle: "Sie will unbedingt diese Stelle bekommen.",
    turkce: "Bu pozisyonu kesinlikle almak istiyor.",
    level: "B1",
    notes: "Güçlü bir istek",
  },
  {
    cumle: "Ich will, dass du ehrlich bist.",
    turkce: "Dürüst olmanı istiyorum.",
    level: "B2",
    notes: "Yan cümle ile istek",
  },

  // mögen/möchten (hoşlanmak/istemek)
  {
    cumle: "Ich mag Schokolade.",
    turkce: "Çikolatayı severim.",
    level: "A1",
    notes: "Genel bir beğeni",
  },
  {
    cumle: "Magst du Tiere?",
    turkce: "Hayvanları sever misin?",
    level: "A1",
    notes: "Beğeni sorma",
  },
  {
    cumle: "Möchtest du etwas trinken?",
    turkce: "Bir şeyler içmek ister misin?",
    level: "A1",
    notes: "Kibar bir teklif",
  },
  {
    cumle: "Wir möchten bestellen.",
    turkce: "Sipariş vermek istiyoruz.",
    level: "A1",
    notes: "Restoran ortamında rica",
  },
  {
    cumle: "Er mag keine Äpfel.",
    turkce: "Elmaları sevmez.",
    level: "A1",
    notes: "Olumsuz beğeni",
  },
  {
    cumle: "Ich möchte gern nach Berlin fahren.",
    turkce: "Berlin'e gitmek isterim.",
    level: "A2",
    notes: "Kibar bir istek",
  },
  {
    cumle: "Sie mögen klassische Musik.",
    turkce: "Klasik müziği severler.",
    level: "A2",
    notes: "Grup beğenisi",
  },
  {
    cumle: "Möchten Sie einen Termin vereinbaren?",
    turkce: "Bir randevu ayarlamak ister misiniz?",
    level: "B1",
    notes: "Resmi bir teklif",
  },
  {
    cumle: "Ich mochte diesen Film nicht.",
    turkce: "Bu filmi sevmedim.",
    level: "B1",
    notes: "Geçmişte beğenmeme",
  },
  {
    cumle: "Er möchte sich bei Ihnen für die Hilfe bedanken.",
    turkce: "Yardımınız için size teşekkür etmek istiyor.",
    level: "B2",
    notes: "Kibar bir niyet",
  },
]; */
const data = [
  {
    cumle: "Guten Morgen!",
    turkce: "Günaydın!",
  },
  {
    cumle: "Guten Tag!",
    turkce: "İyi günler!",
  },
  {
    cumle: "Guten Abend!",
    turkce: "İyi akşamlar!",
  },
  {
    cumle: "Gute Nacht!",
    turkce: "İyi geceler!",
  },
  {
    cumle: "Auf Wiedersehen!",
    turkce: "Hoşça kal!",
  },
  {
    cumle: "Tschüss!",
    turkce: "Hoşça kal! (Informal)",
  },
  {
    cumle: "Bis bald!",
    turkce: "Yakında görüşürüz!",
  },
  {
    cumle: "Bis morgen!",
    turkce: "Yarın görüşürüz!",
  },
  {
    cumle: "Bis später!",
    turkce: "Sonra görüşürüz!",
  },
  {
    cumle: "Wie heißt du?",
    turkce: "Adın ne?",
  },
  {
    cumle: "Ich heiße...",
    turkce: "Benim adım...",
  },
  {
    cumle: "Wie ist dein Name?",
    turkce: "İsmin nedir?",
  },
  {
    cumle: "Mein Name ist...",
    turkce: "Benim adım...",
  },
  {
    cumle: "Wie geht es dir?",
    turkce: "Nasılsın?",
  },
  {
    cumle: "Mir geht es gut.",
    turkce: "İyiyim.",
  },
  {
    cumle: "Es geht mir nicht so gut.",
    turkce: "Pek iyi değilim.",
  },
  {
    cumle: "Wie geht es Ihnen?",
    turkce: "Nasılsınız? (Resmi)",
  },
  {
    cumle: "Mir geht es sehr gut, danke.",
    turkce: "Çok iyiyim, teşekkürler.",
  },
  {
    cumle: "Woher kommst du?",
    turkce: "Nerelisin?",
  },
  {
    cumle: "Ich komme aus der Türkei.",
    turkce: "Türkiye'den geliyorum.",
  },
  {
    cumle: "Wo wohnst du?",
    turkce: "Nerede yaşıyorsun?",
  },
  {
    cumle: "Ich wohne in Istanbul.",
    turkce: "İstanbul'da yaşıyorum.",
  },
  {
    cumle: "Wie alt bist du?",
    turkce: "Kaç yaşındasın?",
  },
  {
    cumle: "Ich bin 25 Jahre alt.",
    turkce: "25 yaşındayım.",
  },
  {
    cumle: "Was machst du beruflich?",
    turkce: "Mesleğin ne?",
  },
  {
    cumle: "Ich bin Student/Studentin.",
    turkce: "Ben öğrenciyim.",
  },
  {
    cumle: "Ich bin Lehrer/Lehrerin.",
    turkce: "Ben öğretmenim.",
  },
  {
    cumle: "Ich arbeite als Ingenieur.",
    turkce: "Mühendis olarak çalışıyorum.",
  },
  {
    cumle: "Ich bin Arzt/Ärztin.",
    turkce: "Ben doktorum.",
  },
  {
    cumle: "Ich bin arbeitslos.",
    turkce: "İşsizim.",
  },

  // A1 SEVİYESİ - GÜNLÜK İFADELER
  {
    cumle: "Entschuldigung!",
    turkce: "Özür dilerim!",
  },
  {
    cumle: "Entschuldigen Sie bitte!",
    turkce: "Lütfen affedin! (Resmi)",
  },
  {
    cumle: "Danke schön!",
    turkce: "Çok teşekkür ederim!",
  },
  {
    cumle: "Vielen Dank!",
    turkce: "Çok teşekkürler!",
  },
  {
    cumle: "Danke sehr!",
    turkce: "Çok teşekkürler!",
  },
  {
    cumle: "Bitte schön!",
    turkce: "Rica ederim!",
  },
  {
    cumle: "Gern geschehen!",
    turkce: "Bir şey değil!",
  },
  {
    cumle: "Ja.",
    turkce: "Evet.",
  },
  {
    cumle: "Nein.",
    turkce: "Hayır.",
  },
  {
    cumle: "Vielleicht.",
    turkce: "Belki.",
  },
  {
    cumle: "Natürlich.",
    turkce: "Elbette.",
  },
  {
    cumle: "Ich verstehe nicht.",
    turkce: "Anlamıyorum.",
  },
  {
    cumle: "Können Sie bitte langsamer sprechen?",
    turkce: "Lütfen daha yavaş konuşabilir misiniz?",
  },
  {
    cumle: "Können Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
  },
  {
    cumle: "Wie bitte?",
    turkce: "Efendim? / Ne dediniz?",
  },
  {
    cumle: "Ich verstehe das nicht.",
    turkce: "Bunu anlamıyorum.",
  },
  {
    cumle: "Sprechen Sie Englisch?",
    turkce: "İngilizce biliyor musunuz?",
  },
  {
    cumle: "Sprechen Sie Türkisch?",
    turkce: "Türkçe biliyor musunuz?",
  },
  {
    cumle: "Ich spreche ein bisschen Deutsch.",
    turkce: "Biraz Almanca konuşuyorum.",
  },
  {
    cumle: "Ich lerne Deutsch.",
    turkce: "Almanca öğreniyorum.",
  },

  // A1 SEVİYESİ - GÜNLÜK HAYAT
  {
    cumle: "Wie viel kostet das?",
    turkce: "Bu ne kadar?",
  },
  {
    cumle: "Das ist zu teuer.",
    turkce: "Bu çok pahalı.",
  },
  {
    cumle: "Haben Sie es billiger?",
    turkce: "Daha ucuzu var mı?",
  },
  {
    cumle: "Ich nehme das.",
    turkce: "Bunu alıyorum.",
  },
  {
    cumle: "Ich möchte einen Kaffee, bitte.",
    turkce: "Bir kahve istiyorum, lütfen.",
  },
  {
    cumle: "Ich hätte gerne ein Glas Wasser.",
    turkce: "Bir bardak su istiyorum.",
  },
  {
    cumle: "Die Rechnung, bitte.",
    turkce: "Hesap, lütfen.",
  },
  {
    cumle: "Haben Sie ein Zimmer frei?",
    turkce: "Boş odanız var mı?",
  },
  {
    cumle: "Wo ist die Toilette?",
    turkce: "Tuvalet nerede?",
  },
  {
    cumle: "Wo ist der Ausgang?",
    turkce: "Çıkış nerede?",
  },
  {
    cumle: "Wie spät ist es?",
    turkce: "Saat kaç?",
  },
  {
    cumle: "Es ist 10 Uhr.",
    turkce: "Saat 10.",
  },
  {
    cumle: "Es ist halb acht.",
    turkce: "Saat yedi buçuk.",
  },
  {
    cumle: "Ich habe Hunger.",
    turkce: "Açım.",
  },
  {
    cumle: "Ich habe Durst.",
    turkce: "Susadım.",
  },
  {
    cumle: "Ich bin müde.",
    turkce: "Yorgunum.",
  },
  {
    cumle: "Ich bin krank.",
    turkce: "Hastayım.",
  },
  {
    cumle: "Wo ist der Bahnhof?",
    turkce: "Tren istasyonu nerede?",
  },
  {
    cumle: "Wo ist die nächste Bushaltestelle?",
    turkce: "En yakın otobüs durağı nerede?",
  },
  {
    cumle: "Wie komme ich zum Hotel?",
    turkce: "Otele nasıl giderim?",
  },

  // A2 SEVİYESİ - GÜNLÜK İLETİŞİM
  {
    cumle: "Ich hätte gerne eine Tasse Tee.",
    turkce: "Bir fincan çay istiyorum.",
  },
  {
    cumle: "Können Sie mir helfen?",
    turkce: "Bana yardım edebilir misiniz?",
  },
  {
    cumle: "Ich brauche Hilfe.",
    turkce: "Yardıma ihtiyacım var.",
  },
  {
    cumle: "Ich suche den Bahnhof.",
    turkce: "Tren istasyonunu arıyorum.",
  },
  {
    cumle: "Ich habe mich verlaufen.",
    turkce: "Kayboldum.",
  },
  {
    cumle: "Wie komme ich zum Museum?",
    turkce: "Müzeye nasıl giderim?",
  },
  {
    cumle: "Ist es weit von hier?",
    turkce: "Buradan uzak mı?",
  },
  {
    cumle: "Gehen Sie geradeaus und dann links.",
    turkce: "Düz gidin ve sonra sola dönün.",
  },
  {
    cumle: "Es ist ungefähr 10 Minuten zu Fuß.",
    turkce: "Yaklaşık 10 dakikalık yürüme mesafesinde.",
  },
  {
    cumle: "Ich möchte eine Fahrkarte kaufen.",
    turkce: "Bir bilet satın almak istiyorum.",
  },
  {
    cumle: "Einfach oder hin und zurück?",
    turkce: "Tek yön mü gidiş-dönüş mü?",
  },
  {
    cumle: "Wann fährt der nächste Zug nach Berlin?",
    turkce: "Berlin'e bir sonraki tren ne zaman kalkıyor?",
  },
  {
    cumle: "Von welchem Gleis fährt der Zug ab?",
    turkce: "Tren hangi perondan kalkıyor?",
  },
  {
    cumle: "Ist dieser Platz frei?",
    turkce: "Bu yer boş mu?",
  },
  {
    cumle: "Darf ich hier sitzen?",
    turkce: "Buraya oturabilir miyim?",
  },

  // A2 SEVİYESİ - HOBİLER VE BOŞZAMAN
  {
    cumle: "Was machen Sie in Ihrer Freizeit?",
    turkce: "Boş zamanlarınızda ne yaparsınız?",
  },
  {
    cumle: "Ich lese gerne Bücher.",
    turkce: "Kitap okumayı severim.",
  },
  {
    cumle: "Ich spiele Fußball.",
    turkce: "Futbol oynarım.",
  },
  {
    cumle: "Ich gehe oft ins Kino.",
    turkce: "Sık sık sinemaya giderim.",
  },
  {
    cumle: "Ich höre gerne Musik.",
    turkce: "Müzik dinlemeyi severim.",
  },
  {
    cumle: "Ich koche gerne.",
    turkce: "Yemek yapmayı severim.",
  },
  {
    cumle: "Ich reise gerne.",
    turkce: "Seyahat etmeyi severim.",
  },
  {
    cumle: "Ich treibe Sport.",
    turkce: "Spor yaparım.",
  },
  {
    cumle: "Ich spiele Gitarre.",
    turkce: "Gitar çalarım.",
  },
  {
    cumle: "Ich tanze gerne.",
    turkce: "Dans etmeyi severim.",
  },
  {
    cumle: "Haben Sie Geschwister?",
    turkce: "Kardeşleriniz var mı?",
  },
  {
    cumle: "Ich habe einen Bruder und eine Schwester.",
    turkce: "Bir erkek kardeşim ve bir kız kardeşim var.",
  },
  {
    cumle: "Ich habe keine Geschwister.",
    turkce: "Kardeşim yok.",
  },
  {
    cumle: "Ich bin Einzelkind.",
    turkce: "Ben tek çocuğum.",
  },
  {
    cumle: "Was sind deine Hobbys?",
    turkce: "Hobilerin neler?",
  },
  {
    cumle: "Ich mag Musik hören.",
    turkce: "Müzik dinlemeyi seviyorum.",
  },
  {
    cumle: "Welche Musik hörst du gerne?",
    turkce: "Ne tür müzik dinlemeyi seversin?",
  },
  {
    cumle: "Ich höre gerne Rock und Pop.",
    turkce: "Rock ve pop dinlemeyi severim.",
  },
  {
    cumle: "Welche Filme magst du?",
    turkce: "Hangi filmleri seversin?",
  },
  {
    cumle: "Ich mag Komödien und Actionfilme.",
    turkce: "Komedileri ve aksiyon filmlerini severim.",
  },

  // A2 SEVİYESİ - DİL VE ZAMAN İFADELERİ
  {
    cumle: "Welche Sprachen sprichst du?",
    turkce: "Hangi dilleri konuşuyorsun?",
  },
  {
    cumle: "Ich spreche Deutsch und Englisch.",
    turkce: "Almanca ve İngilizce konuşuyorum.",
  },
  {
    cumle: "Ich lerne seit einem Jahr Deutsch.",
    turkce: "Bir yıldır Almanca öğreniyorum.",
  },
  {
    cumle: "Deutsch ist eine schwere Sprache.",
    turkce: "Almanca zor bir dil.",
  },
  {
    cumle: "Ich möchte mein Deutsch verbessern.",
    turkce: "Almancamı geliştirmek istiyorum.",
  },
  {
    cumle: "Was hast du am Wochenende gemacht?",
    turkce: "Hafta sonu ne yaptın?",
  },
  {
    cumle: "Ich war zu Hause und habe ferngesehen.",
    turkce: "Evdeydim ve televizyon izledim.",
  },
  {
    cumle: "Ich war im Kino.",
    turkce: "Sinemadaydım.",
  },
  {
    cumle: "Ich habe Freunde getroffen.",
    turkce: "Arkadaşlarımla buluştum.",
  },
  {
    cumle: "Ich hatte keine Zeit.",
    turkce: "Vaktim yoktu.",
  },
  {
    cumle: "Ich war sehr beschäftigt.",
    turkce: "Çok meşguldüm.",
  },
  {
    cumle: "Hast du morgen Zeit?",
    turkce: "Yarın vaktin var mı?",
  },
  {
    cumle: "Leider habe ich keine Zeit.",
    turkce: "Maalesef vaktim yok.",
  },
  {
    cumle: "Ja, ich habe Zeit.",
    turkce: "Evet, vaktim var.",
  },
  {
    cumle: "Wir könnten ins Restaurant gehen.",
    turkce: "Restorana gidebiliriz.",
  },
  {
    cumle: "Das klingt gut.",
    turkce: "Bu kulağa hoş geliyor.",
  },
  {
    cumle: "Das Wetter ist heute schön.",
    turkce: "Bugün hava güzel.",
  },
  {
    cumle: "Es regnet stark.",
    turkce: "Şiddetli yağmur yağıyor.",
  },
  {
    cumle: "Es ist heute sehr heiß.",
    turkce: "Bugün çok sıcak.",
  },
  {
    cumle: "Es ist kalt.",
    turkce: "Hava soğuk.",
  },
  {
    cumle: "Es schneit.",
    turkce: "Kar yağıyor.",
  },
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
  },
  {
    cumle: "Ich rufe dich später an.",
    turkce: "Seni daha sonra arayacağım.",
  },
  {
    cumle: "Wir sehen uns morgen.",
    turkce: "Yarın görüşürüz.",
  },
  {
    cumle: "Ich bin spät dran.",
    turkce: "Geç kaldım.",
  },
  {
    cumle: "Ich habe es eilig.",
    turkce: "Acelem var.",
  },

  // B1 SEVİYESİ - İLETİŞİM VE GÜNLÜK HAYAT
  {
    cumle: "Könnten Sie mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misiniz?",
  },
  {
    cumle: "Können Sie mir das genauer erläutern?",
    turkce: "Bunu bana daha detaylı açıklayabilir misiniz?",
  },
  {
    cumle: "Ich verstehe den Zusammenhang nicht ganz.",
    turkce: "Bağlantıyı tam olarak anlamıyorum.",
  },
  {
    cumle: "Können Sie ein Beispiel geben?",
    turkce: "Bir örnek verebilir misiniz?",
  },
  {
    cumle: "Ich würde gerne einen Termin vereinbaren.",
    turkce: "Bir randevu almak istiyorum.",
  },
  {
    cumle: "Wann passt es Ihnen am besten?",
    turkce: "Size en uygun zaman ne zaman?",
  },
  {
    cumle: "Ich bin an diesem Tag leider verhindert.",
    turkce: "O gün maalesef meşgulüm.",
  },
  {
    cumle: "Können wir den Termin verschieben?",
    turkce: "Randevuyu erteleyebilir miyiz?",
  },
  {
    cumle: "Ich habe meine Brieftasche verloren.",
    turkce: "Cüzdanımı kaybettim.",
  },
  {
    cumle: "Haben Sie mein Handy gesehen?",
    turkce: "Telefonumu gördünüz mü?",
  },
  {
    cumle: "Ich habe meinen Schlüssel vergessen.",
    turkce: "Anahtarımı unuttum.",
  },
  {
    cumle: "Können Sie mir den Weg zur Post beschreiben?",
    turkce: "Bana postaneye giden yolu tarif edebilir misiniz?",
  },
  {
    cumle: "Wie lange dauert es zu Fuß?",
    turkce: "Yürüyerek ne kadar sürer?",
  },
  {
    cumle: "Gibt es hier in der Nähe eine Bank?",
    turkce: "Buralarda bir banka var mı?",
  },
  {
    cumle: "Wo ist der nächste Supermarkt?",
    turkce: "En yakın süpermarket nerede?",
  },

  // B1 SEVİYESİ - EV VE GÜNLÜK YAŞAM
  {
    cumle: "Ich suche eine Wohnung zu mieten.",
    turkce: "Kiralamak için bir daire arıyorum.",
  },
  {
    cumle: "Wie hoch ist die monatliche Miete?",
    turkce: "Aylık kira ne kadar?",
  },
  {
    cumle: "Sind die Nebenkosten im Preis enthalten?",
    turkce: "Yan giderler fiyata dahil mi?",
  },
  {
    cumle: "Gibt es einen Aufzug im Gebäude?",
    turkce: "Binada asansör var mı?",
  },
  {
    cumle: "Wie groß ist die Wohnung?",
    turkce: "Daire ne kadar büyük?",
  },
  {
    cumle: "Die Heizung funktioniert nicht.",
    turkce: "Kalorifer çalışmıyor.",
  },
  {
    cumle: "Der Wasserhahn tropft.",
    turkce: "Musluk damlıyor.",
  },
  {
    cumle: "Ich muss die Waschmaschine reparieren lassen.",
    turkce: "Çamaşır makinesini tamir ettirmem gerekiyor.",
  },
  {
    cumle: "Können Sie es bitte reparieren?",
    turkce: "Lütfen tamir edebilir misiniz?",
  },
  {
    cumle: "Wann kann der Techniker kommen?",
    turkce: "Teknisyen ne zaman gelebilir?",
  },

  // B1 SEVİYESİ - FİKİR VE TAVSİYE
  {
    cumle: "Was würden Sie an meiner Stelle tun?",
    turkce: "Benim yerimde olsaydınız ne yapardınız?",
  },
  {
    cumle: "Ich bin mir nicht sicher, was ich tun soll.",
    turkce: "Ne yapacağımdan emin değilim.",
  },
  {
    cumle: "Haben Sie einen Vorschlag?",
    turkce: "Bir öneriniz var mı?",
  },
  {
    cumle: "Das ist eine gute Idee.",
    turkce: "Bu iyi bir fikir.",
  },
  {
    cumle: "Ich bin nicht davon überzeugt.",
    turkce: "Buna ikna olmadım.",
  },
  {
    cumle: "Ich freue mich auf unser Treffen.",
    turkce: "Görüşmemizi dört gözle bekliyorum.",
  },
  {
    cumle: "Ich bin gespannt auf Ihren Vortrag.",
    turkce: "Sunumunuzu merakla bekliyorum.",
  },
  {
    cumle: "Es tut mir leid, dass ich zu spät gekommen bin.",
    turkce: "Geç kaldığım için özür dilerim.",
  },
  {
    cumle: "Ich entschuldige mich für die Unannehmlichkeiten.",
    turkce: "Rahatsızlık için özür dilerim.",
  },
  {
    cumle: "Ich bin mit dem Ergebnis nicht zufrieden.",
    turkce: "Sonuçtan memnun değilim.",
  },
  {
    cumle: "Das hat meine Erwartungen nicht erfüllt.",
    turkce: "Bu beklentilerimi karşılamadı.",
  },
  {
    cumle: "Wir sollten das Problem so schnell wie möglich lösen.",
    turkce: "Bu sorunu mümkün olduğunca çabuk çözmeliyiz.",
  },
  {
    cumle: "Wir müssen eine Lösung finden.",
    turkce: "Bir çözüm bulmamız gerekiyor.",
  },

  // B1 SEVİYESİ - GELECEK PLANLARI VE GEÇMİŞ DENEYİMLER
  {
    cumle: "Ich habe vor, nächstes Jahr nach Deutschland zu reisen.",
    turkce: "Gelecek yıl Almanya'ya seyahat etmeyi planlıyorum.",
  },
  {
    cumle: "Was sind deine Pläne für die Zukunft?",
    turkce: "Gelecek için planların neler?",
  },
  {
    cumle: "Ich möchte im Ausland studieren.",
    turkce: "Yurtdışında okumak istiyorum.",
  },
  {
    cumle: "Ich will meine Deutschkenntnisse verbessern.",
    turkce: "Almanca bilgimi geliştirmek istiyorum.",
  },
  {
    cumle: "Haben Sie schon einmal in der Türkei Urlaub gemacht?",
    turkce: "Hiç Türkiye'de tatil yaptınız mı?",
  },
  {
    cumle: "Ich war noch nie in Deutschland.",
    turkce: "Hiç Almanya'da bulunmadım.",
  },
  {
    cumle: "Das war meine beste Reise.",
    turkce: "Bu benim en iyi seyahatimdi.",
  },
  {
    cumle: "Ich habe viele interessante Menschen kennengelernt.",
    turkce: "Birçok ilginç insanla tanıştım.",
  },

  // B1 SEVİYESİ - KOŞULLU CÜMLELER VE FİKİR BELİRTME
  {
    cumle: "Wenn ich Zeit hätte, würde ich mehr Sport treiben.",
    turkce: "Vaktim olsa, daha fazla spor yapardım.",
  },
  {
    cumle: "Wenn das Wetter schön ist, gehen wir spazieren.",
    turkce: "Hava güzelse, yürüyüşe çıkarız.",
  },
  {
    cumle: "Falls ich nicht rechtzeitig komme, fang ohne mich an.",
    turkce: "Eğer zamanında gelemezsem, bensiz başla.",
  },
  {
    cumle: "Ich bin seit drei Jahren verheiratet.",
    turkce: "Üç yıldır evliyim.",
  },
  {
    cumle: "Ich wohne seit 2019 in dieser Stadt.",
    turkce: "2019'dan beri bu şehirde yaşıyorum.",
  },
  {
    cumle: "Wie lange kennst du ihn schon?",
    turkce: "Onu ne zamandır tanıyorsun?",
  },
  {
    cumle: "Was sind die Vor- und Nachteile dieser Methode?",
    turkce: "Bu yöntemin avantajları ve dezavantajları nelerdir?",
  },
  {
    cumle: "Einerseits ist es praktisch, andererseits ist es teuer.",
    turkce: "Bir yandan pratik, diğer yandan pahalı.",
  },
  {
    cumle: "Ich bin der Meinung, dass...",
    turkce: "Bence...",
  },
  {
    cumle: "Meiner Ansicht nach ist das keine gute Idee.",
    turkce: "Bana göre bu iyi bir fikir değil.",
  },
  {
    cumle: "Ich denke, wir sollten zuerst recherchieren.",
    turkce: "Bence önce araştırma yapmalıyız.",
  },

  // B1 SEVİYESİ - GÜNLÜK KONUŞMA İFADELERİ
  {
    cumle: "Es wäre besser, wenn wir früher anfangen würden.",
    turkce: "Daha erken başlasak daha iyi olurdu.",
  },
  {
    cumle: "Könnten Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
  },
  {
    cumle: "Ich habe nicht verstanden, was Sie meinen.",
    turkce: "Ne demek istediğinizi anlamadım.",
  },
  {
    cumle: "Könnten Sie das anders formulieren?",
    turkce: "Bunu başka türlü ifade edebilir misiniz?",
  },
  {
    cumle: "Ich habe das Gefühl, dass etwas nicht stimmt.",
    turkce: "Bir şeylerin yanlış olduğu hissine kapılıyorum.",
  },
  {
    cumle: "Ich bin mir nicht sicher, ob das funktionieren wird.",
    turkce: "Bunun işe yarayacağından emin değilim.",
  },
  {
    cumle: "Wir müssen uns beeilen, sonst verpassen wir den Zug.",
    turkce: "Acele etmeliyiz, yoksa treni kaçıracağız.",
  },
  {
    cumle: "Beeil dich, wir sind spät dran!",
    turkce: "Acele et, geç kaldık!",
  },
  {
    cumle: "Ich bin mit deinem Vorschlag einverstanden.",
    turkce: "Önerinize katılıyorum.",
  },
  {
    cumle: "Ich stimme dir voll und ganz zu.",
    turkce: "Sana tamamen katılıyorum.",
  },
  {
    cumle: "Da bin ich anderer Meinung.",
    turkce: "Bu konuda farklı düşünüyorum.",
  },
  {
    cumle: "Darf ich Ihnen eine Frage stellen?",
    turkce: "Size bir soru sorabilir miyim?",
  },
  {
    cumle: "Darf ich etwas vorschlagen?",
    turkce: "Bir şey önerebilir miyim?",
  },
  {
    cumle: "Es ist mir egal, was die anderen denken.",
    turkce: "Başkalarının ne düşündüğü umurumda değil.",
  },
  {
    cumle: "Das spielt für mich keine Rolle.",
    turkce: "Bu benim için önemli değil.",
  },

  // B1 SEVİYESİ - İŞ VE TOPLANTI İFADELERİ
  {
    cumle: "Können wir einen anderen Termin vereinbaren?",
    turkce: "Başka bir randevu ayarlayabilir miyiz?",
  },
  {
    cumle: "Der Termin passt mir leider nicht.",
    turkce: "Maalesef randevu bana uygun değil.",
  },
  {
    cumle: "Können wir das Meeting auf nächste Woche verschieben?",
    turkce: "Toplantıyı gelecek haftaya erteleyebilir miyiz?",
  },
  {
    cumle: "Ich bin noch nicht fertig mit meiner Arbeit.",
    turkce: "İşimi henüz bitirmedim.",
  },
  {
    cumle: "Ich brauche noch etwas mehr Zeit.",
    turkce: "Biraz daha zamana ihtiyacım var.",
  },
  {
    cumle: "Die Frist ist zu knapp.",
    turkce: "Süre çok kısa.",
  },
  {
    cumle: "Können Sie mir die Unterlagen zuschicken?",
    turkce: "Bana belgeleri gönderebilir misiniz?",
  },
  {
    cumle: "Ich habe die E-Mail noch nicht erhalten.",
    turkce: "E-postayı henüz almadım.",
  },
  {
    cumle: "Was halten Sie von diesem Vorschlag?",
    turkce: "Bu öneri hakkında ne düşünüyorsunuz?",
  },
  {
    cumle: "Das klingt vielversprechend.",
    turkce: "Bu umut verici görünüyor.",
  },
  {
    cumle: "Das überzeugt mich nicht.",
    turkce: "Bu beni ikna etmiyor.",
  },
  {
    cumle: "Ich finde es wichtig, dass wir darüber sprechen.",
    turkce: "Bunun hakkında konuşmamızın önemli olduğunu düşünüyorum.",
  },
  {
    cumle: "Wir sollten alle Aspekte berücksichtigen.",
    turkce: "Tüm yönleri göz önünde bulundurmalıyız.",
  },
  {
    cumle: "Haben Sie noch weitere Fragen?",
    turkce: "Başka sorularınız var mı?",
  },

  // B1 SEVİYESİ - SOSYAL İLİŞKİLER
  {
    cumle: "Es tut mir leid, aber ich habe keine Zeit.",
    turkce: "Üzgünüm ama vaktim yok.",
  },
  {
    cumle: "Ich bin momentan sehr beschäftigt.",
    turkce: "Şu anda çok meşgulüm.",
  },
  {
    cumle: "Vielleicht ein andermal.",
    turkce: "Belki başka bir zaman.",
  },
  {
    cumle: "Ich freue mich, Sie kennenzulernen.",
    turkce: "Sizi tanıdığıma memnun oldum.",
  },
  {
    cumle: "Es war ein schöner Abend mit Ihnen.",
    turkce: "Sizinle güzel bir akşamdı.",
  },
  {
    cumle: "Wir sollten öfter etwas zusammen unternehmen.",
    turkce: "Daha sık birlikte bir şeyler yapmalıyız.",
  },
  {
    cumle: "Ich werde mein Bestes tun.",
    turkce: "Elimden geleni yapacağım.",
  },
  {
    cumle: "Sie können sich auf mich verlassen.",
    turkce: "Bana güvenebilirsiniz.",
  },
  {
    cumle: "Ich stehe Ihnen gerne zur Verfügung.",
    turkce: "Memnuniyetle hizmetinizdeyim.",
  },
  {
    cumle: "Ich wünsche Ihnen viel Erfolg!",
    turkce: "Size başarılar dilerim!",
  },
  {
    cumle: "Gute Besserung!",
    turkce: "Geçmiş olsun!",
  },
  {
    cumle: "Herzlichen Glückwunsch zum Geburtstag!",
    turkce: "Doğum günün kutlu olsun!",
  },
  {
    cumle: "Frohe Weihnachten und ein gutes neues Jahr!",
    turkce: "Mutlu Noeller ve mutlu yıllar!",
  },

  // B2 SEVİYESİ - DAHA KARMAŞIK İFADELER
  {
    cumle: "Es wäre mir lieb, wenn Sie das bis morgen erledigen könnten.",
    turkce: "Bunu yarına kadar halledebilirseniz sevinirim.",
  },
  {
    cumle: "Ich würde mich freuen, wenn Sie meine Einladung annehmen würden.",
    turkce: "Davetimi kabul ederseniz sevinirim.",
  },
  {
    cumle: "Obwohl ich mein Bestes gegeben habe, ist es mir nicht gelungen.",
    turkce: "Elimden gelenin en iyisini yapmama rağmen, başaramadım.",
  },
  {
    cumle: "Es ist wichtig, dass wir alle Möglichkeiten in Betracht ziehen.",
    turkce: "Tüm olasılıkları göz önünde bulundurmamız önemli.",
  },
  {
    cumle: "Ich hätte es anders gemacht, wenn ich gewusst hätte, dass...",
    turkce: "Eğer bilseydim ki..., farklı yapardım.",
  },
  {
    cumle: "Unter diesen Umständen sollten wir vorsichtig sein.",
    turkce: "Bu koşullar altında dikkatli olmalıyız.",
  },
  {
    cumle: "Im Großen und Ganzen bin ich mit dem Ergebnis zufrieden.",
    turkce: "Genel olarak sonuçtan memnunum.",
  },
  {
    cumle:
      "Einerseits verstehe ich Ihren Standpunkt, andererseits muss ich widersprechen.",
    turkce:
      "Bir yandan bakış açınızı anlıyorum, diğer yandan karşı çıkmak zorundayım.",
  },
  {
    cumle: "Soweit ich informiert bin, findet die Veranstaltung nicht statt.",
    turkce: "Bildiğim kadarıyla, etkinlik gerçekleşmeyecek.",
  },
  {
    cumle: "Es liegt auf der Hand, dass wir eine Lösung finden müssen.",
    turkce: "Bir çözüm bulmamız gerektiği açıktır.",
  },
  {
    cumle: "Guten Morgen!",
    turkce: "Günaydın!",
    level: "A1",
    notes: "Sabah selamlaşması",
  },
  {
    cumle: "Guten Tag!",
    turkce: "İyi günler!",
    level: "A1",
    notes: "Gün içinde selamlaşma",
  },
  {
    cumle: "Guten Abend!",
    turkce: "İyi akşamlar!",
    level: "A1",
    notes: "Akşam selamlaşması",
  },
  {
    cumle: "Gute Nacht!",
    turkce: "İyi geceler!",
    level: "A1",
    notes: "Gece vedalaşması",
  },
  {
    cumle: "Auf Wiedersehen!",
    turkce: "Hoşça kal!",
    level: "A1",
    notes: "Resmi vedalaşma",
  },
  {
    cumle: "Tschüss!",
    turkce: "Hoşça kal! (Informal)",
    level: "A1",
    notes: "Samimi vedalaşma",
  },
  {
    cumle: "Bis bald!",
    turkce: "Yakında görüşürüz!",
    level: "A1",
    notes: "Samimi bir veda",
  },
  {
    cumle: "Bis morgen!",
    turkce: "Yarın görüşürüz!",
    level: "A1",
    notes: "Ertesi gün için veda",
  },
  {
    cumle: "Bis später!",
    turkce: "Sonra görüşürüz!",
    level: "A1",
    notes: "Kısa süreli ayrılık için",
  },

  // A1 SEVİYESİ - TANITMA VE TANIŞMA
  {
    cumle: "Wie heißt du?",
    turkce: "Adın ne?",
    level: "A1",
    notes: "Samimi tanışma sorusu",
  },
  {
    cumle: "Ich heiße...",
    turkce: "Benim adım...",
    level: "A1",
    notes: "Kendini tanıtma",
  },
  {
    cumle: "Wie ist dein Name?",
    turkce: "İsmin nedir?",
    level: "A1",
    notes: "Alternatif tanışma sorusu",
  },
  {
    cumle: "Mein Name ist...",
    turkce: "Benim adım...",
    level: "A1",
    notes: "Resmi kendini tanıtma",
  },
  {
    cumle: "Wie geht es dir?",
    turkce: "Nasılsın?",
    level: "A1",
    notes: "Samimi hal hatır sorma",
  },
  {
    cumle: "Mir geht es gut.",
    turkce: "İyiyim.",
    level: "A1",
    notes: "Olumlu yanıt",
  },
  {
    cumle: "Es geht mir nicht so gut.",
    turkce: "Pek iyi değilim.",
    level: "A1",
    notes: "Olumsuz yanıt",
  },
  {
    cumle: "Wie geht es Ihnen?",
    turkce: "Nasılsınız? (Resmi)",
    level: "A1",
    notes: "Resmi hal hatır sorma",
  },
  {
    cumle: "Mir geht es sehr gut, danke.",
    turkce: "Çok iyiyim, teşekkürler.",
    level: "A1",
    notes: "Kibar olumlu yanıt",
  },
  {
    cumle: "Woher kommst du?",
    turkce: "Nerelisin?",
    level: "A1",
    notes: "Köken sorma",
  },
  {
    cumle: "Ich komme aus der Türkei.",
    turkce: "Türkiye'den geliyorum.",
    level: "A1",
    notes: "Köken belirtme",
  },
  {
    cumle: "Wo wohnst du?",
    turkce: "Nerede yaşıyorsun?",
    level: "A1",
    notes: "İkamet sorma",
  },
  {
    cumle: "Ich wohne in Istanbul.",
    turkce: "İstanbul'da yaşıyorum.",
    level: "A1",
    notes: "İkamet belirtme",
  },
  {
    cumle: "Wie alt bist du?",
    turkce: "Kaç yaşındasın?",
    level: "A1",
    notes: "Yaş sorma",
  },
  {
    cumle: "Ich bin 25 Jahre alt.",
    turkce: "25 yaşındayım.",
    level: "A1",
    notes: "Yaş belirtme",
  },
  {
    cumle: "Was machst du beruflich?",
    turkce: "Mesleğin ne?",
    level: "A1",
    notes: "Meslek sorma",
  },
  {
    cumle: "Ich bin Student/Studentin.",
    turkce: "Ben öğrenciyim.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich bin Lehrer/Lehrerin.",
    turkce: "Ben öğretmenim.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich arbeite als Ingenieur.",
    turkce: "Mühendis olarak çalışıyorum.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich bin Arzt/Ärztin.",
    turkce: "Ben doktorum.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich bin arbeitslos.",
    turkce: "İşsizim.",
    level: "A1",
    notes: "İş durumu belirtme",
  },

  // A1 SEVİYESİ - GÜNLÜK İFADELER
  {
    cumle: "Entschuldigung!",
    turkce: "Özür dilerim!",
    level: "A1",
    notes: "Samimi özür",
  },
  {
    cumle: "Entschuldigen Sie bitte!",
    turkce: "Lütfen affedin! (Resmi)",
    level: "A1",
    notes: "Resmi özür",
  },
  {
    cumle: "Danke schön!",
    turkce: "Çok teşekkür ederim!",
    level: "A1",
    notes: "Kibar teşekkür",
  },
  {
    cumle: "Vielen Dank!",
    turkce: "Çok teşekkürler!",
    level: "A1",
    notes: "Kibar teşekkür",
  },
  {
    cumle: "Danke sehr!",
    turkce: "Çok teşekkürler!",
    level: "A1",
    notes: "Kibar teşekkür",
  },
  {
    cumle: "Bitte schön!",
    turkce: "Rica ederim!",
    level: "A1",
    notes: "Teşekküre yanıt",
  },
  {
    cumle: "Gern geschehen!",
    turkce: "Bir şey değil!",
    level: "A1",
    notes: "Teşekküre samimi yanıt",
  },
  {
    cumle: "Ja.",
    turkce: "Evet.",
    level: "A1",
    notes: "Olumlama",
  },
  {
    cumle: "Nein.",
    turkce: "Hayır.",
    level: "A1",
    notes: "Olumsuzlama",
  },
  {
    cumle: "Vielleicht.",
    turkce: "Belki.",
    level: "A1",
    notes: "Belirsizlik ifadesi",
  },
  {
    cumle: "Natürlich.",
    turkce: "Elbette.",
    level: "A1",
    notes: "Kesin onay",
  },
  {
    cumle: "Ich verstehe nicht.",
    turkce: "Anlamıyorum.",
    level: "A1",
    notes: "Anlamama ifadesi",
  },
  {
    cumle: "Können Sie bitte langsamer sprechen?",
    turkce: "Lütfen daha yavaş konuşabilir misiniz?",
    level: "A1",
    notes: "Kibar rica",
  },
  {
    cumle: "Können Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
    level: "A1",
    notes: "Tekrar isteme",
  },
  {
    cumle: "Wie bitte?",
    turkce: "Efendim? / Ne dediniz?",
    level: "A1",
    notes: "Anlamadığında sorma",
  },
  {
    cumle: "Ich verstehe das nicht.",
    turkce: "Bunu anlamıyorum.",
    level: "A1",
    notes: "Anlamama ifadesi",
  },
  {
    cumle: "Sprechen Sie Englisch?",
    turkce: "İngilizce biliyor musunuz?",
    level: "A1",
    notes: "Dil becerisi sorma",
  },
  {
    cumle: "Sprechen Sie Türkisch?",
    turkce: "Türkçe biliyor musunuz?",
    level: "A1",
    notes: "Dil becerisi sorma",
  },
  {
    cumle: "Ich spreche ein bisschen Deutsch.",
    turkce: "Biraz Almanca konuşuyorum.",
    level: "A1",
    notes: "Dil seviyesi belirtme",
  },
  {
    cumle: "Ich lerne Deutsch.",
    turkce: "Almanca öğreniyorum.",
    level: "A1",
    notes: "Öğrenme süreci belirtme",
  },

  // A1 SEVİYESİ - GÜNLÜK HAYAT
  {
    cumle: "Wie viel kostet das?",
    turkce: "Bu ne kadar?",
    level: "A1",
    notes: "Fiyat sorma",
  },
  {
    cumle: "Das ist zu teuer.",
    turkce: "Bu çok pahalı.",
    level: "A1",
    notes: "Fiyat değerlendirme",
  },
  {
    cumle: "Haben Sie es billiger?",
    turkce: "Daha ucuzu var mı?",
    level: "A1",
    notes: "Pazarlık ifadesi",
  },
  {
    cumle: "Ich nehme das.",
    turkce: "Bunu alıyorum.",
    level: "A1",
    notes: "Satın alma kararı",
  },
  {
    cumle: "Ich möchte einen Kaffee, bitte.",
    turkce: "Bir kahve istiyorum, lütfen.",
    level: "A1",
    notes: "Sipariş verme",
  },
  {
    cumle: "Ich hätte gerne ein Glas Wasser.",
    turkce: "Bir bardak su istiyorum.",
    level: "A1",
    notes: "Kibar sipariş",
  },
  {
    cumle: "Die Rechnung, bitte.",
    turkce: "Hesap, lütfen.",
    level: "A1",
    notes: "Hesap isteme",
  },
  {
    cumle: "Haben Sie ein Zimmer frei?",
    turkce: "Boş odanız var mı?",
    level: "A1",
    notes: "Otel sorgusu",
  },
  {
    cumle: "Wo ist die Toilette?",
    turkce: "Tuvalet nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wo ist der Ausgang?",
    turkce: "Çıkış nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wie spät ist es?",
    turkce: "Saat kaç?",
    level: "A1",
    notes: "Saat sorma",
  },
  {
    cumle: "Es ist 10 Uhr.",
    turkce: "Saat 10.",
    level: "A1",
    notes: "Saat belirtme",
  },
  {
    cumle: "Es ist halb acht.",
    turkce: "Saat yedi buçuk.",
    level: "A1",
    notes: "Saat belirtme",
  },
  {
    cumle: "Ich habe Hunger.",
    turkce: "Açım.",
    level: "A1",
    notes: "İhtiyaç ifadesi",
  },
  {
    cumle: "Ich habe Durst.",
    turkce: "Susadım.",
    level: "A1",
    notes: "İhtiyaç ifadesi",
  },
  {
    cumle: "Ich bin müde.",
    turkce: "Yorgunum.",
    level: "A1",
    notes: "Durum ifadesi",
  },
  {
    cumle: "Ich bin krank.",
    turkce: "Hastayım.",
    level: "A1",
    notes: "Sağlık durumu ifadesi",
  },
  {
    cumle: "Wo ist der Bahnhof?",
    turkce: "Tren istasyonu nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wo ist die nächste Bushaltestelle?",
    turkce: "En yakın otobüs durağı nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wie komme ich zum Hotel?",
    turkce: "Otele nasıl giderim?",
    level: "A1",
    notes: "Yol tarifi sorma",
  },

  // A2 SEVİYESİ - GÜNLÜK İLETİŞİM
  {
    cumle: "Ich hätte gerne eine Tasse Tee.",
    turkce: "Bir fincan çay istiyorum.",
    level: "A2",
    notes: "Kibar sipariş",
  },
  {
    cumle: "Können Sie mir helfen?",
    turkce: "Bana yardım edebilir misiniz?",
    level: "A2",
    notes: "Yardım isteme",
  },
  {
    cumle: "Ich brauche Hilfe.",
    turkce: "Yardıma ihtiyacım var.",
    level: "A2",
    notes: "Yardım talebi",
  },
  {
    cumle: "Ich suche den Bahnhof.",
    turkce: "Tren istasyonunu arıyorum.",
    level: "A2",
    notes: "Yer arama",
  },
  {
    cumle: "Ich habe mich verlaufen.",
    turkce: "Kayboldum.",
    level: "A2",
    notes: "Durum ifadesi",
  },
  {
    cumle: "Wie komme ich zum Museum?",
    turkce: "Müzeye nasıl giderim?",
    level: "A2",
    notes: "Yol tarifi sorma",
  },
  {
    cumle: "Ist es weit von hier?",
    turkce:
      "Burise yakın bir mesafede bulunuyor. Mesafeyi yürüyerek 30 dakikada katedebilirsiniz.",

    level: "A2",
    notes: "Mesafe sorma",
  },
  {
    cumle: "Gehen Sie geradeaus und dann links.",
    turkce: "Düz gidin ve sonra sola dönün.",
    level: "A2",
    notes: "Yol tarifi verme",
  },
  {
    cumle: "Es ist ungefähr 10 Minuten zu Fuß.",
    turkce: "Yaklaşık 10 dakikalık yürüme mesafesinde.",
    level: "A2",
    notes: "Mesafe belirtme",
  },
  {
    cumle: "Ich möchte eine Fahrkarte kaufen.",
    turkce: "Bir bilet satın almak istiyorum.",
    level: "A2",
    notes: "Bilet alma",
  },
  {
    cumle: "Einfach oder hin und zurück?",
    turkce: "Tek yön mü gidiş-dönüş mü?",
    level: "A2",
    notes: "Bilet türü sorma",
  },
  {
    cumle: "Wann fährt der nächste Zug nach Berlin?",
    turkce: "Berlin'e bir sonraki tren ne zaman kalkıyor?",
    level: "A2",
    notes: "Tren saati sorma",
  },
  {
    cumle: "Von welchem Gleis fährt der Zug ab?",
    turkce: "Tren hangi perondan kalkıyor?",
    level: "A2",
    notes: "Peron sorma",
  },
  {
    cumle: "Ist dieser Platz frei?",
    turkce: "Bu yer boş mu?",
    level: "A2",
    notes: "Yer sorma",
  },
  {
    cumle: "Darf ich hier sitzen?",
    turkce: "Buraya oturabilir miyim?",
    level: "A2",
    notes: "İzin isteme",
  },

  // A2 SEVİYESİ - HOBİLER VE BOŞ ZAMAN
  {
    cumle: "Was machen Sie in Ihrer Freizeit?",
    turkce: "Boş zamanlarınızda ne yaparsınız?",
    level: "A2",
    notes: "Hobi sorma",
  },
  {
    cumle: "Ich lese gerne Bücher.",
    turkce: "Kitap okumayı severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich spiele Fußball.",
    turkce: "Futbol oynarım.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich gehe oft ins Kino.",
    turkce: "Sık sık sinemaya giderim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich höre gerne Musik.",
    turkce: "Müzik dinlemeyi severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich koche gerne.",
    turkce: "Yemek yapmayı severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich reise gerne.",
    turkce: "Seyahat etmeyi severim.",
    level: "A2",
    notes: "Hobi belirt nyelir",
  },
  {
    cumle: "Ich treibe Sport.",
    turkce: "Spor yaparım.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich spiele Gitarre.",
    turkce: "Gitar çalarım.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich tanze gerne.",
    turkce: "Dans etmeyi severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Haben Sie Geschwister?",
    turkce: "Kardeşleriniz var mı?",
    level: "A2",
    notes: "Aile sorma",
  },
  {
    cumle: "Ich habe einen Bruder und eine Schwester.",
    turkce: "Bir erkek kardeşim ve bir kız kardeşim var.",
    level: "A2",
    notes: "Aile belirtme",
  },
  {
    cumle: "Ich habe keine Geschwister.",
    turkce: "Kardeşim yok.",
    level: "A2",
    notes: "Aile belirtme",
  },
  {
    cumle: "Ich bin Einzelkind.",
    turkce: "Ben tek çocuğum.",
    level: "A2",
    notes: "Aile belirtme",
  },
  {
    cumle: "Was sind deine Hobbys?",
    turkce: "Hobilerin neler?",
    level: "A2",
    notes: "Hobi sorma",
  },
  {
    cumle: "Ich mag Musik hören.",
    turkce: "Müzik dinlemeyi seviyorum.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Welche Musik hörst du gerne?",
    turkce: "Ne tür müzik dinlemeyi seversin?",
    level: "A2",
    notes: "Müzik türü sorma",
  },
  {
    cumle: "Ich höre gerne Rock und Pop.",
    turkce: "Rock ve pop dinlemeyi severim.",
    level: "A2",
    notes: "Müzik türü belirtme",
  },
  {
    cumle: "Welche Filme magst du?",
    turkce: "Hangi filmleri seversin?",
    level: "A2",
    notes: "Film türü sorma",
  },
  {
    cumle: "Ich mag Komödien und Actionfilme.",
    turkce: "Komedileri ve aksiyon filmlerini severim.",
    level: "A2",
    notes: "Film türü belirtme",
  },

  // A2 SEVİYESİ - DİL VE ZAMAN İFADELERİ
  {
    cumle: "Welche Sprachen sprichst du?",
    turkce: "Hangi dilleri konuşuyorsun?",
    level: "A2",
    notes: "Dil becerisi sorma",
  },
  {
    cumle: "Ich spreche Deutsch und Englisch.",
    turkce: "Almanca ve İngilizce konuşuyorum.",
    level: "A2",
    notes: "Dil becerisi belirtme",
  },
  {
    cumle: "Ich lerne seit einem Jahr Deutsch.",
    turkce: "Bir yıldır Almanca öğreniyorum.",
    level: "A2",
    notes: "Öğrenme süresi belirtme",
  },
  {
    cumle: "Deutsch ist eine schwere Sprache.",
    turkce: "Almanca zor bir dil.",
    level: "A2",
    notes: "Dil değerlendirme",
  },
  {
    cumle: "Ich möchte mein Deutsch verbessern.",
    turkce: "Almancamı geliştirmek istiyorum.",
    level: "A2",
    notes: "Hedef belirtme",
  },
  {
    cumle: "Was hast du am Wochenende gemacht?",
    turkce: "Hafta sonu ne yaptın?",
    level: "A2",
    notes: "Geçmiş etkinlik sorma",
  },
  {
    cumle: "Ich war zu Hause und habe ferngesehen.",
    turkce: "Evdeydim ve televizyon izledim.",
    level: "A2",
    notes: "Geçmiş etkinlik belirtme",
  },
  {
    cumle: "Ich war im Kino.",
    turkce: "Sinemadaydım.",
    level: "A2",
    notes: "Geçmiş etkinlik belirtme",
  },
  {
    cumle: "Ich habe Freunde getroffen.",
    turkce: "Arkadaşlarımla buluştum.",
    level: "A2",
    notes: "Geçmiş etkinlik belirtme",
  },
  {
    cumle: "Ich hatte keine Zeit.",
    turkce: "Vaktim yoktu.",
    level: "A2",
    notes: "Geçmiş durum belirtme",
  },
  {
    cumle: "Ich war sehr beschäftigt.",
    turkce: "Çok meşguldüm.",
    level: "A2",
    notes: "Geçmiş durum belirtme",
  },
  {
    cumle: "Hast du morgen Zeit?",
    turkce: "Yarın vaktin var mı?",
    level: "A2",
    notes: "Plan sorma",
  },
  {
    cumle: "Leider habe ich keine Zeit.",
    turkce: "Maalesef vaktim yok.",
    level: "A2",
    notes: "Olumsuz yanıt",
  },
  {
    cumle: "Ja, ich habe Zeit.",
    turkce: "Evet, vaktim var.",
    level: "A2",
    notes: "Olumlu yanıt",
  },
  {
    cumle: "Wir könnten ins Restaurant gehen.",
    turkce: "Restorana gidebiliriz.",
    level: "A2",
    notes: "Plan önerisi",
  },
  {
    cumle: "Das klingt gut.",
    turkce: "Bu kulağa hoş geliyor.",
    level: "A2",
    notes: "Olumlu tepki",
  },
  {
    cumle: "Das Wetter ist heute schön.",
    turkce: "Bugün hava güzel.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es regnet stark.",
    turkce: "Şiddetli yağmur yağıyor.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es ist heute sehr heiß.",
    turkce: "Bugün çok sıcak.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es ist kalt.",
    turkce: "Hava soğuk.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es schneit.",
    turkce: "Kar yağıyor.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
    level: "A2",
    notes: "Zorunluluk ifadesi",
  },
  {
    cumle: "Ich rufe dich später an.",
    turkce: "Seni daha sonra arayacağım.",
    level: "A2",
    notes: "Gelecek plan belirtme",
  },
  {
    cumle: "Wir sehen uns morgen.",
    turkce: "Yarın görüşürüz.",
    level: "A2",
    notes: "Veda ifadesi",
  },
  {
    cumle: "Ich bin spät dran.",
    turkce: "Geç kaldım.",
    level: "A2",
    notes: "Durum ifadesi",
  },
  {
    cumle: "Ich habe es eilig.",
    turkce: "Acelem var.",
    level: "A2",
    notes: "Acil durum ifadesi",
  },

  // B1 SEVİYESİ - İLETİŞİM VE GÜNLÜK HAYAT
  {
    cumle: "Könnten Sie mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misiniz?",
    level: "B1",
    notes: "Kibar açıklama isteme",
  },
  {
    cumle: "Können Sie mir das genauer erläutern?",
    turkce: "Bunu bana daha detaylı açıklayabilir misiniz?",
    level: "B1",
    notes: "Detaylı bilgi isteme",
  },
  {
    cumle: "Ich verstehe den Zusammenhang nicht ganz.",
    turkce: "Bağlantıyı tam olarak anlamıyorum.",
    level: "B1",
    notes: "Anlama güçlüğü ifadesi",
  },
  {
    cumle: "Können Sie ein Beispiel geben?",
    turkce: "Bir örnek verebilir misiniz?",
    level: "B1",
    notes: "Örnek isteme",
  },
  {
    cumle: "Ich würde gerne einen Termin vereinbaren.",
    turkce: "Bir randevu almak istiyorum.",
    level: "B1",
    notes: "Randevu talebi",
  },
  {
    cumle: "Wann passt es Ihnen am besten?",
    turkce: "Size en uygun zaman ne zaman?",
    level: "B1",
    notes: "Zaman uygunluğu sorma",
  },
  {
    cumle: "Ich bin an diesem Tag leider verhindert.",
    turkce: "O gün maalesef meşgulüm.",
    level: "B1",
    notes: "Meşguliyet ifadesi",
  },
  {
    cumle: "Können wir den Termin verschieben?",
    turkce: "Randevuyu erteleyebilir miyiz?",
    level: "B1",
    notes: "Randevu erteleme talebi",
  },
  {
    cumle: "Ich habe meine Brieftasche verloren.",
    turkce: "Cüzdanımı kaybettim.",
    level: "B1",
    notes: "Kayıp eşya belirtme",
  },
  {
    cumle: "Haben Sie mein Handy gesehen?",
    turkce: "Telefonumu gördünüz mü?",
    level: "B1",
    notes: "Eşya sorma",
  },
  {
    cumle: "Ich habe meinen Schlüssel vergessen.",
    turkce: "Anahtarımı unuttum.",
    level: "B1",
    notes: "Unutma ifadesi",
  },
  {
    cumle: "Können Sie mir den Weg zur Post beschreiben?",
    turkce: "Bana postaneye giden yolu tarif edebilir misiniz?",
    level: "B1",
    notes: "Yol tarifi isteme",
  },
  {
    cumle: "Wie lange dauert es zu Fuß?",
    turkce: "Yürüyerek ne kadar sürer?",
    level: "B1",
    notes: "Süre sorma",
  },
  {
    cumle: "Gibt es hier in der Nähe eine Bank?",
    turkce: "Buralarda bir banka var mı?",
    level: "B1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wo ist der nächste Supermarkt?",
    turkce: "En yakın süpermarket nerede?",
    level: "B1",
    notes: "Yer sorma",
  },

  // B1 SEVİYESİ - EV VE GÜNLÜK YAŞAM
  {
    cumle: "Ich suche eine Wohnung zu mieten.",
    turkce: "Kiralamak için bir daire arıyorum.",
    level: "B1",
    notes: "Kiralık ev arama",
  },
  {
    cumle: "Wie hoch ist die monatliche Miete?",
    turkce: "Aylık kira ne kadar?",
    level: "B1",
    notes: "Kira sorma",
  },
  {
    cumle: "Sind die Nebenkosten im Preis enthalten?",
    turkce: "Yan giderler fiyata dahil mi?",
    level: "B1",
    notes: "Ek masraf sorma",
  },
  {
    cumle: "Gibt es einen Aufzug im Gebäude?",
    turkce: "Binada asansör var mı?",
    level: "B1",
    notes: "Bina özelliği sorma",
  },
  {
    cumle: "Wie groß ist die Wohnung?",
    turkce: "Daire ne kadar büyük?",
    level: "B1",
    notes: "Daire boyutu sorma",
  },
  {
    cumle: "Die Heizung funktioniert nicht.",
    turkce: "Kalorifer çalışmıyor.",
    level: "B1",
    notes: "Arıza bildirme",
  },
  {
    cumle: "Der Wasserhahn tropft.",
    turkce: "Musluk damlıyor.",
    level: "B1",
    notes: "Arıza bildirme",
  },
  {
    cumle: "Ich muss die Waschmaschine reparieren lassen.",
    turkce: "Çamaşır makinesini tamir ettirmem gerekiyor.",
    level: "B1",
    notes: "Tamir talebi",
  },
  {
    cumle: "Können Sie es bitte reparieren?",
    turkce: "Lütfen tamir edebilir misiniz?",
    level: "B1",
    notes: "Kibar tamir talebi",
  },
  {
    cumle: "Wann kann der Techniker kommen?",
    turkce: "Teknisyen ne zaman gelebilir?",
    level: "B1",
    notes: "Zaman sorma",
  },

  // B1 SEVİYESİ - FİKİR VE TAVSİYE
  {
    cumle: "Was würden Sie an meiner Stelle tun?",
    turkce: "Benim yerimde olsaydınız ne yapardınız?",
    level: "B1",
    notes: "Tavsiye isteme",
  },
  {
    cumle: "Ich bin mir nicht sicher, was ich tun soll.",
    turkce: "Ne yapacağımdan emin değilim.",
    level: "B1",
    notes: "Kararsızlık ifadesi",
  },
  {
    cumle: "Haben Sie einen Vorschlag?",
    turkce: "Bir öneriniz var mı?",
    level: "B1",
    notes: "Öneri isteme",
  },
  {
    cumle: "Das ist eine gute Idee.",
    turkce: "Bu iyi bir fikir.",
    level: "B1",
    notes: "Olumlu tepki",
  },
  {
    cumle: "Ich bin nicht davon überzeugt.",
    turkce: "Buna ikna olmadım.",
    level: "B1",
    notes: "İkna olmama ifadesi",
  },
  {
    cumle: "Ich freue mich auf unser Treffen.",
    turkce: "Görüşmemizi dört gözle bekliyorum.",
    level: "B1",
    notes: "Heyecan ifadesi",
  },
  {
    cumle: "Ich bin gespannt auf Ihren Vortrag.",
    turkce: "Sunumunuzu merakla bekliyorum.",
    level: "B1",
    notes: "Merak ifadesi",
  },
  {
    cumle: "Es tut mir leid, dass ich zu spät gekommen bin.",
    turkce: "Geç kaldığım için özür dilerim.",
    level: "B1",
    notes: "Özür ifadesi",
  },
  {
    cumle: "Ich entschuldige mich für die Unannehmlichkeiten.",
    turkce: "Rahatsızlık için özür dilerim.",
    level: "B1",
    notes: "Resmi özür",
  },
  {
    cumle: "Ich bin mit dem Ergebnis nicht zufrieden.",
    turkce: "Sonuçtan memnun değilim.",
    level: "B1",
    notes: "Memnuniyetsizlik ifadesi",
  },
  {
    cumle: "Das hat meine Erwartungen nicht erfüllt.",
    turkce: "Bu beklentilerimi karşılamadı.",
    level: "B1",
    notes: "Hayal kırıklığı ifadesi",
  },
  {
    cumle: "Wir sollten das Problem so schnell wie möglich lösen.",
    turkce: "Bu sorunu mümkün olduğunca çabuk çözmeliyiz.",
    level: "B1",
    notes: "Acil çözüm önerisi",
  },
  {
    cumle: "Wir müssen eine Lösung finden.",
    turkce: "Bir çözüm bulmamız gerekiyor.",
    level: "B1",
    notes: "Çözüm gerekliliği",
  },

  // B1 SEVİYESİ - GELECEK PLANLARI VE GEÇMİŞ DENEYİMLER
  {
    cumle: "Ich habe vor, nächstes Jahr nach Deutschland zu reisen.",
    turkce: "Gelecek yıl Almanya'ya seyahat etmeyi planlıyorum.",
    level: "B1",
    notes: "Gelecek plan belirtme",
  },
  {
    cumle: "Was sind deine Pläne für die Zukunft?",
    turkce: "Gelecek için planların neler?",
    level: "B1",
    notes: "Plan sorma",
  },
  {
    cumle: "Ich möchte im Ausland studieren.",
    turkce: "Yurtdışında okumak istiyorum.",
    level: "B1",
    notes: "Hedef belirtme",
  },
  {
    cumle: "Ich will meine Deutschkenntnisse verbessern.",
    turkce: "Almanca bilgimi geliştirmek istiyorum.",
    level: "B1",
    notes: "Hedef belirtme",
  },
  {
    cumle: "Haben Sie schon einmal in der Türkei Urlaub gemacht?",
    turkce: "Hiç Türkiye'de tatil yaptınız mı?",
    level: "B1",
    notes: "Geçmiş deneyim sorma",
  },
  {
    cumle: "Ich war noch nie in Deutschland.",
    turkce: "Hiç Almanya'da bulunmadım.",
    level: "B1",
    notes: "Geçmiş deneyim belirtme",
  },
  {
    cumle: "Das war meine beste Reise.",
    turkce: "Bu benim en iyi seyahatimdi.",
    level: "B1",
    notes: "Geçmiş deneyim değerlendirme",
  },
  {
    cumle: "Ich habe viele interessante Menschen kennengelernt.",
    turkce: "Birçok ilginç insanla tanıştım.",
    level: "B1",
    notes: "Geçmiş deneyim belirtme",
  },

  // B1 SEVİYESİ - KOŞULLU CÜMLELER VE FİKİR BELİRTME
  {
    cumle: "Wenn ich Zeit hätte, würde ich mehr Sport treiben.",
    turkce: "Vaktim olsa, daha fazla spor yapardım.",
    level: "B1",
    notes: "Koşullu cümle (Konjunktiv II)",
  },
  {
    cumle: "Wenn das Wetter schön ist, gehen wir spazieren.",
    turkce: "Hava güzelse, yürüyüşe çıkarız.",
    level: "B1",
    notes: "Koşullu cümle",
  },
  {
    cumle: "Falls ich nicht rechtzeitig komme, fang ohne mich an.",
    turkce: "Eğer zamanında gelemezsem, bensiz başla.",
    level: "B1",
    notes: "Koşullu cümle",
  },
  {
    cumle: "Ich bin seit drei Jahren verheiratet.",
    turkce: "Üç yıldır evliyim.",
    level: "B1",
    notes: "Süre belirtme",
  },
  {
    cumle: "Ich wohne seit 2019 in dieser Stadt.",
    turkce: "2019'dan beri bu şehirde yaşıyorum.",
    level: "B1",
    notes: "Süre belirtme",
  },
  {
    cumle: "Wie lange kennst du ihn schon?",
    turkce: "Onu ne zamandır tanıyorsun?",
    level: "B1",
    notes: "Süre sorma",
  },
  {
    cumle: "Was sind die Vor- und Nachteile dieser Methode?",
    turkce: "Bu yöntemin avantajları ve dezavantajları nelerdir?",
    level: "B1",
    notes: "Değerlendirme sorma",
  },
  {
    cumle: "Einerseits ist es praktisch, andererseits ist es teuer.",
    turkce: "Bir yandan pratik, diğer yandan pahalı.",
    level: "B1",
    notes: "Karşılaştırma ifadesi",
  },
  {
    cumle: "Ich bin der Meinung, dass...",
    turkce: "Bence...",
    level: "B1",
    notes: "Fikir belirtme",
  },
  {
    cumle: "Meiner Ansicht nach ist das keine gute Idee.",
    turkce: "Bana göre bu iyi bir fikir değil.",
    level: "B1",
    notes: "Fikir belirtme",
  },
  {
    cumle: "Ich denke, wir sollten zuerst recherchieren.",
    turkce: "Bence önce araştırma yapmalıyız.",
    level: "B1",
    notes: "Öneri sunma",
  },

  // B1 SEVİYESİ - GÜNLÜK KONUŞMA İFADELERİ
  {
    cumle: "Es wäre besser, wenn wir früher anfangen würden.",
    turkce: "Daha erken başlasak daha iyi olurdu.",
    level: "B1",
    notes: "Koşullu öneri",
  },
  {
    cumle: "Könnten Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
    level: "B1",
    notes: "Tekrar isteme",
  },
  {
    cumle: "Ich habe nicht verstanden, was Sie meinen.",
    turkce: "Ne demek istediğinizi anlamadım.",
    level: "B1",
    notes: "Anlamama ifadesi",
  },
  {
    cumle: "Könnten Sie das anders formulieren?",
    turkce: "Bunu başka türlü ifade edebilir misiniz?",
    level: "B1",
    notes: "Yeniden ifade isteme",
  },
  {
    cumle: "Ich habe das Gefühl, dass etwas nicht stimmt.",
    turkce: "Bir şeylerin yanlış olduğu hissine kapılıyorum.",
    level: "B1",
    notes: "Sezgi ifadesi",
  },
  {
    cumle: "Ich bin mir nicht sicher, ob das funktionieren wird.",
    turkce: "Bunun işe yarayacağından emin değilim.",
    level: "B1",
    notes: "Belirsizlik ifadesi",
  },
  {
    cumle: "Wir müssen uns beeilen, sonst verpassen wir den Zug.",
    turkce: "Acele etmeliyiz, yoksa treni kaçıracağız.",
    level: "B1",
    notes: "Acil durum uyarısı",
  },
  {
    cumle: "Beeil dich, wir sind spät dran!",
    turkce: "Acele et, geç kaldık!",
    level: "B1",
    notes: "Acil durum çağrısı",
  },
  {
    cumle: "Ich bin mit deinem Vorschlag einverstanden.",
    turkce: "Önerinize katılıyorum.",
    level: "B1",
    notes: "Onay ifadesi",
  },
  {
    cumle: "Ich stimme dir voll und ganz zu.",
    turkce: "Sana tamamen katılıyorum.",
    level: "B1",
    notes: "Tam onay",
  },
  {
    cumle: "Da bin ich anderer Meinung.",
    turkce: "Bu konuda farklı düşünüyorum.",
    level: "B1",
    notes: "Fikir ayrılığı",
  },
  {
    cumle: "Darf ich Ihnen eine Frage stellen?",
    turkce: "Size bir soru sorabilir PRED miyim?",
    level: "B1",
    notes: "Kibar izin isteme",
  },
  {
    cumle: "Darf ich etwas vorschlagen?",
    turkce: "Bir şey önerebilir miyim?",
    level: "B1",
    notes: "Öneri sunma izni",
  },
  {
    cumle: "Es ist mir egal, was die anderen denken.",
    turkce: "Başkalarının ne düşündüğü umurumda değil.",
    level: "B1",
    notes: "Kayıtsızlık ifadesi",
  },
  {
    cumle: "Das spielt für mich keine Rolle.",
    turkce: "Bu benim için önemli değil.",
    level: "B1",
    notes: "Kayıtsızlık ifadesi",
  },

  // B1 SEVİYESİ - İŞ VE TOPLANTI İFADELERİ
  {
    cumle: "Können wir einen anderen Termin vereinbaren?",
    turkce: "Başka bir randevu ayarlayabilir miyiz?",
    level: "B1",
    notes: "Randevu değiştirme",
  },
  {
    cumle: "Der Termin passt mir leider nicht.",
    turkce: "Maalesef randevu bana uygun değil.",
    level: "B1",
    notes: "Randevu uygunluğu",
  },
  {
    cumle: "Können wir das Meeting auf nächste Woche verschieben?",
    turkce: "Toplantıyı gelecek haftaya erteleyebilir miyiz?",
    level: "B1",
    notes: "Toplantı erteleme",
  },
  {
    cumle: "Ich bin noch nicht fertig mit meiner Arbeit.",
    turkce: "İşimi henüz bitirmedim.",
    level: "B1",
    notes: "İş durumu belirtme",
  },
  {
    cumle: "Ich brauche noch etwas mehr Zeit.",
    turkce: "Biraz daha zamana ihtiyacım var.",
    level: "B1",
    notes: "Zaman talebi",
  },
  {
    cumle: "Die Frist ist zu knapp.",
    turkce: "Süre çok kısa.",
    level: "B1",
    notes: "Süre değerlendirme",
  },
  {
    cumle: "Können Sie mir die Unterlagen zuschicken?",
    turkce: "Bana belgeleri gönderebilir misiniz?",
    level: "B1",
    notes: "Belge talebi",
  },
  {
    cumle: "Ich habe die E-Mail noch nicht erhalten.",
    turkce: "E-postayı henüz almadım.",
    level: "B1",
    notes: "İletişim durumu",
  },
  {
    cumle: "Was halten Sie von diesem Vorschlag?",
    turkce: "Bu öneri hakkında ne düşünüyorsunuz?",
    level: "B1",
    notes: "Fikir sorma",
  },
  {
    cumle: "Das klingt vielversprechend.",
    turkce: "Bu umut verici görünüyor.",
    level: "B1",
    notes: "Olumlu değerlendirme",
  },
  {
    cumle: "Das überzeugt mich nicht.",
    turkce: "Bu beni ikna etmiyor.",
    level: "B1",
    notes: "İkna olmama ifadesi",
  },
  {
    cumle: "Ich finde es wichtig, dass wir darüber sprechen.",
    turkce: "Bunun hakkında konuşmamızın önemli olduğunu düşünüyorum.",
    level: "B1",
    notes: "Konuşma gerekliliği",
  },
  {
    cumle: "Wir sollten alle Aspekte berücksichtigen.",
    turkce: "Tüm yönleri göz önünde bulundurmalıyız.",
    level: "B1",
    notes: "Değerlendirme önerisi",
  },
  {
    cumle: "Haben Sie noch weitere Fragen?",
    turkce: "Başka sorularınız var mı?",
    level: "B1",
    notes: "Soru sorma",
  },

  // B1 SEVİYESİ - SOSYAL İLİŞKİLER
  {
    cumle: "Es tut mir leid, aber ich habe keine Zeit.",
    turkce: "Üzgünüm ama vaktim yok.",
    level: "B1",
    notes: "Zaman eksikliği ifadesi",
  },
  {
    cumle: "Ich bin momentan sehr beschäftigt.",
    turkce: "Şu anda çok meşgulüm.",
    level: "B1",
    notes: "Meşguliyet ifadesi",
  },
  {
    cumle: "Vielleicht ein andermal.",
    turkce: "Belki başka bir zaman.",
    level: "B1",
    notes: "Erteleme önerisi",
  },
  {
    cumle: "Ich freue mich, Sie kennenzulernen.",
    turkce: "Sizi tanıdığıma memnun oldum.",
    level: "B1",
    notes: "Tanışma ifadesi",
  },
  {
    cumle: "Es war ein schöner Abend mit Ihnen.",
    turkce: "Sizinle güzel bir akşamdı.",
    level: "B1",
    notes: "Olumlu deneyim",
  },
  {
    cumle: "Wir sollten öfter etwas zusammen unternehmen.",
    turkce: "Daha sık birlikte bir şeyler yapmalıyız.",
    level: "B1",
    notes: "Sosyal öneri",
  },
  {
    cumle: "Ich werde mein Bestes tun.",
    turkce: "Elimden geleni yapacağım.",
    level: "B1",
    notes: "Çaba sözü",
  },
  {
    cumle: "Sie können sich auf mich verlassen.",
    turkce: "Bana güvenebilirsiniz.",
    level: "B1",
    notes: "Güvence verme",
  },
  {
    cumle: "Ich stehe Ihnen gerne zur Verfügung.",
    turkce: "Memnuniyetle hizmetinizdeyim.",
    level: "B1",
    notes: "Yardım teklifi",
  },
  {
    cumle: "Ich wünsche Ihnen viel Erfolg!",
    turkce: "Size başarılar dilerim!",
    level: "B1",
    notes: "İyi dilek",
  },
  {
    cumle: "Gute Besserung!",
    turkce: "Geçmiş olsun!",
    level: "B1",
    notes: "Sağlık dileği",
  },
  {
    cumle: "Herzlichen Glückwunsch zum Geburtstag!",
    turkce: "Doğum günün kutlu olsun!",
    level: "B1",
    notes: "Tebrik ifadesi",
  },
  {
    cumle: "Frohe Weihnachten und ein gutes neues Jahr!",
    turkce: "Mutlu Noeller ve mutlu yıllar!",
    level: "B1",
    notes: "Tatil tebriği",
  },

  // B2 SEVİYESİ - DAHA KARMAŞIK İFADELER
  {
    cumle: "Es wäre mir lieb, wenn Sie das bis morgen erledigen könnten.",
    turkce: "Bunu yarına kadar halledebilirseniz sevinirim.",
    level: "B2",
    notes: "Kibar rica (Konjunktiv II)",
  },
  {
    cumle: "Ich würde mich freuen, wenn Sie meine Einladung annehmen würden.",
    turkce: "Davetimi kabul ederseniz sevinirim.",
    level: "B2",
    notes: "Kibar davet",
  },
  {
    cumle: "Obwohl ich mein Bestes gegeben habe, ist es mir nicht gelungen.",
    turkce: "Elimden gelenin en iyisini yapmama rağmen, başaramadım.",
    level: "B2",
    notes: "Zıtlık ifadesi",
  },
  {
    cumle: "Es ist wichtig, dass wir alle Möglichkeiten in Betracht ziehen.",
    turkce: "Tüm olasılıkları göz önünde bulundurmamız önemli.",
    level: "B2",
    notes: "Önem vurgusu",
  },
  {
    cumle: "Ich hätte es anders gemacht, wenn ich gewusst hätte, dass...",
    turkce: "Eğer bilseydim ki..., farklı yapardım.",
    level: "B2",
    notes: "Koşullu geçmiş (Konjunktiv II)",
  },
  {
    cumle: "Unter diesen Umständen sollten wir vorsichtig sein.",
    turkce: "Bu koşullar altında dikkatli olmalıyız.",
    level: "B2",
    notes: "Durum değerlendirme",
  },
  {
    cumle: "Im Großen und Ganzen bin ich mit dem Ergebnis zufrieden.",
    turkce: "Genel olarak sonuçtan memnunum.",
    level: "B2",
    notes: "Genel değerlendirme",
  },
  {
    cumle:
      "Einerseits verstehe ich Ihren Standpunkt, andererseits muss ich widersprechen.",
    turkce:
      "Bir yandan bakış açınızı anlıyorum, diğer yandan karşı çıkmak zorundayım.",
    level: "B2",
    notes: "Karşıt görüş sunma",
  },
  {
    cumle: "Soweit ich informiert bin, findet die Veranstaltung nicht statt.",
    turkce: "Bildiğim kadarıyla, etkinlik gerçekleşmeyecek.",
    level: "B2",
    notes: "Bilgi aktarımı",
  },
  {
    cumle: "Es liegt auf der Hand, dass wir eine Lösung finden müssen.",
    turkce: "Bir çözüm bulmamız gerektiği açıktır.",
    level: "B2",
    notes: "Açık gereklilik",
  },
  {
    cumle: "Wenn ich morgens aufstehe, trinke ich eine Tasse Kaffee.",
    turkce: "Sabah kalktığımda bir fincan kahve içerim.",
  },
  {
    cumle: "Wenn du Zeit hast, können wir ins Kino gehen.",
    turkce: "Zamanın varsa sinemaya gidebiliriz.",
  },
  {
    cumle: "Ich rufe dich an, wenn ich zu Hause bin.",
    turkce: "Eve vardığımda seni arayacağım.",
  },
  {
    cumle: "Wenn es regnet, nehme ich einen Regenschirm mit.",
    turkce: "Yağmur yağdığında yanıma şemsiye alırım.",
  },
  {
    cumle: "Wenn ich Deutsch lerne, notiere ich neue Wörter.",
    turkce: "Almanca öğrendiğimde yeni kelimeleri not alırım.",
  },
  {
    cumle: "Wenn ich Hunger habe, esse ich einen Apfel.",
    turkce: "Acıktığımda bir elma yerim.",
  },
  {
    cumle: "Wenn ich krank bin, bleibe ich zu Hause.",
    turkce: "Hasta olduğumda evde kalırım.",
  },
  {
    cumle: "Wenn du Hilfe brauchst, kannst du mich anrufen.",
    turkce: "Yardıma ihtiyacın olursa beni arayabilirsin.",
  },
  {
    cumle: "Wenn das Wetter schön ist, gehen wir spazieren.",
    turkce: "Hava güzel olduğunda yürüyüşe çıkarız.",
  },
  {
    cumle: "Wenn wir uns beeilen, erreichen wir den Bus.",
    turkce: "Acele edersek otobüse yetişiriz.",
  },
  // Obwohl cümleleri
  {
    cumle: "Obwohl es spät ist, bin ich nicht müde.",
    turkce: "Geç olmasına rağmen yorgun değilim.",
  },
  {
    cumle: "Obwohl ich krank bin, gehe ich zur Arbeit.",
    turkce: "Hasta olmama rağmen işe gidiyorum.",
  },
  {
    cumle: "Er geht joggen, obwohl es regnet.",
    turkce: "Yağmur yağmasına rağmen koşuya gidiyor.",
  },
  {
    cumle: "Obwohl sie kein Deutsch spricht, reist sie nach Deutschland.",
    turkce: "Almanca konuşmamasına rağmen Almanya'ya seyahat ediyor.",
  },
  {
    cumle: "Obwohl ich keine Zeit habe, helfe ich dir.",
    turkce: "Zamanım olmamasına rağmen sana yardım ediyorum.",
  },
  {
    cumle: "Sie ist glücklich, obwohl sie wenig Geld hat.",
    turkce: "Az parası olmasına rağmen mutlu.",
  },
  {
    cumle: "Obwohl er müde ist, lernt er noch.",
    turkce: "Yorgun olmasına rağmen hâlâ ders çalışıyor.",
  },
  {
    cumle: "Obwohl ich schon gegessen habe, habe ich noch Hunger.",
    turkce: "Yemek yemiş olmama rağmen hâlâ açım.",
  },
  {
    cumle: "Sie geht zu Fuß, obwohl sie ein Auto hat.",
    turkce: "Arabası olmasına rağmen yürüyerek gidiyor.",
  },
  {
    cumle: "Obwohl es schwierig ist, gebe ich nicht auf.",
    turkce: "Zor olmasına rağmen pes etmiyorum.",
  },
  // Ob cümleleri
  {
    cumle: "Ich weiß nicht, ob er heute kommt.",
    turkce: "Bugün gelip gelmeyeceğini bilmiyorum.",
  },
  {
    cumle: "Sie fragt, ob wir Zeit haben.",
    turkce: "Zamanımız olup olmadığını soruyor.",
  },
  {
    cumle: "Ich bin nicht sicher, ob das Restaurant geöffnet ist.",
    turkce: "Restoranın açık olup olmadığından emin değilim.",
  },
  {
    cumle: "Er will wissen, ob du mit ihm ins Kino gehst.",
    turkce: "Onunla sinemaya gidip gitmeyeceğini öğrenmek istiyor.",
  },
  {
    cumle: "Wir überlegen, ob wir in den Urlaub fahren.",
    turkce: "Tatile gidip gitmeyeceğimizi düşünüyoruz.",
  },
  {
    cumle: "Kannst du mir sagen, ob der Bus schon gefahren ist?",
    turkce: "Otobüsün çoktan gitmiş olup olmadığını bana söyleyebilir misin?",
  },
  {
    cumle: "Sie zweifelt, ob sie die richtige Entscheidung getroffen hat.",
    turkce: "Doğru kararı verip vermediğinden şüphe ediyor.",
  },
  {
    cumle: "Er fragt sich, ob er genug Geld hat.",
    turkce: "Yeterince parası olup olmadığını merak ediyor.",
  },
  {
    cumle: "Ich bin gespannt, ob das Film gut ist.",
    turkce: "Filmin iyi olup olmadığını merak ediyorum.",
  },
  {
    cumle: "Sie überlegt, ob sie eine neue Sprache lernen soll.",
    turkce: "Yeni bir dil öğrenip öğrenmemesi gerektiğini düşünüyor.",
  },
  // Dass cümleleri
  {
    cumle: "Ich freue mich, dass du kommst.",
    turkce: "Geldiğin için mutluyum.",
  },
  {
    cumle: "Er sagt, dass er morgen anrufen wird.",
    turkce: "Yarın arayacağını söylüyor.",
  },
  {
    cumle: "Ich hoffe, dass das Wetter schön wird.",
    turkce: "Havanın güzel olacağını umuyorum.",
  },
  {
    cumle: "Sie weiß, dass ich heute beschäftigt bin.",
    turkce: "Bugün meşgul olduğumu biliyor.",
  },
  {
    cumle: "Es ist gut, dass du mir hilfst.",
    turkce: "Bana yardım etmen iyi.",
  },
  {
    cumle: "Ich glaube, dass sie Recht hat.",
    turkce: "Onun haklı olduğunu düşünüyorum.",
  },
  {
    cumle: "Er ist traurig, dass du nicht kommen kannst.",
    turkce: "Gelemeyeceğin için üzgün.",
  },
  {
    cumle: "Ich bin sicher, dass wir uns wiedersehen.",
    turkce: "Tekrar görüşeceğimizden eminim.",
  },
  {
    cumle: "Sie denkt, dass es eine gute Idee ist.",
    turkce: "Bunun iyi bir fikir olduğunu düşünüyor.",
  },
  {
    cumle: "Es ist wichtig, dass du pünktlich bist.",
    turkce: "Dakik olman önemli.",
  },
  {
    cumle: "Wenn ich morgens aufstehe, trinke ich eine Tasse Kaffee.",
    turkce: "Sabah kalktığımda bir fincan kahve içerim.",
    level: "A2",
    notes: "Zaman veya koşul ifade eder",
  },
  {
    cumle: "Wenn du Zeit hast, können wir ins Kino gehen.",
    turkce: "Zamanın varsa sinemaya gidebiliriz.",
    level: "A2",
    notes: "Koşullu bir teklif",
  },
  {
    cumle: "Ich rufe dich an, wenn ich zu Hause bin.",
    turkce: "Eve vardığımda seni arayacağım.",
    level: "A2",
    notes: "Gelecekteki bir eylemi belirtir",
  },
  {
    cumle: "Wenn es regnet, nehme ich einen Regenschirm mit.",
    turkce: "Yağmur yağdığında yanıma şemsiye alırım.",
    level: "A2",
    notes: "Genel bir alışkanlık",
  },
  {
    cumle: "Wenn ich Deutsch lerne, notiere ich neue Wörter.",
    turkce: "Almanca öğrendiğimde yeni kelimeleri not alırım.",
    level: "A2",
    notes: "Düzenli bir eylem",
  },
  {
    cumle: "Wenn ich Hunger habe, esse ich einen Apfel.",
    turkce: "Acıktığımda bir elma yerim.",
    level: "A2",
    notes: "Koşullu bir alışkanlık",
  },
  {
    cumle: "Wenn ich krank bin, bleibe ich zu Hause.",
    turkce: "Hasta olduğumda evde kalırım.",
    level: "A2",
    notes: "Koşullu bir durum",
  },
  {
    cumle: "Wenn du Hilfe brauchst, kannst du mich anrufen.",
    turkce: "Yardıma ihtiyacın olursa beni arayabilirsin.",
    level: "A2",
    notes: "Yardım önerisi",
  },
  {
    cumle: "Wenn das Wetter schön ist, gehen wir spazieren.",
    turkce: "Hava güzel olduğunda yürüyüşe çıkarız.",
    level: "A2",
    notes: "Koşullu bir plan",
  },
  {
    cumle: "Wenn wir uns beeilen, erreichen wir den Bus.",
    turkce: "Acele edersek otobüse yetişiriz.",
    level: "A2",
    notes: "Koşullu bir sonuç",
  },

  // obwohl (rağmen)
  {
    cumle: "Obwohl es spät ist, bin ich nicht müde.",
    turkce: "Geç olmasına rağmen yorgun değilim.",
    level: "B1",
    notes: "Zıtlık ifade eder",
  },
  {
    cumle: "Obwohl ich krank bin, gehe ich zur Arbeit.",
    turkce: "Hasta olmama rağmen işe gidiyorum.",
    level: "B1",
    notes: "Zıt bir durum",
  },
  {
    cumle: "Er geht joggen, obwohl es regnet.",
    turkce: "Yağmur yağmasına rağmen koşuya gidiyor.",
    level: "B1",
    notes: "Hava koşuluna rağmen eylem",
  },
  {
    cumle: "Obwohl sie kein Deutsch spricht, reist sie nach Deutschland.",
    turkce: "Almanca konuşmamasına rağmen Almanya'ya seyahat ediyor.",
    level: "B1",
    notes: "Dil bariyerine rağmen",
  },
  {
    cumle: "Obwohl ich keine Zeit habe, helfe ich dir.",
    turkce: "Zamanım olmamasına rağmen sana yardım ediyorum.",
    level: "B1",
    notes: "Fedakarlık ifadesi",
  },
  {
    cumle: "Sie ist glücklich, obwohl sie wenig Geld hat.",
    turkce: "Az parası olmasına rağmen mutlu.",
    level: "B1",
    notes: "Maddi duruma rağmen mutluluk",
  },
  {
    cumle: "Obwohl er müde ist, lernt er noch.",
    turkce: "Yorgun olmasına rağmen hâlâ ders çalışıyor.",
    level: "B1",
    notes: "Azim göstergesi",
  },
  {
    cumle: "Obwohl ich schon gegessen habe, habe ich noch Hunger.",
    turkce: "Yemek yemiş olmama rağmen hâlâ açım.",
    level: "B1",
    notes: "Beklenmedik bir durum",
  },
  {
    cumle: "Sie geht zu Fuß, obwohl sie ein Auto hat.",
    turkce: "Arabası olmasına rağmen yürüyerek gidiyor.",
    level: "B1",
    notes: "Tercih zıtlığı",
  },
  {
    cumle: "Obwohl es schwierig ist, gebe ich nicht auf.",
    turkce: "Zor olmasına rağmen pes etmiyorum.",
    level: "B1",
    notes: "Kararlılık ifadesi",
  },

  // ob ( olup olmadığını)
  {
    cumle: "Ich weiß nicht, ob er heute kommt.",
    turkce: "Bugün gelip gelmeyeceğini bilmiyorum.",
    level: "B1",
    notes: "Belirsizlik sorgusu",
  },
  {
    cumle: "Sie fragt, ob wir Zeit haben.",
    turkce: "Zamanımız olup olmadığını soruyor.",
    level: "B1",
    notes: "Zaman sorgulama",
  },
  {
    cumle: "Ich bin nicht sicher, ob das Restaurant geöffnet ist.",
    turkce: "Restoranın açık olup olmadığından emin değilim.",
    level: "B1",
    notes: "Durum belirsizliği",
  },
  {
    cumle: "Er will wissen, ob du mit ihm ins Kino gehst.",
    turkce: "Onunla sinemaya gidip gitmeyeceğini öğrenmek istiyor.",
    level: "B1",
    notes: "Plan sorgulama",
  },
  {
    cumle: "Wir überlegen, ob wir in den Urlaub fahren.",
    turkce: "Tatile gidip gitmeyeceğimizi düşünüyoruz.",
    level: "B1",
    notes: "Karar verme süreci",
  },
  {
    cumle: "Kannst du mir sagen, ob der Bus schon gefahren ist?",
    turkce: "Otobüsün çoktan gitmiş olup olmadığını bana söyleyebilir misin?",
    level: "B1",
    notes: "Geçmiş durum sorgusu",
  },
  {
    cumle: "Sie zweifelt, ob sie die richtige Entscheidung getroffen hat.",
    turkce: "Doğru kararı verip vermediğinden şüphe ediyor.",
    level: "B2",
    notes: "Karar sorgulama",
  },
  {
    cumle: "Er fragt sich, ob er genug Geld hat.",
    turkce: "Yeterince parası olup olmadığını merak ediyor.",
    level: "B2",
    notes: "Maddi durum sorgusu",
  },
  {
    cumle: "Ich bin gespannt, ob das Film gut ist.",
    turkce: "Filmin iyi olup olmadığını merak ediyorum.",
    level: "B2",
    notes: "Merak ifadesi",
  },
  {
    cumle: "Sie überlegt, ob sie eine neue Sprache lernen soll.",
    turkce: "Yeni bir dil öğrenip öğrenmemesi gerektiğini düşünüyor.",
    level: "B2",
    notes: "Gelecek plan sorgusu",
  },

  // dass (-dığı için, -diğini)
  {
    cumle: "Ich freue mich, dass du kommst.",
    turkce: "Geldiğin için mutluyum.",
    level: "B1",
    notes: "Sebep veya duygu ifadesi",
  },
  {
    cumle: "Er sagt, dass er morgen anrufen wird.",
    turkce: "Yarın arayacağını söylüyor.",
    level: "B1",
    notes: "Dolaylı anlatım",
  },
  {
    cumle: "Ich hoffe, dass das Wetter schön wird.",
    turkce: "Havanın güzel olacağını umuyorum.",
    level: "B1",
    notes: "Umut ifadesi",
  },
  {
    cumle: "Sie weiß, dass ich heute beschäftigt bin.",
    turkce: "Bugün meşgul olduğumu biliyor.",
    level: "B1",
    notes: "Bilgi aktarımı",
  },
  {
    cumle: "Es ist gut, dass du mir hilfst.",
    turkce: "Bana yardım etmen iyi.",
    level: "B1",
    notes: "Olumlu bir durum",
  },
  {
    cumle: "Ich glaube, dass sie Recht hat.",
    turkce: "Onun haklı olduğunu düşünüyorum.",
    level: "B1",
    notes: "Fikir belirtme",
  },
  {
    cumle: "Er ist traurig, dass du nicht kommen kannst.",
    turkce: "Gelemeyeceğin için üzgün.",
    level: "B1",
    notes: "Üzüntü ifadesi",
  },
  {
    cumle: "Ich bin sicher, dass wir uns wiedersehen.",
    turkce: "Tekrar görüşeceğimizden eminim.",
    level: "B1",
    notes: "Güven ifadesi",
  },
  {
    cumle: "Sie denkt, dass es eine gute Idee ist.",
    turkce: "Bunun iyi bir fikir olduğunu düşünüyor.",
    level: "B1",
    notes: "Fikir aktarımı",
  },
  {
    cumle: "Es ist wichtig, dass du pünktlich bist.",
    turkce: "Dakik olman önemli.",
    level: "B1",
    notes: "Önem vurgusu",
  },
  {
    cumle: "Ich kann Deutsch sprechen.",
    turkce: "Almanca konuşabilirim.",
    level: "A1",
  },
  {
    cumle: "Kannst du mir helfen?",
    turkce: "Bana yardım edebilir misin?",
    level: "A1",
  },
  {
    cumle: "Wir können morgen ins Kino gehen.",
    turkce: "Yarın sinemaya gidebiliriz.",
    level: "A1",
  },
  {
    cumle: "Sie kann sehr gut kochen.",
    turkce: "O çok iyi yemek yapabilir.",
    level: "A1",
  },
  {
    cumle: "Ich konnte gestern nicht schlafen.",
    turkce: "Dün uyuyamadım.",
    level: "A2",
  },
  {
    cumle: "Man kann hier nicht parken.",
    turkce: "Burada park edilemez.",
    level: "A2",
  },
  {
    cumle: "Könntest du bitte das Fenster öffnen?",
    turkce: "Lütfen pencereyi açabilir misin?",
    level: "B1",
  },
  {
    cumle: "Ich könnte dir mein Auto leihen.",
    turkce: "Sana arabamı ödünç verebilirim.",
    level: "B1",
  },
  {
    cumle: "Das kann nicht wahr sein!",
    turkce: "Bu doğru olamaz!",
    level: "B1",
  },
  {
    cumle: "Sie können den Antrag online ausfüllen.",
    turkce: "Başvuruyu çevrimiçi doldurabilirsiniz.",
    level: "B2",
  },

  // dürfen (izinli olmak)
  { cumle: "Darf ich fragen?", turkce: "Sorabilir miyim?", level: "A1" },
  {
    cumle: "Du darfst hier nicht rauchen.",
    turkce: "Burada sigara içemezsin.",
    level: "A1",
  },
  {
    cumle: "Wir dürfen heute länger bleiben.",
    turkce: "Bugün daha uzun kalabiliriz.",
    level: "A1",
  },
  {
    cumle: "Darf ich Ihnen helfen?",
    turkce: "Size yardım edebilir miyim?",
    level: "A1",
  },
  {
    cumle: "Die Kinder dürfen nicht allein draußen spielen.",
    turkce: "Çocuklar dışarıda yalnız oynayamazlar.",
    level: "A2",
  },
  {
    cumle: "Hier darf man fotografieren.",
    turkce: "Burada fotoğraf çekilebilir.",
    level: "A2",
  },
  {
    cumle: "Dürfte ich kurz Ihr Handy benutzen?",
    turkce: "Kısa bir süre telefonunuzu kullanabilir miyim?",
    level: "B1",
  },
  {
    cumle: "Sie dürfen die Unterlagen mitnehmen.",
    turkce: "Belgeleri yanınıza alabilirsiniz.",
    level: "B1",
  },
  {
    cumle: "Das dürfte kein Problem sein.",
    turkce: "Bu bir sorun olmamalı.",
    level: "B2",
  },
  {
    cumle: "Ab 18 Jahren darf man Auto fahren.",
    turkce: "18 yaşından itibaren araba kullanmak serbesttir.",
    level: "B2",
  },

  // müssen (zorunda olmak)
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
    level: "A1",
  },
  {
    cumle: "Musst du arbeiten?",
    turkce: "Çalışmak zorunda mısın?",
    level: "A1",
  },
  {
    cumle: "Wir müssen um 8 Uhr aufstehen.",
    turkce: "Saat 8'de kalkmak zorundayız.",
    level: "A1",
  },
  {
    cumle: "Sie muss heute zum Arzt.",
    turkce: "Bugün doktora gitmek zorunda.",
    level: "A1",
  },
  {
    cumle: "Ich musste lange warten.",
    turkce: "Uzun süre beklemek zorunda kaldım.",
    level: "A2",
  },
  {
    cumle: "Man muss hier ein Ticket kaufen.",
    turkce: "Burada bilet satın almak gerekiyor.",
    level: "A2",
  },
  {
    cumle: "Du musst nicht alles essen.",
    turkce: "Her şeyi yemek zorunda değilsin.",
    level: "A2",
  },
  {
    cumle: "Wir müssen unbedingt darüber sprechen.",
    turkce: "Bu konuda kesinlikle konuşmalıyız.",
    level: "B1",
  },
  {
    cumle: "Das muss ein Irrtum sein.",
    turkce: "Bu bir hata olmalı.",
    level: "B1",
  },
  {
    cumle: "Sie müssen den Antrag bis Freitag einreichen.",
    turkce: "Başvuruyu Cuma gününe kadar sunmanız gerekiyor.",
    level: "B2",
  },

  // sollen (gerekli olmak)
  {
    cumle: "Soll ich dir helfen?",
    turkce: "Sana yardım edeyim mi?",
    level: "A1",
  },
  {
    cumle: "Du sollst pünktlich sein.",
    turkce: "Dakik olmalısın.",
    level: "A1",
  },
  {
    cumle: "Wir sollen heute früh schlafen.",
    turkce: "Bugün erken uyumalıyız.",
    level: "A1",
  },
  { cumle: "What soll ich kochen?", turkce: "Ne pişirmeliyim?", level: "A1" },
  {
    cumle: "Sollte ich einen Regenschirm mitnehmen?",
    turkce: "Şemsiye almalı mıyım?",
    level: "A2",
  },
  {
    cumle: "Man soll jeden Tag Obst essen.",
    turkce: "Her gün meyve yemelidir.",
    level: "A2",
  },
  {
    cumle: "Er soll sehr nett sein.",
    turkce: "O çok nazik olmalı/öyle söyleniyor.",
    level: "B1",
  },
  {
    cumle: "Du solltest mehr Sport treiben.",
    turkce: "Daha fazla spor yapmalısın.",
    level: "B1",
  },
  {
    cumle: "Das sollte eigentlich funktionieren.",
    turkce: "Bu aslında çalışması gerekiyor.",
    level: "B2",
  },
  {
    cumle: "Sie sollen den Arzt sofort anrufen.",
    turkce: "Doktoru hemen aramalısınız.",
    level: "B2",
  },

  // wollen (istemek)
  {
    cumle: "Ich will nach Hause gehen.",
    turkce: "Eve gitmek istiyorum.",
    level: "A1",
  },
  {
    cumle: "Willst du einen Kaffee?",
    turkce: "Kahve ister misin?",
    level: "A1",
  },
  {
    cumle: "Wir wollen am Wochenende wandern.",
    turkce: "Hafta sonu yürüyüşe çıkmak istiyoruz.",
    level: "A1",
  },
  {
    cumle: "Sie will Ärztin werden.",
    turkce: "Doktor olmak istiyor.",
    level: "A1",
  },
  {
    cumle: "Ich wollte dich anrufen.",
    turkce: "Seni aramak istedim.",
    level: "A2",
  },
  {
    cumle: "Was willst du damit sagen?",
    turkce: "Bununla ne demek istiyorsun?",
    level: "A2",
  },
  {
    cumle: "Er will uns nicht helfen.",
    turkce: "Bize yardım etmek istemiyor.",
    level: "A2",
  },
  {
    cumle: "Wir wollten eigentlich schon früher kommen.",
    turkce: "Aslında daha erken gelmek istedik.",
    level: "B1",
  },
  {
    cumle: "Sie will unbedingt diese Stelle bekommen.",
    turkce: "Bu pozisyonu kesinlikle almak istiyor.",
    level: "B1",
  },
  {
    cumle: "Ich will, dass du ehrlich bist.",
    turkce: "Dürüst olmanı istiyorum.",
    level: "B2",
  },

  // mögen/möchten (hoşlanmak/istemek)
  { cumle: "Ich mag Schokolade.", turkce: "Çikolatayı severim.", level: "A1" },
  { cumle: "Magst du Tiere?", turkce: "Hayvanları sever misin?", level: "A1" },
  {
    cumle: "Möchtest du etwas trinken?",
    turkce: "Bir şeyler içmek ister misin?",
    level: "A1",
  },
  {
    cumle: "Wir möchten bestellen.",
    turkce: "Sipariş vermek istiyoruz.",
    level: "A1",
  },
  { cumle: "Er mag keine Äpfel.", turkce: "Elmaları sevmez.", level: "A1" },
  {
    cumle: "Ich möchte gern nach Berlin fahren.",
    turkce: "Berlin'e gitmek isterim.",
    level: "A2",
  },
  {
    cumle: "Sie mögen klassische Musik.",
    turkce: "Klasik müziği severler.",
    level: "A2",
  },
  {
    cumle: "Möchten Sie einen Termin vereinbaren?",
    turkce: "Bir randevu ayarlamak ister misiniz?",
    level: "B1",
  },
  {
    cumle: "Ich mochte diesen Film nicht.",
    turkce: "Bu filmi sevmedim.",
    level: "B1",
  },
  {
    cumle: "Er möchte sich bei Ihnen für die Hilfe bedanken.",
    turkce:
      "Yardımınız Animations for card transitions using libraries like `framer-motion`. için size teşekkür etmek istiyor.",
    level: "B2",
  },
  {
    cumle: "Ich hätte gern einen Kaffee.",
    turkce: "Bir kahve almak isterdim.",
    level: "A1",
    notes: "Nezaket ifadesi olarak",
  },
  {
    cumle: "Könntest du mir bitte helfen?",
    turkce: "Bana yardım edebilir misin lütfen?",
    level: "A1",
    notes: "Kibar rica",
  },
  {
    cumle: "Ich würde gerne Deutsch lernen.",
    turkce: "Almanca öğrenmek isterdim.",
    level: "A1",
    notes: "İstek ifade etme",
  },
  {
    cumle: "Wärst du so nett?",
    turkce: "Nazik olur muydun?",
    level: "A1",
    notes: "Rica ifadesi",
  },
  {
    cumle: "Ich möchte ein Wasser, bitte.",
    turkce: "Bir su isterdim, lütfen.",
    level: "A1",
    notes: "Sipariş verme",
  },
  {
    cumle: "Das wäre schön!",
    turkce: "Bu güzel olurdu!",
    level: "A1",
    notes: "Beğeni ifadesi",
  },
  {
    cumle: "Hättest du Zeit morgen?",
    turkce: "Yarın vaktin olur muydu?",
    level: "A1",
    notes: "Zaman sorma",
  },
  {
    cumle: "Würdest du mir das Salz geben?",
    turkce: "Bana tuzu verir misin?",
    level: "A1",
    notes: "Masa başı rica",
  },
  {
    cumle: "Es wäre gut für dich.",
    turkce: "Senin için iyi olurdu.",
    level: "A1",
    notes: "Öneri/tavsiye",
  },
  {
    cumle: "Ich würde gerne bezahlen.",
    turkce: "Ödemek isterdim.",
    level: "A1",
    notes: "Restoranda ödeme isteği",
  },
  {
    cumle: "Könnten Sie langsamer sprechen?",
    turkce: "Daha yavaş konuşabilir misiniz?",
    level: "A1",
    notes: "Dil öğrenirken rica",
  },
  {
    cumle: "Das wäre alles, danke.",
    turkce: "Hepsi bu kadar olurdu, teşekkürler.",
    level: "A1",
    notes: "Alışveriş sonlandırma",
  },
  {
    cumle: "Ich hätte eine Frage.",
    turkce: "Bir sorum olurdu/var.",
    level: "A1",
    notes: "Soru sorma girişi",
  },
  {
    cumle: "Wäre das möglich?",
    turkce: "Bu mümkün olur muydu?",
    level: "A1",
    notes: "İmkan sorma",
  },
  {
    cumle: "Würdest du mir einen Gefallen tun?",
    turkce: "Bana bir iyilik yapar mısın?",
    level: "A1",
    notes: "Rica etme",
  },
  {
    cumle: "Ich hätte gern die Rechnung.",
    turkce: "Hesabı almak isterdim.",
    level: "A1",
    notes: "Restoranda hesap isteme",
  },
  {
    cumle: "Das würde ich nicht machen.",
    turkce: "Bunu yapmazdım.",
    level: "A1",
    notes: "Basit tavsiye",
  },
  {
    cumle: "Könnten Sie mir zeigen, wie das geht?",
    turkce: "Bana bunun nasıl yapıldığını gösterebilir misiniz?",
    level: "A1",
    notes: "Yardım isteme",
  },
  {
    cumle: "Ich wäre froh, wenn du kommst.",
    turkce: "Gelirsen sevinirim.",
    level: "A1",
    notes: "Davet ifadesi",
  },
  {
    cumle: "Würdest du mir einen Tee bringen?",
    turkce: "Bana bir çay getirir misin?",
    level: "A1",
    notes: "Rica",
  },

  // A2 Seviyesi (21-40)
  {
    cumle: "Wenn ich Zeit hätte, würde ich ins Kino gehen.",
    turkce: "Zamanım olsaydı, sinemaya giderdim.",
    level: "A2",
    notes: "Basit şartlı cümle",
  },
  {
    cumle: "An deiner Stelle würde ich früher aufstehen.",
    turkce: "Senin yerinde olsaydım daha erken kalkardım.",
    level: "A2",
    notes: "Tavsiye verme",
  },
  {
    cumle: "Ich wünschte, ich könnte schwimmen.",
    turkce: "Keşke yüzebilseydim.",
    level: "A2",
    notes: "Dilek ifadesi",
  },
  {
    cumle: "Was würdest du in meiner Situation tun?",
    turkce: "Benim durumumda ne yapardın?",
    level: "A2",
    notes: "Tavsiye isteme",
  },
  {
    cumle: "Wenn es nicht regnen würde, könnten wir spazieren gehen.",
    turkce: "Yağmur yağmasaydı, yürüyüşe çıkabilirdik.",
    level: "A2",
    notes: "Koşullu ifade",
  },
  {
    cumle: "Ich hätte gern eine größere Wohnung.",
    turkce: "Daha büyük bir eve sahip olmak isterdim.",
    level: "A2",
    notes: "İstek belirtme",
  },
  {
    cumle: "Es wäre besser, wenn du jetzt anrufen würdest.",
    turkce: "Şimdi arasan daha iyi olurdu.",
    level: "A2",
    notes: "Öneri",
  },
  {
    cumle: "Ohne deine Hilfe hätte ich es nicht geschafft.",
    turkce: "Senin yardımın olmadan başaramazdım.",
    level: "A2",
    notes: "Minnettarlık",
  },
  {
    cumle: "Würdest du mir deinen Stift leihen?",
    turkce: "Kalemini bana ödünç verir misin?",
    level: "A2",
    notes: "Rica",
  },
  {
    cumle: "Wenn ich mehr Geld hätte, würde ich reisen.",
    turkce: "Daha fazla param olsaydı, seyahat ederdim.",
    level: "A2",
    notes: "Hayali durum",
  },
  {
    cumle: "Es wäre schön, wenn du mitkommen könntest.",
    turkce: "Gelirsen güzel olurdu.",
    level: "A2",
    notes: "Davet",
  },
  {
    cumle: "Ich würde lieber zu Hause bleiben.",
    turkce: "Evde kalmayı tercih ederdim.",
    level: "A2",
    notes: "Tercih belirtme",
  },
  {
    cumle: "Könntest du mir bei den Hausaufgaben helfen?",
    turkce: "Ödevlerimde bana yardım edebilir misin?",
    level: "A2",
    notes: "Yardım isteme",
  },
  {
    cumle: "Wenn das Wetter schön wäre, würden wir grillen.",
    turkce: "Hava güzel olsaydı, mangal yapardık.",
    level: "A2",
    notes: "Koşullu etkinlik",
  },
  {
    cumle: "Ich würde dir gerne meine Stadt zeigen.",
    turkce: "Sana şehrimi göstermek isterdim.",
    level: "A2",
    notes: "İstek",
  },
  {
    cumle: "Hättest du Lust, ins Kino zu gehen?",
    turkce: "Sinemaya gitmeye hevesli olur muydun?",
    level: "A2",
    notes: "Davet",
  },
  {
    cumle: "Was würdest du mit einer Million Euro machen?",
    turkce: "Bir milyon Euro ile ne yapardın?",
    level: "A2",
    notes: "Hayali durum",
  },
  {
    cumle: "Ich hätte lieber einen Tee als Kaffee.",
    turkce: "Kahve yerine çay tercih ederdim.",
    level: "A2",
    notes: "Tercih",
  },
  {
    cumle: "Wenn ich du wäre, würde ich nicht so viel arbeiten.",
    turkce: "Ben sen olsaydım, bu kadar çok çalışmazdım.",
    level: "A2",
    notes: "Tavsiye",
  },
  {
    cumle: "Es wäre toll, wenn wir uns bald wiedersehen könnten.",
    turkce: "Yakında tekrar görüşebilsek harika olurdu.",
    level: "A2",
    notes: "Dilek",
  },

  // B1 Seviyesi (41-60)
  {
    cumle:
      "Wenn ich mehr Zeit gehabt hätte, hätte ich den Film fertig gesehen.",
    turkce: "Daha fazla zamanım olsaydı, filmi bitirmiş olurdum.",
    level: "B1",
    notes: "Geçmişteki hayali durum",
  },
  {
    cumle: "An deiner Stelle hätte ich anders gehandelt.",
    turkce: "Senin yerinde olsaydım, farklı davranırdım.",
    level: "B1",
    notes: "Geçmiş için tavsiye",
  },
  {
    cumle: "Ich würde gerne wissen, ob du Zeit hättest.",
    turkce: "Zamanın olup olmadığını bilmek isterdim.",
    level: "B1",
    notes: "Dolaylı soru",
  },
  {
    cumle: "Ohne den Stau wären wir pünktlich angekommen.",
    turkce: "Trafik sıkışıklığı olmasaydı, zamanında varmış olurduk.",
    level: "B1",
    notes: "Geçmişteki imkansız durum",
  },
  {
    cumle: "Es wäre besser gewesen, wenn du früher gekommen wärst.",
    turkce: "Daha erken gelseydin daha iyi olurdu.",
    level: "B1",
    notes: "Pişmanlık ifadesi",
  },
  {
    cumle: "Könntest du mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misin?",
    level: "B1",
    notes: "Açıklama isteme",
  },
  {
    cumle: "Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.",
    turkce: "Zengin olsaydım, deniz kenarında bir ev alırdım.",
    level: "B1",
    notes: "Hayali gelecek planı",
  },
  {
    cumle: "Ich hätte nicht gedacht, dass es so schwer sein würde.",
    turkce: "Bu kadar zor olacağını düşünmezdim.",
    level: "B1",
    notes: "Beklentinin tersine durum",
  },
  {
    cumle:
      "Wenn das Wetter besser gewesen wäre, hätten wir einen Ausflug gemacht.",
    turkce: "Hava daha iyi olsaydı, bir geziye çıkmış olurduk.",
    level: "B1",
    notes: "Geçmişteki imkansız etkinlik",
  },
  {
    cumle: "Was hättest du an meiner Stelle getan?",
    turkce: "Benim yerimde olsaydın ne yapardın?",
    level: "B1",
    notes: "Geçmiş hakkında fikir sorma",
  },
  {
    cumle: "Ich wünschte, ich könnte fliegen.",
    turkce: "Keşke uçabilseydim.",
    level: "B1",
    notes: "İmkansız dilek",
  },
  {
    cumle: "Es hätte dir gefallen, wenn du dabei gewesen wärst.",
    turkce: "Orada olsaydın, hoşuna giderdi.",
    level: "B1",
    notes: "Geçmiş hakkında varsayım",
  },
  {
    cumle:
      "Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst.",
    turkce: "Daha erken yola çıksaydım, treni kaçırmazdım.",
    level: "B1",
    notes: "Pişmanlık",
  },
  {
    cumle: "Hätte ich das gewusst, hätte ich anders entschieden.",
    turkce: "Bunu bilseydim, farklı karar verirdim.",
    level: "B1",
    notes: "Pişmanlık",
  },
  {
    cumle: "Ich würde dir gerne helfen, aber ich habe keine Zeit.",
    turkce: "Sana yardım etmek isterdim ama zamanım yok.",
    level: "B1",
    notes: "İmkansız istek",
  },
  {
    cumle: "Sie sieht aus, als ob sie müde wäre.",
    turkce: "Yorgunmuş gibi görünüyor.",
    level: "B1",
    notes: "Benzetme",
  },
  {
    cumle: "Wenn es nach mir ginge, würden wir sofort abreisen.",
    turkce: "Bana kalsaydı, hemen yola çıkardık.",
    level: "B1",
    notes: "Kişisel tercih",
  },
  {
    cumle: "Ich hätte nie gedacht, dass du das schaffen würdest.",
    turkce: "Bunu başaracağını hiç düşünmezdim.",
    level: "B1",
    notes: "Şaşkınlık ifadesi",
  },
  {
    cumle: "Es wäre schön, wenn wir mehr Zeit füreinander hätten.",
    turkce: "Birbirimiz için daha fazla zamanımız olsaydı güzel olurdu.",
    level: "B1",
    notes: "İstek",
  },
  {
    cumle:
      "Wenn du mich früher angerufen hättest, hätte ich dir helfen können.",
    turkce: "Beni daha erken arasaydın, sana yardım edebilirdim.",
    level: "B1",
    notes: "Geçmişteki imkansız yardım",
  },

  // B2 Seviyesi (61-100)
  {
    cumle: "Hätte ich doch bloß auf dich gehört!",
    turkce: "Keşke seni dinleseydim!",
    level: "B2",
    notes: "Pişmanlık ünlemi",
  },
  {
    cumle: "Selbst wenn ich es gewollt hätte, hätte ich nichts ändern können.",
    turkce: "İsteseydim bile, hiçbir şeyi değiştiremezdim.",
    level: "B2",
    notes: "İmkansızlık vurgusu",
  },
  {
    cumle: "Als hätten wir nicht genug Probleme!",
    turkce: "Sanki yeterince sorunumuz yokmuş gibi!",
    level: "B2",
    notes: "İroni",
  },
  {
    cumle:
      "Wenn du mir damals geholfen hättest, wäre ich jetzt nicht in dieser Situation.",
    turkce: "O zaman bana yardım etseydin, şimdi bu durumda olmazdım.",
    level: "B2",
    notes: "Nedensellik bağlantısı",
  },
  {
    cumle: "Es sei denn, du hättest eine bessere Idee.",
    turkce: "Daha iyi bir fikrin olmadığı sürece.",
    level: "B2",
    notes: "Koşullu istisna",
  },
  {
    cumle: "Das hätte ich dir gleich sagen können!",
    turkce: "Bunu sana hemen söyleyebilirdim!",
    level: "B2",
    notes: "Öngörü ifadesi",
  },
  {
    cumle: "Ich täte das nicht, wenn ich du wäre.",
    turkce: "Ben sen olsaydım bunu yapmazdım.",
    level: "B2",
    notes: "Alternatif konjunktiv II formu",
  },
  {
    cumle: "Wenn du nur ein bisschen vorsichtiger gewesen wärest!",
    turkce: "Keşke biraz daha dikkatli olsaydın!",
    level: "B2",
    notes: "Eleştirel pişmanlık",
  },
  {
    cumle: "Man könnte meinen, er hätte noch nie einen Computer benutzt.",
    turkce: "Sanki hiç bilgisayar kullanmamış gibi düşünülebilir.",
    level: "B2",
    notes: "Kınayıcı benzetme",
  },
  {
    cumle: "Es wäre schön gewesen, wenn du Bescheid gesagt hättest.",
    turkce: "Haber verseydin güzel olurdu.",
    level: "B2",
    notes: "Nezaket içeren sitem",
  },
  {
    cumle:
      "Ich hätte schwören können, dass ich den Schlüssel hier gelassen habe.",
    turkce: "Anahtarı buraya koyduğuma yemin edebilirdim.",
    level: "B2",
    notes: "Güçlü inanç",
  },
  {
    cumle: "Sie tat so, als ob sie mich nicht gesehen hätte.",
    turkce: "Beni görmemiş gibi davrandı.",
    level: "B2",
    notes: "Davranış betimleme",
  },
  {
    cumle:
      "Ohne deine Unterstützung wäre dieses Projekt nie zustande gekommen.",
    turkce: "Senin desteğin olmadan bu proje asla gerçekleşmezdi.",
    level: "B2",
    notes: "Minnettarlık",
  },
  {
    cumle: "Das hätte ins Auge gehen können!",
    turkce: "Bu kötü sonuçlanabilirdi!",
    level: "B2",
    notes: "Tehlikeli durum",
  },
  {
    cumle: "Man sollte meinen, er wäre klüger gewesen.",
    turkce: "Daha akıllı olduğunu düşünebilirdin.",
    level: "B2",
    notes: "Hayal kırıklığı",
  },
  {
    cumle: "An Ihrer Stelle würde ich die Finger davon lassen.",
    turkce: "Sizin yerinizde olsaydım, ona dokunmazdım.",
    level: "B2",
    notes: "Güçlü uyarı",
  },
  {
    cumle: "Ich hätte nie gedacht, dass es so weit kommen würde.",
    turkce: "İşin bu kadar ilerleyeceğini hiç düşünmezdim.",
    level: "B2",
    notes: "Şaşkınlık",
  },
  {
    cumle: "Es hätte schlimmer kommen können.",
    turkce: "Daha kötü olabilirdi.",
    level: "B2",
    notes: "Teselli",
  },
  {
    cumle: "Ich würde zu gerne wissen, was sie dazu gesagt hätte.",
    turkce: "Buna ne diyeceğini çok merak ederdim.",
    level: "B2",
    notes: "Merak/ilgi",
  },
  {
    cumle: "Hätte ich das Geld, würde ich sofort eine Weltreise machen.",
    turkce: "Param olsaydı, hemen dünya turuna çıkardım.",
    level: "B2",
    notes: "Hayali plan",
  },
  {
    cumle: "Das hätte ich mir denken können!",
    turkce: "Bunu düşünebilirdim!",
    level: "B2",
    notes: "Kendini eleştirme",
  },
  {
    cumle:
      "Wenn du ehrlich gewesen wärst, hätten wir das Problem längst gelöst.",
    turkce: "Dürüst olsaydın, sorunu çoktan çözmüş olurduk.",
    level: "B2",
    notes: "Eleştiri",
  },
  {
    cumle: "Da wäre ich mir nicht so sicher.",
    turkce: "Bu konuda bu kadar emin olmazdım.",
    level: "B2",
    notes: "Kuşku ifadesi",
  },
  {
    cumle: "Es wäre besser gewesen, wenn wir den anderen Weg genommen hätten.",
    turkce: "Diğer yolu seçseydik daha iyi olurdu.",
    level: "B2",
    notes: "Karar eleştirisi",
  },
  {
    cumle: "Als ob ich nichts Besseres zu tun hätte!",
    turkce: "Sanki yapacak daha iyi bir işim yokmuş gibi!",
    level: "B2",
    notes: "Sinirli tepki",
  },
  {
    cumle: "Solltest du Hilfe benötigen, wäre ich gerne für dich da.",
    turkce:
      "Yardıma ihtiyacın olursa, sana yardım etmekten memnuniyet duyarım.",
    level: "B2",
    notes: "Destek önerisi",
  },
  {
    cumle: "Hätte, hätte, Fahrradkette!",
    turkce: "Keşke keşke, bisiklet zinciri!",
    level: "B2",
    notes: "Alman atasözü: Sürekli 'keşke' demenin anlamsızlığı",
  },
  {
    cumle: "Es sähe besser aus, wenn du die Farben anders kombiniert hättest.",
    turkce: "Renkleri farklı kombine etseydin daha iyi görünürdü.",
    level: "B2",
    notes: "Estetik tavsiye",
  },
  {
    cumle: "Ich wäre fast gestorben vor Angst!",
    turkce: "Korkudan neredeyse ölecektim!",
    level: "B2",
    notes: "Abartı",
  },
  {
    cumle: "Diese Aufgabe hätte eigentlich nicht so schwierig sein sollen.",
    turkce: "Bu görev aslında bu kadar zor olmamalıydı.",
    level: "B2",
    notes: "Beklenti-gerçeklik tezatlığı",
  },
  {
    cumle: "Man könnte fast denken, du hättest das mit Absicht getan.",
    turkce: "Neredeyse bunu kasten yaptığını düşünebilirdim.",
    level: "B2",
    notes: "Hafif suçlama",
  },
  {
    cumle: "Wer hätte das gedacht?",
    turkce: "Kim düşünürdü?",
    level: "B2",
    notes: "Şaşkınlık ünlemi",
  },
  {
    cumle: "Wenn ich das früher gewusst hätte, hätte ich anders gehandelt.",
    turkce: "Bunu daha önce bilseydim, farklı davranırdım.",
    level: "B2",
    notes: "Pişmanlık",
  },
  {
    cumle: "Sie sprach, als wäre sie eine Expertin auf diesem Gebiet.",
    turkce: "Bu alanda uzmanmış gibi konuştu.",
    level: "B2",
    notes: "Davranış eleştirisi",
  },
  {
    cumle: "Das hätte dir eine Lehre sein sollen!",
    turkce: "Bu sana bir ders olmalıydı!",
    level: "B2",
    notes: "Ders çıkarma",
  },
  {
    cumle: "Es hätte mich gewundert, wenn er pünktlich gekommen wäre.",
    turkce: "Zamanında gelseydi şaşırırdım.",
    level: "B2",
    notes: "İroni",
  },
  {
    cumle:
      "Hätte er doch nur ein bisschen nachgedacht, bevor er das gesagt hat!",
    turkce: "Keşke bunu söylemeden önce biraz düşünseydi!",
    level: "B2",
    notes: "Eleştirel pişmanlık",
  },
  {
    cumle: "Ich würde es nicht so ausdrücken wollen, aber...",
    turkce: "Bu şekilde ifade etmek istemezdim, ama...",
    level: "B2",
    notes: "Nazikçe eleştiri girişi",
  },
  {
    cumle:
      "Es wäre vielleicht besser gewesen, wenn wir das unter vier Augen besprochen hätten.",
    turkce: "Belki bunu baş başa konuşsaydık daha iyi olurdu.",
    level: "B2",
    notes: "Durum değerlendirmesi",
  },
  {
    cumle: "Hätten Sie vielleicht einen Moment Zeit für mich?",
    turkce: "Acaba bana biraz zaman ayırabilir miydiniz?",
    level: "B2",
    notes: "Resmi rica",
  },
  {
    cumle: "Das Buch wird gelesen.",
    turkce: "Kitap okunuyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Der Brief wird geschrieben.",
    turkce: "Mektup yazılıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Zimmer wird geputzt.",
    turkce: "Oda temizleniyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Die Tür wird geöffnet.",
    turkce: "Kapı açılıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Licht wird ausgeschaltet.",
    turkce: "Işık kapatılıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Der Kaffee wird getrunken.",
    turkce: "Kahve içiliyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Brot wird gegessen.",
    turkce: "Ekmek yeniyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Deutsch wird gelernt.",
    turkce: "Almanca öğreniliyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Auto wird gewaschen.",
    turkce: "Araba yıkanıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Fenster wird geschlossen.",
    turkce: "Pencere kapatılıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Essen wird gekocht.",
    turkce: "Yemek pişiriliyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Die Musik wird gehört.",
    turkce: "Müzik dinleniyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Die Hausaufgaben werden gemacht.",
    turkce: "Ev ödevleri yapılıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Das Wasser wird getrunken.",
    turkce: "Su içiliyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  {
    cumle: "Die Frage wird beantwortet.",
    turkce: "Soru cevaplanıyor.",
    level: "A1",
    notes: "Basit edilgen cümle",
  },
  // A2 Seviyesi
  {
    cumle: "Der Film wurde gestern gesehen.",
    turkce: "Film dün izlendi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Haus wurde renoviert.",
    turkce: "Ev yenilendi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Die Straße wurde gesperrt.",
    turkce: "Cadde kapatıldı.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Paket wurde verschickt.",
    turkce: "Paket gönderildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Essen wurde serviert.",
    turkce: "Yemek servis edildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Der Fehler wurde korrigiert.",
    turkce: "Hata düzeltildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Der Termin wurde verschoben.",
    turkce: "Randevu ertelendi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Der Schlüssel wurde gefunden.",
    turkce: "Anahtar bulundu.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Problem wurde gelöst.",
    turkce: "Problem çözüldü.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Die Rechnung wurde bezahlt.",
    turkce: "Hesap ödendi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Der Text wurde übersetzt.",
    turkce: "Metin çevrildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Die Wohnung wurde verkauft.",
    turkce: "Daire satıldı.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Die Nachricht wurde gesendet.",
    turkce: "Mesaj gönderildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Handy wurde repariert.",
    turkce: "Cep telefonu tamir edildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Der Kuchen wurde gebacken.",
    turkce: "Pasta pişirildi.",
    level: "A2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Auto wird repariert werden.",
    turkce: "Araba tamir edilecek.",
    level: "A2",
    notes: "Gelecek zaman edilgen",
  },
  {
    cumle: "Der Brief wird morgen geschickt werden.",
    turkce: "Mektup yarın gönderilecek.",
    level: "A2",
    notes: "Gelecek zaman edilgen",
  },
  {
    cumle: "Das Konzert wird organisiert werden.",
    turkce: "Konser organize edilecek.",
    level: "A2",
    notes: "Gelecek zaman edilgen",
  },
  {
    cumle: "Das Haus wird verkauft werden.",
    turkce: "Ev satılacak.",
    level: "A2",
    notes: "Gelecek zaman edilgen",
  },
  {
    cumle: "Die Aufgabe wird erledigt werden.",
    turkce: "Görev tamamlanacak.",
    level: "A2",
    notes: "Gelecek zaman edilgen",
  },
  // B1 Seviyesi
  {
    cumle: "Das Museum ist von einem berühmten Architekten gebaut worden.",
    turkce: "Müze ünlü bir mimar tarafından inşa edildi.",
    level: "B1",
    notes: "Geçmiş zaman edilgen, ajan belirtilmiş",
  },
  {
    cumle: "Der Dieb ist von der Polizei gefangen worden.",
    turkce: "Hırsız polis tarafından yakalandı.",
    level: "B1",
    notes: "Geçmiş zaman edilgen, ajan belirtilmiş",
  },
  {
    cumle: "Die Straße war wegen des Unfalls gesperrt worden.",
    turkce: "Cadde kaza nedeniyle kapatılmıştı.",
    level: "B1",
    notes: "Plusquamperfekt edilgen",
  },
  {
    cumle: "Das Buch war in mehrere Sprachen übersetzt worden.",
    turkce: "Kitap birçok dile çevrilmişti.",
    level: "B1",
    notes: "Plusquamperfekt edilgen",
  },
  {
    cumle: "Der Film wird von Millionen Menschen gesehen werden.",
    turkce: "Film milyonlarca insan tarafından izlenecek.",
    level: "B1",
    notes: "Gelecek zaman edilgen, ajan belirtilmiş",
  },
  {
    cumle: "Die Wohnung ist schon renoviert worden.",
    turkce: "Daire çoktan yenilenmiş.",
    level: "B1",
    notes: "Geçmiş zaman edilgen, zaman zarfı",
  },
  {
    cumle: "Die Prüfung war von allen Studenten bestanden worden.",
    turkce: "Sınav tüm öğrenciler tarafından geçilmişti.",
    level: "B1",
    notes: "Plusquamperfekt edilgen, ajan belirtilmiş",
  },
  {
    cumle: "Die E-Mail wird heute noch beantwortet werden.",
    turkce: "E-posta bugün hala cevaplanacak.",
    level: "B1",
    notes: "Gelecek zaman edilgen, zaman zarfı",
  },
  {
    cumle: "Es wird viel darüber diskutiert.",
    turkce: "Bu konu hakkında çok tartışılıyor.",
    level: "B1",
    notes: "Edilgen yapı, 'es' ile genel ifade",
  },
  {
    cumle: "Es wurde bis spät in die Nacht gefeiert.",
    turkce: "Gece geç saatlere kadar kutlama yapıldı.",
    level: "B1",
    notes: "Geçmiş zaman edilgen, 'es' ile genel ifade",
  },
  {
    cumle: "Es wird vermutet, dass er schuldig ist.",
    turkce: "Onun suçlu olduğu tahmin ediliyor.",
    level: "B1",
    notes: "Edilgen yapı, yan cümle ile",
  },
  {
    cumle: "Es wird gesagt, dass der Film sehr gut ist.",
    turkce: "Filmin çok iyi olduğu söyleniyor.",
    level: "B1",
    notes: "Edilgen yapı, yan cümle ile",
  },
  {
    cumle: "Es wurde beschlossen, das Projekt zu beenden.",
    turkce: "Projeyi sonlandırmaya karar verildi.",
    level: "B1",
    notes: "Geçmiş zaman edilgen, 'es' ile genel ifade",
  },
  {
    cumle: "Es ist geplant worden, nächstes Jahr zu expandieren.",
    turkce: "Gelecek yıl genişlemeye karar verildi.",
    level: "B1",
    notes: "Geçmiş zaman edilgen, planlama ifadesi",
  },
  {
    cumle: "Es wird daran gearbeitet, eine Lösung zu finden.",
    turkce: "Bir çözüm bulmak için çalışılıyor.",
    level: "B1",
    notes: "Edilgen yapı, 'es' ile genel ifade",
  },
  {
    cumle: "Hier darf nicht geraucht werden.",
    turkce: "Burada sigara içilmez.",
    level: "B1",
    notes: "Edilgen yapı, yasak ifadesi",
  },
  {
    cumle: "Es muss noch aufgeräumt werden.",
    turkce: "Hala toplanması gerekiyor.",
    level: "B1",
    notes: "Edilgen yapı, zorunluluk ifadesi",
  },
  {
    cumle: "Der Schlüssel konnte nicht gefunden werden.",
    turkce: "Anahtar bulunamadı.",
    level: "B1",
    notes: "Edilgen yapı, olumsuz modal fiil",
  },
  {
    cumle: "Die Arbeit sollte bis morgen erledigt werden.",
    turkce: "İş yarına kadar bitirilmeli.",
    level: "B1",
    notes: "Edilgen yapı, öneri/zorunluluk",
  },
  {
    cumle: "Das Formular muss ausgefüllt werden.",
    turkce: "Form doldurulmalı.",
    level: "B1",
    notes: "Edilgen yapı, zorunluluk ifadesi",
  },
  // B2 Seviyesi
  {
    cumle: "Das Gesetz wird im nächsten Monat verabschiedet worden sein.",
    turkce: "Yasa önümüzdeki ay çıkarılmış olacak.",
    level: "B2",
    notes: "Futura II edilgen",
  },
  {
    cumle:
      "Der Vertrag wäre längst unterschrieben worden, wenn alle einverstanden gewesen wären.",
    turkce: "Herkes razı olsaydı, sözleşme çoktan imzalanmış olurdu.",
    level: "B2",
    notes: "Konjunktiv II edilgen, koşullu cümle",
  },
  {
    cumle:
      "Die Vorbereitungen müssen bis zum Wochenende abgeschlossen worden sein.",
    turkce: "Hazırlıklar hafta sonuna kadar tamamlanmış olmalı.",
    level: "B2",
    notes: "Futura II edilgen, zorunluluk",
  },
  {
    cumle: "Es wird vermutet, dass das Gemälde gestohlen worden sein könnte.",
    turkce: "Tablonun çalınmış olabileceği tahmin ediliyor.",
    level: "B2",
    notes: "Edilgen yapı, olasılık ifadesi",
  },
  {
    cumle: "Die Ware dürfte inzwischen geliefert worden sein.",
    turkce: "Mal bu arada teslim edilmiş olmalı.",
    level: "B2",
    notes: "Edilgen yapı, olasılık ifadesi",
  },
  {
    cumle: "Nachdem das Problem gelöst worden war, konnten wir weitermachen.",
    turkce: "Sorun çözüldükten sonra devam edebildik.",
    level: "B2",
    notes: "Plusquamperfekt edilgen, zaman bağlacı",
  },
  {
    cumle: "Bevor das Gebäude renoviert wurde, sah es ganz anders aus.",
    turkce: "Bina yenilenmeden önce tamamen farklı görünüyordu.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, zaman bağlacı",
  },
  {
    cumle: "Ohne dass ein Wort gesagt worden wäre, verließ er den Raum.",
    turkce: "Bir kelime söylenmeden odadan ayrıldı.",
    level: "B2",
    notes: "Konjunktiv II edilgen, bağlaç",
  },
  {
    cumle: "Indem die Strukturen verbessert werden, steigt die Effizienz.",
    turkce: "Yapılar iyileştirilerek verimlilik artıyor.",
    level: "B2",
    notes: "Edilgen yapı, neden-sonuç ifadesi",
  },
  {
    cumle: "Täglich werden Tausende von E-Mails verschickt.",
    turkce: "Her gün binlerce e-posta gönderiliyor.",
    level: "B2",
    notes: "Edilgen yapı, genelleme",
  },
  {
    cumle: "Momentan wird das System aktualisiert.",
    turkce: "Şu anda sistem güncelleniyor.",
    level: "B2",
    notes: "Edilgen yapı, şu anki durum",
  },
  {
    cumle: "Während der Renovierung wurde das Museum geschlossen.",
    turkce: "Yenileme sırasında müze kapatıldı.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, zaman bağlacı",
  },
  {
    cumle:
      "Es wird angenommen, dass das Gebäude im 18. Jahrhundert errichtet wurde.",
    turkce: "Binanın 18. yüzyılda inşa edildiği varsayılıyor.",
    level: "B2",
    notes: "Edilgen yapı, yan cümle ile",
  },
  {
    cumle:
      "Das Auto hätte repariert werden können, wenn wir mehr Zeit gehabt hätten.",
    turkce: "Daha fazla zamanımız olsaydı araba tamir edilebilirdi.",
    level: "B2",
    notes: "Konjunktiv II edilgen, koşullu cümle",
  },
  {
    cumle: "Die Stadt ist im Krieg komplett zerstört worden.",
    turkce: "Şehir savaşta tamamen yok edildi.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, tamamlama",
  },
  {
    cumle: "Der Diebstahl soll letzten Freitag begangen worden sein.",
    turkce: "Hırsızlığın geçen Cuma işlenmiş olduğu söyleniyor.",
    level: "B2",
    notes: "Edilgen yapı, söylenti ifadesi",
  },
  {
    cumle: "Bei dem Unfall wurde niemand verletzt.",
    turkce: "Kazada kimse yaralanmadı.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, olumsuz",
  },
  {
    cumle: "In diesem Restaurant wird alles frisch zubereitet.",
    turkce: "Bu restoranda her şey taze hazırlanıyor.",
    level: "B2",
    notes: "Edilgen yapı, genelleme",
  },
  {
    cumle: "Die Entscheidung wird später getroffen werden.",
    turkce: "Karar daha sonra verilecek.",
    level: "B2",
    notes: "Gelecek zaman edilgen",
  },
  {
    cumle: "Ein neues Gesetz ist verabschiedet worden.",
    turkce: "Yeni bir yasa çıkarıldı.",
    level: "B2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Die Stelle muss neu besetzt werden.",
    turkce: "Pozisyon yeniden doldurulmalı.",
    level: "B2",
    notes: "Edilgen yapı, zorunluluk",
  },
  {
    cumle: "Die Türen werden automatisch geschlossen.",
    turkce: "Kapılar otomatik olarak kapanıyor.",
    level: "B2",
    notes: "Edilgen yapı, otomasyon ifadesi",
  },
  {
    cumle: "Das Konzert musste wegen schlechten Wetters abgesagt werden.",
    turkce: "Konser kötü hava koşulları nedeniyle iptal edilmek zorunda kaldı.",
    level: "B2",
    notes: "Edilgen yapı, zorunluluk ve neden",
  },
  {
    cumle: "Der Patient wird vom besten Arzt behandelt.",
    turkce: "Hasta en iyi doktor tarafından tedavi ediliyor.",
    level: "B2",
    notes: "Edilgen yapı, ajan belirtilmiş",
  },
  {
    cumle:
      "Es wird vermutet, dass das Gebäude im nächsten Jahr fertiggestellt wird.",
    turkce: "Binanın gelecek yıl tamamlanacağı tahmin ediliyor.",
    level: "B2",
    notes: "Edilgen yapı, yan cümle ile",
  },
  {
    cumle: "Die Arbeiten sind bereits erledigt worden.",
    turkce: "İşler çoktan halledildi.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, zaman zarfı",
  },
  {
    cumle: "Die Straße wird seit letztem Monat repariert.",
    turkce: "Cadde geçen aydan beri onarılıyor.",
    level: "B2",
    notes: "Edilgen yapı, süreklilik",
  },
  {
    cumle: "Die Wohnung wird seit drei Monaten renoviert.",
    turkce: "Daire üç aydır yenileniyor.",
    level: "B2",
    notes: "Edilgen yapı, süreklilik",
  },
  {
    cumle: "Der Text muss noch korrigiert werden.",
    turkce: "Metin hala düzeltilmeli.",
    level: "B2",
    notes: "Edilgen yapı, zorunluluk",
  },
  {
    cumle: "Alle Fehler wurden beseitigt.",
    turkce: "Tüm hatalar giderildi.",
    level: "B2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Das Handy wurde gefunden.",
    turkce: "Cep telefonu bulundu.",
    level: "B2",
    notes: "Geçmiş zaman edilgen",
  },
  {
    cumle: "Der Vorschlag wurde von allen akzeptiert.",
    turkce: "Öneri herkes tarafından kabul edildi.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, ajan belirtilmiş",
  },
  {
    cumle: "Die Stadt wird täglich von Tausenden Touristen besucht.",
    turkce: "Şehir her gün binlerce turist tarafından ziyaret ediliyor.",
    level: "B2",
    notes: "Edilgen yapı, genelleme ve ajan",
  },
  {
    cumle: "Der Schlüssel wird irgendwo versteckt worden sein.",
    turkce: "Anahtar bir yerlerde saklanmış olmalı.",
    level: "B2",
    notes: "Futura II edilgen, olasılık",
  },
  {
    cumle: "Der Fehler hätte vermieden werden können.",
    turkce: "Hata önlenebilirdi.",
    level: "B2",
    notes: "Konjunktiv II edilgen, olasılık",
  },
  {
    cumle: "Es wird davon ausgegangen, dass der Täter gefasst werden wird.",
    turkce: "Failin yakalanacağı varsayılıyor.",
    level: "B2",
    notes: "Edilgen yapı, yan cümle ile",
  },
  {
    cumle: "Die Qualität muss verbessert werden.",
    turkce: "Kalite iyileştirilmelidir.",
    level: "B2",
    notes: "Edilgen yapı, zorunluluk",
  },
  {
    cumle: "Es darf nicht vergessen werden, dass...",
    turkce: "Unutulmamalıdır ki...",
    level: "B2",
    notes: "Edilgen yapı, uyarı ifadesi",
  },
  {
    cumle: "Dieser Text wurde vor hundert Jahren geschrieben.",
    turkce: "Bu metin yüz yıl önce yazıldı.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, zaman zarfı",
  },
  {
    cumle: "Die Trauung wird von einem Priester durchgeführt.",
    turkce: "Nikah bir rahip tarafından gerçekleştiriliyor.",
    level: "B2",
    notes: "Edilgen yapı, ajan belirtilmiş",
  },
  {
    cumle: "Das Projekt wird nächste Woche abgeschlossen werden.",
    turkce: "Proje gelecek hafta tamamlanacak.",
    level: "B2",
    notes: "Gelecek zaman edilgen",
  },
  {
    cumle: "Die Hauptstadt wurde mehrmals erobert.",
    turkce: "Başkent birkaç kez fethedildi.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, tekrar ifadesi",
  },
  {
    cumle: "Sein Name wird nie vergessen werden.",
    turkce: "Onun adı asla unutulmayacak.",
    level: "B2",
    notes: "Gelecek zaman edilgen, vurgu",
  },
  {
    cumle: "Damals wurde weniger Plastik verwendet.",
    turkce: "O zamanlar daha az plastik kullanılıyordu.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, genelleme",
  },
  {
    cumle: "Diese Brücke wurde vor drei Jahren gebaut.",
    turkce: "Bu köprü üç yıl önce inşa edildi.",
    level: "B2",
    notes: "Geçmiş zaman edilgen, zaman zarfı",
  },
  {
    cumle: "Hätten Sie vielleicht einen Moment Zeit für mich?",
    turkce: "Acaba bana biraz zaman ayırabilir miydiniz?",
    level: "B2",
    notes: "Resmi rica",
  },
];
function App() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem("currentCardIndex");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });
  const [showTurkish, setShowTurkish] = useState(false);

  useEffect(() => {
    localStorage.setItem("currentCardIndex", currentIndex);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setShowTurkish(false); // Reset Turkish visibility
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setShowTurkish(false); // Reset Turkish visibility
  };

  const toggleTurkish = () => {
    setShowTurkish((prev) => !prev);
  };

  const currentCard = data[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrev}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Previous card"
          >
            <FaArrowLeft size={24} />
          </button>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {data.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Next card"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
        <div
          className="bg-orange-100 p-6 rounded-lg cursor-pointer"
          onClick={toggleTurkish}
        >
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            {currentCard.cumle}
          </h2>
          {showTurkish && (
            <p className="text-base text-gray-600">{currentCard.turkce}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Level: {currentCard.level}
          </p>
          {currentCard.notes && (
            <p className="text-sm text-gray-500">Notes: {currentCard.notes}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
