import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Calculator,
  Lightbulb,
  Sigma,
  Link,
  Layers,
  Puzzle,
} from "lucide-react";

// --- YENİ VERİ SETİ (Mathematik & Logik) ---
const rawData = [
  // 1. BÖLÜM: MATEMATİK (MATHEMATIK) - İsimler
  { de: "der Durchmesser", tr: "Çap", cat: "Matematik", sub: "İsimler" },
  { de: "das Dutzend", tr: "Düzine", cat: "Matematik", sub: "İsimler" },
  {
    de: "das Einmaleins",
    tr: "Çarpım tablosu",
    cat: "Matematik",
    sub: "İsimler",
  },
  { de: "die Fläche", tr: "Alan, yüzey", cat: "Matematik", sub: "İsimler" },
  { de: "die Gleichung", tr: "Denklem", cat: "Matematik", sub: "İsimler" },
  {
    de: "die Kreiszahl Pi",
    tr: "Pi sayısı (π)",
    cat: "Matematik",
    sub: "İsimler",
  },
  { de: "der Nenner", tr: "Payda", cat: "Matematik", sub: "İsimler" },
  { de: "die Potenz", tr: "Üs, kuvvet", cat: "Matematik", sub: "İsimler" },
  { de: "die Primzahl", tr: "Asal sayı", cat: "Matematik", sub: "İsimler" },
  {
    de: "die Quadratzahl",
    tr: "Tam kare sayı",
    cat: "Matematik",
    sub: "İsimler",
  },
  { de: "der Radius", tr: "Yarıçap", cat: "Matematik", sub: "İsimler" },
  { de: "der Umfang", tr: "Çevre", cat: "Matematik", sub: "İsimler" },
  { de: "die Unbekannte", tr: "Bilinmeyen", cat: "Matematik", sub: "İsimler" },
  { de: "das Volumen", tr: "Hacim", cat: "Matematik", sub: "İsimler" },
  {
    de: "der Winkel (rechte)",
    tr: "Açı (dik)",
    cat: "Matematik",
    sub: "İsimler",
  },
  { de: "der Zähler", tr: "Pay", cat: "Matematik", sub: "İsimler" },

  // 1. BÖLÜM: MATEMATİK - Sıfatlar/Fiiller
  {
    de: "gerade / ungerade",
    tr: "Çift / Tek (sayı)",
    cat: "Matematik",
    sub: "Sıfatlar",
  },
  { de: "teilbar", tr: "Bölünebilir", cat: "Matematik", sub: "Sıfatlar" },
  {
    de: "auf|gehen (Rechnung)",
    tr: "Tutmak, tam çıkmak (hesap)",
    cat: "Matematik",
    sub: "Fiiller",
  },
  {
    de: "Wurzel ziehen",
    tr: "Karekök almak",
    cat: "Matematik",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: MATEMATİK - Deyimler
  {
    de: "das Einmaleins beibringen",
    tr: "İşin temelini öğretmek",
    cat: "Matematik",
    sub: "Deyimler",
  },
  {
    de: "auf einen gemeinsamen Nenner kommen",
    tr: "Ortak paydada buluşmak",
    cat: "Matematik",
    sub: "Deyimler",
  },
  {
    de: "Eins und Eins zusammenzählen",
    tr: "Olayları birleştirmek (sonuca varmak)",
    cat: "Matematik",
    sub: "Deyimler",
  },
  {
    de: "die Dreiecksbeziehung",
    tr: "Aşk üçgeni",
    cat: "Matematik",
    sub: "Deyimler",
  },
  {
    de: "eine Null sein",
    tr: "Bir hiç olmak",
    cat: "Matematik",
    sub: "Deyimler",
  },
  {
    de: "die Quadratur des Kreises",
    tr: "Daireyi kare yapmak (imkansız)",
    cat: "Matematik",
    sub: "Deyimler",
  },
  { de: "Pi mal Daumen", tr: "Göz kararı", cat: "Matematik", sub: "Deyimler" },
  {
    de: "hoch drei (Spaß/Chaos)",
    tr: "Küpü kadar (aşırı)",
    cat: "Matematik",
    sub: "Deyimler",
  },
  {
    de: "der Kreis schließt sich",
    tr: "Çember tamamlandı (başa dönmek)",
    cat: "Matematik",
    sub: "Deyimler",
  },

  // KUTU: -BARKEIT (İHTİMAL/YETENEK)
  {
    de: "Lösbarkeit",
    tr: "Çözülebilirlik",
    cat: "Kavramlar (-barkeit)",
    sub: "Kavramlar",
  },
  {
    de: "Berechenbarkeit",
    tr: "Hesaplanabilirlik",
    cat: "Kavramlar (-barkeit)",
    sub: "Kavramlar",
  },
  {
    de: "Nachvollziehbarkeit",
    tr: "Anlaşılabilirlik",
    cat: "Kavramlar (-barkeit)",
    sub: "Kavramlar",
  },
  {
    de: "Realisierbarkeit",
    tr: "Gerçekleştirilebilirlik",
    cat: "Kavramlar (-barkeit)",
    sub: "Kavramlar",
  },
  {
    de: "Teilbarkeit",
    tr: "Bölünebilirlik",
    cat: "Kavramlar (-barkeit)",
    sub: "Kavramlar",
  },
  {
    de: "Vorhersagbarkeit",
    tr: "Öngörülebilirlik",
    cat: "Kavramlar (-barkeit)",
    sub: "Kavramlar",
  },

  // 2. BÖLÜM: MANTIK (LOGIK) - İsimler
  { de: "das Prinzip", tr: "Prensip, ilke", cat: "Mantık", sub: "İsimler" },
  { de: "der Rückschluss", tr: "Çıkarım", cat: "Mantık", sub: "İsimler" },
  {
    de: "der Trugschluss",
    tr: "Yanlış çıkarım, yanılgı",
    cat: "Mantık",
    sub: "İsimler",
  },
  {
    de: "der Umkehrschluss",
    tr: "Aksi ile kanıt, tersinden çıkarım",
    cat: "Mantık",
    sub: "İsimler",
  },

  // 2. BÖLÜM: MANTIK - Sıfatlar
  {
    de: "folgerichtig",
    tr: "Tutarlı, mantıklı",
    cat: "Mantık",
    sub: "Sıfatlar",
  },
  { de: "konsequent", tr: "Tutarlı, kararlı", cat: "Mantık", sub: "Sıfatlar" },
  { de: "logisch", tr: "Mantıklı", cat: "Mantık", sub: "Sıfatlar" },
  { de: "plausibel", tr: "Makul, akla yatkın", cat: "Mantık", sub: "Sıfatlar" },
  { de: "stimmig", tr: "Tutarlı, doğru", cat: "Mantık", sub: "Sıfatlar" },
  {
    de: "weit hergeholt",
    tr: "Zorlama, uzak ihtimal",
    cat: "Mantık",
    sub: "Sıfatlar",
  },
  { de: "widerspruchsfrei", tr: "Çelişkisiz", cat: "Mantık", sub: "Sıfatlar" },
  { de: "glasklar", tr: "Apaçık, berrak", cat: "Mantık", sub: "Sıfatlar" },
  {
    de: "geschult",
    tr: "Eğitimli, deneyimli (akıl)",
    cat: "Mantık",
    sub: "Sıfatlar",
  },
  { de: "hellwach", tr: "Cin gibi, uyanık", cat: "Mantık", sub: "Sıfatlar" },
  {
    de: "messerscharf",
    tr: "Bıçak gibi keskin (zeka)",
    cat: "Mantık",
    sub: "Sıfatlar",
  },
  {
    de: "vernebelt",
    tr: "Bulanık, sisli (zihin)",
    cat: "Mantık",
    sub: "Sıfatlar",
  },

  // 2. BÖLÜM: MANTIK - Fiiller
  {
    de: "ab|leiten",
    tr: "Türetmek / Sonuç çıkarmak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "an|führen",
    tr: "Öne sürmek (argüman)",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "an|knüpfen an",
    tr: "Bağlantı kurmak, devam etmek",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "an|setzen bei",
    tr: "Başlamak, temel almak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  { de: "auf|greifen", tr: "Ele almak (fikri)", cat: "Mantık", sub: "Fiiller" },
  {
    de: "auf|nehmen",
    tr: "Kabul etmek, ele almak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "aus|gehen von",
    tr: "Yola çıkmak (varsayımdan)",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "aus|klammern",
    tr: "Hariç tutmak, paranteze almak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "aus|schließen",
    tr: "Dışlamak, imkansız kılmak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "ein|ordnen",
    tr: "Sınıflandırmak, yerine koymak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "folgen (Logik)",
    tr: "Takip etmek (mantığı)",
    cat: "Mantık",
    sub: "Fiiller",
  },
  { de: "folgern aus", tr: "Sonuç çıkarmak", cat: "Mantık", sub: "Fiiller" },
  {
    de: "gegenüber|stellen",
    tr: "Karşılaştırmak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "her|leiten",
    tr: "Türetmek, çıkarsamak",
    cat: "Mantık",
    sub: "Fiiller",
  },
  { de: "schließen aus", tr: "Sonuç çıkarmak", cat: "Mantık", sub: "Fiiller" },
  {
    de: "in Beziehung setzen",
    tr: "İlişkilendirmek",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "verknüpfen mit",
    tr: "Bağlamak, ilişkilendirmek",
    cat: "Mantık",
    sub: "Fiiller",
  },
  {
    de: "ziehen (Schluss)",
    tr: "Sonuç çıkarmak",
    cat: "Mantık",
    sub: "Fiiller",
  },

  // BAĞLAÇLAR VE ZARFLAR
  {
    de: "angesichts",
    tr: "Karşısında, ...-den dolayı",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  {
    de: "ausschließlich",
    tr: "Sadece, münhasıran",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  {
    de: "es sei denn",
    tr: "Meğerki, ... olmadıkça",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  {
    de: "folgendermaßen",
    tr: "Şu şekilde, aşağıdaki gibi",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  {
    de: "infolgedessen",
    tr: "Bunun sonucunda",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  { de: "je nachdem", tr: "...-e göre", cat: "Bağlaçlar", sub: "Zarflar" },
  {
    de: "nichtsdestotrotz",
    tr: "Buna rağmen, yine de",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  { de: "ohne dass", tr: "... olmaksızın", cat: "Bağlaçlar", sub: "Zarflar" },
  { de: "stattdessen", tr: "Bunun yerine", cat: "Bağlaçlar", sub: "Zarflar" },
  {
    de: "vorausgesetzt",
    tr: "Şartıyla, koşuluyla",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },
  { de: "weswegen", tr: "Bu yüzden", cat: "Bağlaçlar", sub: "Zarflar" },
  {
    de: "wohingegen",
    tr: "Oysa, buna karşın",
    cat: "Bağlaçlar",
    sub: "Zarflar",
  },

  // MANTIK DEYİMLERİ
  {
    de: "vor Augen führen",
    tr: "Gözünde canlandırmak",
    cat: "Mantık",
    sub: "Deyimler",
  },
  { de: "Anwendung finden", tr: "Uygulanmak", cat: "Mantık", sub: "Deyimler" },
  {
    de: "außer Acht lassen",
    tr: "Göz ardı etmek",
    cat: "Mantık",
    sub: "Deyimler",
  },
  {
    de: "auf der Hand liegen",
    tr: "Açık olmak, ortada olmak",
    cat: "Mantık",
    sub: "Deyimler",
  },
  {
    de: "auf die Probe stellen",
    tr: "Sınamak, test etmek",
    cat: "Mantık",
    sub: "Deyimler",
  },
  {
    de: "auf den Punkt bringen",
    tr: "Tam isabet ifade etmek",
    cat: "Mantık",
    sub: "Deyimler",
  },
  {
    de: "der Weisheit letzter Schluss",
    tr: "En son çözüm (ironik)",
    cat: "Mantık",
    sub: "Deyimler",
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
    <div className="min-h-screen bg-violet-50 font-sans text-slate-800">
      {/* Header - Analytical & Logic Theme */}
      <header className="bg-gradient-to-r from-violet-900 via-indigo-900 to-blue-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Calculator className="text-teal-300 w-8 h-8" />
              <span>
                Mathematik <span className="text-violet-300">&</span> Logik
              </span>
            </h1>
            <p className="text-indigo-200 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Lightbulb size={14} className="text-teal-200" /> Analitik Düşünme
              ve Akademik Dil
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-violet-900 shadow-lg"
                  : "text-violet-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-teal-800 shadow-lg"
                  : "text-teal-200 hover:bg-white/10"
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
          <Layers size={20} className="text-violet-700 min-w-fit" />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border
                  ${
                    selectedCategory === cat
                      ? "bg-violet-700 text-white border-violet-700 shadow-md shadow-violet-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-violet-400 hover:text-violet-800"
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
          <Sigma className="text-violet-600" /> Kelime Kartları
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
      case "Matematik":
        return "bg-violet-50 text-violet-700 border-violet-200";
      case "Mantık":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Kavramlar (-barkeit)":
        return "bg-teal-50 text-teal-700 border-teal-200";
      case "Bağlaçlar":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Matematik")
      return <Calculator size={20} className="text-white" />;
    if (cat === "Mantık") return <Lightbulb size={20} className="text-white" />;
    if (cat === "Bağlaçlar") return <Link size={20} className="text-white" />;
    return <Puzzle size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Matematik")
      return "bg-gradient-to-br from-violet-600 to-purple-700";
    if (cat === "Mantık")
      return "bg-gradient-to-br from-blue-600 to-indigo-700";
    if (cat === "Bağlaçlar")
      return "bg-gradient-to-br from-indigo-500 to-blue-600";
    return "bg-gradient-to-br from-teal-500 to-emerald-600";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-violet-300">
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
                "border-2 border-slate-100 bg-white hover:border-violet-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-violet-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-violet-700 text-white px-8 py-4 rounded-xl hover:bg-violet-800 active:scale-95 transition-all shadow-lg shadow-violet-400 font-bold text-lg"
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
