import React, { useState } from "react";

const ClickableWord = ({ children, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className="relative inline-block bg-slate-800 text-white px-2 py-1 rounded cursor-pointer font-bold transition-all duration-300 hover:bg-slate-700 hover:scale-105"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-50 shadow-lg">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </span>
  );
};

const LevelBadge = ({ level }) => {
  const badgeClasses = {
    B1: "bg-green-600 text-white",
    B2: "bg-yellow-500 text-slate-900",
    C1: "bg-red-600 text-white",
  };

  return (
    <span
      className={`font-bold px-2 py-1 rounded-full text-xs mr-2 ${badgeClasses[level]}`}
    >
      {level}
    </span>
  );
};

const StoryLevel = ({ level, icon, children, bgColor }) => {
  return (
    <div
      className={`flex items-start p-3 rounded-lg border-l-4 my-3 ${bgColor}`}
    >
      <div className="text-xl mr-3 min-w-[25px]">{icon}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

const StoryBox = ({ story }) => {
  const levelConfigs = {
    B1: { icon: "🟢", bgColor: "bg-green-100 border-green-500" },
    B2: { icon: "🟡", bgColor: "bg-yellow-100 border-yellow-500" },
    C1: { icon: "🔴", bgColor: "bg-red-100 border-red-500" },
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500 shadow-sm">
      <div className="font-bold text-slate-800 text-lg mb-4">
        **{story.title}** - {story.character}
      </div>

      {story.levels.map((levelData, index) => (
        <StoryLevel
          key={index}
          level={levelData.level}
          icon={levelConfigs[levelData.level].icon}
          bgColor={levelConfigs[levelData.level].bgColor}
        >
          <LevelBadge level={levelData.level} />
          {levelData.sentence.map((part, partIndex) => {
            if (typeof part === "string") {
              return <span key={partIndex}>{part}</span>;
            } else {
              return (
                <ClickableWord key={partIndex} tooltip={part.tooltip}>
                  {part.word}
                </ClickableWord>
              );
            }
          })}
        </StoryLevel>
      ))}

      <div className="bg-cyan-50 border-l-4 border-cyan-500 p-3 mt-4 rounded-r-lg italic text-cyan-800">
        <strong>Akılda kalması için:</strong> {story.memoryTip}
      </div>
    </div>
  );
};

export default function GermanStoryLearning() {
  // Veri yapısı - buraya yeni hikayeler eklenebilir
  const stories = [
    {
      title: "Örnek 1: LEBEN",
      character: "Anna, Öğrenci",
      memoryTip: "Anna'nın günü - basit yaşa → resmi var ol → edebi yaşam sür",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "lebt", tooltip: "leben - yaşamak" },
            ' in München: "Ich lebe gerne hier."',
          ],
        },
        {
          level: "B2",
          sentence: [
            'In der Philosophie-Vorlesung sagt sie: "Wir ',
            {
              word: "existieren",
              tooltip:
                "existieren - var olmak (daha resmi, soyut anlamda kullanılır)",
            },
            ' als denkende Wesen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Tagebuch schreibt sie: "Ich ',
            {
              word: "führe ein bescheidenes Dasein",
              tooltip:
                "ein bescheidenes Dasein führen - mütevazı/ölçülü bir yaşam sürmek (edebi)",
            },
            ', aber erfülltes Leben."',
          ],
        },
      ],
    },
    {
      title: "Örnek 2: SAGEN",
      character: "Lisa, Lehrerin",
      memoryTip: "Lisa'nın günü - basit söz → resmi bildiri → edebi ifade",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "sagt", tooltip: "sagen - söylemek" },
            ' zu ihren Schülern: "Die Stunde ist vorbei."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Dann ",
            {
              word: "äußert",
              tooltip: "äußern - ifade etmek, söylemek (daha resmi)",
            },
            ' sie zum Direktor: "Ich möchte die Situation offiziell mitteilen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            "Abends ",
            {
              word: "bringt sie zum Ausdruck",
              tooltip:
                "zum Ausdruck bringen - (bir şeyi) ifade etmek, dile getirmek (edebi)",
            },
            ': "Heute war ein bedeutungsvoller Tag für meine pädagogische Laufbahn."',
          ],
        },
      ],
    },
    {
      title: "Örnek 3: GEHEN",
      character: "Max, Arbeiter",
      memoryTip: "Max'in günü - basit git → keyifli yürü → resmi hareket",
      levels: [
        {
          level: "B1",
          sentence: [
            "Max ",
            { word: "geht", tooltip: "gehen - gitmek" },
            ' zur Arbeit: "Ich gehe jetzt ins Büro."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "In der Mittagspause ",
            {
              word: "geht er spazieren",
              tooltip: "spazieren gehen - yürüyüşe gitmek (detaylı ifade)",
            },
            ': "Ich gehe eine Runde spazieren."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im offiziellen Bericht steht: "Der Mitarbeiter ',
            {
              word: "bewegt sich fort",
              tooltip: "sich fortbewegen - hareket etmek, yol almak (resmi)",
            },
            ' zu seinem Arbeitsplatz."',
          ],
        },
      ],
    },
    {
      title: "Örnek 4: MACHEN",
      character: "Tom, Projektmanager",
      memoryTip:
        "Tom'un günü - basit yap → resmi gerçekleştir → soyut hayata geçir",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tom ",
            { word: "macht", tooltip: "machen - yapmak" },
            ' seine Arbeit: "Ich mache das Projekt fertig."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "führt",
              tooltip: "durchführen - gerçekleştirmek, yapmak (daha resmi)",
            },
            ' die Präsentation durch: "Wir führen die Analyse durch."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Bericht schreibt er: "Wir konnten unsere Vision ',
            {
              word: "verwirklichen",
              tooltip:
                "verwirklichen - gerçekleştirmek, hayata geçirmek (soyut)",
            },
            '."',
          ],
        },
      ],
    },
    {
      title: "Örnek 5: ARBEITEN",
      character: "Sarah, Anwältin",
      memoryTip:
        "Sarah'nın günü - basit çalış → resmi görevli ol → edebi meslek icra et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sarah ",
            { word: "arbeitet", tooltip: "arbeiten - çalışmak" },
            ' in der Kanzlei: "Ich arbeite heute bis spät."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "ist tätig",
              tooltip:
                "tätig sein - görevli olmak, çalışıyor olmak (daha resmi)",
            },
            ' als Rechtsanwältin: "Ich bin im Familienrecht tätig."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Lebenslauf steht: "Sie ',
            {
              word: "geht ihrer Tätigkeit nach",
              tooltip:
                "seiner Tätigkeit nachgehen - mesleğini icra etmek (çok resmi ve edebi)",
            },
            ' als Fachanwältin für Familienrecht."',
          ],
        },
      ],
    },
    {
      title: "Örnek 6: ESSEN",
      character: "Klaus, Patient",
      memoryTip: "Klaus'un günü - basit ye → kibar al → tıbbi besin al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Klaus ",
            { word: "isst", tooltip: "essen - yemek" },
            ' zu Mittag: "Ich esse gerne Pasta."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Im Restaurant ",
            {
              word: "nimmt er zu sich",
              tooltip: "zu sich nehmen - (yiyecek) almak (daha kibar)",
            },
            ': "Ich nehme das Menü zu mir."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Der Arzt notiert: "Der Patient ',
            {
              word: "führt Nahrung zu sich",
              tooltip:
                "Nahrung zu sich führen - besin almak (çok resmi, tıbbi)",
            },
            ' in regelmäßigen Abständen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 7: TRINKEN",
      character: "Maria, Sportlerin",
      memoryTip: "Maria'nın günü - basit iç → resmi tüket → çok resmi al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Maria ",
            { word: "trinkt", tooltip: "trinken - içmek" },
            ' Wasser: "Ich trinke viel Wasser beim Sport."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "konsumiert",
              tooltip: "konsumieren - tüketmek (daha resmi)",
            },
            ' Sportgetränke: "Ich konsumiere isotonische Getränke."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Trainingsbericht steht: "Die Athletin ',
            {
              word: "nimmt Flüssigkeit zu sich",
              tooltip: "zu sich nehmen - (içecek) almak (çok resmi)",
            },
            ' zur Hydratation."',
          ],
        },
      ],
    },
    {
      title: "Örnek 8: SCHLAFEN",
      character: "Peter, Geschäftsmann",
      memoryTip: "Peter'in günü - basit uyu → dinlen → edebi gece dinlenmesi",
      levels: [
        {
          level: "B1",
          sentence: [
            "Peter ",
            { word: "schläft", tooltip: "schlafen - uyumak" },
            ' früh: "Ich schlafe immer vor Mitternacht."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Nach der Arbeit ",
            {
              word: "ruht",
              tooltip: "ruhen - dinlenmek, istirahat etmek",
            },
            ' er sich aus: "Ich ruhe mich eine Stunde aus."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Tagebuch notiert er: "Heute ',
            {
              word: "pflegte ich der Nachtruhe",
              tooltip: "der Nachtruhe pflegen - gece dinlenmesi yapmak (edebi)",
            },
            ' besonders früh."',
          ],
        },
      ],
    },
    {
      title: "Örnek 9: KAUFEN",
      character: "Emma, Kundin",
      memoryTip:
        "Emma'nın günü - basit satın al → resmi edinin → soyut sahip ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Emma ",
            { word: "kauft", tooltip: "kaufen - satın almak" },
            ' ein Auto: "Ich kaufe mir ein neues Auto."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "erwirbt",
              tooltip: "erwerben - satın almak (daha resmi)",
            },
            ' eine Immobilie: "Ich erwerbe eine Eigentumswohnung."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Vertrag steht: "Die Käuferin ',
            {
              word: "eignet sich an",
              tooltip: "sich aneignen - edinmek, sahip olmak (soyut)",
            },
            ' das Eigentum an der Immobilie."',
          ],
        },
      ],
    },
    {
      title: "Örnek 10: VERKAUFEN",
      character: "Hans, Verkäufer",
      memoryTip:
        "Hans'ın günü - basit sat → resmi ticari sat → edebi satışa sun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Hans ",
            { word: "verkauft", tooltip: "verkaufen - satmak" },
            ' Autos: "Ich verkaufe deutsche Autos."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Die Firma ",
            {
              word: "veräußert",
              tooltip: "veräußern - satmak (resmi, ticari)",
            },
            ' Anteile: "Wir veräußern unsere Beteiligung."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Zeitung steht: "Der Händler ',
            {
              word: "bietet feil",
              tooltip: "feilbieten - satışa sunmak (edebi, eski)",
            },
            ' seine Waren auf dem Markt."',
          ],
        },
      ],
    },
    {
      title: "Örnek 11: LERNEN",
      character: "Sophie, Studentin",
      memoryTip:
        "Sophie'nin günü - basit öğren → sistemli öğren → soyut edinin",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sophie ",
            { word: "lernt", tooltip: "lernen - öğrenmek" },
            ' Deutsch: "Ich lerne jeden Tag neue Wörter."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "erlernt",
              tooltip: "erlernen - öğrenmek (daha sistemli)",
            },
            ' eine neue Sprache: "Ich erlerne Chinesisch an der Universität."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Zeugnis steht: "Die Studentin ',
            {
              word: "eignet sich an",
              tooltip: "sich aneignen - edinmek, öğrenmek (soyut)",
            },
            ' komplexe Fachkenntnisse."',
          ],
        },
      ],
    },
    {
      title: "Örnek 12: LEHREN",
      character: "Prof. Weber, Dozent",
      memoryTip:
        "Prof. Weber'in günü - basit öğret → ders ver → akademik bilgi aktar",
      levels: [
        {
          level: "B1",
          sentence: [
            "Prof. Weber ",
            { word: "lehrt", tooltip: "lehren - öğretmek" },
            ' Mathematik: "Ich lehre seit 20 Jahren."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "unterrichtet",
              tooltip: "unterrichten - ders vermek",
            },
            ' Studenten: "Ich unterrichte Analysis."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Profil steht: "Der Professor ',
            {
              word: "vermittelt Wissen",
              tooltip: "Wissen vermitteln - bilgi aktarmak (akademik)",
            },
            ' auf höchstem Niveau."',
          ],
        },
      ],
    },
    {
      title: "Örnek 13: DENKEN",
      character: "Julia, Philosophin",
      memoryTip: "Julia'nın günü - basit düşün → taşın → felsefi yansıt",
      levels: [
        {
          level: "B1",
          sentence: [
            "Julia ",
            { word: "denkt", tooltip: "denken - düşünmek" },
            ' über das Problem: "Ich denke, das ist richtig."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "überlegt",
              tooltip: "überlegen - düşünmek, düşünüp taşınmak",
            },
            ' eine Lösung: "Ich überlege mir eine Alternative."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Essay schreibt sie: "Wir müssen ',
            {
              word: "reflektieren",
              tooltip: "reflektieren - derinlemesine düşünmek (felsefi)",
            },
            ' über die Bedeutung des Seins."',
          ],
        },
      ],
    },
    {
      title: "Örnek 14: VERSTEHEN",
      character: "David, Wissenschaftler",
      memoryTip: "David'in günü - basit anla → kavra → derin idrak et",
      levels: [
        {
          level: "B1",
          sentence: [
            "David ",
            { word: "versteht", tooltip: "verstehen - anlamak" },
            ' die Theorie: "Ich verstehe das Konzept."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "begreift",
              tooltip: "begreifen - kavramak",
            },
            ' die Zusammenhänge: "Ich begreife die Komplexität."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Forschungsbericht notiert er: "Wir ',
            {
              word: "erfassen",
              tooltip: "erfassen - idrak etmek (daha derin anlama)",
            },
            ' die tiefere Bedeutung des Phänomens."',
          ],
        },
      ],
    },
    {
      title: "Örnek 15: FRAGEN",
      character: "Nina, Reporterin",
      memoryTip: "Nina'nın günü - basit sor → araştır → resmi öğrenmeye çalış",
      levels: [
        {
          level: "B1",
          sentence: [
            "Nina ",
            { word: "fragt", tooltip: "fragen - sormak" },
            ' den Minister: "Ich frage Sie direkt."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "erkundigt sich",
              tooltip: "erkundigen - sorgulamak, araştırmak",
            },
            ' nach Details: "Ich erkundige mich nach den Fakten."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Artikel schreibt sie: "Wir ',
            {
              word: "bringen in Erfahrung",
              tooltip: "in Erfahrung bringen - öğrenmeye çalışmak (resmi)",
            },
            ', was wirklich geschehen ist."',
          ],
        },
      ],
    },
    {
      title: "Örnek 16: ANTWORTEN",
      character: "Minister Schmidt",
      memoryTip:
        "Minister'in günü - basit cevap ver → karşılık ver → resmi pozisyon al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Minister Schmidt ",
            { word: "antwortet", tooltip: "antworten - cevap vermek" },
            ' der Presse: "Ich antworte auf alle Fragen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "erwidert",
              tooltip: "erwidern - karşılık vermek",
            },
            ' diplomatisch: "Ich erwidere mit Bedacht."',
          ],
        },
        {
          level: "C1",
          sentence: [
            "In der Pressekonferenz ",
            {
              word: "nimmt er Stellung",
              tooltip: "Stellung nehmen - pozisyon almak (resmi)",
            },
            ' zu den Vorwürfen: "Ich nehme zu den Anschuldigungen Stellung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 17: SEHEN",
      character: "Lena, Touristin",
      memoryTip: "Lena'nın günü - basit gör → fark et → edebi seç",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lena ",
            { word: "sieht", tooltip: "sehen - görmek" },
            ' die Berge: "Ich sehe die Alpen von hier."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "erblickt",
              tooltip: "erblicken - görmek, fark etmek",
            },
            ' einen Adler: "Ich erblicke einen majestätischen Adler."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Reisetagebuch notiert sie: "Ich ',
            {
              word: "gewahre",
              tooltip: "gewahren - fark etmek (edebi)",
            },
            ' die Schönheit der unberührten Natur."',
          ],
        },
      ],
    },
    {
      title: "Örnek 18: HÖREN",
      character: "Musiker Carlos",
      memoryTip: "Carlos'un günü - basit duy → resmi algıla → resmi bilgi al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Carlos ",
            { word: "hört", tooltip: "hören - duymak" },
            ' Musik: "Ich höre klassische Musik."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "vernimmt",
              tooltip: "vernehmen - duymak (resmi)",
            },
            ' die Melodie: "Ich vernehme eine wunderschöne Melodie."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Konzertbericht schreibt er: "Das Publikum ',
            {
              word: "nimmt zur Kenntnis",
              tooltip: "zur Kenntnis nehmen - bilgi almak (resmi)",
            },
            ', dass dies ein historisches Konzert ist."',
          ],
        },
      ],
    },
    {
      title: "Örnek 19: SPRECHEN",
      character: "Diplomatin Fischer",
      memoryTip:
        "Diplomatin'ın günü - basit konuş → sohbet et → resmi görüşme yap",
      levels: [
        {
          level: "B1",
          sentence: [
            "Diplomatin Fischer ",
            { word: "spricht", tooltip: "sprechen - konuşmak" },
            ' drei Sprachen: "Ich spreche fließend Englisch."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "unterhält sich",
              tooltip: "sich unterhalten - sohbet etmek",
            },
            ' mit Kollegen: "Ich unterhalte mich gerne mit internationalen Partnern."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im offiziellen Protokoll steht: "Die Botschafterin ',
            {
              word: "führt ein Gespräch",
              tooltip: "ein Gespräch führen - görüşme yapmak (resmi)",
            },
            ' mit dem Außenminister."',
          ],
        },
      ],
    },
    {
      title: "Örnek 20: HELFEN",
      character: "Arzt Dr. Müller",
      memoryTip:
        "Doktor'un günü - basit yardım et → destekle → resmi yardımda bulun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Dr. Müller ",
            { word: "hilft", tooltip: "helfen - yardım etmek" },
            ' seinen Patienten: "Ich helfe Menschen gesund zu werden."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "unterstützt",
              tooltip: "unterstützen - desteklemek",
            },
            ' die Behandlung: "Ich unterstütze die Genesung mit modernster Medizin."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Krankenhaus-Bericht steht: "Der Chefarzt ',
            {
              word: "leistet Beistand",
              tooltip: "Beistand leisten - yardımda bulunmak (resmi)",
            },
            ' bei komplexen Operationen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 21: GEBEN",
      character: "Großmutter Anna",
      memoryTip: "Büyükanne'nin günü - basit ver → teslim et → edebi nasip et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Großmutter Anna ",
            { word: "gibt", tooltip: "geben - vermek" },
            ' ihren Enkelkindern Geschenke: "Ich gebe euch diese Süßigkeiten."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "überreicht",
              tooltip: "überreichen - teslim etmek",
            },
            ' feierlich das Familienerbstück: "Ich überreiche dir diese Kette."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Testament schreibt sie: "Ich ',
            {
              word: "lasse zuteil werden",
              tooltip: "zuteil werden lassen - nasip etmek (edebi)",
            },
            ' meinen Enkeln meine Weisheit und Liebe."',
          ],
        },
      ],
    },
    {
      title: "Örnek 22: NEHMEN",
      character: "Postbote Klaus",
      memoryTip: "Postbote'nin günü - basit al → teslim al → resmi teslim al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Postbote Klaus ",
            { word: "nimmt", tooltip: "nehmen - almak" },
            ' die Post: "Ich nehme die Briefe mit."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "nimmt entgegen",
              tooltip: "entgegennehmen - teslim almak",
            },
            ' wichtige Sendungen: "Ich nehme das Paket entgegen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Lieferschein steht: "Der Empfänger ',
            {
              word: "nimmt in Empfang",
              tooltip: "in Empfang nehmen - teslim almak (resmi)",
            },
            ' die Sendung am 15. Mai."',
          ],
        },
      ],
    },
    {
      title: "Örnek 23: BRINGEN",
      character: "Kurier Stefan",
      memoryTip: "Kurier'in günü - basit getir → ilet → resmi teslim et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Kurier Stefan ",
            { word: "bringt", tooltip: "bringen - getirmek" },
            ' die Pakete: "Ich bringe die Bestellung."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "überbringt",
              tooltip: "überbringen - iletmek, ulaştırmak",
            },
            ' wichtige Nachrichten: "Ich überbringe Ihnen eine dringende Nachricht."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Versandprotokoll steht: "Der Kurier ',
            {
              word: "stellt zu",
              tooltip: "zustellen - teslim etmek (resmi)",
            },
            ' die Sendung termingerecht."',
          ],
        },
      ],
    },
    {
      title: "Örnek 24: HOLEN",
      character: "Vater Michael",
      memoryTip: "Baba'nın günü - basit al → almaya git → resmi sahiplen",
      levels: [
        {
          level: "B1",
          sentence: [
            "Vater Michael ",
            { word: "holt", tooltip: "holen - almaya gitmek" },
            ' die Kinder: "Ich hole euch von der Schule ab."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "holt ab",
              tooltip: "abholen - almaya gitmek",
            },
            ' das reparierte Auto: "Ich hole das Auto von der Werkstatt ab."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Vertrag steht: "Der Käufer ',
            {
              word: "nimmt in Besitz",
              tooltip: "in Besitz nehmen - sahiplenmek (resmi)",
            },
            ' die Immobilie nach Vertragsabschluss."',
          ],
        },
      ],
    },
    {
      title: "Örnek 25: WARTEN",
      character: "Emma, Doktor",
      memoryTip: "Emma'nın günü - basit bekle → sabırla bekle → edebi bekleyiş",
      levels: [
        {
          level: "B1",
          sentence: [
            "Emma ",
            { word: "wartet", tooltip: "warten - beklemek" },
            ' auf ihren nächsten Patienten: "Ich warte hier auf Sie."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Dann ",
            { word: "wartet sie ab", tooltip: "abwarten - bekleyip görmek" },
            ': "Wir müssen die Testergebnisse abwarten."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In ihrem Tagebuch schreibt sie: "Ich ',
            { word: "harre", tooltip: "harren - sabırla beklemek (edebi)" },
            ' der Dinge, die da kommen werden."',
          ],
        },
      ],
    },
    {
      title: "Örnek 26: SUCHEN",
      character: "Detektiv Klaus",
      memoryTip: "Klaus'un günü - basit ara → ziyaret et → resmi araştır",
      levels: [
        {
          level: "B1",
          sentence: [
            "Klaus ",
            { word: "sucht", tooltip: "suchen - aramak" },
            ' nach Hinweisen: "Ich suche überall nach Spuren."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Dann ",
            {
              word: "sucht er die Zeugen auf",
              tooltip: "aufsuchen - ziyaret etmek, aramak",
            },
            ': "Ich muss alle Zeugen aufsuchen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Polizeibericht steht: "Der Detektiv ',
            {
              word: "stellt Nachforschungen an",
              tooltip: "Nachforschungen anstellen - araştırma yapmak (resmi)",
            },
            ' bezüglich des Vorfalls."',
          ],
        },
      ],
    },
    {
      title: "Örnek 27: FINDEN",
      character: "Archäologe Dr. Weber",
      memoryTip: "Dr. Weber'in günü - basit bul → keşfet → resmi ortaya çıkar",
      levels: [
        {
          level: "B1",
          sentence: [
            "Dr. Weber ",
            { word: "findet", tooltip: "finden - bulmak" },
            ' ein altes Artefakt: "Ich finde hier etwas Interessantes."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Plötzlich ",
            { word: "entdeckt", tooltip: "entdecken - keşfetmek" },
            ' er eine verborgene Kammer: "Wir haben eine neue Kammer entdeckt!"',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im wissenschaftlichen Bericht: "Das Team konnte das verschollene Grab ',
            {
              word: "ausfindig machen",
              tooltip: "ausfindig machen - ortaya çıkarmak (resmi)",
            },
            '."',
          ],
        },
      ],
    },
    {
      title: "Örnek 28: KOMMEN",
      character: "Diplomat Herr Müller",
      memoryTip: "Herr Müller'in günü - basit gel → var → resmi hazır bulun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Müller ",
            { word: "kommt", tooltip: "kommen - gelmek" },
            ' zur Konferenz: "Ich komme pünktlich zum Meeting."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "trifft", tooltip: "eintreffen - varmak, ulaşmak" },
            ' am Flughafen ein: "Unser Flug ist gerade eingetroffen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im protokollarischen Bericht: "Der Botschafter ',
            {
              word: "findet sich",
              tooltip: "sich einfinden - hazır bulunmak (resmi)",
            },
            ' zur vereinbarten Zeit ein."',
          ],
        },
      ],
    },
    {
      title: "Örnek 29: BLEIBEN",
      character: "Tourist Anna",
      memoryTip: "Anna'nın günü - basit kal → geçici dur → resmi bulun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "bleibt", tooltip: "bleiben - kalmak" },
            ' drei Tage in München: "Ich bleibe bis Sonntag hier."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "verweilt", tooltip: "verweilen - kalmak (geçici)" },
            ' im Museum: "Ich verweile gerne bei den Gemälden."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Hotelregister: "Der Gast ',
            { word: "hält sich", tooltip: "sich aufhalten - bulunmak (resmi)" },
            ' derzeit in unserem Haus auf."',
          ],
        },
      ],
    },
    {
      title: "Örnek 30: FAHREN",
      character: "Geschäftsmann Paul",
      memoryTip: "Paul'un günü - basit git → seyahat et → resmi hareket et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Paul ",
            { word: "fährt", tooltip: "fahren - gitmek (araçla)" },
            ' mit dem Auto: "Ich fahre heute nach Berlin."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Für das Projekt ",
            { word: "reist", tooltip: "reisen - seyahat etmek" },
            ' er nach Europa: "Wir reisen geschäftlich nach Paris."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Firmenbericht: "Der Geschäftsführer ',
            { word: "begibt sich", tooltip: "sich begeben - gitmek (resmi)" },
            ' zur internationalen Konferenz."',
          ],
        },
      ],
    },
    {
      title: "Örnek 31: LAUFEN",
      character: "Athlet Marco",
      memoryTip: "Marco'nun günü - basit koş → hızlı koş → edebi acele et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Marco ",
            { word: "läuft", tooltip: "laufen - koşmak" },
            ' jeden Morgen: "Ich laufe gerne im Park."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Beim Wettkampf ",
            { word: "rennt", tooltip: "rennen - koşmak (hızlı)" },
            ' er so schnell wie möglich: "Ich renne um den Sieg."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportbericht: "Der Athlet ',
            { word: "eilt", tooltip: "eilen - acele etmek (edebi)" },
            ' der Ziellinie entgegen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 32: SITZEN",
      character: "Professorin Dr. Schmidt",
      memoryTip: "Dr. Schmidt'in günü - basit otur → yer al → resmi yerleş",
      levels: [
        {
          level: "B1",
          sentence: [
            "Dr. Schmidt ",
            { word: "sitzt", tooltip: "sitzen - oturmak" },
            ' in ihrem Büro: "Ich sitze hier und arbeite."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Im Senat ",
            { word: "nimmt sie Platz", tooltip: "Platz nehmen - yer almak" },
            ': "Bitte nehmen Sie Platz am Konferenztisch."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Universitätsbericht: "Die Professorin ',
            {
              word: "lässt sich nieder",
              tooltip: "sich niederlassen - yerleşmek (resmi)",
            },
            ' am Ehrenplatz."',
          ],
        },
      ],
    },
    {
      title: "Örnek 33: STEHEN",
      character: "Wächter Hans",
      memoryTip: "Hans'ın günü - basit dur → ayağa kalk → resmi pozisyon al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Hans ",
            { word: "steht", tooltip: "stehen - ayakta durmak" },
            ' vor dem Gebäude: "Ich stehe hier Wache."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Bei der Zeremonie ",
            { word: "erhebt er sich", tooltip: "sich erheben - ayağa kalkmak" },
            ': "Alle erheben sich zur Nationalhymne."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sicherheitsbericht: "Der Wächter ',
            {
              word: "positioniert sich",
              tooltip: "sich positionieren - pozisyon almak (resmi)",
            },
            ' strategisch am Eingang."',
          ],
        },
      ],
    },
    {
      title: "Örnek 34: LIEGEN",
      character: "Patient Herr Klein",
      memoryTip: "Herr Klein'in günü - basit yat → uzanmak → edebi dinlen",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Klein ",
            { word: "liegt", tooltip: "liegen - yatmak, uzanmak" },
            ' im Krankenbett: "Ich liege hier und ruhe mich aus."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Nach der Operation ",
            { word: "legt er sich hin", tooltip: "sich hinlegen - uzanmak" },
            ': "Ich muss mich jetzt hinlegen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arztbericht: "Der Patient ',
            { word: "ruht", tooltip: "ruhen - dinlenmek (edebi)" },
            ' friedlich in seinem Bett."',
          ],
        },
      ],
    },
    {
      title: "Örnek 35: ÖFFNEN",
      character: "Bibliothekar Herr Wolf",
      memoryTip: "Herr Wolf'un günü - basit aç → aç → soyut erişilebilir kıl",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Wolf ",
            { word: "öffnet", tooltip: "öffnen - açmak" },
            ' die Bibliothek: "Ich öffne um 9 Uhr."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "macht", tooltip: "aufmachen - açmak" },
            ' alle Türen auf: "Ich mache alle Räume auf."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Jahresbericht: "Die Bibliothek ',
            {
              word: "erschließt",
              tooltip: "erschließen - erişilebilir kılmak (soyut)",
            },
            ' neue Wissensgebiete für die Öffentlichkeit."',
          ],
        },
      ],
    },
    {
      title: "Örnek 36: SCHLIEßEN",
      character: "Ladenbesitzer Frau Bauer",
      memoryTip: "Frau Bauer'in günü - basit kapat → kapat → resmi engelle",
      levels: [
        {
          level: "B1",
          sentence: [
            "Frau Bauer ",
            { word: "schließt", tooltip: "schließen - kapatmak" },
            ' ihren Laden: "Ich schließe um 18 Uhr."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Abends ",
            { word: "macht sie zu", tooltip: "zumachen - kapatmak" },
            ': "Ich mache jetzt alle Fenster zu."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sicherheitsbericht: "Die Geschäftsinhaberin ',
            { word: "versperrt", tooltip: "versperren - engellemek (resmi)" },
            ' den Zugang ordnungsgemäß."',
          ],
        },
      ],
    },
    {
      title: "Örnek 37: BEGINNEN",
      character: "Projektmanager Lisa",
      memoryTip: "Lisa'nın günü - basit başla → başla → resmi ele al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "beginnt", tooltip: "beginnen - başlamak" },
            ' das neue Projekt: "Wir beginnen heute mit der Planung."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Das Team ",
            { word: "fängt an", tooltip: "anfangen - başlamak" },
            ' zu arbeiten: "Wir fangen sofort an."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Statusbericht: "Das Team ',
            {
              word: "nimmt das Projekt in Angriff",
              tooltip: "in Angriff nehmen - ele almak (resmi)",
            },
            ' mit großer Entschlossenheit."',
          ],
        },
      ],
    },
    {
      title: "Örnek 38: BEENDEN",
      character: "Chirurg Dr. Hoffmann",
      memoryTip:
        "Dr. Hoffmann'ın günü - basit bitir → tamamla → resmi sonuca ulaştır",
      levels: [
        {
          level: "B1",
          sentence: [
            "Dr. Hoffmann ",
            { word: "beendet", tooltip: "beenden - bitirmek" },
            ' die Operation: "Ich beende jetzt den Eingriff."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "schließt", tooltip: "abschließen - tamamlamak" },
            ' die Behandlung ab: "Wir schließen die Therapie erfolgreich ab."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Operationsbericht: "Der Chirurg ',
            {
              word: "bringt den Eingriff zum Abschluss",
              tooltip: "zum Abschluss bringen - sonuca ulaştırmak (resmi)",
            },
            ' mit vollständigem Erfolg."',
          ],
        },
      ],
    },
    {
      title: "Örnek 39: AUFHÖREN",
      character: "Raucher Herr Braun",
      memoryTip: "Herr Braun'un günü - basit dur → durdur → edebi vazgeç",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Braun ",
            { word: "hört auf", tooltip: "aufhören - durmak, bırakmak" },
            ' zu rauchen: "Ich höre mit dem Rauchen auf."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "stellt", tooltip: "einstellen - durdurmak" },
            ' das Rauchen ein: "Ich stelle das Rauchen komplett ein."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Tagebuch: "Heute ',
            {
              word: "lasse ich von dieser Gewohnheit ab",
              tooltip: "von etwas ablassen - bir şeyden vazgeçmek (edebi)",
            },
            ', die mich so lange gefangen hielt."',
          ],
        },
      ],
    },
    {
      title: "Örnek 40: WERDEN",
      character: "Künstlerin Marie",
      memoryTip: "Marie'nin günü - basit ol → gelişmek → soyut açılmak",
      levels: [
        {
          level: "B1",
          sentence: [
            "Marie ",
            { word: "wird", tooltip: "werden - olmak" },
            ' eine berühmte Malerin: "Ich werde eine große Künstlerin."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Ihr Talent ",
            { word: "entwickelt sich", tooltip: "sich entwickeln - gelişmek" },
            ' stetig: "Meine Fähigkeiten entwickeln sich jeden Tag."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Kunstkritik: "Das außergewöhnliche Talent ',
            {
              word: "entfaltet sich",
              tooltip: "sich entfalten - gelişmek, açılmak (soyut)",
            },
            ' in ihren neuesten Werken."',
          ],
        },
      ],
    },
    {
      title: "Örnek 41: SEIN",
      character: "Philosoph Prof. Kant",
      memoryTip: "Prof. Kant'ın günü - basit ol → bulunmak → felsefi var ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Prof. Kant ",
            { word: "ist", tooltip: "sein - olmak" },
            ' ein großer Denker: "Ich bin ein Philosoph."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "befindet sich", tooltip: "sich befinden - bulunmak" },
            ' in seinem Arbeitszimmer: "Ich befinde mich in tiefer Meditation."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Werk schreibt er: "Der Mensch ',
            { word: "existiert", tooltip: "existieren - var olmak (felsefi)" },
            ' als denkendes Wesen in der Welt."',
          ],
        },
      ],
    },
    {
      title: "Örnek 42: HABEN",
      character: "Sammler Herr Reich",
      memoryTip:
        "Herr Reich'ın günü - basit sahip ol → güçlü sahip ol → resmi hak sahibi ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Reich ",
            { word: "hat", tooltip: "haben - sahip olmak" },
            ' viele Bücher: "Ich habe eine große Bibliothek."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "besitzt", tooltip: "besitzen - sahip olmak (daha güçlü)" },
            ' seltene Erstausgaben: "Ich besitze einige wertvolle Manuskripte."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Katalog steht: "Der Sammler ',
            {
              word: "verfügt über",
              tooltip: "verfügen über - ... üzerinde hakkı olmak (resmi)",
            },
            ' eine einzigartige Sammlung historischer Dokumente."',
          ],
        },
      ],
    },
    {
      title: "Örnek 43: WOLLEN",
      character: "Unternehmerin Frau Stark",
      memoryTip: "Frau Stark'ın günü - basit iste → niyet et → resmi hedefle",
      levels: [
        {
          level: "B1",
          sentence: [
            "Frau Stark ",
            { word: "will", tooltip: "wollen - istemek" },
            ' erfolgreich sein: "Ich will mein Unternehmen ausbauen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "beabsichtigt", tooltip: "beabsichtigen - niyet etmek" },
            ' eine Expansion: "Ich beabsichtige, neue Märkte zu erschließen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Geschäftsbericht: "Die Geschäftsführerin ',
            { word: "strebt", tooltip: "anstreben - hedeflemek (resmi)" },
            ' eine nachhaltige Marktführerschaft an."',
          ],
        },
      ],
    },
    {
      title: "Örnek 44: KÖNNEN",
      character: "Ingenieur Tom",
      memoryTip: "Tom'un günü - basit yapabilir → muktedir → resmi yetkin",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tom ",
            { word: "kann", tooltip: "können - -ebilmek" },
            ' komplexe Probleme lösen: "Ich kann das reparieren."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "ist imstande", tooltip: "imstande sein - muktedir olmak" },
            ', jede Maschine zu reparieren: "Ich bin imstande, das zu schaffen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Zeugnis steht: "Der Ingenieur ',
            {
              word: "ist befähigt",
              tooltip: "befähigt sein - yetkin olmak (resmi)",
            },
            ', selbst die schwierigsten technischen Herausforderungen zu bewältigen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 45: MÜSSEN",
      character: "Soldat Hauptmann Weber",
      memoryTip:
        "Hauptmann Weber'in günü - basit zorunda → yükümlü → resmi mecbur",
      levels: [
        {
          level: "B1",
          sentence: [
            "Hauptmann Weber ",
            { word: "muss", tooltip: "müssen - zorunda olmak" },
            ' die Mission erfüllen: "Ich muss meinen Auftrag ausführen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "ist verpflichtet",
              tooltip: "verpflichtet sein - yükümlü olmak",
            },
            ', seine Soldaten zu schützen: "Ich bin verpflichtet, für ihre Sicherheit zu sorgen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Militärbericht: "Der Offizier ',
            {
              word: "sieht sich genötigt",
              tooltip: "genötigt sein - mecbur kalmak (resmi)",
            },
            ', außerordentliche Maßnahmen zu ergreifen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 46: DÜRFEN",
      character: "Rechtsanwalt Dr. Just",
      memoryTip: "Dr. Just'ın günü - basit izinli → hakkı var → resmi yetkili",
      levels: [
        {
          level: "B1",
          sentence: [
            "Dr. Just ",
            { word: "darf", tooltip: "dürfen - izinli olmak" },
            ' vor Gericht auftreten: "Ich darf Sie vertreten."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "ist berechtigt",
              tooltip: "berechtigt sein - hakkı olmak",
            },
            ', Einspruch zu erheben: "Ich bin berechtigt, gegen diese Entscheidung vorzugehen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Gerichtsprotokoll: "Der Rechtsanwalt ',
            {
              word: "ist befugt",
              tooltip: "befugt sein - yetkili olmak (resmi)",
            },
            ', im Namen seines Mandanten zu sprechen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 47: SOLLEN",
      character: "Bürgermeister Herr Stadt",
      memoryTip: "Herr Stadt'ın günü - basit -meli → yükümlü → resmi görev",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Stadt ",
            { word: "soll", tooltip: "sollen - -meli" },
            ' die Bürger vertreten: "Ich soll ihre Interessen wahrnehmen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            {
              word: "ist verpflichtet",
              tooltip: "verpflichtet sein - yükümlü olmak",
            },
            ', transparent zu handeln: "Ich bin verpflichtet, ehrlich zu sein."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Stadtverfassung: "Dem Bürgermeister ',
            { word: "obliegt", tooltip: "obliegen - görev olmak (çok resmi)" },
            ' die Wahrung des Gemeinwohls."',
          ],
        },
      ],
    },
    {
      title: "Örnek 48: MÖGEN",
      character: "Kunstkritiker Herr Fein",
      memoryTip: "Herr Fein'ın günü - basit sev → değer ver → resmi takdir et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Fein ",
            { word: "mag", tooltip: "mögen - sevmek, hoşlanmak" },
            ' moderne Kunst: "Ich mag abstrakte Gemälde."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "schätzt", tooltip: "schätzen - değer vermek" },
            ' die Arbeit junger Künstler: "Ich schätze innovative Ansätze."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seiner Rezension: "Der Kritiker ',
            { word: "würdigt", tooltip: "würdigen - takdir etmek (resmi)" },
            ' die außergewöhnliche Kreativität des Werkes."',
          ],
        },
      ],
    },
    {
      title: "Örnek 49: LIEBEN",
      character: "Poet Heinrich",
      memoryTip: "Heinrich'ın günü - basit sev → bağlı ol → edebi besle",
      levels: [
        {
          level: "B1",
          sentence: [
            "Heinrich ",
            { word: "liebt", tooltip: "lieben - sevmek" },
            ' die Poesie: "Ich liebe die Schönheit der Sprache."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "ist zugetan", tooltip: "zugetan sein - bağlı olmak" },
            ' der klassischen Literatur: "Ich bin der Romantik sehr zugetan."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seinem Tagebuch: "Ich ',
            { word: "hege", tooltip: "hegen - beslemek (duygu) (edebi)" },
            ' eine tiefe Leidenschaft für die ewigen Verse."',
          ],
        },
      ],
    },
    {
      title: "Örnek 50: HASSEN",
      character: "Kritiker Herr Scharf",
      memoryTip:
        "Herr Scharf'ın günü - basit nefret et → tiksin → güçlü hor gör",
      levels: [
        {
          level: "B1",
          sentence: [
            "Herr Scharf ",
            { word: "hasst", tooltip: "hassen - nefret etmek" },
            ' oberflächliche Kunst: "Ich hasse kommerzielles Zeug."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "verabscheut", tooltip: "verabscheuen - tiksinmek" },
            ' kitschige Darstellungen: "Ich verabscheue diese geschmacklose Art."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In seiner Kritik: "Der Rezensent ',
            {
              word: "verachtet",
              tooltip: "verachten - hor görmek (daha güçlü)",
            },
            ' die intellektuelle Armut solcher Machwerke."',
          ],
        },
      ],
    },
    {
      title: "Örnek 75: ZEICHNEN",
      character: "Anna, Grafikdesignerin",
      memoryTip: "Anna'nın sanat günü - basit çizim → taslak → sanatsal resim",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "zeichnet", tooltip: "zeichnen - çizmek" },
            ' ein Bild: "Ich zeichne gerne Landschaften."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Für ihren Auftrag ",
            { word: "skizziert", tooltip: "skizzieren - taslak çizmek" },
            ' sie zuerst: "Ich skizziere die Grundidee."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Kunstkritik heißt es: "Die Künstlerin ',
            {
              word: "stellt bildlich dar",
              tooltip: "bildlich darstellen - resimlemek (sanatsal)",
            },
            ' komplexe Emotionen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 76: MALEN",
      character: "Peter, Kunstlehrer",
      memoryTip:
        "Peter'in atölye günü - basit boyama → renklendirme → sanatsal yaratım",
      levels: [
        {
          level: "B1",
          sentence: [
            "Peter ",
            { word: "malt", tooltip: "malen - boyamak" },
            ' mit seinen Schülern: "Heute malen wir Blumen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er zeigt ihnen, wie sie ",
            { word: "kolorieren", tooltip: "kolorieren - renklendirmek" },
            ': "Wir kolorieren die Zeichnung sorgfältig."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Kunstkatalog steht: "Der Künstler ',
            {
              word: "gestaltet künstlerisch",
              tooltip: "künstlerisch gestalten - sanatsal yaratmak (resmi)",
            },
            ' seine Werke mit außergewöhnlicher Präzision."',
          ],
        },
      ],
    },
    {
      title: "Örnek 77: BAUEN",
      character: "Thomas, Architekt",
      memoryTip:
        "Thomas'ın proje günü - basit inşaat → kurulum → resmi oluşturma",
      levels: [
        {
          level: "B1",
          sentence: [
            "Thomas ",
            { word: "baut", tooltip: "bauen - inşa etmek" },
            ' ein Haus: "Wir bauen hier ein neues Gebäude."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Das Team ",
            { word: "errichtet", tooltip: "errichten - kurmak" },
            ' die Grundmauern: "Wir errichten zunächst das Fundament."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Bauvertrag heißt es: "Die Firma ',
            { word: "erstellt", tooltip: "erstellen - oluşturmak (resmi)" },
            ' das Bauwerk nach den genehmigten Plänen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 78: REPARIEREN",
      character: "Klaus, Mechaniker",
      memoryTip:
        "Klaus'un tamir günü - basit onarım → bakım → resmi restorasyon",
      levels: [
        {
          level: "B1",
          sentence: [
            "Klaus ",
            { word: "repariert", tooltip: "reparieren - tamir etmek" },
            ' das Auto: "Ich repariere den Motor."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er muss das Fahrzeug ",
            {
              word: "instand setzen",
              tooltip: "instand setzen - onarım yapmak",
            },
            ': "Wir setzen den Wagen wieder instand."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Werkstattbericht steht: "Der Spezialist ',
            {
              word: "stellt wieder her",
              tooltip: "wiederherstellen - restore etmek (resmi)",
            },
            ' die ursprüngliche Funktionalität des Fahrzeugs."',
          ],
        },
      ],
    },
    {
      title: "Örnek 79: PUTZEN",
      character: "Maria, Hausfrau",
      memoryTip:
        "Maria'nın temizlik günü - basit temizlik → düzenleme → resmi hijyen",
      levels: [
        {
          level: "B1",
          sentence: [
            "Maria ",
            { word: "putzt", tooltip: "putzen - temizlemek" },
            ' das Haus: "Ich putze jeden Samstag."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "säubert", tooltip: "säubern - temizlemek" },
            ' alle Räume gründlich: "Ich säubere jede Ecke."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Haushaltsplan heißt es: "Die Hausfrau ',
            { word: "reinigt", tooltip: "reinigen - temizlik yapmak (resmi)" },
            ' die Wohnräume nach hygienischen Standards."',
          ],
        },
      ],
    },
    {
      title: "Örnek 80: WASCHEN",
      character: "Sarah, Mutter",
      memoryTip:
        "Sarah'nın çamaşır günü - basit yıkama → durulama → genel temizlik",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sarah ",
            { word: "wäscht", tooltip: "waschen - yıkamak" },
            ' die Wäsche: "Ich wasche die Kleidung."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Dann ",
            { word: "spült", tooltip: "spülen - durulamak" },
            ' sie alles sauber: "Ich spüle das Geschirr."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Waschanleitung steht: "Man ',
            { word: "säubert", tooltip: "säubern - temizlemek (genel)" },
            ' die Textilien mit geeigneten Mitteln."',
          ],
        },
      ],
    },
    {
      title: "Örnek 81: KOCHEN",
      character: "Marco, Koch",
      memoryTip:
        "Marco'nun mutfak günü - basit pişirme → hazırlama → profesyonel işleme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Marco ",
            { word: "kocht", tooltip: "kochen - yemek pişirmek" },
            ' für die Gäste: "Ich koche heute Pasta."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "bereitet", tooltip: "zubereiten - hazırlamak" },
            ' das Menü vor: "Ich bereite ein Drei-Gänge-Menü zu."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Kochbuch steht: "Der Chef ',
            {
              word: "verarbeitet kulinarisch",
              tooltip:
                "kulinarisch verarbeiten - mutfakta işlemek (profesyonel)",
            },
            ' hochwertige Zutaten zu exquisiten Gerichten."',
          ],
        },
      ],
    },
    {
      title: "Örnek 82: BACKEN",
      character: "Lisa, Bäckerin",
      memoryTip:
        "Lisa'nın fırın günü - basit pişirme → fırına verme → teknik ısıtma",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "backt", tooltip: "backen - pişirmek (fırında)" },
            ' Brot: "Ich backe jeden Morgen frisches Brot."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "schiebt",
              tooltip: "in den Ofen schieben - fırına vermek",
            },
            ' den Kuchen in den Ofen: "Ich schiebe den Teig in den Ofen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Backhandbuch steht: "Der Bäcker ',
            {
              word: "gart durch Hitze",
              tooltip: "durch Hitze garen - ısıyla pişirmek (teknik)",
            },
            ' die Backwaren bei optimaler Temperatur."',
          ],
        },
      ],
    },
    {
      title: "Örnek 83: SCHNEIDEN",
      character: "Hans, Metzger",
      memoryTip: "Hans'ın kesim günü - basit kesme → bölme → genel ayırma",
      levels: [
        {
          level: "B1",
          sentence: [
            "Hans ",
            { word: "schneidet", tooltip: "schneiden - kesmek" },
            ' das Fleisch: "Ich schneide das Fleisch in Stücke."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "zerteilt", tooltip: "zerteilen - bölmek" },
            ' die großen Stücke: "Ich zerteile das Fleisch für die Kunden."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Fachbuch steht: "Der Metzger ',
            { word: "trennt", tooltip: "trennen - ayırmak (genel)" },
            ' die verschiedenen Fleischteile fachgerecht."',
          ],
        },
      ],
    },
    {
      title: "Örnek 84: NÄHEN",
      character: "Emma, Schneiderin",
      memoryTip:
        "Emma'nın dikiş günü - basit dikme → birleştirme → tekstil hazırlama",
      levels: [
        {
          level: "B1",
          sentence: [
            "Emma ",
            { word: "näht", tooltip: "nähen - dikmek" },
            ' ein Kleid: "Ich nähe ein neues Kleid."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "fügt zusammen", tooltip: "zusammenfügen - birleştirmek" },
            ' die Stoffteile: "Ich füge die Teile sorgfältig zusammen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Modeatelier heißt es: "Die Schneiderin ',
            {
              word: "konfektioniert",
              tooltip: "konfektionieren - hazır hale getirmek (tekstil)",
            },
            ' hochwertige Kleidungsstücke nach Maß."',
          ],
        },
      ],
    },
    {
      title: "Örnek 85: KLEBEN",
      character: "Tim, Bastler",
      memoryTip:
        "Tim'in yapıştırma günü - basit yapıştırma → sabitleme → teknik sabitlik",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tim ",
            { word: "klebt", tooltip: "kleben - yapıştırmak" },
            ' die Teile zusammen: "Ich klebe die Puzzle-Teile."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "befestigt", tooltip: "befestigen - sabitlemek" },
            ' alles fest: "Ich befestige die Teile mit Kleber."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Anleitung steht: "Der Bastler ',
            { word: "fixiert", tooltip: "fixieren - sabitleştirmek (teknik)" },
            ' die Komponenten mit speziellen Klebstoffen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 86: BINDEN",
      character: "Julia, Floristin",
      memoryTip:
        "Julia'nın bağlama günü - basit bağlama → birbirine bağlama → soyut birleştirme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Julia ",
            { word: "bindet", tooltip: "binden - bağlamak" },
            ' einen Strauß: "Ich binde die Blumen zusammen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "verknüpft", tooltip: "verknüpfen - birbirine bağlamak" },
            ' die Stiele miteinander: "Ich verknüpfe alle Blumen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Blumenladen-Konzept heißt es: "Die Floristin ',
            { word: "vereint", tooltip: "vereinen - birleştirmek (soyut)" },
            ' verschiedene Blüten zu harmonischen Arrangements."',
          ],
        },
      ],
    },
    {
      title: "Örnek 87: LÖSEN",
      character: "Paul, Techniker",
      memoryTip:
        "Paul'un çözme günü - basit çözme → ayırma → karmaşık çözümleme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Paul ",
            { word: "löst", tooltip: "lösen - çözmek" },
            ' die Schraube: "Ich löse die Verbindung."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "trennt", tooltip: "trennen - ayırmak" },
            ' die Kabel: "Ich trenne die elektrischen Verbindungen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Wartungsprotokoll steht: "Der Techniker ',
            { word: "entwirrt", tooltip: "entwirren - çözmek (karmaşık)" },
            ' komplexe Verknotungen im System."',
          ],
        },
      ],
    },
    {
      title: "Örnek 88: DRÜCKEN",
      character: "Stefan, Arbeiter",
      memoryTip:
        "Stefan'ın basma günü - basit basma → sıkma → teknik sıkıştırma",
      levels: [
        {
          level: "B1",
          sentence: [
            "Stefan ",
            { word: "drückt", tooltip: "drücken - basmak" },
            ' den Knopf: "Ich drücke den Startknopf."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "presst", tooltip: "pressen - sıkmak" },
            ' die Teile zusammen: "Ich presse die Materialien."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arbeitshandbuch steht: "Der Arbeiter ',
            {
              word: "komprimiert",
              tooltip: "komprimieren - sıkıştırmak (teknik)",
            },
            ' die Materialien unter hohem Druck."',
          ],
        },
      ],
    },
    {
      title: "Örnek 89: ZIEHEN",
      character: "Anna, Sportlerin",
      memoryTip:
        "Anna'nın çekme günü - basit çekme → yakına çekme → manyetik çekim",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "zieht", tooltip: "ziehen - çekmek" },
            ' das Seil: "Ich ziehe das Seil mit aller Kraft."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "zieht heran", tooltip: "heranziehen - yakına çekmek" },
            ' die Hantel: "Ich ziehe das Gewicht zu mir heran."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Physikbuch steht: "Der Magnet ',
            { word: "zieht an", tooltip: "anziehen - çekmek (manyetik)" },
            ' die Eisenteilchen durch magnetische Kraft."',
          ],
        },
      ],
    },
    {
      title: "Örnek 90: SCHIEBEN",
      character: "Max, Umzugshelfer",
      memoryTip: "Max'in itme günü - basit itme → götürme → genel hareket",
      levels: [
        {
          level: "B1",
          sentence: [
            "Max ",
            { word: "schiebt", tooltip: "schieben - itmek" },
            ' den Schrank: "Ich schiebe das Möbel zur Seite."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "schiebt fort", tooltip: "fortschieben - itip götürmek" },
            ' die schweren Kisten: "Ich schiebe die Kartons fort."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Umzugsplan steht: "Der Helfer ',
            { word: "bewegt", tooltip: "bewegen - hareket ettirmek (genel)" },
            ' die Gegenstände systematisch zum Zielort."',
          ],
        },
      ],
    },
    {
      title: "Örnek 91: HEBEN",
      character: "Robert, Kraftsportler",
      memoryTip:
        "Robert'ın kaldırma günü - basit kaldırma → yükseltme → edebi yüceltme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Robert ",
            { word: "hebt", tooltip: "heben - kaldırmak" },
            ' die Hantel: "Ich hebe 100 Kilogramm."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "hebt hoch", tooltip: "hochheben - yukarı kaldırmak" },
            ' das Gewicht: "Ich hebe die Stange hoch über meinen Kopf."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportbericht heißt es: "Der Athlet ',
            { word: "hebt empor", tooltip: "emporheben - yüceltmek (edebi)" },
            ' nicht nur Gewichte, sondern auch den Ruf seines Vereins."',
          ],
        },
      ],
    },
    {
      title: "Örnek 92: WERFEN",
      character: "Lisa, Sportlerin",
      memoryTip: "Lisa'nın atma günü - basit atma → fırlatma → güçlü fırlatma",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "wirft", tooltip: "werfen - atmak" },
            ' den Ball: "Ich werfe den Ball ins Tor."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "schleudert", tooltip: "schleudern - fırlatmak" },
            ' mit voller Kraft: "Ich schleudere den Speer weit."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportmagazin steht: "Die Athletin ',
            {
              word: "katapultiert",
              tooltip: "katapultieren - fırlatmak (güçlü)",
            },
            ' den Diskus zu neuen Rekordweiten."',
          ],
        },
      ],
    },
    {
      title: "Örnek 93: FANGEN",
      character: "Tom, Torwart",
      memoryTip:
        "Tom'un yakalama günü - basit yakalama → kavrama → zor yakalama",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tom ",
            { word: "fängt", tooltip: "fangen - yakalamak" },
            ' den Ball: "Ich fange jeden Ball."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "ergreift", tooltip: "ergreifen - yakalamak" },
            ' den Ball sicher: "Ich ergreife den Ball mit beiden Händen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportbericht heißt es: "Der Torwart ',
            { word: "erhascht", tooltip: "erhaschen - yakalamak (zor)" },
            ' auch die schwierigsten Schüsse."',
          ],
        },
      ],
    },
    {
      title: "Örnek 94: FALLEN",
      character: "Nina, Turnerin",
      memoryTip:
        "Nina'nın düşme günü - basit düşme → aşağı düşme → edebi düşme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Nina ",
            { word: "fällt", tooltip: "fallen - düşmek" },
            ' vom Barren: "Ich falle nicht gerne."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            {
              word: "fällt hinunter",
              tooltip: "hinunterfallen - aşağı düşmek",
            },
            ' von der Matte: "Ich falle vom Gerät hinunter."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Turnbericht steht: "Die Turnerin ',
            {
              word: "geht zu Boden",
              tooltip: "zu Boden gehen - yere düşmek (edebi)",
            },
            ' nach einem schwierigen Sprung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 95: STEIGEN",
      character: "Hans, Bergsteiger",
      memoryTip:
        "Hans'ın yükselme günü - basit yükselme → çıkma → edebi yükselme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Hans ",
            { word: "steigt", tooltip: "steigen - yükselmek" },
            ' auf den Berg: "Ich steige langsam nach oben."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "steigt auf", tooltip: "aufsteigen - yukarı çıkmak" },
            ' zum Gipfel: "Ich steige zum höchsten Punkt auf."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Bergbericht heißt es: "Der Alpinist ',
            {
              word: "steigt empor",
              tooltip: "emporsteigen - yükselmek (edebi)",
            },
            ' in schwindelerregende Höhen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 96: KLETTERN",
      character: "Sarah, Kletterin",
      memoryTip:
        "Sarah'nın tırmanma günü - basit tırmanma → zor tırmanma → mecazi tırmanma",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sarah ",
            { word: "klettert", tooltip: "klettern - tırmanmak" },
            ' an der Wand: "Ich klettere gerne an steilen Wänden."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "erklimmt", tooltip: "erklimmen - tırmanmak (zor)" },
            ' den schwierigen Felsen: "Ich erklimme die steile Felswand."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Klettermagazin steht: "Die Athletin ',
            {
              word: "arbeitet sich hinauf",
              tooltip: "sich hinaufarbeiten - zorla tırmanmak (mecazi)",
            },
            ' durch jahrelanges Training zu neuen Höchstleistungen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 97: SPRINGEN",
      character: "Mike, Weitspringer",
      memoryTip:
        "Mike'ın zıplama günü - basit zıplama → sıçrama → resmi sıçrama",
      levels: [
        {
          level: "B1",
          sentence: [
            "Mike ",
            { word: "springt", tooltip: "springen - zıplamak" },
            ' weit: "Ich springe über sechs Meter."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Er ",
            { word: "hüpft", tooltip: "hüpfen - sıçramak" },
            ' vor Freude: "Ich hüpfe vor Begeisterung."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportprotokoll heißt es: "Der Athlet ',
            {
              word: "macht einen Satz",
              tooltip: "einen Satz machen - sıçrama yapmak (resmi)",
            },
            ' von bemerkenswerter Weite."',
          ],
        },
      ],
    },
    {
      title: "Örnek 98: SCHWIMMEN",
      character: "Anna, Schwimmerin",
      memoryTip:
        "Anna'nın yüzme günü - basit yüzme → çırpınma → resmi su hareketi",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "schwimmt", tooltip: "schwimmen - yüzmek" },
            ' im Pool: "Ich schwimme jeden Tag 50 Bahnen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Sie ",
            { word: "plantscht", tooltip: "plantschen - çırpınmak" },
            ' im Wasser: "Ich plantsche gerne im seichten Wasser."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Schwimmverein heißt es: "Die Athletin ',
            {
              word: "bewegt sich im Wasser fort",
              tooltip:
                "sich im Wasser fortbewegen - suda hareket etmek (resmi)",
            },
            ' mit perfekter Technik."',
          ],
        },
      ],
    },
    {
      title: "Örnek 99: FLIEGEN",
      character: "Paul, Pilot",
      memoryTip: "Paul'un uçma günü - basit uçma → süzülme → edebi yükselme",
      levels: [
        {
          level: "B1",
          sentence: [
            "Paul ",
            { word: "fliegt", tooltip: "fliegen - uçmak" },
            ' das Flugzeug: "Ich fliege nach München."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Das Flugzeug ",
            { word: "schwebt", tooltip: "schweben - süzülmek" },
            ' über den Wolken: "Wir schweben in 10.000 Metern Höhe."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Flugbericht steht: "Die Maschine ',
            {
              word: "erhebt sich in die Lüfte",
              tooltip: "sich in die Lüfte erheben - havaya yükselmek (edebi)",
            },
            ' mit majestätischer Eleganz."',
          ],
        },
      ],
    },
    {
      title: "Örnek 1: REITEN",
      character: "Anna, Çiftçi",
      memoryTip: "Anna'nın günü - basit bin → atta otur → edebi ifade",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "reitet", tooltip: "reiten - binmek (at)" },
            ' jeden Morgen: "Ich reite auf meinem Pferd zum Feld."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Während der Arbeit ",
            {
              word: "sitzt sie auf dem Pferd",
              tooltip: "auf dem Pferd sitzen - atta oturmak",
            },
            ': "Ich sitze den ganzen Tag auf dem Pferd."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Dorfchronik steht: "Anna ',
            {
              word: "ist zu Pferde",
              tooltip: "zu Pferde sein - ata binmiş olmak (edebi)",
            },
            ' und führt die Tradition ihrer Familie fort."',
          ],
        },
      ],
    },
    {
      title: "Örnek 2: FAHREN",
      character: "Peter, Taxifahrer",
      memoryTip: "Peter'in günü - basit sür → yönlendir → resmi araç kullan",
      levels: [
        {
          level: "B1",
          sentence: [
            "Peter ",
            { word: "fährt", tooltip: "fahren - sürmek (araç)" },
            ' das Taxi: "Ich fahre Sie zum Bahnhof."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Im Verkehr ",
            { word: "lenkt", tooltip: "lenken - yönlendirmek" },
            ' er geschickt: "Ich lenke das Auto durch die enge Straße."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Fahrbericht steht: "Der Fahrer ',
            {
              word: "führt ein Fahrzeug",
              tooltip: "ein Fahrzeug führen - araç kullanmak (resmi)",
            },
            ' professionell durch den Stadtverkehr."',
          ],
        },
      ],
    },
    {
      title: "Örnek 3: PARKEN",
      character: "Susi, Büroleiterin",
      memoryTip: "Susi'nin günü - basit park et → bırak → resmi yerleştir",
      levels: [
        {
          level: "B1",
          sentence: [
            "Susi ",
            { word: "parkt", tooltip: "parken - park etmek" },
            ' vor dem Büro: "Ich parke mein Auto hier."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Am Abend ",
            { word: "stellt sie ab", tooltip: "abstellen - bırakmak" },
            ': "Ich stelle das Auto in der Garage ab."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Parkordnung steht: "Fahrzeuge sind ordnungsgemäß zu ',
            {
              word: "positionieren",
              tooltip: "positionieren - yerleştirmek (resmi)",
            },
            '."',
          ],
        },
      ],
    },
    {
      title: "Örnek 4: ANHALTEN",
      character: "Klaus, Busfahrer",
      memoryTip:
        "Klaus'un günü - basit dur → durma noktasına gel → edebi duraklama",
      levels: [
        {
          level: "B1",
          sentence: [
            "Klaus ",
            { word: "hält an", tooltip: "anhalten - durmak" },
            ' an der Haltestelle: "Der Bus hält hier an."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Bei roter Ampel ",
            {
              word: "kommt er zum Stillstand",
              tooltip: "zum Stillstand kommen - durma noktasına gelmek",
            },
            ': "Das Fahrzeug kommt zum Stillstand."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Verkehrsbericht steht: "Der Fahrer ',
            { word: "hält inne", tooltip: "innehalten - duraklamak (edebi)" },
            ' vor der Gefahrenstelle."',
          ],
        },
      ],
    },
    {
      title: "Örnek 5: BREMSEN",
      character: "Maria, Fahrlehrerin",
      memoryTip: "Maria'nın günü - basit fren yap → yavaşla → resmi hız azalt",
      levels: [
        {
          level: "B1",
          sentence: [
            "Maria ",
            { word: "bremst", tooltip: "bremsen - fren yapmak" },
            ' vor der Kreuzung: "Ich bremse rechtzeitig."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Im Stadtverkehr ",
            { word: "verlangsamt", tooltip: "verlangsamen - yavaşlatmak" },
            ' sie: "Ich verlangsame das Fahrzeug."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Fahrbericht steht: "Die Fahrerin ',
            {
              word: "reduziert die Geschwindigkeit",
              tooltip: "die Geschwindigkeit reduzieren - hızı azaltmak (resmi)",
            },
            ' entsprechend der Verkehrssituation."',
          ],
        },
      ],
    },
    {
      title: "Örnek 6: BESCHLEUNIGEN",
      character: "Tom, Rennfahrer",
      memoryTip: "Tom'un günü - basit hızlan → gaza bas → resmi hız artır",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tom ",
            { word: "beschleunigt", tooltip: "beschleunigen - hızlanmak" },
            ' auf der Rennstrecke: "Ich beschleunige in der Kurve."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Auf der Geraden ",
            { word: "gibt er Gas", tooltip: "Gas geben - gaza basmak" },
            ': "Ich gebe Gas und überhole."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Rennbericht steht: "Der Fahrer ',
            {
              word: "erhöht die Geschwindigkeit",
              tooltip: "die Geschwindigkeit erhöhen - hızı artırmak (resmi)",
            },
            ' strategisch optimal."',
          ],
        },
      ],
    },
    {
      title: "Örnek 7: WENDEN",
      character: "Lena, Lieferfahrerin",
      memoryTip: "Lena'nın günü - basit dön → geri dön → resmi yön değiştir",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lena ",
            { word: "wendet", tooltip: "wenden - dönmek" },
            ' das Auto: "Ich wende hier und fahre zurück."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Am Ende der Straße ",
            { word: "kehrt sie um", tooltip: "umkehren - geri dönmek" },
            ': "Ich kehre um und nehme die andere Route."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Fahrtenbuch steht: "Die Fahrerin ',
            {
              word: "ändert die Richtung",
              tooltip: "die Richtung ändern - yön değiştirmek (resmi)",
            },
            ' gemäß der Lieferroute."',
          ],
        },
      ],
    },
    {
      title: "Örnek 8: FOLGEN",
      character: "Mark, Detektiv",
      memoryTip:
        "Mark'ın günü - basit takip et → peşinden git → mecazi iz takip et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Mark ",
            { word: "folgt", tooltip: "folgen - takip etmek" },
            ' dem Verdächtigen: "Ich folge ihm unauffällig."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Durch die Stadt ",
            { word: "folgt er nach", tooltip: "nachfolgen - peşinden gitmek" },
            ': "Ich folge der Spur nach."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Ermittlungsbericht steht: "Der Detektiv ',
            {
              word: "tritt in jemandes Fußstapfen",
              tooltip:
                "in jemandes Fußstapfen treten - birinin izinden gitmek (mecazi)",
            },
            ' und verfolgt methodisch die Hinweise."',
          ],
        },
      ],
    },
    {
      title: "Örnek 9: FÜHREN",
      character: "Sarah, Teamleiterin",
      memoryTip:
        "Sarah'ın günü - basit yönlendir → yönet → resmi liderlik üstlen",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sarah ",
            { word: "führt", tooltip: "führen - yönlendirmek" },
            ' das Team: "Ich führe das Projekt zum Erfolg."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Im Meeting ",
            { word: "leitet", tooltip: "leiten - yönetmek" },
            ' sie die Diskussion: "Ich leite die Besprechung."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Geschäftsbericht steht: "Die Managerin ',
            {
              word: "übernimmt die Führung",
              tooltip: "die Führung übernehmen - liderliği üstlenmek (resmi)",
            },
            ' des strategischen Entwicklungsprozesses."',
          ],
        },
      ],
    },
    {
      title: "Örnek 10: BEGLEITEN",
      character: "Julia, Krankenschwester",
      memoryTip:
        "Julia'nın günü - basit eşlik et → birlikte git → resmi eşlik et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Julia ",
            { word: "begleitet", tooltip: "begleiten - eşlik etmek" },
            ' den Patienten: "Ich begleite Sie zum Röntgen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Im Krankenhaus ",
            { word: "geht sie mit", tooltip: "mitgehen - birlikte gitmek" },
            ': "Ich gehe mit Ihnen zur Untersuchung."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Pflegebericht steht: "Die Schwester ',
            {
              word: "gibt das Geleit",
              tooltip: "das Geleit geben - eşlik etmek (resmi)",
            },
            ' während der medizinischen Maßnahmen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 11: TREFFEN",
      character: "Alex, Geschäftsmann",
      memoryTip: "Alex'in günü - basit buluş → karşılaş → resmi bir araya gel",
      levels: [
        {
          level: "B1",
          sentence: [
            "Alex ",
            { word: "trifft", tooltip: "treffen - buluşmak" },
            ' seinen Kunden: "Ich treffe ihn um 15 Uhr."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Zufällig ",
            { word: "begegnet er", tooltip: "sich begegnen - karşılaşmak" },
            ' seinem alten Freund: "Wir begegnen uns nach Jahren."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Terminkalender steht: "Die Geschäftspartner ',
            {
              word: "kommen zusammen",
              tooltip: "zusammenkommen - bir araya gelmek (resmi)",
            },
            ' zur Vertragsunterzeichnung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 12: BESUCHEN",
      character: "Emma, Enkelin",
      memoryTip:
        "Emma'nın günü - basit ziyaret et → uğra → resmi ziyaret bulun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Emma ",
            { word: "besucht", tooltip: "besuchen - ziyaret etmek" },
            ' ihre Großmutter: "Ich besuche Oma jeden Sonntag."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Spontan ",
            { word: "sucht sie auf", tooltip: "aufsuchen - uğramak" },
            ': "Ich suche sie kurz auf."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Besucherbuch steht: "Die Enkelin ',
            {
              word: "stattet einen Besuch ab",
              tooltip: "einen Besuch abstatten - ziyarette bulunmak (resmi)",
            },
            ' bei ihrer verehrten Großmutter."',
          ],
        },
      ],
    },
    {
      title: "Örnek 13: EINLADEN",
      character: "Hans, Gastgeber",
      memoryTip: "Hans'ın günü - basit davet et → rica et → çok resmi ersuchen",
      levels: [
        {
          level: "B1",
          sentence: [
            "Hans ",
            { word: "lädt ein", tooltip: "einladen - davet etmek" },
            ' seine Nachbarn: "Ich lade Sie zu meiner Party ein."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Höflich ",
            { word: "bittet", tooltip: "bitten - rica etmek" },
            ' er sie: "Ich bitte Sie, zu kommen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'In der Einladung steht: "Der Gastgeber ',
            { word: "ersucht", tooltip: "ersuchen - rica etmek (çok resmi)" },
            ' um die Ehre Ihrer Anwesenheit."',
          ],
        },
      ],
    },
    {
      title: "Örnek 14: KOMMEN",
      character: "Lisa, Gast",
      memoryTip: "Lisa'nın günü - basit gel → görün → resmi hazır bulun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "kommt", tooltip: "kommen - gelmek (davete)" },
            ' zur Party: "Ich komme gerne zu Ihrer Feier."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Pünktlich ",
            { word: "erscheint", tooltip: "erscheinen - görünmek, gelmek" },
            ' sie: "Ich erscheine um 19 Uhr."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Gästebuch steht: "Die Dame ',
            {
              word: "findet sich ein",
              tooltip: "sich einfinden - hazır bulunmak (resmi)",
            },
            ' zur festlichen Veranstaltung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 15: WEGFAHREN",
      character: "Michael, Tourist",
      memoryTip: "Michael'ın günü - basit git → yolculuğa çık → resmi uzaklaş",
      levels: [
        {
          level: "B1",
          sentence: [
            "Michael ",
            { word: "fährt weg", tooltip: "wegfahren - gitmek" },
            ' vom Hotel: "Ich fahre jetzt weg."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Am Morgen ",
            { word: "reist er ab", tooltip: "abreisen - yolculuğa çıkmak" },
            ': "Ich reise heute ab."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Reisebericht steht: "Der Gast ',
            {
              word: "entfernt sich",
              tooltip: "sich entfernen - uzaklaşmak (resmi)",
            },
            ' vom Veranstaltungsort."',
          ],
        },
      ],
    },
    {
      title: "Örnek 16: ANKOMMEN",
      character: "Sophie, Geschäftsfrau",
      memoryTip: "Sophie'nin günü - basit var → ulaş → resmi hedefe ulaş",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sophie ",
            { word: "kommt an", tooltip: "ankommen - varmak" },
            ' am Flughafen: "Ich komme um 14 Uhr an."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Pünktlich ",
            { word: "trifft sie ein", tooltip: "eintreffen - ulaşmak" },
            ': "Ich treffe rechtzeitig ein."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Terminkalender steht: "Die Geschäftsfrau ',
            {
              word: "langt am Zielort an",
              tooltip: "am Zielort anlangen - hedefe ulaşmak (resmi)",
            },
            ' entsprechend dem Zeitplan."',
          ],
        },
      ],
    },
    {
      title: "Örnek 17: ZURÜCKKOMMEN",
      character: "David, Soldat",
      memoryTip: "David'in günü - basit geri gel → dön → edebi eve dön",
      levels: [
        {
          level: "B1",
          sentence: [
            "David ",
            { word: "kommt zurück", tooltip: "zurückkommen - geri gelmek" },
            ' nach Hause: "Ich komme morgen zurück."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Nach dem Einsatz ",
            { word: "kehrt er wieder", tooltip: "wiederkehren - dönmek" },
            ': "Ich kehre zu meiner Familie wieder."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Militärbericht steht: "Der Soldat ',
            { word: "kehrt heim", tooltip: "heimkehren - eve dönmek (edebi)" },
            ' nach erfolgreich abgeschlossener Mission."',
          ],
        },
      ],
    },
    {
      title: "Örnek 18: UMZIEHEN",
      character: "Nina, Studentin",
      memoryTip:
        "Nina'nın günü - basit taşın → yaşam yeri değiştir → resmi ikametgah değiştir",
      levels: [
        {
          level: "B1",
          sentence: [
            "Nina ",
            { word: "zieht um", tooltip: "umziehen - taşınmak" },
            ' in eine neue Stadt: "Ich ziehe nach Berlin um."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Für das Studium ",
            {
              word: "wechselt sie den Wohnort",
              tooltip: "den Wohnort wechseln - yaşam yerini değiştirmek",
            },
            ': "Ich wechsle meinen Wohnort."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Anmeldeformular steht: "Die Studentin ',
            {
              word: "verlegt ihren Wohnsitz",
              tooltip:
                "seinen Wohnsitz verlegen - ikametgahını değiştirmek (resmi)",
            },
            ' zum Zwecke der universitären Ausbildung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 19: EINZIEHEN",
      character: "Felix, Mieter",
      memoryTip:
        "Felix'in günü - basit taşın (yeni eve) → yerleş → resmi konut tut",
      levels: [
        {
          level: "B1",
          sentence: [
            "Felix ",
            { word: "zieht ein", tooltip: "einziehen - taşınmak (yeni eve)" },
            ' in die neue Wohnung: "Ich ziehe nächste Woche ein."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Endlich ",
            { word: "bezieht", tooltip: "beziehen - yerleşmek" },
            ' er die Wohnung: "Ich beziehe meine neue Wohnung."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Mietvertrag steht: "Der Mieter ',
            {
              word: "nimmt Wohnung",
              tooltip: "Wohnung nehmen - konut tutmak (resmi)",
            },
            ' zum vereinbarten Zeitpunkt."',
          ],
        },
      ],
    },
    {
      title: "Örnek 20: AUSZIEHEN",
      character: "Anna, Mieterin",
      memoryTip:
        "Anna'nın günü - basit taşın (eski evden) → terk et → resmi boşalt",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "zieht aus", tooltip: "ausziehen - taşınmak (eski evden)" },
            ' der alten Wohnung: "Ich ziehe Ende des Monats aus."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Schweren Herzens ",
            { word: "verlässt", tooltip: "verlassen - terk etmek" },
            ' sie die Wohnung: "Ich verlasse diesen Ort."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Kündigungsschreiben steht: "Die Mieterin ',
            { word: "räumt", tooltip: "räumen - boşaltmak (resmi)" },
            ' die Wohnung fristgerecht."',
          ],
        },
      ],
    },
    {
      title: "Örnek 21: WOHNEN",
      character: "Robert, Einwohner",
      memoryTip: "Robert'ın günü - basit otur → ikamet et → resmi yerleşik ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Robert ",
            { word: "wohnt", tooltip: "wohnen - oturmak (bir yerde)" },
            ' in der Stadtmitte: "Ich wohne hier seit zehn Jahren."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Schon lange ",
            { word: "residiert", tooltip: "residieren - ikamet etmek" },
            ' er hier: "Ich residiere in dieser schönen Gegend."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Melderegister steht: "Der Bürger ',
            {
              word: "hat seinen Wohnsitz",
              tooltip: "seinen Wohnsitz haben - yerleşik olmak (resmi)",
            },
            ' in der genannten Adresse."',
          ],
        },
      ],
    },
    {
      title: "Örnek 22: MIETEN",
      character: "Carla, Studentin",
      memoryTip:
        "Carla'nın günü - basit kirala → uzun süreli kirala → resmi kiraya al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Carla ",
            { word: "mietet", tooltip: "mieten - kiralamak" },
            ' ein Zimmer: "Ich miete ein WG-Zimmer."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Für längere Zeit ",
            { word: "pachtet", tooltip: "pachten - kiralamak (uzun süreli)" },
            ' sie: "Ich pachte den Garten für fünf Jahre."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Mietvertrag steht: "Die Studentin ',
            {
              word: "nimmt in Miete",
              tooltip: "in Miete nehmen - kiraya almak (resmi)",
            },
            ' das Objekt zu den vereinbarten Konditionen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 23: VERMIETEN",
      character: "Klaus, Vermieter",
      memoryTip:
        "Klaus'un günü - basit kiraya ver → uzun süreli kiraya ver → resmi kiraya sun",
      levels: [
        {
          level: "B1",
          sentence: [
            "Klaus ",
            { word: "vermietet", tooltip: "vermieten - kiraya vermek" },
            ' seine Wohnung: "Ich vermiete an Studenten."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Langfristig ",
            {
              word: "verpachtet",
              tooltip: "verpachten - kiraya vermek (uzun süreli)",
            },
            ' er: "Ich verpachte das Grundstück."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Mietangebot steht: "Der Eigentümer ',
            {
              word: "überlässt zur Miete",
              tooltip: "zur Miete überlassen - kiraya sunmak (resmi)",
            },
            ' die Immobilie an solvente Mieter."',
          ],
        },
      ],
    },
    {
      title: "Örnek 24: BEZAHLEN",
      character: "Maria, Kundin",
      memoryTip: "Maria'nın günü - basit öde → borç öde → edebi karşılık ver",
      levels: [
        {
          level: "B1",
          sentence: [
            "Maria ",
            { word: "bezahlt", tooltip: "bezahlen - ödemek" },
            ' die Rechnung: "Ich bezahle bar."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Pünktlich ",
            { word: "begleicht", tooltip: "begleichen - ödemek (borç)" },
            ' sie ihre Schulden: "Ich begleiche alle Rechnungen."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Zahlungsnachweis steht: "Die Kundin ',
            {
              word: "entgilt",
              tooltip: "entgelten - karşılığını vermek (edebi)",
            },
            ' die erhaltenen Leistungen ordnungsgemäß."',
          ],
        },
      ],
    },
    {
      title: "Örnek 25: KOSTEN",
      character: "Paul, Verkäufer",
      memoryTip: "Paul'un günü - basit maliyeti ol → tut → resmi tutmak",
      levels: [
        {
          level: "B1",
          sentence: [
            "Das Auto ",
            { word: "kostet", tooltip: "kosten - maliyeti olmak" },
            ' 15.000 Euro: "Es kostet nicht viel."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Der Preis ",
            { word: "beträgt", tooltip: "betragen - tutmak (fiyat)" },
            ' genau 14.500 Euro: "Der Betrag beträgt exakt diese Summe."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Kostenvoranschlag steht: "Die Gesamtkosten ',
            {
              word: "belaufen sich auf",
              tooltip: "sich belaufen auf - tutmak (resmi)",
            },
            ' die kalkulierte Summe."',
          ],
        },
      ],
    },
    {
      title: "Örnek 26: SPAREN",
      character: "Lisa, Angestellte",
      memoryTip:
        "Lisa'nın günü - basit biriktir → bir yana koy → resmi birikme yap",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "spart", tooltip: "sparen - biriktirmek" },
            ' für den Urlaub: "Ich spare jeden Monat 200 Euro."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Regelmäßig ",
            {
              word: "legt sie zurück",
              tooltip: "zurücklegen - bir yana koymak",
            },
            ': "Ich lege monatlich Geld zurück."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Finanzplan steht: "Die Angestellte ',
            {
              word: "akkumuliert",
              tooltip: "akkumulieren - biriktirmek (resmi)",
            },
            ' systematisch Kapital für zukünftige Investitionen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 27: AUSGEBEN",
      character: "Tom, Student",
      memoryTip: "Tom'un günü - basit harca → çok harca → resmi yatırım yap",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tom ",
            { word: "gibt aus", tooltip: "ausgeben - harcamak" },
            ' sein Geld: "Ich gebe zu viel für Bücher aus."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Manchmal ",
            { word: "verausgabt", tooltip: "verausgaben - harcamak (çok)" },
            ' er sich: "Ich verausgabe mich finanziell."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Budget steht: "Der Student ',
            {
              word: "investiert",
              tooltip: "investieren - yatırım yapmak (resmi)",
            },
            ' in seine Bildung und Zukunft."',
          ],
        },
      ],
    },
    {
      title: "Örnek 28: VERDIENEN",
      character: "Sarah, Managerin",
      memoryTip:
        "Sarah'ın günü - basit kazan → gelir elde et → resmi gelir sağla",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sarah ",
            { word: "verdient", tooltip: "verdienen - kazanmak" },
            ' gut: "Ich verdiene 4000 Euro im Monat."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Mit ihrem Job ",
            { word: "nimmt sie ein", tooltip: "einnehmen - gelir elde etmek" },
            ': "Ich nehme ein gutes Gehalt ein."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arbeitsvertrag steht: "Die Managerin ',
            {
              word: "erzielt Einkünfte",
              tooltip: "Einkünfte erzielen - gelir sağlamak (resmi)",
            },
            ' entsprechend ihrer Qualifikation."',
          ],
        },
      ],
    },
    {
      title: "Örnek 29: VERLIEREN",
      character: "Max, Spieler",
      memoryTip: "Max'ın günü - basit kaybet → yitir → resmi kaybol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Max ",
            { word: "verliert", tooltip: "verlieren - kaybetmek" },
            ' sein Geld: "Ich verliere beim Pokern."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Leider ",
            { word: "büßt er ein", tooltip: "einbüßen - yitirmek" },
            ': "Ich büße meine Ersparnisse ein."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Verlustbericht steht: "Dem Spieler ',
            {
              word: "kommt abhanden",
              tooltip: "abhanden kommen - kaybolmak (resmi)",
            },
            ' ein beträchtlicher Geldbetrag."',
          ],
        },
      ],
    },
    {
      title: "Örnek 30: GEWINNEN",
      character: "Anna, Lottospielerin",
      memoryTip: "Anna'nın günü - basit kazan → elde et → zafer kazan",
      levels: [
        {
          level: "B1",
          sentence: [
            "Anna ",
            { word: "gewinnt", tooltip: "gewinnen - kazanmak" },
            ' im Lotto: "Ich gewinne 1000 Euro!"',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Endlich ",
            { word: "erringt", tooltip: "erringen - elde etmek" },
            ' sie einen Preis: "Ich erringe den Hauptgewinn."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Gewinnschein steht: "Die Teilnehmerin ',
            { word: "trägt davon", tooltip: "davontragen - kazanmak (zafer)" },
            ' den ersten Preis des Gewinnspiels."',
          ],
        },
      ],
    },
    {
      title: "Örnek 31: SPIELEN",
      character: "Ben, Fußballer",
      memoryTip: "Ben'in günü - basit oyna → yarış → resmi rekabet et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Ben ",
            { word: "spielt", tooltip: "spielen - oynamak (oyun)" },
            ' Fußball: "Ich spiele jeden Samstag."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Mit dem Gegner ",
            { word: "wetteifert", tooltip: "wetteifern - yarışmak" },
            ' er: "Ich wetteifere um den Sieg."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportbericht steht: "Der Athlet ',
            {
              word: "konkurriert",
              tooltip: "konkurrieren - rekabet etmek (resmi)",
            },
            ' auf höchstem Niveau."',
          ],
        },
      ],
    },
    {
      title: "Örnek 32: GEWINNEN (Spiel)",
      character: "Eva, Schachspielerin",
      memoryTip: "Eva'nın günü - basit kazan → galip gel → edebi zafer kazan",
      levels: [
        {
          level: "B1",
          sentence: [
            "Eva ",
            { word: "gewinnt", tooltip: "gewinnen - kazanmak (oyun)" },
            ' das Schachspiel: "Ich gewinne in 20 Zügen."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Klar ",
            { word: "siegt", tooltip: "siegen - galip gelmek" },
            ' sie: "Ich siege gegen den Meister."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Turnierbericht steht: "Die Spielerin ',
            {
              word: "triumphiert",
              tooltip: "triumphieren - zafer kazanmak (edebi)",
            },
            ' über ihre Gegner."',
          ],
        },
      ],
    },
    {
      title: "Örnek 33: VERLIEREN (Spiel)",
      character: "Jan, Tennisspieler",
      memoryTip: "Jan'ın günü - basit kaybet → yenil → resmi mağlubiyet al",
      levels: [
        {
          level: "B1",
          sentence: [
            "Jan ",
            { word: "verliert", tooltip: "verlieren - kaybetmek (oyun)" },
            ' das Tennisspiel: "Ich verliere 6:2."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Leider ",
            { word: "unterliegt", tooltip: "unterliegen - yenilmek" },
            ' er: "Ich unterliege dem starken Gegner."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Spielbericht steht: "Der Spieler ',
            {
              word: "erleidet eine Niederlage",
              tooltip: "eine Niederlage erleiden - mağlubiyet almak (resmi)",
            },
            ' gegen den Titelverteidiger."',
          ],
        },
      ],
    },
    {
      title: "Örnek 34: KÄMPFEN",
      character: "Lars, Boxer",
      memoryTip: "Lars'ın günü - basit savaş → mücadele et → soyut mücadele et",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lars ",
            { word: "kämpft", tooltip: "kämpfen - savaşmak" },
            ' im Ring: "Ich kämpfe fair."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Hartnäckig ",
            { word: "ringt", tooltip: "ringen - mücadele etmek" },
            ' er: "Ich ringe um jeden Punkt."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Kampfbericht steht: "Der Boxer ',
            {
              word: "setzt sich auseinander",
              tooltip: "sich auseinandersetzen - mücadele etmek (soyut)",
            },
            ' mit seinem Kontrahenten."',
          ],
        },
      ],
    },
    {
      title: "Örnek 35: STREITEN",
      character: "Mia, Nachbarin",
      memoryTip:
        "Mia'nın günü - basit kavga et → didişme → resmi çatışmaya gir",
      levels: [
        {
          level: "B1",
          sentence: [
            "Mia ",
            { word: "streitet", tooltip: "streiten - kavga etmek" },
            ' mit dem Nachbarn: "Ich streite wegen der Musik."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Lautstark ",
            { word: "zankt sie sich", tooltip: "sich zanken - didişmek" },
            ': "Ich zanke mich über den Lärm."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Protokoll steht: "Die Nachbarin ',
            {
              word: "gerät in Konflikt",
              tooltip: "in Konflikt geraten - çatışmaya girmek (resmi)",
            },
            ' mit anderen Mietern."',
          ],
        },
      ],
    },
    {
      title: "Örnek 36: SCHLAGEN",
      character: "Tim, Kämpfer",
      memoryTip: "Tim'in günü - basit vur → döv → resmi şiddete başvur",
      levels: [
        {
          level: "B1",
          sentence: [
            "Tim ",
            { word: "schlägt", tooltip: "schlagen - vurmak" },
            ' den Ball: "Ich schlage den Ball hart."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Aggressiv ",
            { word: "prügelt", tooltip: "prügeln - dövmek" },
            ' er: "Ich prügele mich mit ihm."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Polizeibericht steht: "Der Verdächtige ',
            {
              word: "wird tätlich",
              tooltip: "tätlich werden - şiddete başvurmak (resmi)",
            },
            ' gegenüber anderen Personen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 37: VERLETZEN",
      character: "Dr. Klein, Arzt",
      memoryTip:
        "Dr. Klein'ın günü - basit yarala → ciddi yarala → resmi zarar ver",
      levels: [
        {
          level: "B1",
          sentence: [
            "Der Patient ",
            { word: "verletzt", tooltip: "verletzen - yaralamak" },
            ' sich: "Ich verletze mich beim Sport."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Schwer ",
            { word: "verwundet", tooltip: "verwunden - yaralamak (ciddi)" },
            ' ist er: "Ich verwunde mich am Bein."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arztbericht steht: "Der Unfall ',
            {
              word: "fügt Schaden zu",
              tooltip: "Schaden zufügen - zarar vermek (resmi)",
            },
            ' an der unteren Extremität."',
          ],
        },
      ],
    },
    {
      title: "Örnek 38: HEILEN",
      character: "Dr. Meyer, Ärztin",
      memoryTip:
        "Dr. Meyer'in günü - basit iyileştir → tedavi et → tıbbi terapi uygula",
      levels: [
        {
          level: "B1",
          sentence: [
            "Dr. Meyer ",
            { word: "heilt", tooltip: "heilen - iyileştirmek" },
            ' die Wunde: "Ich heile mit Medikamenten."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Erfolgreich ",
            { word: "kuriert", tooltip: "kurieren - tedavi etmek" },
            ' sie: "Ich kuriere die Krankheit."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Behandlungsplan steht: "Die Ärztin ',
            {
              word: "therapiert",
              tooltip: "therapieren - terapi uygulamak (tıbbi)",
            },
            ' den Patienten systematisch."',
          ],
        },
      ],
    },
    {
      title: "Örnek 39: KRANK SEIN",
      character: "Peter, Patient",
      memoryTip:
        "Peter'in günü - basit hasta ol → hastalanmış ol → kibar rahatsız ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Peter ",
            { word: "ist krank", tooltip: "krank sein - hasta olmak" },
            ': "Ich bin seit drei Tagen krank."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Plötzlich ",
            { word: "erkrankt", tooltip: "erkranken - hastalanmak" },
            ' er: "Ich erkranke an Grippe."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Krankenschein steht: "Der Patient ',
            {
              word: "ist indisponiert",
              tooltip: "indisponiert sein - rahatsız olmak (kibar)",
            },
            ' aufgrund einer Viruserkrankung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 40: GESUND WERDEN",
      character: "Lisa, Patientin",
      memoryTip:
        "Lisa'nın günü - basit iyileş → sağlığa kavuş → tıbbi nekahet geçir",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lisa ",
            { word: "wird gesund", tooltip: "gesund werden - iyileşmek" },
            ': "Ich werde langsam gesund."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Endlich ",
            { word: "genest", tooltip: "genesen - sağlığına kavuşmak" },
            ' sie: "Ich genese von der Krankheit."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Entlassungsbrief steht: "Die Patientin ',
            {
              word: "rekonvalesziert",
              tooltip: "rekonvaleszieren - nekahet dönemi geçirmek (tıbbi)",
            },
            ' nach der Operation erfolgreich."',
          ],
        },
      ],
    },
    {
      title: "Örnek 41: SCHMERZEN",
      character: "Maria, Patientin",
      memoryTip: "Maria'nın günü - basit acı → ağrı → resmi acı ver",
      levels: [
        {
          level: "B1",
          sentence: [
            "Maria's Kopf ",
            { word: "schmerzt", tooltip: "schmerzen - acımak" },
            ': "Mein Kopf schmerzt sehr."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Das Bein ",
            { word: "tut weh", tooltip: "wehtun - ağrımak" },
            ': "Mein Bein tut furchtbar weh."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Schmerzprotokoll steht: "Die Verletzung ',
            {
              word: "bereitet Schmerzen",
              tooltip: "Schmerzen bereiten - acı vermek (resmi)",
            },
            ' im Bereich der Extremität."',
          ],
        },
      ],
    },
    {
      title: "Örnek 42: MÜDE SEIN",
      character: "Alex, Arbeiter",
      memoryTip:
        "Alex'in günü - basit yorgun ol → bitkin ol → edebi yorgunluk çek",
      levels: [
        {
          level: "B1",
          sentence: [
            "Alex ",
            { word: "ist müde", tooltip: "müde sein - yorgun olmak" },
            ': "Ich bin nach der Arbeit müde."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Völlig ",
            {
              word: "ist er erschöpft",
              tooltip: "erschöpft sein - bitkin olmak",
            },
            ': "Ich bin völlig erschöpft."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arbeitsbericht steht: "Der Mitarbeiter ',
            {
              word: "ist ermüdet",
              tooltip: "ermüdet sein - yorgunluk çekmek (edebi)",
            },
            ' nach der anstrengenden Schicht."',
          ],
        },
      ],
    },
    {
      title: "Örnek 43: AUSRUHEN",
      character: "Emma, Rentnerin",
      memoryTip: "Emma'nın günü - basit dinlen → toparlan → tıbbi yenilen",
      levels: [
        {
          level: "B1",
          sentence: [
            "Emma ",
            { word: "ruht aus", tooltip: "ausruhen - dinlenmek" },
            ': "Ich ruhe mich im Garten aus."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Allmählich ",
            { word: "erholt sie sich", tooltip: "sich erholen - toparlanmak" },
            ': "Ich erhole mich von der Krankheit."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Therapieplan steht: "Die Patientin ',
            {
              word: "regeneriert",
              tooltip: "regenerieren - yenilenmek (tıbbi)",
            },
            ' ihre körperlichen Kräfte."',
          ],
        },
      ],
    },
    {
      title: "Örnek 44: STARK SEIN",
      character: "Bruno, Sportler",
      memoryTip: "Bruno'nun günü - basit güçlü ol → güçlü ol → resmi güçlü ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Bruno ",
            { word: "ist stark", tooltip: "stark sein - güçlü olmak" },
            ': "Ich bin körperlich stark."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Besonders ",
            { word: "ist er kräftig", tooltip: "kräftig sein - güçlü olmak" },
            ': "Ich bin sehr kräftig gebaut."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportbericht steht: "Der Athlet ',
            {
              word: "ist potent",
              tooltip: "potent sein - güçlü olmak (resmi)",
            },
            ' in allen Disziplinen."',
          ],
        },
      ],
    },
    {
      title: "Örnek 45: SCHWACH SEIN",
      character: "Clara, Patientin",
      memoryTip:
        "Clara'nın günü - basit zayıf ol → güçsüz ol → resmi güçsüz ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Clara ",
            { word: "ist schwach", tooltip: "schwach sein - zayıf olmak" },
            ': "Ich bin nach der Krankheit schwach."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Noch ",
            {
              word: "ist sie kraftlos",
              tooltip: "kraftlos sein - güçsüz olmak",
            },
            ': "Ich bin völlig kraftlos."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arztbericht steht: "Die Patientin ',
            {
              word: "ist impotent",
              tooltip: "impotent sein - güçsüz olmak (resmi)",
            },
            ' bezüglich ihrer körperlichen Leistungsfähigkeit."',
          ],
        },
      ],
    },
    {
      title: "Örnek 46: JUNG SEIN",
      character: "Sophie, Studentin",
      memoryTip:
        "Sophie'nin günü - basit genç ol → gençlik çağında ol → edebi çiçek çağında ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Sophie ",
            { word: "ist jung", tooltip: "jung sein - genç olmak" },
            ': "Ich bin noch jung und voller Energie."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Mit 20 ",
            {
              word: "ist sie jugendlich",
              tooltip: "jugendlich sein - gençlik çağında olmak",
            },
            ': "Ich bin noch jugendlich."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Porträt steht: "Die Studentin ',
            {
              word: "steht in der Blüte",
              tooltip: "in der Blüte stehen - çiçek çağında olmak (edebi)",
            },
            ' ihres Lebens."',
          ],
        },
      ],
    },
    {
      title: "Örnek 47: ALT SEIN",
      character: "Heinrich, Rentner",
      memoryTip:
        "Heinrich'ın günü - basit yaşlı ol → ileri yaşta ol → kibar yaşının getirmesi",
      levels: [
        {
          level: "B1",
          sentence: [
            "Heinrich ",
            { word: "ist alt", tooltip: "alt sein - yaşlı olmak" },
            ': "Ich bin 75 Jahre alt."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Bereits ",
            {
              word: "ist er betagt",
              tooltip: "betagt sein - ileri yaşta olmak",
            },
            ': "Ich bin schon sehr betagt."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Lebenslauf steht: "Der Herr ',
            {
              word: "ist in die Jahre gekommen",
              tooltip: "in die Jahre gekommen sein - yaşının getirmesi (kibar)",
            },
            ' und verfügt über reiche Erfahrung."',
          ],
        },
      ],
    },
    {
      title: "Örnek 48: SCHÖN SEIN",
      character: "Isabella, Model",
      memoryTip:
        "Isabella'nın günü - basit güzel ol → güzel ol → edebi güzellik sahibi ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Isabella ",
            { word: "ist schön", tooltip: "schön sein - güzel olmak" },
            ': "Ich bin natürlich schön."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Alle sagen, ",
            { word: "sie ist hübsch", tooltip: "hübsch sein - güzel olmak" },
            ': "Ich bin wirklich hübsch."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Magazin steht: "Das Model ',
            {
              word: "ist von Schönheit",
              tooltip: "von Schönheit sein - güzellik sahibi olmak (edebi)",
            },
            ' und Eleganz."',
          ],
        },
      ],
    },
    {
      title: "Örnek 49: HÄSSLICH SEIN",
      character: "Gretchen, Märchenfigur",
      memoryTip:
        "Gretchen'in günü - basit çirkin ol → çirkin ol → edebi itici görünümde ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Die Hexe ",
            { word: "ist hässlich", tooltip: "hässlich sein - çirkin olmak" },
            ': "Ich bin sehr hässlich."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Wirklich ",
            { word: "ist sie unschön", tooltip: "unschön sein - çirkin olmak" },
            ': "Ich bin ziemlich unschön."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Märchenbuch steht: "Die Gestalt ',
            {
              word: "ist von abstoßender Gestalt",
              tooltip:
                "von abstoßender Gestalt sein - itici görünümde olmak (edebi)",
            },
            ' und furchteinflößend."',
          ],
        },
      ],
    },
    {
      title: "Örnek 50: GROSS SEIN",
      character: "Richard, Basketballer",
      memoryTip:
        "Richard'ın günü - basit büyük ol → geniş ol → resmi kayda değer büyüklükte ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Richard ",
            { word: "ist groß", tooltip: "groß sein - büyük olmak" },
            ': "Ich bin 2 Meter groß."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Seine Größe ",
            {
              word: "ist umfangreich",
              tooltip: "umfangreich sein - geniş olmak",
            },
            ': "Meine Körpergröße ist umfangreich."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Sportbericht steht: "Der Spieler ',
            {
              word: "ist von beträchtlicher Größe",
              tooltip:
                "von beträchtlicher Größe sein - kayda değer büyüklükte olmak (resmi)",
            },
            ' und dominiert das Spielfeld."',
          ],
        },
      ],
    },
    {
      title: "Örnek 51: KLEIN SEIN",
      character: "Lilly, Kind",
      memoryTip:
        "Lilly'nin günü - basit küçük ol → minik ol → resmi küçük boyutta ol",
      levels: [
        {
          level: "B1",
          sentence: [
            "Lilly ",
            { word: "ist klein", tooltip: "klein sein - küçük olmak" },
            ': "Ich bin noch klein für mein Alter."',
          ],
        },
        {
          level: "B2",
          sentence: [
            "Besonders ",
            { word: "ist sie winzig", tooltip: "winzig sein - minik olmak" },
            ': "Ich bin wirklich winzig."',
          ],
        },
        {
          level: "C1",
          sentence: [
            'Im Arztbericht steht: "Das Kind ',
            {
              word: "ist von geringer Größe",
              tooltip: "von geringer Größe sein - küçük boyutta olmak (resmi)",
            },
            ' für seine Altersgruppe."',
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          🎭 İnteraktif Almanca Kelime Ezberleme
        </h1>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
          <strong className="text-blue-800">💡 Nasıl Kullanılır:</strong>
          <span className="text-blue-700">
            {" "}
            Koyu renkli kelimelere tıklayarak yalin halini ve Türkçe anlamını
            görebilirsiniz!
          </span>
        </div>

        {stories.map((story, index) => (
          <StoryBox key={index} story={story} />
        ))}

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            🧠 Ezber Stratejisi
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <strong className="text-green-600">1. Görsel:</strong> Karakteri
              hayal et
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <strong className="text-yellow-600">2. Sesli:</strong> Hikayeyi
              sesli anlat
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <strong className="text-red-600">3. Yazılı:</strong> Kendi
              cümlenle kullan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
