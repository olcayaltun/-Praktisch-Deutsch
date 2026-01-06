import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Feather,
  Users,
  TrendingUp,
  Search,
  Layers,
  Library,
} from "lucide-react";

// --- YENİ VERİ SETİ (Geistes- und Sozialwissenschaften) ---
const rawData = [
  // 1. BÖLÜM: BEŞERİ BİLİMLER (GEISTESWISSENSCHAFTEN) - İsimler
  {
    de: "das Anliegen",
    tr: "İstek, arzu, mesele",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "das Artefakt",
    tr: "Artefakt, insan yapımı tarihi nesne",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "das Aufkommen",
    tr: "Ortaya çıkış / Hasılat",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Aufzeichnung",
    tr: "Kayıt, not, tutanak",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "der Baumring",
    tr: "Ağaç halkası (yaş tayini)",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Datierung",
    tr: "Tarihlendirme",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "der Debütroman",
    tr: "İlk roman",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Disziplin",
    tr: "Disiplin (bilim dalı)",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "der Erzählton",
    tr: "Anlatım tonu/üslubu",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Frühgeschichte",
    tr: "Erken tarih, tarih öncesi",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Gefühlsduselei",
    tr: "Aşırı/Vıcık vıcık duygusallık",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "das Gemüt",
    tr: "Gönül, mizaç, ruh hali",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Hinterlassenschaft",
    tr: "Miras, kalıt",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Idylle",
    tr: "İdil, huzurlu kır hayatı",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  { de: "die Keramik", tr: "Seramik", cat: "Beşeri Bilimler", sub: "İsimler" },
  {
    de: "der Kitsch",
    tr: "Kiç, rüküş sanat",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "der Kulturraum",
    tr: "Kültür bölgesi/alanı",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Tücke (des Alltags)",
    tr: "(Gündelik hayatın) Cilvesi/Azizliği",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Urgeschichte",
    tr: "Prehistorya, tarih öncesi",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "das Zerrbild",
    tr: "Çarpıtılmış resim/imaj",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },
  {
    de: "der Zerfall",
    tr: "Çöküş, parçalanma",
    cat: "Beşeri Bilimler",
    sub: "İsimler",
  },

  // 1. BÖLÜM: BEŞERİ BİLİMLER - Sıfatlar & Fiiller
  {
    de: "abgedroschen",
    tr: "Basmakalıp, bayatlamış",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "ausgehend von",
    tr: "...-den yola çıkarak",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "beiläufig",
    tr: "Gelişigüzel, laf arasında",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "erfrischend",
    tr: "Ferahlatıcı, tazeleyici",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "dürftig",
    tr: "Yetersiz, kıt, cılız",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "erst-/zweitklassig",
    tr: "Birinci/İkinci sınıf (kalite)",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "fulminant",
    tr: "Şahane, parlak, müthiş",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "gefärbt (autobiografisch)",
    tr: "(Otobiyografik) İzler taşıyan",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  { de: "gelungen", tr: "Başarılı", cat: "Beşeri Bilimler", sub: "Sıfatlar" },
  {
    de: "glänzend",
    tr: "Parlak, mükemmel",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "heikel",
    tr: "Hassas, netameli (konu)",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "mäßig",
    tr: "Vasat, orta halli",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  { de: "meisterhaft", tr: "Ustaca", cat: "Beşeri Bilimler", sub: "Sıfatlar" },
  {
    de: "organisch",
    tr: "Organik, bütünlüklü",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "schicksalhaft",
    tr: "Kader belirleyici",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "seicht",
    tr: "Sığ, yüzeysel",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "unausgegoren",
    tr: "Ham, olgunlaşmamış (fikir)",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "unübertrefflich",
    tr: "Eşsiz, üstüne olmayan",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "unverblümt",
    tr: "Açık sözlü, lafını sakınmadan",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "verdichtet",
    tr: "Yoğunlaştırılmış (dil)",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "verwoben mit",
    tr: "... ile iç içe geçmiş",
    cat: "Beşeri Bilimler",
    sub: "Sıfatlar",
  },
  {
    de: "wahren (Schein/Ruf)",
    tr: "Korumak (görünüşü/itibarı)",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  {
    de: "sich ziehen durch",
    tr: "İçinden geçmek (ana tema olarak)",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  {
    de: "ab|driften in",
    tr: "...-e kaymak, sürüklenmek",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  {
    de: "sich entpuppen als",
    tr: "... olduğu ortaya çıkmak",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  {
    de: "sich erhalten",
    tr: "Korunmak, varlığını sürdürmek",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  {
    de: "trügen (Schein)",
    tr: "Aldatmak, yanıltmak",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  { de: "umfassen", tr: "Kapsamak", cat: "Beşeri Bilimler", sub: "Fiiller" },
  {
    de: "Gespür beweisen für",
    tr: "Hissi/Sezgisi olduğunu kanıtlamak",
    cat: "Beşeri Bilimler",
    sub: "Fiiller",
  },
  {
    de: "auf Anhieb",
    tr: "İlk hamlede, hemen",
    cat: "Beşeri Bilimler",
    sub: "İfadeler",
  },
  {
    de: "ein glatter Reinfall",
    tr: "Tam bir fiyasko",
    cat: "Beşeri Bilimler",
    sub: "İfadeler",
  },

  // 2. BÖLÜM: SOSYAL BİLİMLER (SOZIALWISSENSCHAFTEN) - İsimler
  {
    de: "die Anthropologie",
    tr: "Antropoloji (İnsan bilimi)",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Demografie",
    tr: "Demografi (Nüfus bilimi)",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Ethnologie",
    tr: "Etnoloji",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Geburtenrate",
    tr: "Doğum oranı",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Lebenserwartung",
    tr: "Yaşam beklentisi/ömrü",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Lebenshaltung",
    tr: "Yaşam standardı, geçim",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Pädagogik",
    tr: "Pedagoji (Eğitim bilimi)",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Soziolinguistik",
    tr: "Toplumdilbilim",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "die Sozialgeografie",
    tr: "Sosyal coğrafya",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },
  {
    de: "das Wechselspiel",
    tr: "Etkileşim, karşılıklı oyun",
    cat: "Sosyal Bilimler",
    sub: "İsimler",
  },

  // 2. BÖLÜM: SOSYAL BİLİMLER - Fiiller (Değişim & İstatistik)
  {
    de: "ab|flauen",
    tr: "Dinmek, hafiflemek (artış)",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "sich ab|schwächen",
    tr: "Zayıflamak, hafiflemek",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  { de: "altern", tr: "Yaşlanmak", cat: "Analiz & Değişim", sub: "Fiiller" },
  {
    de: "gelangen zu",
    tr: "Ulaşmak, varmak (sonuca)",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "sich halbieren",
    tr: "Yarı yarıya azalmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "sich häufen",
    tr: "Birikmek, sıklaşmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "schrumpfen",
    tr: "Küçülmek, azalmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "stagnieren",
    tr: "Durgunlaşmak, yerinde saymak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "verarmen",
    tr: "Fakirleşmek",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "sich verdoppeln",
    tr: "İkiye katlanmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "sich verteuern",
    tr: "Pahalanmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "ziehen (Schlüsse)",
    tr: "(Sonuç) Çıkarmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },
  {
    de: "zu|legen",
    tr: "Artmak, değer kazanmak",
    cat: "Analiz & Değişim",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: SOSYAL BİLİMLER - Sıfatlar & İfadeler
  {
    de: "absolut / relativ",
    tr: "Mutlak / Göreceli",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "ausgeschlossen sein von",
    tr: "...-den dışlanmış olmak",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "besorgniserregend",
    tr: "Endişe verici",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "konstant",
    tr: "Sabit, değişmez",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  { de: "rasant", tr: "Çok hızlı", cat: "Analiz & Değişim", sub: "Sıfatlar" },
  {
    de: "rückläufig",
    tr: "Gerileyen, düşüşte olan",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "schleichend",
    tr: "Sinsi, yavaş ilerleyen",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "materiell / immateriell",
    tr: "Maddi / Manevi",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "moderat",
    tr: "Ilımlı, makul",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "drastisch / rapide",
    tr: "Radikal / Hızlı",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "sprunghaft",
    tr: "Sıçramalı, ani",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "überproportional",
    tr: "Orantısız (aşırı)",
    cat: "Analiz & Değişim",
    sub: "Sıfatlar",
  },
  {
    de: "auf der Hand liegen",
    tr: "Açık olmak, ortada olmak",
    cat: "Analiz & Değişim",
    sub: "İfadeler",
  },
  {
    de: "sich zum Ziel setzen",
    tr: "Kendine hedef koymak",
    cat: "Analiz & Değişim",
    sub: "İfadeler",
  },
  {
    de: "im Gegensatz stehen zu",
    tr: "Bir şeye zıt olmak",
    cat: "Analiz & Değişim",
    sub: "İfadeler",
  },
  {
    de: "in die Höhe klettern",
    tr: "Tırmanmak (fiyatlar vb.)",
    cat: "Analiz & Değişim",
    sub: "İfadeler",
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
    <div className="min-h-screen bg-rose-50 font-sans text-slate-800">
      {/* Header - Academic & Intellectual Theme */}
      <header className="bg-gradient-to-r from-rose-900 via-purple-900 to-indigo-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Library className="text-rose-300 w-8 h-8" />
              <span>
                Geistes <span className="text-indigo-300">&</span> Sozial
              </span>
            </h1>
            <p className="text-rose-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Feather size={14} className="text-indigo-200" /> Beşeri ve Sosyal
              Bilimler Sözlüğü
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-rose-900 shadow-lg"
                  : "text-rose-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-indigo-800 shadow-lg"
                  : "text-indigo-200 hover:bg-white/10"
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
          <Layers size={20} className="text-rose-700 min-w-fit" />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border
                  ${
                    selectedCategory === cat
                      ? "bg-rose-700 text-white border-rose-700 shadow-md shadow-rose-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-rose-400 hover:text-rose-800"
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
          <Users className="text-rose-600" /> Kelime Kartları
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
      case "Beşeri Bilimler":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Sosyal Bilimler":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Analiz & Değişim":
        return "bg-teal-50 text-teal-700 border-teal-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Beşeri Bilimler")
      return <Feather size={20} className="text-white" />;
    if (cat === "Sosyal Bilimler")
      return <Users size={20} className="text-white" />;
    return <TrendingUp size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Beşeri Bilimler")
      return "bg-gradient-to-br from-rose-600 to-pink-700";
    if (cat === "Sosyal Bilimler")
      return "bg-gradient-to-br from-indigo-600 to-purple-700";
    return "bg-gradient-to-br from-teal-600 to-emerald-700";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-rose-300">
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
                "border-2 border-slate-100 bg-white hover:border-rose-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-rose-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-rose-700 text-white px-8 py-4 rounded-xl hover:bg-rose-800 active:scale-95 transition-all shadow-lg shadow-rose-400 font-bold text-lg"
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
