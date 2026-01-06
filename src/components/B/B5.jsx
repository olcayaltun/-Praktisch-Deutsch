import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Palette,
  Music,
  Feather,
  Book,
  Layers,
  Sparkles,
  Mic2,
} from "lucide-react";

// --- YENİ VERİ SETİ (Kunst, Musik und Literatur) ---
const rawData = [
  // 1. BÖLÜM: KUNST UND MUSIK - İsimler
  { de: "das Akkordeon", tr: "Akordeon", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "die Architektur", tr: "Mimari", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "die Atmosphäre",
    tr: "Atmosfer / Hava",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "das Ballett", tr: "Bale", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "die Bildhauerei",
    tr: "Heykeltıraşlık",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  {
    de: "die Bronze",
    tr: "Bronz / Tunç",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "der E-Bass", tr: "Bas gitar", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "das Figurentheater",
    tr: "Kukla tiyatrosu",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "die Geige", tr: "Keman", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "das Gemälde",
    tr: "Tablo, resim",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  {
    de: "die Installationskunst",
    tr: "Enstalasyon (yerleştirme) sanatı",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  {
    de: "die Karikatur",
    tr: "Karikatür",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "die Keramik", tr: "Seramik", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "das Kunstwerk",
    tr: "Sanat eseri",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  {
    de: "die Leinwand",
    tr: "Tuval / Perde (sinema)",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  {
    de: "die Malerei",
    tr: "Resim sanatı",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "der Marmor", tr: "Mermer", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "das Mauerwerk",
    tr: "Duvar örgüsü / Taş duvar",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "das Mosaik", tr: "Mozaik", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "das Musical", tr: "Müzikal", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "die Ölfarbe", tr: "Yağlı boya", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "die Pantomime", tr: "Pandomim", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "der Pinsel", tr: "Fırça", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "das Selbstporträt",
    tr: "(Oto)Portre",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  {
    de: "das Schlagzeug",
    tr: "Bateri / Vurmalı çalgı",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },
  { de: "die Skulptur", tr: "Heykel", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "der Ton", tr: "Kil (malzeme)", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "die Trompete", tr: "Trompet", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "die Violine", tr: "Keman", cat: "Sanat & Müzik", sub: "İsimler" },
  { de: "der Werkstoff", tr: "Malzeme", cat: "Sanat & Müzik", sub: "İsimler" },
  {
    de: "die Ziehharmonika",
    tr: "Mızıka / Akordeon",
    cat: "Sanat & Müzik",
    sub: "İsimler",
  },

  // 1. BÖLÜM: KUNST UND MUSIK - Fiiller
  {
    de: "gestalten",
    tr: "Şekillendirmek, tasarlamak",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "improvisieren",
    tr: "Doğaçlama yapmak",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "inspirieren",
    tr: "İlham vermek",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "interpretieren",
    tr: "Yorumlamak (şiir, eser)",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "nachvollziehen",
    tr: "Anlamak, kafasında canlandırabilmek",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  { de: "proben", tr: "Prova yapmak", cat: "Sanat & Müzik", sub: "Fiiller" },
  {
    de: "veranstalten",
    tr: "Düzenlemek, organize etmek",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "vermitteln",
    tr: "Aktarmak, hissettirmek (duygu)",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "wieder|geben",
    tr: "Yansıtmak, aktarmak (bir atmosferi)",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },
  {
    de: "den Takt halten",
    tr: "Ritmi/Tempoyu tutturmak",
    cat: "Sanat & Müzik",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: LITERATUR - İsimler
  {
    de: "die Anspielung (auf)",
    tr: "Telmih, ima, gönderme",
    cat: "Edebiyat",
    sub: "İsimler",
  },
  { de: "die Chronologie", tr: "Kronoloji", cat: "Edebiyat", sub: "İsimler" },
  {
    de: "das Drama",
    tr: "Drama / Tiyatro oyunu",
    cat: "Edebiyat",
    sub: "İsimler",
  },
  {
    de: "die Entführung",
    tr: "Kaçırma (insan)",
    cat: "Edebiyat",
    sub: "İsimler",
  },
  { de: "die Erpressung", tr: "Şantaj", cat: "Edebiyat", sub: "İsimler" },
  {
    de: "die Handlung",
    tr: "Konu / Olay örgüsü",
    cat: "Edebiyat",
    sub: "İsimler",
  },
  { de: "die Hauptfigur", tr: "Başkahraman", cat: "Edebiyat", sub: "İsimler" },
  { de: "der Kommissar", tr: "Komiser", cat: "Edebiyat", sub: "İsimler" },
  { de: "das Lösegeld", tr: "Fidye", cat: "Edebiyat", sub: "İsimler" },
  { de: "der Mörder", tr: "Katil", cat: "Edebiyat", sub: "İsimler" },
  { de: "das Rauschgift", tr: "Uyuşturucu", cat: "Edebiyat", sub: "İsimler" },
  {
    de: "die Schilderung",
    tr: "Tasvir, anlatım",
    cat: "Edebiyat",
    sub: "İsimler",
  },
  { de: "die Spur", tr: "İz", cat: "Edebiyat", sub: "İsimler" },
  { de: "der Tatort", tr: "Olay yeri", cat: "Edebiyat", sub: "İsimler" },
  { de: "der/die Verdächtige", tr: "Şüpheli", cat: "Edebiyat", sub: "İsimler" },
  {
    de: "die Vernehmung",
    tr: "Sorgu / İfade alma",
    cat: "Edebiyat",
    sub: "İsimler",
  },

  // 2. BÖLÜM: LITERATUR - Fiiller
  {
    de: "ab|legen (ein Geständnis)",
    tr: "İtiraf etmek",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "ab|streiten",
    tr: "Reddetmek, inkar etmek",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "aus|fallen",
    tr: "Sonuçlanmak (ağır/hafif vb.)",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "aus|zeichnen (mit)",
    tr: "Ödüllendirmek",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  { de: "basieren auf", tr: "...-e dayanmak", cat: "Edebiyat", sub: "Fiiller" },
  {
    de: "begehen (ein Verbrechen)",
    tr: "İşlemek (suç)",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "erstatten (Anzeige)",
    tr: "Şikayet etmek, bildirmek",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "formulieren",
    tr: "İfade etmek, kaleme almak",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "heraus|geben",
    tr: "Yayımlamak / Çıkarmak",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "schildern",
    tr: "Tasvir etmek, anlatmak",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "verfassen",
    tr: "Yazmak, kaleme almak",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  { de: "verfilmen", tr: "Filme uyarlamak", cat: "Edebiyat", sub: "Fiiller" },
  {
    de: "vernehmen",
    tr: "Sorgulamak, ifadesini almak",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "verweigern",
    tr: "Reddetmek, vermemek (ifade)",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "vor|legen",
    tr: "Sunmak, ibraz etmek (kanıt)",
    cat: "Edebiyat",
    sub: "Fiiller",
  },
  {
    de: "in Worte fassen",
    tr: "Kelimelere dökmek",
    cat: "Edebiyat",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: LITERATUR - Sıfatlar/Kalıplar
  { de: "chronologisch", tr: "Kronolojik", cat: "Edebiyat", sub: "Sıfatlar" },
  {
    de: "detailreich",
    tr: "Detaylı, ayrıntısı bol",
    cat: "Edebiyat",
    sub: "Sıfatlar",
  },
  { de: "faszinierend", tr: "Büyüleyici", cat: "Edebiyat", sub: "Sıfatlar" },
  {
    de: "glaubwürdig",
    tr: "İnanılır, güvenilir",
    cat: "Edebiyat",
    sub: "Sıfatlar",
  },
  {
    de: "unglaubwürdig",
    tr: "İnanılmaz, güvenilmez",
    cat: "Edebiyat",
    sub: "Sıfatlar",
  },
  {
    de: "hervorragend",
    tr: "Mükemmel, fevkalade",
    cat: "Edebiyat",
    sub: "Sıfatlar",
  },
  {
    de: "langatmig",
    tr: "Uzun uzadıya, sıkıcı",
    cat: "Edebiyat",
    sub: "Sıfatlar",
  },
  { de: "literarisch", tr: "Edebi", cat: "Edebiyat", sub: "Sıfatlar" },
  {
    de: "meisterhaft",
    tr: "Ustaca, usta işi",
    cat: "Edebiyat",
    sub: "Sıfatlar",
  },
  { de: "vorhersehbar", tr: "Öngörülebilir", cat: "Edebiyat", sub: "Sıfatlar" },
  {
    de: "aus der Sicht",
    tr: "Bakış açısından / Gözünden",
    cat: "Edebiyat",
    sub: "Kalıplar",
  },

  // 3. KUTU: KİTAP KONUSU
  {
    de: "In dem Buch geht es um",
    tr: "Kitap ... hakkındadır / anlatılıyor",
    cat: "Kalıplar",
    sub: "Kitap Tanıtımı",
  },
  {
    de: "Das Buch handelt von",
    tr: "Kitap ... konusunu işliyor",
    cat: "Kalıplar",
    sub: "Kitap Tanıtımı",
  },
  {
    de: "Das Buch spielt in",
    tr: "Kitap ...-da geçiyor",
    cat: "Kalıplar",
    sub: "Kitap Tanıtımı",
  },
];

const B5 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Art & Literature Theme */}
      <header className="bg-gradient-to-r from-violet-900 via-fuchsia-900 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Palette className="text-amber-400 w-8 h-8" />
              <span>
                Kunst, Musik <span className="text-fuchsia-300">&</span>{" "}
                Literatur
              </span>
            </h1>
            <p className="text-violet-200 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Feather size={14} className="text-fuchsia-200" /> Sanat, Müzik ve
              Edebiyat Terimleri
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
                  ? "bg-white text-fuchsia-800 shadow-lg"
                  : "text-fuchsia-100 hover:bg-white/10"
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
                      ? "bg-violet-800 text-white border-violet-800 shadow-md shadow-violet-200"
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
          <Book className="text-fuchsia-600" /> Kelime Kartları
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
      case "Sanat & Müzik":
        return "bg-violet-50 text-violet-700 border-violet-200";
      case "Edebiyat":
        return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
      case "Kalıplar":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Sanat & Müzik")
      return <Music size={20} className="text-white" />;
    if (cat === "Edebiyat") return <Feather size={20} className="text-white" />;
    return <Sparkles size={20} className="text-white" />;
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-fuchsia-300">
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
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-violet-700 to-fuchsia-800 text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner">
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
                className="flex items-center gap-2 bg-violet-800 text-white px-8 py-4 rounded-xl hover:bg-violet-900 active:scale-95 transition-all shadow-lg shadow-violet-400 font-bold text-lg"
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

export default B5;
