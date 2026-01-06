import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  GraduationCap,
  Layers,
} from "lucide-react";

// --- VERİ SETİ (Aynı veri korunmuştur) ---
const rawData = [
  // Amtsdeutsch
  {
    de: "die Anpassung",
    tr: "Uyarlama, intibak, düzeltme",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Basis",
    tr: "Temel, baz, esas",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Eingangsbestätigung",
    tr: "Alındı belgesi, evrak kayıt onayı",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Entschädigung",
    tr: "Tazminat",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "der Erhalt",
    tr: "Teslim alma / Koruma",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Grundlage",
    tr: "Temel, dayanak (Yasal/Hesaplama)",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Inanspruchnahme",
    tr: "Kullanma, yararlanma, talep etme",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Mitwirkungspflicht",
    tr: "İşbirliği yapma yükümlülüğü",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "der Nachweis",
    tr: "Kanıt, ispat, belge",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Polizeidirektion",
    tr: "Emniyet müdürlüğü",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Rechtsbehelfsbelehrung",
    tr: "Yasa yolu bildirimi (İtiraz hakları)",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Rentenversicherung",
    tr: "Emeklilik sigortası",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Rückzahlungsverpflichtung",
    tr: "Geri ödeme yükümlülüğü",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "der Schadensersatzanspruch",
    tr: "Tazminat talebi/hakkı",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "die Verjährungsfrist",
    tr: "Zaman aşımı süresi",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "das Verwaltungsgericht",
    tr: "İdare mahkemesi",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "der Zahlungseingang",
    tr: "Ödeme girişi",
    cat: "Amtsdeutsch",
    sub: "İsimler",
  },
  {
    de: "bewilligen",
    tr: "Onaylamak, tahsis etmek",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  {
    de: "einreichen",
    tr: "Sunmak, ibraz etmek",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  {
    de: "erlöschen",
    tr: "Sona ermek, hükmünü yitirmek",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  {
    de: "freistellen (von)",
    tr: "Muaf tutmak",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  { de: "kalkulieren", tr: "Hesaplamak", cat: "Amtsdeutsch", sub: "Fiiller" },
  {
    de: "mitwirken (an)",
    tr: "Katkıda bulunmak, iştirak etmek",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  {
    de: "nachkommen",
    tr: "Yerine getirmek (bir görevi)",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  {
    de: "stattgeben",
    tr: "Kabul etmek, yerinde bulmak",
    cat: "Amtsdeutsch",
    sub: "Fiiller",
  },
  {
    de: "fristgemäß / fristgerecht",
    tr: "Süresinde, zamanında",
    cat: "Amtsdeutsch",
    sub: "Sıfatlar",
  },
  {
    de: "personenbezogen",
    tr: "Kişisel, şahsa bağlı",
    cat: "Amtsdeutsch",
    sub: "Sıfatlar",
  },
  { de: "umgehend", tr: "Derhal, hemen", cat: "Amtsdeutsch", sub: "Sıfatlar" },
  {
    de: "auf Antrag",
    tr: "Talep üzerine",
    cat: "Amtsdeutsch",
    sub: "Sıfatlar",
  },
  {
    de: "i.A. (im Auftrag)",
    tr: "Adına, vekaleten",
    cat: "Amtsdeutsch",
    sub: "Sıfatlar",
  },
  // Hukuk
  {
    de: "die Abschiebung",
    tr: "Sınır dışı etme",
    cat: "Hukuk",
    sub: "İsimler",
  },
  { de: "der/die Angeklagte", tr: "Sanık", cat: "Hukuk", sub: "İsimler" },
  {
    de: "der Ankläger / die Anklägerin",
    tr: "Davacı / Savcı",
    cat: "Hukuk",
    sub: "İsimler",
  },
  {
    de: "der Antragsteller",
    tr: "Başvuru sahibi",
    cat: "Hukuk",
    sub: "İsimler",
  },
  { de: "die Bekanntgabe", tr: "Tebliğ, duyuru", cat: "Hukuk", sub: "İsimler" },
  { de: "der Gerichtsdiener", tr: "Mübaşir", cat: "Hukuk", sub: "İsimler" },
  {
    de: "der Gerichtssaal",
    tr: "Mahkeme salonu",
    cat: "Hukuk",
    sub: "İsimler",
  },
  {
    de: "die Gerichtsverhandlung",
    tr: "Duruşma",
    cat: "Hukuk",
    sub: "İsimler",
  },
  {
    de: "die Geringfügigkeit",
    tr: "Önemsizlik, ehemmiyetsizlik",
    cat: "Hukuk",
    sub: "İsimler",
  },
  { de: "der Staatsanwalt", tr: "Savcı", cat: "Hukuk", sub: "İsimler" },
  { de: "die Straftat", tr: "Suç (fiili)", cat: "Hukuk", sub: "İsimler" },
  {
    de: "die Straßenverkehrsordnung",
    tr: "Karayolları trafik kanunu",
    cat: "Hukuk",
    sub: "İsimler",
  },
  { de: "der Verstoß", tr: "İhlal, aykırılık", cat: "Hukuk", sub: "İsimler" },
  {
    de: "der Verteidiger",
    tr: "Savunma avukatı",
    cat: "Hukuk",
    sub: "İsimler",
  },
  {
    de: "anfallen",
    tr: "Ortaya çıkmak (masraf, faiz)",
    cat: "Hukuk",
    sub: "Fiiller",
  },
  { de: "anklagen", tr: "Suçlamak, dava açmak", cat: "Hukuk", sub: "Fiiller" },
  { de: "aussagen", tr: "İfade vermek", cat: "Hukuk", sub: "Fiiller" },
  {
    de: "beschuldigen",
    tr: "Suçlamak, itham etmek",
    cat: "Hukuk",
    sub: "Fiiller",
  },
  { de: "betragen", tr: "Tutmak (miktar)", cat: "Hukuk", sub: "Fiiller" },
  {
    de: "eingehen",
    tr: "Ulaşmak, kuruma girmek (evrak)",
    cat: "Hukuk",
    sub: "Fiiller",
  },
  {
    de: "vorsprechen bei",
    tr: "Müracaat etmek, görüşmeye gitmek",
    cat: "Hukuk",
    sub: "Fiiller",
  },
  {
    de: "eine Frist einhalten",
    tr: "Bir süreye uymak",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "Widerspruch einlegen",
    tr: "İtiraz etmek",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "ein Verfahren einleiten",
    tr: "Dava/Süreç başlatmak",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  { de: "Klage einreichen", tr: "Dava açmak", cat: "Hukuk", sub: "Kalıplar" },
  {
    de: "ein Verfahren einstellen",
    tr: "Davayı durdurmak",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "Anklage erheben",
    tr: "Dava açmak (kamu davası)",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "ein Verfahren eröffnen",
    tr: "Yargılamayı başlatmak",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "ein Urteil fällen",
    tr: "Hüküm vermek",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "eine Anklage fallenlassen",
    tr: "Suçlamayı düşürmek",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "Kosten tragen",
    tr: "Masrafları üstlenmek",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "die Verteidigung vertreten",
    tr: "Savunmayı temsil etmek",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  {
    de: "eine Anklage zurückziehen",
    tr: "Davayı geri çekmek",
    cat: "Hukuk",
    sub: "Kalıplar",
  },
  { de: "unbegründet", tr: "Gerekçesiz, asılsız", cat: "Hukuk", sub: "Diğer" },
  { de: "hiermit", tr: "İşbu vesileyle", cat: "Hukuk", sub: "Diğer" },
  { de: "offensichtlich", tr: "Aşikar, açıkça", cat: "Hukuk", sub: "Diğer" },
  { de: "seitens", tr: "... tarafından", cat: "Hukuk", sub: "Diğer" },
  { de: "vor Ablauf", tr: "(Süre) dolmadan önce", cat: "Hukuk", sub: "Diğer" },
  {
    de: "unter Ausschluss der Öffentlichkeit",
    tr: "Kapalı oturumda",
    cat: "Hukuk",
    sub: "Diğer",
  },
  {
    de: "zur Niederschrift",
    tr: "Tutanağa geçirilmek kaydıyla",
    cat: "Hukuk",
    sub: "Diğer",
  },
  { de: "von Unbekannt", tr: "Faili meçhul", cat: "Hukuk", sub: "Diğer" },
  {
    de: "einen Beruf ausüben",
    tr: "Bir mesleği icra etmek",
    cat: "Kalıplar",
    sub: "Genel",
  },
  {
    de: "Auskunft erteilen",
    tr: "Bilgi vermek",
    cat: "Kalıplar",
    sub: "Genel",
  },
  {
    de: "zustande kommen",
    tr: "Gerçekleşmek, meydana gelmek",
    cat: "Kalıplar",
    sub: "Genel",
  },
  {
    de: "zugrunde liegen",
    tr: "Temelini oluşturmak",
    cat: "Kalıplar",
    sub: "Genel",
  },
  {
    de: "in Kenntnis setzen",
    tr: "Bilgilendirmek, haberdar etmek",
    cat: "Kalıplar",
    sub: "Genel",
  },
];

const B13 = () => {
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
      <header className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <GraduationCap className="text-yellow-400 w-8 h-8" />
              <span>
                Amtsdeutsch <span className="text-indigo-300">&</span> Hukuk
              </span>
            </h1>
            <p className="text-indigo-200 text-sm mt-1 font-medium pl-11">
              Almanca Resmi Daire ve Hukuk Terimleri Sözlüğü
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
        {/* Kategori Filtresi - Daha Modern Hap Tasarımı */}
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
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
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
          <BookOpen className="text-indigo-600" /> Kelime Kartları
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
  const isLaw = item.cat === "Hukuk";
  const badgeColor = isLaw
    ? "bg-red-50 text-red-600 border-red-100"
    : "bg-blue-50 text-blue-600 border-blue-100";

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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-indigo-200">
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
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner">
          <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm">
            <Check size={20} className="text-white" />
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
              Aşağıdaki kelimenin anlamı nedir?
            </span>
            <h3 className="text-4xl font-extrabold text-slate-800 font-serif tracking-tight">
              {currentQuestion.de}
            </h3>
          </div>

          {/* Şıklar */}
          <div className="grid gap-3 relative z-10">
            {options.map((opt, idx) => {
              let btnClass =
                "border-2 border-slate-100 bg-white hover:border-indigo-200 hover:bg-slate-50 text-slate-600";
              let icon = null;

              if (selectedOption) {
                if (opt.de === currentQuestion.de) {
                  // DOĞRU ŞIK GÖRÜNÜMÜ
                  btnClass =
                    "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-md transform scale-[1.02]";
                  icon = <Check size={22} className="text-emerald-600" />;
                } else if (opt === selectedOption && !isCorrect) {
                  // YANLIŞ ŞIK GÖRÜNÜMÜ
                  btnClass = "bg-rose-50 border-rose-500 text-rose-700";
                  icon = <X size={22} className="text-rose-600" />;
                } else {
                  // DİĞER ŞIKLAR
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
                className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200 font-bold text-lg"
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
  
  /* Basit giriş animasyonları */
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

export default B13;
