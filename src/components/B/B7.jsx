import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  GraduationCap,
  Briefcase,
  FileText,
  AlertTriangle,
  Layers,
  ScrollText,
} from "lucide-react";

// --- YENİ VERİ SETİ (Im Studium & Bei der Arbeit) ---
const rawData = [
  // 1. BÖLÜM: ÜNİVERSİTE (IM STUDIUM) - İsimler
  {
    de: "der Absolvent / die Absolventin",
    tr: "Mezun",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "der Aushang",
    tr: "Duyuru, ilan (panodaki)",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "der Ausnahmefall",
    tr: "İstisnai durum",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Betriebswirtschaft",
    tr: "İşletme (ekonomisi)",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Elektrotechnik",
    tr: "Elektrik mühendisliği",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "das Erstsemester",
    tr: "Birinci sınıf öğrencisi/dönemi",
    cat: "Üniversite",
    sub: "İsimler",
  },
  { de: "Jura", tr: "Hukuk", cat: "Üniversite", sub: "İsimler" },
  {
    de: "die Kunstgeschichte",
    tr: "Sanat tarihi",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Lehrveranstaltung",
    tr: "Ders (üniversitede)",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "der Maschinenbau",
    tr: "Makine mühendisliği",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Orchidee (Orchideenfach)",
    tr: "Orkide (Mecazen: Nadir/Az okunan bölüm)",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Pädagogik",
    tr: "Pedagoji, eğitim bilimi",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "das Plädoyer",
    tr: "Savunma konuşması",
    cat: "Üniversite",
    sub: "İsimler",
  },
  { de: "die Soziologie", tr: "Sosyoloji", cat: "Üniversite", sub: "İsimler" },
  {
    de: "die Sprachwissenschaft",
    tr: "Dilbilim",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "der Studiengang",
    tr: "Yükseköğrenim programı, bölüm",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "das Studiensekretariat",
    tr: "Öğrenci işleri",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Volkswirtschaft",
    tr: "İktisat, ekonomi",
    cat: "Üniversite",
    sub: "İsimler",
  },
  {
    de: "die Zulassung",
    tr: "Kabul, giriş izni",
    cat: "Üniversite",
    sub: "İsimler",
  },

  // 1. BÖLÜM: ÜNİVERSİTE (IM STUDIUM) - Fiiller
  {
    de: "ab|brechen",
    tr: "Yarıda bırakmak, terk etmek (okulu)",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "ab|wenden",
    tr: "Önlemek, savuşturmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "beerdigen",
    tr: "Gömmek (Mecazen: bir fikirden vazgeçmek)",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "beibehalten",
    tr: "Sürdürmek, korumak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "belegen",
    tr: "(Ders/Kurs) Almak, kaydolmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "ein|halten",
    tr: "Uymak, riayet etmek (süreye)",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "ein|reichen",
    tr: "Teslim etmek, sunmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "sich ein|schreiben",
    tr: "Kayıt yaptırmak (üniversiteye)",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "entnehmen",
    tr: "(Bilgi) Almak, çıkarmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "erbringen",
    tr: "Ortaya koymak, gerçekleştirmek (performans)",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "sich immatrikulieren",
    tr: "Üniversiteye kayıt olmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "nach|reichen",
    tr: "Sonradan teslim etmek",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "nach|weisen",
    tr: "Kanıtlamak, belgelemek",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "ringen um",
    tr: "Mücadele etmek, çabalamak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "schwinden",
    tr: "Azalmak, yok olmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },
  {
    de: "vermitteln",
    tr: "Sağlamak, aktarmak, (ilgi) uyandırmak",
    cat: "Üniversite",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: ÜNİVERSİTE - Sıfatlar
  { de: "effizient", tr: "Verimli", cat: "Üniversite", sub: "Sıfatlar" },
  { de: "konstant", tr: "Sabit, sürekli", cat: "Üniversite", sub: "Sıfatlar" },
  {
    de: "zulassungsfrei",
    tr: "Sınavsız/Koşulsuz girişli",
    cat: "Üniversite",
    sub: "Sıfatlar",
  },
  {
    de: "eine brotlose Kunst sein",
    tr: "Karın doyurmayan bir iş/sanat olmak",
    cat: "Üniversite",
    sub: "Sıfatlar",
  },

  // 2. BÖLÜM: İŞ HAYATI (BEI DER ARBEIT) - İsimler
  {
    de: "die Abrechnung",
    tr: "Hesaplaşma, hesap dökümü",
    cat: "İş Hayatı",
    sub: "İsimler",
  },
  {
    de: "der Anhang",
    tr: "Ek (dosya, belge)",
    cat: "İş Hayatı",
    sub: "İsimler",
  },
  {
    de: "das Anschreiben",
    tr: "Ön yazı (başvuru)",
    cat: "İş Hayatı",
    sub: "İsimler",
  },
  { de: "der Buchhalter", tr: "Muhasebeci", cat: "İş Hayatı", sub: "İsimler" },
  {
    de: "der Posten",
    tr: "Mevki, görev, pozisyon",
    cat: "İş Hayatı",
    sub: "İsimler",
  },
  {
    de: "die Stellenanzeige",
    tr: "İş ilanı",
    cat: "İş Hayatı",
    sub: "İsimler",
  },

  // 2. BÖLÜM: İŞ HAYATI (BEI DER ARBEIT) - Fiiller
  {
    de: "absolvieren",
    tr: "Tamamlamak, bitirmek (staj/eğitim)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "aus|schreiben",
    tr: "İlana çıkmak, ilan etmek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "bereit|halten",
    tr: "Hazır bulundurmak / Gebe olmak",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "bewältigen",
    tr: "Üstesinden gelmek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "durch|bringen",
    tr: "Geçindirmek (aileyi)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "durch|gehen",
    tr: "Gözden geçirmek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "durch|halten",
    tr: "Dayanmak, sonunu getirmek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "durchlaufen",
    tr: "(Süreçten) Geçmek, tamamlamak",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "durch|stehen",
    tr: "Atlatmak, göğüs germek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "durch|ziehen",
    tr: "(Sonuna kadar) Götürmek, bitirmek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "hin|bekommen",
    tr: "Halledetmek, başarmak",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "investieren",
    tr: "Yatırım yapmak (emek/zaman)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "meistern",
    tr: "Üstesinden gelmek, becermek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "scheitern (an)",
    tr: "Başarısız olmak (... yüzünden)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "stoßen auf",
    tr: "Rastlamak (ilana, fikre)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "übernehmen",
    tr: "Üstlenmek (sorumluluk)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  { de: "umfassen", tr: "Kapsamak, içermek", cat: "İş Hayatı", sub: "Fiiller" },
  {
    de: "versagen",
    tr: "Başarısız olmak, çuvallamak",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "sich vorstellen können",
    tr: "Hayal edebilmek (yapmayı)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "sich weiter|bilden",
    tr: "Kendini geliştirmek (mesleki)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "zustande bringen",
    tr: "Meydana getirmek, gerçekleştirmek",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },
  {
    de: "sich zutrauen",
    tr: "Kendine güvenmek (yapabileceğine inanmak)",
    cat: "İş Hayatı",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: İŞ HAYATI - Sıfatlar/Kalıplar
  {
    de: "anspruchsvoll",
    tr: "İddialı, talepkar, nitelikli",
    cat: "İş Hayatı",
    sub: "Sıfatlar",
  },
  {
    de: "EDV-gestützt",
    tr: "Bilgisayar destekli",
    cat: "İş Hayatı",
    sub: "Sıfatlar",
  },
  { de: "kaufmännisch", tr: "Ticari", cat: "İş Hayatı", sub: "Sıfatlar" },
  {
    de: "mittelständisch",
    tr: "Orta ölçekli (işletme)",
    cat: "İş Hayatı",
    sub: "Sıfatlar",
  },
  {
    de: "tätig",
    tr: "Faal, çalışan, aktif",
    cat: "İş Hayatı",
    sub: "Sıfatlar",
  },
  {
    de: "Erfahrungen sammeln",
    tr: "Tecrübe edinmek",
    cat: "İş Hayatı",
    sub: "Kalıplar",
  },
  {
    de: "sich bewusst sein",
    tr: "Farkında olmak",
    cat: "İş Hayatı",
    sub: "Kalıplar",
  },
  {
    de: "auf die Beine stellen",
    tr: "Kurmak, hayata geçirmek",
    cat: "İş Hayatı",
    sub: "Kalıplar",
  },
  {
    de: "zur allgemeinen Zufriedenheit",
    tr: "Genel memnuniyet adına",
    cat: "İş Hayatı",
    sub: "Kalıplar",
  },

  // KUTULAR & NOTLAR
  {
    de: "Geisteswissenschaften",
    tr: "Beşeri Bilimler",
    cat: "Bilim Dalları",
    sub: "Terimler",
  },
  {
    de: "Ingenieurwissenschaften",
    tr: "Mühendislik Bilimleri",
    cat: "Bilim Dalları",
    sub: "Terimler",
  },
  {
    de: "Naturwissenschaften",
    tr: "Doğa Bilimleri",
    cat: "Bilim Dalları",
    sub: "Terimler",
  },
  {
    de: "Rechtswissenschaften",
    tr: "Hukuk Bilimleri",
    cat: "Bilim Dalları",
    sub: "Terimler",
  },
  {
    de: "Sozialwissenschaften",
    tr: "Sosyal Bilimler",
    cat: "Bilim Dalları",
    sub: "Terimler",
  },
  {
    de: "Wirtschaftswissenschaften",
    tr: "İktisadi Bilimler",
    cat: "Bilim Dalları",
    sub: "Terimler",
  },

  // DEYİMLER (TEHLİKELER)
  {
    de: "gefährdet sein",
    tr: "Tehlikede olmak",
    cat: "Deyimler (Risk)",
    sub: "Kalıplar",
  },
  {
    de: "ein Schlag sein (für)",
    tr: "Darbe olmak (şok/hayal kırıklığı)",
    cat: "Deyimler (Risk)",
    sub: "Kalıplar",
  },
  {
    de: "eng werden (für)",
    tr: "İşlerin sıkışması/zora girmesi",
    cat: "Deyimler (Risk)",
    sub: "Kalıplar",
  },
  {
    de: "Schiffbruch erleiden",
    tr: "Batmak, iflas etmek, başarısızlığa uğramak",
    cat: "Deyimler (Risk)",
    sub: "Kalıplar",
  },
  {
    de: "etwas an die Wand fahren",
    tr: "Batırmak, duvara toslatmak",
    cat: "Deyimler (Risk)",
    sub: "Kalıplar",
  },
  {
    de: "auf die Nase fallen",
    tr: "Yere kapaklanmak, başarısız olmak",
    cat: "Deyimler (Risk)",
    sub: "Kalıplar",
  },
];

const B7 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Academic/Corporate Theme */}
      <header className="bg-gradient-to-r from-blue-900 via-slate-800 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <GraduationCap className="text-blue-300 w-8 h-8" />
              <span>
                Studium <span className="text-slate-400">&</span> Beruf
              </span>
            </h1>
            <p className="text-slate-300 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Briefcase size={14} className="text-blue-200" /> Üniversite ve İş
              Hayatı Terimleri
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
                  ? "bg-white text-slate-800 shadow-lg"
                  : "text-slate-200 hover:bg-white/10"
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
                      ? "bg-blue-800 text-white border-blue-800 shadow-md shadow-blue-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-800"
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
      case "Üniversite":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "İş Hayatı":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "Bilim Dalları":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Deyimler (Risk)":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Üniversite")
      return <GraduationCap size={20} className="text-white" />;
    if (cat === "İş Hayatı")
      return <Briefcase size={20} className="text-white" />;
    if (cat === "Deyimler (Risk)")
      return <AlertTriangle size={20} className="text-white" />;
    return <FileText size={20} className="text-white" />;
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
          className={`absolute w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner
            ${
              item.cat === "Deyimler (Risk)"
                ? "bg-gradient-to-br from-rose-700 to-red-800"
                : "bg-gradient-to-br from-blue-700 to-slate-800"
            } text-white`}
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
                className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl hover:bg-slate-900 active:scale-95 transition-all shadow-lg shadow-slate-400 font-bold text-lg"
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

export default B7;
