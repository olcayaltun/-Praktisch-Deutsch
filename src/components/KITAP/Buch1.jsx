import { useState } from "react";
import React from "react";
export default function ColoredGrammar() {
  const [showLegend, setShowLegend] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);

  const dictionary = {
    wehen: "Havada hareket etmek (ör. rüzgar esiyor)",
    renommiert: "İyi bir üne sahip olmak, saygın (ör. saygın bir bilim insanı)",
    begehrt: "Aranan, popüler, beğenilen (ör. aranan bir koleksiyon parçası)",
    einzigartig: "Olağanüstü, özel, eşsiz (ör. eşsiz bir deneyim)",
    staunend: "Şaşırmış, etkilenmiş (ör. hayretle bakmak)",
    "die S-Bahn": "Şehir treni (kısaca Stadtbahn)",
    "die Umgebung":
      "Çevre, etraftaki her şey, özellikle manzaralar, binalar ve sokaklar",
    beobachten: "Bir şeyi/birini dikkatle ya da yoğun bir şekilde izlemek",
    langwierig: "Çok zaman alan, genellikle zor (ör. uzun süren bir süreç)",
    "der Bewerbungsprozess":
      "Bir pozisyon için en iyi olduğunu göstermeye çalıştığın süreç (ör. iş başvurusu süreci)",
    durchlaufen: "Bir şeyi tamamlamak, geçmek (ör. bir süreci tamamlamak)",
    "der Bewerber": "Bir pozisyona başvuran kişi (ör. iş başvurusu yapan)",
    "die Zusage": "Olumlu cevap, kabul (ör. iş teklifinin kabul edilmesi)",
    funkeln: "Parlamak, ışıldamak (ör. yıldızlar parlıyor)",
    "die Aufregung": "Heyecan, sevinç, gerilim",
    "die Wiese": "Çimle kaplı geniş alan, çayır",
    überqueren:
      "Bir şeyin üzerinden geçmek/gitmek (ör. bir nehri, sınırı, sokağı, okyanusu geçmek)",
    münden: "Bir şeye akmak, dökülmek (ör. nehir denize dökülür)",
    zahlreiche: "Çok sayıda, pek çok",
    "jede Menge": "Çok fazla, bir sürü",
    "in echt": "Gerçekte, gerçekten",
    schießen: "Fotoğraf çekmek (ör. fotoğraflar çekmek)",
    brutal: "Sert, agresif, acımasız",
    bewundern:
      "Bir şeye/birine hayranlıkla bakmak, bir şeyi/birini takdir etmek",
    eindrucksvoll: "Etkileyici, görkemli",
    "Die Ankunft": "Varış, geliş (ör. uçağın varışı, bir yere ulaşma)",
    vorbeiziehen:
      "Yanından geçmek, geçip gitmek (ör. bulutlar gökyüzünde geçip gidiyor)",
    breiten: "Yaymak, sermek (ör. bir örtüyü masaya sermek)",
    zustimmend:
      "Onaylayan, katılan, olumlu tepki veren (ör. başını onaylarcasına sallamak)",
    schließlich:
      "Sonunda, nihayet (ör. uzun bir tartışmadan sonra nihayet karar verdiler)",
    "die Waldstücke":
      "Orman parçaları, küçük orman alanları (ör. tarlalar arasında küçük orman parçaları var)",
    "der Vergleich":
      "Karşılaştırma, mukayese (ör. iki ürün arasında bir karşılaştırma yapmak)",
    festhalten:
      "Sıkıca tutmak, sabitlemek; (mecazi) bir şeyi kaydetmek, yakalamak (ör. bir anıyı fotoğrafla sabitlemek)",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Astrid und Carl in Berlin</h1>

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
              (Zeitwörter)
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
          Ein <span className="text-blue-600">kalter</span> Oktoberwind{" "}
          <span className="font-bold text-black">weht</span>{" "}
          <span className="text-red-600">durch</span> die Straßen Berlins,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">als</span> Astrid und Carl{" "}
            <span className="text-red-600">an</span> diesem Mittag{" "}
            <span className="text-red-600">aus</span> dem Flugzeug{" "}
            <span className="font-bold text-black">steigen</span> und{" "}
            <span className="text-red-600">zum</span> ersten Mal deutschen Boden{" "}
            <span className="font-bold text-black">betreten</span>.
          </span>
          Die beiden <span className="text-blue-600">schwedischen</span>{" "}
          Geschichtsstudenten <span className="font-bold text-black">sind</span>{" "}
          <span className="text-red-600">aus</span> Schweden{" "}
          <span className="font-bold text-black">angereist</span>,
          <span className="text-green-600 font-medium">
            {" "}
            um ein halbes Jahr <span className="text-red-600">an</span> der
            renommierten Berliner Humboldt-Universität zu{" "}
            <span className="font-bold text-black">studieren</span>.
          </span>
          Die beiden <span className="font-bold text-black">haben</span>{" "}
          <span className="text-blue-600">großes</span> Glück,
          <span className="text-green-600 font-medium">
            {" "}
            denn sie <span className="font-bold text-black">haben</span> einen
            der begehrten Plätze <span className="text-red-600">für</span> ein
            Auslandssemester{" "}
            <span className="font-bold text-black">bekommen</span>.
          </span>
          Berlin <span className="font-bold text-black">ist</span> eine Stadt{" "}
          <span className="text-red-600">mit</span> einer{" "}
          <span className="text-blue-600">einzigartigen</span> Geschichte,
          <span className="text-green-600 font-medium">
            {" "}
            die man <span className="text-red-600">an</span> fast jeder Ecke der
            Metropole <span className="font-bold text-black">erkennen</span>{" "}
            <span className="font-bold text-black">kann</span>.
          </span>
          Es <span className="font-bold text-black">ist</span> ein Ort
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">wie</span> kein zweiter{" "}
            <span className="text-red-600">auf</span> der Welt
          </span>
          und die beiden Studenten{" "}
          <span className="font-bold text-black">können</span> es nicht{" "}
          <span className="font-bold text-black">erwarten</span>,
          <span className="text-green-600 font-medium">
            {" "}
            ihn genauer{" "}
            <span className="font-bold text-black">kennenzulernen</span>.
          </span>
        </p>

        <p className="mb-4">
          Es <span className="font-bold text-black">ist</span> ihr{" "}
          <span className="text-blue-600">erstes</span> Mal{" "}
          <span className="text-red-600">in</span> der{" "}
          <span className="text-blue-600">deutschen</span> Hauptstadt und sie{" "}
          <span className="font-bold text-black">wissen</span>,
          <span className="text-green-600 font-medium">
            {" "}
            dass sie jede Menge Abenteuer{" "}
            <span className="font-bold text-black">erleben</span>{" "}
            <span className="font-bold text-black">werden</span>.
          </span>
          Astrid, eine{" "}
          <span className="text-blue-600">lebenslustige junge</span> Frau{" "}
          <span className="text-red-600">aus</span> Stockholm,{" "}
          <span className="font-bold text-black">blickt</span>{" "}
          <span className="text-red-600">mit</span>{" "}
          <span className="text-blue-600">staunenden</span> Augen{" "}
          <span className="text-red-600">aus</span> dem Fenster der S-Bahn. Die
          Fahrt <span className="text-red-600">vom</span> Flughafen
          Berlin-Brandenburg,
          <span className="text-green-600 font-medium">
            {" "}
            der südlich <span className="text-red-600">von</span> Berlin{" "}
            <span className="font-bold text-black">liegt</span>,
          </span>
          <span className="font-bold text-black">dauert</span>{" "}
          <span className="text-red-600">über</span> eine Stunde. Sie{" "}
          <span className="font-bold text-black">hat</span> also genug Zeit,
          <span className="text-green-600 font-medium">
            {" "}
            sich die Umgebung{" "}
            <span className="font-bold text-black">anzuschauen</span> und ihre
            ersten Eindrücke zu{" "}
            <span className="font-bold text-black">sammeln</span>.
          </span>
        </p>

        <p className="mb-4">
          Carl <span className="font-bold text-black">sitzt</span> gegenüber{" "}
          <span className="text-red-600">von</span> ihr und{" "}
          <span className="font-bold text-black">beobachtet</span>{" "}
          <span className="text-red-600">mit</span>{" "}
          <span className="text-blue-600">großem</span> Interesse,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">wie</span> die{" "}
            <span className="text-blue-600">grüne</span> Landschaft{" "}
            <span className="text-red-600">an</span> ihm{" "}
            <span className="font-bold text-black">vorbeizieht</span>.
          </span>
          Er <span className="font-bold text-black">ist</span> ein{" "}
          <span className="text-blue-600">charismatischer junger</span> Mann{" "}
          <span className="text-red-600">aus</span> Göteborg, einer Stadt
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">an</span> der{" "}
            <span className="text-blue-600">schwedischen</span> Ostsee.
          </span>
          Genau <span className="text-red-600">wie</span> Astrid{" "}
          <span className="font-bold text-black">macht</span> auch er seinen
          Master <span className="text-red-600">in</span> Geschichte
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">an</span> der Universität Stockholm.
          </span>
          Er <span className="font-bold text-black">hat</span> sie erst{" "}
          <span className="text-blue-600">kurzem</span>{" "}
          <span className="font-bold text-black">kennengelernt</span>,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">als</span> ihr Professor einen
            Informationsabend <span className="text-red-600">für</span> das{" "}
            <span className="text-blue-600">kommende</span> Auslandssemester{" "}
            <span className="font-bold text-black">organisiert</span>{" "}
            <span className="font-bold text-black">hat</span>.
          </span>
          Die beiden <span className="font-bold text-black">mussten</span> einen{" "}
          <span className="text-blue-600">langwierigen</span> Bewerbungsprozess{" "}
          <span className="font-bold text-black">durchlaufen</span>,
          <span className="text-green-600 font-medium">
            {" "}
            denn es <span className="font-bold text-black">gab</span> fast
            einhundert Bewerber, aber nur zwei Plätze.
          </span>
          <span className="text-red-600">Nach</span> fast vier Monaten{" "}
          <span className="font-bold text-black">bekamen</span> sie dann endlich
          die Zusage.
        </p>

        <hr className="my-6 border-gray-300" />

        <p className="mb-4">
          „
          <span className="text-green-600 font-medium">
            <span className="font-bold text-black">Kannst</span>
          </span>{" "}
          du das <span className="font-bold text-black">glauben</span>? Wir{" "}
          <span className="font-bold text-black">sind</span> endlich hier!",{" "}
          <span className="font-bold text-black">sagt</span> Astrid{" "}
          <span className="text-red-600">mit</span> einem{" "}
          <span className="text-blue-600">breiten</span> Lächeln{" "}
          <span className="text-red-600">im</span> Gesicht. Ihre Augen{" "}
          <span className="font-bold text-black">funkeln</span>{" "}
          <span className="text-red-600">vor</span> Aufregung. Carl{" "}
          <span className="font-bold text-black">nickt</span>{" "}
          <span className="text-blue-600">zustimmend</span> und{" "}
          <span className="font-bold text-black">lächelt</span> zurück. Er{" "}
          <span className="font-bold text-black">holt</span> eine Kamera{" "}
          <span className="text-red-600">aus</span> seinem Rucksack und{" "}
          <span className="font-bold text-black">macht</span> einige Fotos. Die{" "}
          <span className="text-blue-600">ersten zwanzig</span> Minuten{" "}
          <span className="font-bold text-black">fahren</span> sie{" "}
          <span className="text-red-600">durch</span> Wald und Wiesen,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">bis</span> sie sich schließlich der
            Metropole <span className="font-bold text-black">nähern</span> und{" "}
            <span className="text-red-600">statt</span> Bäumen nun hauptsächlich
            Gebäude <span className="font-bold text-black">sehen</span>.
          </span>
          Die Häuserreihen und <span className="text-blue-600">modernen</span>{" "}
          Wohnblocks <span className="font-bold text-black">sehen</span> alle
          fast gleich <span className="text-red-600">aus</span>. Das{" "}
          <span className="font-bold text-black">liegt</span>{" "}
          <span className="text-red-600">daran</span>,
          <span className="text-green-600 font-medium">
            {" "}
            dass <span className="text-red-600">nach</span> dem{" "}
            <span className="text-blue-600">zweiten</span> Weltkrieg{" "}
            <span className="text-red-600">im</span> Jahr 1945 alles{" "}
            <span className="text-red-600">in</span>{" "}
            <span className="text-blue-600">kurzer</span> Zeit{" "}
            <span className="font-bold text-black">wiederaufgebaut</span> werden{" "}
            <span className="font-bold text-black">musste</span> und es{" "}
            <span className="text-red-600">an</span> Geld{" "}
            <span className="font-bold text-black">fehlte</span>.
          </span>
        </p>

        <p className="mb-4">
          Etwa <span className="text-red-600">auf</span>{" "}
          <span className="text-blue-600">halber</span> Strecke{" "}
          <span className="font-bold text-black">überqueren</span> sie die
          Spree, Berlins <span className="text-blue-600">größten</span> Fluss,
          <span className="text-green-600 font-medium">
            {" "}
            der <span className="text-red-600">im</span> Osten{" "}
            <span className="text-red-600">in</span> die Havel{" "}
            <span className="font-bold text-black">mündet</span>.
          </span>
          Es <span className="font-bold text-black">gibt</span>{" "}
          <span className="text-red-600">in</span> der Umgebung der Stadt{" "}
          <span className="text-blue-600">zahlreiche</span> Seen, Parks und
          Waldstücke. <span className="text-red-600">Im</span> Vergleich{" "}
          <span className="text-red-600">zu</span>{" "}
          <span className="text-blue-600">vielen anderen europäischen</span>{" "}
          Hauptstädten <span className="font-bold text-black">liegt</span>{" "}
          Berlin <span className="text-red-600">mitten</span>{" "}
          <span className="text-red-600">im</span>{" "}
          <span className="text-blue-600">grünen</span> Bundesland Brandenburg
          und <span className="font-bold text-black">bietet</span> jede Menge
          Möglichkeiten <span className="text-red-600">für</span> Ausflüge{" "}
          <span className="text-red-600">in</span> die Natur. „Es{" "}
          <span className="font-bold text-black">ist</span> wirklich{" "}
          <span className="text-blue-600">unglaublich</span>, die Stadt endlich{" "}
          <span className="text-red-600">in</span> echt{" "}
          <span className="font-bold text-black">sehen</span> zu{" "}
          <span className="font-bold text-black">können</span> und nicht nur{" "}
          <span className="text-red-600">auf</span> Bildern. So{" "}
          <span className="text-blue-600">grün</span>{" "}
          <span className="font-bold text-black">hatte</span> ich mir das alles
          nicht <span className="font-bold text-black">vorgestellt</span>!"
        </p>

        <p className="mb-4">
          Carl <span className="font-bold text-black">schießt</span>{" "}
          <span className="text-blue-600">zahlreiche</span> Fotos,
          <span className="text-green-600 font-medium">
            {" "}
            schließlich <span className="font-bold text-black">will</span> er
            jeden Moment dieses <span className="text-blue-600">neuen</span>{" "}
            Abenteuers <span className="font-bold text-black">festhalten</span>.
          </span>
          Sie <span className="font-bold text-black">nähern</span> sich langsam
          dem Ortsteil Friedrichshain,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">wo</span> sie{" "}
            <span className="text-red-600">in</span> ein Studentenwohnheim{" "}
            <span className="font-bold text-black">ziehen</span>{" "}
            <span className="font-bold text-black">werden</span>.
          </span>
          <span className="text-green-600 font-medium">
            {" "}
            Dass sie eine Unterkunft{" "}
            <span className="font-bold text-black">bekommen</span>{" "}
            <span className="font-bold text-black">haben</span>,
          </span>
          <span className="font-bold text-black">ist</span> etwas ganz{" "}
          <span className="text-blue-600">besonderes</span>,
          <span className="text-green-600 font-medium">
            {" "}
            denn der Wohnungsmarkt <span className="text-red-600">in</span>{" "}
            Berlin <span className="font-bold text-black">ist</span>{" "}
            <span className="text-blue-600">brutal</span>.
          </span>
          <span className="text-blue-600">Viele</span> Menschen{" "}
          <span className="font-bold text-black">sind</span> teilweise
          monatelang <span className="text-red-600">auf</span> der Suche,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">bis</span> sie etwas{" "}
            <span className="text-blue-600">passendes</span>{" "}
            <span className="font-bold text-black">finden</span>.
          </span>
        </p>

        <p>
          Die beiden <span className="font-bold text-black">genießen</span> die{" "}
          <span className="text-blue-600">letzten</span> Minuten{" "}
          <span className="text-red-600">in</span> der S-Bahn und{" "}
          <span className="font-bold text-black">bewundern</span> die{" "}
          <span className="text-blue-600">eindrucksvolle</span> Architektur{" "}
          <span className="text-red-600">um</span> sich herum. Die Mischung{" "}
          <span className="text-red-600">aus</span>{" "}
          <span className="text-blue-600">historischen</span> und{" "}
          <span className="text-blue-600">modernen</span> Gebäuden{" "}
          <span className="font-bold text-black">macht</span> die Stadt nicht
          nur architektonisch <span className="text-blue-600">interessant</span>
          , sondern sie <span className="font-bold text-black">erzählt</span>{" "}
          auch eine <span className="text-blue-600">lange</span> Geschichte,
          <span className="text-green-600 font-medium">
            {" "}
            die weit <span className="text-red-600">in</span> die Vergangenheit{" "}
            <span className="font-bold text-black">reicht</span>.
          </span>
        </p>
      </div>
    </div>
  );
}
