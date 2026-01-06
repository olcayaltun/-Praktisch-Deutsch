import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Tractor,
  Sprout,
  Utensils,
  Wheat,
  Layers,
  Leaf,
  Milk,
} from "lucide-react";

// --- YENİ VERİ SETİ (Landwirtschaft & Ernährung) ---
const rawData = [
  // 1. BÖLÜM: LANDWIRTSCHAFT (TARIM) - İsimler
  {
    de: "der Acker",
    tr: "Tarla, sürülmüş arazi",
    cat: "Tarım",
    sub: "İsimler",
  },
  {
    de: "der Ackerbau",
    tr: "Tarla tarımı, ziraat",
    cat: "Tarım",
    sub: "İsimler",
  },
  {
    de: "die Agrarwirtschaft",
    tr: "Tarım ekonomisi",
    cat: "Tarım",
    sub: "İsimler",
  },
  {
    de: "die Artenvielfalt",
    tr: "Tür çeşitliliği, biyoçeşitlilik",
    cat: "Tarım",
    sub: "İsimler",
  },
  { de: "das Düngemittel", tr: "Gübre", cat: "Tarım", sub: "İsimler" },
  { de: "das Fischmehl", tr: "Balık unu", cat: "Tarım", sub: "İsimler" },
  {
    de: "die Freilandhaltung",
    tr: "Açık alanda hayvancılık",
    cat: "Tarım",
    sub: "İsimler",
  },
  { de: "das Futtermittel", tr: "Yem", cat: "Tarım", sub: "İsimler" },
  { de: "die Gülle", tr: "Sıvı gübre", cat: "Tarım", sub: "İsimler" },
  {
    de: "das Habitat",
    tr: "Habitat, doğal yaşam alanı",
    cat: "Tarım",
    sub: "İsimler",
  },
  { de: "der Hektar", tr: "Hektar", cat: "Tarım", sub: "İsimler" },
  { de: "der Lebensraum", tr: "Yaşam alanı", cat: "Tarım", sub: "İsimler" },
  {
    de: "die Monokultur",
    tr: "Tek tip ürün yetiştirme",
    cat: "Tarım",
    sub: "İsimler",
  },
  { de: "das Nutztier", tr: "Çiftlik hayvanı", cat: "Tarım", sub: "İsimler" },
  {
    de: "das Pflanzenschutzmittel",
    tr: "Zirai ilaç",
    cat: "Tarım",
    sub: "İsimler",
  },
  {
    de: "der Schössling",
    tr: "Filiz, sürgün, fidan",
    cat: "Tarım",
    sub: "İsimler",
  },
  { de: "das Unkraut", tr: "Yabani ot", cat: "Tarım", sub: "İsimler" },
  { de: "die Vermehrung", tr: "Çoğalma, üreme", cat: "Tarım", sub: "İsimler" },
  {
    de: "die Viehzucht",
    tr: "Hayvancılık, besicilik",
    cat: "Tarım",
    sub: "İsimler",
  },
  { de: "die Weide", tr: "Otlak, mera", cat: "Tarım", sub: "İsimler" },
  {
    de: "der Weiher",
    tr: "Gölet, küçük balık havuzu",
    cat: "Tarım",
    sub: "İsimler",
  },

  // 1. BÖLÜM: TARIM - Gruplamalar & Makineler
  {
    de: "forstwirtschaftlich",
    tr: "Ormancılıkla ilgili",
    cat: "Tarım",
    sub: "Terimler",
  },
  { de: "landwirtschaftlich", tr: "Tarımsal", cat: "Tarım", sub: "Terimler" },
  {
    de: "die Herde",
    tr: "Sürü (Sığır, Koyun, Keçi)",
    cat: "Tarım",
    sub: "Gruplar",
  },
  { de: "das Rudel", tr: "Sürü (Geyik, Kurt)", cat: "Tarım", sub: "Gruplar" },
  {
    de: "der Schwarm",
    tr: "Sürü (Balık, Kuş, Böcek)",
    cat: "Tarım",
    sub: "Gruplar",
  },
  {
    de: "die Melkmaschine",
    tr: "Sağım makinesi",
    cat: "Tarım",
    sub: "Makineler",
  },
  { de: "der Mähdrescher", tr: "Biçerdöver", cat: "Tarım", sub: "Makineler" },
  {
    de: "die Feldspritze",
    tr: "Tarla ilaçlama makinesi",
    cat: "Tarım",
    sub: "Makineler",
  },
  { de: "die Güllepumpe", tr: "Gübre pompası", cat: "Tarım", sub: "Makineler" },
  {
    de: "die Pflanzmaschine",
    tr: "Dikim makinesi",
    cat: "Tarım",
    sub: "Makineler",
  },
  {
    de: "der Viehtransporter",
    tr: "Hayvan nakil aracı",
    cat: "Tarım",
    sub: "Makineler",
  },

  // 1. BÖLÜM: TARIM - Fiiller & Sesler
  {
    de: "dreschen",
    tr: "(Tahıl) Dövmek, harmanlamak",
    cat: "Tarım",
    sub: "Fiiller",
  },
  { de: "mahlen", tr: "Öğütmek", cat: "Tarım", sub: "Fiiller" },
  { de: "melken", tr: "Sağmak", cat: "Tarım", sub: "Fiiller" },
  { de: "pflügen", tr: "Sürmek (Tarla)", cat: "Tarım", sub: "Fiiller" },
  { de: "bellen", tr: "Havlamak", cat: "Tarım", sub: "Hayvan Sesleri" },
  { de: "blöken", tr: "Melemek (Koyun)", cat: "Tarım", sub: "Hayvan Sesleri" },
  { de: "gackern", tr: "Gıdaklamak", cat: "Tarım", sub: "Hayvan Sesleri" },
  {
    de: "grunzen",
    tr: "Hırıldamak (Domuz)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "gurren",
    tr: "Dem çekmek / Kumru gibi ötmek",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "kläffen",
    tr: "Havlamak (sürekli ve tiz)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "quaken",
    tr: "Vraklamak (Ördek/Kurbağa)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "quieken",
    tr: "Viyaklamak (Domuz/Fare)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "schnattern",
    tr: "Vakvaklamak (Ördek/Kaz)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "summen",
    tr: "Vızıldamak (Böcek)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },
  {
    de: "zwitschern",
    tr: "Cıvıldamak (Kuş)",
    cat: "Tarım",
    sub: "Hayvan Sesleri",
  },

  // 2. BÖLÜM: BESLENME (ERNÄHRUNG) - Vücut & Çevre
  { de: "das Bindegewebe", tr: "Bağ doku", cat: "Beslenme", sub: "Vücut" },
  { de: "der Darm", tr: "Bağırsak", cat: "Beslenme", sub: "Vücut" },
  { de: "das Mikrobiom", tr: "Mikrobiyom", cat: "Beslenme", sub: "Vücut" },
  { de: "der Stoffwechsel", tr: "Metabolizma", cat: "Beslenme", sub: "Vücut" },
  {
    de: "das Verdauungssystem",
    tr: "Sindirim sistemi",
    cat: "Beslenme",
    sub: "Vücut",
  },
  {
    de: "die Ernährungsumstellung",
    tr: "Beslenme değişikliği",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "der Flächenverbrauch",
    tr: "Arazi kullanımı/tüketimi",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "die Massentierhaltung",
    tr: "Endüstriyel hayvancılık",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "die Lebenserwartung",
    tr: "Yaşam beklentisi",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "der Schlachthof",
    tr: "Mezbaha",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "das Tierwohl",
    tr: "Hayvan refahı",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "das Treibhausgas",
    tr: "Sera gazı",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "die Verteilungsgerechtigkeit",
    tr: "Paylaşım adaleti",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },
  {
    de: "die Weidefläche",
    tr: "Mera alanı",
    cat: "Beslenme",
    sub: "Çevre/Üretim",
  },

  // 2. BÖLÜM: BESLENME - Yiyecekler
  {
    de: "die rote Bete",
    tr: "Kırmızı pancar",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  { de: "der Chicorée", tr: "Hindiba", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "der Dill", tr: "Dereotu", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "der Fenchel", tr: "Rezene", cat: "Beslenme", sub: "Yiyecekler" },
  {
    de: "das Geflügel",
    tr: "Kümes hayvanları",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  { de: "die Gelatine", tr: "Jelatin", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "die Gerste", tr: "Arpa", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "der Hafer", tr: "Yulaf", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "der Kardamom", tr: "Kakule", cat: "Beslenme", sub: "Yiyecekler" },
  {
    de: "der Kürbis",
    tr: "Kabak / Balkabağı",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  {
    de: "der Krapfen",
    tr: "Alman çöreği (Berliner)",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  { de: "der Kreuzkümmel", tr: "Kimyon", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "die Nelke", tr: "Karanfil", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "die Pute", tr: "Hindi", cat: "Beslenme", sub: "Yiyecekler" },
  { de: "der Roggen", tr: "Çavdar", cat: "Beslenme", sub: "Yiyecekler" },
  {
    de: "der Rosenkohl",
    tr: "Brüksel lahanası",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  {
    de: "der Spekulatius",
    tr: "Baharatlı noel kurabiyesi",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  {
    de: "der Tortenguss",
    tr: "Tart jölesi",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  {
    de: "das Vanillekipferl",
    tr: "Vanilyalı ay çöreği",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },
  { de: "der Weizen", tr: "Buğday", cat: "Beslenme", sub: "Yiyecekler" },
  {
    de: "der Zimtstern",
    tr: "Tarçınlı yıldız kurabiye",
    cat: "Beslenme",
    sub: "Yiyecekler",
  },

  // 2. BÖLÜM: BESLENME - Sıfatlar & Fiiller
  {
    de: "empfindungsfähig",
    tr: "Duyarlı, hissetme yeteneği olan",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
  },
  {
    de: "erwiesenermaßen",
    tr: "Kanıtlandığı üzere",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
  },
  { de: "trübe", tr: "Bulanık", cat: "Beslenme", sub: "Sıfat/Fiil" },
  {
    de: "verdaulich",
    tr: "Sindirilebilir",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
  },
  {
    de: "an|dicken",
    tr: "Koyulaştırmak (yemek/sos)",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
  },
  {
    de: "erschließen",
    tr: "Yararlanmak, işletmeye açmak",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
  },
  {
    de: "klären",
    tr: "Berraklaştırmak (şarap vb.)",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
  },
  { de: "sättigen", tr: "Doyurmak", cat: "Beslenme", sub: "Sıfat/Fiil" },
  {
    de: "verwerten",
    tr: "Değerlendirmek, faydalanmak",
    cat: "Beslenme",
    sub: "Sıfat/Fiil",
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
    <div className="min-h-screen bg-emerald-50 font-sans text-slate-800">
      {/* Header - Agriculture & Nutrition Theme */}
      <header className="bg-gradient-to-r from-emerald-800 via-lime-900 to-amber-800 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Tractor className="text-lime-400 w-8 h-8" />
              <span>
                Landwirtschaft <span className="text-amber-300">&</span>{" "}
                Ernährung
              </span>
            </h1>
            <p className="text-emerald-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Wheat size={14} className="text-amber-200" /> Tarım, Doğa ve
              Beslenme Terimleri
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-white text-emerald-900 shadow-lg"
                  : "text-emerald-100 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-white text-amber-800 shadow-lg"
                  : "text-amber-200 hover:bg-white/10"
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
          <Layers size={20} className="text-emerald-700 min-w-fit" />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border
                  ${
                    selectedCategory === cat
                      ? "bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-800"
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
          <Sprout className="text-emerald-600" /> Kelime Kartları
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
      case "Tarım":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Beslenme":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat, sub) => {
    if (cat === "Tarım" && sub === "Makineler")
      return <Tractor size={20} className="text-white" />;
    if (cat === "Tarım") return <Leaf size={20} className="text-white" />;
    if (cat === "Beslenme")
      return <Utensils size={20} className="text-white" />;
    return <Wheat size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Tarım")
      return "bg-gradient-to-br from-emerald-600 to-lime-700";
    if (cat === "Beslenme")
      return "bg-gradient-to-br from-amber-500 to-orange-600";
    return "bg-gradient-to-br from-slate-600 to-slate-700";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-emerald-300">
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
            {getIcon(item.cat, item.sub)}
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
              Bu kelimenin anlamı nedir?
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 font-serif tracking-tight">
              {currentQuestion.de}
            </h3>
          </div>

          {/* Şıklar */}
          <div className="grid gap-3 relative z-10">
            {options.map((opt, idx) => {
              let btnClass =
                "border-2 border-slate-100 bg-white hover:border-emerald-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-emerald-400 transition-colors"></div>
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
                className="flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl hover:bg-emerald-800 active:scale-95 transition-all shadow-lg shadow-emerald-400 font-bold text-lg"
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
