import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Gavel,
  Scale,
  FileText,
  ShieldAlert,
  Layers,
  Users,
} from "lucide-react";

// --- YENİ VERİ SETİ (Strafrecht & Zivilrecht) ---
const rawData = [
  // 1. BÖLÜM: STRAFRECHT (CEZA HUKUKU) - İsimler
  {
    de: "der Beweggrund",
    tr: "Saik, neden, güdü",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  { de: "das Delikt", tr: "Suç, cürüm", cat: "Ceza Hukuku", sub: "İsimler" },
  {
    de: "das Diebesgut",
    tr: "Çalıntı mal",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "der Einbruch",
    tr: "Hırsızlık amacıyla haneye girme",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Freiheitsberaubung",
    tr: "Kişiyi hürriyetinden yoksun kılma",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Habgier",
    tr: "Açgözlülük, tamah",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Heimtücke",
    tr: "Sinsilik, hainlik",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Hinterhältigkeit",
    tr: "Sinsilik, kalleşlik",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Körperverletzung",
    tr: "Yaralama",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Mordlust",
    tr: "Öldürme arzusu",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Nötigung",
    tr: "Zorlama, tehdit, cebir",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  { de: "der Raub", tr: "Gasp, yağma", cat: "Ceza Hukuku", sub: "İsimler" },
  {
    de: "der Tathergang",
    tr: "Olayın oluş şekli",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "der Totschlag",
    tr: "Kasten adam öldürme (plansız)",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die fahrlässige Tötung",
    tr: "Taksirle adam öldürme",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Untersuchungshaft",
    tr: "Tutukluluk (yargılama öncesi)",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  {
    de: "die Unversehrtheit",
    tr: "Dokunulmazlık, bütünlük",
    cat: "Ceza Hukuku",
    sub: "İsimler",
  },
  { de: "der Vorsatz", tr: "Kasıt, niyet", cat: "Ceza Hukuku", sub: "İsimler" },

  // 1. BÖLÜM: CEZA HUKUKU - Kişiler
  {
    de: "der/die Anwesende",
    tr: "Hazır bulunan",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },
  {
    de: "der/die Beschuldigte",
    tr: "Suçlanan, sanık",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },
  {
    de: "der/die Freigesprochene",
    tr: "Beraat eden",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },
  {
    de: "der/die Geschädigte",
    tr: "Mağdur, zarar gören",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },
  {
    de: "der/die Hinterbliebene",
    tr: "Geride kalan (yakını)",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },
  {
    de: "der/die Inhaftierte",
    tr: "Tutuklu/Hükümlü",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },
  {
    de: "der/die Verurteilte",
    tr: "Hükümlü, ceza almış kişi",
    cat: "Ceza Hukuku",
    sub: "Kişiler",
  },

  // 1. BÖLÜM: CEZA HUKUKU - Sıfatlar
  {
    de: "belastend",
    tr: "Suçlayıcı, aleyhte",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "geständig",
    tr: "İtirafçı, suçunu kabul eden",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "lebenslänglich",
    tr: "Müebbet, ömür boyu",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "schuldfähig",
    tr: "Cezai ehliyeti olan",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "verhandlungsfähig",
    tr: "Duruşmaya çıkabilir durumda",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "verwertbar",
    tr: "Değerlendirilebilir (delil)",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  { de: "vorbestraft", tr: "Sabıkalı", cat: "Ceza Hukuku", sub: "Sıfatlar" },
  {
    de: "vorsätzlich",
    tr: "Kasten, bilerek",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "widerrechtlich",
    tr: "Hukuka aykırı, yasa dışı",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },
  {
    de: "widersprüchlich",
    tr: "Çelişkili",
    cat: "Ceza Hukuku",
    sub: "Sıfatlar",
  },

  // 1. BÖLÜM: CEZA HUKUKU - Fiiller
  {
    de: "ab|zielen auf",
    tr: "Hedeflemek, amaçlamak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "an|rechnen",
    tr: "Hesaba katmak, saymak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "an|stiften zu",
    tr: "Azmettirmek, teşvik etmek",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  { de: "bestechen", tr: "Rüşvet vermek", cat: "Ceza Hukuku", sub: "Fiiller" },
  {
    de: "ein|räumen",
    tr: "(Suçu) Kabul etmek",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  { de: "ein|sperren", tr: "Hapsetmek", cat: "Ceza Hukuku", sub: "Fiiller" },
  {
    de: "entwenden",
    tr: "Çalmak, aşırmak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "erschleichen",
    tr: "Hileyle elde etmek",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "fälschen",
    tr: "Sahtesini yapmak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "hinterziehen",
    tr: "Kaçırmak (vergi vb.)",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "unterschlagen",
    tr: "Zimmetine geçirmek / Saklamak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "vereiteln",
    tr: "Engel olmak, boşa çıkarmak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "sich verstricken",
    tr: "Dolanmak, saplanmak (yalanlara)",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "veruntreuen",
    tr: "Emniyeti suistimal etmek",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },
  {
    de: "Geld waschen",
    tr: "Kara para aklamak",
    cat: "Ceza Hukuku",
    sub: "Fiiller",
  },

  // 2. BÖLÜM: ZIVILRECHT (MEDENİ HUKUK) - İsimler
  {
    de: "der Betriebsrat",
    tr: "İşçi temsilciliği",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "der Kündigungsschutz",
    tr: "İşten çıkarma koruması",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "die Mietminderung",
    tr: "Kira indirimi",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "der Mindestlohn",
    tr: "Asgari ücret",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "der Mutterschutz",
    tr: "Annelik koruması",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "die Ruhezeit",
    tr: "Dinlenme süresi",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "der Tariflohn",
    tr: "Toplu sözleşme ücreti",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "die Leiharbeitsfirma",
    tr: "Özel istihdam bürosu",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },
  {
    de: "die Stammbelegschaft",
    tr: "Daimi personel kadrosu",
    cat: "Medeni Hukuk",
    sub: "İsimler",
  },

  // 2. BÖLÜM: MEDENİ HUKUK - Fiiller & İfadeler
  {
    de: "angewiesen auf",
    tr: "Muhtaç/Bağımlı olmak",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "rechtswidrig",
    tr: "Hukuka aykırı",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "verankert in",
    tr: "Yer alan, sabitlenmiş (yasada)",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "an|fechten",
    tr: "İtiraz etmek, iptalini istemek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "an|zeigen",
    tr: "İhbar etmek, şikayet etmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "auf|setzen",
    tr: "Düzenlemek (resmi belge)",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "auf|kündigen",
    tr: "Feshetmek (sözleşme)",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "aus|handeln",
    tr: "Pazarlık etmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "bestehen (Schutz)",
    tr: "Mevcut olmak, var olmak",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "brechen",
    tr: "Çiğnemek, ihlal etmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "ein|halten",
    tr: "Uymak, riayet etmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "ein|räumen",
    tr: "Tanımak, vermek (hak)",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "erfolgen",
    tr: "Gerçekleşmek, vuku bulmak",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "erheben",
    tr: "Açmak, öne sürmek (dava)",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "gewährleisten",
    tr: "Garanti etmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "geltend machen",
    tr: "İleri sürmek, talep etmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "vor|liegen",
    tr: "Mevcut olmak, bulunmak",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "vor|täuschen",
    tr: "Yalandan yapmak (kendi ihtiyacı)",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "für ungültig erklären",
    tr: "Geçersiz kılmak",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "Eigenbedarf anmelden",
    tr: "Kendi ihtiyacı olduğunu bildirmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },
  {
    de: "Recht durchsetzen",
    tr: "Hakkı kabul ettirmek",
    cat: "Medeni Hukuk",
    sub: "Fiil/İfade",
  },

  // DEYİMLER (REDEWENDUNGEN)
  {
    de: "jemandes gutes Recht sein",
    tr: "Birinin en doğal/yasal hakkı olmak",
    cat: "Deyimler",
    sub: "Adalet",
  },
  {
    de: "Gnade vor Recht ergehen lassen",
    tr: "Merhamet göstermek",
    cat: "Deyimler",
    sub: "Adalet",
  },
  {
    de: "Recht muss Recht bleiben",
    tr: "Adalet yerini bulmalı",
    cat: "Deyimler",
    sub: "Adalet",
  },
  {
    de: "für Recht und Ordnung sorgen",
    tr: "Asayişi ve düzeni sağlamak",
    cat: "Deyimler",
    sub: "Adalet",
  },
  {
    de: "mit Fug und Recht",
    tr: "Tam bir haklılıkla",
    cat: "Deyimler",
    sub: "Adalet",
  },
  {
    de: "recht und billig",
    tr: "Adil ve makul",
    cat: "Deyimler",
    sub: "Adalet",
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
      {/* Header - Law & Justice Theme */}
      <header className="bg-gradient-to-r from-slate-900 via-indigo-900 to-red-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600 opacity-5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Scale className="text-amber-400 w-8 h-8" />
              <span>
                Recht <span className="text-indigo-300">&</span> Ordnung
              </span>
            </h1>
            <p className="text-slate-300 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Gavel size={14} className="text-red-200" /> Ceza ve Medeni Hukuk
              Sözlüğü
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
                  ? "bg-white text-red-900 shadow-lg"
                  : "text-red-200 hover:bg-white/10"
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
                      ? "bg-indigo-800 text-white border-indigo-800 shadow-md shadow-indigo-200"
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
          <FileText className="text-indigo-600" /> Kelime Kartları
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
      case "Ceza Hukuku":
        return "bg-red-50 text-red-700 border-red-200";
      case "Medeni Hukuk":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Deyimler":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Ceza Hukuku")
      return <ShieldAlert size={20} className="text-white" />;
    if (cat === "Medeni Hukuk")
      return <Users size={20} className="text-white" />;
    if (cat === "Deyimler") return <Scale size={20} className="text-white" />;
    return <Gavel size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Ceza Hukuku")
      return "bg-gradient-to-br from-red-700 to-rose-900";
    if (cat === "Medeni Hukuk")
      return "bg-gradient-to-br from-indigo-700 to-blue-800";
    if (cat === "Deyimler")
      return "bg-gradient-to-br from-amber-600 to-orange-700";
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
