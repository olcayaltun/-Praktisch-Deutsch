import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  HardHat,
  Cpu,
  Layers,
  Wrench,
  Zap,
  Monitor,
} from "lucide-react";

// --- YENİ VERİ SETİ (Berufe, Technik & Verb-Gruppen) ---
const rawData = [
  // 1. BÖLÜM: BERUFE & TÄTIGKEITEN - İsimler
  {
    de: "der Abgaswert",
    tr: "Egzoz gazı/Emisyon değeri",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "die Anwendung (Software)",
    tr: "Uygulama (Yazılım)",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "das Bauteil",
    tr: "Yapı parçası, bileşen",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Betrieb",
    tr: "İşletme, çalışma, faaliyet",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Bodenbelag",
    tr: "Zemin döşemesi, kaplaması",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Elektriker",
    tr: "Elektrikçi",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "die Fertigung",
    tr: "Üretim, imalat",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "das Gerüst",
    tr: "İskele (inşaat)",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "das Gewinde",
    tr: "Vida dişi",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "die Nutzerfreundlichkeit",
    tr: "Kullanıcı dostu olma",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Schornsteinfeger",
    tr: "Baca temizleyicisi",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "die Schraube",
    tr: "Vida",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "die Sicherung",
    tr: "Sigorta (elektrik)",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "die Tapete",
    tr: "Duvar kağıdı",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Thermostat",
    tr: "Termostat",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "das Ventil",
    tr: "Vana, subap",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Zähler (Strom/Gas)",
    tr: "Sayaç (Elektrik/Gaz)",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },
  {
    de: "der Zählerstand",
    tr: "Sayaç göstergesi/okuması",
    cat: "Meslekler & Faaliyetler",
    sub: "İsimler",
  },

  // 1. BÖLÜM: BERUFE & TÄTIGKEITEN - Fiiller
  {
    de: "befestigen",
    tr: "Sabitlemek, tutturmak",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "entwerfen",
    tr: "Tasarlamak, dizayn etmek",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "fertigen",
    tr: "Üretmek, imal etmek",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "gestalten",
    tr: "Şekillendirmek, tasarlamak",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "instand halten",
    tr: "Bakımını yapmak (çalışır tutmak)",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "montieren",
    tr: "Monte etmek, kurmak",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "optimieren",
    tr: "Optimize etmek, iyileştirmek",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "programmieren",
    tr: "Programlamak",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "sicherstellen",
    tr: "Sağlamak, garanti etmek",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "streichen",
    tr: "Boyamak (duvar vb.)",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "tapezieren",
    tr: "Duvar kağıdı kaplamak",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "tropfen",
    tr: "Damlamak",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "überwachen",
    tr: "Denetlemek, gözetlemek",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "verlegen",
    tr: "Döşemek (halı vb.)",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },
  {
    de: "warten",
    tr: "Bakımını yapmak (teknik servis)",
    cat: "Meslekler & Faaliyetler",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: BERUFE & TÄTIGKEITEN - Sıfatlar/İfadeler
  {
    de: "bestehend",
    tr: "Mevcut, var olan",
    cat: "Meslekler & Faaliyetler",
    sub: "Sıfatlar",
  },
  {
    de: "störungsfrei",
    tr: "Arızasız, kesintisiz",
    cat: "Meslekler & Faaliyetler",
    sub: "Sıfatlar",
  },
  {
    de: "einen Schlag bekommen",
    tr: "Elektrik çarpması (çarpılmak)",
    cat: "Meslekler & Faaliyetler",
    sub: "İfadeler",
  },

  // 2. BÖLÜM: FİİL GRUPLARI (VERB-GRUPPEN)
  // -bauen
  {
    de: "auf|bauen",
    tr: "Kurmak, inşa etmek",
    cat: "Fiil Grupları",
    sub: "-bauen",
  },
  {
    de: "ein|bauen",
    tr: "Takmak, monte etmek, içine yerleştirmek",
    cat: "Fiil Grupları",
    sub: "-bauen",
  },
  {
    de: "um|bauen",
    tr: "Tadilat yapmak, dönüştürmek",
    cat: "Fiil Grupları",
    sub: "-bauen",
  },
  {
    de: "weiter|bauen",
    tr: "İnşasına devam etmek",
    cat: "Fiil Grupları",
    sub: "-bauen",
  },
  {
    de: "zusammen|bauen",
    tr: "Birleştirmek, monte etmek",
    cat: "Fiil Grupları",
    sub: "-bauen",
  },
  // -drehen
  {
    de: "auf|drehen",
    tr: "Açmak (musluk, ses vb.)",
    cat: "Fiil Grupları",
    sub: "-drehen",
  },
  {
    de: "fest|drehen",
    tr: "Sıkıştırmak",
    cat: "Fiil Grupları",
    sub: "-drehen",
  },
  {
    de: "überdrehen",
    tr: "Yalama yapmak / Aşırı çevirmek",
    cat: "Fiil Grupları",
    sub: "-drehen",
  },
  {
    de: "zu|drehen",
    tr: "Kapatmak (musluk vb.)",
    cat: "Fiil Grupları",
    sub: "-drehen",
  },
  {
    de: "zurück|drehen",
    tr: "Geri çevirmek",
    cat: "Fiil Grupları",
    sub: "-drehen",
  },
  {
    de: "durch|drehen",
    tr: "Çıldırmak / Boşa dönmek (vida)",
    cat: "Fiil Grupları",
    sub: "-drehen",
  },
  // -legen
  {
    de: "frei|legen",
    tr: "Açığa çıkarmak, üzerini açmak",
    cat: "Fiil Grupları",
    sub: "-legen",
  },
  { de: "trocken|legen", tr: "Kurutmak", cat: "Fiil Grupları", sub: "-legen" },
  {
    de: "unter|legen",
    tr: "Altına koymak",
    cat: "Fiil Grupları",
    sub: "-legen",
  },
  {
    de: "verlegen",
    tr: "Döşemek / Kaybetmek (yerini unutmak)",
    cat: "Fiil Grupları",
    sub: "-legen",
  },
  {
    de: "los|legen",
    tr: "İşe koyulmak, başlamak",
    cat: "Fiil Grupları",
    sub: "-legen",
  },
  // -stellen
  {
    de: "bereit|stellen",
    tr: "Hazır etmek, sunmak",
    cat: "Fiil Grupları",
    sub: "-stellen",
  },
  {
    de: "fertig|stellen",
    tr: "Tamamlamak, bitirmek",
    cat: "Fiil Grupları",
    sub: "-stellen",
  },
  {
    de: "sicher|stellen",
    tr: "Sağlamak, temin etmek",
    cat: "Fiil Grupları",
    sub: "-stellen",
  },
  {
    de: "um|stellen",
    tr: "Yerini/Düzenini değiştirmek",
    cat: "Fiil Grupları",
    sub: "-stellen",
  },
  {
    de: "verstellen",
    tr: "Ayarını bozmak / Yerini değiştirmek",
    cat: "Fiil Grupları",
    sub: "-stellen",
  },
  {
    de: "zusammen|stellen",
    tr: "Bir araya getirmek, derlemek",
    cat: "Fiil Grupları",
    sub: "-stellen",
  },

  // 3. BÖLÜM: TEKNOLOJİ VE TRENDLER - İsimler
  {
    de: "die Ausstattung (technisch)",
    tr: "(Teknik) Donanım",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Befehl",
    tr: "Komut (Bilgisayar)",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "das Design",
    tr: "Tasarım",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "das Display",
    tr: "Ekran",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Drohne",
    tr: "Drone (İnsansız hava aracı)",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Elektrizität",
    tr: "Elektrik",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der E-Roller",
    tr: "Elektrikli scooter",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Fehlermeldung",
    tr: "Hata mesajı/bildirimi",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Feststelltaste",
    tr: "Caps Lock tuşu",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Flachbildfernseher",
    tr: "Düz ekran televizyon",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Funktion",
    tr: "İşlev, fonksiyon",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Griff",
    tr: "Kulp, tutacak, sap",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Geschirrspüler",
    tr: "Bulaşık makinesi",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Kapazität",
    tr: "Kapasite (Batarya)",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Ladezeit",
    tr: "Şarj süresi",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Laufzeit",
    tr: "Çalışma süresi, pil ömrü",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Leistung",
    tr: "Performans, güç",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Mikrowelle",
    tr: "Mikrodalga fırın",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "das Navi",
    tr: "Navigasyon cihazı",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Papierkorb",
    tr: "Çöp kutusu (Geri Dönüşüm)",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  { de: "das Pedal", tr: "Pedal", cat: "Teknoloji & Trendler", sub: "İsimler" },
  {
    de: "das Preis-Leistungs-Verhältnis",
    tr: "Fiyat-performans oranı",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Rahmen",
    tr: "Çerçeve",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Vorgang",
    tr: "İşlem, süreç",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "der Wäschetrockner",
    tr: "Çamaşır kurutma makinesi",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },
  {
    de: "die Wiederherstellung",
    tr: "Geri yükleme, kurtarma",
    cat: "Teknoloji & Trendler",
    sub: "İsimler",
  },

  // 3. BÖLÜM: TEKNOLOJİ VE TRENDLER - Fiiller
  {
    de: "ab|brechen (einen Vorgang)",
    tr: "İptal etmek, yarıda kesmek",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "ab|stürzen",
    tr: "Çökmek (bilgisayar), düşmek",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "aus|tauschen",
    tr: "Değiştirmek",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "aus|werfen",
    tr: "Çıkarmak (disk vb.)",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "fehl|schlagen",
    tr: "Başarısız olmak",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "halten",
    tr: "Dayanmak (pil ömrü vb.)",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "raten zu",
    tr: "Tavsiye etmek",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "setzen auf",
    tr: "Önem vermek, üzerine kurmak",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "verbauen",
    tr: "Monte etmek (sabit)",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "verschieben",
    tr: "Taşımak (dosya), ertelemek",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },
  {
    de: "zugreifen auf",
    tr: "Erişmek (veriye)",
    cat: "Teknoloji & Trendler",
    sub: "Fiiller",
  },

  // 3. BÖLÜM: TEKNOLOJİ VE TRENDLER - Sıfatlar/İfadeler
  {
    de: "altmodisch",
    tr: "Eski moda, demode",
    cat: "Teknoloji & Trendler",
    sub: "Sıfatlar",
  },
  {
    de: "hin oder her",
    tr: "... bir yana / ... ne olursa olsun",
    cat: "Teknoloji & Trendler",
    sub: "İfadeler",
  },
];

const B9 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Technical & Industrial Theme */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 opacity-5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <HardHat className="text-orange-400 w-8 h-8" />
              <span>
                Technik <span className="text-cyan-300">&</span> Berufe
              </span>
            </h1>
            <p className="text-slate-300 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Cpu size={14} className="text-cyan-200" /> Meslekler, Teknoloji
              ve Fiil Grupları
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-orange-700 shadow-lg"
                  : "text-orange-100 hover:bg-white/10"
              }`}
            >
              <Brain size={18} /> Sınav
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Kategori Filtresi */}
        <div className="mb-10 flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          <Layers size={20} className="text-slate-400 min-w-fit" />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border
                  ${
                    selectedCategory === cat
                      ? "bg-slate-800 text-white border-slate-800 shadow-md shadow-slate-300"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "learn" ? (
          <LearningMode data={filteredData} />
        ) : (
          <QuizMode data={filteredData} categoryName={selectedCategory} />
        )}
      </main>
    </div>
  );
};

// --- BÖLÜM 1: GELİŞTİRİLMİŞ ÖĞRENME MODU ---
function LearningMode({ data }) {
  return (
    <div className="animate-fade-in-up">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Wrench className="text-slate-600" /> Kelime Kartları
        </h2>
        <span className="text-sm font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
          {data.length} Terim
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <FlashCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

function FlashCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  // Kategoriye göre renk belirleme
  const getBadgeColor = (cat) => {
    switch (cat) {
      case "Meslekler & Faaliyetler":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Fiil Grupları":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Teknoloji & Trendler":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Meslekler & Faaliyetler")
      return <HardHat size={20} className="text-white" />;
    if (cat === "Fiil Grupları")
      return <Layers size={20} className="text-white" />;
    if (cat === "Teknoloji & Trendler")
      return <Cpu size={20} className="text-white" />;
    return <Zap size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Meslekler & Faaliyetler")
      return "bg-gradient-to-br from-orange-600 to-red-700";
    if (cat === "Fiil Grupları")
      return "bg-gradient-to-br from-indigo-600 to-purple-700";
    return "bg-gradient-to-br from-cyan-600 to-blue-700";
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group perspective h-48 cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-all duration-500 preserve-3d shadow-sm hover:shadow-xl rounded-2xl ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* ÖN YÜZ (Almanca) */}
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-slate-300">
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}
          >
            {item.cat}
            {item.cat === "Fiil Grupları" && (
              <span className="ml-1 opacity-75">({item.sub})</span>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center w-full">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 font-serif leading-tight">
              {item.de}
            </h3>
          </div>

          <div className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            {item.sub}
          </div>
        </div>

        {/* ARKA YÜZ (Türkçe) - Modern Gradient */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner text-white ${getGradient(
            item.cat
          )}`}
        >
          <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm">
            {getIcon(item.cat)}
          </div>
          <h3 className="text-lg font-medium leading-relaxed drop-shadow-md">
            {item.tr}
          </h3>
        </div>
      </div>
    </div>
  );
}

// --- BÖLÜM 2: GELİŞTİRİLMİŞ SINAV MODU ---
function QuizMode({ data, categoryName }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);

  const generateQuestion = () => {
    if (data.length < 4) return;

    const randomIndex = Math.floor(Math.random() * data.length);
    const question = data[randomIndex];

    const otherOptions = data.filter((item) => item.de !== question.de);
    const shuffledOthers = otherOptions
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const allOptions = [question, ...shuffledOthers].sort(
      () => 0.5 - Math.random()
    );

    setCurrentQuestion(question);
    setOptions(allOptions);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    setScore(0);
    setQuestionCount(0);
    setWrongAnswers([]);
    generateQuestion();
  }, [data]);

  const handleOptionClick = (option) => {
    if (selectedOption) return;

    setSelectedOption(option);
    const correct = option.de === currentQuestion.de;
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 1);
    } else {
      setWrongAnswers((prev) => {
        if (!prev.find((item) => item.de === currentQuestion.de)) {
          return [...prev, currentQuestion];
        }
        return prev;
      });
    }
    setQuestionCount((c) => c + 1);
  };

  const nextQuestion = () => {
    generateQuestion();
  };

  if (data.length < 4) {
    return (
      <div className="p-6 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl flex items-center gap-3">
        <AlertCircle />
        Bu kategoride sınav yapmak için yeterli kelime yok. Lütfen "Tümü"
        kategorisini deneyin.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Skor Kartı */}
      <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <h2 className="font-bold text-slate-700 text-lg">
            {categoryName} Testi
          </h2>
          <p className="text-sm text-slate-400 font-medium mt-1">
            Soru {questionCount + 1}
          </p>
        </div>
        <div className="flex items-center gap-4 text-right">
          <div className="flex flex-col items-end">
            <span className="text-2xl font-bold text-emerald-600">{score}</span>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">
              Doğru
            </span>
          </div>
          {wrongAnswers.length > 0 && (
            <div className="flex flex-col items-end pl-4 border-l">
              <span className="text-2xl font-bold text-rose-500">
                {wrongAnswers.length}
              </span>
              <span className="text-xs text-rose-400 font-bold uppercase tracking-wide">
                Yanlış
              </span>
            </div>
          )}
        </div>
      </div>

      {currentQuestion && (
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 relative overflow-hidden">
          {/* Soru Başlığı */}
          <div className="mb-8 text-center relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
              Bu kelimenin/ifadenin anlamı nedir?
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-serif tracking-tight">
              {currentQuestion.de}
            </h3>
          </div>

          {/* Şıklar */}
          <div className="grid gap-3 relative z-10">
            {options.map((opt, idx) => {
              let btnClass =
                "border-2 border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-600";
              let icon = null;

              if (selectedOption) {
                if (opt.de === currentQuestion.de) {
                  // DOĞRU ŞIK
                  btnClass =
                    "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-md transform scale-[1.02]";
                  icon = <Check size={22} className="text-emerald-600" />;
                } else if (opt === selectedOption && !isCorrect) {
                  // YANLIŞ ŞIK
                  btnClass = "bg-rose-50 border-rose-500 text-rose-700";
                  icon = <X size={22} className="text-rose-600" />;
                } else {
                  // DİĞERLERİ
                  btnClass = "opacity-40 border-slate-100 grayscale";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  disabled={!!selectedOption}
                  className={`w-full p-5 rounded-xl text-left transition-all duration-300 font-semibold text-lg flex justify-between items-center group ${btnClass}`}
                >
                  <span className="flex-1">{opt.tr}</span>
                  {icon}
                  {!selectedOption && (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-blue-400 transition-colors"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sonraki Soru Butonu */}
          {selectedOption && (
            <div className="mt-8 flex justify-end animate-in fade-in slide-in-from-bottom-2">
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-900 active:scale-95 transition-all shadow-lg shadow-slate-400 font-bold text-lg"
              >
                Sonraki <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Yanlış Cevaplar Özeti */}
      {wrongAnswers.length > 0 && (
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
          <div className="bg-rose-50 p-4 border-b border-rose-100 flex items-center gap-2">
            <AlertCircle className="text-rose-500" />
            <h3 className="text-rose-700 font-bold">
              Tekrar Edilmesi Gerekenler
            </h3>
          </div>
          <div className="p-4 grid gap-3">
            {wrongAnswers.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm gap-2"
              >
                <span className="font-bold text-slate-800 text-lg">
                  {item.de}
                </span>
                <span className="text-slate-500">{item.tr}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 3D Dönüş Efekti için CSS
const style = document.createElement("style");
style.textContent = `
  .perspective { perspective: 1000px; }
  .preserve-3d { transform-style: preserve-3d; }
  .backface-hidden { backface-visibility: hidden; }
  .rotate-y-180 { transform: rotateY(180deg); }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
  }
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
  .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default B9;
