import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Brain,
  Check,
  X,
  AlertCircle,
  ChevronRight,
  Activity,
  Pill,
  Stethoscope,
  Dna,
  Layers,
  HeartPulse,
} from "lucide-react";

// --- YENİ VERİ SETİ (Körper und Medizin) ---
const rawData = [
  // 1. BÖLÜM: VÜCUT PARÇALARI (KÖRPERTEILE) - İsimler
  {
    de: "die Achillessehne",
    tr: "Aşil tendonu",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Bauchnabel",
    tr: "Göbek deliği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Bizeps",
    tr: "Pazı / Biseps",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Blutzucker",
    tr: "Kan şekeri",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Gehirnareal",
    tr: "Beyin bölgesi/alanı",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Gelenk",
    tr: "Eklem",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Gewebe",
    tr: "Doku",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Hüfte",
    tr: "Kalça",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Jochbein",
    tr: "Elmacık kemiği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Kehlkopf",
    tr: "Gırtlak",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Kiefer (Ober-/Unter-)",
    tr: "(Üst/Alt) Çene",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Muskulatur",
    tr: "Kas sistemi",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Milz",
    tr: "Dalak",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Nasenbein",
    tr: "Burun kemiği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Nasenloch",
    tr: "Burun deliği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Ohrmuschel",
    tr: "Kulak kepçesi",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Pore",
    tr: "Gözenek",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Rippe",
    tr: "Kaburga",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Schädel",
    tr: "Kafatası",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Schienbein",
    tr: "Kaval kemiği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Schilddrüse",
    tr: "Tiroid bezi",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Schläfe",
    tr: "Şakak",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Schlüsselbein",
    tr: "Köprücük kemiği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Speiseröhre",
    tr: "Yemek borusu",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "das Steißbein",
    tr: "Kuyruk sokumu kemiği",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Stoffwechsel",
    tr: "Metabolizma",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Wade",
    tr: "Baldır",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "der Wirbel",
    tr: "Omur",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Wirbelsäule",
    tr: "Omurga",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },
  {
    de: "die Zelle",
    tr: "Hücre",
    cat: "Vücut & Hastalıklar",
    sub: "Vücut Parçaları",
  },

  // 1. BÖLÜM: HASTALIKLAR (KRANKHEITEN) - İsimler
  {
    de: "die Adipositas",
    tr: "Obezite, aşırı şişmanlık",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "das Blutgerinnsel",
    tr: "Kan pıhtısı",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "der Bluthochdruck",
    tr: "Yüksek tansiyon",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "der Diabetes",
    tr: "Diyabet (Şeker hastalığı)",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Durchblutungsstörung",
    tr: "Kan dolaşımı bozukluğu",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Fehlernährung",
    tr: "Yetersiz/Yanlış beslenme",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Gehirnblutung",
    tr: "Beyin kanaması",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Gicht",
    tr: "Gut hastalığı",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "der Herzinfarkt",
    tr: "Kalp krizi",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "der Karies",
    tr: "Diş çürüğü",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Lähmung",
    tr: "Felç",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Metastase",
    tr: "Metastaz (yayılma)",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "der Schlaganfall",
    tr: "İnme, felç",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "der Schweißausbruch",
    tr: "Ani ter basması",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Sprachstörung",
    tr: "Konuşma bozukluğu",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Überernährung",
    tr: "Aşırı beslenme",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },
  {
    de: "die Wucherung",
    tr: "Ur, tümör",
    cat: "Vücut & Hastalıklar",
    sub: "Hastalıklar",
  },

  // 1. BÖLÜM: SIFATLAR VE FİİLLER (Körper & Krankheiten)
  {
    de: "bösartig",
    tr: "Kötü huylu",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },
  {
    de: "fettleibig",
    tr: "Şişman, obez",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },
  {
    de: "gutartig",
    tr: "İyi huylu",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },
  {
    de: "intramuskulär",
    tr: "Kas içi",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },
  {
    de: "aus|strahlen",
    tr: "(Ağrının) Yayılması, vurması",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },
  {
    de: "gerinnen",
    tr: "Pıhtılaşmak",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },
  {
    de: "streuen",
    tr: "(Hastalığın) Yayılması, sıçraması",
    cat: "Vücut & Hastalıklar",
    sub: "Sıfatlar/Fiiller",
  },

  // KUTU: -ÖS SIFATLAR
  {
    de: "adipös",
    tr: "Obez, şişman",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },
  {
    de: "infektiös",
    tr: "Enfeksiyöz (bulaşıcı)",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },
  {
    de: "intravenös",
    tr: "Damar içi",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },
  {
    de: "komatös",
    tr: "Koma halinde",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },
  {
    de: "medikamentös",
    tr: "İlaçlı/İlaçla yapılan",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },
  {
    de: "muskulös",
    tr: "Kaslı",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },
  {
    de: "porös",
    tr: "Gözenekli/Geçirgen",
    cat: "Vücut & Hastalıklar",
    sub: "-ÖS Sıfatlar",
  },

  // 2. BÖLÜM: İLAÇLAR VE TEDAVİLER - İsimler
  {
    de: "das Anwendungsgebiet",
    tr: "Kullanım alanı",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "der Bewegungsapparat",
    tr: "Hareket sistemi",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "die Betäubung",
    tr: "Uyuşturma, anestezi",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "die Dosierung",
    tr: "Dozaj",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "die Errungenschaft",
    tr: "Kazanım, başarı (tıbbi)",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  { de: "das Gefäß", tr: "Damar", cat: "İlaçlar & Tedaviler", sub: "İsimler" },
  {
    de: "die Gegenanzeige",
    tr: "Kontrendikasyon (sakınca)",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "die Isolation",
    tr: "İzolasyon, tecrit",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "der Harnleiter",
    tr: "İdrar kanalı/yolu",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "die Heilkunde",
    tr: "Hekimlik, tıp ilmi",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  { de: "der Nerv", tr: "Sinir", cat: "İlaçlar & Tedaviler", sub: "İsimler" },
  {
    de: "die Prävention",
    tr: "Önleme, koruma",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "die Schleimhaut",
    tr: "Mukoza, sümük doku",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "der Wirkstoff",
    tr: "Etken madde",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },
  {
    de: "der Wohlstand",
    tr: "Refah, esenlik",
    cat: "İlaçlar & Tedaviler",
    sub: "İsimler",
  },

  // KUTULAR: TIP DALLARI & YEME BOZUKLUKLARI
  {
    de: "Anästhesie",
    tr: "Anestezi",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Chirurgie",
    tr: "Cerrahi",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Dermatologie",
    tr: "Cildiye",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Gynäkologie",
    tr: "Kadın hastalıkları ve doğum",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Neurologie",
    tr: "Nöroloji",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Orthopädie",
    tr: "Ortopedi",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Psychiatrie",
    tr: "Psikiyatri",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Radiologie",
    tr: "Radyoloji",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "Urologie",
    tr: "Üroloji",
    cat: "İlaçlar & Tedaviler",
    sub: "Tıp Dalları",
  },
  {
    de: "die Anorexie (Magersucht)",
    tr: "Anoreksiya (Yememe hastalığı)",
    cat: "İlaçlar & Tedaviler",
    sub: "Yeme Bozuklukları",
  },
  {
    de: "die Bulimie (Ess-Brech-Sucht)",
    tr: "Bulimia (Tıkınıp kusma hastalığı)",
    cat: "İlaçlar & Tedaviler",
    sub: "Yeme Bozuklukları",
  },

  // FİİLLER VE İFADELER (TEDAVİLER)
  { de: "bakteriell", tr: "Bakteriyel", cat: "Tıbbi Eylemler", sub: "Genel" },
  {
    de: "heilbar",
    tr: "İyileştirilebilir",
    cat: "Tıbbi Eylemler",
    sub: "Genel",
  },
  {
    de: "etw. an|zweifeln",
    tr: "Şüphe duymak (teşhisten)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "jmdn. auf|klären",
    tr: "Bilgilendirmek (hastayı)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "jmdn. auf|suchen",
    tr: "Gitmek, başvurmak (doktora)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "auf|treten",
    tr: "Ortaya çıkmak (hastalık)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "etw. aus|lösen",
    tr: "Tetiklemek, yol açmak",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "etw. aus|stellen",
    tr: "Düzenlemek, yazmak (reçete)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "etw. aus|rotten",
    tr: "Kökünü kazımak, yok etmek",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "heilen",
    tr: "İyileştirmek, tedavi etmek",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "jmdn. konsultieren",
    tr: "Danışmak (doktora)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  { de: "mangeln", tr: "Eksik olmak", cat: "Tıbbi Eylemler", sub: "Fiiller" },
  {
    de: "stellen (Diagnose/Antrag)",
    tr: "Koymak (teşhis) / Vermek",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "stillen (Blutung)",
    tr: "Durdurmak (kanama)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "überweisen",
    tr: "Sevk etmek / Havale etmek",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "verlaufen (Krankheit)",
    tr: "Seyretmek, ilerlemek (hastalık)",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
  },
  {
    de: "verschreiben",
    tr: "Reçete etmek, yazmak",
    cat: "Tıbbi Eylemler",
    sub: "Fiiller",
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
      {/* Header - Medical Theme */}
      <header className="bg-gradient-to-r from-red-900 via-rose-800 to-slate-900 text-white p-6 shadow-xl relative overflow-hidden">
        {/* Dekoratif Efektler */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 tracking-tight">
              <Activity className="text-emerald-400 w-8 h-8" />
              <span>
                Körper <span className="text-rose-300">&</span> Medizin
              </span>
            </h1>
            <p className="text-slate-200 text-sm mt-1 font-medium pl-11 flex items-center gap-2">
              <Stethoscope size={14} className="text-emerald-200" /> Anatomi,
              Hastalıklar ve Tedavi Terimleri
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
                  ? "bg-white text-emerald-800 shadow-lg"
                  : "text-emerald-200 hover:bg-white/10"
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
                      ? "bg-rose-700 text-white border-rose-700 shadow-md shadow-rose-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-rose-400 hover:text-rose-800"
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
          <HeartPulse className="text-rose-600" /> Kelime Kartları
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
      case "Vücut & Hastalıklar":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "İlaçlar & Tedaviler":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Tıbbi Eylemler":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const badgeColor = getBadgeColor(item.cat);

  // İkon seçimi
  const getIcon = (cat) => {
    if (cat === "Vücut & Hastalıklar")
      return <Activity size={20} className="text-white" />;
    if (cat === "İlaçlar & Tedaviler")
      return <Pill size={20} className="text-white" />;
    if (cat === "Tıbbi Eylemler")
      return <Stethoscope size={20} className="text-white" />;
    return <Dna size={20} className="text-white" />;
  };

  // Kart Arka Yüz Gradiyeni
  const getGradient = (cat) => {
    if (cat === "Vücut & Hastalıklar")
      return "bg-gradient-to-br from-rose-600 to-pink-700";
    if (cat === "İlaçlar & Tedaviler")
      return "bg-gradient-to-br from-emerald-600 to-teal-700";
    if (cat === "Tıbbi Eylemler")
      return "bg-gradient-to-br from-slate-600 to-gray-700";
    return "bg-gradient-to-br from-indigo-600 to-purple-700";
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
        <div className="absolute w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between items-center text-center transition-all group-hover:border-rose-300">
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
                className="flex items-center gap-2 bg-rose-700 text-white px-8 py-4 rounded-xl hover:bg-rose-800 active:scale-95 transition-all shadow-lg shadow-rose-400 font-bold text-lg"
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
