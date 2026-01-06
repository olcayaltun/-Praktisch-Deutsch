import { useState } from "react";
import React from "react";

export default function ColoredGrammarCampus() {
  const [showLegend, setShowLegend] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);

  const dictionary = {
    sehnsüchtig: "Özlemle, hasretle; ungeduldig etwas",
    "der Austauschstudent, -en": "Değişim öğrencisi",
    "die Geschichte": "Tarih",
    "der Campus": "Üniversite yerleşkesi",
    betreten: "Girmek, adım atmak; irgendwo ankommen, den Fuß auf etwas setzen",
    "die Energie": "Enerji",
    Tausende: "Binlerce",
    erweitern: "Genişletmek; etwas vergrößern",
    "der Experte, -n": "Uzman",
    "das Gebiet, -e": "Alan, bölge",
    "eingeschrieben sein": "Kayıtlı olmak",
    "der Studiengang, -gänge": "Öğretim programı",
    "die Hauptstadt, -städte": "Başkent",
    "die Hochschule, -n": "Yüksekokul, üniversite; die Universität",
    insgesamt: "Toplamda; alle(s) zusammen, alles in allem",
    verblüfft: "Şaşkın, hayrete düşmüş; überrascht",
    "das Informationsblatt, -blätter": "Bilgi sayfası",
    "Das ist der Wahnsinn!":
      "Bu çılgınlık!; Das sagt man, wenn man begeistert von etwas ist",
    riesig: "Devasa, çok büyük; sehr groß",
    "mit Abstand": "Açık ara; bei Weitem",
    ergänzen: "Eklemek, tamamlamak; etwas hinzufügen",
    "der Einwohner, -": "Sakin, yerleşik",
    "die Orientierungsveranstaltung": "Oryantasyon etkinliği",
    einladen: "Davet etmek",
    begrüßen: "Selamlamak, karşılamak",
    begleiten: "Eşlik etmek; mitkommen, jemanden führen",
    aufmerksam: "Dikkatli; konzentriert",
    "der Lehrstuhl, -stühle":
      "Kürsü, bölüm; Stelle eines Professors an einer Universität/Hochschule",
    verteilen: "Dağıtmak",
    "der Stundenplan, -pläne": "Ders programı",
    "das Semester, -": "Dönem",
    weiterreichen: "İletmek, uzatmak",
    flüstern: "Fısıldamak; sehr leise sprechen",
    "der Akzent, -e": "Aksan",
    entgegnen: "Cevap vermek, karşılık vermek",
    ironisch: "İronik, alaycı",
    grinsen: "Sırıtmak, geniş gülümsemek",
    "die Ostküste": "Doğu kıyısı",
    "auf Anhieb": "İlk görüşte, anında; von Anfang an, sofort",
    "sich verabreden": "Buluşmak için sözleşmek",
    "die Leidenschaft, -en":
      "Tutku; große Begeisterung/Passion für etwas, starkes Interesse",
    "die Vielfalt (nur Singular)":
      "Çeşitlilik; große Menge an verschiedenen Arten, Formen, Möglichkeiten",
    grenzenlos: "Sınırsız",
    entwickeln: "Geliştirmek",
    eng: "Yakın, sıkı; intensiv, vertraut",
    "die Freundschaft, -en": "Arkadaşlık",
    verbringen: "Geçirmek",
    "die Vorlesung, -en": "Ders, konferans",
    "die Bibliothek, -en": "Kütüphane",
    "die Mensa, -Mensen": "Üniversite yemekhanesi",
    "die Freizeitaktivität, -en": "Boş zaman aktivitesi",
    chaotisch: "Kaotik, karışık",
    mithilfe: "Yardımıyla",
    "sich zurechtfinden": "Yön bulmak, uyum sağlamak; sich orientieren",
    "sich einleben":
      "Alışmak, adapte olmak; sich an eine neue Umgebung gewöhnen, sich wie zuhause fühlen",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Der erste Tag am Campus</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowLegend(!showLegend)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          {showLegend ? "Legende ausblenden" : "Legende anzeigen"}
        </button>

        <button
          onClick={() => setShowDictionary(!showDictionary)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          {showDictionary ? "Wörterbuch ausblenden" : "Wörterbuch anzeigen"}
        </button>
      </div>

      {showLegend && (
        <div className="p-4 bg-white rounded-lg shadow border mb-4">
          <h2 className="text-lg font-semibold mb-2">Farbkennzeichnung:</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-green-600 font-medium">■</span> Nebensätze
              (alle Arten)
            </li>
            <li>
              <span className="text-blue-600 font-medium">■</span> Adjektive
              (Eigenschaftswörter)
            </li>
            <li>
              <span className="font-bold text-black">■</span> Verben
              (Zeitwörter) und trennbare Vorsilben
            </li>
            <li>
              <span className="text-red-600 font-medium">■</span> Präpositionen
              (Verhältniswörter)
            </li>
          </ul>
        </div>
      )}

      {showDictionary && (
        <div className="p-4 bg-white rounded-lg shadow border mb-4 max-h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">
            Wörterbuch Deutsch-Türkisch:
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Deutsch</th>
                <th className="text-left p-2">Türkisch</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(dictionary).map(([word, translation], index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="p-2 font-medium">{word}</td>
                  <td className="p-2">{translation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mb-6">
        <p className="mb-4">
          Die beiden <span className="text-blue-600">schwedischen</span>{" "}
          Austauschstudenten{" "}
          <span className="font-bold text-black">warten</span> schon{" "}
          <span className="text-blue-600">sehnsüchtig</span>{" "}
          <span className="text-red-600">auf</span> den{" "}
          <span className="text-blue-600">ersten</span> Tag{" "}
          <span className="text-red-600">am</span> Campus. Sie{" "}
          <span className="font-bold text-black">sind</span> nicht die{" "}
          <span className="text-blue-600">einzigen</span>{" "}
          <span className="text-blue-600">internationalen</span> Studenten,{" "}
          <span className="text-green-600 font-medium">
            die <span className="text-red-600">nach</span> Berlin{" "}
            <span className="font-bold text-black">gekommen</span>{" "}
            <span className="font-bold text-black">sind</span>,{" "}
            <span className="text-red-600">um</span> die{" "}
            <span className="text-blue-600">deutsche</span> Geschichte{" "}
            <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">studieren</span>.
          </span>
        </p>

        <p className="mb-4">
          <span className="text-green-600 font-medium">
            Als sie <span className="text-red-600">an</span> diesem Tag den
            Campus der Humboldt-Universität{" "}
            <span className="font-bold text-black">betreten</span>,
          </span>{" "}
          <span className="font-bold text-black">fühlen</span> sie sofort die
          Energie <span className="text-blue-600">Tausender</span> Menschen. Sie{" "}
          <span className="font-bold text-black">kommen</span>{" "}
          <span className="text-red-600">aus</span> aller Welt,{" "}
          <span className="text-green-600 font-medium">
            um ihr Wissen <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">erweitern</span> und Experten{" "}
            <span className="text-red-600">auf</span> einem{" "}
            <span className="text-blue-600">bestimmten</span> Gebiet{" "}
            <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">werden</span>.
          </span>{" "}
          Insgesamt <span className="font-bold text-black">gibt</span> es dort{" "}
          <span className="text-red-600">über</span> 33.000 Studenten,{" "}
          <span className="text-green-600 font-medium">
            die <span className="text-red-600">in</span>{" "}
            <span className="text-red-600">über</span> 10 Studiengängen{" "}
            <span className="font-bold text-black">eingeschrieben</span>{" "}
            <span className="font-bold text-black">sind</span>
          </span>{" "}
          - und ihre Uni <span className="font-bold text-black">ist</span> nur
          eine <span className="text-red-600">von</span>{" "}
          <span className="text-blue-600">vielen</span>{" "}
          <span className="text-red-600">in</span> der Hauptstadt.
        </p>

        <p className="mb-4">
          <span className="text-green-600 font-medium">
            Zählt man alle <span className="text-red-600">an</span> allen
            Hochschulen Berlins,
          </span>{" "}
          <span className="font-bold text-black">kommt</span> man{" "}
          <span className="text-red-600">auf</span> fast 200.000 Studenten. „
          <span className="font-bold text-black">Schau</span> mal Astrid, fast
          eine Viertelmillion Menschen{" "}
          <span className="font-bold text-black">studieren</span>{" "}
          <span className="text-red-600">in</span> Berlin.{" "}
          <span className="font-bold text-black">Ist</span> das nicht der
          Wahnsinn?" Carl <span className="font-bold text-black">ist</span>{" "}
          <span className="text-blue-600">verblüfft</span>,{" "}
          <span className="text-green-600 font-medium">
            als er sich das Informationsblatt{" "}
            <span className="font-bold text-black">durchliest</span>,{" "}
            <span className="text-green-600 font-medium">
              das er <span className="text-red-600">im</span> Wohnheim{" "}
              <span className="font-bold text-black">bekommen</span>{" "}
              <span className="font-bold text-black">hat</span>.
            </span>
          </span>
        </p>

        <p className="mb-4">
          „Ja, das <span className="font-bold text-black">ist</span> eine{" "}
          <span className="text-blue-600">riesige</span> Zahl. Berlin{" "}
          <span className="font-bold text-black">hat</span> insgesamt circa 3,6
          Millionen Einwohner und{" "}
          <span className="font-bold text-black">ist</span>{" "}
          <span className="text-red-600">mit</span> Abstand die{" "}
          <span className="text-blue-600">größte</span> Stadt Deutschlands",{" "}
          <span className="font-bold text-black">ergänzt</span> Astrid.
        </p>

        <p className="mb-4">
          <span className="text-red-600">An</span> ihrem{" "}
          <span className="text-blue-600">ersten</span> Tag{" "}
          <span className="text-red-600">an</span> der Universität{" "}
          <span className="font-bold text-black">sind</span> Astrid und Carl
          zusammen <span className="text-red-600">mit</span> den{" "}
          <span className="text-blue-600">anderen</span>{" "}
          <span className="text-blue-600">internationalen</span> Studenten{" "}
          <span className="text-red-600">zu</span> einer
          Orientierungsveranstaltung{" "}
          <span className="font-bold text-black">eingeladen</span>.{" "}
          <span className="text-green-600 font-medium">
            Als sie dort <span className="font-bold text-black">ankommen</span>,
          </span>{" "}
          <span className="font-bold text-black">werden</span> sie{" "}
          <span className="text-blue-600">freundlich</span>{" "}
          <span className="text-red-600">von</span> ihrem{" "}
          <span className="text-blue-600">neuen</span> Professor{" "}
          <span className="font-bold text-black">begrüßt</span>.
        </p>

        <p className="mb-4">
          „<span className="text-blue-600">Sehr geehrte</span> Damen und Herren,
          ich <span className="font-bold text-black">heiße</span> Sie alle{" "}
          <span className="text-blue-600">herzlich</span> willkommen{" "}
          <span className="text-red-600">an</span> der Fakultät{" "}
          <span className="text-red-600">für</span> Geschichtswissenschaften der
          Universität Berlin. Mein Name{" "}
          <span className="font-bold text-black">ist</span> Professor Dr. Till
          Schröder. Mein Team und ich{" "}
          <span className="font-bold text-black">werden</span> Sie{" "}
          <span className="text-red-600">in</span> diesem Semester{" "}
          <span className="text-red-600">auf</span> Ihrer Reise{" "}
          <span className="text-red-600">durch</span> die{" "}
          <span className="text-blue-600">deutsche</span> Geschichte{" "}
          <span className="font-bold text-black">begleiten</span>."
        </p>

        <p className="mb-4">
          <span className="text-red-600">Im</span> Seminarraum{" "}
          <span className="font-bold text-black">sitzen</span> etwa 20
          Studenten,{" "}
          <span className="text-green-600 font-medium">
            die <span className="text-blue-600">aufmerksam</span>{" "}
            <span className="font-bold text-black">zuhören</span> und sich
            Notizen <span className="font-bold text-black">machen</span>.
          </span>{" "}
          Eine Dozentin,{" "}
          <span className="text-green-600 font-medium">
            die <span className="text-red-600">zu</span> Professor Schröders
            Lehrstuhl <span className="font-bold text-black">gehört</span>,
          </span>{" "}
          <span className="font-bold text-black">verteilt</span>{" "}
          Informationsblätter sowie einen Stundenplan{" "}
          <span className="text-red-600">für</span> das Semester.
        </p>

        <p className="mb-4">
          <span className="text-red-600">Neben</span> Astrid und Carl{" "}
          <span className="font-bold text-black">sitzt</span> eine{" "}
          <span className="text-blue-600">junge</span> Frau{" "}
          <span className="text-red-600">mit</span>{" "}
          <span className="text-blue-600">schwarzen</span> Haaren. Sie{" "}
          <span className="font-bold text-black">lächelt</span> die beiden{" "}
          <span className="text-blue-600">freundlich</span>{" "}
          <span className="font-bold text-black">an</span>,{" "}
          <span className="text-green-600 font-medium">
            als sie ihnen die Blätter{" "}
            <span className="font-bold text-black">weiterreicht</span>.
          </span>{" "}
          „Ich <span className="font-bold text-black">heiße</span> Luisa, und
          ihr?", <span className="font-bold text-black">flüstert</span> sie{" "}
          <span className="text-red-600">mit</span> einem Lächeln.
        </p>

        <p className="mb-4">
          <span className="text-red-600">An</span> ihrem Akzent{" "}
          <span className="font-bold text-black">hört</span> man sofort,{" "}
          <span className="text-green-600 font-medium">
            dass sie <span className="text-red-600">aus</span> Italien{" "}
            <span className="font-bold text-black">kommt</span>.
          </span>{" "}
          „Ich <span className="font-bold text-black">bin</span> Carl, das{" "}
          <span className="font-bold text-black">ist</span> meine Kommilitonin
          Astrid. Wir <span className="font-bold text-black">sind</span>{" "}
          <span className="text-red-600">aus</span> Stockholm.{" "}
          <span className="text-red-600">Aus</span> welcher{" "}
          <span className="text-blue-600">italienischen</span> Stadt{" "}
          <span className="font-bold text-black">kommst</span> du?",{" "}
          <span className="font-bold text-black">will</span> Carl{" "}
          <span className="font-bold text-black">wissen</span>.
        </p>

        <p className="mb-4">
          Luisa <span className="font-bold text-black">lacht</span> und{" "}
          <span className="font-bold text-black">entgegnet</span>: „Jeder{" "}
          <span className="font-bold text-black">weiß</span> sofort,{" "}
          <span className="text-green-600 font-medium">
            dass ich Italienerin{" "}
            <span className="font-bold text-black">bin</span>.
          </span>{" "}
          Wie <span className="font-bold text-black">kann</span> das sein?",{" "}
          <span className="font-bold text-black">fragt</span> sie{" "}
          <span className="text-blue-600">ironisch</span> und{" "}
          <span className="font-bold text-black">grinst</span>. „Ich{" "}
          <span className="font-bold text-black">komme</span>{" "}
          <span className="text-red-600">aus</span> Rimini, das{" "}
          <span className="font-bold text-black">ist</span> eine{" "}
          <span className="text-blue-600">Kleinstadt</span>{" "}
          <span className="text-red-600">an</span> der Ostküste."
        </p>

        <p className="mb-4">
          Die drei <span className="font-bold text-black">verstehen</span> sich{" "}
          <span className="text-red-600">auf</span> Anhieb und{" "}
          <span className="font-bold text-black">verabreden</span> sich,{" "}
          <span className="text-green-600 font-medium">
            um <span className="text-red-600">am</span>{" "}
            <span className="text-blue-600">Nachmittag</span> die Museumsinsel{" "}
            <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">besuchen</span>.
          </span>{" "}
          Sie <span className="font-bold text-black">teilen</span> ihre
          Leidenschaft <span className="text-red-600">für</span> die{" "}
          <span className="text-blue-600">deutsche</span> Geschichte sowie{" "}
          <span className="text-red-600">für</span> die{" "}
          <span className="text-blue-600">grenzenlose</span> Vielfalt der{" "}
          <span className="text-blue-600">deutschen</span> Hauptstadt.
        </p>

        <p className="mb-4">
          <span className="text-red-600">In</span> den{" "}
          <span className="text-blue-600">kommenden</span> Wochen{" "}
          <span className="font-bold text-black">entwickelt</span> sich eine{" "}
          <span className="text-blue-600">enge</span> Freundschaft und die drei{" "}
          <span className="font-bold text-black">verbringen</span> so gut wie
          jeden Tag gemeinsam <span className="text-red-600">auf</span> dem
          Campus - <span className="text-red-600">in</span> der Vorlesung, der
          Bibliothek, der Mensa und natürlich{" "}
          <span className="text-red-600">bei</span> den{" "}
          <span className="text-blue-600">abendlichen</span> Freizeitaktivitäten{" "}
          <span className="text-red-600">mit</span>{" "}
          <span className="text-blue-600">anderen</span> Studenten.
        </p>

        <p className="mb-4">
          Die <span className="text-blue-600">erste</span> Zeit{" "}
          <span className="font-bold text-black">ist</span> zwar noch etwas{" "}
          <span className="text-blue-600">chaotisch</span>, aber{" "}
          <span className="text-red-600">mithilfe</span> ihres Professors sowie
          der <span className="text-blue-600">anderen</span> Studenten{" "}
          <span className="font-bold text-black">finden</span> sie sich gut{" "}
          <span className="font-bold text-black">zurecht</span> und{" "}
          <span className="font-bold text-black">leben</span> sich schnell{" "}
          <span className="font-bold text-black">ein</span>...
        </p>
      </div>
    </div>
  );
}
