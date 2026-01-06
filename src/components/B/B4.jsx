import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Box,
  Hammer,
  Sparkles,
  Tag,
  Layers,
  Component,
} from "lucide-react";

// --- YENİ VERİ SETİ (Dinge beschreiben & Umgang) ---
const rawData = [
  // 1. BÖLÜM: EŞYALAR & MALZEMELER - İsimler
  {
    de: "das Aluminium",
    tr: "Alüminyum",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Anspitzer",
    tr: "Kalemtıraş",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Antibiotikum",
    tr: "Antibiyotik",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Artikel (Büro/Haushalt)",
    tr: "Eşya/Malzeme (Ofis/Ev)",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Arzneimittel",
    tr: "İlaç",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "die Baumwolle",
    tr: "Pamuk",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Besteck",
    tr: "Çatal bıçak takımı",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Blumentopf",
    tr: "Çiçek saksısı",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Dreitagebart",
    tr: "Kirli sakal",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Eierbecher",
    tr: "Yumurtalık",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Erdöl",
    tr: "Ham petrol",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Getreide",
    tr: "Tahıl",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Impfstoff",
    tr: "Aşı",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Kerosin",
    tr: "Gaz yağı / Uçak yakıtı",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Kork",
    tr: "Mantar (malzeme)",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Kuscheltier",
    tr: "Peluş hayvan / Oyuncak",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Milchprodukt",
    tr: "Süt ürünü",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Ohrring",
    tr: "Küpe",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "die Pinnwand",
    tr: "Mantar pano",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Porzellan",
    tr: "Porselen",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Radiergummi",
    tr: "Silgi",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Rohstoff",
    tr: "Hammadde",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "die Säge",
    tr: "Testere",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "der Schraubenzieher",
    tr: "Tornavida",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "die Schublade",
    tr: "Çekmece",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Silber",
    tr: "Gümüş",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  {
    de: "das Springseil",
    tr: "Atlama ipi",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },
  { de: "der Ton", tr: "Kil", cat: "Eşyalar & Malzemeler", sub: "İsimler" },
  {
    de: "der Treibstoff",
    tr: "Yakıt",
    cat: "Eşyalar & Malzemeler",
    sub: "İsimler",
  },

  // 1. BÖLÜM: EŞYALAR & MALZEMELER - Fiiller
  {
    de: "abhanden|kommen",
    tr: "Kaybolmak (ortadan yok olmak)",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "sich an|fühlen",
    tr: "Hissettirmek (yumuşak, sert vb.)",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "auf|kommen für",
    tr: "(Masrafı/Zararı) Karşılamak",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "auf|treiben",
    tr: "Bulup buluşturmak, tedarik etmek",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "aus|kommen ohne",
    tr: "...sız idare etmek",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "begleichen",
    tr: "Ödemek (fatura, borç vb.)",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "dahinter|kommen",
    tr: "İşin aslını anlamak, farkına varmak",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "ein|gestehen",
    tr: "İtiraf etmek, kabullenmek",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "entgegen|kommen",
    tr: "Kolaylık göstermek / İndirim yapmak",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "entsprechen",
    tr: "Uymak, denk gelmek",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "erstatten",
    tr: "Geri ödemek, tazmin etmek",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "leisten",
    tr: "Yapmak, yerine getirmek (ödeme vb.)",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "spenden",
    tr: "Bağışlamak",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },
  {
    de: "zugute|kommen",
    tr: "Yararına olmak",
    cat: "Eşyalar & Malzemeler",
    sub: "Fiiller",
  },

  // 1. BÖLÜM: EŞYALAR & MALZEMELER - Sıfatlar
  {
    de: "einzigartig",
    tr: "Eşsiz, benzersiz",
    cat: "Eşyalar & Malzemeler",
    sub: "Sıfatlar",
  },
  {
    de: "flauschig",
    tr: "Yumuşacık, tüylü",
    cat: "Eşyalar & Malzemeler",
    sub: "Sıfatlar",
  },
  {
    de: "glitschig",
    tr: "Kaygan, vıcık vıcık",
    cat: "Eşyalar & Malzemeler",
    sub: "Sıfatlar",
  },
  {
    de: "klebrig",
    tr: "Yapışkan",
    cat: "Eşyalar & Malzemeler",
    sub: "Sıfatlar",
  },
  {
    de: "kratzig",
    tr: "Tırmalayan, kaşındıran",
    cat: "Eşyalar & Malzemeler",
    sub: "Sıfatlar",
  },
  {
    de: "rau",
    tr: "Pürüzlü, kaba",
    cat: "Eşyalar & Malzemeler",
    sub: "Sıfatlar",
  },

  // 2. KUTU: PEKİŞTİRME SIFATLARI
  {
    de: "butterweich",
    tr: "Pamuk gibi yumuşak (tereyağı gibi)",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "eiskalt",
    tr: "Buz gibi soğuk",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "hochinteressant",
    tr: "Çok ilginç, son derece ilgi çekici",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "klitschnass",
    tr: "Sırılsıklam",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "knochentrocken",
    tr: "Kupkuru",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "kochend heiß",
    tr: "Kaynar (pişecek kadar sıcak)",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "brandneu / nagelneu",
    tr: "Yepyeni, gıcır gıcır",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "riesengroß",
    tr: "Kocaman, devasa",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "steinhart",
    tr: "Taş gibi sert",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "stinknormal",
    tr: "Sıradan, alelade",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "stockdunkel",
    tr: "Zifiri karanlık",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "taghell",
    tr: "Gündüz gibi aydınlık",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "todlangweilig",
    tr: "Ölümüne sıkıcı",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "uralt",
    tr: "Çok eski, asırlık",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },
  {
    de: "winzig",
    tr: "Küçücük, minicik",
    cat: "Pekiştirme Sıfatları",
    sub: "Sıfatlar",
  },

  // 3. BÖLÜM: KULLANIM & EYLEMLER - İsimler/Fiiller
  {
    de: "der Putzlappen",
    tr: "Temizlik bezi, paçavra",
    cat: "Kullanım & Eylemler",
    sub: "İsimler",
  },
  {
    de: "sich ab|nutzen",
    tr: "Aşınmak, eskimek, yıpranmak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "ab|saugen",
    tr: "Süpürmek, tozunu çekmek",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "ab|stauben",
    tr: "Tozunu almak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "ab|wischen",
    tr: "Silmek (bezle)",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "auf|bewahren",
    tr: "Saklamak, muhafaza etmek",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "auf|brauchen",
    tr: "Tüketmek, bitirmek",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "aus|sortieren",
    tr: "Ayıklamak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "erstehen",
    tr: "Satın almak (kelepir/nadir)",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "erwerben",
    tr: "Edinmek, kazanmak, satın almak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "los|werden",
    tr: "Kurtulmak, elden çıkarmak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "missbrauchen",
    tr: "Kötüye kullanmak, suistimal etmek",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "polieren",
    tr: "Parlatmak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "unter|bringen",
    tr: "Yerleştirmek, sığdırmak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "verstauen",
    tr: "Yerleştirmek, istiflemek",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "weg|schmeißen",
    tr: "Atmak, çöpe atmak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "wischen",
    tr: "Silmek (paspaslamak)",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  { de: "zerdrücken", tr: "Ezmek", cat: "Kullanım & Eylemler", sub: "Fiiller" },
  {
    de: "zerfallen",
    tr: "Parçalanmak, dağılmak, çürümek",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "zerschlagen",
    tr: "Kırıp parçalamak",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },
  {
    de: "sich zulegen",
    tr: "Edinmek, satın almak (kendine)",
    cat: "Kullanım & Eylemler",
    sub: "Fiiller",
  },

  // 3. BÖLÜM: KULLANIM & EYLEMLER - Kalıplar
  {
    de: "Gewinn erzielen / machen",
    tr: "Kar etmek",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
  {
    de: "sich Mühe geben",
    tr: "Çaba göstermek, emek vermek",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
  {
    de: "zu Bruch gehen",
    tr: "Kırılmak, parçalanmak",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
  {
    de: "Gebrauch machen von",
    tr: "(Hakkını) Kullanmak, yararlanmak",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
  {
    de: "in Kauf nehmen",
    tr: "Göze almak, kabullenmek",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
  {
    de: "eine Rolle spielen",
    tr: "Rol oynamak, önemli olmak",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
  {
    de: "zur Verfügung stellen",
    tr: "Kullanıma sunmak, tahsis etmek",
    cat: "Kullanım & Eylemler",
    sub: "Kalıplar",
  },
];

const B4 = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", ...new Set(rawData.map((item) => item.cat))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "Tümü") return rawData;
    return rawData.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* Header - Industrial/Material Theme */}
      <header className="bg-gradient-to-r from-slate-800 to-zinc-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Arka Plan Efekti */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Box className="text-amber-400 w-8 h-8" />
              <span>
                Dinge <span className="text-slate-400">&</span> Eigenschaften
              </span>
            </h1>
            <p className="text-slate-300 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-200" /> Eşya Tanımlama
              ve Kullanım Sözlüğü
            </p>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab("learn")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "learn"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              <BookOpen size={18} /> Çalış
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all font-medium text-sm ${
                activeTab === "quiz"
                  ? "bg-slate-200 text-slate-900 shadow-lg"
                  : "text-slate-300 hover:bg-white/10"
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
                      ? "bg-slate-800 text-white border-slate-800 shadow-md shadow-slate-300"
                      : "bg-white text-slate-600 border-slate-300 hover:border-slate-500 hover:text-slate-800"
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
          <Component className="text-amber-600" /> Kelime Kartları
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
      case "Eşyalar & Malzemeler":
        return "bg-slate-100 text-slate-700 border-slate-200";
      case "Pekiştirme Sıfatları":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Kullanım & Eylemler":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-gray-50 text-gray-600";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-amber-300">
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
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-slate-700 to-zinc-800 text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center rotate-y-180 shadow-inner">
          <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm">
            {item.cat === "Pekiştirme Sıfatları" ? (
              <Sparkles size={20} className="text-amber-300" />
            ) : item.cat === "Kullanım & Eylemler" ? (
              <Hammer size={20} className="text-emerald-300" />
            ) : (
              <Box size={20} className="text-white" />
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
                "border-2 border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-600";
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
                    <div className="w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-amber-400 transition-colors"></div>
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

export default B4;
