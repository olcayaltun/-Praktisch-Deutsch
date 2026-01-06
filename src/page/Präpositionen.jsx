import React, { useState, useMemo } from "react";

const sätze = [
  {
    verben: "achten",
    präposition: "auf",
    reflexiv: null,
    satz: "Bitte achte auf den neuen Mantel.",
    anlam: "Dikkat etmek (bir şeye)",
  },
  {
    verben: "abhängen",
    präposition: "von",
    reflexiv: null,
    satz: "Ob wir fahren, hängt vom Wetter ab.",
    anlam: "Bağlı olmak (bir şeye)",
  },
  {
    verben: "anfangen",
    präposition: "mit",
    reflexiv: null,
    satz: "Ich fange mit der Übung an.",
    anlam: "Başlamak (bir şeyle)",
  },
  {
    verben: "ankommen",
    präposition: "auf",
    reflexiv: null,
    satz: "Es kommt auf den richtigen Preis an.",
    anlam: "Önemli olan..",
  },
  {
    verben: "antworten",
    präposition: "auf",
    reflexiv: null,
    satz: "Bitte antworten Sie heute auf den Brief.",
    anlam: "Cevap vermek (bir şeye)",
  },
  {
    verben: "sich ärgern",
    präposition: "über",
    reflexiv: "sich",
    satz: "Wir ärgern uns über den Regen.",
    anlam: "Sinirlenmek (bir şey hakkında)",
  },
  {
    verben: "aufhören",
    präposition: "mit",
    reflexiv: null,
    satz: "Er hört um 17.00 Uhr mit der Arbeit auf.",
    anlam: "Bırakmak, vazgeçmek (bir şeyden)",
  },
  {
    verben: "aufpassen",
    präposition: "auf",
    reflexiv: null,
    satz: "Ein Babysitter passt auf kleine Kinder auf.",
    anlam: "Dikkat etmek, göz kulak olmak (birine/bir şeye)",
  },
  {
    verben: "sich aufregen",
    präposition: "über",
    reflexiv: "sich",
    satz: "Deutsche regen sich über Unpünktlichkeit auf.",
    anlam: "Kızmak, öfkelenmek (bir şey yüzünden)",
  },
  {
    verben: "ausgeben",
    präposition: "für",
    reflexiv: null,
    satz: "Manche geben viel Geld für Schuhe aus.",
    anlam: "Harcamak (bir şey için)",
  },
  {
    verben: "sich bedanken",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Ich bedanke mich herzlich bei dir.",
    anlam: "Teşekkür etmek (birine)",
  },
  {
    verben: "sich bedanken",
    präposition: "für",
    reflexiv: "sich",
    satz: "Martin bedankt sich für das Geschenk.",
    anlam: "Teşekkür etmek (bir şey için)",
  },
  {
    verben: "beginnen",
    präposition: "mit",
    reflexiv: null,
    satz: "Wir beginnen pünktlich mit dem Deutschkurs.",
    anlam: "Başlamak (bir şeyle)",
  },
  {
    verben: "sich bemühen",
    präposition: "um",
    reflexiv: "sich",
    satz: "Karla bemüht sich um eine Arbeit.",
    anlam: "Çaba göstermek (bir şey için)",
  },
  {
    verben: "berichten",
    präposition: "über",
    reflexiv: null,
    satz: "Der Reporter berichtet über die Wahlen.",
    anlam: "Haber vermek, bilgi vermek (bir şey hakkında)",
  },
  {
    verben: "sich beschäftigen",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Ich beschäftige mich gern mit Pflanzen.",
    anlam: "İlgilenmek, uğraşmak (bir şeyle)",
  },
  {
    verben: "sich beschweren",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Der Gast beschwert sich beim Kellner.",
    anlam: "Şikayet etmek (birine)",
  },
  {
    verben: "bestehen",
    präposition: "aus",
    reflexiv: null,
    satz: "Eheringe bestehen aus Gold.",
    anlam: "Oluşmak (bir şeyden)",
  },
  {
    verben: "bestehen",
    präposition: "auf",
    reflexiv: null,
    satz: "Ich bestehe auf sofortiger Bezahlung des Autos.",
    anlam: "Israr etmek (bir şey üzerinde)",
  },
  {
    verben: "sich beteiligen",
    präposition: "an",
    reflexiv: "sich",
    satz: "Viele Studenten beteiligen sich an den Streiks.",
    anlam: "Katılmak (bir şeye)",
  },
  {
    verben: "sich bewerben",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Er bewirbt sich bei einer Bäckerei.",
    anlam: "Başvurmak (bir yere)",
  },
  {
    verben: "sich bewerben",
    präposition: "um",
    reflexiv: "sich",
    satz: "Sie bewirbt sich um eine Stelle als Sekretärin.",
    anlam: "Başvurmak (bir pozisyon için)",
  },
  {
    verben: "sich beziehen",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Meine Frage bezieht sich auf Ihr Angebot.",
    anlam: "İlgili olmak, atıfta bulunmak (bir şeye)",
  },
  {
    verben: "bitten",
    präposition: "um",
    reflexiv: null,
    satz: "Der Redner bittet um Aufmerksamkeit.",
    anlam: "Rica etmek (bir şey için)",
  },
  {
    verben: "danken",
    präposition: "für",
    reflexiv: null,
    satz: "Sam dankt für Ritas Hilfe.",
    anlam: "Teşekkür etmek (bir şey için)",
  },
  {
    verben: "denken",
    präposition: "an",
    reflexiv: null,
    satz: "Maria denkt oft an den Urlaub.",
    anlam: "Düşünmek (bir şeyi)",
  },
  {
    verben: "diskutieren",
    präposition: "über",
    reflexiv: null,
    satz: "Das Kabinett diskutiert über eine neue Steuer.",
    anlam: "Tartışmak (bir şey hakkında)",
  },
  {
    verben: "einladen",
    präposition: "zu",
    reflexiv: null,
    satz: "Ich lade dich zu meinem Geburtstag ein.",
    anlam: "Davet etmek (bir şeye)",
  },
  {
    verben: "sich entscheiden",
    präposition: "für",
    reflexiv: "sich",
    satz: "Kinder entscheiden sich gern für Schokolade.",
    anlam: "Karar vermek (bir şey lehine)",
  },
  {
    verben: "sich entschließen",
    präposition: "zu",
    reflexiv: "sich",
    satz: "Karl entschließt sich zu einem Studium.",
    anlam: "Karar vermek (bir şeyi yapmaya)",
  },
  {
    verben: "sich entschuldigen",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Tom entschuldigt sich bei ihrem Mann.",
    anlam: "Özür dilemek (birinden)",
  },
  {
    verben: "sich entschuldigen",
    präposition: "für",
    reflexiv: "sich",
    satz: "Ich entschuldige mich für das Verhalten meiner Katze.",
    anlam: "Özür dilemek (bir şey için)",
  },
  {
    verben: "sich erholen",
    präposition: "von",
    reflexiv: "sich",
    satz: "Von dem Schock muss ich mich erst erholen.",
    anlam: "İyileşmek, toparlanmak (bir şeyden)",
  },
  {
    verben: "sich erinnern",
    präposition: "an",
    reflexiv: "sich",
    satz: "Wir erinnern uns gern an unser erstes Ehejahr.",
    anlam: "Hatırlamak (bir şeyi)",
  },
  {
    verben: "erkennen",
    präposition: "an",
    reflexiv: null,
    satz: "Man erkennt Pinocchio an seiner langen Nase.",
    anlam: "Tanıyıp anlamak (bir şeyden)",
  },
  {
    verben: "sich erkundigen",
    präposition: "nach",
    reflexiv: "sich",
    satz: "Oma erkundigt sich oft nach meinen Plänen.",
    anlam: "Sormak, bilgi almak (bir şey hakkında)",
  },
  {
    verben: "erschrecken",
    präposition: "über",
    reflexiv: null,
    satz: "Der Koch erschrickt über eine Maus.",
    anlam: "Korkmak, şaşırmak (bir şey yüzünden)",
  },
  {
    verben: "erzählen",
    präposition: "über",
    reflexiv: null,
    satz: "Ein Ostberliner erzählt über sein Leben in der ehemaligen DDR.",
    anlam: "Anlatmak (bir şey hakkında)",
  },
  {
    verben: "erzählen",
    präposition: "von",
    reflexiv: null,
    satz: "Der Bischoff erzählt von der Reise nach Rom.",
    anlam: "Bahsetmek (bir şeyden)",
  },
  {
    verben: "fragen",
    präposition: "nach",
    reflexiv: null,
    satz: "Die Journalistin fragt nach den Konsequenzen der Gesetzesänderung.",
    anlam: "Sormak (bir şey hakkında)",
  },
  {
    verben: "sich freuen",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Kinder freuen sich auf die Ferien.",
    anlam: "Sevinmek, dört gözle beklemek (bir şeyi)",
  },
  {
    verben: "sich freuen",
    präposition: "über",
    reflexiv: "sich",
    satz: "Jeder freut sich über eine Gehaltserhöhung.",
    anlam: "Sevinmek (bir şey yüzünden)",
  },
  {
    verben: "gehen",
    präposition: "um",
    reflexiv: null,
    satz: "Immer geht es um Geld.",
    anlam: "Söz konusu olmak (bir şey hakkında)",
  },
  {
    verben: "gehören",
    präposition: "zu",
    reflexiv: null,
    satz: "Das Elsass gehört zu Frankreich.",
    anlam: "Ait olmak (bir şeye)",
  },
  {
    verben: "sich gewöhnen",
    präposition: "an",
    reflexiv: "sich",
    satz: "Ich kann mich nicht an die Zeitumstellung gewöhnen.",
    anlam: "Alışmak (bir şeye)",
  },
  {
    verben: "glauben",
    präposition: "an",
    reflexiv: null,
    satz: "Teenager glauben an die große Liebe.",
    anlam: "İnanmak (bir şeye)",
  },
  {
    verben: "gratulieren",
    präposition: "zu",
    reflexiv: null,
    satz: "Wir gratulieren dir zum 18. Geburtstag.",
    anlam: "Tebrik etmek (bir şey için)",
  },
  {
    verben: "halten",
    präposition: "für",
    reflexiv: null,
    satz: "Ich halte das für keine gute Idee.",
    anlam: "Saymak, düşünmek (bir şeyi bir şey olarak)",
  },
  {
    verben: "etwas halten",
    präposition: "von",
    reflexiv: null,
    satz: "Kinder halten nicht viel von Ordnung.",
    anlam: "Düşünmek, fikir sahibi olmak (bir şey hakkında)",
  },
  {
    verben: "handeln",
    präposition: "von",
    reflexiv: null,
    satz: "Märchen handeln von Gut und Böse.",
    anlam: "Bahsetmek, konu olmak (bir şeyden)",
  },
  {
    verben: "helfen",
    präposition: "bei",
    reflexiv: null,
    satz: "Kann ich dir beim Tischdecken helfen?",
    anlam: "Yardım etmek (bir şeyde)",
  },
  {
    verben: "hindern",
    präposition: "an",
    reflexiv: null,
    satz: "Ein langsamer Fahrer hindert Greta am Überholen.",
    anlam: "Engel olmak (bir şeye)",
  },
  {
    verben: "hoffen",
    präposition: "auf",
    reflexiv: null,
    satz: "Im März hoffen alle auf warme Frühlingstage.",
    anlam: "Ummak (bir şeyi)",
  },
  {
    verben: "hören",
    präposition: "von",
    reflexiv: null,
    satz: "Ich habe seit Sonntag nichts von Piet gehört.",
    anlam: "Haber almak (birinden/bir şeyden)",
  },
  {
    verben: "sich informieren",
    präposition: "über",
    reflexiv: "sich",
    satz: "Auf der Messe kann man sich über die neue Technologie informieren.",
    anlam: "Bilgi almak (bir şey hakkında)",
  },
  {
    verben: "sich interessieren",
    präposition: "für",
    reflexiv: "sich",
    satz: "Monika interessiert sich für ein Smartphone.",
    anlam: "İlgilenmek (bir şeyle)",
  },
  {
    verben: "klagen",
    präposition: "über",
    reflexiv: null,
    satz: "Frauen klagen häufig über Kopfschmerzen.",
    anlam: "Şikayet etmek (bir şeyden)",
  },
  {
    verben: "kämpfen",
    präposition: "für",
    reflexiv: null,
    satz: "Die Gewerkschaft kämpft für höhere Löhne.",
    anlam: "Mücadele etmek (bir şey için)",
  },
  {
    verben: "kommen",
    präposition: "auf",
    reflexiv: null,
    satz: "Ich komme nicht auf die Lösung.",
    anlam: "Bulmak, aklına gelmek (bir şeyi)",
  },
  {
    verben: "sich konzentrieren",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Karl konzentriert sich auf seine Hausaufgaben.",
    anlam: "Konsantre olmak (bir şeye)",
  },
  {
    verben: "sich kümmern",
    präposition: "um",
    reflexiv: "sich",
    satz: "Im Pflegeheim kümmert man sich um alte Leute, die krank sind.",
    anlam: "İlgilenmek, bakmak (birine/bir şeye)",
  },
  {
    verben: "lachen",
    präposition: "über",
    reflexiv: null,
    satz: "Über einen guten Witz muss man laut lachen.",
    anlam: "Gülmek (bir şeye)",
  },
  {
    verben: "leiden",
    präposition: "an",
    reflexiv: null,
    satz: "Jeder fünfte Manager leidet an Burn-out.",
    anlam: "Acı çekmek (bir şeyden)",
  },
  {
    verben: "leiden",
    präposition: "unter",
    reflexiv: null,
    satz: "Kaffeetrinker leiden unter Schlafproblemen.",
    anlam: "Muzdarip olmak (bir şeyden)",
  },
  {
    verben: "nachdenken",
    präposition: "über",
    reflexiv: null,
    satz: "Beamte müssen nicht über ihre Rente nachdenken.",
    anlam: "Düşünmek (bir şey hakkında)",
  },
  {
    verben: "protestieren",
    präposition: "gegen",
    reflexiv: null,
    satz: "Viele Menschen protestieren gegen Atomkraft.",
    anlam: "Protesto etmek (bir şeye karşı)",
  },
  {
    verben: "rechnen",
    präposition: "mit",
    reflexiv: null,
    satz: "Im Januar muss man mit Schnee rechnen.",
    anlam: "Hesap etmek, beklemek (bir şeyi)",
  },
  {
    verben: "reden",
    präposition: "über",
    reflexiv: null,
    satz: "Deine Mutter redet gern über Krankheiten.",
    anlam: "Konuşmak (bir şey hakkında)",
  },
  {
    verben: "reden",
    präposition: "von",
    reflexiv: null,
    satz: "Großvater redet von den guten alten Zeiten.",
    anlam: "Bahsetmek (bir şeyden)",
  },
  {
    verben: "riechen",
    präposition: "nach",
    reflexiv: null,
    satz: "Hier riecht es nach Kuchen.",
    anlam: "Kokmak (bir şey gibi)",
  },
  {
    verben: "schmecken",
    präposition: "nach",
    reflexiv: null,
    satz: "Muscheln schmecken nach Meerwasser.",
    anlam: "Tadı olmak (bir şey gibi)",
  },
  {
    verben: "schreiben",
    präposition: "an",
    reflexiv: null,
    satz: "Bitte schreibe noch heute an deine Mutter.",
    anlam: "Yazmak (birine)",
  },
  {
    verben: "sich schützen",
    präposition: "vor",
    reflexiv: "sich",
    satz: "Den Computer des Ministers muss man vor Hackern schützen.",
    anlam: "Korunmak (bir şeyden)",
  },
  {
    verben: "sein",
    präposition: "für",
    reflexiv: null,
    satz: "Ich bin für die Abschaffung der Kinderarbeit.",
    anlam: "Taraftar olmak (bir şeyden yana)",
  },
  {
    verben: "sein",
    präposition: "gegen",
    reflexiv: null,
    satz: "Viele sind gegen Steuererhöhungen.",
    anlam: "Karşı olmak (bir şeye)",
  },
  {
    verben: "sorgen",
    präposition: "für",
    reflexiv: null,
    satz: "Kinder müssen im Alter für ihre Eltern sorgen.",
    anlam: "Bakmak, ilgilenmek (birine)",
  },
  {
    verben: "sprechen",
    präposition: "mit",
    reflexiv: null,
    satz: "Ich spreche noch einmal mit deinem Vater.",
    anlam: "Konuşmak (biriyle)",
  },
  {
    verben: "sprechen",
    präposition: "über",
    reflexiv: null,
    satz: "Lass uns über deine Zukunft sprechen.",
    anlam: "Konuşmak (bir şey hakkında)",
  },
  {
    verben: "sterben",
    präposition: "an",
    reflexiv: null,
    satz: "Zwei Deutsche sind an der Grippe gestorben.",
    anlam: "Ölmek (bir şeyden)",
  },
  {
    verben: "streiten",
    präposition: "mit",
    reflexiv: null,
    satz: "Ich möchte nicht mit dir streiten.",
    anlam: "Tartışmak (biriyle)",
  },
  {
    verben: "streiten",
    präposition: "über",
    reflexiv: null,
    satz: "Die USA und Deutschland streiten über eine neue Strategie.",
    anlam: "Tartışmak (bir şey hakkında)",
  },
  {
    verben: "teilnehmen",
    präposition: "an",
    reflexiv: null,
    satz: "Nordkorea nimmt an der Fußball-WM teil.",
    anlam: "Katılmak (bir şeye)",
  },
  {
    verben: "telefonieren",
    präposition: "mit",
    reflexiv: null,
    satz: "Hast du schon mit dem Arzt telefoniert?",
    anlam: "Telefonla konuşmak (biriyle)",
  },
  {
    verben: "sich treffen",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Die Kanzlerin trifft sich täglich mit ihrem Pressesprecher.",
    anlam: "Buluşmak (biriyle)",
  },
  {
    verben: "sich trennen",
    präposition: "von",
    reflexiv: "sich",
    satz: "Ralf hat sich von seiner Freundin getrennt.",
    anlam: "Ayrılmak (birinden)",
  },
  {
    verben: "überreden",
    präposition: "zu",
    reflexiv: null,
    satz: "Kann ich dich zu einem Glas Wein überreden?",
    anlam: "İkna etmek (bir şeye)",
  },
  {
    verben: "sich unterhalten",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Der Sänger unterhält sich mit dem Bassisten.",
    anlam: "Sohbet etmek (biriyle)",
  },
  {
    verben: "sich unterhalten",
    präposition: "über",
    reflexiv: "sich",
    satz: "Wir unterhalten uns über den Film.",
    anlam: "Sohbet etmek (bir şey hakkında)",
  },
  {
    verben: "sich verabreden",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Heute verabrede ich mich mit einer Freundin.",
    anlam: "Randevulaşmak (biriyle)",
  },
  {
    verben: "sich verabschieden",
    präposition: "von",
    reflexiv: "sich",
    satz: "Wir verabschieden uns von Ihnen.",
    anlam: "Veda etmek (birine)",
  },
  {
    verben: "vergessen",
    präposition: "auf",
    reflexiv: null,
    satz: "Vergiss das Vorzeichen nicht.",
    anlam: "Unutmak (bir şeyi)",
  },
  {
    verben: "sich verlassen",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Auf mich kann man sich immer verlassen.",
    anlam: "Güvenmek (birine/bir şeye)",
  },
  {
    verben: "sich verlieben",
    präposition: "in",
    reflexiv: "sich",
    satz: "Britta hat sich in das alte Bauernhaus verliebt.",
    anlam: "Aşık olmak (birine/bir şeye)",
  },
  {
    verben: "sich verstehen",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Daniel versteht sich gut mit seinem Chef.",
    anlam: "İyi anlaşmak (biriyle)",
  },
  {
    verben: "verstehen",
    präposition: "von",
    reflexiv: null,
    satz: "Verstehst du etwas von Elektrik?",
    anlam: "Anlamak (bir şeyden)",
  },
  {
    verben: "sich vorbereiten",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Karl bereitet sich auf eine Präsentation vor.",
    anlam: "Hazırlanmak (bir şeye)",
  },
  {
    verben: "warnen",
    präposition: "vor",
    reflexiv: null,
    satz: "Man hatte ihn vor den hohen Kosten für das alte Auto gewarnt.",
    anlam: "Uyarmak (bir şey hakkında)",
  },
  {
    verben: "warten",
    präposition: "auf",
    reflexiv: null,
    satz: "In Namibia wartet man lange auf einen Bus.",
    anlam: "Beklemek (bir şeyi/birini)",
  },
  {
    verben: "werden",
    präposition: "zu",
    reflexiv: null,
    satz: "Unter null Grad wird Eis zu Wasser.",
    anlam: "Dönüşmek (bir şeye)",
  },
  {
    verben: "wissen",
    präposition: "von",
    reflexiv: null,
    satz: "Ich weiß nichts von neuen Computern für unser Team.",
    anlam: "Bilmek (bir şeyden)",
  },
  {
    verben: "sich wundern",
    präposition: "über",
    reflexiv: "sich",
    satz: "Viele Deutsche wundern sich über die plötzlich so hohen Stromkosten.",
    anlam: "Şaşırmak (bir şey hakkında)",
  },
  {
    verben: "zweifeln",
    präposition: "an",
    reflexiv: null,
    satz: "John zweifelt daran, dass sein Sohn die Wahrheit gesagt hat.",
    anlam: "Şüphe etmek (bir şeyden)",
  },
];

const prepositions = [
  "auf",
  "von",
  "mit",
  "über",
  "für",
  "bei",
  "um",
  "an",
  "zu",
  "nach",
  "vor",
  "gegen",
  "in",
  "unter",
];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPreposition, setSelectedPreposition] = useState(null);
  const [selectedAnlam, setSelectedAnlam] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Get random incorrect prepositions
  const getRandomPrepositions = (correctPreposition) => {
    const filteredPrepositions = prepositions.filter(
      (p) => p !== correctPreposition
    );
    const shuffled = filteredPrepositions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  // Get random incorrect anlam options
  const getRandomAnlamOptions = (correctAnlam) => {
    const filteredAnlam = sätze
      .map((item) => item.anlam)
      .filter((a) => a !== correctAnlam);
    const shuffled = filteredAnlam.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  // Current question data
  const currentQuestion = sätze[currentIndex];
  const correctPreposition = currentQuestion.präposition;
  const correctAnlam = currentQuestion.anlam;

  // Memoize preposition and anlam options to prevent re-shuffling on every render
  const prepositionOptions = useMemo(() => {
    const incorrectPrepositions = getRandomPrepositions(correctPreposition);
    return [correctPreposition, ...incorrectPrepositions].sort(
      () => 0.5 - Math.random()
    );
  }, [currentIndex, correctPreposition]);

  const anlamOptions = useMemo(() => {
    const incorrectAnlamOptions = getRandomAnlamOptions(correctAnlam);
    return [correctAnlam, ...incorrectAnlamOptions].sort(
      () => 0.5 - Math.random()
    );
  }, [currentIndex, correctAnlam]);

  // Handle answer submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPreposition && selectedAnlam) {
      const isPrepositionCorrect = selectedPreposition === correctPreposition;
      const isAnlamCorrect = selectedAnlam === correctAnlam;
      const isAllCorrect = isPrepositionCorrect && isAnlamCorrect;
      setIsCorrect(isAllCorrect);

      // Add to favorites if any answer is incorrect
      if (!isAllCorrect) {
        if (
          !favorites.some(
            (fav) =>
              fav.verben === currentQuestion.verben &&
              fav.präposition === currentQuestion.präposition
          )
        ) {
          setFavorites([...favorites, currentQuestion]);
        }
      }
    }
  };

  // Navigate to the next question
  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => Math.min(prev + 1, sätze.length - 1));
    setSelectedPreposition(null);
    setSelectedAnlam(null);
    setIsCorrect(null);
  };

  // Navigate to the previous question
  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setSelectedPreposition(null);
    setSelectedAnlam(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="flex w-full max-w-4xl space-x-4">
        {/* Test Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">
            Prepozisyon ve Anlam Testi
          </h1>
          <div className="mb-4">
            <p className="text-lg font-semibold">
              Fiil: {currentQuestion.verben}{" "}
              {currentQuestion.reflexiv ? `(${currentQuestion.reflexiv})` : ""}
            </p>
          </div>

          {/* Preposition Selection */}
          <div className="mb-4">
            <p className="font-medium mb-2">Doğru prepozisyonu seçin:</p>
            <div className="space-y-2">
              {prepositionOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedPreposition(option)}
                  disabled={isCorrect !== null}
                  className={`w-full py-2 px-4 rounded text-left transition-colors ${
                    selectedPreposition === option
                      ? isCorrect !== null
                        ? isCorrect &&
                          selectedPreposition === correctPreposition
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-blue-200"
                      : isCorrect !== null && option === correctPreposition
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Anlam Selection */}
          <div className="mb-4">
            <p className="font-medium mb-2">Fiilin Türkçe anlamını seçin:</p>
            <div className="space-y-2">
              {anlamOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedAnlam(option)}
                  disabled={isCorrect !== null}
                  className={`w-full py-2 px-4 rounded text-left transition-colors ${
                    selectedAnlam === option
                      ? isCorrect !== null
                        ? isCorrect && selectedAnlam === correctAnlam
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-blue-200"
                      : isCorrect !== null && option === correctAnlam
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={
              !selectedPreposition || !selectedAnlam || isCorrect !== null
            }
            className={`w-full py-2 px-4 rounded mb-4 ${
              !selectedPreposition || !selectedAnlam || isCorrect !== null
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Cevapla
          </button>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`py-2 px-4 rounded ${
                currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              ← Önceki
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === sätze.length - 1}
              className={`py-2 px-4 rounded ${
                currentIndex === sätze.length - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Sonraki →
            </button>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">
            Favoriler (Yanlış Yanıtlananlar)
          </h2>
          {favorites.length === 0 ? (
            <p className="text-gray-600">Henüz yanlış yanıtlanmış soru yok.</p>
          ) : (
            <ul className="space-y-2">
              {favorites.map((fav, index) => (
                <li key={index} className="border-b py-2">
                  <p>
                    <strong>Fiil:</strong> {fav.verben}{" "}
                    {fav.reflexiv ? `(${fav.reflexiv})` : ""}
                  </p>
                  <p>
                    <strong>Prepozisyon:</strong> {fav.präposition}
                  </p>
                  <p>
                    <strong>Anlam:</strong> {fav.anlam}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
