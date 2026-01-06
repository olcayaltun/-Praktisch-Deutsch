import React, { useState, useEffect } from "react";
import adjectivesData from "../../utils/adjectives.json";
import { FaStar } from "react-icons/fa"; // Install: npm install react-icons

function Sifatlar() {
  const [adjectives, setAdjectives] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); // Toggle between all and favorites

  // Load adjectives and favorites from localStorage on mount
  useEffect(() => {
    setAdjectives(adjectivesData);
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteAdjectives")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteAdjectives", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = (adjective) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some(
        (fav) => fav.german === adjective.german
      );
      if (isFavorited) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.german !== adjective.german);
      } else {
        // Add to favorites
        return [...prevFavorites, adjective];
      }
    });
  };

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % (showFavorites ? favorites.length : adjectives.length)
    );
    setShowTranslation(false);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex -
          1 +
          (showFavorites ? favorites.length : adjectives.length)) %
        (showFavorites ? favorites.length : adjectives.length)
    );
    setShowTranslation(false);
  };

  // Toggle translation
  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  // Toggle between all adjectives and favorites
  const toggleFavoritesView = () => {
    setShowFavorites(!showFavorites);
    setCurrentIndex(0); // Reset index when switching
    setShowTranslation(false);
  };

  // Loading state
  if (adjectives.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  // Determine which list to display
  const displayList = showFavorites ? favorites : adjectives;
  const currentAdjective = displayList[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Almanca Sıfat Öğren
        </h1>
        <button
          onClick={toggleFavoritesView}
          className="mb-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          {showFavorites ? "Tüm Sıfatlar" : "Favoriler"}
        </button>
        {displayList.length === 0 ? (
          <p className="text-gray-700 text-center">
            {showFavorites
              ? "Henüz favori sıfat eklenmedi."
              : "Sıfat bulunamadı."}
          </p>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-red-500">
                    {currentAdjective.german} ({currentAdjective.turkish})
                  </span>
                </h2>
                <button onClick={() => toggleFavorite(currentAdjective)}>
                  <FaStar
                    className={`text-2xl ${
                      favorites.some(
                        (fav) => fav.german === currentAdjective.german
                      )
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <p className="text-gray-700 mb-4 font-semibold">
                {currentAdjective.germanSentence}
              </p>
              <button
                onClick={toggleTranslation}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {showTranslation ? "Kapat" : "Aç"}
              </button>
              {showTranslation && (
                <p className="text-gray-700 mt-4 bg-emerald-100 p-1 rounded-md">
                  {currentAdjective.turkishTranslation}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                Geri
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
                disabled={currentIndex === displayList.length - 1}
              >
                İleri
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sifatlar;
