import { useEffect, useState, useMemo } from "react";
import React from "react";

const data = [
  // A1 Seviyesi
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

// Ensure data is defined

// Error boundary component
const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error("Error in component:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center text-red-600 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <p>Ein Fehler ist aufgetreten: {error.message}</p>
          <p>
            Bitte überprüfen Sie die Konfiguration oder kontaktieren Sie den
            Support.
          </p>
        </div>
      </div>
    );
  }
};

const Konusmak5 = () => {
  // Verify React is defined
  if (!React) {
    console.error(
      "React is undefined. Check your React import and installation."
    );
    throw new Error("React is undefined");
  }

  // State definitions
  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const saved = localStorage.getItem("currentIndex");
      const index = parseInt(saved, 10);
      return isNaN(index) || index < 0 || index >= data.length ? 0 : index;
    } catch (e) {
      console.error("Failed to parse currentIndex from localStorage", e);
      return 0;
    }
  });

  const [showAlmanca, setShowAlmanca] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      const parsed = saved ? JSON.parse(saved) : [];
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
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data by level and search term
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesLevel =
        selectedLevel === "All" || item.level === selectedLevel;
      const matchesSearch =
        searchTerm === "" ||
        item.cumle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.turkce.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLevel && matchesSearch;
    });
  }, [selectedLevel, searchTerm]);

  // Adjust currentIndex if filteredData changes
  useEffect(() => {
    if (filteredData.length === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= filteredData.length) {
      setCurrentIndex(0);
    }
  }, [filteredData, currentIndex]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Enter") setShowAlmanca((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredData.length);
    setShowAlmanca(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredData.length) % filteredData.length
    );
    setShowAlmanca(false);
  };

  const toggleFavorite = () => {
    const currentItem = filteredData[currentIndex];
    if (!currentItem) return;
    if (favorites.some((fav) => fav.cumle === currentItem.cumle)) {
      setFavorites(favorites.filter((fav) => fav.cumle !== currentItem.cumle));
    } else {
      setFavorites([...favorites, currentItem]);
    }
  };

  // Get unique levels for dropdown
  const levels = ["All", ...new Set(data.map((item) => item.level))];

  // Handle empty filtered data
  if (filteredData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center text-gray-600 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <p>
            Keine Sätze gefunden. Bitte ändern Sie den Filter oder die Suche.
          </p>
          <button
            onClick={() => {
              setSelectedLevel("All");
              setSearchTerm("");
            }}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            role="button"
            aria-label="Reset filters"
          >
            Filter zurücksetzen
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* Filters and Search */}
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            <select
              value={selectedLevel}
              onChange={(e) => {
                setSelectedLevel(e.target.value);
                setCurrentIndex(0);
                setShowAlmanca(false);
              }}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select CEFR level"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level === "All" ? "Alle Level" : level}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentIndex(0);
                setShowAlmanca(false);
              }}
              placeholder="Suche nach Sätzen..."
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              aria-label="Search sentences"
            />
          </div>

          {/* Progress indicator */}
          <p className="text-sm text-gray-500 mb-4 text-center">
            Karte {currentIndex + 1} von {filteredData.length} (Level:{" "}
            {filteredData[currentIndex].level})
          </p>

          {/* Favorites button */}
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              role="button"
              aria-label={showFavorites ? "Return to cards" : "Show favorites"}
            >
              {showFavorites ? "Kartlara Dön" : "Favorileri Göster"}
            </button>
          </div>

          {/* Favorites view */}
          {showFavorites ? (
            <div>
              <h2 className="text-lg font-semibold mb-4">Favoriler</h2>
              {favorites.length === 0 ? (
                <p className="text-gray-600">Henüz favori eklemediniz.</p>
              ) : (
                <>
                  <ul className="space-y-4 max-h-60 overflow-y-auto">
                    {favorites.map((fav, index) => (
                      <li
                        key={index}
                        className="border-b pb-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => {
                          const favIndex = data.findIndex(
                            (item) =>
                              item.cumle === fav.cumle &&
                              item.turkce === fav.turkce
                          );
                          if (favIndex !== -1) {
                            setCurrentIndex(favIndex);
                            setShowFavorites(false);
                            setSelectedLevel("All");
                            setSearchTerm("");
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const favIndex = data.findIndex(
                              (item) =>
                                item.cumle === fav.cumle &&
                                item.turkce === fav.turkce
                            );
                            if (favIndex !== -1) {
                              setCurrentIndex(favIndex);
                              setShowFavorites(false);
                              setSelectedLevel("All");
                              setSearchTerm("");
                            }
                          }
                        }}
                      >
                        <p className="font-semibold">{fav.turkce}</p>
                        <p className="text-gray-600">{fav.cumle}</p>
                        <p className="text-sm text-gray-500">
                          Level: {fav.level} | {fav.notes}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setFavorites([])}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-4"
                    role="button"
                    aria-label="Clear all favorites"
                  >
                    Tüm Favorileri Temizle
                  </button>
                </>
              )}
            </div>
          ) : (
            <>
              {/* Flashcard view */}
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-gray-800">
                  {filteredData[currentIndex].turkce}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {filteredData[currentIndex].notes}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => setShowAlmanca(!showAlmanca)}
                    className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                    role="button"
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
                      {filteredData[currentIndex].cumle}
                    </p>
                  )}
                </div>
              </div>

              {/* Favorite button */}
              <div className="text-center mb-4">
                <button
                  onClick={toggleFavorite}
                  className={`px-4 py-2 rounded transition ${
                    favorites.some(
                      (fav) => fav.cumle === filteredData[currentIndex].cumle
                    )
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-yellow-500 text-white hover:bg-yellow-600"
                  }`}
                  role="button"
                  aria-label={
                    favorites.some(
                      (fav) => fav.cumle === filteredData[currentIndex].cumle
                    )
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  {favorites.some(
                    (fav) => fav.cumle === filteredData[currentIndex].cumle
                  )
                    ? "Favorilerden Çıkar"
                    : "Favorilere Ekle"}
                </button>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrev}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  role="button"
                  aria-label="Previous sentence"
                >
                  Geri
                </button>
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  role="button"
                  aria-label="Next sentence"
                >
                  İleri
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Konusmak5;
