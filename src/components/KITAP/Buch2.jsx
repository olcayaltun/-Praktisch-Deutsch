import { useState } from "react";
import React from "react";

export default function ColoredGrammar() {
  const [showLegend, setShowLegend] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);

  const dictionary = {
    "der Kiez, e": "Şehir bölgesi (özellikle Berlin'de)",
    "der Austauschstudent": "Değişim öğrencisi",
    "das Wohnheim": "Öğrenci yurdu",
    "etwas beschließen": "Bir şey karar vermek",
    belebt: "İnsanlarla dolu, canlı",
    "etwas spüren": "Bir şey hissetmek/algılamak",
    direkt: "Doğrudan, hemen",
    "die Atmosphäre": "Atmosfer, hava, ortam",
    unterschiedlich: "Farklı, çeşitli",
    "der Hintergrund, -gründe": "Burada: köken, çevre, arka plan",
    aufeinandertreffen: "Karşılaşmak, bir araya gelmek",
    "die Diversität": "Çeşitlilik",
    bekannt: "Tanıdık, bilinen",
    "der Klotz, Klötze": "Büyük, biçimsiz bina",
    "der Beton, s": "Çimento, su ve kumdan yapılan çok sert yapı malzemesi",
    fragend: "Sorgulayarak, merakla",
    "der Nachtclub": "Gece kulübü",
    "die Gegend, en": "Çevre, mahalle",
    "jemanden angrinsen": "Birine genişçe gülümseyerek bakmak",
    "die Schlange, n": "Burada: bekleyen insanların uzun sırası",
    "jemanden abweisen": "Birini reddetmek, birini içeri almamak",
    unglaublich: "İnanılmaz",
    scherzen: "Şaka yapmak, komik bir şey söylemek",
    "die Bibliothek": "Kütüphane",
    "etwas erreichen": "Burada: bir yere varmak",
    "der Hausmeister": "Apartman görevlisi",
    warten: "Beklemek",
    "der Schlüssel": "Anahtar",
    "der Aufenthalt, e": "Bir yerde geçirilen sınırlı süre",
    ausreichend: "Yeterli, kâfi",
    ausruhen: "Dinlenmek",
    "das Viertel": "Semt, mahalle",
    "der Kommilitone, n": "Birlikte öğrenim görülen kişi, okul arkadaşı",
    "in Ruhe": "Rahatça, acele etmeden",
    auspacken: "Bavul açmak, yerleşmek",
    "sich frisch machen": "Üstünü değiştirmek, hazırlanmak",
    schlendern: "Rahatça ve amaçsızca dolaşmak",
    "etwas erkunden": "Bir şeyi keşfetmek/tanımak",
    begeistert: "Coşkulu, bir şeyi harika bulan",
    "das Denkmal, Denkmäler":
      "Bir kişiyi veya (tarihi) bir olayı anmak için yapılan anıt",
    "etwas befestigen": "Bir şeyi sabitlemek/takmak",
    "das Reisetagebuch": "Seyahat günlüğü",
    aufschreiben: "Yazmak, not etmek",
    "etwas erleben": "Deneyim yaşamak",
    "etwas festhalten": "Burada: bir şeyi yazmak",
    entgegnen: "Cevap vermek, karşılık vermek",
    gemütlich: "Rahat, konforlu",
    bestellen: "Sipariş vermek",
    vorbeigehend: "Geçip giden",
    "sich austauschen": "Sohbet etmek, fikir alışverişinde bulunmak",
    "der Traum": "Hayal, rüya",
    "die Hoffnung": "Umut, beklenti",
    gespannt: "Meraklı, beklenti dolu",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Kapitel 2 - Unser Kiez</h1>

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
          <span className="text-red-600">Mit</span> ihren Koffern{" "}
          <span className="text-red-600">in</span> der Hand{" "}
          <span className="font-bold text-black">steigen</span> die zwei{" "}
          <span className="text-blue-600">austauschstudenten</span>{" "}
          <span className="text-red-600">am</span> Berliner Ostbahnhof{" "}
          <span className="font-bold text-black">aus</span> und{" "}
          <span className="font-bold text-black">machen</span> sich{" "}
          <span className="font-bold text-black">auf</span> den Weg{" "}
          <span className="text-red-600">zu</span> ihrem{" "}
          <span className="text-blue-600">neuen</span> Zuhause. Es{" "}
          <span className="font-bold text-black">sind</span> nur 250 Meter{" "}
          <span className="text-red-600">bis zu</span> ihrem Wohnheim,
          <span className="text-green-600 font-medium">
            {" "}
            sodass sie <span className="font-bold text-black">beschließen</span>
            , <span className="text-red-600">zu</span> Fuß{" "}
            <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">gehen</span>.
          </span>
          Die Straßen <span className="font-bold text-black">sind</span>{" "}
          <span className="text-blue-600">belebt</span> und man{" "}
          <span className="font-bold text-black">spürt</span> direkt eine{" "}
          <span className="text-blue-600">besondere</span> Atmosphäre. Menschen{" "}
          <span className="text-blue-600">unterschiedlicher</span> Kulturen und
          Hintergründe <span className="font-bold text-black">treffen</span>{" "}
          hier <span className="font-bold text-black">aufeinander</span> und{" "}
          <span className="font-bold text-black">machen</span> die Stadt{" "}
          <span className="text-red-600">zu</span> einem Zentrum der Diversität.
        </p>

        <p className="mb-4">
          „Dieses Gebäude <span className="font-bold text-black">kommt</span>{" "}
          mir <span className="text-blue-600">bekannt</span> vor, aber ich{" "}
          <span className="font-bold text-black">weiß</span> nicht,
          <span className="text-green-600 font-medium">
            {" "}
            wo ich es schon mal{" "}
            <span className="font-bold text-black">gesehen</span>{" "}
            <span className="font-bold text-black">habe</span>."
          </span>
          Carl <span className="font-bold text-black">bleibt</span>{" "}
          <span className="text-red-600">vor</span> einem{" "}
          <span className="text-blue-600">hohen</span> Klotz{" "}
          <span className="text-red-600">aus</span> Beton{" "}
          <span className="font-bold text-black">stehen</span> und{" "}
          <span className="font-bold text-black">schaut</span>{" "}
          <span className="text-blue-600">fragend</span>{" "}
          <span className="text-red-600">am</span> Gebäude hoch. Astrid{" "}
          <span className="font-bold text-black">dreht</span> sich{" "}
          <span className="text-red-600">zu</span> ihm und{" "}
          <span className="font-bold text-black">lacht</span>. „Das{" "}
          <span className="font-bold text-black">ist</span> das Berghain, einer
          der <span className="text-blue-600">bekanntesten</span> Nachtclubs{" "}
          <span className="text-red-600">in</span> ganz Deutschland",{" "}
          <span className="font-bold text-black">erklärt</span> sie.
        </p>

        <p className="mb-4">
          „Wow, dann <span className="font-bold text-black">wohnen</span> wir ja{" "}
          <span className="text-red-600">in</span> der{" "}
          <span className="text-blue-600">besten</span> Gegend,
          <span className="text-green-600 font-medium">
            {" "}
            um feiern <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">gehen</span>!"
          </span>
          Carl <span className="font-bold text-black">grinst</span> Astrid{" "}
          <span className="font-bold text-black">an</span>. „
          <span className="text-green-600 font-medium">
            Wenn sie dich überhaupt{" "}
            <span className="font-bold text-black">rein</span>
            <span className="font-bold text-black">lassen</span>!
          </span>{" "}
          Das Berghain <span className="font-bold text-black">ist</span>{" "}
          <span className="text-blue-600">bekannt</span> dafür,
          <span className="text-green-600 font-medium">
            {" "}
            dass man stundenlang <span className="text-red-600">in</span> der
            Schlange <span className="font-bold text-black">stehen</span>{" "}
            <span className="font-bold text-black">muss</span> und dann{" "}
            <span className="text-red-600">von</span> den Türstehern wieder{" "}
            <span className="text-red-600">nach</span> Hause{" "}
            <span className="font-bold text-black">geschickt</span>{" "}
            <span className="font-bold text-black">wird</span>.
          </span>
          Sogar Elon Musk <span className="font-bold text-black">wurde</span>{" "}
          schon <span className="text-red-600">an</span> der Tür{" "}
          <span className="font-bold text-black">abgewiesen</span>."
        </p>

        <p className="mb-4">
          „Das <span className="font-bold text-black">ist</span> ja{" "}
          <span className="text-blue-600">unglaublich</span>! Dann{" "}
          <span className="font-bold text-black">bleiben</span> wir lieber{" "}
          <span className="text-red-600">in</span> der Bibliothek der
          Universität, dort <span className="font-bold text-black">sind</span>{" "}
          wir bestimmt jederzeit{" "}
          <span className="text-blue-600">willkommen</span>!",{" "}
          <span className="font-bold text-black">scherzt</span> Carl.
        </p>

        <p className="mb-4">
          <span className="text-blue-600">Kurze</span> Zeit später{" "}
          <span className="font-bold text-black">erreichen</span> sie das
          Wohnheim,
          <span className="text-green-600 font-medium">
            {" "}
            wo der Hausmeister Herr Wagner schon{" "}
            <span className="text-red-600">auf</span> die beiden Studenten{" "}
            <span className="font-bold text-black">wartet</span>.
          </span>
          Er <span className="font-bold text-black">zeigt</span> ihnen ihre
          Zimmer und <span className="font-bold text-black">gibt</span> ihnen
          die Schlüssel sowie die{" "}
          <span className="text-blue-600">wichtigsten</span> Informationen{" "}
          <span className="text-red-600">für</span> ihren Aufenthalt. Die{" "}
          <span className="text-blue-600">kleinen</span> Wohnungen{" "}
          <span className="font-bold text-black">sind</span>{" "}
          <span className="text-blue-600">einfach</span>, aber{" "}
          <span className="text-red-600">für</span> die beiden völlig{" "}
          <span className="text-blue-600">ausreichend</span>.
        </p>

        <p className="mb-4">
          „<span className="font-bold text-black">Sollen</span> wir uns kurz{" "}
          <span className="font-bold text-black">ausruhen</span> und dann noch
          ein bisschen <span className="font-bold text-black">rausgehen</span>?
          Ich <span className="font-bold text-black">würde</span> gerne unser
          Viertel ein bisschen{" "}
          <span className="font-bold text-black">kennenlernen</span>",{" "}
          <span className="font-bold text-black">fragt</span> Astrid ihren
          Kommilitonen.
        </p>

        <p className="mb-4">
          „<span className="text-blue-600">Gute</span> Idee, so{" "}
          <span className="text-red-600">um</span> 18 Uhr? Dann{" "}
          <span className="font-bold text-black">haben</span> wir eine{" "}
          <span className="text-blue-600">gute</span> Stunde,
          <span className="text-green-600 font-medium">
            {" "}
            um <span className="text-red-600">in</span> Ruhe{" "}
            <span className="font-bold text-black">auszupacken</span> und uns
            frisch <span className="text-red-600">zu</span>{" "}
            <span className="font-bold text-black">machen</span>
          </span>
          ", <span className="font-bold text-black">antwortet</span> Carl{" "}
          <span className="text-blue-600">zustimmend</span>.
        </p>

        <p className="mb-4">
          <span className="text-green-600 font-medium">
            Als sie <span className="text-red-600">am</span>{" "}
            <span className="text-blue-600">frühen</span> Abend{" "}
            <span className="text-red-600">durch</span> die Straßen{" "}
            <span className="font-bold text-black">schlendern</span> und ihren{" "}
            <span className="text-blue-600">neuen</span> Kiez{" "}
            <span className="font-bold text-black">erkunden</span>,
          </span>
          <span className="font-bold text-black">sind</span> sie{" "}
          <span className="text-red-600">von</span> der Vielfalt der Hauptstadt{" "}
          <span className="text-blue-600">begeistert</span>. Jedes Gebäude, jede
          Straße und jedes Denkmal{" "}
          <span className="font-bold text-black">erzählt</span> eine{" "}
          <span className="text-blue-600">eigene</span> Geschichte und sie{" "}
          <span className="font-bold text-black">erkennen</span>{" "}
          <span className="text-blue-600">viele</span> Orte wieder,
          <span className="text-green-600 font-medium">
            {" "}
            die sie bereits zuhause{" "}
            <span className="font-bold text-black">recherchiert</span>{" "}
            <span className="font-bold text-black">haben</span>.
          </span>
        </p>

        <p className="mb-4">
          Astrid <span className="font-bold text-black">zieht</span> ein{" "}
          <span className="text-blue-600">kleines</span> Notizbuch{" "}
          <span className="text-red-600">aus</span> der Tasche,
          <span className="text-green-600 font-medium">
            {" "}
            <span className="text-red-600">an</span> dem ein Kuli{" "}
            <span className="font-bold text-black">befestigt</span>{" "}
            <span className="font-bold text-black">ist</span>.
          </span>
          „Was <span className="font-bold text-black">ist</span> das?",{" "}
          <span className="font-bold text-black">will</span> Carl{" "}
          <span className="font-bold text-black">wissen</span>.
        </p>

        <p className="mb-4">
          „Mein Reisetagebuch. Ich{" "}
          <span className="font-bold text-black">wollte</span> schon immer mal{" "}
          <span className="font-bold text-black">aufschreiben</span>,
          <span className="text-green-600 font-medium">
            {" "}
            was ich so <span className="font-bold text-black">
              sehe
            </span> und <span className="font-bold text-black">erlebe</span>.
          </span>
          Der <span className="text-blue-600">heutige</span> Tag{" "}
          <span className="font-bold text-black">wird</span> natürlich direkt{" "}
          <span className="font-bold text-black">festgehalten</span>!",{" "}
          <span className="font-bold text-black">sagt</span> sie{" "}
          <span className="text-blue-600">aufgeregt</span>{" "}
          <span className="text-red-600">zu</span> ihm.
        </p>

        <p className="mb-4">
          „Das <span className="font-bold text-black">ist</span> eine{" "}
          <span className="text-blue-600">schöne</span> Idee, das{" "}
          <span className="font-bold text-black">sollte</span> ich auch{" "}
          <span className="font-bold text-black">machen</span>!",{" "}
          <span className="font-bold text-black">entgegnet</span> er{" "}
          <span className="text-blue-600">motiviert</span>.
        </p>

        <p className="mb-4">
          Die beiden <span className="font-bold text-black">setzen</span> sich{" "}
          <span className="text-red-600">in</span> ein{" "}
          <span className="text-blue-600">gemütliches</span> Restaurant{" "}
          <span className="text-red-600">ans</span> Fenster und{" "}
          <span className="font-bold text-black">bestellen</span> sich etwas{" "}
          <span className="text-red-600">zu</span> essen. Sie{" "}
          <span className="font-bold text-black">beobachten</span> die{" "}
          <span className="text-blue-600">vorbeigehenden</span> Menschen,
          <span className="text-green-600 font-medium">
            {" "}
            während sie sich <span className="text-red-600">über</span> ihre
            Träume und Hoffnungen der{" "}
            <span className="text-blue-600">kommenden</span> Monate{" "}
            <span className="font-bold text-black">austauschen</span>.
          </span>
          Dies <span className="font-bold text-black">ist</span> der Beginn
          ihrer Reise, ihr <span className="text-blue-600">erstes</span>{" "}
          Kapitel, und sie <span className="font-bold text-black">sind</span>{" "}
          <span className="text-blue-600">gespannt</span>{" "}
          <span className="text-red-600">auf</span> all das,
          <span className="text-green-600 font-medium">
            {" "}
            was sie <span className="text-red-600">in</span> Berlin noch{" "}
            <span className="font-bold text-black">erwartet</span>.
          </span>
        </p>
      </div>
    </div>
  );
}
