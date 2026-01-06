// src/components/Makale.jsx
import React, { useState } from "react";
import Konusma from "./Konusma";
import Konusmak1 from "./Konusmak1";
import Konusmak2 from "./Konusmak2";
import Konusmak3 from "./Konusmak3";
import Konusmak4 from "./Konusmak4";
import Test from "./Test";
import Konusmak5 from "./Konusmak5";

const KonusmakA = () => {
  // Aktif makale ID'sini tutmak için state
  const [activeArticle, setActiveArticle] = useState(1);

  // Makale bileşenlerini bir obje içinde tanımla
  const articles = [
    { id: 1, component: Konusma, title: "Genel" },
    { id: 2, component: Konusmak1, title: "Yan cümle" },
    { id: 3, component: Konusmak2, title: "Modalverben" },
    { id: 4, component: Konusmak3, title: "Perfect" },
    { id: 5, component: Konusmak4, title: "Konjunktiv2" },
    { id: 6, component: Test, title: "Test" },
    { id: 7, component: Konusmak5, title: "Passiv" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Makale Okuyucu</h1>

      {/* Butonlar */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {articles.map((article) => (
          <button
            key={article.id}
            onClick={() => setActiveArticle(article.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
              activeArticle === article.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {article.title}
          </button>
        ))}
      </div>

      {/* Makale İçeriği */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        {articles.map((article) => (
          <div
            key={article.id}
            style={{ display: activeArticle === article.id ? "block" : "none" }}
          >
            <article.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KonusmakA;
