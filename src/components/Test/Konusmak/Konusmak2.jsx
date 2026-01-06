import React, { useState, useEffect } from "react";

const data = [
  // können (yapabilmek, edebilmek)
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
];

const Konusmak2 = () => {
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
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
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
              <div className="mt-4">
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

export default Konusmak2;
