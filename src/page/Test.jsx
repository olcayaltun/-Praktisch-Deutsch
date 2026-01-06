import React, { useState } from "react";
import Test1 from "../components/Test/Test1";
import Test2 from "../components/Test/Konusmak/KonusmakA";

const Test = () => {
  const [aktifTest, setAktifTest] = useState("test1");

  return (
    <div className="h-full">
      {/* Başlık ve Açıklama */}
      <div className="mb-8 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-indigo-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Test Bölümü
        </h2>
        <p className="text-slate-500 text-sm mt-1 ml-8">
          Aşağıdaki sekmelerden çözmek istediğiniz testi seçiniz.
        </p>
      </div>

      {/* Alt Menü (Sub-Navigation) */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setAktifTest("test1")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border
            ${
              aktifTest === "test1"
                ? "bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm ring-1 ring-indigo-200"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
            }`}
        >
          {/* Kalem İkonu */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Genel Test 1
        </button>

        <button
          onClick={() => setAktifTest("test2")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border
            ${
              aktifTest === "test2"
                ? "bg-purple-50 border-purple-200 text-purple-700 shadow-sm ring-1 ring-purple-200"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
            }`}
        >
          {/* Mikrofon İkonu */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
          Konuşma Pratiği A
        </button>
      </div>

      {/* İçerik Alanı */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 min-h-[300px]">
        {aktifTest === "test1" && (
          <div className="animate-fade-in">
            <Test1 />
          </div>
        )}

        {aktifTest === "test2" && (
          <div className="animate-fade-in">
            <Test2 />
          </div>
        )}
      </div>

      {/* Animasyon CSS (Eğer App.js'de varsa buraya gerek yok ama garanti olsun diye ekledim) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Test;
