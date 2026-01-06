import React, { useState } from "react";

// 295 veriyi içeren JSON yapısı (Almanca kelime/cümle ve Türkçe anlamları)
const words = [
  { id: 1, german: "ruhiger", turkish: "sakin" },
  { id: 2, german: "kleinen", turkish: "küçük" },
  { id: 3, german: "historischen", turkish: "tarihi" },
  { id: 4, german: "junge", turkish: "genç" },
  { id: 5, german: "intelligente", turkish: "zeki" },
  { id: 6, german: "fleißige", turkish: "çalışkan" },
  { id: 7, german: "gemütlichen", turkish: "rahat" },
  { id: 8, german: "große", turkish: "büyük" },
  { id: 9, german: "aufgeregt", turkish: "heyecanlı" },
  { id: 10, german: "einzigartigen", turkish: "eşsiz" },
  { id: 11, german: "internationalen", turkish: "uluslararası" },
  { id: 12, german: "optimistisch", turkish: "iyimser" },
  { id: 13, german: "nervös", turkish: "gergin" },
  { id: 14, german: "kulturelle", turkish: "kültürel" },
  { id: 15, german: "belebt**en", turkish: "canlı" },
  { id: 16, german: "zahlreiche", turkish: "çok sayıda" },
  { id: 17, german: "renommierte", turkish: "saygın" },
  { id: 18, german: "persönlicher", turkish: "kişisel" },
  { id: 19, german: "geprägt", turkish: "etkilenmiş" },
  { id: 20, german: "prägenden", turkish: "şekillendirici" },
  { id: 21, german: "unverkennbar", turkish: "belirgin" },
  { id: 22, german: "hohe", turkish: "yüksek" },
  { id: 23, german: "unsicher", turkish: "emin olmayan" },
  { id: 24, german: "ausreichend", turkish: "yeterli" },
  { id: 25, german: "bedeutend", turkish: "önemli" },
  { id: 26, german: "leichten Lächeln", turkish: "hafifçe gülümsedi" },
  { id: 27, german: "Sie lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 28, german: "freundlicher", turkish: "arkadaş canlısı" },
  { id: 29, german: "geselliger", turkish: "sosyal" },
  { id: 30, german: "herzliche", turkish: "içten" },
  { id: 31, german: "bereit", turkish: "hazır" },
  { id: 32, german: "gespannt", turkish: "meraklı" },
  { id: 33, german: "breiten", turkish: "geniş" },
  {
    id: 34,
    german: "nickte zustimmend",
    turkish: "onaylayarak başını salladı",
  },
  {
    id: 35,
    german: "Sie biss sich auf die Lippe",
    turkish: "dudaklarını ısırdı",
  },
  { id: 36, german: "fast", turkish: "neredeyse" },
  { id: 37, german: "schwierige", turkish: "zor" },
  { id: 38, german: "aufmerksam", turkish: "dikkatli" },
  { id: 39, german: "prima", turkish: "harika" },
  { id: 40, german: "fantastisch", turkish: "fantastik" },
  { id: 41, german: "faszinieren", turkish: "büyülemek" },
  { id: 42, german: "stillen", turkish: "sessiz" },
  { id: 43, german: "perfekt", turkish: "mükemmel" },
  { id: 44, german: "lebendiger", turkish: "canlı" },
  { id: 45, german: "intensiver", turkish: "yoğun" },
  { id: 46, german: "tiefen", turkish: "derin" },
  { id: 47, german: "weiten", turkish: "geniş" },
  { id: 48, german: "ruhigen", turkish: "sakin" },
  { id: 49, german: "langwierige", turkish: "uzun süren" },
  { id: 50, german: "dickes", turkish: "kalın" },
  { id: 51, german: "runzelte sie die Stirn", turkish: "kaşlarını çattı" },
  { id: 52, german: "modern", turkish: "modern" },
  { id: 53, german: "altmodisch", turkish: "eski moda" },
  {
    id: 54,
    german: "presste die Lippen zusammen",
    turkish: "dudaklarını sıktı",
  },
  { id: 55, german: "große", turkish: "büyük" },
  { id: 56, german: "belebt**e", turkish: "canlı" },
  { id: 57, german: "zahlreiche", turkish: "çok sayıda" },
  { id: 58, german: "berühmter", turkish: "ünlü" },
  { id: 59, german: "scharfen", turkish: "keskin" },
  { id: 60, german: "schwarzen", turkish: "siyah" },
  { id: 61, german: "hübschen", turkish: "hoş" },
  { id: 62, german: "Sie richtete sich auf", turkish: "dik durdu" },
  { id: 63, german: "verzweifelt", turkish: "çaresiz" },
  { id: 64, german: "weiteten sich ihre Augen", turkish: "gözleri büyüdü" },
  { id: 65, german: "tiefe", turkish: "derin" },
  {
    id: 66,
    german: "nickte anerkennend",
    turkish: "takdir edici bir şekilde başını salladı",
  },
  { id: 67, german: "Eindrucksvoll", turkish: "etkileyici" },
  { id: 68, german: "sinnvoll", turkish: "anlamlı" },
  { id: 69, german: "ausgewogen", turkish: "dengeli" },
  { id: 70, german: "persönlichen", turkish: "kişisel" },
  { id: 71, german: "unverkennbar", turkish: "belirgin" },
  { id: 72, german: "erleichtert", turkish: "rahatlamış" },
  { id: 73, german: "leichtes Lächeln", turkish: "hafifçe gülümsedi" },
  { id: 74, german: "unfreundliche", turkish: "soğuk" },
  { id: 75, german: "bittere", turkish: "acı" },
  { id: 76, german: "verzog den Mund", turkish: "yüzünü buruşturdu" },
  { id: 77, german: "einfach", turkish: "basit" },
  {
    id: 78,
    german: "presste die Lippen zusammen",
    turkish: "dudaklarını sıktı",
  },
  { id: 79, german: "senkte den Blick", turkish: "gözlerini indirdi" },
  { id: 80, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 81, german: "lustig", turkish: "komik" },
  { id: 82, german: "wichtig", turkish: "önemli" },
  { id: 83, german: "lockere", turkish: "rahat" },
  { id: 84, german: "großer", turkish: "büyük" },
  { id: 85, german: "zufrieden", turkish: "memnun" },
  { id: 86, german: "herzliche", turkish: "içten" },
  { id: 87, german: "fairen", turkish: "adil" },
  {
    id: 88,
    german: "hob beschwichtigend die Hände",
    turkish: "yatıştırmak için ellerini kaldırdı",
  },
  { id: 89, german: "richtige", turkish: "doğru" },
  { id: 90, german: "fantastische", turkish: "fantastik" },
  { id: 91, german: "klar", turkish: "net" },
  { id: 92, german: "intensive", turkish: "yoğun" },
  { id: 93, german: "motiviert", turkish: "motive" },
  { id: 94, german: "allein", turkish: "yalnız" },
  { id: 95, german: "ruhigen", turkish: "sakin" },
  { id: 96, german: "schönen", turkish: "güzel" },
  { id: 97, german: "lächelte sie leicht", turkish: "hafifçe gülümsedi" },
  { id: 98, german: "vergangenen", turkish: "geçmiş" },
  { id: 99, german: "harter", turkish: "sert" },
  { id: 100, german: "extremer", turkish: "aşırı" },
  { id: 101, german: "geprägt", turkish: "etkilenmiş" },
  { id: 102, german: "stolz", turkish: "gururlu" },
  { id: 103, german: "bescheiden", turkish: "mütevazı" },
  { id: 104, german: "tiefen", turkish: "derin" },
  { id: 105, german: "grenzenlos", turkish: "sınırsız" },
  { id: 106, german: "faszinierend", turkish: "büyüleyici" },
  { id: 107, german: "bereit", turkish: "hazır" },
  { id: 108, german: "zahlreiche", turkish: "çok sayıda" },
  { id: 109, german: "begeistert", turkish: "coşkulu" },
  { id: 110, german: "bedrückt", turkish: "üzgün" },
  {
    id: 111,
    german: "trat nervös von einem Fuß auf den anderen",
    turkish: "gergin bir şekilde ayak değiştirdi",
  },
  { id: 112, german: "freundliche", turkish: "dostça" },
  { id: 113, german: "höfliche", turkish: "kibar" },
  { id: 114, german: "begehrt", turkish: "aranan" },
  { id: 115, german: "Besonderes", turkish: "özel" },
  { id: 116, german: "vielfältige", turkish: "çeşitli" },
  { id: 117, german: "modernen", turkish: "modern" },
  { id: 118, german: "historischen", turkish: "tarihi" },
  { id: 119, german: "unterschiedlich", turkish: "farklı" },
  { id: 120, german: "sinnvoll", turkish: "anlamlı" },
  { id: 121, german: "geräumigen", turkish: "ferah" },
  { id: 122, german: "neu", turkish: "yeni" },
  { id: 123, german: "lebendige", turkish: "canlı" },
  { id: 124, german: "glücklich", turkish: "mutlu" },
  { id: 125, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 126, german: "unhöflicher", turkish: "kaba" },
  { id: 127, german: "unpraktisch", turkish: "pratik olmayan" },
  { id: 128, german: "hob eine Augenbraue", turkish: "kaşını kaldırdı" },
  { id: 129, german: "kühl", turkish: "mesafeli" },
  { id: 130, german: "praktisch", turkish: "pratik" },
  { id: 131, german: "verzog das Gesicht", turkish: "yüzünü ekşitti" },
  { id: 132, german: "zuckte zusammen", turkish: "irkildi" },
  { id: 133, german: "mutige", turkish: "cesur" },
  { id: 134, german: "ehrliche", turkish: "dürüst" },
  { id: 135, german: "abendlichen", turkish: "akşamla ilgili" },
  { id: 136, german: "italienische", turkish: "İtalyan" },
  { id: 137, german: "gesellig", turkish: "sosyal" },
  { id: 138, german: "herzlich", turkish: "içten" },
  { id: 139, german: "toll", turkish: "harika" },
  { id: 140, german: "winke ihr zu", turkish: "ona el salladı" },
  { id: 141, german: "lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 142, german: "warm", turkish: "sıcak" },
  { id: 143, german: "kleines", turkish: "küçük" },
  { id: 144, german: "gemütliche", turkish: "rahat" },
  { id: 145, german: "lustige", turkish: "komik" },
  { id: 146, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 147, german: "lebendig", turkish: "canlı" },
  { id: 148, german: "unbekannten", turkish: "bilinmeyen" },
  { id: 149, german: "Seine Augen weiteten sich", turkish: "gözleri büyüdü" },
  { id: 150, german: "aufmerksam", turkish: "dikkatli" },
  {
    id: 151,
    german: "nickte zustimmend",
    turkish: "onaylayarak başını salladı",
  },
  { id: 152, german: "eigenen", turkish: "kendi" },
  { id: 153, german: "fasziniert", turkish: "büyülenmiş" },
  { id: 154, german: "bedeutend", turkish: "önemli" },
  { id: 155, german: "relevant", turkish: "ilgili" },
  { id: 156, german: "zufrieden", turkish: "memnun" },
  { id: 157, german: "anerkennenden", turkish: "takdir edici" },
  { id: 158, german: "neuen", turkish: "yeni" },
  { id: 159, german: "einfaches", turkish: "basit" },
  { id: 160, german: "deutliches", turkish: "belirgin" },
  { id: 161, german: "Sie rieb sich die Hände", turkish: "ellerini ovuşturdu" },
  { id: 162, german: "dickes", turkish: "kalın" },
  { id: 163, german: "verzog das Gesicht", turkish: "yüzünü ekşitti" },
  { id: 164, german: "dumm", turkish: "aptal" },
  { id: 165, german: "ruhig", turkish: "sakin" },
  { id: 166, german: "ausgewogene", turkish: "dengeli" },
  { id: 167, german: "wichtige", turkish: "önemli" },
  { id: 168, german: "internationalen", turkish: "uluslararası" },
  { id: 169, german: "motiviert", turkish: "motive" },
  { id: 170, german: "aufgeregt", turkish: "heyecanlı" },
  {
    id: 171,
    german: "Sie trat nervös von einem Fuß auf den anderen",
    turkish: "gergin bir şekilde ayak değiştirdi",
  },
  { id: 172, german: "langfristig", turkish: "uzun vadeli" },
  { id: 173, german: "nötig", turkish: "gerekli" },
  { id: 174, german: "sicher", turkish: "emin" },
  { id: 175, german: "gültig", turkish: "geçerli" },
  { id: 176, german: "faire", turkish: "adil" },
  { id: 177, german: "große", turkish: "büyük" },
  { id: 178, german: "belebt", turkish: "canlı" },
  { id: 179, german: "zahlreicher", turkish: "çok sayıda" },
  { id: 180, german: "schwarzes", turkish: "siyah" },
  { id: 181, german: "hübschen", turkish: "hoş" },
  { id: 182, german: "Sie richtete sich auf", turkish: "dik durdu" },
  { id: 183, german: "renommierter", turkish: "saygın" },
  {
    id: 184,
    german: "nickte anerkennend",
    turkish: "takdir edici bir şekilde başını salladı",
  },
  { id: 185, german: "einzigartig", turkish: "eşsiz" },
  { id: 186, german: "faszinierend", turkish: "büyüleyici" },
  { id: 187, german: "erleichtert", turkish: "rahatlamış" },
  { id: 188, german: "lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 189, german: "unhöflicher", turkish: "kaba" },
  { id: 190, german: "bittere", turkish: "acı" },
  { id: 191, german: "unpraktisch", turkish: "pratik olmayan" },
  { id: 192, german: "altmodisch", turkish: "eski moda" },
  {
    id: 193,
    german: "Er deutete mit dem Finger auf sie",
    turkish: "parmağıyla onu işaret etti",
  },
  {
    id: 194,
    german: "presste die Lippen zusammen",
    turkish: "dudaklarını sıktı",
  },
  { id: 195, german: "senkte den Blick", turkish: "gözlerini indirdi" },
  { id: 196, german: "ruhig", turkish: "sakin" },
  { id: 197, german: "persönlich", turkish: "kişisel" },
  { id: 198, german: "höflich", turkish: "kibar" },
  { id: 199, german: "verzog das Gesicht", turkish: "yüzünü ekşitti" },
  { id: 200, german: "großen", turkish: "büyük" },
  { id: 201, german: "glücklich", turkish: "mutlu" },
  { id: 202, german: "zufrieden", turkish: "memnun" },
  { id: 203, german: "herzliche", turkish: "içten" },
  { id: 204, german: "begehrt", turkish: "aranan" },
  { id: 205, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 206, german: "fantastisch", turkish: "fantastik" },
  { id: 207, german: "geräumigen", turkish: "ferah" },
  { id: 208, german: "vergangenen", turkish: "geçmiş" },
  { id: 209, german: "stolz", turkish: "gururlu" },
  { id: 210, german: "bescheiden", turkish: "mütevazı" },
  { id: 211, german: "mutige", turkish: "cesur" },
  { id: 212, german: "lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 213, german: "neuen", turkish: "yeni" },
  { id: 214, german: "tiefe", turkish: "derin" },
  { id: 215, german: "lebendige", turkish: "canlı" },
  { id: 216, german: "intensive", turkish: "yoğun" },
  { id: 217, german: "unverkennbar", turkish: "belirgin" },
  { id: 218, german: "abendlichen", turkish: "akşamla ilgili" },
  { id: 219, german: "unbekannten", turkish: "bilinmeyen" },
  { id: 220, german: "fasziniert", turkish: "büyülenmiş" },
  { id: 221, german: "Seine Augen weiteten sich", turkish: "gözleri büyüdü" },
  { id: 222, german: "bedeutend", turkish: "önemli" },
  {
    id: 223,
    german: "nickte zustimmend",
    turkish: "onaylayarak başını salladı",
  },
  { id: 224, german: "warm", turkish: "sıcak" },
  { id: 225, german: "grenzenlos", turkish: "sınırsız" },
  { id: 226, german: "ruhig", turkish: "sakin" },
  { id: 227, german: "vielfältige", turkish: "çeşitli" },
  { id: 228, german: "moderne", turkish: "modern" },
  { id: 229, german: "historische", turkish: "tarihi" },
  { id: 230, german: "unterschiedlich", turkish: "farklı" },
  { id: 231, german: "sinnvoll", turkish: "anlamlı" },
  { id: 232, german: "Sie rieb sich die Hände", turkish: "ellerini ovuşturdu" },
  { id: 233, german: "unhöflicher", turkish: "kaba" },
  { id: 234, german: "unpraktisch", turkish: "pratik olmayan" },
  { id: 235, german: "Sie hob eine Augenbraue", turkish: "kaşını kaldırdı" },
  { id: 236, german: "kühl", turkish: "mesafeli" },
  { id: 237, german: "persönlich", turkish: "kişisel" },
  { id: 238, german: "wichtigen", turkish: "önemli" },
  { id: 239, german: "bedeutende", turkish: "önemli" },
  { id: 240, german: "herzliche", turkish: "içten" },
  { id: 241, german: "glücklich", turkish: "mutlu" },
  { id: 242, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 243, german: "mutige", turkish: "cesur" },
  { id: 244, german: "sicher", turkish: "emin" },
  { id: 245, german: "richtige", turkish: "doğru" },
  { id: 246, german: "erste", turkish: "ilk" },
  { id: 247, german: "ruhigen", turkish: "sakin" },
  { id: 248, german: "schöne", turkish: "güzel" },
  { id: 249, german: "lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 250, german: "neuen", turkish: "yeni" },
  { id: 251, german: "lebendige", turkish: "canlı" },
  { id: 252, german: "unverkennbar", turkish: "belirgin" },
  { id: 253, german: "grenzenlos", turkish: "sınırsız" },
  { id: 254, german: "italienische", turkish: "İtalyan" },
  { id: 255, german: "gesellig", turkish: "sosyal" },
  { id: 256, german: "herzlich", turkish: "içten" },
  { id: 257, german: "toll", turkish: "harika" },
  { id: 258, german: "winke ihr zu", turkish: "ona el salladı" },
  { id: 259, german: "lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 260, german: "warm", turkish: "sıcak" },
  { id: 261, german: "vielfältige", turkish: "çeşitli" },
  { id: 262, german: "motiviert", turkish: "motive" },
  { id: 263, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 264, german: "allein", turkish: "yalnız" },
  { id: 265, german: "geräumigen", turkish: "ferah" },
  { id: 266, german: "zufrieden", turkish: "memnun" },
  { id: 267, german: "glücklich", turkish: "mutlu" },
  { id: 268, german: "mutige", turkish: "cesur" },
  { id: 269, german: "geprägt", turkish: "etkilenmiş" },
  { id: 270, german: "lächelte leicht", turkish: "hafifçe gülümsedi" },
  { id: 271, german: "neues", turkish: "yeni" },
  { id: 272, german: "tiefe", turkish: "derin" },
  { id: 273, german: "unverkennbar", turkish: "belirgin" },
  { id: 274, german: "abendlichen", turkish: "akşamla ilgili" },
  { id: 275, german: "unbekannten", turkish: "bilinmeyen" },
  { id: 276, german: "Seine Augen weiteten sich", turkish: "gözleri büyüdü" },
  { id: 277, german: "bedeutend", turkish: "önemli" },
  {
    id: 278,
    german: "nickte zustimmend",
    turkish: "onaylayarak başını salladı",
  },
  { id: 279, german: "warm", turkish: "sıcak" },
  { id: 280, german: "grenzenlos", turkish: "sınırsız" },
  { id: 281, german: "ruhig", turkish: "sakin" },
  { id: 282, german: "vielfältige", turkish: "çeşitli" },
  { id: 283, german: "moderne", turkish: "modern" },
  { id: 284, german: "historische", turkish: "tarihi" },
  { id: 285, german: "Sie rieb sich die Hände", turkish: "ellerini ovuşturdu" },
  { id: 286, german: "unhöflicher", turkish: "kaba" },
  { id: 287, german: "unpraktisch", turkish: "pratik olmayan" },
  { id: 288, german: "Sie hob eine Augenbraue", turkish: "kaşını kaldırdı" },
  { id: 289, german: "kühl", turkish: "mesafeli" },
  { id: 290, german: "persönlich", turkish: "kişisel" },
  { id: 291, german: "wichtigen", turkish: "önemli" },
  { id: 292, german: "herzliche", turkish: "içten" },
  { id: 293, german: "glücklich", turkish: "mutlu" },
  { id: 294, german: "klatschte in die Hände", turkish: "alkışladı" },
  { id: 295, german: "mutige", turkish: "cesur" },
];

// Word bileşeni: Koyu kelimeyi ve tooltip'i render eder
const Word = ({ german, turkish }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className="font-bold text-blue-600 cursor-pointer relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {german}
      {showTooltip && (
        <span className="absolute z-10 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg -top-8 left-1/2 transform -translate-x-1/2">
          {turkish}
        </span>
      )}
    </span>
  );
};

// Ana bileşen: Hikayeyi render eder
const Sifat2 = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Anna'nın Sanat Yolculuğu
      </h1>
      <div className="text-lg leading-relaxed">
        <p>
          Es war ein <Word german="ruhiger" turkish="sakin" /> Abend in einem{" "}
          <Word german="kleinen" turkish="küçük" /> Dorf, wo die{" "}
          <Word german="historischen" turkish="tarihi" /> Gebäude in der
          Dämmerung einen besonderen Charme verströmten. Anna, eine{" "}
          <Word german="junge" turkish="genç" />,{" "}
          <Word german="intelligente" turkish="zeki" /> und{" "}
          <Word german="fleißige" turkish="çalışkan" /> Künstlerin, saß in ihrem{" "}
          <Word german="gemütlichen" turkish="rahat" /> Atelier und bereitete
          sich auf ihre erste <Word german="große" turkish="büyük" />{" "}
          Ausstellung vor. Ihr Herz schlug{" "}
          <Word german="aufgeregt" turkish="heyecanlı" />, denn der Tag, an dem
          sie ihre <Word german="einzigartigen" turkish="eşsiz" /> Werke einer{" "}
          <Word german="internationalen" turkish="uluslararası" />{" "}
          Öffentlichkeit präsentieren würde, rückte näher.
        </p>
        <p>
          Anna war <Word german="optimistisch" turkish="iyimser" />, aber auch
          ein wenig <Word german="nervös" turkish="gergin" />. Sie wusste, dass
          die <Word german="kulturelle" turkish="kültürel" /> Veranstaltung in
          der <Word german="belebt**en" turkish="canlı" /> Stadt{" "}
          <Word german="zahlreiche" turkish="çok sayıda" /> Besucher anziehen
          würde, darunter auch <Word german="renommierte" turkish="saygın" />{" "}
          Kunstkritiker. Ihr <Word german="persönlicher" turkish="kişisel" />{" "}
          Stil, stark <Word german="geprägt" turkish="etkilenmiş" /> von ihrer{" "}
          <Word german="prägenden" turkish="şekillendirici" /> Kindheit in der
          Natur, war <Word german="unverkennbar" turkish="belirgin" />. Doch die{" "}
          <Word german="hohe" turkish="yüksek" /> Erwartungshaltung machte sie
          manchmal <Word german="unsicher" turkish="emin olmayan" />. „Ist meine
          Arbeit wirklich <Word german="ausreichend" turkish="yeterli" />? Wird
          sie als <Word german="bedeutend" turkish="önemli" /> angesehen?“
          fragte sie sich, während sie mit einem{" "}
          <Word german="leichten Lächeln" turkish="hafifçe gülümsedi" /> an
          ihren Bildern arbeitete.{" "}
          <Word german="Sie lächelte leicht" turkish="hafifçe gülümsedi" />, um
          ihre Anspannung zu verbergen.
        </p>
        <p>
          Plötzlich klopfte es an der Tür. Es war Lukas, ein{" "}
          <Word german="freundlicher" turkish="arkadaş canlısı" />,{" "}
          <Word german="geselliger" turkish="sosyal" /> Nachbar, der immer eine{" "}
          <Word german="herzliche" turkish="içten" /> Art hatte, Menschen zu
          begrüßen. „Anna, bist du <Word german="bereit" turkish="hazır" /> für
          die Ausstellung? Die ganze Stadt ist{" "}
          <Word german="gespannt" turkish="meraklı" />
          !“ sagte er mit einem <Word german="breiten" turkish="geniş" />{" "}
          Grinsen. Anna{" "}
          <Word
            german="nickte zustimmend"
            turkish="onaylayarak başını salladı"
          />
          , doch ihre Hände zitterten leicht, ein Zeichen von gerginlik.{" "}
          <Word
            german="Sie biss sich auf die Lippe"
            turkish="dudaklarını ısırdı"
          />
          , bevor sie antwortete: „Ich bin{" "}
          <Word german="fast" turkish="neredeyse" /> fertig, aber es ist eine{" "}
          <Word german="schwierige" turkish="zor" /> Aufgabe, alles
          vorzubereiten.“ Lukas, immer{" "}
          <Word german="aufmerksam" turkish="dikkatli" />, bemerkte ihre
          Nervosität und sagte: „Du machst das{" "}
          <Word german="prima" turkish="harika" />! Deine Werke sind{" "}
          <Word german="fantastisch" turkish="fantastik" /> und werden die Leute{" "}
          <Word german="faszinieren" turkish="büyülemek" />
          .“
        </p>
        <p>
          Die Tage vergingen, und die Ausstellung rückte näher. Anna arbeitete
          in der <Word german="stillen" turkish="sessiz" /> Atmosphäre ihres
          Ateliers, oft bis spät in die Nacht. Sie wollte, dass alles{" "}
          <Word german="perfekt" turkish="mükemmel" /> war. Ihre Bilder, voller{" "}
          <Word german="lebendiger" turkish="canlı" /> Farben und{" "}
          <Word german="intensiver" turkish="yoğun" /> Emotionen, erzählten
          Geschichten von <Word german="tiefen" turkish="derin" /> Wäldern,{" "}
          <Word german="weiten" turkish="geniş" /> Feldern und{" "}
          <Word german="ruhigen" turkish="sakin" /> Seen. Doch die{" "}
          <Word german="langwierige" turkish="uzun süren" /> Vorbereitung war
          nicht ohne Herausforderungen. Einmal, als sie ein{" "}
          <Word german="dickes" turkish="kalın" /> Buch über Kunstgeschichte
          durchblätterte,{" "}
          <Word german="runzelte sie die Stirn" turkish="kaşlarını çattı" />,
          weil sie Zweifel hatte, ob ihr Stil wirklich{" "}
          <Word german="modern" turkish="modern" /> genug war. „Vielleicht ist
          er zu <Word german="altmodisch" turkish="eski moda" />
          “, murmelte sie und{" "}
          <Word
            german="presste die Lippen zusammen"
            turkish="dudaklarını sıktı"
          />
          .
        </p>
        <p>
          Am Tag der Ausstellung war die <Word german="große" turkish="büyük" />{" "}
          Halle geschmückt, und die <Word german="belebt**e" turkish="canlı" />{" "}
          Atmosphäre war spürbar.{" "}
          <Word german="zahlreiche" turkish="çok sayıda" /> Gäste strömten
          herein, darunter auch ein <Word german="berühmter" turkish="ünlü" />{" "}
          Kunstkritiker, der für seine{" "}
          <Word german="scharfen" turkish="keskin" /> Analysen bekannt war.
          Anna, in einem <Word german="schwarzen" turkish="siyah" />,{" "}
          <Word german="hübschen" turkish="hoş" /> Kleid, stand selbstbewusst.{" "}
          <Word german="Sie richtete sich auf" turkish="dik durdu" />, doch
          innerlich war sie <Word german="verzweifelt" turkish="çaresiz" />{" "}
          bemüht, ihre Nervosität zu verbergen. Als der Kritiker sich ihrem Werk
          näherte,{" "}
          <Word german="weiteten sich ihre Augen" turkish="gözleri büyüdü" />{" "}
          vor Spannung. Er betrachtete ein Bild, das eine{" "}
          <Word german="tiefe" turkish="derin" /> Landschaft zeigte, und{" "}
          <Word
            german="nickte anerkennend"
            turkish="takdir edici bir şekilde başını salladı"
          />
          . „<Word german="Eindrucksvoll" turkish="etkileyici" />
          “, sagte er schließlich. „Ihre Arbeit ist{" "}
          <Word german="sinnvoll" turkish="anlamlı" /> und{" "}
          <Word german="ausgewogen" turkish="dengeli" />, mit einer{" "}
          <Word german="persönlichen" turkish="kişisel" /> Note, die{" "}
          <Word german="unverkennbar" turkish="belirgin" /> ist.“ Anna war{" "}
          <Word german="erleichtert" turkish="rahatlamış" /> und konnte ein{" "}
          <Word german="leichtes Lächeln" turkish="hafifçe gülümsedi" /> nicht
          unterdrücken.
        </p>
        <p>
          Doch nicht alle Reaktionen waren positiv. Eine{" "}
          <Word german="unfreundliche" turkish="soğuk" /> Besucherin, die für
          ihre <Word german="bittere" turkish="acı" /> Kritik bekannt war,{" "}
          <Word german="verzog den Mund" turkish="yüzünü buruşturdu" /> und
          sagte: „Das ist mir zu <Word german="einfach" turkish="basit" />. Es
          fehlt an Raffinesse.“ Anna{" "}
          <Word
            german="presste die Lippen zusammen"
            turkish="dudaklarını sıktı"
          />
          , um ihre Enttäuschung zu verbergen, und{" "}
          <Word german="senkte den Blick" turkish="gözlerini indirdi" />. Doch
          Lukas, der in der Nähe stand,{" "}
          <Word german="klatschte in die Hände" turkish="alkışladı" /> und rief:
          „Das ist doch <Word german="lustig" turkish="komik" />! Kunst muss
          nicht immer kompliziert sein, um{" "}
          <Word german="wichtig" turkish="önemli" /> zu sein!“ Seine{" "}
          <Word german="lockere" turkish="rahat" /> Art brachte die Menge zum
          Lachen, und die Stimmung löste sich auf.
        </p>
        <p>
          Die Ausstellung war ein <Word german="großer" turkish="büyük" />{" "}
          Erfolg, und Anna fühlte sich{" "}
          <Word german="zufrieden" turkish="memnun" />. Die{" "}
          <Word german="herzliche" turkish="içten" /> Unterstützung ihrer
          Freunde und die <Word german="fairen" turkish="adil" /> Kommentare der
          Mehrheit hatten sie bestärkt.{" "}
          <Word
            german="hob beschwichtigend die Hände"
            turkish="yatıştırmak için ellerini kaldırdı"
          />
          , um die Menge zu beruhigen, und dachte: „Das war die{" "}
          <Word german="richtige" turkish="doğru" /> Entscheidung, meine Kunst
          zu teilen.“ Die <Word german="fantastische" turkish="fantastik" />{" "}
          Aussicht auf ihre Zukunft als Künstlerin war nun{" "}
          <Word german="klar" turkish="net" />. Die{" "}
          <Word german="intensive" turkish="yoğun" /> Arbeit hatte sich gelohnt,
          und sie fühlte sich <Word german="motiviert" turkish="motive" />,
          weiterzumachen.
        </p>
        <p>
          Später, als sie <Word german="allein" turkish="yalnız" /> am{" "}
          <Word german="ruhigen" turkish="sakin" /> See saß und den{" "}
          <Word german="schönen" turkish="güzel" /> Sonnenuntergang betrachtete,{" "}
          <Word german="lächelte sie leicht" turkish="hafifçe gülümsedi" />. Die{" "}
          <Word german="vergangenen" turkish="geçmiş" /> Monate voller{" "}
          <Word german="harter" turkish="sert" /> Arbeit und{" "}
          <Word german="extremer" turkish="aşırı" /> Emotionen hatten sie{" "}
          <Word german="geprägt" turkish="etkilenmiş" />. Sie war{" "}
          <Word german="stolz" turkish="gururlu" />, aber auch{" "}
          <Word german="bescheiden" turkish="mütevazı" />, und wusste, dass
          dieser Moment nur der Anfang war. Mit einem{" "}
          <Word german="tiefen" turkish="derin" /> Atemzug dachte sie: „Das
          Leben als Künstlerin ist{" "}
          <Word german="grenzenlos" turkish="sınırsız" /> und{" "}
          <Word german="faszinierend" turkish="büyüleyici" />. Ich bin{" "}
          <Word german="bereit" turkish="hazır" /> für alles, was kommt.“
        </p>
        <p>
          Die Tage nach der Ausstellung waren geschäftig. Anna musste{" "}
          <Word german="zahlreiche" turkish="çok sayıda" /> Anfragen von
          Galerien bearbeiten, die ihre Werke ausstellen wollten. Sie war{" "}
          <Word german="begeistert" turkish="coşkulu" />, aber auch{" "}
          <Word german="bedrückt" turkish="üzgün" />, weil der Druck wuchs.{" "}
          <Word
            german="trat nervös von einem Fuß auf den anderen"
            turkish="gergin bir şekilde ayak değiştirdi"
          />
          , während sie mit einem Galeristen sprach. Doch ihre{" "}
          <Word german="freundliche" turkish="dostça" /> Art und ihre{" "}
          <Word german="höfliche" turkish="kibar" /> Kommunikation machten einen
          guten Eindruck. „Ihre Werke sind{" "}
          <Word german="begehrt" turkish="aranan" />
          “, sagte der Galerist. „Sie haben etwas{" "}
          <Word german="Besonderes" turkish="özel" />
          .“
        </p>
        <p>
          Anna begann, neue Projekte zu planen. Sie wollte eine{" "}
          <Word german="vielfältige" turkish="çeşitli" /> Ausstellung mit{" "}
          <Word german="modernen" turkish="modern" /> und{" "}
          <Word german="historischen" turkish="tarihi" /> Elementen schaffen.
          Ihre Ideen waren <Word german="unterschiedlich" turkish="farklı" />,
          aber alle <Word german="sinnvoll" turkish="anlamlı" />. Sie arbeitete
          in einem <Word german="geräumigen" turkish="ferah" /> Atelier, das sie{" "}
          <Word german="neu" turkish="yeni" /> eingerichtet hatte. Die{" "}
          <Word german="lebendige" turkish="canlı" /> Atmosphäre dort
          inspirierte sie, und sie fühlte sich{" "}
          <Word german="glücklich" turkish="mutlu" />.{" "}
          <Word german="klatschte in die Hände" turkish="alkışladı" />, als sie
          eine besonders gute Idee hatte.
        </p>
        <p>
          Doch nicht alles lief reibungslos. Ein{" "}
          <Word german="unhöflicher" turkish="kaba" /> Kunde kritisierte ihre
          Arbeit als <Word german="unpraktisch" turkish="pratik olmayan" /> für
          den Markt.{" "}
          <Word german="hob eine Augenbraue" turkish="kaşını kaldırdı" /> und
          antwortete <Word german="kühl" turkish="mesafeli" />: „Kunst muss
          nicht immer <Word german="praktisch" turkish="pratik" /> sein.“ Der
          Kunde <Word german="verzog das Gesicht" turkish="yüzünü ekşitti" />{" "}
          und ging. Anna <Word german="zuckte zusammen" turkish="irkildi" />,
          als die Tür laut zufiel, aber sie ließ sich nicht entmutigen. Ihre{" "}
          <Word german="mutige" turkish="cesur" /> Haltung und ihre{" "}
          <Word german="ehrliche" turkish="dürüst" /> Art halfen ihr, solche
          Momente zu überstehen.
        </p>
        <p>
          Eines Abends, während eines{" "}
          <Word german="abendlichen" turkish="akşamla ilgili" /> Spaziergangs,
          traf sie ihre alte Freundin Clara, eine{" "}
          <Word german="italienische" turkish="İtalyan" /> Musikerin. Clara war{" "}
          <Word german="gesellig" turkish="sosyal" /> und{" "}
          <Word german="herzlich" turkish="içten" />. „Anna, deine Ausstellung
          war <Word german="toll" turkish="harika" />
          !“ sagte sie und{" "}
          <Word german="winke ihr zu" turkish="ona el salladı" />. Anna{" "}
          <Word german="lächelte leicht" turkish="hafifçe gülümsedi" /> und
          fühlte sich <Word german="warm" turkish="sıcak" /> ums Herz. Die
          beiden setzten sich in ein <Word german="kleines" turkish="küçük" />{" "}
          Café, wo die <Word german="gemütliche" turkish="rahat" /> Atmosphäre
          sie entspannte. Clara erzählte{" "}
          <Word german="lustige" turkish="komik" /> Geschichten, und Anna{" "}
          <Word german="klatschte in die Hände" turkish="alkışladı" /> vor
          Freude. „Du bist so <Word german="lebendig" turkish="canlı" />
          “, sagte sie zu Clara.
        </p>
        <p>
          Während sie sprachen, bemerkte Anna einen{" "}
          <Word german="unbekannten" turkish="bilinmeyen" /> Mann, der sie
          beobachtete.{" "}
          <Word german="Seine Augen weiteten sich" turkish="gözleri büyüdü" />,
          als er ihre Bilder in einer Zeitung sah. „Sind Sie die Künstlerin?“
          fragte er <Word german="aufmerksam" turkish="dikkatli" />. Anna{" "}
          <Word
            german="nickte zustimmend"
            turkish="onaylayarak başını salladı"
          />{" "}
          und erklärte, dass ihre Werke von ihrer{" "}
          <Word german="eigenen" turkish="kendi" /> Geschichte inspiriert waren.
          Der Mann war <Word german="fasziniert" turkish="büyülenmiş" /> und
          sagte: „Ihre Kunst ist <Word german="bedeutend" turkish="önemli" />{" "}
          und <Word german="relevant" turkish="ilgili" />
          .“ Anna war <Word german="zufrieden" turkish="memnun" /> mit seiner{" "}
          <Word german="anerkennenden" turkish="takdir edici" /> Reaktion.
        </p>
        <p>
          Zurück im Atelier, arbeitete Anna an einem{" "}
          <Word german="neuen" turkish="yeni" /> Gemälde. Sie wollte etwas{" "}
          <Word german="einfaches" turkish="basit" />, aber{" "}
          <Word german="deutliches" turkish="belirgin" /> schaffen.{" "}
          <Word german="Sie rieb sich die Hände" turkish="ellerini ovuşturdu" />
          , voller Vorfreude auf das Ergebnis. Doch plötzlich fiel ein{" "}
          <Word german="dickes" turkish="kalın" /> Glas Farbe um, und sie{" "}
          <Word german="verzog das Gesicht" turkish="yüzünü ekşitti" />. „Das
          war <Word german="dumm" turkish="aptal" />
          “, murmelte sie, aber sie blieb{" "}
          <Word german="ruhig" turkish="sakin" /> und machte weiter. Ihre{" "}
          <Word german="ausgewogene" turkish="dengeli" /> Herangehensweise half
          ihr, solche Missgeschicke zu meistern.
        </p>
        <p>
          Eines Tages erhielt Anna eine{" "}
          <Word german="wichtige" turkish="önemli" /> Einladung zu einer{" "}
          <Word german="internationalen" turkish="uluslararası" /> Kunstmesse.
          Sie war <Word german="motiviert" turkish="motive" /> und{" "}
          <Word german="aufgeregt" turkish="heyecanlı" />.{" "}
          <Word
            german="Sie trat nervös von einem Fuß auf den anderen"
            turkish="gergin bir şekilde ayak değiştirdi"
          />
          , als sie ihre Teilnahme bestätigte. Die Vorbereitung war{" "}
          <Word german="langfristig" turkish="uzun vadeli" /> und{" "}
          <Word german="nötig" turkish="gerekli" />, aber Anna fühlte sich{" "}
          <Word german="sicher" turkish="emin" />. Ihre Werke waren{" "}
          <Word german="gültig" turkish="geçerli" /> für die Messe, und sie
          wusste, dass sie eine <Word german="faire" turkish="adil" /> Chance
          hatte, zu glänzen.
        </p>
        <p>
          Am Tag der Messe war die <Word german="große" turkish="büyük" /> Halle{" "}
          <Word german="belebt" turkish="canlı" /> und voller{" "}
          <Word german="zahlreicher" turkish="çok sayıda" /> Besucher. Anna trug
          ein <Word german="schwarzes" turkish="siyah" />,{" "}
          <Word german="hübschen" turkish="hoş" /> Kleid und stand
          selbstbewusst.{" "}
          <Word german="Sie richtete sich auf" turkish="dik durdu" />, um
          Selbstbewusstsein auszustrahlen. Ein{" "}
          <Word german="renommierter" turkish="saygın" /> Kurator näherte sich
          ihr und{" "}
          <Word
            german="nickte anerkennend"
            turkish="takdir edici bir şekilde başını salladı"
          />
          . „Ihre Werke sind <Word german="einzigartig" turkish="eşsiz" /> und{" "}
          <Word german="faszinierend" turkish="büyüleyici" />
          “, sagte er. Anna war{" "}
          <Word german="erleichtert" turkish="rahatlamış" /> und{" "}
          <Word german="lächelte leicht" turkish="hafifçe gülümsedi" />.
        </p>
        <p>
          Doch ein <Word german="unhöflicher" turkish="kaba" /> Besucher machte
          eine <Word german="bittere" turkish="acı" /> Bemerkung: „Das ist{" "}
          <Word german="unpraktisch" turkish="pratik olmayan" /> und{" "}
          <Word german="altmodisch" turkish="eski moda" />
          .“{" "}
          <Word
            german="Er deutete mit dem Finger auf sie"
            turkish="parmağıyla onu işaret etti"
          />
          , um seine Meinung zu unterstreichen. Anna{" "}
          <Word
            german="presste die Lippen zusammen"
            turkish="dudaklarını sıktı"
          />{" "}
          und <Word german="senkte den Blick" turkish="gözlerini indirdi" />,
          aber sie blieb <Word german="ruhig" turkish="sakin" />. „Kunst ist{" "}
          <Word german="persönlich" turkish="kişisel" />
          “, antwortete sie <Word german="höflich" turkish="kibar" />. Der Mann{" "}
          <Word german="verzog das Gesicht" turkish="yüzünü ekşitti" /> und
          ging.
        </p>
        <p>
          Die Messe endete mit einem <Word german="großen" turkish="büyük" />{" "}
          Erfolg. Anna fühlte sich <Word german="glücklich" turkish="mutlu" />{" "}
          und <Word german="zufrieden" turkish="memnun" />. Ihre{" "}
          <Word german="herzliche" turkish="içten" /> Art hatte viele
          beeindruckt, und ihre Werke waren{" "}
          <Word german="begehrt" turkish="aranan" />.{" "}
          <Word german="klatschte in die Hände" turkish="alkışladı" />, als sie
          die gute Nachricht erhielt, dass ein Museum ihre Bilder kaufen wollte.
          „Das ist <Word german="fantastisch" turkish="fantastik" />
          !“ rief sie.
        </p>
        <p>
          Zurück im Dorf, saß Anna in ihrem{" "}
          <Word german="geräumigen" turkish="ferah" /> Atelier und reflektierte
          über die <Word german="vergangenen" turkish="geçmiş" /> Monate. Sie
          war <Word german="stolz" turkish="gururlu" />, aber auch{" "}
          <Word german="bescheiden" turkish="mütevazı" />. Ihre{" "}
          <Word german="mutige" turkish="cesur" /> Entscheidung, Künstlerin zu
          werden, hatte sich ausgezahlt.{" "}
          <Word german="lächelte leicht" turkish="hafifçe gülümsedi" />, während
          sie an einem <Word german="neuen" turkish="yeni" /> Gemälde arbeitete,
          das eine <Word german="tiefe" turkish="derin" /> Landschaft zeigte.
          Die <Word german="lebendige" turkish="canlı" /> Farbpalette und die{" "}
          <Word german="intensive" turkish="yoğun" /> Emotion machten es{" "}
          <Word german="unverkennbar" turkish="belirgin" />.
        </p>
        <p>
          Eines Abends, während eines{" "}
          <Word german="abendlichen" turkish="akşamla ilgili" /> Spaziergangs,
          traf sie einen <Word german="unbekannten" turkish="bilinmeyen" />{" "}
          Poeten, der <Word german="fasziniert" turkish="büyülenmiş" /> von
          ihrer Kunst war.{" "}
          <Word german="Seine Augen weiteten sich" turkish="gözleri büyüdü" />,
          als er ihre Werke beschrieb. „Ihre Bilder sind{" "}
          <Word german="bedeutend" turkish="önemli" />
          “, sagte er. Anna{" "}
          <Word
            german="nickte zustimmend"
            turkish="onaylayarak başını salladı"
          />{" "}
          und fühlte sich <Word german="warm" turkish="sıcak" /> ums Herz.
          „Kunst ist <Word german="grenzenlos" turkish="sınırsız" />
          “, sagte sie leise.
        </p>
        <p>
          Die nächsten Wochen waren geschäftig, aber Anna blieb{" "}
          <Word german="ruhig" turkish="sakin" />. Sie arbeitete an einer{" "}
          <Word german="vielfältige" turkish="çeşitli" /> Ausstellung, die{" "}
          <Word german="moderne" turkish="modern" /> und{" "}
          <Word german="historische" turkish="tarihi" /> Elemente kombinierte.
          Ihre Ideen waren <Word german="unterschiedlich" turkish="farklı" />,
          aber alle <Word german="sinnvoll" turkish="anlamlı" />.{" "}
          <Word german="Sie rieb sich die Hände" turkish="ellerini ovuşturdu" />
          , voller Vorfreude auf das Ergebnis. Doch ein{" "}
          <Word german="unhöflicher" turkish="kaba" /> Kritiker nannte ihre
          Arbeit <Word german="unpraktisch" turkish="pratik olmayan" />.{" "}
          <Word german="Sie hob eine Augenbraue" turkish="kaşını kaldırdı" />{" "}
          und sagte <Word german="kühl" turkish="mesafeli" />: „Kunst ist{" "}
          <Word german="persönlich" turkish="kişisel" />
          .“
        </p>
        <p>
          Am Ende des Jahres erhielt Anna einen{" "}
          <Word german="wichtigen" turkish="önemli" /> Preis für ihre{" "}
          <Word german="bedeutende" turkish="önemli" /> Arbeit. Die{" "}
          <Word german="herzliche" turkish="içten" /> Zeremonie war feierlich,
          und Anna war <Word german="glücklich" turkish="mutlu" />
          . <Word german="klatschte in die Hände" turkish="alkışladı" />, als
          ihr Name genannt wurde. Ihre <Word german="mutige" turkish="cesur" />{" "}
          Reise als Künstlerin war erfolgreich, und sie fühlte sich{" "}
          <Word german="sicher" turkish="emin" />. „Das war die{" "}
          <Word german="richtige" turkish="doğru" /> Entscheidung“, dachte sie.
        </p>
        <p>
          Im Frühling, als der <Word german="erste" turkish="ilk" /> Schnee
          schmolz, saß Anna am <Word german="ruhigen" turkish="sakin" /> See und
          malte. Die <Word german="schöne" turkish="güzel" /> Landschaft
          inspirierte sie.{" "}
          <Word german="lächelte leicht" turkish="hafifçe gülümsedi" />, während
          sie an ihrer <Word german="neuen" turkish="yeni" /> Arbeit begann.
          Ihre <Word german="lebendige" turkish="canlı" /> Kunst war{" "}
          <Word german="unverkennbar" turkish="belirgin" />, und sie fühlte sich
          frei. „Das Leben ist <Word german="grenzenlos" turkish="sınırsız" />
          “, murmelte sie.
        </p>
        <p>
          Eines Tages traf sie Clara wieder, die{" "}
          <Word german="italienische" turkish="İtalyan" /> Musikerin. Clara war{" "}
          <Word german="gesellig" turkish="sosyal" /> und{" "}
          <Word german="herzlich" turkish="içten" />. „Deine Kunst ist{" "}
          <Word german="toll" turkish="harika" />
          !“ sagte sie und{" "}
          <Word german="winke ihr zu" turkish="ona el salladı" />. Anna{" "}
          <Word german="lächelte leicht" turkish="hafifçe gülümsedi" /> und
          fühlte sich <Word german="warm" turkish="sıcak" />. Die beiden
          sprachen über <Word german="vielfältige" turkish="çeşitli" />{" "}
          Projekte, und Anna war <Word german="motiviert" turkish="motive" />.{" "}
          <Word german="klatschte in die Hände" turkish="alkışladı" />, als
          Clara eine Idee vorschlug.
        </p>
        <p>
          Am Ende des Sommers saß Anna <Word german="allein" turkish="yalnız" />{" "}
          in ihrem <Word german="geräumigen" turkish="ferah" /> Atelier. Sie war{" "}
          <Word german="zufrieden" turkish="memnun" /> und{" "}
          <Word german="glücklich" turkish="mutlu" />. Ihre{" "}
          <Word german="mutige" turkish="cesur" /> Reise hatte sie{" "}
          <Word german="geprägt" turkish="etkilenmiş" />.{" "}
          <Word german="lächelte leicht" turkish="hafifçe gülümsedi" />, während
          sie ein <Word german="neues" turkish="yeni" /> Gemälde begann. Die{" "}
          <Word german="tiefe" turkish="derin" /> Emotion in ihrer Kunst war{" "}
          <Word german="unverkennbar" turkish="belirgin" />.
        </p>
        <p>
          Eines Abends, während eines{" "}
          <Word german="abendlichen" turkish="akşamla ilgili" /> Spaziergangs,
          traf sie einen <Word german="unbekannten" turkish="bilinmeyen" />{" "}
          Dichter.{" "}
          <Word german="Seine Augen weiteten sich" turkish="gözleri büyüdü" />,
          als er ihre Werke sah. „Ihre Kunst ist{" "}
          <Word german="bedeutend" turkish="önemli" />
          “, sagte er. Anna{" "}
          <Word
            german="nickte zustimmend"
            turkish="onaylayarak başını salladı"
          />{" "}
          und fühlte sich <Word german="warm" turkish="sıcak" />. „Kunst ist{" "}
          <Word german="grenzenlos" turkish="sınırsız" />
          “, sagte sie.
        </p>
        <p>
          Die nächsten Monate waren geschäftig, aber Anna blieb{" "}
          <Word german="ruhig" turkish="sakin" />. Sie arbeitete an einer{" "}
          <Word german="vielfältige" turkish="çeşitli" /> Ausstellung, die{" "}
          <Word german="moderne" turkish="modern" /> und{" "}
          <Word german="historische" turkish="tarihi" /> Elemente kombinierte.{" "}
          <Word german="Sie rieb sich die Hände" turkish="ellerini ovuşturdu" />
          , voller Vorfreude. Ein <Word
            german="unhöflicher"
            turkish="kaba"
          />{" "}
          Kritiker nannte ihre Arbeit{" "}
          <Word german="unpraktisch" turkish="pratik olmayan" />.{" "}
          <Word german="Sie hob eine Augenbraue" turkish="kaşını kaldırdı" />{" "}
          und sagte <Word german="kühl" turkish="mesafeli" />: „Kunst ist{" "}
          <Word german="persönlich" turkish="kişisel" />
          .“
        </p>
        <p>
          Am Jahresende erhielt Anna einen{" "}
          <Word german="wichtigen" turkish="önemli" /> Preis. Die{" "}
          <Word german="herzliche" turkish="içten" /> Zeremonie war feierlich,
          und Anna war <Word german="glücklich" turkish="mutlu" />
          . <Word german="klatschte in die Hände" turkish="alkışladı" />, als
          ihr Name genannt wurde. Ihre <Word german="mutige" turkish="cesur" />{" "}
          Reise war erfolgreich.
        </p>
      </div>
    </div>
  );
};

export default Sifat2;
