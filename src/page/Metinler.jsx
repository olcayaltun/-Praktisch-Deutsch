import React, { useState } from "react";
// Dosya yollarınızın doğruluğundan emin olun
import Buch1 from "../components/KITAP/Buch1";
import Buch2 from "../components/KITAP/Buch2";
import Buch3 from "../components/KITAP/Buch3";
import Buch4 from "../components/KITAP/Buch4";

const Metinler = () => {
  // Hangi metnin açık olduğunu tutan state.
  // Başlangıçta hiçbiri açık olmasın istiyorsanız 'null',
  // ilk metin açık gelsin istiyorsanız '1' yazabilirsiniz.
  const [activeId, setActiveId] = useState(null);

  // Metinlerin listesi ve karşılık gelen bileşenler
  const books = [
    { id: 1, title: "Metin 1", component: <Buch1 /> },
    { id: 2, title: "Metin 2", component: <Buch2 /> },
    { id: 3, title: "Metin 3", component: <Buch3 /> },
    { id: 4, title: "Metin 4", component: <Buch4 /> },
  ];

  // Tıklama fonksiyonu
  const toggleText = (id) => {
    // Eğer tıklanan zaten açıksa kapat (null yap), değilse o id'yi aç
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Okuma Metinleri
      </h2>

      <div className="space-y-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
          >
            {/* Tıklanabilir Başlık Alanı */}
            <button
              onClick={() => toggleText(book.id)}
              className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center transition-colors duration-300
                ${
                  activeId === book.id
                    ? "bg-blue-600 text-white" // Açıkkenki renk
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700" // Kapalıykenki renk
                }
              `}
            >
              <span>{book.title}</span>
              {/* Açık/Kapalı Ok İşareti */}
              <span className="text-xl">
                {activeId === book.id ? "−" : "+"}
              </span>
            </button>

            {/* İçerik Alanı (Sadece activeId eşleşirse görünür) */}
            {activeId === book.id && (
              <div className="p-6 bg-white dark:bg-slate-900 text-gray-800 dark:text-black-300 border-t border-gray-200 dark:border-gray-700 animation-fade-in">
                {book.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metinler;
