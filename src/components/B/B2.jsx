import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Heart,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";

// --- YENİ VERİ SETİ (Duygular & İlişkiler) ---
const rawData = [
  // A. DUYGULAR - İsimler
  {
    de: "die Eifersucht (auf)",
    tr: "Kıskançlık",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "der Ekel (vor)",
    tr: "Tiksinme, iğrenme",
    cat: "Duygular",
    sub: "İsimler",
  },
  { de: "die Emotion", tr: "Duygu", cat: "Duygular", sub: "İsimler" },
  {
    de: "das Erstaunen",
    tr: "Şaşkınlık, hayret",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "der Frust",
    tr: "Hayal kırıklığı, moral bozukluğu",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "die Gänsehaut",
    tr: "Tüylerin diken diken olması",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "das Herzklopfen",
    tr: "Kalp çarpıntısı",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "der Neid (auf)",
    tr: "Haset, çekememezlik",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "die Sehnsucht (nach)",
    tr: "Özlem, hasret",
    cat: "Duygular",
    sub: "İsimler",
  },
  { de: "der Trost", tr: "Teselli", cat: "Duygular", sub: "İsimler" },
  {
    de: "die Verlegenheit",
    tr: "Mahcubiyet, utangaçlık",
    cat: "Duygular",
    sub: "İsimler",
  },
  {
    de: "die Verzweiflung",
    tr: "Çaresizlik, umutsuzluk",
    cat: "Duygular",
    sub: "İsimler",
  },
  { de: "die Wut (auf)", tr: "Öfke", cat: "Duygular", sub: "İsimler" },

  // A. DUYGULAR - Fiiller
  {
    de: "sich aus|wirken (auf)",
    tr: "Etkilemek, etkisi olmak",
    cat: "Duygular",
    sub: "Fiiller",
  },
  {
    de: "sich beklagen (über)",
    tr: "Şikayet etmek, yakınmak",
    cat: "Duygular",
    sub: "Fiiller",
  },
  {
    de: "sich bemühen (um)",
    tr: "Çabalamak, zahmet etmek",
    cat: "Duygular",
    sub: "Fiiller",
  },
  {
    de: "sich erschrecken (vor)",
    tr: "Korkmak, ürkmek",
    cat: "Duygular",
    sub: "Fiiller",
  },
  { de: "flirten (mit)", tr: "Flört etmek", cat: "Duygular", sub: "Fiiller" },
  {
    de: "sich hinein|versetzen in",
    tr: "Kendini birinin yerine koymak (empati)",
    cat: "Duygular",
    sub: "Fiiller",
  },
  {
    de: "sich sehnen nach",
    tr: "Özlemek, hasretini çekmek",
    cat: "Duygular",
    sub: "Fiiller",
  },
  { de: "trösten", tr: "Teselli etmek", cat: "Duygular", sub: "Fiiller" },
  {
    de: "verheimlichen",
    tr: "Gizlemek, saklamak",
    cat: "Duygular",
    sub: "Fiiller",
  },
  { de: "zittern", tr: "Titremek", cat: "Duygular", sub: "Fiiller" },

  // A. DUYGULAR - Sıfatlar
  {
    de: "charmant",
    tr: "Çekici, büyüleyici",
    cat: "Duygular",
    sub: "Sıfatlar",
  },
  { de: "eklig", tr: "İğrenç", cat: "Duygular", sub: "Sıfatlar" },
  { de: "entsetzlich", tr: "Dehşet verici", cat: "Duygular", sub: "Sıfatlar" },
  { de: "fürchterlich", tr: "Korkunç", cat: "Duygular", sub: "Sıfatlar" },
  {
    de: "grauenhaft / grauenvoll",
    tr: "Korkunç, dehşetli",
    cat: "Duygular",
    sub: "Sıfatlar",
  },
  { de: "großartig", tr: "Muhteşem", cat: "Duygular", sub: "Sıfatlar" },
  {
    de: "hervorragend",
    tr: "Mükemmel, üstün",
    cat: "Duygular",
    sub: "Sıfatlar",
  },
  {
    de: "neidisch sein (auf)",
    tr: "Kıskanmak (haset etmek)",
    cat: "Duygular",
    sub: "Sıfatlar",
  },
  { de: "traumhaft", tr: "Rüya gibi", cat: "Duygular", sub: "Sıfatlar" },
  { de: "verlegen", tr: "Mahcup, utangaç", cat: "Duygular", sub: "Sıfatlar" },
  { de: "wundervoll", tr: "Harika", cat: "Duygular", sub: "Sıfatlar" },

  // B. TEPKİLER VE İLİŞKİLER - İsimler
  {
    de: "der Bekannten-/Freundeskreis",
    tr: "Tanıdık/Arkadaş çevresi",
    cat: "İlişkiler",
    sub: "İsimler",
  },
  {
    de: "das Vertrauensverhältnis",
    tr: "Güven ilişkisi",
    cat: "İlişkiler",
    sub: "İsimler",
  },
  {
    de: "die Nachbarschaft",
    tr: "Komşuluk, mahalle",
    cat: "İlişkiler",
    sub: "İsimler",
  },
  {
    de: "die Verwandtschaft",
    tr: "Akrabalık",
    cat: "İlişkiler",
    sub: "İsimler",
  },

  // B. TEPKİLER VE İLİŞKİLER - Fiiller
  {
    de: "ab|lenken (von)",
    tr: "Dikkatini dağıtmak, uzaklaştırmak",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  {
    de: "auf|muntern",
    tr: "Neşelendirmek, moral vermek",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  {
    de: "aus|nutzen",
    tr: "Kullanmak, sömürmek, istismar etmek",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  { de: "ermutigen", tr: "Cesaretlendirmek", cat: "İlişkiler", sub: "Fiiller" },
  {
    de: "hintergehen",
    tr: "Aldatmak, ihanet etmek, arkasından iş çevirmek",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  {
    de: "nerven",
    tr: "Sinir etmek, gıcık etmek",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  { de: "sich trauen", tr: "Cesaret etmek", cat: "İlişkiler", sub: "Fiiller" },
  {
    de: "übergehen",
    tr: "Görmezden gelmek, pas geçmek",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  {
    de: "vernachlässigen",
    tr: "İhmal etmek",
    cat: "İlişkiler",
    sub: "Fiiller",
  },
  {
    de: "befreundet sein mit",
    tr: "Arkadaş olmak",
    cat: "İlişkiler",
    sub: "Sıfatlar",
  },
  {
    de: "lästig sein",
    tr: "Rahatsızlık verici/yük olmak",
    cat: "İlişkiler",
    sub: "Sıfatlar",
  },

  // C. KALIPLAŞMIŞ İFADELER
  {
    de: "in Tränen ausbrechen",
    tr: "Gözyaşlarına boğulmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "ein Kompliment machen",
    tr: "İltifat etmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "den Atem verschlagen",
    tr: "Nefesini kesmek (şaşkınlıktan)",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "zum Ausdruck bringen",
    tr: "Dile getirmek, ifade etmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "unter Kontrolle bringen",
    tr: "Kontrol altına almak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "in Verlegenheit bringen",
    tr: "Utandırmak, mahcup etmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "die Daumen drücken",
    tr: "Şans dilemek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  { de: "zur Last fallen", tr: "Yük olmak", cat: "Deyimler", sub: "Kalıplar" },
  {
    de: "eine Entscheidung fällen",
    tr: "Karar vermek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "ein Gespräch führen",
    tr: "Konuşma yapmak / Sohbet etmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  { de: "zu Ende gehen", tr: "Sona ermek", cat: "Deyimler", sub: "Kalıplar" },
  {
    de: "in Erfüllung gehen",
    tr: "Gerçekleşmek (dilek vb.)",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "auf die Nerven gehen",
    tr: "Sinirine dokunmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "die Nase voll haben",
    tr: "Bıkmak, usanmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "Schmetterlinge im Bauch haben",
    tr: "Karnında kelebekler uçuşmak (aşk/heyecan)",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "zu Hilfe kommen",
    tr: "Yardıma gelmek/yetişmek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "ins Herz schließen",
    tr: "Çok sevmek, bağrına basmak",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
  {
    de: "vor den Kopf stoßen",
    tr: "Kırmak, gücendirmek, terslemek",
    cat: "Deyimler",
    sub: "Kalıplar",
  },
];

const B2 = () => {
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
      <header className="bg-gradient-to-r from-rose-900 to-indigo-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Heart className="text-rose-400 w-8 h-8 fill-rose-500" />
              <span>
                Emotionen <span className="text-rose-200">&</span> Beziehungen
              </span>
            </h1>
            <p className="text-indigo-200 text-sm mt-1 font-medium pl-11">
              Duygular, İlişkiler ve Tepkiler Sözlüğü
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
                  ? "bg-white text-indigo-900 shadow-lg"
                  : "text-indigo-100 hover:bg-white/10"
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
                      ? "bg-rose-700 text-white border-rose-700 shadow-md shadow-rose-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-rose-300 hover:text-rose-700"
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
          <BookOpen className="text-rose-600" /> Kelime Kartları
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
      case "Duygular":
        return "bg-rose-50 text-rose-600 border-rose-100";
      case "İlişkiler":
        return "bg-indigo-50 text-indigo-600 border-indigo-100";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-rose-200">
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
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-rose-600 to-indigo-700 text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner">
          <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm">
            {item.cat === "Deyimler" ? (
              <Sparkles size={20} className="text-white" />
            ) : item.cat === "İlişkiler" ? (
              <Users size={20} className="text-white" />
            ) : (
              <Heart size={20} className="text-white fill-white" />
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
            <h3 className="text-4xl font-extrabold text-slate-800 font-serif tracking-tight">
              {currentQuestion.de}
            </h3>
          </div>

          {/* Şıklar */}
          <div className="grid gap-3 relative z-10">
            {options.map((opt, idx) => {
              let btnClass =
                "border-2 border-slate-100 bg-white hover:border-rose-200 hover:bg-slate-50 text-slate-600";
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
                className="flex items-center gap-2 bg-rose-700 text-white px-8 py-4 rounded-xl hover:bg-rose-800 active:scale-95 transition-all shadow-lg shadow-rose-200 font-bold text-lg"
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

export default B2;
