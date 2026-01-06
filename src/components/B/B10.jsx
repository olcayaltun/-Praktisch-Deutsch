import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Leaf,
  CloudRain,
  Recycle,
  ThermometerSun,
  Wind,
  Layers,
  MessageCircle,
} from "lucide-react";

// --- YENİ VERİ SETİ (Nachhaltigkeit & Klima) ---
const rawData = [
  // 1. BÖLÜM: SÜRDÜRÜLEBİLİRLİK (NACHHALTIGKEIT) - İsimler
  {
    de: "die Abholzung",
    tr: "Ağaç kesimi, ormansızlaştırma",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Artensterben",
    tr: "Türlerin yok olması",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Artenvielfalt",
    tr: "Biyoçeşitlilik, tür çeşitliliği",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Ausbau",
    tr: "Genişletme, yapılaşma",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Ausbeutung",
    tr: "Sömürü, (doğayı) aşırı kullanma",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Ausstoß",
    tr: "Salınım, emisyon",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Einwegplastik",
    tr: "Tek kullanımlık plastik",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Elektrofahrzeug",
    tr: "Elektrikli araç",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Elektromobilität",
    tr: "Elektromobilite",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Emission",
    tr: "Emisyon, (gaz) salımı",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Erzeugung (Strom/Energie)",
    tr: "Üretim (Elektrik/Enerji)",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der ökologische Fußabdruck",
    tr: "Ekolojik ayak izi",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  { de: "die Kohle", tr: "Kömür", cat: "Sürdürülebilirlik", sub: "İsimler" },
  {
    de: "der Kohleausstieg",
    tr: "Kömür kullanımını bırakma",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Kohlendioxid (CO₂)",
    tr: "Karbondioksit",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Kreislauf (Nahrungs-)",
    tr: "Döngü (Besin)",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Lebensraum",
    tr: "Yaşam alanı, habitat",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Lebensstandard",
    tr: "Yaşam standardı",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Massentierhaltung",
    tr: "Endüstriyel hayvancılık",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Mikroplastik",
    tr: "Mikroplastik",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Nachhaltigkeit",
    tr: "Sürdürülebilirlik",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Nährstoff",
    tr: "Besin maddesi",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der ÖPNV",
    tr: "Toplu taşıma",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Partikel (Kunststoff)",
    tr: "Parçacık (Plastik)",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Radioaktivität",
    tr: "Radyoaktivite",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Regenwald",
    tr: "Yağmur ormanı",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Ressource",
    tr: "Kaynak",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Rohstoff",
    tr: "Hammadde",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Rückgang",
    tr: "Gerileme, azalma",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Rückstand",
    tr: "Kalıntı, bakiye",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Stoff (Gift/Schad)",
    tr: "Madde (Zehirli/Zararlı)",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Umstellung (von... auf)",
    tr: "Dönüşüm, geçiş",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Umstieg (von... auf)",
    tr: "Geçiş (araç/sistem)",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "der Verbrennungsmotor",
    tr: "İçten yanmalı motor",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "die Verkehrswende",
    tr: "Ulaşım devrimi",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Wegwerfprodukt",
    tr: "Kullan-at ürünü",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },
  {
    de: "das Verkehrswesen",
    tr: "Ulaşım sektörü/sistemi",
    cat: "Sürdürülebilirlik",
    sub: "İsimler",
  },

  // 1. BÖLÜM: SÜRDÜRÜLEBİLİRLİK - Fiiller
  {
    de: "ab|bauen",
    tr: "(Maden) Çıkarmak / (Biyolojik) Parçalamak",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "ab|schaffen",
    tr: "Kaldırmak, iptal etmek",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "auf|nehmen (Nahrung)",
    tr: "Bünyeye almak (besin)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "aus|stoßen",
    tr: "Salmak, yaymak (gaz)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "durchbrechen",
    tr: "Kırmak, delmek (döngüyü)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "ein|schränken",
    tr: "Kısıtlamak (tüketimi)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "erhalten",
    tr: "Korumak, muhafaza etmek (doğayı)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "erzeugen",
    tr: "Üretmek (elektrik, ısı)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "frei|setzen",
    tr: "Açığa çıkarmak (gazları)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "gelangen in",
    tr: "Ulaşmak, karışmak (suya vb.)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "halten (Standard)",
    tr: "Korumak, tutmak (standardı)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "überdenken",
    tr: "Gözden geçirmek (davranışı)",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "verschwenden",
    tr: "İsraf etmek",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "wieder|verwenden",
    tr: "Yeniden kullanmak",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },
  {
    de: "zerfallen zu",
    tr: "Parçalanarak ...-e dönüşmek",
    cat: "Sürdürülebilirlik",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: SÜRDÜRÜLEBİLİRLİK - Sıfatlar
  {
    de: "abbaubar (biologisch)",
    tr: "Çözünebilir (biyolojik)",
    cat: "Sürdürülebilirlik",
    sub: "Sıfatlar",
  },
  {
    de: "nachhaltig",
    tr: "Sürdürülebilir",
    cat: "Sürdürülebilirlik",
    sub: "Sıfatlar",
  },
  {
    de: "ab jetzt",
    tr: "Şu andan itibaren",
    cat: "Sürdürülebilirlik",
    sub: "Sıfatlar",
  },
  {
    de: "sowie",
    tr: "Ve ayrıca, yanı sıra",
    cat: "Sürdürülebilirlik",
    sub: "Sıfatlar",
  },
  {
    de: "zu Lasten von",
    tr: "...-nın aleyhine / zararına",
    cat: "Sürdürülebilirlik",
    sub: "Sıfatlar",
  },

  // 2. BÖLÜM: İKLİM VE GELECEK - İsimler
  {
    de: "der Anteil",
    tr: "Pay, oran, hisse",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "die Atmosphäre (Erd-)",
    tr: "Atmosfer (Dünya)",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "die Auswirkung",
    tr: "Etki, sonuç",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "der Dampf (Wasser-)",
    tr: "Buhar (Su)",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  { de: "die Dürre", tr: "Kuraklık", cat: "İklim & Gelecek", sub: "İsimler" },
  {
    de: "der Treibhauseffekt",
    tr: "Sera etkisi",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  { de: "der Gletscher", tr: "Buzul", cat: "İklim & Gelecek", sub: "İsimler" },
  {
    de: "das Hochwasser",
    tr: "Sel, su taşkını",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "die Hülle",
    tr: "Kılıf, örtü, kabuk",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "der Klimawandel",
    tr: "İklim değişikliği",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  { de: "das Methan", tr: "Metan", cat: "İklim & Gelecek", sub: "İsimler" },
  {
    de: "der Sauerstoff (O₂)",
    tr: "Oksijen",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "die Schicht",
    tr: "Tabaka, katman",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "der Spiegel (Meeres-)",
    tr: "Seviye (Deniz)",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  {
    de: "der Strahl (Sonnen-)",
    tr: "Işın (Güneş)",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },
  { de: "das Treibhaus", tr: "Sera", cat: "İklim & Gelecek", sub: "İsimler" },
  {
    de: "die Überschwemmung",
    tr: "Su baskını, sel felaketi",
    cat: "İklim & Gelecek",
    sub: "İsimler",
  },

  // 2. BÖLÜM: İKLİM VE GELECEK - Fiiller
  {
    de: "an|steigen",
    tr: "Yükselmek, artmak",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  {
    de: "aus|bleiben",
    tr: "Gerçekleşmemek (yağmur vb.)",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  {
    de: "sich aus|breiten",
    tr: "Yayılmak",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  {
    de: "aus|treten (aus)",
    tr: "Dışarı çıkmak, sızmak",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  {
    de: "reflektieren",
    tr: "Yansıtmak",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  { de: "schmelzen", tr: "Erimek", cat: "İklim & Gelecek", sub: "Fiiller" },
  {
    de: "überschwemmen",
    tr: "Sular altında bırakmak",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  {
    de: "um|wandeln",
    tr: "Dönüştürmek",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },
  {
    de: "umgeben von",
    tr: "... ile çevrili",
    cat: "İklim & Gelecek",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: İKLİM VE GELECEK - Sıfatlar
  {
    de: "gasförmig",
    tr: "Gaz halinde",
    cat: "İklim & Gelecek",
    sub: "Sıfatlar",
  },
  {
    de: "lebenswichtig",
    tr: "Hayati önem taşıyan",
    cat: "İklim & Gelecek",
    sub: "Sıfatlar",
  },

  // 3. KUTULAR: DEYİMLER
  {
    de: "aus einer Mücke einen Elefanten machen",
    tr: "Pireyi deve yapmak (abartmak)",
    cat: "Deyimler & Kalıplar",
    sub: "Hayvanlar",
  },
  {
    de: "ein Angsthase sein",
    tr: "Ödlek/Korkak olmak",
    cat: "Deyimler & Kalıplar",
    sub: "Hayvanlar",
  },
  {
    de: "Es kommt zu...",
    tr: "... meydana gelir / yol açar",
    cat: "Deyimler & Kalıplar",
    sub: "Sebep-Sonuç",
  },
  {
    de: "Der Grund liegt in...",
    tr: "Sebebi ...-da yatar",
    cat: "Deyimler & Kalıplar",
    sub: "Sebep-Sonuç",
  },
];

const B10 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-green-50 font-sans text-slate-800">
      {/* Header - Eco/Nature Theme */}
      <header className="bg-gradient-to-r from-emerald-800 via-teal-900 to-sky-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Leaf className="text-emerald-400 w-8 h-8" />
              <span>
                Nachhaltigkeit <span className="text-sky-300">&</span> Klima
              </span>
            </h1>
            <p className="text-emerald-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Recycle size={14} className="text-emerald-200" />{" "}
              Sürdürülebilirlik, İklim ve Gelecek Terimleri
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-emerald-900 shadow-lg"
                  : "text-emerald-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-sky-800 shadow-lg"
                  : "text-sky-200 hover:bg-white/10"
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
                      ? "bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-800"
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
          <ThermometerSun className="text-emerald-600" /> Kelime Kartları
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
      case "Sürdürülebilirlik":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "İklim & Gelecek":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Deyimler & Kalıplar":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Sürdürülebilirlik")
      return <Leaf size={20} className="text-white" />;
    if (cat === "İklim & Gelecek")
      return <CloudRain size={20} className="text-white" />;
    if (cat === "Deyimler & Kalıplar")
      return <MessageCircle size={20} className="text-white" />;
    return <Wind size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Sürdürülebilirlik")
      return "bg-gradient-to-br from-emerald-600 to-green-700";
    if (cat === "İklim & Gelecek")
      return "bg-gradient-to-br from-sky-600 to-blue-700";
    if (cat === "Deyimler & Kalıplar")
      return "bg-gradient-to-br from-amber-500 to-orange-600";
    return "bg-gradient-to-br from-slate-600 to-slate-700";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-emerald-300">
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
                "border-2 border-slate-100 bg-white hover:border-emerald-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-emerald-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl hover:bg-emerald-800 active:scale-95 transition-all shadow-lg shadow-emerald-400 font-bold text-lg"
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

export default B10;
