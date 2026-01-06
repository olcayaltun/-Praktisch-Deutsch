import { useState } from "react";
import React from "react";

export default function DieSucheNachEinemZuhause() {
  const [showLegend, setShowLegend] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);

  const dictionary = {
    "die Vorlesung, -en": "Ders, konferans",
    "die Mensa, -Mensen": "Üniversite yemekhanesi",
    "der Campus": "Üniversite yerleşkesi",
    "die Temperatur, -en": "Sıcaklık",
    "die Winterjacke, -n": "Kış montu",
    "der Schal, -s": "Atkı",
    "das Gebäude, -": "Bina",
    beheizt: "Isıtılmış",
    frieren: "Üşümek",
    "das Problem, -e": "Problem",
    "der Wasserschaden, -schäden": "Su hasarı",
    renovieren: "Yenilemek, tadilat yapmak",
    "der Mitbewohner, -": "Ev arkadaşı",
    ausziehen: "Taşınmak",
    "der Vermieter, -": "Ev sahibi",
    "die Alternative, -n": "Alternatif",
    legal: "Yasal",
    verzweifelt: "Çaresiz, umutsuz",
    "die Miete, -n": "Kira",
    "der Wohnungsmarkt": "Konut piyasası",
    umkämpft: "Rekabetçi",
    "die Anzeige, -n": "İlan",
    "die Anfrage, -n": "Sorgu, talep",
    "das Zimmer, -": "Oda",
    "die Terrasse, -n": "Teras",
    "der Vertrag, -träge": "Sözleşme",
    verantwortlich: "Sorumlu",
    "das Risiko, -ken": "Risk",
    "der Unbekannte, -n": "Bilinmeyen kişi",
    "im Stich lassen": "Yüzüstü bırakmak",
    "das Wohnheim, -e": "Öğrenci yurdu",
    "der Tapetenwechsel": "Değişiklik, farklı bir ortam",
    versichern: "Teminat vermek, söz vermek",
    "die Rettung": "Kurtuluş",
    umarmen: "Sarılmak",
    "das Herz, -en": "Kalp, merkez",
    "der Holzboden": "Ahşap zemin",
    "der Innenhof, -höfe": "Avlu",
    "der Einzug": "Taşınma",
    "die Lasagne, -n": "Lazanya",
    "die Köstlichkeit, -en": "Lezzetli şey",
    bereits: "schon",
    deutlich: "klar, genau",
    frieren: "ein Gefühl der Kälte haben, jemandem ist kalt",
    bedrückt: "traurig, deprimiert",
    "der Ausdruck, Ausdrücke (Plural selten)":
      "die Miene/das Gesicht zeigt ein bestimmtes Gefühl",
    besorgt: "voller Sorge, unruhig",
    "der Schaden, Schäden": "der Defekt, die Beschädigung",
    verzweifelt: "hoffnungslos",
    steigen: "hier: teurer werden, sich erhöhen",
    "die Anfrage, -n": "die Bitte um Information, hier auch: die Bewerbung",
    "sich (D) etwas (A) (nicht) leisten können":
      "(nicht) die finanziellen Mittel für etwas haben",
    geräumig: "mit viel Platz",
    verantwortlich:
      "wenn man die Verantwortung für etwas hat und sich z.B. um mögliche Konsequenzen von etwas kümmern muss",
    "jemanden im Stich lassen":
      "jemanden in einer schwierigen Situation nicht unterstützen",
    nicken: "den Kopf nach oben und unten bewegen, um jemandem zuzustimmen",
    "der Tapetenwechsel, -": "die Änderung der gewohnten Umgebung",
    "jemandem vertrauen":
      "sicher sein, dass man sich auf jemanden verlassen kann und dass diese Person immer da ist",
    "jemanden hängen lassen": "jemanden im Stich lassen",
    "jemandem etwas versichern": "jemandem etwas sicher zusagen",
    "etwas mitbekommen": "etwas (zufällig) hören",
    "jemanden umarmen": "die Arme um jemanden legen",
    "jemandem zuzwinkern":
      "jemanden ansehen und dabei ein Auge schnell schließen und wieder öffnen",
    "im Herzen": "im Zentrum",
    "die Decke, -n": "der obere Teil eines Raums",
    "das Holz, Hölzer":
      "das Material, das man aus Bäumen gewinnt und das z.B. zum Bauen genutzt wird",
    je: "bis jetzt",
    "die Köstlichkeit, -en": "etwas, was sehr lecker schmeckt, die Delikatesse",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">DIE SUCHE NACH EINEM ZUHAUSE</h1>

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
          Zwei weitere Wochen{" "}
          <span className="font-bold text-black">vergehen</span>,{" "}
          <span className="text-green-600 font-medium">
            in denen die drei{" "}
            <span className="text-blue-600">internationalen</span>{" "}
            Austauschstudenten sich intensiv{" "}
            <span className="text-red-600">mit</span> ihrem Geschichtsstudium{" "}
            <span className="font-bold text-black">beschäftigen</span>.
          </span>{" "}
          Es <span className="font-bold text-black">ist</span> bereits Mitte
          November und man <span className="font-bold text-black">merkt</span>{" "}
          deutlich,{" "}
          <span className="text-green-600 font-medium">
            wie die Temperaturen <span className="text-red-600">von</span> Tag{" "}
            <span className="text-red-600">zu</span> Tag{" "}
            <span className="font-bold text-black">sinken</span>.
          </span>{" "}
          <span className="text-red-600">Mit</span>{" "}
          <span className="text-blue-600">Winterjacke</span> und{" "}
          <span className="text-blue-600">Schal</span>{" "}
          <span className="font-bold text-black">laufen</span> die Studenten{" "}
          <span className="text-red-600">über</span> den Campus. Zum Glück{" "}
          <span className="font-bold text-black">sind</span> alle Gebäude{" "}
          <span className="text-blue-600">beheizt</span>,{" "}
          <span className="text-green-600 font-medium">
            sodass niemand <span className="font-bold text-black">frieren</span>{" "}
            <span className="font-bold text-black">muss</span>.
          </span>
        </p>

        <p className="mb-4">
          <span className="text-green-600 font-medium">
            Nachdem die Vorlesungen <span className="text-red-600">an</span>{" "}
            diesem Tag <span className="font-bold text-black">beendet</span>{" "}
            <span className="font-bold text-black">sind</span>,
          </span>{" "}
          <span className="font-bold text-black">treffen</span> die drei Freunde
          sich <span className="text-red-600">in</span> der Mensa,{" "}
          <span className="text-green-600 font-medium">
            um gemeinsam <span className="font-bold text-black">zu</span>{" "}
            <span className="font-bold text-black">essen</span>.
          </span>{" "}
          Luisa <span className="font-bold text-black">hat</span> schon den
          ganzen Morgen einen <span className="text-blue-600">bedrückten</span>{" "}
          Ausdruck <span className="text-red-600">im</span> Gesicht und{" "}
          <span className="font-bold text-black">spricht</span> nur wenig. „
          <span className="font-bold text-black">Ist</span> alles okay, Luisa?",{" "}
          <span className="font-bold text-black">fragt</span> Astrid sie{" "}
          <span className="text-blue-600">besorgt</span>. „Du{" "}
          <span className="font-bold text-black">bist</span> heute so still."
        </p>

        <p className="mb-4">
          „Ich <span className="font-bold text-black">habe</span> ein{" "}
          <span className="text-blue-600">großes</span> Problem. Die Wohnung,{" "}
          <span className="text-green-600 font-medium">
            in der ich ein Zimmer{" "}
            <span className="font-bold text-black">gemietet</span>{" "}
            <span className="font-bold text-black">habe</span>,
          </span>{" "}
          <span className="font-bold text-black">hat</span> einen{" "}
          <span className="text-blue-600">Wasserschaden</span> und{" "}
          <span className="font-bold text-black">muss</span> komplett{" "}
          <span className="font-bold text-black">renoviert</span>{" "}
          <span className="font-bold text-black">werden</span>. Meine
          Mitbewohner und ich{" "}
          <span className="font-bold text-black">müssen</span> zum Ende des
          Monats <span className="font-bold text-black">ausziehen</span> und der
          Vermieter <span className="font-bold text-black">kann</span> uns keine{" "}
          <span className="text-blue-600">passende</span> Alternative{" "}
          <span className="font-bold text-black">anbieten</span>." „Das{" "}
          <span className="font-bold text-black">ist</span> ja schrecklich!{" "}
          <span className="font-bold text-black">Ist</span> das überhaupt
          legal?", Carl <span className="font-bold text-black">ist</span>{" "}
          <span className="text-blue-600">schockiert</span>. „Ich{" "}
          <span className="font-bold text-black">habe</span> keine Ahnung, aber
          ich <span className="font-bold text-black">will</span>{" "}
          <span className="text-red-600">im</span> Winter bestimmt nicht{" "}
          <span className="text-red-600">auf</span> der Straße{" "}
          <span className="font-bold text-black">leben</span>.{" "}
          <span className="font-bold text-black">Wisst</span> ihr, wie{" "}
          <span className="text-blue-600">schwierig</span> es{" "}
          <span className="font-bold text-black">ist</span>,{" "}
          <span className="text-red-600">in</span> Berlin eine Wohnung{" "}
          <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">finden</span>?" Luisa{" "}
          <span className="font-bold text-black">klingt</span>{" "}
          <span className="text-blue-600">verzweifelt</span>.
        </p>

        <p className="mb-4">
          Die Mieten <span className="text-red-600">in</span> der Stadt{" "}
          <span className="font-bold text-black">sind</span>{" "}
          <span className="text-red-600">in</span> den{" "}
          <span className="text-blue-600">letzten</span> Jahren{" "}
          <span className="text-blue-600">extrem</span>{" "}
          <span className="font-bold text-black">gestiegen</span>, und der
          Wohnungsmarkt <span className="font-bold text-black">ist</span>{" "}
          <span className="text-blue-600">hart</span>{" "}
          <span className="font-bold text-black">umkämpft</span>.{" "}
          <span className="text-green-600 font-medium">
            Sobald eine Anzeige <span className="text-red-600">für</span> eine
            Wohnung online{" "}
            <span className="font-bold text-black">gestellt</span>{" "}
            <span className="font-bold text-black">wird</span>,
          </span>{" "}
          <span className="font-bold text-black">gibt</span> es{" "}
          <span className="text-red-600">innerhalb</span>{" "}
          <span className="text-red-600">von</span> einer Stunde mindestens
          einhundert Anfragen. „Und jetzt?",{" "}
          <span className="font-bold text-black">will</span> Astrid{" "}
          <span className="font-bold text-black">wissen</span>. „Der Vermieter{" "}
          <span className="font-bold text-black">hat</span> uns eine Wohnung als
          Alternative <span className="font-bold text-black">angeboten</span>,
          aber meine beiden Mitbewohner{" "}
          <span className="font-bold text-black">ziehen</span> entweder{" "}
          <span className="text-red-600">zu</span> ihrem Partner oder{" "}
          <span className="text-red-600">zurück</span>{" "}
          <span className="text-red-600">zu</span> ihren Eltern. Also{" "}
          <span className="font-bold text-black">stehe</span> ich jetzt allein{" "}
          <span className="text-red-600">mit</span> einer 3-Zimmer-Wohnung da,{" "}
          <span className="text-green-600 font-medium">
            die ich mir nicht{" "}
            <span className="font-bold text-black">leisten</span>{" "}
            <span className="font-bold text-black">kann</span>.
          </span>{" "}
          Die Wohnung <span className="font-bold text-black">ist</span> wirklich{" "}
          <span className="text-blue-600">schön</span> und{" "}
          <span className="text-blue-600">geräumig</span> und{" "}
          <span className="font-bold text-black">hat</span> sogar eine
          Terrasse."
        </p>

        <p className="mb-4">
          „Und wieso <span className="font-bold text-black">suchst</span> du dir
          nicht zwei <span className="text-blue-600">neue</span> Mitbewohner?",{" "}
          <span className="font-bold text-black">fragt</span> Carl. „
          <span className="text-green-600 font-medium">
            Weil der Vermieter mir nur eine Woche Zeit{" "}
            <span className="font-bold text-black">gibt</span>,{" "}
            <span className="text-red-600">um</span> den Vertrag{" "}
            <span className="font-bold text-black">zu</span>{" "}
            <span className="font-bold text-black">unterschreiben</span>
          </span>{" "}
          und ich außerdem allein{" "}
          <span className="text-blue-600">verantwortlich</span>{" "}
          <span className="font-bold text-black">wäre</span>. Ich{" "}
          <span className="font-bold text-black">will</span> dieses Risiko nicht{" "}
          <span className="text-red-600">mit</span>{" "}
          <span className="text-blue-600">Unbekannten</span>{" "}
          <span className="font-bold text-black">eingehen</span>,{" "}
          <span className="text-green-600 font-medium">
            die mich dann später vielleicht{" "}
            <span className="text-red-600">im</span> Stich{" "}
            <span className="font-bold text-black">lassen</span>.
          </span>{" "}
          Ich <span className="font-bold text-black">könnte</span> es mir nicht
          einmal einen Monat lang{" "}
          <span className="font-bold text-black">leisten</span>, die Wohnung
          allein <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">bezahlen</span>."
        </p>

        <p className="mb-4">
          Carl und Astrid <span className="font-bold text-black">schauen</span>{" "}
          sich einen Moment lang <span className="text-red-600">in</span> die
          Augen, danach <span className="font-bold text-black">nicken</span>{" "}
          sie. „Luisa, wir <span className="font-bold text-black">werden</span>{" "}
          deine <span className="text-blue-600">neuen</span> Mitbewohner. Unsere
          Zimmer <span className="text-red-600">im</span> Wohnheim{" "}
          <span className="font-bold text-black">sind</span> sehr{" "}
          <span className="text-blue-600">klein</span> und ein{" "}
          <span className="text-blue-600">Tapetenwechsel</span>{" "}
          <span className="font-bold text-black">tut</span> uns sicher gut.
          Außerdem <span className="font-bold text-black">verstehen</span> wir
          drei uns prima und du{" "}
          <span className="font-bold text-black">kannst</span> uns{" "}
          <span className="font-bold text-black">vertrauen</span>. Wir{" "}
          <span className="font-bold text-black">werden</span> dich nicht{" "}
          <span className="font-bold text-black">hängen</span>{" "}
          <span className="font-bold text-black">lassen</span>",{" "}
          <span className="font-bold text-black">versichert</span> Astrid ihrer
          Freundin <span className="text-red-600">mit</span> einem{" "}
          <span className="text-blue-600">warmen</span> Lächeln.
        </p>

        <p className="mb-4">
          „Das <span className="font-bold text-black">würdet</span> ihr{" "}
          <span className="text-red-600">für</span> mich{" "}
          <span className="font-bold text-black">tun</span>? So etwas{" "}
          <span className="text-blue-600">Tolles</span>{" "}
          <span className="font-bold text-black">hat</span> noch niemand{" "}
          <span className="text-red-600">für</span> mich{" "}
          <span className="font-bold text-black">gemacht</span>, Tausend Dank!
          Ihr <span className="font-bold text-black">seid</span> meine
          Rettung!", <span className="font-bold text-black">ruft</span> Luisa,{" "}
          <span className="text-green-600 font-medium">
            sodass die ganze Mensa es{" "}
            <span className="font-bold text-black">mitbekommt</span>.
          </span>{" "}
          Sie <span className="font-bold text-black">umarmt</span> die beiden{" "}
          <span className="text-red-600">vor</span> Glück. „Das{" "}
          <span className="font-bold text-black">machen</span> wir gerne. Wir{" "}
          <span className="font-bold text-black">tun</span> das auch{" "}
          <span className="text-red-600">für</span> uns, schließlich{" "}
          <span className="font-bold text-black">hört</span> sich die Wohnung{" "}
          <span className="text-blue-600">fantastisch</span>{" "}
          <span className="font-bold text-black">an</span>!",{" "}
          <span className="font-bold text-black">entgegnet</span> Carl{" "}
          <span className="text-blue-600">lachend</span> und{" "}
          <span className="font-bold text-black">zwinkert</span> der{" "}
          <span className="text-blue-600">Italienerin</span>{" "}
          <span className="font-bold text-black">zu</span>.
        </p>

        <p className="mb-4">
          Eine Woche später{" "}
          <span className="font-bold text-black">beziehen</span> die drei
          Geschichtsstudenten ihre <span className="text-blue-600">neue</span>{" "}
          Wohnung. Sie <span className="font-bold text-black">liegt</span>{" "}
          <span className="text-red-600">im</span>{" "}
          <span className="text-blue-600">Herzen</span> Charlottenburgs,{" "}
          <span className="text-blue-600">unweit</span>{" "}
          <span className="text-red-600">vom</span> Campus{" "}
          <span className="font-bold text-black">entfernt</span>. Die{" "}
          <span className="text-blue-600">hohen</span> Decken, der{" "}
          <span className="text-blue-600">schöne</span> Holzboden und der Blick{" "}
          <span className="text-red-600">auf</span> einen{" "}
          <span className="text-blue-600">ruhigen</span> Innenhof{" "}
          <span className="text-red-600">mit</span> einem{" "}
          <span className="text-blue-600">kleinen</span> Garten{" "}
          <span className="font-bold text-black">gibt</span> ihnen das Gefühl,
          endlich richtig <span className="text-red-600">in</span> der Stadt{" "}
          <span className="font-bold text-black">angekommen</span>{" "}
          <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">sein</span>.
        </p>

        <p className="mb-4">
          „<span className="text-blue-600">Willkommen</span>{" "}
          <span className="text-red-600">zu</span> Hause!",{" "}
          <span className="font-bold text-black">sagt</span> Luisa{" "}
          <span className="text-red-600">mit</span> einem{" "}
          <span className="text-blue-600">breiten</span> Grinsen{" "}
          <span className="text-red-600">im</span> Gesicht. „Ich{" "}
          <span className="font-bold text-black">werde</span> euch zum Einzug
          die <span className="text-blue-600">beste</span> Lasagne{" "}
          <span className="font-bold text-black">machen</span>,{" "}
          <span className="text-green-600 font-medium">
            die ihr je <span className="font-bold text-black">gegessen</span>{" "}
            <span className="font-bold text-black">habt</span>!"
          </span>
        </p>

        <p className="mb-4">
          Die drei <span className="font-bold text-black">verbringen</span>{" "}
          ihren <span className="text-blue-600">ersten</span> gemeinsamen Abend{" "}
          <span className="text-red-600">mit</span> der{" "}
          <span className="text-blue-600">italienischen</span> Köstlichkeit
          sowie einem Glas Wein und{" "}
          <span className="font-bold text-black">könnten</span> nicht{" "}
          <span className="text-blue-600">glücklicher</span>{" "}
          <span className="font-bold text-black">sein</span>.
        </p>
      </div>
    </div>
  );
}
