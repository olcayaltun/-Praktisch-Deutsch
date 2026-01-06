import React, { useState } from "react";
import Metin1 from "../components/KITAP/Buch1";
import Metin2 from "../components/KITAP/Buch2";
import Metin3 from "../components/KITAP/Buch3";
import Metin4 from "../components/KITAP/Buch4";

const Metinler = () => {
  // Hangi metnin açık olduğunu takip eden state
  const [aktifMetin, setAktifMetin] = useState(null);

  // Metinleri ve bileşenleri basit bir listede tutuyoruz
  const metinListesi = [
    { id: 1, ad: "Metin 1", bilesen: <Metin1 /> },
    { id: 2, ad: "Metin 2", bilesen: <Metin2 /> },
    { id: 3, ad: "Metin 3", bilesen: <Metin3 /> },
    { id: 4, ad: "Metin 4", bilesen: <Metin4 /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* --- GRID YAPISI (KARTLAR) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {metinListesi.map((item) => (
          <div
            key={item.id}
            onClick={() => setAktifMetin(item)}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center border-l-4 border-blue-500 h-40"
          >
            <span className="text-3xl mb-3">📄</span>
            <h2 className="text-2xl font-bold text-gray-800">{item.ad}</h2>
            <p className="text-gray-500 text-sm mt-1">Okumak için tıkla</p>
          </div>
        ))}
      </div>

      {/* --- AÇILAN PENCERE (MODAL) --- */}
      {aktifMetin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setAktifMetin(null)} // Boşluğa tıklayınca kapat
        >
          {/* Beyaz Kutu */}
          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()} // İçeriğe tıklayınca kapanmasın
          >
            {/* Üst Başlık Kısmı */}
            <div className="flex justify-between items-center p-5 border-b bg-gray-50">
              <h3 className="text-2xl font-bold text-blue-600">
                {aktifMetin.ad}
              </h3>
              <button
                onClick={() => setAktifMetin(null)}
                className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-500 hover:text-white transition font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Metin İçeriği (Scroll Olan Kısım) */}
            <div className="p-8 overflow-y-auto text-gray-700 leading-relaxed text-lg">
              {aktifMetin.bilesen}
            </div>

            {/* Alt Kısım (Kapat Butonu) */}
            <div className="p-4 border-t bg-gray-50 text-right">
              <button
                onClick={() => setAktifMetin(null)}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Metinler;
