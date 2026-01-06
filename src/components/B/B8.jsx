import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Heart,
  Activity,
  Stethoscope,
  Thermometer,
  Zap,
  Layers,
  Cross,
} from "lucide-react";

// --- YENİ VERİ SETİ (Gesundheit & Medizin) ---
const rawData = [
  // 1. BÖLÜM: SAĞLIK SORUNLARI - İsimler
  {
    de: "der Anfall",
    tr: "Nöbet, kriz",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "die Atmung",
    tr: "Solunum, nefes alıp verme",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "der Ausschlag",
    tr: "Cilt döküntüsü, kızarıklık",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "die Behinderung",
    tr: "Engel, özürlülük",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "die Blase (Harnblase)",
    tr: "İdrar kesesi, mesane",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  { de: "der Darm", tr: "Bağırsak", cat: "Sağlık Sorunları", sub: "İsimler" },
  {
    de: "der Daumen",
    tr: "Başparmak",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  { de: "der Durchfall", tr: "İshal", cat: "Sağlık Sorunları", sub: "İsimler" },
  {
    de: "die Entzündung (Lungen-)",
    tr: "İltihap, yangı (Zatürre)",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "die Epilepsie",
    tr: "Epilepsi, sara hastalığı",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "der Giftstoff",
    tr: "Zehirli madde, toksin",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  {
    de: "die Infektion (Pilz-)",
    tr: "Enfeksiyon (Mantar)",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  { de: "die Leber", tr: "Karaciğer", cat: "Sağlık Sorunları", sub: "İsimler" },
  { de: "die Lunge", tr: "Akciğer", cat: "Sağlık Sorunları", sub: "İsimler" },
  { de: "die Niere", tr: "Böbrek", cat: "Sağlık Sorunları", sub: "İsimler" },
  { de: "der Pilz", tr: "Mantar", cat: "Sağlık Sorunları", sub: "İsimler" },
  {
    de: "der Schwindel",
    tr: "Baş dönmesi",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  { de: "die Substanz", tr: "Madde", cat: "Sağlık Sorunları", sub: "İsimler" },
  {
    de: "das Symptom",
    tr: "Belirti, semptom",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },
  { de: "der Urin", tr: "İdrar", cat: "Sağlık Sorunları", sub: "İsimler" },
  {
    de: "die Verdauung",
    tr: "Sindirim",
    cat: "Sağlık Sorunları",
    sub: "İsimler",
  },

  // 1. BÖLÜM: SAĞLIK SORUNLARI - Fiiller
  {
    de: "aus|scheiden",
    tr: "Vücuttan atmak, boşaltmak",
    cat: "Sağlık Sorunları",
    sub: "Fiiller",
  },
  {
    de: "entgiften",
    tr: "Toksinlerden arındırmak",
    cat: "Sağlık Sorunları",
    sub: "Fiiller",
  },
  {
    de: "sich erbrechen",
    tr: "Kusmak",
    cat: "Sağlık Sorunları",
    sub: "Fiiller",
  },
  {
    de: "gelangen in",
    tr: "Ulaşmak, girmek (vücuda)",
    cat: "Sağlık Sorunları",
    sub: "Fiiller",
  },
  { de: "jucken", tr: "Kaşınmak", cat: "Sağlık Sorunları", sub: "Fiiller" },
  {
    de: "zu sich nehmen",
    tr: "Yemek, içmek, almak (gıda/ilaç)",
    cat: "Sağlık Sorunları",
    sub: "Fiiller",
  },
  { de: "schlucken", tr: "Yutmak", cat: "Sağlık Sorunları", sub: "Fiiller" },

  // 1. BÖLÜM: SAĞLIK SORUNLARI - Sıfatlar
  {
    de: "akut",
    tr: "Akut, ani gelişen",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "ansprechbar",
    tr: "Kendinde, tepki verebilen",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "ansteckend",
    tr: "Bulaşıcı",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "bewusstlos",
    tr: "Bilinci kapalı, baygın",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "chronisch",
    tr: "Kronik, süregelen",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "entzündet",
    tr: "İltihaplı",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  { de: "fieberhaft", tr: "Ateşli", cat: "Sağlık Sorunları", sub: "Sıfatlar" },
  {
    de: "geistig",
    tr: "Zihinsel, akli",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "lebensgefährlich",
    tr: "Hayati tehlike taşıyan",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  { de: "nervlich", tr: "Sinirsel", cat: "Sağlık Sorunları", sub: "Sıfatlar" },
  {
    de: "neurologisch",
    tr: "Nörolojik",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "nüchtern",
    tr: "Aç karnına / Ayık",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "schmerzhaft",
    tr: "Ağrılı, acı veren",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "spezifisch",
    tr: "Özgü, spesifik",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "mir ist übel",
    tr: "Midem bulanıyor",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  {
    de: "übertragbar",
    tr: "Bulaşıcı, aktarılabilir",
    cat: "Sağlık Sorunları",
    sub: "Sıfatlar",
  },
  { de: "verwundet", tr: "Yaralı", cat: "Sağlık Sorunları", sub: "Sıfatlar" },

  // KUTU: AĞRI TARİFİ
  { de: "bohrend", tr: "Oyucu (ağrı)", cat: "Ağrı Tarifi", sub: "Sıfatlar" },
  { de: "brennend", tr: "Yanıcı (ağrı)", cat: "Ağrı Tarifi", sub: "Sıfatlar" },
  {
    de: "drückend",
    tr: "Baskılayıcı, sıkıştırıcı (ağrı)",
    cat: "Ağrı Tarifi",
    sub: "Sıfatlar",
  },
  {
    de: "pochend",
    tr: "Zonklayıcı (ağrı)",
    cat: "Ağrı Tarifi",
    sub: "Sıfatlar",
  },
  {
    de: "stechend",
    tr: "Batıcı, saplanıcı (ağrı)",
    cat: "Ağrı Tarifi",
    sub: "Sıfatlar",
  },

  // 2. BÖLÜM: MUAYENE VE TEDAVİLER - İsimler
  {
    de: "das Bakterium",
    tr: "Bakteri",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Blutdruck",
    tr: "Tansiyon, kan basıncı",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Blutwert",
    tr: "Kan değeri",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Blutzucker",
    tr: "Kan şekeri",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Bruch (Knochen-)",
    tr: "Kırık (Kemik)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Chirurg / die Chirurgin",
    tr: "Cerrah",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "das Desinfektionsmittel",
    tr: "Dezenfektan",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Einstichstelle",
    tr: "İğne giriş yeri",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der blaue Fleck",
    tr: "Morluk, çürük",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Hebamme",
    tr: "Ebe / Doğum uzmanı",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Kanüle",
    tr: "Kanül (damar yolu iğnesi)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Kittel",
    tr: "Önlük (doktor önlüğü)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "das MRT (Magnetresonanztomogramm)",
    tr: "Emar (MRG)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "das Pflegepersonal",
    tr: "Bakım personeli, hemşireler",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Physiotherapeut",
    tr: "Fizyoterapist",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Probe (Blut/Stuhl/Urin)",
    tr: "Örnek/Numune (Kan/Dışkı/İdrar)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Psychologe",
    tr: "Psikolog",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  { de: "der Puls", tr: "Nabız", cat: "Muayene & Tedavi", sub: "İsimler" },
  {
    de: "die Röntgenaufnahme",
    tr: "Röntgen filmi",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Schiene",
    tr: "Atel (kırık sabitleyici)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Seelsorger",
    tr: "Manevi rehber (hastane)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Sehne",
    tr: "Kiriş, tendon",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Stationsleiter",
    tr: "Servis şefi / Başhemşire",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "der Tupfer",
    tr: "Tampon (pamuk/gazlı bez)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "das Ultraschallbild",
    tr: "Ultrason görüntüsü",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Vene",
    tr: "Toplardamar",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },
  {
    de: "die Visite",
    tr: "Vizite (doktor ziyareti)",
    cat: "Muayene & Tedavi",
    sub: "İsimler",
  },

  // 2. BÖLÜM: MUAYENE VE TEDAVİLER - Fiiller/Sıfatlar
  {
    de: "ab|geben (eine Probe)",
    tr: "(Numune) Vermek",
    cat: "Muayene & Tedavi",
    sub: "Fiiller",
  },
  {
    de: "an|legen (Schiene/Verband)",
    tr: "Takmak, sarmak (atel/sargı)",
    cat: "Muayene & Tedavi",
    sub: "Fiiller",
  },
  {
    de: "desinfizieren",
    tr: "Dezenfekte etmek",
    cat: "Muayene & Tedavi",
    sub: "Fiiller",
  },
  {
    de: "infizieren",
    tr: "Enfekte etmek, bulaştırmak",
    cat: "Muayene & Tedavi",
    sub: "Fiiller",
  },
  {
    de: "versorgen",
    tr: "Bakımını yapmak, tedavi etmek",
    cat: "Muayene & Tedavi",
    sub: "Fiiller",
  },
  { de: "nackt", tr: "Çıplak", cat: "Muayene & Tedavi", sub: "Sıfatlar" },
  {
    de: "psychologisch",
    tr: "Psikolojik",
    cat: "Muayene & Tedavi",
    sub: "Sıfatlar",
  },
];

const B8 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header - Medical Theme (Emerald & Rose) */}
      <header className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Activity className="text-rose-400 w-8 h-8" />
              <span>
                Gesundheit <span className="text-emerald-300">&</span> Medizin
              </span>
            </h1>
            <p className="text-emerald-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Stethoscope size={14} className="text-teal-200" /> Sağlık,
              Muayene ve Tedavi Terimleri
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
                  ? "bg-white text-rose-800 shadow-lg"
                  : "text-rose-200 hover:bg-white/10"
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
          <Heart className="text-rose-600" /> Kelime Kartları
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
      case "Sağlık Sorunları":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Muayene & Tedavi":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Ağrı Tarifi":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Sağlık Sorunları")
      return <Activity size={20} className="text-white" />;
    if (cat === "Muayene & Tedavi")
      return <Stethoscope size={20} className="text-white" />;
    if (cat === "Ağrı Tarifi") return <Zap size={20} className="text-white" />;
    return <Thermometer size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Sağlık Sorunları")
      return "bg-gradient-to-br from-rose-700 to-pink-800";
    if (cat === "Ağrı Tarifi")
      return "bg-gradient-to-br from-amber-600 to-orange-700";
    return "bg-gradient-to-br from-emerald-700 to-teal-800";
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

export default B8;
