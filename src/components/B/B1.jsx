import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  MessageCircle,
  Layers,
  Sparkles,
} from "lucide-react";

// --- YENİ VERİ SETİ (Sprache im Alltag & İletişim) ---
const rawData = [
  // 1. BÖLÜM: Sprache im Alltag - İsimler
  {
    de: "das Bedauern",
    tr: "Pişmanlık, üzüntü",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "das Gegenüber",
    tr: "Karşı taraf, muhatap",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "die Mehrsprachigkeit",
    tr: "Çok dillilik",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "der Sachverhalt",
    tr: "Durum, olayın aslı, olgu",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "die Sprache",
    tr: "Dil (Günlük/Uzmanlık)",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "der Spracherwerb",
    tr: "Dil edinimi",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "der Stoff",
    tr: "Konu, materyal (Konuşma/Ders)",
    cat: "Günlük Dil",
    sub: "İsimler",
  },
  {
    de: "das Themenspektrum",
    tr: "Konu yelpazesi/çeşitliliği",
    cat: "Günlük Dil",
    sub: "İsimler",
  },

  // 1. BÖLÜM: Sprache im Alltag - Fiiller
  {
    de: "an|sprechen",
    tr: "Hitap etmek, bir konuyu açmak",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "aus|drücken",
    tr: "İfade etmek (düşünceyi vb.)",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "aus|reden",
    tr: "Konuşmasını bitirmek, lafı sonlandırmak",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "aus|reden lassen",
    tr: "Lafını bitirmesine izin vermek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "aus|weichen",
    tr: "Kaçınmak (sorudan), yol vermek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "sich ein|mischen",
    tr: "Karışmak, burnunu sokmak",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "gestikulieren",
    tr: "El-kol hareketleri yapmak (jest yapmak)",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "hinzu|fügen",
    tr: "Eklemek, ilave etmek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "kommunizieren",
    tr: "İletişim kurmak",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "nach|fragen",
    tr: "Sormak, soruşturmak (bilgi almak)",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "nach|haken",
    tr: "Üstelemek, detayını sormak",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "stoßen auf",
    tr: "Rastlamak, karşılaşmak (eleştiri, ilgi vb.)",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "über-/unterbewerten",
    tr: "Gereğinden fazla/az değer vermek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "über-/unterfordern",
    tr: "Kapasitesini zorlamak / altında iş vermek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "über-/unterschätzen",
    tr: "Gözünde büyütmek / Küçümsemek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "über-/untertreiben",
    tr: "Abartmak / Azımsamak",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "vermitteln",
    tr: "Aracılık etmek, sağlamak, iletmek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "vertreten",
    tr: "Temsil etmek, savunmak (görüş)",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "zur Sprache bringen",
    tr: "Dile getirmek, gündeme getirmek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },
  {
    de: "Kritik üben (an)",
    tr: "Eleştiri yapmak, eleştirmek",
    cat: "Günlük Dil",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: Sprache im Alltag - Sıfatlar
  { de: "abstrakt", tr: "Soyut", cat: "Günlük Dil", sub: "Sıfatlar" },
  { de: "akzentfrei", tr: "Aksansız", cat: "Günlük Dil", sub: "Sıfatlar" },
  {
    de: "ausführlich",
    tr: "Ayrıntılı, kapsamlı",
    cat: "Günlük Dil",
    sub: "Sıfatlar",
  },
  {
    de: "ausweichend",
    tr: "Kaçamak (cevap)",
    cat: "Günlük Dil",
    sub: "Sıfatlar",
  },
  { de: "detailliert", tr: "Detaylı", cat: "Günlük Dil", sub: "Sıfatlar" },
  {
    de: "hartnäckig",
    tr: "İnatçı, ısrarcı",
    cat: "Günlük Dil",
    sub: "Sıfatlar",
  },
  { de: "heftig", tr: "Şiddetli, sert", cat: "Günlük Dil", sub: "Sıfatlar" },
  { de: "komplex", tr: "Karmaşık", cat: "Günlük Dil", sub: "Sıfatlar" },
  { de: "konkret", tr: "Somut", cat: "Günlük Dil", sub: "Sıfatlar" },

  // 2. BÖLÜM: Nonverbale Kommunikation - İsimler
  {
    de: "der Blickkontakt",
    tr: "Göz teması",
    cat: "Sözsüz İletişim",
    sub: "İsimler",
  },
  {
    de: "der Gesichtsausdruck",
    tr: "Yüz ifadesi",
    cat: "Sözsüz İletişim",
    sub: "İsimler",
  },
  {
    de: "die Körpersprache",
    tr: "Vücut dili",
    cat: "Sözsüz İletişim",
    sub: "İsimler",
  },
  {
    de: "die Stimmlage",
    tr: "Ses tonu/perdesi",
    cat: "Sözsüz İletişim",
    sub: "İsimler",
  },

  // 2. BÖLÜM: Nonverbale Kommunikation - Fiiller/İfadeler
  {
    de: "sich ab|wenden (von)",
    tr: "Yüz çevirmek, arkasını dönmek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "sich zu|wenden",
    tr: "Yönelmek, ilgi göstermek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "ab|winken",
    tr: "Elinin tersiyle itmek, önemsememek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "ein|leuchten",
    tr: "Mantıklı gelmek, kafasına yatmak",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "erschließen",
    tr: "Anlamını çıkarmak, çözmek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  { de: "flüstern", tr: "Fısıldamak", cat: "Sözsüz İletişim", sub: "Fiiller" },
  {
    de: "missfallen",
    tr: "Hoşa gitmemek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "misstrauen",
    tr: "Güvenmemek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "missverstehen",
    tr: "Yanlış anlamak",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "nachvollziehen",
    tr: "Anlayabilmek, hak vermek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "signalisieren",
    tr: "Sinyal vermek, işaret etmek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "vor|werfen",
    tr: "Suçlamak, sitem etmek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "sich wegdrehen",
    tr: "Dönüp gitmek, başka tarafa dönmek",
    cat: "Sözsüz İletişim",
    sub: "Fiiller",
  },
  {
    de: "sich an den Kopf fassen",
    tr: "Elini başına götürmek (şaşkınlık)",
    cat: "Sözsüz İletişim",
    sub: "Hareketler",
  },
  {
    de: "klatschen",
    tr: "Alkışlamak, el çırpmak",
    cat: "Sözsüz İletişim",
    sub: "Hareketler",
  },
  {
    de: "nicken",
    tr: "Başını sallamak (evet)",
    cat: "Sözsüz İletişim",
    sub: "Hareketler",
  },
  {
    de: "den Kopf schütteln",
    tr: "Başını iki yana sallamak (hayır)",
    cat: "Sözsüz İletişim",
    sub: "Hareketler",
  },
  {
    de: "auf Ärger aus sein",
    tr: "Kavga/Bela aramak",
    cat: "Sözsüz İletişim",
    sub: "İfadeler",
  },
  {
    de: "das Gesicht verziehen",
    tr: "Yüzünü buruşturmak",
    cat: "Sözsüz İletişim",
    sub: "İfadeler",
  },
  {
    de: "mit den Schultern zucken",
    tr: "Omuz silkmek",
    cat: "Sözsüz İletişim",
    sub: "Hareketler",
  },
  { de: "emotional", tr: "Duygusal", cat: "Sözsüz İletişim", sub: "Sıfatlar" },

  // 3. BÖLÜM: Redewendungen (Deyimler)
  {
    de: "jemandem ins Wort fallen",
    tr: "Birinin sözünü kesmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "zu Wort kommen",
    tr: "Söz hakkı bulmak, sırası gelmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "etwas auf dem Herzen haben",
    tr: "Bir derdi olmak, söyleyeceği olmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "reden wie ein Wasserfall",
    tr: "Makinalı tüfek gibi konuşmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "ganz Ohr sein",
    tr: "Can kulağıyla dinlemek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "den Faden verlieren",
    tr: "Konunun ucunu kaçırmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "nur Bahnhof verstehen",
    tr: "Hiçbir şey anlamamak (Fransız kalmak)",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
];

const B1 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Modern Gradient Background */}
      <header className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <MessageCircle className="text-yellow-400 w-8 h-8" />
              <span>
                Sprache <span className="text-teal-300">&</span> Kommunikation
              </span>
            </h1>
            <p className="text-teal-100 text-sm mt-1 font-medium pl-11">
              Dil, İletişim ve Deyimler Sözlüğü
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-teal-900 shadow-lg"
                  : "text-teal-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-purple-900 shadow-lg"
                  : "text-purple-100 hover:bg-white/10"
              }`}
            >
              <Brain size={18} /> Sınav
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Kategori Filtresi - Hap Tasarımı */}
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
                      ? "bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700"
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
          <BookOpen className="text-teal-600" /> Kelime Kartları
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

  // Kategoriye göre renk belirleme (UI zenginliği için)
  const getBadgeColor = (cat) => {
    switch (cat) {
      case "Sözsüz İletişim":
        return "bg-pink-50 text-pink-600 border-pink-100";
      case "Deyimler":
        return "bg-orange-50 text-orange-600 border-orange-100";
      default:
        return "bg-teal-50 text-teal-600 border-teal-100"; // Günlük Dil
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-teal-200">
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}
          >
            {item.cat}
          </div>

          <div className="flex-1 flex items-center justify-center w-full">
            <h3 className="text-xl font-bold text-slate-800 font-serif leading-tight">
              {item.de}
            </h3>
          </div>

          <div className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            {item.sub}
          </div>
        </div>

        {/* ARKA YÜZ (Türkçe) - Modern Gradient */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-teal-600 to-emerald-700 text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner">
          <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm">
            {item.cat === "Deyimler" ? (
              <Sparkles size={20} className="text-white" />
            ) : (
              <Check size={20} className="text-white" />
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
              Bu ifadenin anlamı nedir?
            </span>
            <h3 className="text-4xl font-extrabold text-slate-800 font-serif tracking-tight">
              {currentQuestion.de}
            </h3>
          </div>

          {/* Şıklar */}
          <div className="grid gap-3 relative z-10">
            {options.map((opt, idx) => {
              let btnClass =
                "border-2 border-slate-100 bg-white hover:border-teal-200 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-teal-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-xl hover:bg-teal-800 active:scale-95 transition-all shadow-lg shadow-teal-200 font-bold text-lg"
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

export default B1;
