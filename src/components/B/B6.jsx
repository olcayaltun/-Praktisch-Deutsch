import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  History,
  Hourglass,
  Scroll,
  Landmark,
  Crown,
  Sword,
  Feather,
  Layers,
} from "lucide-react";

// --- YENİ VERİ SETİ (Geschichte & Epochen) ---
const rawData = [
  // 1. BÖLÜM: EREIGNISSE UND EPOCHEN - İsimler
  {
    de: "der Adel",
    tr: "Soyluluk, asiller sınıfı",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Adlige / die Adlige",
    tr: "Soylu (erkek/kadın)",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Altgriechisch",
    tr: "Eski Yunanca",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Antike",
    tr: "Antik Çağ",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Aufklärung",
    tr: "Aydınlanma Çağı",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Ausbreitung",
    tr: "Yayılma",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Bewegung (gesellschaftlich)",
    tr: "(Toplumsal) Hareket",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Bischof",
    tr: "Piskopos",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Christentum",
    tr: "Hristiyanlık",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Entdeckung",
    tr: "Keşif",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Epoche",
    tr: "Çağ, devir, dönem",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  { de: "das Erbe", tr: "Miras", cat: "Olaylar & Dönemler", sub: "İsimler" },
  {
    de: "die Eroberung",
    tr: "Fetih",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  { de: "der Fund", tr: "Buluntu", cat: "Olaylar & Dönemler", sub: "İsimler" },
  {
    de: "der Gebrauch",
    tr: "Kullanım",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Geistliche / die Geistliche",
    tr: "Din adamı, ruhban",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  { de: "der Glaube", tr: "İnanç", cat: "Olaylar & Dönemler", sub: "İsimler" },
  {
    de: "die Industrialisierung",
    tr: "Sanayileşme",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Kaiser",
    tr: "İmparator",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Kolonialzeit",
    tr: "Sömürge dönemi",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Konfession",
    tr: "Mezhep",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Königreich",
    tr: "Krallık",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Latein",
    tr: "Latince",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Mittelalter",
    tr: "Orta Çağ",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Nationalstaat",
    tr: "Ulus devlet",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Neuzeit",
    tr: "Yeni Çağ",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Oberhaupt",
    tr: "Lider, önder, baş",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  { de: "der Papst", tr: "Papa", cat: "Olaylar & Dönemler", sub: "İsimler" },
  { de: "die Quelle", tr: "Kaynak", cat: "Olaylar & Dönemler", sub: "İsimler" },
  {
    de: "das Randgebiet",
    tr: "Kenar bölge",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  { de: "die Reform", tr: "Reform", cat: "Olaylar & Dönemler", sub: "İsimler" },
  {
    de: "die Reformation",
    tr: "Reformasyon (Dini reform)",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "das Reich (Römisches/Kaiser-)",
    tr: "İmparatorluk/Krallık (Roma vb.)",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Stadtkern",
    tr: "Şehir merkezi",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Stadtstaat",
    tr: "Şehir devleti",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Stand",
    tr: "Sınıf, statü, zümre",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Übergang",
    tr: "Geçiş",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Vernunft",
    tr: "Akıl, mantık",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "die Völkerwanderung",
    tr: "Kavimler Göçü",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },
  {
    de: "der Zerfall",
    tr: "Çöküş, parçalanma",
    cat: "Olaylar & Dönemler",
    sub: "İsimler",
  },

  // 1. BÖLÜM: EREIGNISSE UND EPOCHEN - Fiiller
  {
    de: "sich aus|breiten",
    tr: "Yayılmak",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  {
    de: "bilden (eine Gruppe)",
    tr: "Oluşturmak",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  {
    de: "christianisieren",
    tr: "Hristiyanlaştırmak",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  {
    de: "ein|wandern",
    tr: "Göç etmek (ülkeye girmek)",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  { de: "erobern", tr: "Fethetmek", cat: "Olaylar & Dönemler", sub: "Fiiller" },
  {
    de: "prägen",
    tr: "Şekillendirmek, damga vurmak",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  {
    de: "spalten",
    tr: "Bölmek, ayırmak",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  {
    de: "überliefern",
    tr: "Aktarmak (nesilden nesile)",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },
  { de: "verbreiten", tr: "Yaymak", cat: "Olaylar & Dönemler", sub: "Fiiller" },
  {
    de: "sich zusammen|setzen aus",
    tr: "...-den oluşmak",
    cat: "Olaylar & Dönemler",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: EREIGNISSE UND EPOCHEN - Sıfatlar
  { de: "antik", tr: "Antik", cat: "Olaylar & Dönemler", sub: "Sıfatlar" },
  {
    de: "archäologisch",
    tr: "Arkeolojik",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "christlich",
    tr: "Hristiyan (sıfat)",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "evangelisch",
    tr: "Protestan",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "geistig",
    tr: "Zihinsel, fikri",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "geistlich",
    tr: "Ruhani, dini",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "industriell",
    tr: "Endüstriyel",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "katholisch",
    tr: "Katolik",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  { de: "lebendig", tr: "Canlı", cat: "Olaylar & Dönemler", sub: "Sıfatlar" },
  {
    de: "mittelalterlich",
    tr: "Orta Çağ'a ait",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "ortsansässig",
    tr: "Yerli, orada ikamet eden",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "römisch",
    tr: "Romalı, Roma'ya ait",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "weltlich",
    tr: "Dünyevi, laik",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "infolge",
    tr: "Sonucunda, nedeniyle",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },
  {
    de: "an der Spitze stehen",
    tr: "Başında durmak (devlet vb.)",
    cat: "Olaylar & Dönemler",
    sub: "Sıfatlar",
  },

  // 2. BÖLÜM: DIE MODERNE - İsimler
  {
    de: "die Blütezeit",
    tr: "Altın çağ, yükselme dönemi",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  { de: "die Diktatur", tr: "Diktatörlük", cat: "Modern Çağ", sub: "İsimler" },
  { de: "die Grundlage", tr: "Temel, esas", cat: "Modern Çağ", sub: "İsimler" },
  {
    de: "die Herrschaft (Kolonial/Militär)",
    tr: "Hakimiyet (Sömürge/Askeri)",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  { de: "der Herrscher", tr: "Hükümdar", cat: "Modern Çağ", sub: "İsimler" },
  {
    de: "der Mauerfall",
    tr: "Duvarın yıkılışı (Berlin)",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "das Militär",
    tr: "Ordu, askeriye",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "die Moderne",
    tr: "Modern dönem/çağ",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  { de: "die Monarchie", tr: "Monarşi", cat: "Modern Çağ", sub: "İsimler" },
  {
    de: "die Nachkriegszeit",
    tr: "Savaş sonrası dönem",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "der Nationalsozialismus",
    tr: "Nasyonal Sosyalizm",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "die Sowjetunion",
    tr: "Sovyetler Birliği",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "die Teilung (deutsche)",
    tr: "Bölünme (Almanya)",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "der Überfall (auf)",
    tr: "Saldırı, baskın",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "die Wiedervereinigung",
    tr: "Yeniden birleşme (Almanya)",
    cat: "Modern Çağ",
    sub: "İsimler",
  },
  {
    de: "das Wirtschaftswunder",
    tr: "Ekonomik mucize",
    cat: "Modern Çağ",
    sub: "İsimler",
  },

  // 2. BÖLÜM: DIE MODERNE - Fiiller/Sıfatlar
  {
    de: "aus|brechen",
    tr: "Patlak vermek (savaş, kriz)",
    cat: "Modern Çağ",
    sub: "Fiiller",
  },
  {
    de: "reformieren",
    tr: "Reform yapmak, yenilemek",
    cat: "Modern Çağ",
    sub: "Fiiller",
  },
  {
    de: "sich verstärken",
    tr: "Güçlenmek, artmak",
    cat: "Modern Çağ",
    sub: "Fiiller",
  },
  { de: "erfolglos", tr: "Başarısız", cat: "Modern Çağ", sub: "Sıfatlar" },
  { de: "erfolgreich", tr: "Başarılı", cat: "Modern Çağ", sub: "Sıfatlar" },
  {
    de: "stabil",
    tr: "İstikrarlı, sağlam",
    cat: "Modern Çağ",
    sub: "Sıfatlar",
  },

  // 3. KUTU: KALIPLAŞMIŞ İFADELER
  {
    de: "einen Vertrag (ab)schließen",
    tr: "Antlaşma imzalamak/yapmak",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "der Vertrags(ab)schluss",
    tr: "Antlaşma imzalama/yapma",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "einen Krieg führen",
    tr: "Savaş yürütmek",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "die Kriegsführung",
    tr: "Savaş yönetimi/stratejisi",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "Einfluss nehmen",
    tr: "Etki etmek, nüfuz etmek",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "die Einflussnahme",
    tr: "Etki etme / Nüfuz",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "Frieden schließen",
    tr: "Barış yapmak",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "der Friedensschluss",
    tr: "Barış antlaşması",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "sich etwas zum Ziel setzen",
    tr: "Kendine hedef koymak",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
  },
  {
    de: "die Zielsetzung",
    tr: "Hedef belirleme",
    cat: "Kalıplar",
    sub: "Fiil-İsim",
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
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Header - Historical Theme */}
      <header className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-amber-50 p-6 shadow-xl relative overflow-hidden border-b-4 border-amber-700">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight font-serif">
              <History className="text-amber-500 w-8 h-8" />
              <span>
                Geschichte <span className="text-stone-400">&</span> Epochen
              </span>
            </h1>
            <p className="text-stone-300 text-sm mt-1 font-medium pl-11 flex items-center gap-2 italic">
              <Scroll size={14} className="text-amber-200" /> Tarih, Dönemler ve
              Modern Çağ Sözlüğü
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/5 p-1.5 rounded-xl backdrop-blur-sm border border-amber-900/30">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-amber-700 text-white shadow-lg border border-amber-600"
                  : "text-amber-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-stone-700 text-white shadow-lg border border-stone-600"
                  : "text-stone-300 hover:bg-white/10"
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
          <Layers size={20} className="text-stone-400 min-w-fit" />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 border font-serif
                  ${
                    selectedCategory === cat
                      ? "bg-stone-800 text-amber-50 border-stone-800 shadow-md shadow-stone-300"
                      : "bg-white text-stone-600 border-stone-300 hover:border-amber-600 hover:text-amber-800"
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
        <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
          <Hourglass className="text-amber-700" /> Kelime Kartları
        </h2>
        <span className="text-sm font-semibold text-stone-500 bg-stone-200 px-3 py-1 rounded-full shadow-sm border border-stone-300">
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
      case "Olaylar & Dönemler":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "Modern Çağ":
        return "bg-stone-200 text-stone-800 border-stone-300";
      case "Kalıplar":
        return "bg-red-50 text-red-900 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Olaylar & Dönemler")
      return <Crown size={24} className="text-white opacity-80" />;
    if (cat === "Modern Çağ")
      return <Landmark size={24} className="text-white opacity-80" />;
    if (cat === "Kalıplar")
      return <Feather size={24} className="text-white opacity-80" />;
    return <History size={24} className="text-white opacity-80" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Olaylar & Dönemler")
      return "bg-gradient-to-br from-amber-700 to-yellow-800";
    if (cat === "Modern Çağ")
      return "bg-gradient-to-br from-stone-600 to-stone-800";
    if (cat === "Kalıplar") return "bg-gradient-to-br from-red-800 to-rose-900";
    return "bg-gradient-to-br from-gray-600 to-gray-700";
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group perspective h-56 cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-all duration-700 preserve-3d shadow-md hover:shadow-xl rounded-xl ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* ÖN YÜZ (Almanca) - Parchment Effect */}
        <div className="absolute w-full h-full backface-hidden bg-[#fdfbf7] border border-[#e3dcd2] rounded-xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-amber-400">
          <div
            className={`px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border ${badgeColor}`}
          >
            {item.cat}
          </div>

          <div className="flex-1 flex items-center justify-center w-full">
            <h3 className="text-xl font-bold text-stone-800 font-serif leading-tight">
              {item.de}
            </h3>
          </div>

          <div className="text-xs font-medium text-stone-400 flex items-center gap-1 italic">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {item.sub}
          </div>
        </div>

        {/* ARKA YÜZ (Türkçe) - Historic Binding Effect */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner text-amber-50 ${getGradient(
            item.cat
          )} border-4 border-opacity-20 border-white`}
        >
          <div className="bg-white/10 p-3 rounded-full mb-3 backdrop-blur-md shadow-lg">
            {getIcon(item.cat)}
          </div>
          <h3 className="text-lg font-medium leading-relaxed drop-shadow-md font-serif">
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
      <div className="p-6 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl flex items-center gap-3">
        <AlertCircle />
        Bu kategoride sınav yapmak için yeterli kelime yok. Lütfen "Tümü"
        kategorisini deneyin.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      {/* Skor Kartı */}
      <div className="flex justify-between items-center mb-8 bg-[#fdfbf7] p-5 rounded-lg shadow-sm border border-[#e3dcd2]">
        <div>
          <h2 className="font-bold text-stone-800 text-lg font-serif">
            {categoryName} Testi
          </h2>
          <p className="text-sm text-stone-500 font-medium mt-1">
            Soru {questionCount + 1}
          </p>
        </div>
        <div className="flex items-center gap-4 text-right">
          <div className="flex flex-col items-end">
            <span className="text-2xl font-bold text-stone-700">{score}</span>
            <span className="text-xs text-stone-400 font-bold uppercase tracking-wide">
              Doğru
            </span>
          </div>
          {wrongAnswers.length > 0 && (
            <div className="flex flex-col items-end pl-4 border-l border-stone-200">
              <span className="text-2xl font-bold text-red-800">
                {wrongAnswers.length}
              </span>
              <span className="text-xs text-red-400 font-bold uppercase tracking-wide">
                Yanlış
              </span>
            </div>
          )}
        </div>
      </div>

      {currentQuestion && (
        <div className="bg-[#fdfbf7] p-8 rounded-xl shadow-xl border border-[#e3dcd2] relative overflow-hidden">
          {/* Soru Başlığı */}
          <div className="mb-8 text-center relative z-10">
            <span className="inline-block px-3 py-1 rounded-sm bg-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider mb-4">
              Bu terimin anlamı nedir?
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-stone-800 font-serif tracking-tight">
              {currentQuestion.de}
            </h3>
          </div>

          {/* Şıklar */}
          <div className="grid gap-3 relative z-10">
            {options.map((opt, idx) => {
              let btnClass =
                "border-2 border-stone-200 bg-white hover:border-amber-400 hover:bg-amber-50 text-stone-600";
              let icon = null;

              if (selectedOption) {
                if (opt.de === currentQuestion.de) {
                  // DOĞRU ŞIK
                  btnClass =
                    "bg-green-50 border-green-600 text-green-800 shadow-md transform scale-[1.02]";
                  icon = <Check size={22} className="text-green-700" />;
                } else if (opt === selectedOption && !isCorrect) {
                  // YANLIŞ ŞIK
                  btnClass = "bg-red-50 border-red-500 text-red-800";
                  icon = <X size={22} className="text-red-700" />;
                } else {
                  // DİĞERLERİ
                  btnClass = "opacity-40 border-stone-200 grayscale";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  disabled={!!selectedOption}
                  className={`w-full p-5 rounded-lg text-left transition-all duration-300 font-semibold text-lg flex justify-between items-center group ${btnClass}`}
                >
                  <span className="flex-1 font-serif">{opt.tr}</span>
                  {icon}
                  {!selectedOption && (
                    <div className="w-4 h-4 rounded-full border-2 border-stone-300 group-hover:border-amber-500 transition-colors"></div>
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
                className="flex items-center gap-2 bg-stone-800 text-amber-50 px-8 py-4 rounded-lg hover:bg-stone-700 active:scale-95 transition-all shadow-lg font-bold text-lg font-serif"
              >
                Sonraki <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Yanlış Cevaplar Özeti */}
      {wrongAnswers.length > 0 && (
        <div className="mt-12 bg-[#fff5f5] rounded-xl shadow-sm border border-red-200 overflow-hidden">
          <div className="bg-red-100 p-4 border-b border-red-200 flex items-center gap-2">
            <AlertCircle className="text-red-700" />
            <h3 className="text-red-900 font-bold font-serif">
              Tekrar Edilmesi Gerekenler
            </h3>
          </div>
          <div className="p-4 grid gap-3">
            {wrongAnswers.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-lg border border-red-100 shadow-sm gap-2"
              >
                <span className="font-bold text-stone-800 text-lg font-serif">
                  {item.de}
                </span>
                <span className="text-stone-500 italic">{item.tr}</span>
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
