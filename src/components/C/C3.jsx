import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  MessageCircle,
  Wifi,
  Users,
  Mic,
  Layers,
  Zap,
} from "lucide-react";

// --- YENİ VERİ SETİ (Kommunikation & Medien) ---
const rawData = [
  // 1. BÖLÜM: KOMMUNIKATION - Sıfatlar
  {
    de: "geheimniskrämerisch",
    tr: "Gizemli davranan, sır saklayan",
    cat: "İletişim",
    sub: "Sıfatlar",
  },
  {
    de: "geschwätzig",
    tr: "Gevezelik eden, boşboğaz",
    cat: "İletişim",
    sub: "Sıfatlar",
  },
  { de: "gesprächig", tr: "Konuşkan", cat: "İletişim", sub: "Sıfatlar" },
  {
    de: "mitteilsam",
    tr: "Bildirmeyi seven, açık sözlü",
    cat: "İletişim",
    sub: "Sıfatlar",
  },
  {
    de: "mitteilungsbedürftig",
    tr: "Konuşma/Anlatma ihtiyacı duyan",
    cat: "İletişim",
    sub: "Sıfatlar",
  },
  {
    de: "redselig",
    tr: "Çok konuşan, çenesi düşük",
    cat: "İletişim",
    sub: "Sıfatlar",
  },
  { de: "schlagfertig", tr: "Hazırcevap", cat: "İletişim", sub: "Sıfatlar" },
  { de: "schweigsam", tr: "Suskun, sessiz", cat: "İletişim", sub: "Sıfatlar" },
  {
    de: "verschwiegen",
    tr: "Ağzı sıkı (sır tutan)",
    cat: "İletişim",
    sub: "Sıfatlar",
  },
  {
    de: "in sich gekehrt",
    tr: "İçine kapanık",
    cat: "İletişim",
    sub: "Sıfatlar",
  },

  // 1. BÖLÜM: KOMMUNIKATION - Fiiller
  {
    de: "bejahen",
    tr: "Onaylamak, 'evet' demek",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "beknien",
    tr: "Yalvarmak, ısrar etmek",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "belächeln",
    tr: "Küçümseyerek gülmek / Hafife almak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "belauschen",
    tr: "(Gizlice) Dinlemek, kulak misafiri olmak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "beschimpfen",
    tr: "Azarlamak, küfretmek, sövmek",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "bestreiten",
    tr: "İnkar etmek / (Masrafı) Karşılamak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "beteuern",
    tr: "(Israrla) Temin etmek, valla billa demek",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "bezeugen",
    tr: "Tanıklık etmek, doğrulamak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  { de: "bezweifeln", tr: "Şüphe etmek", cat: "İletişim", sub: "Fiiller" },
  {
    de: "johlen",
    tr: "Yuhalamak / Naralar atmak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "kreischen",
    tr: "Çığlık atmak (tiz), ciyaklamak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "lallen",
    tr: "Peltek konuşmak (sarhoş/bebek)",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "lästern (über)",
    tr: "Arkasından konuşmak, dedikodu yapmak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "meckern (über)",
    tr: "Mızmızlanmak, söylenmek",
    cat: "İletişim",
    sub: "Fiiller",
  },
  { de: "murmeln", tr: "Mırıldanmak", cat: "İletişim", sub: "Fiiller" },
  {
    de: "nörgeln (an)",
    tr: "Kusur bulmak, mızmızlanmak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "quatschen",
    tr: "Gevezelik etmek, çene çalmak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  {
    de: "schwatzen",
    tr: "Sohbet etmek, laflamak",
    cat: "İletişim",
    sub: "Fiiller",
  },
  { de: "stottern", tr: "Kekelemek", cat: "İletişim", sub: "Fiiller" },
  { de: "tratschen", tr: "Dedikodu yapmak", cat: "İletişim", sub: "Fiiller" },
  {
    de: "tuscheln",
    tr: "Fısır fısır konuşmak, fısıldaşmak",
    cat: "İletişim",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: KOMMUNIKATION - İfadeler
  {
    de: "ein Gedicht vortragen",
    tr: "Şiir okumak (ezbere/toplulukta)",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "in ein Gespräch verwickeln",
    tr: "Sohbete sarmak/çekmek",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "eine Erklärung abgeben",
    tr: "Açıklama yapmak",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "ein Geheimnis lüften",
    tr: "Bir sırrı açığa çıkarmak",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "ein Geständnis ablegen",
    tr: "İtirafta bulunmak",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "eine Nachricht überbringen",
    tr: "Bir haber iletmek",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "einen Einwand vorbringen",
    tr: "İtirazda bulunmak",
    cat: "İletişim",
    sub: "İfadeler",
  },
  {
    de: "Fragen aufwerfen",
    tr: "Sorular ortaya atmak / yol açmak",
    cat: "İletişim",
    sub: "İfadeler",
  },

  // 1. BÖLÜM: KOMMUNIKATION - Deyimler
  {
    de: "auf den Arm nehmen",
    tr: "İşletmek, dalga geçmek",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "den Faden verlieren",
    tr: "Konunun ucunu kaçırmak",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "Haare auf den Zähnen haben",
    tr: "Dişli/Sert mizaçlı olmak",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "die Katze aus dem Sack lassen",
    tr: "Baklayı ağzından çıkarmak",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "einen Korb bekommen",
    tr: "Reddedilmek (aşk/teklif)",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "vor den Kopf stoßen",
    tr: "Kırmak, gücendirmek",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "nicht auf den Mund gefallen sein",
    tr: "Ağzı laf yapmak, hazırcevap olmak",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "den Mund voll nehmen",
    tr: "Büyük konuşmak, atıp tutmak",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "die Ohren spitzen",
    tr: "Kulak kabartmak",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "schmutzige Wäsche waschen",
    tr: "Kirli çamaşırları ortaya dökmek",
    cat: "İletişim",
    sub: "Deyimler",
  },
  {
    de: "auf den Schlips treten",
    tr: "Damarına basmak, fena kırmak",
    cat: "İletişim",
    sub: "Deyimler",
  },

  // 2. BÖLÜM: MEDYA - İsimler
  { de: "der Algorithmus", tr: "Algoritma", cat: "Medya", sub: "İsimler" },
  {
    de: "die Auszeit",
    tr: "Mola, ara (dijital detoks)",
    cat: "Medya",
    sub: "İsimler",
  },
  {
    de: "das Belohnungssystem",
    tr: "Ödül sistemi",
    cat: "Medya",
    sub: "İsimler",
  },
  { de: "der Diskurs", tr: "Söylem, tartışma", cat: "Medya", sub: "İsimler" },
  { de: "die Entgiftung", tr: "Detoks, arınma", cat: "Medya", sub: "İsimler" },
  {
    de: "die Fragmentierung",
    tr: "Parçalanma, bölünme",
    cat: "Medya",
    sub: "İsimler",
  },
  { de: "die Polarisierung", tr: "Kutuplaşma", cat: "Medya", sub: "İsimler" },
  { de: "die Prognose", tr: "Tahmin, öngörü", cat: "Medya", sub: "İsimler" },
  { de: "das soziale Netzwerk", tr: "Sosyal ağ", cat: "Medya", sub: "İsimler" },
  {
    de: "der Streamingdienst",
    tr: "Yayın platformu (Netflix vb.)",
    cat: "Medya",
    sub: "İsimler",
  },
  { de: "der Suchbegriff", tr: "Arama terimi", cat: "Medya", sub: "İsimler" },
  {
    de: "das Suchtpotenzial",
    tr: "Bağımlılık potansiyeli",
    cat: "Medya",
    sub: "İsimler",
  },

  // 2. BÖLÜM: MEDYA - Sıfatlar/Fiiller
  {
    de: "gesamtgesellschaftlich",
    tr: "Toplumsal (genel)",
    cat: "Medya",
    sub: "Sıfatlar",
  },
  {
    de: "gleichgesinnt",
    tr: "Hemfikir, kafa dengi",
    cat: "Medya",
    sub: "Sıfatlar",
  },
  { de: "selektiv", tr: "Seçici", cat: "Medya", sub: "Sıfatlar" },
  { de: "ab|leiten", tr: "Türetmek / Çıkarmak", cat: "Medya", sub: "Fiiller" },
  {
    de: "ab|weichen von",
    tr: "Sapmak, ayrılmak (standarttan)",
    cat: "Medya",
    sub: "Fiiller",
  },
  {
    de: "aus|blenden",
    tr: "Gizlemek, görmezden gelmek",
    cat: "Medya",
    sub: "Fiiller",
  },
  { de: "sich aus|loggen", tr: "Çıkış yapmak", cat: "Medya", sub: "Fiiller" },
  {
    de: "bestehen in",
    tr: "...-den ibaret olmak",
    cat: "Medya",
    sub: "Fiiller",
  },
  {
    de: "checken",
    tr: "Kontrol etmek (Mails vb.)",
    cat: "Medya",
    sub: "Fiiller",
  },
  { de: "designen", tr: "Tasarlamak", cat: "Medya", sub: "Fiiller" },
  { de: "sich ein|loggen", tr: "Giriş yapmak", cat: "Medya", sub: "Fiiller" },
  { de: "filtern", tr: "Filtrelemek", cat: "Medya", sub: "Fiiller" },
  { de: "generieren", tr: "Oluşturmak, üretmek", cat: "Medya", sub: "Fiiller" },
  {
    de: "konfrontieren mit",
    tr: "Yüzleşmek, yüzleştirmek",
    cat: "Medya",
    sub: "Fiiller",
  },
  {
    de: "resultieren aus",
    tr: "...-den kaynaklanmak",
    cat: "Medya",
    sub: "Fiiller",
  },
  {
    de: "sich verlagern",
    tr: "Yer değiştirmek, kaymak",
    cat: "Medya",
    sub: "Fiiller",
  },
  {
    de: "aus der Hand legen",
    tr: "Elinden bırakmak",
    cat: "Medya",
    sub: "Fiiller",
  },
  {
    de: "wahrnehmen",
    tr: "Algılamak, farkına varmak",
    cat: "Medya",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: MEDYA - İletişim (Kontakte)
  {
    de: "Kontakt vermitteln",
    tr: "Bağlantı sağlamak",
    cat: "Medya",
    sub: "İletişim",
  },
  {
    de: "Kontakt knüpfen",
    tr: "Bağlantı kurmak (yeni)",
    cat: "Medya",
    sub: "İletişim",
  },
  {
    de: "Kontakt pflegen",
    tr: "İletişimi sürdürmek/korumak",
    cat: "Medya",
    sub: "İletişim",
  },
  {
    de: "Kontakt abbrechen",
    tr: "İletişimi kesmek/bitirmek",
    cat: "Medya",
    sub: "İletişim",
  },
  {
    de: "Kontakt suchen",
    tr: "İletişim aramak",
    cat: "Medya",
    sub: "İletişim",
  },
  {
    de: "Kontakt verlieren",
    tr: "İletişimi kaybetmek/kopmak",
    cat: "Medya",
    sub: "İletişim",
  },
  {
    de: "Kontakt aufnehmen",
    tr: "İletişime geçmek",
    cat: "Medya",
    sub: "İletişim",
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Communication & Media Theme */}
      <header className="bg-gradient-to-r from-indigo-900 via-cyan-900 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <MessageCircle className="text-cyan-400 w-8 h-8" />
              <span>
                Kommunikation <span className="text-indigo-300">&</span> Medien
              </span>
            </h1>
            <p className="text-indigo-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Wifi size={14} className="text-cyan-200" /> İletişim, Medya ve
              Dijital Dünya Terimleri
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
                  ? "bg-white text-cyan-800 shadow-lg"
                  : "text-cyan-200 hover:bg-white/10"
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
          <Mic className="text-indigo-600" /> Kelime Kartları
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
      case "İletişim":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Medya":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "İletişim")
      return <MessageCircle size={20} className="text-white" />;
    if (cat === "Medya") return <Wifi size={20} className="text-white" />;
    return <Zap size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "İletişim")
      return "bg-gradient-to-br from-indigo-600 to-purple-700";
    if (cat === "Medya") return "bg-gradient-to-br from-cyan-600 to-blue-700";
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

export default AlmancaApp;
