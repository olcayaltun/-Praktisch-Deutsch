import React, { useState } from "react";
// Dosya yollarını kendi yapına göre korudum
import Test from "../components/sifat/Sifatlar";
import Metin1 from "../components/sifat/Sifat1";
import Metin2 from "../components/sifat/Sifat2";

const App = () => {
  const [aktifSayfa, setAktifSayfa] = useState("Test");

  // Butonlar için ikon tanımları (SVG)
  const icons = {
    Test: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    Metin1: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    Metin2: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
  };

  const buttons = [
    { name: "Test", label: "Pratik Yap" },
    { name: "Metin1", label: "Okuma Parçası 1" },
    { name: "Metin2", label: "Okuma Parçası 2" },
  ];

  const renderContent = () => {
    switch (aktifSayfa) {
      case "Test":
        return <Test />;
      case "Metin1":
        return <Metin1 />;
      case "Metin2":
        return <Metin2 />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Başlık Alanı */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
          Almanca Sıfatlar
        </h1>
        <p className="text-slate-500 text-lg">
          Ders materyalleri ve test çalışmaları
        </p>
      </div>

      {/* Modern Tab Menü */}
      <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap justify-center gap-2 mb-8 w-full max-w-2xl">
        {buttons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => setAktifSayfa(btn.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out flex-1 justify-center
              ${
                aktifSayfa === btn.name
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 transform scale-[1.02]"
                  : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
          >
            {icons[btn.name]}
            {btn.label}
          </button>
        ))}
      </div>

      {/* İçerik Alanı */}
      <div className="w-full max-w-4xl">
        <div
          // key={aktifSayfa} ekleyerek React'in içeriği her değiştiğinde animasyonu tetiklemesini sağladık
          key={aktifSayfa}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 min-h-[400px] animate-fade-in"
        >
          {renderContent()}
        </div>
      </div>

      {/* Fade In Animasyonu İçin CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
