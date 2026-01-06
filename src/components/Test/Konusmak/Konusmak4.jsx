import React, { useState, useEffect } from "react";

const data = [
  // A1 Seviyesi (1-20)
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
];

const Konusmak4 = () => {
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

export default Konusmak4;
