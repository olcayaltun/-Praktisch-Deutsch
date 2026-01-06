import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Microscope,
  MessageSquare,
  Atom,
  FlaskConical,
  ScrollText,
  Layers,
  Sparkles,
} from "lucide-react";

// --- YENİ VERİ SETİ (Vorträge, Diskussionen & Naturwissenschaften) ---
const rawData = [
  // 1. BÖLÜM: VORTRÄGE UND DISKUSSIONEN - İsimler
  {
    de: "die Auffassung",
    tr: "Görüş, anlayış, kanı",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "die Befragung",
    tr: "Anket, sorgulama",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "die Behauptung",
    tr: "İddia, sav",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "das Experiment",
    tr: "Deney",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "der Grundsatz",
    tr: "İlke, prensip",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  { de: "das Prinzip", tr: "Prensip", cat: "Sunum & Tartışma", sub: "İsimler" },
  {
    de: "der Proband / die Probandin",
    tr: "Denek (test edilen kişi)",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "die Prognose",
    tr: "Tahmin, öngörü",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "die Schwerkraft",
    tr: "Yer çekimi",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "die Tagung",
    tr: "Konferans, sempozyum",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  { de: "die These", tr: "Tez, sav", cat: "Sunum & Tartışma", sub: "İsimler" },
  {
    de: "die Vorhersage",
    tr: "Tahmin (hava vb.)",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },
  {
    de: "das Auseinandergehen",
    tr: "Ayrılma, farklılaşma (fikir)",
    cat: "Sunum & Tartışma",
    sub: "İsimler",
  },

  // 1. BÖLÜM: VORTRÄGE UND DISKUSSIONEN - Fiiller
  {
    de: "auseinander|gehen",
    tr: "Ayrılmak, farklılaşmak, uyuşmamak",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "aus|gehen von",
    tr: "...-den yola çıkmak, varsaymak",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "aus|werten",
    tr: "Değerlendirmek, analiz etmek (verileri)",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "sich befassen mit",
    tr: "İlgilenmek, meşgul olmak (konuyla)",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "berücksichtigen",
    tr: "Göz önünde bulundurmak, dikkate almak",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "definieren",
    tr: "Tanımlamak",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "durch|führen",
    tr: "Yürütmek, gerçekleştirmek (anket/çalışma)",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "ein|gehen auf",
    tr: "Değinmek, (detayına) girmek",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "erheben",
    tr: "Toplamak (veri, bilgi)",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "sich erschließen",
    tr: "Anlaşılır olmak, çözülmek",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "formulieren",
    tr: "İfade etmek, formüle etmek",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "nach|vollziehen",
    tr: "Takip edebilmek, anlamak, hak vermek",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "nach|weisen",
    tr: "Kanıtlamak, ispat etmek",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "überein|stimmen (mit)",
    tr: "Aynı fikirde olmak, uyuşmak",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "veranschaulichen",
    tr: "Somutlaştırmak, görselleştirmek",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "widerlegen",
    tr: "Çürütmek (tezi/iddiayı)",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },
  {
    de: "zitieren",
    tr: "Alıntı yapmak",
    cat: "Sunum & Tartışma",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: İFADELER VE KALIPLAR
  {
    de: "auf den Punkt bringen",
    tr: "Özetlemek, tam isabet ifade etmek",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "sich aus dem Kontext erschließen",
    tr: "Bağlamdan anlaşılmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "einen Gedanken zu Ende führen",
    tr: "Bir düşünceyi tamamlamak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "einen Vortrag halten über",
    tr: "... hakkında sunum yapmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "zum Ende kommen",
    tr: "Sona gelmek, bitirmek",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "zu Ergebnissen kommen",
    tr: "Sonuçlara varmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "aus dem Konzept kommen",
    tr: "Konudan kopmak, şaşırmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "Bezug nehmen auf",
    tr: "Atıfta bulunmak, referans vermek",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "im Widerspruch stehen zu",
    tr: "Çelişmek, çelişki içinde olmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "eine Ansicht teilen",
    tr: "Bir görüşü paylaşmak (katılmak)",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "eine Aussage treffen zu",
    tr: "... hakkında ifadede bulunmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "den Faden verlieren",
    tr: "Konunun ucunu kaçırmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },
  {
    de: "einen Eindruck vermitteln",
    tr: "Bir izlenim vermek/uyandırmak",
    cat: "İfadeler & Kalıplar",
    sub: "Kalıplar",
  },

  // 2. BÖLÜM: DOĞA BİLİMLERİ (NATURWISSENSCHAFTEN) - İsimler
  {
    de: "die Anziehungskraft",
    tr: "Çekim gücü / Cazibe",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  { de: "das Atom", tr: "Atom", cat: "Doğa Bilimleri", sub: "İsimler" },
  {
    de: "der Atomkern",
    tr: "Atom çekirdeği",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Bindung (chemisch)",
    tr: "Bağ (Kimyasal)",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "der Dackel",
    tr: "Dakhund (Sosis köpek - genetik örnek)",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Eigenschaft",
    tr: "Özellik, nitelik",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  { de: "das Eisen", tr: "Demir", cat: "Doğa Bilimleri", sub: "İsimler" },
  { de: "das Element", tr: "Element", cat: "Doğa Bilimleri", sub: "İsimler" },
  {
    de: "das Lebewesen",
    tr: "Canlı (varlık)",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Gesetzmäßigkeit",
    tr: "Düzenlilik, doğa yasasına uygunluk",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "das Gewebe",
    tr: "Doku (biyolojik) / Kumaş dokusu",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Lehre",
    tr: "Öğreti, bilim dalı",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  { de: "die Masse", tr: "Kütle", cat: "Doğa Bilimleri", sub: "İsimler" },
  {
    de: "die Materie",
    tr: "Madde (fiziksel)",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  { de: "das Molekül", tr: "Molekül", cat: "Doğa Bilimleri", sub: "İsimler" },
  { de: "die Oberfläche", tr: "Yüzey", cat: "Doğa Bilimleri", sub: "İsimler" },
  { de: "die Rasse", tr: "Irk, cins", cat: "Doğa Bilimleri", sub: "İsimler" },
  {
    de: "der Schäferhund",
    tr: "Çoban köpeği",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Spannung (elektrisch)",
    tr: "Gerilim, voltaj",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "der Stoff (chemisch)",
    tr: "Madde (Kimyasal)",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Substanz",
    tr: "Madde, öz",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "das Teilgebiet",
    tr: "Alt dal, alt alan",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  {
    de: "die Umwandlung",
    tr: "Dönüşüm",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  { de: "die Vererbung", tr: "Kalıtım", cat: "Doğa Bilimleri", sub: "İsimler" },
  {
    de: "die Wechselwirkung",
    tr: "Etkileşim",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },
  { de: "die Zelle", tr: "Hücre", cat: "Doğa Bilimleri", sub: "İsimler" },
  {
    de: "die Zimmertemperatur",
    tr: "Oda sıcaklığı",
    cat: "Doğa Bilimleri",
    sub: "İsimler",
  },

  // 2. BÖLÜM: DOĞA BİLİMLERİ - Fiiller
  {
    de: "auf|laden",
    tr: "Yüklemek (elektrik), şarj etmek",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "auf|stellen (Theorie)",
    tr: "Ortaya atmak, kurmak (teori)",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "bestehen in",
    tr: "...-den ibaret olmak",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "sich entladen",
    tr: "Deşarj olmak, yükünü boşaltmak",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "erforschen",
    tr: "Araştırmak, incelemek",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "kondensieren",
    tr: "Yoğunlaşmak (gazdan sıvıya)",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "löffeln",
    tr: "Kaşıklamak (madde almak)",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "sich lösen in (Wasser)",
    tr: "(Suda) Çözünmek",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "reiben mit",
    tr: "... ile ovmak/sürtmek",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "strahlen",
    tr: "Işıma yapmak (radyoaktif/ışık)",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },
  {
    de: "verdampfen",
    tr: "Buharlaşmak",
    cat: "Doğa Bilimleri",
    sub: "Fiiller",
  },

  // KUTULAR: BİLİM DALLARI VE ÖZELLİKLER
  {
    de: "die Alchemie",
    tr: "Simya",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  {
    de: "die Astronomie",
    tr: "Gökbilim",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  {
    de: "die Botanik",
    tr: "Bitki bilimi",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  {
    de: "die Genetik",
    tr: "Genetik",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  {
    de: "die Mechanik",
    tr: "Mekanik",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  {
    de: "die Mikrobiologie",
    tr: "Mikrobiyoloji",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  {
    de: "die Zoologie",
    tr: "Hayvan bilimi",
    cat: "Bilim Dalları & Kimya",
    sub: "Dallar",
  },
  { de: "fest", tr: "Katı", cat: "Bilim Dalları & Kimya", sub: "Durumlar" },
  { de: "flüssig", tr: "Sıvı", cat: "Bilim Dalları & Kimya", sub: "Durumlar" },
  {
    de: "gasförmig",
    tr: "Gaz halinde",
    cat: "Bilim Dalları & Kimya",
    sub: "Durumlar",
  },
  {
    de: "radioaktiv",
    tr: "Radyoaktif",
    cat: "Bilim Dalları & Kimya",
    sub: "Durumlar",
  },
  {
    de: "wasserlöslich",
    tr: "Suda çözünebilen",
    cat: "Bilim Dalları & Kimya",
    sub: "Durumlar",
  },
  { de: "wässrig", tr: "Sulu", cat: "Bilim Dalları & Kimya", sub: "Durumlar" },
];

const B11 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Academic & Scientific Theme */}
      <header className="bg-gradient-to-r from-indigo-900 via-violet-900 to-fuchsia-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Microscope className="text-cyan-400 w-8 h-8" />
              <span>
                Wissenschaft <span className="text-fuchsia-300">&</span>{" "}
                Vorträge
              </span>
            </h1>
            <p className="text-indigo-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <MessageSquare size={14} className="text-fuchsia-200" /> Sunumlar,
              Tartışmalar ve Doğa Bilimleri
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-indigo-900 shadow-lg"
                  : "text-indigo-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-fuchsia-800 shadow-lg"
                  : "text-fuchsia-200 hover:bg-white/10"
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
                      ? "bg-indigo-700 text-white border-indigo-700 shadow-md shadow-indigo-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400 hover:text-indigo-800"
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
          <Atom className="text-indigo-600" /> Kelime Kartları
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
      case "Sunum & Tartışma":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Doğa Bilimleri":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      case "İfadeler & Kalıplar":
        return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
      case "Bilim Dalları & Kimya":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Sunum & Tartışma")
      return <MessageSquare size={20} className="text-white" />;
    if (cat === "Doğa Bilimleri")
      return <Atom size={20} className="text-white" />;
    if (cat === "İfadeler & Kalıplar")
      return <ScrollText size={20} className="text-white" />;
    return <FlaskConical size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Sunum & Tartışma")
      return "bg-gradient-to-br from-indigo-600 to-blue-700";
    if (cat === "Doğa Bilimleri")
      return "bg-gradient-to-br from-cyan-600 to-teal-700";
    if (cat === "İfadeler & Kalıplar")
      return "bg-gradient-to-br from-fuchsia-600 to-pink-700";
    return "bg-gradient-to-br from-purple-600 to-violet-700";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-indigo-300">
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
                "border-2 border-slate-100 bg-white hover:border-indigo-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-indigo-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-indigo-700 text-white px-8 py-4 rounded-xl hover:bg-indigo-800 active:scale-95 transition-all shadow-lg shadow-indigo-400 font-bold text-lg"
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

export default B11;
