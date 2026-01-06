import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Truck,
  Zap,
  Factory,
  Settings,
  Layers,
  Container,
} from "lucide-react";

// --- YENİ VERİ SETİ (Versorgung, Energie, Verkehr & Logistik) ---
const rawData = [
  // 1. BÖLÜM: TEDARİK VE ENERJİ (VERSORGUNG & ENERGIE) - İsimler
  {
    de: "die Daseinsvorsorge",
    tr: "Temel kamu hizmeti (Devletin sağladığı)",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "der Engpass",
    tr: "Darboğaz, tıkanıklık",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Enteignung",
    tr: "Kamulaştırma",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Fluktuation",
    tr: "Dalgalanma / İşçi devri",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die öffentliche Hand",
    tr: "Kamu idaresi, devlet",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Infrastruktur",
    tr: "Altyapı",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Integration",
    tr: "Entegrasyon, uyum",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Isolation",
    tr: "İzolasyon, yalıtım",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Notlage",
    tr: "Acil durum, sıkıntı",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "der Kernbereich",
    tr: "Temel alan, çekirdek bölge",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Knappheit",
    tr: "Kıtlık, azlık",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Resilienz",
    tr: "Dayanıklılık, direnç (krizlere karşı)",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "der Sozialstaat",
    tr: "Sosyal devlet",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Schwankung",
    tr: "Dalgalanma, salınım",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Überführung",
    tr: "Dönüştürme / Devretme / Nakil",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "der Überschuss",
    tr: "Fazlalık, bakiye",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Unterversorgung",
    tr: "Yetersiz tedarik/beslenme",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Urbarmachung",
    tr: "Tarıma açma, ıslah etme",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Verflechtung",
    tr: "İç içe geçme, karmaşık bağlantı",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },
  {
    de: "die Verknappung",
    tr: "Kıtlaşma, azalma",
    cat: "Tedarik & Enerji",
    sub: "İsimler",
  },

  // 1. BÖLÜM: TEDARİK VE ENERJİ - Fiiller
  {
    de: "an|schließen an",
    tr: "Bağlamak (şebeke, hat)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "aus|bauen",
    tr: "Genişletmek (altyapı)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "aus|fallen",
    tr: "Kesilmek (elektrik), devre dışı kalmak",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "beheben",
    tr: "Gidermek (arıza)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "betreiben",
    tr: "İşletmek (tesis)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "decken",
    tr: "Karşılamak (ihtiyacı)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "ein|speisen",
    tr: "Vermek/Beslemek (şebekeye elektrik)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "erzielen",
    tr: "Elde etmek (kâr)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "fließen",
    tr: "Akmak (elektrik, su)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "fördern",
    tr: "Çıkarmak (maden) / Teşvik etmek",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "schwanken",
    tr: "Dalgalanmak (fiyat)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "überlasten",
    tr: "Aşırı yüklemek (sistem)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "verlagern",
    tr: "Kaymak, yer değiştirmek",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "verstromen",
    tr: "Elektriğe dönüştürmek",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "zusammen|brechen",
    tr: "Çökmek (tedarik ağı)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "in Betrieb nehmen",
    tr: "İşletmeye almak, çalıştırmak",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "ans Netz gehen",
    tr: "Şebekeye bağlanmak (faaliyete geçmek)",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },
  {
    de: "urbar machen",
    tr: "Tarıma açmak, işlenebilir kılmak",
    cat: "Tedarik & Enerji",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: TEDARİK VE ENERJİ - Sıfatlar
  {
    de: "flächendeckend",
    tr: "Tüm alanı kapsayan, yaygın",
    cat: "Tedarik & Enerji",
    sub: "Sıfatlar",
  },
  {
    de: "gemeinwohlorientiert",
    tr: "Kamu yararı odaklı",
    cat: "Tedarik & Enerji",
    sub: "Sıfatlar",
  },
  {
    de: "immens",
    tr: "Muazzam, çok büyük",
    cat: "Tedarik & Enerji",
    sub: "Sıfatlar",
  },
  {
    de: "rapide",
    tr: "Hızlı, süratli",
    cat: "Tedarik & Enerji",
    sub: "Sıfatlar",
  },
  {
    de: "verzweigt",
    tr: "Dallı budaklı (ağ)",
    cat: "Tedarik & Enerji",
    sub: "Sıfatlar",
  },

  // KUTULAR: SÜREÇ İSİMLERİ (-ISIERUNG)
  {
    de: "Dezentralisierung",
    tr: "Yerinden yönetim",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Generalisierung",
    tr: "Genelleme",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Kollektivierung",
    tr: "Kollektifleştirme",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Kultivierung",
    tr: "Ekip biçme / Geliştirme",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Privatisierung",
    tr: "Özelleştirme",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Renaturierung",
    tr: "Doğaya yeniden kazandırma",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Spezialisierung",
    tr: "Uzmanlaşma",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },
  {
    de: "Zentralisierung",
    tr: "Merkezileştirme",
    cat: "Süreçler (-isierung)",
    sub: "Kavramlar",
  },

  // KUTULAR: SUPERLATIV & VERBEN AUF -IEREN
  {
    de: "bestmöglich",
    tr: "Mümkün olan en iyi",
    cat: "Ekstra",
    sub: "Sıfatlar",
  },
  {
    de: "schnellstmöglich",
    tr: "Mümkün olan en hızlı",
    cat: "Ekstra",
    sub: "Sıfatlar",
  },
  {
    de: "elektrifizieren",
    tr: "Elektriklendirmek",
    cat: "Ekstra",
    sub: "Fiiller",
  },
  {
    de: "kommerzialisieren",
    tr: "Ticarileştirmek",
    cat: "Ekstra",
    sub: "Fiiller",
  },
  {
    de: "kommunalisieren",
    tr: "Kamulaştırmak (Yerel)",
    cat: "Ekstra",
    sub: "Fiiller",
  },
  {
    de: "lokalisieren",
    tr: "Yerini saptamak / Yerelleştirmek",
    cat: "Ekstra",
    sub: "Fiiller",
  },
  {
    de: "stabilisieren",
    tr: "İstikrara kavuşturmak",
    cat: "Ekstra",
    sub: "Fiiller",
  },
  { de: "urbanisieren", tr: "Kentleştirmek", cat: "Ekstra", sub: "Fiiller" },

  // 2. BÖLÜM: ULAŞIM VE LOJİSTİK (VERKEHR & LOGISTIK) - İsimler
  {
    de: "das Depot",
    tr: "Depo, ambar",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "der Endverbraucher",
    tr: "Son tüketici",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Fahrgemeinschaft",
    tr: "Yolculuk paylaşımı",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "der Flächenfraß",
    tr: "Aşırı arazi kullanımı (betonlaşma)",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Fracht",
    tr: "Yük, kargo",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Lieferkette",
    tr: "Tedarik zinciri",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Mitfahrzentrale",
    tr: "Yolculuk paylaşım platformu",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Pendelfahrt",
    tr: "Mekik seferi (Gidiş-Geliş)",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Reederei",
    tr: "Gemi işletmesi, armatörlük",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Senkung",
    tr: "Düşüş, azaltma",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Spedition",
    tr: "Nakliye firması",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Stückzahl",
    tr: "Adet sayısı",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "der Strom",
    tr: "Akış (Veri/Mal)",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "die Treibhausgasemission",
    tr: "Sera gazı emisyonu",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "der Umstieg",
    tr: "Aktarma / Geçiş",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "der Verkehrsknotenpunkt",
    tr: "Ulaşım düğüm noktası",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  { de: "die Werft", tr: "Tersane", cat: "Ulaşım & Lojistik", sub: "İsimler" },
  {
    de: "der Warenumschlagplatz",
    tr: "Mal aktarma yeri (Liman vb.)",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },
  {
    de: "der Zwischenhändler",
    tr: "Aracı, komisyoncu",
    cat: "Ulaşım & Lojistik",
    sub: "İsimler",
  },

  // 2. BÖLÜM: ULAŞIM VE LOJİSTİK - Fiiller
  {
    de: "ab|wickeln",
    tr: "Halletmek, yürütmek (işi)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "an|treiben",
    tr: "Güç vermek, hareket ettirmek",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "ein|kalkulieren",
    tr: "Hesaba katmak (riski)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "ein|treiben",
    tr: "Tahsil etmek (borç)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "entladen",
    tr: "Boşaltmak (yük)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "entziehen",
    tr: "Elinden almak (ehliyet)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "herab|setzen",
    tr: "Düşürmek, azaltmak (fiyat/hız)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "vertreiben",
    tr: "Satışını/Dağıtımını yapmak",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "voran|treiben",
    tr: "Hızlandırmak, ilerletmek",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },
  {
    de: "versiegeln",
    tr: "Betonla kaplamak (toprağı)",
    cat: "Ulaşım & Lojistik",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: ULAŞIM VE LOJİSTİK - Sıfatlar
  {
    de: "lebenswert",
    tr: "Yaşanmaya değer, yaşanabilir",
    cat: "Ulaşım & Lojistik",
    sub: "Sıfatlar",
  },
  {
    de: "motorisiert",
    tr: "Motorlu",
    cat: "Ulaşım & Lojistik",
    sub: "Sıfatlar",
  },
  {
    de: "zulässig",
    tr: "İzin verilen, yasal",
    cat: "Ulaşım & Lojistik",
    sub: "Sıfatlar",
  },
  {
    de: "auf dem Tisch liegen",
    tr: "Masada olmak (gündemde)",
    cat: "Ulaşım & Lojistik",
    sub: "Kalıplar",
  },
];

const AlmancaApp = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Industrial & Logistics Theme */}
      <header className="bg-gradient-to-r from-amber-600 via-orange-700 to-slate-800 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Truck className="text-slate-200 w-8 h-8" />
              <span>
                Logistik <span className="text-amber-200">&</span> Energie
              </span>
            </h1>
            <p className="text-orange-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Zap size={14} className="text-slate-200" /> Tedarik, Altyapı ve
              Ulaşım Terimleri
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-slate-900 shadow-lg"
                  : "text-slate-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-orange-800 shadow-lg"
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
                      ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-800"
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
          <Factory className="text-amber-600" /> Kelime Kartları
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
      case "Tedarik & Enerji":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Ulaşım & Lojistik":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "Süreçler (-isierung)":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Tedarik & Enerji")
      return <Zap size={20} className="text-white" />;
    if (cat === "Ulaşım & Lojistik")
      return <Truck size={20} className="text-white" />;
    if (cat === "Süreçler (-isierung)")
      return <Settings size={20} className="text-white" />;
    return <Container size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Tedarik & Enerji")
      return "bg-gradient-to-br from-amber-600 to-orange-700";
    if (cat === "Ulaşım & Lojistik")
      return "bg-gradient-to-br from-slate-600 to-blue-800";
    if (cat === "Süreçler (-isierung)")
      return "bg-gradient-to-br from-indigo-600 to-purple-700";
    return "bg-gradient-to-br from-gray-600 to-gray-700";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-amber-300">
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}
          >
            {item.cat}
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
                "border-2 border-slate-100 bg-white hover:border-amber-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-amber-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-xl hover:bg-amber-800 active:scale-95 transition-all shadow-lg shadow-amber-400 font-bold text-lg"
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

export default AlmancaApp;
