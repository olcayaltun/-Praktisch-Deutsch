import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Globe,
  Plane,
  Hand,
  Compass,
  Map,
  Layers,
  Sparkles,
} from "lucide-react";

// --- YENİ VERİ SETİ (Im In- und Ausland) ---
const rawData = [
  // 1. BÖLÜM: MIGRATION (GÖÇ) - İsimler
  {
    de: "der/die Angehörige",
    tr: "(Bir grubun) Üyesi / Yakını, akrabası",
    cat: "Migration",
    sub: "İsimler",
  },
  { de: "die Arbeitskraft", tr: "İş gücü", cat: "Migration", sub: "İsimler" },
  {
    de: "die Armut",
    tr: "Yoksulluk, fakirlik",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "der Auswanderer",
    tr: "Göçmen (ülkesinden göçüp giden)",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "die Bezeichnung",
    tr: "Adlandırma, tanım, tabir",
    cat: "Migration",
    sub: "İsimler",
  },
  { de: "der Bürgerkrieg", tr: "İç savaş", cat: "Migration", sub: "İsimler" },
  {
    de: "die Diskriminierung",
    tr: "Ayrımcılık",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "der/die Einheimische",
    tr: "Yerli (halk)",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "der Einwanderer",
    tr: "Göçmen (ülkeye göçüp gelen)",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "das Einwanderungsland",
    tr: "Göç alan ülke",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "der Flüchtling / Geflüchtete",
    tr: "Mülteci / Sığınmacı",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "das Herkunftsland",
    tr: "Menşe ülke (gelinen ülke)",
    cat: "Migration",
    sub: "İsimler",
  },
  { de: "die Katastrophe", tr: "Felaket", cat: "Migration", sub: "İsimler" },
  {
    de: "die Lebenshaltungskosten",
    tr: "Yaşam masrafları, geçim giderleri",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "der Migrationshintergrund",
    tr: "Göçmen kökeni",
    cat: "Migration",
    sub: "İsimler",
  },
  { de: "die Minderheit", tr: "Azınlık", cat: "Migration", sub: "İsimler" },
  {
    de: "die Nationalität",
    tr: "Uyruk, milliyet",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "der Passant",
    tr: "Yoldan geçen (yaya)",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "die Perspektive",
    tr: "Perspektif / Gelecek beklentisi",
    cat: "Migration",
    sub: "İsimler",
  },
  {
    de: "die Staatsangehörigkeit",
    tr: "Vatandaşlık",
    cat: "Migration",
    sub: "İsimler",
  },
  { de: "der Umstand", tr: "Durum, koşul", cat: "Migration", sub: "İsimler" },
  {
    de: "die Vertreibung",
    tr: "Sürgün, tehcir, yerinden edilme",
    cat: "Migration",
    sub: "İsimler",
  },
  { de: "der Vorfahr", tr: "Ata", cat: "Migration", sub: "İsimler" },
  { de: "die Wurzel", tr: "Kök", cat: "Migration", sub: "İsimler" },
  {
    de: "das Zielland",
    tr: "Hedef ülke (gidilen ülke)",
    cat: "Migration",
    sub: "İsimler",
  },

  // 1. BÖLÜM: MIGRATION (GÖÇ) - Fiiller
  {
    de: "ab|stammen von",
    tr: "Soyundan gelmek, kökeni ... olmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "sich an|passen (an)",
    tr: "Uyum sağlamak (bir duruma)",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "an|sprechen",
    tr: "Hitap etmek / Durdurup konuşmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "an|werben",
    tr: "İşe almak, (eleman) toplamak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "auf|brechen",
    tr: "Yola çıkmak, hareket etmek",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "auf|wachsen",
    tr: "Büyümek, yetişmek",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "sich aus|tauschen",
    tr: "Fikir alışverişinde bulunmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  { de: "beeindrucken", tr: "Etkilemek", cat: "Migration", sub: "Fiiller" },
  {
    de: "sich ein|leben",
    tr: "Alışmak, yerleşmek (yeni bir hayata)",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "erkunden",
    tr: "Keşfetmek (çevreyi vb.)",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "gehören zu",
    tr: "Ait olmak, parçası olmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "heraus|finden",
    tr: "Bulup çıkarmak, öğrenmek",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "sich identifizieren mit",
    tr: "Kendini ... ile özdeşleştirmek",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "konfrontiert sein mit",
    tr: "Yüzleşmek, karşı karşıya kalmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "sich nieder|lassen",
    tr: "Yerleşmek, mesken tutmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "überstehen",
    tr: "Atlatmak, üstesinden gelmek",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "sich zurecht|finden",
    tr: "Yolunu bulmak, ayak uydurmak",
    cat: "Migration",
    sub: "Fiiller",
  },
  {
    de: "zurecht|kommen (mit)",
    tr: "Başa çıkmak, halletmek",
    cat: "Migration",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: MIGRATION (GÖÇ) - Sıfatlar/İfadeler
  {
    de: "deutschstämmig",
    tr: "Alman kökenli/asıllı",
    cat: "Migration",
    sub: "Sıfatlar",
  },
  { de: "ethnisch", tr: "Etnik", cat: "Migration", sub: "Sıfatlar" },
  {
    de: "eine Perspektive haben",
    tr: "Bir geleceği/umudu olmak",
    cat: "Migration",
    sub: "Sıfatlar",
  },

  // 2. BÖLÜM: KULTUR & MENTALITÄT - İsimler
  { de: "der Brauch", tr: "Örf, adet, gelenek", cat: "Kültür", sub: "İsimler" },
  {
    de: "die traditionelle Küche",
    tr: "Geleneksel mutfak (yemek kültürü)",
    cat: "Kültür",
    sub: "İsimler",
  },
  {
    de: "die Tischmanieren",
    tr: "Sofrada görgü kuralları",
    cat: "Kültür",
    sub: "İsimler",
  },
  {
    de: "die Sitte / Tischsitte",
    tr: "Adet, töre / Sofra adabı",
    cat: "Kültür",
    sub: "İsimler",
  },
  { de: "das Sprichwort", tr: "Atasözü", cat: "Kültür", sub: "İsimler" },
  {
    de: "das Tabu",
    tr: "Tabu (yasak/ayıp sayılan)",
    cat: "Kültür",
    sub: "İsimler",
  },
  { de: "die Tracht", tr: "Yöresel kıyafet", cat: "Kültür", sub: "İsimler" },
  {
    de: "die Denk-/Lebensweise",
    tr: "Düşünce/Yaşam Tarzı",
    cat: "Kültür",
    sub: "İsimler",
  },

  // 2. BÖLÜM: KULTUR & MENTALITÄT - Fiiller/Sıfatlar
  {
    de: "entsprechen",
    tr: "Uymak, denk gelmek, karşılamak",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "sich ergeben",
    tr: "Ortaya çıkmak, hasıl olmak",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "sich geben",
    tr: "Olmak, vuku bulmak (zamanla düzelmek)",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "sich gehören",
    tr: "Yakışık almak, uygun düşmek",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "gelten als",
    tr: "... olarak sayılmak/kabul edilmek",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "sich lohnen",
    tr: "Değmek (zahmete vb.)",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "sich verbeugen",
    tr: "Eğilerek selam vermek",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "sich verstehen (von selbst)",
    tr: "Kendi kendine anlaşılmak",
    cat: "Kültür",
    sub: "Fiiller",
  },
  {
    de: "unangemessen / angemessen",
    tr: "Uygunsuz / Uygun",
    cat: "Kültür",
    sub: "Sıfatlar",
  },
  { de: "gläubig", tr: "İnançlı, dindar", cat: "Kültür", sub: "Sıfatlar" },
  { de: "mehrsprachig", tr: "Çok dilli", cat: "Kültür", sub: "Sıfatlar" },
  { de: "multikulturell", tr: "Çok kültürlü", cat: "Kültür", sub: "Sıfatlar" },
  { de: "religiös", tr: "Dini / Dindar", cat: "Kültür", sub: "Sıfatlar" },
  { de: "üblich", tr: "Alışılagelmiş, olağan", cat: "Kültür", sub: "Sıfatlar" },

  // 3. KUTU: EL TEMALI İFADELER
  {
    de: "mit den Händen arbeiten",
    tr: "Elle çalışmak",
    cat: "İfadeler (El)",
    sub: "Kalıplar",
  },
  {
    de: "die Hand geben",
    tr: "El sıkışmak, tokalaşmak",
    cat: "İfadeler (El)",
    sub: "Kalıplar",
  },
  {
    de: "an die Hand nehmen",
    tr: "Elinden tutmak (yardım/yol göstermek)",
    cat: "İfadeler (El)",
    sub: "Kalıplar",
  },
  { de: "Hand in Hand", tr: "El ele", cat: "İfadeler (El)", sub: "Kalıplar" },
  {
    de: "mit leeren Händen",
    tr: "Eli boş (olarak)",
    cat: "İfadeler (El)",
    sub: "Kalıplar",
  },

  // 4. KUTU: SEYAHAT VE DEYİMLER
  {
    de: "Jemandem fällt die Decke auf den Kopf",
    tr: "Evde içi daralmak, duvarlar üstüne gelmek",
    cat: "Deyimler",
    sub: "Seyahat",
  },
  {
    de: "Das Eis ist gebrochen",
    tr: "Buzlar eridi (ortam yumuşadı)",
    cat: "Deyimler",
    sub: "İletişim",
  },
  {
    de: "auf eigene Faust",
    tr: "Kendi başına, kendi imkanlarıyla",
    cat: "Deyimler",
    sub: "Seyahat",
  },
  {
    de: "seinen Horizont erweitern",
    tr: "Ufkunu genişletmek",
    cat: "Deyimler",
    sub: "Kişisel",
  },
  {
    de: "Andere Länder, andere Sitten",
    tr: "Her yiğidin yoğurt yiyişi farklıdır",
    cat: "Deyimler",
    sub: "Kültür",
  },
  {
    de: "Löcher in den Bauch fragen",
    tr: "Soru yağmuruna tutmak (kafa şişirmek)",
    cat: "Deyimler",
    sub: "İletişim",
  },
  {
    de: "mit Sack und Pack",
    tr: "Pılıyı pırtıyı toplayıp / Her şeyiyle",
    cat: "Deyimler",
    sub: "Seyahat",
  },
  {
    de: "sich auf den Weg machen",
    tr: "Yola koyulmak",
    cat: "Deyimler",
    sub: "Seyahat",
  },
  {
    de: "Der Weg ist das Ziel",
    tr: "Önemli olan sonuç değil süreçtir (yoldur)",
    cat: "Deyimler",
    sub: "Felsefe",
  },
];

const B3 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Global & Travel Theme */}
      <header className="bg-gradient-to-r from-sky-900 to-blue-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400 opacity-5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Globe className="text-amber-400 w-8 h-8" />
              <span>
                In- & Ausland <span className="text-sky-300">|</span> Kultur
              </span>
            </h1>
            <p className="text-sky-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Plane size={14} className="rotate-45" /> Göç, Kültür ve Seyahat
              Terimleri
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-blue-900 shadow-lg"
                  : "text-blue-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-amber-700 shadow-lg"
                  : "text-amber-100 hover:bg-white/10"
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
                      ? "bg-sky-700 text-white border-sky-700 shadow-md shadow-sky-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-700"
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
          <Map className="text-sky-600" /> Kelime Kartları
        </h2>
        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
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
      case "Migration":
        return "bg-sky-50 text-sky-600 border-sky-100";
      case "Kültür":
        return "bg-violet-50 text-violet-600 border-violet-100";
      case "İfadeler (El)":
        return "bg-orange-50 text-orange-600 border-orange-100";
      case "Deyimler":
        return "bg-amber-50 text-amber-600 border-amber-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-sky-200">
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
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner">
          <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm">
            {item.cat.includes("Deyim") || item.cat.includes("İfade") ? (
              <Sparkles size={20} className="text-amber-200" />
            ) : item.cat === "Kültür" ? (
              <Compass size={20} className="text-white" />
            ) : item.cat === "İfadeler (El)" ? (
              <Hand size={20} className="text-white" />
            ) : (
              <Globe size={20} className="text-white" />
            )}
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
      <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
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
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
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
                "border-2 border-slate-100 bg-white hover:border-sky-200 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-sky-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-sky-700 text-white px-8 py-4 rounded-xl hover:bg-sky-800 active:scale-95 transition-all shadow-lg shadow-sky-200 font-bold text-lg"
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

export default B3;
