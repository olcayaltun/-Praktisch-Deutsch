import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Banknote,
  TrendingUp,
  Wallet,
  Percent,
  Layers,
  Coins,
} from "lucide-react";

// --- YENİ VERİ SETİ (Finanzen & Wirtschaft) ---
const rawData = [
  // 1. BÖLÜM: FİNANS (FINANZEN) - Ücretlendirme Türleri
  {
    de: "die Aufwandsentschädigung",
    tr: "Masraf tazminatı, harcırah",
    cat: "Finans",
    sub: "Ücretler",
  },
  { de: "die Besoldung", tr: "(Memur) Maaşı", cat: "Finans", sub: "Ücretler" },
  {
    de: "die Gage",
    tr: "Kaşe, sanatçı ücreti",
    cat: "Finans",
    sub: "Ücretler",
  },
  {
    de: "das Gehalt",
    tr: "Maaş (Beyaz yakalı)",
    cat: "Finans",
    sub: "Ücretler",
  },
  { de: "die Heuer", tr: "Gemici maaşı", cat: "Finans", sub: "Ücretler" },
  {
    de: "das Honorar",
    tr: "Serbest meslek ücreti",
    cat: "Finans",
    sub: "Ücretler",
  },
  { de: "der Sold", tr: "Asker maaşı", cat: "Finans", sub: "Ücretler" },
  { de: "der Zins", tr: "Faiz", cat: "Finans", sub: "Ücretler" },

  // 1. BÖLÜM: FİNANS - İsimler
  {
    de: "die Bonität",
    tr: "Kredi notu, ödeme gücü",
    cat: "Finans",
    sub: "İsimler",
  },
  {
    de: "der Dauerauftrag",
    tr: "Otomatik ödeme talimatı",
    cat: "Finans",
    sub: "İsimler",
  },
  { de: "die Devise", tr: "Döviz", cat: "Finans", sub: "İsimler" },
  {
    de: "die Dividende",
    tr: "Kâr payı, temettü",
    cat: "Finans",
    sub: "İsimler",
  },
  {
    de: "die Einzugsermächtigung",
    tr: "Otomatik tahsilat yetkisi",
    cat: "Finans",
    sub: "İsimler",
  },
  {
    de: "der Erlass",
    tr: "Af (borç) / Kararname",
    cat: "Finans",
    sub: "İsimler",
  },
  { de: "die Fixkosten", tr: "Sabit giderler", cat: "Finans", sub: "İsimler" },
  { de: "der Geizkragen", tr: "Cimri, pinti", cat: "Finans", sub: "İsimler" },
  {
    de: "die Gutschrift",
    tr: "Alacak kaydı, hesaba geçen para",
    cat: "Finans",
    sub: "İsimler",
  },
  { de: "der Kontostand", tr: "Hesap bakiyesi", cat: "Finans", sub: "İsimler" },
  {
    de: "der Privatanleger",
    tr: "Bireysel yatırımcı",
    cat: "Finans",
    sub: "İsimler",
  },
  { de: "der Spekulant", tr: "Spekülatör", cat: "Finans", sub: "İsimler" },
  {
    de: "das Wertpapier",
    tr: "Kıymetli evrak, menkul kıymet",
    cat: "Finans",
    sub: "İsimler",
  },

  // 1. BÖLÜM: FİNANS - Fiiller
  {
    de: "leben von (Vermögen)",
    tr: "(Servetten) Geçinmek",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "kommen zu (Geld)",
    tr: "(Paraya) Kavuşmak",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "umgehen können mit (Geld)",
    tr: "(Parayı) Kullanmayı bilmek",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "schwimmen in (Geld)",
    tr: "(Para) İçinde yüzmek",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "sich etwas leisten",
    tr: "Parasıyla bir şey almak/yapmak",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "sitzen auf (Geld)",
    tr: "Parasına kıyamamak",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "in Umlauf bringen",
    tr: "Tedavüle çıkarmak",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "an|fallen (Kosten)",
    tr: "(Masraf) Çıkmak, oluşmak",
    cat: "Finans",
    sub: "Fiiller",
  },
  { de: "ab|buchen", tr: "Hesaptan düşmek", cat: "Finans", sub: "Fiiller" },
  {
    de: "ab|fragen (Kontostand)",
    tr: "(Bakiye) Sorgulamak",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "ab|rufen",
    tr: "Çağırmak, erişmek (bilgi)",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "begleichen",
    tr: "Ödemek, kapatmak (borç)",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "ein|richten (Konto)",
    tr: "Açmak, oluşturmak (hesap)",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "ein|ziehen",
    tr: "Tahsil etmek, çekmek (para)",
    cat: "Finans",
    sub: "Fiiller",
  },
  { de: "gut|schreiben", tr: "Hesaba geçirmek", cat: "Finans", sub: "Fiiller" },
  {
    de: "erlassen",
    tr: "Bağışlamak, silmek (borç)",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "ermitteln (Wert)",
    tr: "Tespit etmek (değer)",
    cat: "Finans",
    sub: "Fiiller",
  },
  { de: "knausern", tr: "Cimrilik etmek", cat: "Finans", sub: "Fiiller" },
  {
    de: "tätigen",
    tr: "Gerçekleştirmek (ödeme/iş)",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "tilgen",
    tr: "İtfa etmek, ödeyip bitirmek",
    cat: "Finans",
    sub: "Fiiller",
  },
  {
    de: "überziehen",
    tr: "Eksiye düşürmek (hesap)",
    cat: "Finans",
    sub: "Fiiller",
  },
  { de: "verrechnen mit", tr: "Mahsup etmek", cat: "Finans", sub: "Fiiller" },
  {
    de: "vor|nehmen (Zahlung)",
    tr: "Yapmak (ödeme)",
    cat: "Finans",
    sub: "Fiiller",
  },

  // KUTU: SIFATLAR (-los / -frei)
  {
    de: "bargeldlos",
    tr: "Nakitsiz",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "mittellos",
    tr: "Parasız, yoksul",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "zinslos",
    tr: "Faizsiz",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "steuerfrei",
    tr: "Vergiden muaf",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "zinsfrei",
    tr: "Faizsiz (ödemesiz)",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "schuldenfrei",
    tr: "Borçsuz",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "provisionsfrei",
    tr: "Komisyonsuz",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "ablösefrei",
    tr: "Bonservissiz / Bedelsiz",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },
  {
    de: "mietfrei",
    tr: "Kirasız",
    cat: "Sıfatlar & Deyimler",
    sub: "-los/-frei",
  },

  // KUTU: DEYİMLER (HARCAMA & TASARRUF)
  {
    de: "Geld zum Fenster hinauswerfen",
    tr: "Parayı sokağa atmak",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },
  {
    de: "mit beiden Händen ausgeben",
    tr: "Bol keseden harcamak",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },
  {
    de: "auf den Kopf hauen",
    tr: "Parayı ezmek, çarçur etmek",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },
  {
    de: "verpulvern / verbraten",
    tr: "Harcayıp bitirmek, heba etmek",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },
  {
    de: "Geld sitzt locker",
    tr: "Eli açık olmak",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },
  {
    de: "Geld zusammenhalten",
    tr: "Parasını tutmak, idareli kullanmak",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },
  {
    de: "auf die hohe Kante legen",
    tr: "Kenara para atmak, birikim yapmak",
    cat: "Sıfatlar & Deyimler",
    sub: "Deyimler",
  },

  // 2. BÖLÜM: EKONOMİ (WIRTSCHAFT) - İsimler
  { de: "der Anreiz", tr: "Teşvik", cat: "Ekonomi", sub: "İsimler" },
  {
    de: "die Konjunktur",
    tr: "Konjonktür, piyasa canlılığı",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "die Marktposition",
    tr: "Pazar konumu",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "der Preisverfall",
    tr: "Fiyat düşüşü",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  { de: "das Quartal", tr: "Çeyrek (yıl)", cat: "Ekonomi", sub: "İsimler" },
  {
    de: "der Standort",
    tr: "İşletme yeri/konumu",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "die Steuervergünstigung",
    tr: "Vergi avantajı/indirimi",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "die Subvention",
    tr: "Sübvansiyon, devlet desteği",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  { de: "das Gemeinwohl", tr: "Kamu yararı", cat: "Ekonomi", sub: "İsimler" },
  {
    de: "das Pro-Kopf-Einkommen",
    tr: "Kişi başına düşen milli gelir",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "das Bruttoinlandsprodukt",
    tr: "GSYİH (Gayrisafi yurt içi hasıla)",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "die Postwachstumsökonomie",
    tr: "Büyüme sonrası ekonomi",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "die Spirale",
    tr: "Sarmal (enflasyon vb.)",
    cat: "Ekonomi",
    sub: "İsimler",
  },
  {
    de: "die Suffizienz",
    tr: "Yeterlilik (tüketimi sınırlama)",
    cat: "Ekonomi",
    sub: "İsimler",
  },

  // 2. BÖLÜM: EKONOMİ - Sıfatlar
  { de: "angespannt", tr: "Gergin (durum)", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "anhaltend", tr: "Süregelen (kriz)", cat: "Ekonomi", sub: "Sıfatlar" },
  {
    de: "börsennotiert",
    tr: "Borsada işlem gören",
    cat: "Ekonomi",
    sub: "Sıfatlar",
  },
  { de: "desaströs", tr: "Felaket, çok kötü", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "desolat", tr: "Vahim, içler acısı", cat: "Ekonomi", sub: "Sıfatlar" },
  {
    de: "einstellig / zweistellig",
    tr: "Bir / İki haneli",
    cat: "Ekonomi",
    sub: "Sıfatlar",
  },
  {
    de: "getrübt",
    tr: "Bulanık, bozuk (piyasa)",
    cat: "Ekonomi",
    sub: "Sıfatlar",
  },
  { de: "insolvent", tr: "İflas etmiş", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "klamm", tr: "Parasız, sıkışık", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "labil", tr: "İstikrarsız", cat: "Ekonomi", sub: "Sıfatlar" },
  {
    de: "marktbeherrschend",
    tr: "Pazara hakim, tekel",
    cat: "Ekonomi",
    sub: "Sıfatlar",
  },
  { de: "prekär", tr: "Güvencesiz, kritik", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "rentabel", tr: "Kârlı", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "robust", tr: "Sağlam, dayanıklı", cat: "Ekonomi", sub: "Sıfatlar" },
  {
    de: "schleppend",
    tr: "Ağır aksak, yavaş",
    cat: "Ekonomi",
    sub: "Sıfatlar",
  },
  { de: "schwankend", tr: "Dalgalı", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "sprunghaft", tr: "Ani, sıçramalı", cat: "Ekonomi", sub: "Sıfatlar" },
  { de: "turbulent", tr: "Çalkantılı", cat: "Ekonomi", sub: "Sıfatlar" },
  {
    de: "verhalten",
    tr: "Temkinli, çekingen",
    cat: "Ekonomi",
    sub: "Sıfatlar",
  },
  { de: "zügig", tr: "Hızlı, seri", cat: "Ekonomi", sub: "Sıfatlar" },

  // 2. BÖLÜM: EKONOMİ - Fiiller
  {
    de: "ab|werfen",
    tr: "(Kâr) Getirmek, bırakmak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "an|kurbeln",
    tr: "Canlandırmak (ekonomiyi)",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "an|siedeln",
    tr: "Yerleştirmek, kurmak (işletme)",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "an|ziehen",
    tr: "Yükselmek, canlanmak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "boomen",
    tr: "Patlama yapmak, gelişmek",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "decken (Bedarf)",
    tr: "Karşılamak (ihtiyaç)",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "ein|kalkulieren",
    tr: "Hesaba katmak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "florieren",
    tr: "Gelişmek, işleri tıkırında olmak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "kränkeln",
    tr: "İşleri kötü gitmek, zayıflamak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  { de: "schrumpfen", tr: "Küçülmek", cat: "Ekonomi", sub: "Fiiller" },
  {
    de: "stagnieren",
    tr: "Durgunlaşmak, yerinde saymak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "verzeichnen",
    tr: "Kaydetmek, göstermek (kazanç)",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "Konkurs anmelden",
    tr: "İflas bildirmek",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "Arbeitsplätze schaffen",
    tr: "İstihdam yaratmak",
    cat: "Ekonomi",
    sub: "Fiiller",
  },
  {
    de: "Inflation / Teuerung",
    tr: "Enflasyon / Pahalılık",
    cat: "Ekonomi",
    sub: "Terimler",
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
      {/* Header - Financial Theme */}
      <header className="bg-gradient-to-r from-emerald-800 via-green-900 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Coins className="text-emerald-400 w-8 h-8" />
              <span>
                Finanzen <span className="text-blue-300">&</span> Wirtschaft
              </span>
            </h1>
            <p className="text-emerald-100 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <TrendingUp size={14} className="text-blue-200" /> Finans, Ekonomi
              ve Para Terimleri
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
                  ? "bg-white text-blue-800 shadow-lg"
                  : "text-blue-200 hover:bg-white/10"
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
          <Wallet className="text-emerald-600" /> Kelime Kartları
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
      case "Finans":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Ekonomi":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Sıfatlar & Deyimler":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Finans") return <Banknote size={20} className="text-white" />;
    if (cat === "Ekonomi")
      return <TrendingUp size={20} className="text-white" />;
    if (cat === "Sıfatlar & Deyimler")
      return <Percent size={20} className="text-white" />;
    return <Wallet size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Finans")
      return "bg-gradient-to-br from-emerald-600 to-green-700";
    if (cat === "Ekonomi")
      return "bg-gradient-to-br from-blue-600 to-indigo-700";
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

export default AlmancaApp;
