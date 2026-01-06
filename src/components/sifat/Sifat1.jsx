import React, { useState } from "react";

const Kitap = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const handleWordClick = (word, translation, event) => {
    setTooltip({
      visible: true,
      text: translation,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleCloseTooltip = () => {
    setTooltip({ visible: false, text: "", x: 0, y: 0 });
  };

  // Hikaye metni ve sıfatlar
  const storyContent = [
    {
      title: "Ein Sommerabenteuer in der Kleinstadt",
      paragraphs: [
        <>
          Es war ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("heißer", "sıcak", e)}
          >
            heißer
          </span>{" "}
          Sommer in der kleinen,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ruhigen", "sakin", e)}
          >
            ruhigen
          </span>{" "}
          Stadt Lindenburg, wo die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("grünen", "yeşil", e)}
          >
            grünen
          </span>{" "}
          Wiesen und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gelben", "sarı", e)}
          >
            gelben
          </span>{" "}
          Blumen die Landschaft prägten. Anna, eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("junge", "genç", e)}
          >
            junge
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sportliche", "sportif", e)}
          >
            sportliche
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("begeisterte", "hevesli", e)}
          >
            begeisterte
          </span>{" "}
          Studentin, beschloss, ihre Ferien dort zu verbringen, um dem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lauten", "gürültülü", e)}
          >
            lauten
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("beschäftigten", "meşgul", e)}
          >
            beschäftigten
          </span>{" "}
          Leben in der Großstadt zu entkommen. Sie war entschlossen,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("neue", "yeni", e)}
          >
            neue
          </span>{" "}
          Erfahrungen zu sammeln, und ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("neugierige", "meraklı", e)}
          >
            neugierige
          </span>{" "}
          Natur trieb sie an, die Umgebung zu erkunden.
        </>,
        <>
          Am ersten Tag bemerkte Anna ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("altes", "eski", e)}
          >
            altes
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("hässliches", "çirkin", e)}
          >
            hässliches
          </span>{" "}
          Gebäude am Rande der Stadt. Es war ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leeres", "boş", e)}
          >
            leeres
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("dunkles", "karanlık", e)}
          >
            dunkles
          </span>{" "}
          Haus mit{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwarzen", "siyah", e)}
          >
            schwarzen
          </span>{" "}
          Fensterläden, das{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("seltsam", "tuhaf", e)}
          >
            seltsam
          </span>{" "}
          und fast{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unheimlich", "tekinsiz", e)}
          >
            unheimlich
          </span>{" "}
          wirkte. Die Einheimischen erzählten, es sei ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("mysteriöses", "gizemli", e)}
          >
            mysteriöses
          </span>{" "}
          Anwesen, das seit Jahrzehnten unbewohnt war. Trotz der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwierigen", "zor", e)}
          >
            schwierigen
          </span>{" "}
          Geschichten, die darüber kursierten, war Anna{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("selbstbewusst", "kendine güvenli", e)
            }
          >
            selbstbewusst
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("wissbegierig", "bilgi meraklısı", e)
            }
          >
            wissbegierig
          </span>
          . Sie wollte die Wahrheit herausfinden.
        </>,
        <>
          Am nächsten Morgen, früh bei{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("hellem", "aydınlık", e)}
          >
            hellem
          </span>{" "}
          Tageslicht, machte sie sich auf den Weg. Sie trug ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("elegantes", "zarif", e)}
          >
            elegantes
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("blaues", "mavi", e)}
          >
            blaues
          </span>{" "}
          Kleid, das sowohl{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("praktisch", "kullanışlı", e)}
          >
            praktisch
          </span>{" "}
          als auch{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schön", "güzel", e)}
          >
            schön
          </span>{" "}
          war, und packte eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leichte", "hafif", e)}
          >
            leichte
          </span>{" "}
          Tasche mit Wasser, da sie nach dem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("langen", "uzun", e)}
          >
            langen
          </span>{" "}
          Spaziergang{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("durstig", "susamış", e)}
          >
            durstig
          </span>{" "}
          werden könnte. Der Weg zum Haus war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lang", "uzun", e)}
          >
            lang
          </span>
          , und die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("trockene", "kuru", e)}
          >
            trockene
          </span>{" "}
          Erde knirschte unter ihren Füßen. Unterwegs traf sie Paul, einen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("charmanten", "çekici", e)}
          >
            charmanten
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("athletischen", "atletik", e)}
          >
            athletischen
          </span>{" "}
          Mann, der in der Stadt als{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("zuverlässiger", "güvenilir", e)}
          >
            zuverlässiger
          </span>{" "}
          Handwerker bekannt war. Paul war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("fröhlich", "neşeli", e)}
          >
            fröhlich
          </span>
          , aber auch ein wenig{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schüchtern", "utangaç", e)}
          >
            schüchtern
          </span>
          , was Anna sofort{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sympathisch", "sevimli", e)}
          >
            sympathisch
          </span>{" "}
          fand.
        </>,
        <>
          „Was machst du hier draußen?“ fragte Paul{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leise", "alçak sesle", e)}
          >
            leise
          </span>
          , fast{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("verlegen", "utangaç", e)}
          >
            verlegen
          </span>
          . „Das Haus ist{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gefährlich", "tehlikeli", e)}
          >
            gefährlich
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("instabil", "kararsız", e)}
          >
            instabil
          </span>
          . Es ist nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sicher", "güvenli", e)}
          >
            sicher
          </span>
          .“ Anna lächelte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("selbstsicher", "kendine güvenle", e)
            }
          >
            selbstsicher
          </span>{" "}
          und antwortete: „Ich bin einfach{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("neugierig", "meraklı", e)}
          >
            neugierig
          </span>
          . Vielleicht ist es gar nicht so{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schlimm", "kötü", e)}
          >
            schlimm
          </span>
          , wie alle denken.“ Paul, der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geduldig", "sabırlı", e)}
          >
            geduldig
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("vernünftig", "mantıklı", e)}
          >
            vernünftig
          </span>{" "}
          war, bot an, sie zu begleiten, obwohl er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("besorgt", "endişeli", e)}
          >
            besorgt
          </span>{" "}
          wirkte. „Aber wir müssen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("vorsichtig", "dikkatli", e)}
          >
            vorsichtig
          </span>{" "}
          sein“, sagte er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("energisch", "enerjik", e)}
          >
            energisch
          </span>
          .
        </>,
        <>
          Gemeinsam näherten sie sich dem Haus. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("feuchte", "nemli", e)}
          >
            feuchte
          </span>{" "}
          Luft nach dem Regen der letzten Nacht machte den Boden{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("nass", "ıslak", e)}
          >
            nass
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("rutschig", "kaygan", e)}
          >
            rutschig
          </span>
          , aber Anna war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("aufmerksam", "dikkatli", e)}
          >
            aufmerksam
          </span>{" "}
          und achtete auf jeden Schritt. Im Inneren war das Haus{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("chaotisch", "düzensiz", e)}
          >
            chaotisch
          </span>
          :{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schmutzige", "kirli", e)}
          >
            schmutzige
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("graue", "gri", e)}
          >
            graue
          </span>{" "}
          Wände,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("hölzerne", "ahşap", e)}
          >
            hölzerne
          </span>{" "}
          Möbel, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wertlos", "değersiz", e)}
          >
            wertlos
          </span>{" "}
          wirkten, und ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unangenehmer", "nahoş", e)}
          >
            unangenehmer
          </span>{" "}
          Geruch, der in der Luft lag. Dennoch entdeckten sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kostbare", "değerli", e)}
          >
            kostbare
          </span>{" "}
          Gegenstände, wie eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("durchsichtige", "şeffaf", e)}
          >
            durchsichtige
          </span>{" "}
          Glasvase und ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("rotes", "kırmızı", e)}
          >
            rotes
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("romantisches", "romantik", e)}
          >
            romantisches
          </span>{" "}
          Gemälde, das überraschend{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lebendig", "canlı", e)}
          >
            lebendig
          </span>{" "}
          wirkte.
        </>,
        <>
          Plötzlich hörten sie ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lautes", "yüksek sesli", e)}
          >
            lautes
          </span>{" "}
          Knarren. Paul wurde{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("nervös", "gergin", e)}
          >
            nervös
          </span>{" "}
          und flüsterte: „Das klingt{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bedrohlich", "tehditkâr", e)}
          >
            bedrohlich
          </span>
          . Lass uns gehen!“ Doch Anna, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("entspannt", "rahat", e)}
          >
            entspannt
          </span>{" "}
          blieb, untersuchte die Quelle des Geräuschs{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gründlich", "titizlikle", e)}
          >
            gründlich
          </span>
          . Es war nur ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lockeres", "gevşek", e)}
          >
            lockeres
          </span>{" "}
          Brett, nichts{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("Schwerwiegendes", "ciddi", e)}
          >
            Schwerwiegendes
          </span>
          . Ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("systematische", "sistematik", e)}
          >
            systematische
          </span>{" "}
          Herangehensweise beruhigte Paul, der sich langsam{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("entspannte", "rahatladı", e)}
          >
            entspannte
          </span>
          .
        </>,
        <>
          Während sie weiter erkundeten, fanden sie ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("altes", "eski", e)}
          >
            altes
          </span>{" "}
          Tagebuch, das von einer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("reichen", "zengin", e)}
          >
            reichen
          </span>
          , aber{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einsamen", "yalnız", e)}
          >
            einsamen
          </span>{" "}
          Frau stammte, die einst hier lebte. Ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("traurige", "üzücü", e)}
          >
            traurige
          </span>{" "}
          Geschichte war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("emotional", "duygusal", e)}
          >
            emotional
          </span>{" "}
          und rührte Anna, die normalerweise eher{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("rational", "mantıklı", e)}
          >
            rational
          </span>{" "}
          dachte. Die Frau schrieb über ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("konservativen", "muhafazakâr", e)}
          >
            konservativen
          </span>{" "}
          Ansichten, ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("traditionellen", "geleneksel", e)}
          >
            traditionellen
          </span>{" "}
          Werte und ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("intolerante", "hoşgörüsüz", e)}
          >
            intolerante
          </span>{" "}
          Familie, die sie zur Isolation zwang. „Wie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ungerecht", "haksız", e)}
          >
            ungerecht
          </span>
          “, murmelte Anna, während Paul, der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("tolerant", "hoşgörülü", e)}
          >
            tolerant
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("demütig", "alçakgönüllü", e)}
          >
            demütig
          </span>{" "}
          war, zustimmte: „Manchmal ist das Leben{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("brutal", "acımasız", e)}
          >
            brutal
          </span>
          .“
        </>,
        <>
          Die beiden verbrachten den Tag damit, das Haus zu erkunden, und trotz
          der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("erschöpfenden", "yorucu", e)}
          >
            erschöpfenden
          </span>{" "}
          Arbeit fühlten sie sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("glücklich", "mutlu", e)}
          >
            glücklich
          </span>
          . Pauls{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sanfte", "nazik", e)}
          >
            sanfte
          </span>{" "}
          Art und Annas{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("originelle", "orijinal", e)}
          >
            originelle
          </span>{" "}
          Ideen machten die Zeit{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("angenehm", "hoş", e)}
          >
            angenehm
          </span>
          . Sie entschieden sich, die Funde dem lokalen Museum zu schenken, da
          sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("nützlich", "faydalı", e)}
          >
            nützlich
          </span>{" "}
          für die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kulturelle", "kültürel", e)}
          >
            kulturelle
          </span>{" "}
          Geschichte der Stadt sein könnten. Der Museumsleiter, ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kompetenter", "yetkin", e)}
          >
            kompetenter
          </span>
          , aber etwas{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("arroganter", "kibirli", e)}
          >
            arroganter
          </span>{" "}
          Mann, war zunächst{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("distanziert", "mesafeli", e)}
          >
            distanziert
          </span>
          , doch Annas{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("überzeugende", "ikna edici", e)}
          >
            überzeugende
          </span>{" "}
          Argumente und Pauls{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("anständiges", "saygın", e)}
          >
            anständiges
          </span>{" "}
          Auftreten überzeugten ihn.
        </>,
        <>
          Am Abend, nach einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("langen", "uzun", e)}
          >
            langen
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("großartigen", "harika", e)}
          >
            großartigen
          </span>{" "}
          Tag, saßen Anna und Paul auf einer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("festen", "sağlam", e)}
          >
            festen
          </span>{" "}
          Bank am{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ruhigen", "sakin", e)}
          >
            ruhigen
          </span>{" "}
          Stadtrand. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("warme", "ılık", e)}
          >
            warme
          </span>{" "}
          Sommerluft und der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("klare", "açık", e)}
          >
            klare
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("blaue", "mavi", e)}
          >
            blaue
          </span>{" "}
          Himmel schufen eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("romantische", "romantik", e)}
          >
            romantische
          </span>{" "}
          Atmosphäre. Anna war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("dankbar", "minnettar", e)}
          >
            dankbar
          </span>{" "}
          für Pauls Hilfe, während er, der sonst eher{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("zurückhaltend", "çekingen", e)}
          >
            zurückhaltend
          </span>{" "}
          war, zugab: „Du bist{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unkompliziert", "sade", e)}
          >
            unkompliziert
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("inspirierend", "ilham verici", e)}
          >
            inspirierend
          </span>
          .“ Anna lachte und fühlte sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geschmeichelt", "memnun", e)}
          >
            geschmeichelt
          </span>
          .
        </>,
        <>
          Die Erfahrung hatte beide verändert. Anna, die manchmal{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("eilig", "aceleci", e)}
          >
            eilig
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("launisch", "kaprisli", e)}
          >
            launisch
          </span>{" "}
          war, lernte,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geduldiger", "daha sabırlı", e)}
          >
            geduldiger
          </span>{" "}
          zu sein, während Paul, der oft{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unentschlossen", "kararsız", e)}
          >
            unentschlossen
          </span>{" "}
          war,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("entschlossener", "daha kararlı", e)
            }
          >
            entschlossener
          </span>{" "}
          wurde. Ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ausgeglichene", "dengeli", e)}
          >
            ausgeglichene
          </span>{" "}
          Freundschaft wuchs, und sie wussten, dass dies nur der Anfang eines{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("spannenden", "heyecan verici", e)}
          >
            spannenden
          </span>{" "}
          Abenteuers war.
        </>,
        <>
          Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("saubere", "temiz", e)}
          >
            saubere
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("freie", "özgür", e)}
          >
            freie
          </span>{" "}
          Luft der Stadt und die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einfache", "basit", e)}
          >
            einfache
          </span>
          , aber{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bedeutungsvolle", "anlamlı", e)}
          >
            bedeutungsvolle
          </span>{" "}
          Zeit im{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("regionalen", "bölgesel", e)}
          >
            regionalen
          </span>{" "}
          Lindenburg hinterließen bei beiden ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gutes", "iyi", e)}
          >
            gutes
          </span>{" "}
          Gefühl. Obwohl die Herausforderungen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwer", "zor", e)}
          >
            schwer
          </span>{" "}
          waren, hatten sie gemeinsam etwas{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wichtiges", "önemli", e)}
          >
            wichtiges
          </span>{" "}
          erreicht. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schlanke", "zarif", e)}
          >
            schlanke
          </span>{" "}
          Anna und der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("korpulente", "iri yapılı", e)}
          >
            korpulente
          </span>{" "}
          Paul, die so{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unterschiedlich", "farklı", e)}
          >
            unterschiedlich
          </span>{" "}
          wirkten, hatten bewiesen, dass{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("starke", "güçlü", e)}
          >
            starke
          </span>{" "}
          Zusammenarbeit und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("offene", "açık", e)}
          >
            offene
          </span>{" "}
          Herzen jede{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwierige", "zor", e)}
          >
            schwierige
          </span>{" "}
          Aufgabe{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leicht", "kolay", e)}
          >
            leicht
          </span>{" "}
          machen können.
        </>,
      ],
    },
    {
      title: "Ein Sommerabenteuer in der Kleinstadt – Teil 2",
      paragraphs: [
        <>
          Anna und Paul hatten nach ihrem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("faszinierenden", "büyüleyici", e)}
          >
            faszinierenden
          </span>{" "}
          Abenteuer im{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("alten", "eski", e)}
          >
            alten
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unheimlichen", "tekinsiz", e)}
          >
            unheimlichen
          </span>{" "}
          Haus eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("enge", "sıkı", e)}
          >
            enge
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("herzliche", "içten", e)}
          >
            herzliche
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ehrliche", "dürüst", e)}
          >
            ehrliche
          </span>{" "}
          Freundschaft entwickelt. Ihre gemeinsame Entdeckung des Tagebuchs war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bedeutend", "önemli", e)}
          >
            bedeutend
          </span>
          , denn es enthielt{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("konkrete", "somut", e)}
          >
            konkrete
          </span>{" "}
          Hinweise auf die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("historische", "tarihi", e)}
          >
            historische
          </span>{" "}
          Vergangenheit von Lindenburg. Die beiden waren{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("begeistert", "coşkulu", e)}
          >
            begeistert
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("motiviert", "hevesli", e)}
          >
            motiviert
          </span>
          , mehr über die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einsame", "yalnız", e)}
          >
            einsame
          </span>{" "}
          Frau zu erfahren, deren Leben so{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("traurig", "üzücü", e)}
          >
            traurig
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bitter", "acı", e)}
          >
            bitter
          </span>{" "}
          gewesen war.
        </>,
        <>
          Am nächsten Tag, einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("klaren", "açık", e)}
          >
            klaren
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("warmen", "ılık", e)}
          >
            warmen
          </span>{" "}
          Morgen, trafen sie sich in einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gemütlichen", "rahat", e)}
          >
            gemütlichen
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kleinen", "küçük", e)}
          >
            kleinen
          </span>{" "}
          Café in der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("belebten", "canlı", e)}
          >
            belebten
          </span>{" "}
          Innenstadt. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("freundliche", "nazik", e)}
          >
            freundliche
          </span>{" "}
          Bedienung brachte ihnen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lecker", "lezzetli", e)}
          >
            lecker
          </span>{" "}
          duftenden Kaffee und ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("süßes", "tatlı", e)}
          >
            süßes
          </span>{" "}
          Gebäck, das{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("köstlich", "nefis", e)}
          >
            köstlich
          </span>{" "}
          schmeckte. Anna, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("jung", "genç", e)}
          >
            jung
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("optimistisch", "iyimser", e)}
          >
            optimistisch
          </span>{" "}
          war, schlug vor, das lokale Archiv zu besuchen, um{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("zahlreiche", "çok sayıda", e)}
          >
            zahlreiche
          </span>{" "}
          Dokumente zu durchsuchen. Paul, der eher{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bescheiden", "mütevazı", e)}
          >
            bescheiden
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ruhig", "sakin", e)}
          >
            ruhig
          </span>{" "}
          war, stimmte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("zögernd", "tereddütle", e)}
          >
            zögernd
          </span>{" "}
          zu, da er die Aufgabe für{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwierig", "zor", e)}
          >
            schwierig
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("langwierig", "uzun süren", e)}
          >
            langwierig
          </span>{" "}
          hielt. Doch Annas{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("grenzenlose", "sınırsız", e)}
          >
            grenzenlose
          </span>{" "}
          Begeisterung war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ansteckend", "bulaşıcı", e)}
          >
            ansteckend
          </span>
          , und bald war er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gespannt", "meraklı", e)}
          >
            gespannt
          </span>{" "}
          auf die Ergebnisse.
        </>,
        <>
          Das Archiv war ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geräumiges", "geniş", e)}
          >
            geräumiges
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("modernes", "modern", e)}
          >
            modernes
          </span>{" "}
          Gebäude mit{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("breiten", "geniş", e)}
          >
            breiten
          </span>{" "}
          Fenstern und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sauberen", "temiz", e)}
          >
            sauberen
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ordentlichen", "düzenli", e)}
          >
            ordentlichen
          </span>{" "}
          Regalen. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("höfliche", "nazik", e)}
          >
            höfliche
          </span>{" "}
          Archivarin, eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("intelligente", "zeki", e)}
          >
            intelligente
          </span>{" "}
          Frau mit einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("scharfen", "keskin", e)}
          >
            scharfen
          </span>{" "}
          Verstand, erklärte ihnen, dass die Suche nach{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("relevanten", "ilgili", e)}
          >
            relevanten
          </span>{" "}
          Informationen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("möglich", "mümkün", e)}
          >
            möglich
          </span>
          , aber nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einfach", "kolay", e)}
          >
            einfach
          </span>{" "}
          sei. Anna war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("aufmerksam", "dikkatli", e)}
          >
            aufmerksam
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schnell", "hızlı", e)}
          >
            schnell
          </span>
          , während Paul{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geduldig", "sabırlı", e)}
          >
            geduldig
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gründlich", "titiz", e)}
          >
            gründlich
          </span>{" "}
          vorging. Gemeinsam fanden sie ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("dickes", "kalın", e)}
          >
            dickes
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schmutziges", "kirli", e)}
          >
            schmutziges
          </span>{" "}
          Buch, das{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("vergessene", "unutulmuş", e)}
          >
            vergessene
          </span>{" "}
          Aufzeichnungen enthielt. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("dünnen", "ince", e)}
          >
            dünnen
          </span>{" "}
          Seiten waren{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("empfindlich", "hassas", e)}
          >
            empfindlich
          </span>
          , und sie mussten{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("vorsichtig", "dikkatli", e)}
          >
            vorsichtig
          </span>{" "}
          sein, um sie nicht zu beschädigen.
        </>,
        <>
          Die Aufzeichnungen erzählten von einer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("reichen", "zengin", e)}
          >
            reichen
          </span>
          , aber{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einsamen", "yalnız", e)}
          >
            einsamen
          </span>{" "}
          Frau, die in einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kurfürstlichen", "seçkin", e)}
          >
            kurfürstlichen
          </span>{" "}
          Anwesen lebte. Sie war verheiratet, doch ihre Ehe war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kühl", "soğuk", e)}
          >
            kühl
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("unbefriedigend", "tatmin edici olmayan", e)
            }
          >
            unbefriedigend
          </span>
          . Ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("konservativen", "muhafazakâr", e)}
          >
            konservativen
          </span>{" "}
          Ansichten und die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("strenge", "katı", e)}
          >
            strenge
          </span>{" "}
          Haltung ihrer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("intoleranten", "hoşgörüsüz", e)}
          >
            intoleranten
          </span>{" "}
          Familie hatten sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("seelisch", "manevi olarak", e)}
          >
            seelisch
          </span>{" "}
          belastet. Ihr{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("persönlicher", "kişisel", e)}
          >
            persönlicher
          </span>{" "}
          Wunsch, ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("freies", "özgür", e)}
          >
            freies
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kreatives", "yaratıcı", e)}
          >
            kreatives
          </span>{" "}
          Leben zu führen, war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("undenkbar", "düşünülemez", e)}
          >
            undenkbar
          </span>{" "}
          gewesen. Anna war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("betroffen", "üzgün", e)}
          >
            betroffen
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bedrückt", "morali bozuk", e)}
          >
            bedrückt
          </span>
          , während Paul, der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("fair", "adil", e)}
          >
            fair
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("mitfühlend", "şefkatli", e)}
          >
            mitfühlend
          </span>{" "}
          war, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ungerechte", "haksız", e)}
          >
            ungerechte
          </span>{" "}
          Behandlung der Frau als{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("brutal", "acımasız", e)}
          >
            brutal
          </span>{" "}
          bezeichnete. „Es ist{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schrecklich", "korkunç", e)}
          >
            schrecklich
          </span>
          , wie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geizig", "cimri", e)}
          >
            geizig
          </span>{" "}
          Menschen mit Freiheit sein können“, sagte er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ernst", "ciddi", e)}
          >
            ernst
          </span>
          .
        </>,
        <>
          Die beiden entdeckten, dass die Frau eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("begabte", "yetenekli", e)}
          >
            begabte
          </span>{" "}
          Künstlerin war, deren{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einzigartiger", "benzersiz", e)}
          >
            einzigartiger
          </span>{" "}
          Stil{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unverkennbar", "ayrılmaz", e)}
          >
            unverkennbar
          </span>{" "}
          war. Ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lebendigen", "canlı", e)}
          >
            lebendigen
          </span>{" "}
          Gemälde, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("romantische", "romantik", e)}
          >
            romantische
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kulturelle", "kültürel", e)}
          >
            kulturelle
          </span>{" "}
          Szenen darstellten, waren jedoch{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unbekannt", "bilinmeyen", e)}
          >
            unbekannt
          </span>{" "}
          geblieben. Anna und Paul waren{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("fasziniert", "büyülenmiş", e)}
          >
            fasziniert
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("verblüfft", "şaşırmış", e)}
          >
            verblüfft
          </span>
          , dass solche{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kostbaren", "değerli", e)}
          >
            kostbaren
          </span>{" "}
          Werke in einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leeren", "boş", e)}
          >
            leeren
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("dunklen", "karanlık", e)}
          >
            dunklen
          </span>{" "}
          Haus verborgen waren. Sie beschlossen, die Gemälde dem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("renommierten", "saygın", e)}
          >
            renommierten
          </span>{" "}
          Museum zu übergeben, damit sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("öffentlich", "kamuya açık", e)}
          >
            öffentlich
          </span>{" "}
          ausgestellt werden konnten. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("begehrte", "çok istenen", e)}
          >
            begehrte
          </span>{" "}
          Sammlung würde sicher{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("zahlreiche", "çok sayıda", e)}
          >
            zahlreiche
          </span>{" "}
          Besucher anziehen.
        </>,
        <>
          Die Übergabe war nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unproblematisch", "sorunsuz", e)}
          >
            unproblematisch
          </span>
          . Der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("arroganter", "kibirli", e)}
          >
            arroganter
          </span>{" "}
          Museumsleiter war zunächst{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unfreundlich", "kaba", e)}
          >
            unfreundlich
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("pessimistisch", "karamsar", e)}
          >
            pessimistisch
          </span>
          , da er die Herkunft der Gemälde für{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ungültig", "geçersiz", e)}
          >
            ungültig
          </span>{" "}
          hielt. Doch Anna, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("mutig", "cesur", e)}
          >
            mutig
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("überzeugend", "ikna edici", e)}
          >
            überzeugend
          </span>{" "}
          war, präsentierte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("konkrete", "somut", e)}
          >
            konkrete
          </span>{" "}
          Beweise, während Paul mit seiner{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ruhigen", "sakin", e)}
          >
            ruhigen
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("höflichen", "nazik", e)}
          >
            höflichen
          </span>{" "}
          Art die Spannungen löste. Schließlich nickte der Leiter{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("anerkennend", "takdirle", e)}
          >
            anerkennend
          </span>{" "}
          und erklärte die Gemälde für{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("echt", "gerçek", e)}
          >
            echt
          </span>
          . Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("erleichterten", "rahatlamış", e)}
          >
            erleichterten
          </span>{" "}
          Freunde waren{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("zufrieden", "memnun", e)}
          >
            zufrieden
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("stolz", "gururlu", e)}
          >
            stolz
          </span>{" "}
          auf ihren Erfolg.
        </>,
        <>
          Am Abend saßen sie wieder auf der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("festen", "sağlam", e)}
          >
            festen
          </span>{" "}
          Bank am{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ruhigen", "sakin", e)}
          >
            ruhigen
          </span>{" "}
          Stadtrand, wo die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("warme", "ılık", e)}
          >
            warme
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("abendliche", "akşam", e)}
          >
            abendliche
          </span>{" "}
          Luft eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("romantische", "romantik", e)}
          >
            romantische
          </span>{" "}
          Stimmung schuf. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("tausend", "bin", e)}
          >
            tausend
          </span>{" "}
          Sterne am{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("klaren", "açık", e)}
          >
            klaren
          </span>{" "}
          Himmel funkelten{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("fantastisch", "harika", e)}
          >
            fantastisch
          </span>
          , und Anna fühlte sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("glücklich", "mutlu", e)}
          >
            glücklich
          </span>
          . „Das war ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("großartiges", "harika", e)}
          >
            großartiges
          </span>{" "}
          Abenteuer“, sagte sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("herzlich", "içten", e)}
          >
            herzlich
          </span>
          . Paul, der{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schüchtern", "utangaç", e)}
          >
            schüchtern
          </span>
          , aber{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ehrlich", "dürüst", e)}
          >
            ehrlich
          </span>{" "}
          war, erwiderte: „Du bist{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("hübsch", "güzel", e)}
          >
            hübsch
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("klug", "akıllı", e)}
          >
            klug
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in Bundle geraten inspirierend",
                "ilham verici",
                e
              )
            }
          >
            inspirierend
          </span>
          . Ohne dich wäre das{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unmöglich", "imkânsız", e)}
          >
            unmöglich
          </span>{" "}
          gewesen.“ Anna lachte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("fröhlich", "neşeyle", e)}
          >
            fröhlich
          </span>{" "}
          und fühlte sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geschmeichelt", "memnun", e)}
          >
            geschmeichelt
          </span>
          .
        </>,
        <>
          Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("intensive", "yoğun", e)}
          >
            intensive
          </span>{" "}
          Zusammenarbeit hatte beide geprägt. Anna lernte,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geduldiger", "daha sabırlı", e)}
          >
            geduldiger
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ausgewogener", "daha dengeli", e)}
          >
            ausgewogener
          </span>{" "}
          zu sein, während Paul{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("entschlossener", "daha kararlı", e)
            }
          >
            entschlossener
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("selbstbewusster", "daha kendine güvenli", e)
            }
          >
            selbstbewusster
          </span>{" "}
          wurde. Ihre{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("vielfältige", "çeşitli", e)}
          >
            vielfältige
          </span>{" "}
          Freundschaft war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sinnvoll", "anlamlı", e)}
          >
            sinnvoll
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wertvoll", "değerli", e)}
          >
            wertvoll
          </span>
          , und sie wussten, dass sie gemeinsam noch viele{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("spannende", "heyecan verici", e)}
          >
            spannende
          </span>{" "}
          Herausforderungen meistern würden. Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kulturelle", "kültürel", e)}
          >
            kulturelle
          </span>{" "}
          Entdeckung war nicht nur{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wichtig", "önemli", e)}
          >
            wichtig
          </span>{" "}
          für Lindenburg, sondern auch ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("persönlicher", "kişisel", e)}
          >
            persönlicher
          </span>{" "}
          Triumph für die beiden.
        </>,
        <>
          Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("saubere", "temiz", e)}
          >
            saubere
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("freie", "özgür", e)}
          >
            freie
          </span>{" "}
          Luft der kleinen Stadt und die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bedeutungsvolle", "anlamlı", e)}
          >
            bedeutungsvolle
          </span>{" "}
          Zeit hatten ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gutes", "iyi", e)}
          >
            gutes
          </span>{" "}
          Gefühl hinterlassen. Obwohl die Aufgaben{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwer", "zor", e)}
          >
            schwer
          </span>{" "}
          und manchmal{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("verwirrend", "kafa karıştırıcı", e)
            }
          >
            verwirrend
          </span>{" "}
          waren, hatten Anna und Paul bewiesen, dass{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("starke", "güçlü", e)}
          >
            starke
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("offene", "açık", e)}
          >
            offene
          </span>{" "}
          Herzen und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schnelle", "hızlı", e)}
          >
            schnelle
          </span>{" "}
          Köpfe jede{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwierige", "zor", e)}
          >
            schwierige
          </span>{" "}
          Situation{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leicht", "kolay", e)}
          >
            leicht
          </span>{" "}
          machen können. Ihr{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einzigartiges", "benzersiz", e)}
          >
            einzigartiges
          </span>{" "}
          Abenteuer war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unvergesslich", "unutulmaz", e)}
          >
            unvergesslich
          </span>
          , und die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("lebendige", "canlı", e)}
          >
            lebendige
          </span>{" "}
          Erinnerung daran würde sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("langfristig", "uzun vadeli", e)}
          >
            langfristig
          </span>{" "}
          begleiten.
        </>,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        {storyContent.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              {section.title}
            </h1>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed bg-black text-white text-sm rounded px-2 py-1 shadow-lg"
          style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
          onClick={handleCloseTooltip}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Kitap;
