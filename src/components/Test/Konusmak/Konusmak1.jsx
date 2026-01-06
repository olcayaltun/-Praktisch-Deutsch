import React, { useState, useEffect } from "react";

const data = [
  // Wenn cümleleri
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
];

const Konusmak1 = () => {
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
          Card {currentIndex + 1} of {data.length}
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
              <ul className="space-y-4">
                {favorites.map((fav, index) => (
                  <li
                    key={index}
                    className="border-b pb-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      const favIndex = data.findIndex(
                        (item) =>
                          item.cumle === fav.cumle && item.turkce === fav.turkce
                      );
                      if (favIndex !== -1) {
                        setCurrentIndex(favIndex);
                        setShowFavorites(false);
                      }
                    }}
                  >
                    <p className="font-semibold">{fav.turkce}</p>
                    <p className="text-gray-600">{fav.cumle}</p>
                  </li>
                ))}
              </ul>
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

export default Konusmak1;
