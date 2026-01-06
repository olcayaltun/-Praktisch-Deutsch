import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Landmark,
  Vote,
  Flag,
  Scale,
  Layers,
  ScrollText,
} from "lucide-react";

// --- YENİ VERİ SETİ (Gewaltenteilung & Demokratie) ---
const rawData = [
  // 1. BÖLÜM: GÜÇLER AYRILIĞI (GEWALTENTEILUNG) - İsimler
  {
    de: "die Bestrebung",
    tr: "Çaba, gayret, emel (siyasi)",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "die Fehleinschätzung",
    tr: "Yanlış değerlendirme",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "die Gewaltenteilung",
    tr: "Güçler ayrılığı",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "das Grundgesetz",
    tr: "Anayasa (Almanya)",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "die Gunst",
    tr: "Lütuf, teveccüh",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "der Machtmissbrauch",
    tr: "Gücü kötüye kullanma",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "die Staatsgewalt",
    tr: "Devlet gücü/otoritesi",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "der Sturz",
    tr: "Devrilme, düşüş (Hükümet)",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "die Verfassungsänderung",
    tr: "Anayasa değişikliği",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "die Verfassungsmäßigkeit",
    tr: "Anayasaya uygunluk",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },
  {
    de: "der Verfassungsschutz",
    tr: "Anayasayı Koruma Teşkilatı",
    cat: "Güçler Ayrılığı",
    sub: "İsimler",
  },

  // 1. BÖLÜM: GÜÇLER AYRILIĞI - Fiiller
  {
    de: "an|wenden",
    tr: "Uygulamak (yasa)",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },
  {
    de: "auf|heben",
    tr: "Yürürlükten kaldırmak",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },
  {
    de: "aus|legen",
    tr: "Yorumlamak (yasa)",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },
  {
    de: "aus|tragen",
    tr: "Sonuçlandırmak, yürütmek (çatışma)",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },
  {
    de: "ein|bringen",
    tr: "Sunmak (yasa tasarısı)",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },
  {
    de: "verschärfen",
    tr: "Sertleştirmek, ağırlaştırmak",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },
  {
    de: "sich verspielen",
    tr: "Kaybetmek, heba etmek (şans/itibar)",
    cat: "Güçler Ayrılığı",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: GÜÇLER AYRILIĞI - Sıfatlar
  {
    de: "charismatisch",
    tr: "Karizmatik",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "eklatant",
    tr: "Göze batan, bariz (hata)",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "illiberal",
    tr: "Özgürlükçü olmayan",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "lebendig (Demokratie)",
    tr: "Canlı, işleyen (demokrasi)",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  { de: "progressiv", tr: "İlerici", cat: "Güçler Ayrılığı", sub: "Sıfatlar" },
  {
    de: "rechtsstaatlich",
    tr: "Hukuk devletine uygun",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "säkular",
    tr: "Seküler, laik",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "schwelend (Konflikt)",
    tr: "İçten içe yanan (çatışma)",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "souverän",
    tr: "Egemen, bağımsız",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "verfassungsfeindlich",
    tr: "Anayasa düşmanı",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "verfassungskonform",
    tr: "Anayasaya uygun",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },
  {
    de: "verfassungstreu",
    tr: "Anayasaya sadık",
    cat: "Güçler Ayrılığı",
    sub: "Sıfatlar",
  },

  // KUTU: GÜÇLER AYRILIĞI (KAVRAMLAR)
  {
    de: "die Legislative",
    tr: "Yasama (Yasa koyucu)",
    cat: "Kavramlar & Seçim",
    sub: "Güçler",
  },
  {
    de: "die Exekutive",
    tr: "Yürütme (Uygulayıcı)",
    cat: "Kavramlar & Seçim",
    sub: "Güçler",
  },
  {
    de: "die Judikative",
    tr: "Yargı (Yargılayıcı)",
    cat: "Kavramlar & Seçim",
    sub: "Güçler",
  },
  {
    de: "die Vierte Gewalt",
    tr: "Dördüncü Kuvvet (Medya)",
    cat: "Kavramlar & Seçim",
    sub: "Güçler",
  },

  // KUTU: SEÇİMLER (WAHLEN)
  {
    de: "wählen",
    tr: "Oy kullanmak, seçmek",
    cat: "Kavramlar & Seçim",
    sub: "Seçim",
  },
  {
    de: "an die Urne gehen",
    tr: "Sandığa gitmek",
    cat: "Kavramlar & Seçim",
    sub: "Seçim",
  },
  { de: "abstimmen", tr: "Oylamak", cat: "Kavramlar & Seçim", sub: "Seçim" },
  {
    de: "zur Wahl gehen",
    tr: "Seçime gitmek",
    cat: "Kavramlar & Seçim",
    sub: "Seçim",
  },
  {
    de: "stimmen für",
    tr: "Bir partiye oy vermek",
    cat: "Kavramlar & Seçim",
    sub: "Seçim",
  },

  // 1. BÖLÜM: İFADELER
  {
    de: "auf mehreren Säulen ruhen",
    tr: "Birkaç temel üzerine dayanmak",
    cat: "İfadeler",
    sub: "Genel",
  },
  {
    de: "eine Funktion haben gegenüber",
    tr: "Birine karşı işlevi olmak",
    cat: "İfadeler",
    sub: "Genel",
  },
  {
    de: "für nichtig erklären",
    tr: "Geçersiz/Hükümsüz ilan etmek",
    cat: "İfadeler",
    sub: "Hukuk",
  },
  {
    de: "auf dem Vormarsch sein",
    tr: "Yükselişte olmak",
    cat: "İfadeler",
    sub: "Genel",
  },
  {
    de: "nicht von langer Dauer sein",
    tr: "Uzun ömürlü olmamak",
    cat: "İfadeler",
    sub: "Genel",
  },
  {
    de: "an seine Grenzen stoßen",
    tr: "Sınırlarına dayanmak, tıkanmak",
    cat: "İfadeler",
    sub: "Genel",
  },

  // 2. BÖLÜM: İDEOLOJİLER (GESINNUNGEN) - İsimler
  {
    de: "der öffentliche Frieden",
    tr: "Kamu huzuru/barışı",
    cat: "İdeolojiler",
    sub: "İsimler",
  },
  { de: "die Maxime", tr: "İlke, düstur", cat: "İdeolojiler", sub: "İsimler" },
  {
    de: "die Volksverhetzung",
    tr: "Halkı kin ve düşmanlığa tahrik",
    cat: "İdeolojiler",
    sub: "İsimler",
  },
  { de: "die Willkür", tr: "Keyfilik", cat: "İdeolojiler", sub: "İsimler" },

  // 2. BÖLÜM: İDEOLOJİLER - Sıfatlar
  {
    de: "antifaschistisch",
    tr: "Antifaşist",
    cat: "İdeolojiler",
    sub: "Sıfatlar",
  },
  {
    de: "bürgerlich",
    tr: "Sivil / Burjuva",
    cat: "İdeolojiler",
    sub: "Sıfatlar",
  },
  {
    de: "haltlos",
    tr: "Asılsız, dayanaksız",
    cat: "İdeolojiler",
    sub: "Sıfatlar",
  },
  { de: "links", tr: "Sol, solcu", cat: "İdeolojiler", sub: "Sıfatlar" },
  { de: "patriotisch", tr: "Vatansever", cat: "İdeolojiler", sub: "Sıfatlar" },
  { de: "pazifistisch", tr: "Barışçıl", cat: "İdeolojiler", sub: "Sıfatlar" },
  { de: "populistisch", tr: "Popülist", cat: "İdeolojiler", sub: "Sıfatlar" },
  {
    de: "sozialdemokratisch",
    tr: "Sosyal demokrat",
    cat: "İdeolojiler",
    sub: "Sıfatlar",
  },
  { de: "rechts", tr: "Sağ, sağcı", cat: "İdeolojiler", sub: "Sıfatlar" },
  {
    de: "verächtlich",
    tr: "Aşağılayıcı, hor gören",
    cat: "İdeolojiler",
    sub: "Sıfatlar",
  },
  {
    de: "völkisch",
    tr: "Irkçı/Milliyetçi (Etnik)",
    cat: "İdeolojiler",
    sub: "Sıfatlar",
  },

  // KUTU: SEÇMEN TÜRLERİ
  {
    de: "der Erstwähler",
    tr: "İlk kez oy kullanan",
    cat: "Kavramlar & Seçim",
    sub: "Seçmen",
  },
  {
    de: "der Nichtwähler",
    tr: "Oy kullanmayan",
    cat: "Kavramlar & Seçim",
    sub: "Seçmen",
  },
  {
    de: "der Protestwähler",
    tr: "Tepki oyu veren",
    cat: "Kavramlar & Seçim",
    sub: "Seçmen",
  },
  {
    de: "der Stammwähler",
    tr: "Sadık/Kemik seçmen",
    cat: "Kavramlar & Seçim",
    sub: "Seçmen",
  },
  {
    de: "der Wechselwähler",
    tr: "Kararsız/Değişken seçmen",
    cat: "Kavramlar & Seçim",
    sub: "Seçmen",
  },

  // 2. BÖLÜM: İDEOLOJİLER - Fiiller
  {
    de: "an|stacheln zu",
    tr: "Kışkırtmak, teşvik etmek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "auf|hetzen gegen",
    tr: "Kışkırtmak, dolduruşa getirmek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "auf|wiegeln gegen",
    tr: "Ayaklandırmak, isyana teşvik etmek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "aus|sprechen (Vertrauen)",
    tr: "(Güven) Belirtmek, ifade etmek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "billigen",
    tr: "Onaylamak, uygun bulmak",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "entgegen|bringen",
    tr: "(Güven/İlgi) Göstermek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "erschüttern",
    tr: "Sarsmak (güveni)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "genießen",
    tr: "Görmek, sahip olmak (saygı)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "gewährleisten",
    tr: "Garanti etmek, sağlamak",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "gewinnen",
    tr: "Kazanmak (güven)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "gut|heißen",
    tr: "Tasvip etmek, doğru bulmak",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "hegen",
    tr: "Beslemek (şüphe/önyargı)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  { de: "leugnen", tr: "İnkar etmek", cat: "İdeolojiler", sub: "Fiiller" },
  { de: "nach|tragen", tr: "Kin gütmek", cat: "İdeolojiler", sub: "Fiiller" },
  {
    de: "rechtfertigen",
    tr: "Haklı çıkarmak",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "säen",
    tr: "Ekmek (nifak/güvensizlik)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "unterstellen",
    tr: "İtham etmek, atfetmek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "verharmlosen",
    tr: "Hafife almak, önemsiz göstermek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "verherrlichen",
    tr: "Güzellemek, yüceltmek (şiddet vb.)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "verleumden",
    tr: "İftira atmak, karalamak",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  { de: "wahren", tr: "Korumak, gözetmek", cat: "İdeolojiler", sub: "Fiiller" },
  {
    de: "zerstreuen",
    tr: "Gidermek, dağıtmak (şüphe)",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "zu|gestehen",
    tr: "(Hak) Tanımak, kabul etmek",
    cat: "İdeolojiler",
    sub: "Fiiller",
  },
  {
    de: "mit Misstrauen betrachten",
    tr: "Şüpheyle bakmak",
    cat: "İdeolojiler",
    sub: "Fiiller",
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
      {/* Header - Democracy & Politics Theme */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-red-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Landmark className="text-blue-200 w-8 h-8" />
              <span>
                Demokratie <span className="text-red-300">&</span> Politik
              </span>
            </h1>
            <p className="text-slate-300 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Vote size={14} className="text-slate-200" /> Güçler Ayrılığı,
              İdeolojiler ve Seçimler
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
                  ? "bg-white text-red-800 shadow-lg"
                  : "text-red-200 hover:bg-white/10"
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
                      ? "bg-slate-700 text-white border-slate-700 shadow-md shadow-slate-200"
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
          <ScrollText className="text-blue-600" /> Kelime Kartları
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
      case "Güçler Ayrılığı":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "İdeolojiler":
        return "bg-red-50 text-red-700 border-red-200";
      case "Kavramlar & Seçim":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Güçler Ayrılığı")
      return <Scale size={20} className="text-white" />;
    if (cat === "İdeolojiler") return <Flag size={20} className="text-white" />;
    if (cat === "Kavramlar & Seçim")
      return <Vote size={20} className="text-white" />;
    return <Landmark size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Güçler Ayrılığı")
      return "bg-gradient-to-br from-slate-600 to-gray-700";
    if (cat === "İdeolojiler")
      return "bg-gradient-to-br from-red-600 to-rose-700";
    if (cat === "Kavramlar & Seçim")
      return "bg-gradient-to-br from-blue-600 to-indigo-700";
    return "bg-gradient-to-br from-slate-600 to-slate-800";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-blue-300">
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
                "border-2 border-slate-100 bg-white hover:border-blue-300 hover:bg-slate-50 text-slate-600";
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
                className="flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 active:scale-95 transition-all shadow-lg shadow-blue-400 font-bold text-lg"
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
