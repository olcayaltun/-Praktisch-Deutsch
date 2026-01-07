// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

// --- B ve C Serisi Importlarınız (Dosya yollarınızın doğru olduğundan emin olun) ---
import B1 from "../components/B/B1.jsx";
import B2 from "../components/B/B2.jsx";
import B3 from "../components/B/B3.jsx";
import B4 from "../components/B/B4.jsx";
import B5 from "../components/B/B5.jsx";
import B6 from "../components/B/B6.jsx";
import B7 from "../components/B/B7.jsx";
import B8 from "../components/B/B8.jsx";
import B9 from "../components/B/B9.jsx";
import B10 from "../components/B/B10.jsx";
import B11 from "../components/B/B11.jsx";
import B12 from "../components/B/B12.jsx";
import B13 from "../components/B/B13.jsx";

import C1 from "../components/C/C1.jsx";
import C2 from "../components/C/C2.jsx";
import C3 from "../components/C/C3.jsx";
import C4 from "../components/C/C4.jsx";
import C5 from "../components/C/C5.jsx";
import C6 from "../components/C/C6.jsx";
import C7 from "../components/C/C7.jsx";
import C8 from "../components/C/C8.jsx";
import C9 from "../components/C/C9.jsx";
import C10 from "../components/C/C10.jsx";
import C11 from "../components/C/C11.jsx";
import C12 from "../components/C/C12.jsx";
import C13 from "../components/C/C13.jsx";

// --- DAHİLİ GOOGLE ADS BİLEŞENİ ---
const GoogleAd = ({ slot, className, style }) => {
  useEffect(() => {
    try {
      // AdSense scripti yüklendiyse reklamı tetikle
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Ads push hatası:", e);
    }
  }, []);

  return (
    <div className={className} style={style}>
      {/* Test aşamasında yerini görmek için gri arkaplan ekledik */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-1006723326997990" // *** BURAYA KENDİ PUB ID'NİZİ GİRİN ***
        data-ad-slot={slot} // *** REKLAM BİRİMİ ID'Sİ (SLOT) ***
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

// --- KOMPONENT HARİTASI ---
const components = {
  B1,
  B2,
  B3,
  B4,
  B5,
  B6,
  B7,
  B8,
  B9,
  B10,
  B11,
  B12,
  B13,
  C1,
  C2,
  C3,
  C4,
  C5,
  C6,
  C7,
  C8,
  C9,
  C10,
  C11,
  C12,
  C13,
};

// --- ANA SAYFA ---
export default function Home() {
  const [history, setHistory] = useState([]);
  const [currentLevel, setCurrentLevel] = useState("main");
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // 1. Google Ads Scriptini Otomatik Yükle (index.html'e dokunmamak için)
  useEffect(() => {
    const scriptId = "google-ads-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"; // *** ID'NİZİ GİRİN ***
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, []);

  // --- Navigasyon Mantığı ---
  const handleMainButtonClick = (groupName) => {
    setHistory([...history, { level: "main", button: null }]);
    setCurrentLevel("sub");
    setSelectedButton(groupName);
  };

  const handleSubButtonClick = (componentName) => {
    setHistory([...history, { level: "sub", button: selectedButton }]);
    setCurrentLevel("result");
    setSelectedComponent(componentName);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const newHistory = [...history];
    const previous = newHistory.pop();
    setHistory(newHistory);
    setCurrentLevel(previous.level);
    if (previous.level === "main") {
      setSelectedButton(null);
      setSelectedComponent(null);
    } else if (previous.level === "sub") {
      setSelectedButton(previous.button);
      setSelectedComponent(null);
    }
  };

  // --- Render Yardımcıları ---
  const renderMainButtons = () => (
    <div className="flex gap-6 justify-center flex-wrap">
      <button
        onClick={() => handleMainButtonClick("B")}
        className="premium-btn btn-gradient-blue group"
      >
        <span className="btn-content">
          <span className="btn-icon">📘</span>
          <span>
            <div className="font-bold text-lg">B Serisi</div>
            <div className="text-xs opacity-80">(B2 Seviyesi)</div>
          </span>
        </span>
      </button>
      <button
        onClick={() => handleMainButtonClick("C")}
        className="premium-btn btn-gradient-green group"
      >
        <span className="btn-content">
          <span className="btn-icon">📗</span>
          <span>
            <div className="font-bold text-lg">C Serisi</div>
            <div className="text-xs opacity-80">(C1 Seviyesi)</div>
          </span>
        </span>
      </button>
    </div>
  );

  const renderSubButtons = () => {
    const buttons = [];
    const prefix = selectedButton;
    for (let i = 1; i <= 13; i++) {
      const name = `${prefix}${i}`;
      buttons.push(
        <button
          key={name}
          onClick={() => handleSubButtonClick(name)}
          className={`premium-small-btn ${
            prefix === "B" ? "btn-gradient-purple" : "btn-gradient-orange"
          }`}
        >
          <span className="btn-content-small">
            <span className="text-lg">📚</span>
            <span className="font-semibold">{name}</span>
          </span>
        </button>
      );
    }
    return buttons;
  };

  const renderComponent = () => {
    const Component = components[selectedComponent];
    return Component ? (
      <Component />
    ) : (
      <div className="text-center p-4 text-red-500">
        İçerik yüklenemedi: {selectedComponent}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Almanca Öğrenme Platformu | B ve C Serisi</title>
        <meta
          name="description"
          content="Almanca B ve C serisi interaktif dersler ve testler."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 lg:p-6 flex flex-col lg:flex-row justify-center gap-4">
        {/* --- SOL REKLAM (Daraltıldı: w-1/6) --- */}
        <aside className="hidden lg:block w-1/6 min-w-[160px] relative">
          <div className="sticky top-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg min-h-[600px] flex flex-col items-center justify-center">
            {/* SOL SLOT ID BURAYA */}
            <GoogleAd
              slot="1234567890"
              style={{ width: "160px", height: "600px" }}
            />
            <span className="text-[10px] text-slate-400 mt-2">Reklam</span>
          </div>
        </aside>

        {/* --- ORTA ANA İÇERİK (Genişletildi: flex-1) --- */}
        <main className="flex-1 w-full max-w-5xl bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-4 lg:p-8 min-h-[80vh]">
          <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg">
            Dinamik B ve C Serisi Öğrenim Platformu
          </h1>

          {/* Geri Butonu */}
          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="mb-6 px-5 py-2.5 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all flex items-center gap-2 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              ← Geri Dön
            </button>
          )}

          {/* Seviye İçerikleri */}
          <div className="transition-all duration-300">
            {currentLevel === "main" && (
              <div className="py-16">{renderMainButtons()}</div>
            )}

            {currentLevel === "sub" && (
              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50">
                <h2 className="text-xl font-bold text-slate-100 mb-6 pb-3 border-b border-slate-600/50 flex items-center gap-2">
                  <span className="text-2xl">
                    {selectedButton === "B" ? "📘" : "📗"}
                  </span>
                  {selectedButton} Serisi Dersleri
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {renderSubButtons()}
                </div>
              </div>
            )}

            {currentLevel === "result" && (
              <div className="mt-2">
                <div className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-sm text-white px-5 py-3 rounded-lg mb-6 inline-flex items-center gap-2 font-bold text-sm shadow-lg border border-blue-400/30">
                  <span className="text-xl">📖</span>
                  <span>Ders: {selectedComponent}</span>
                </div>
                <div className="bg-slate-700/20 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6">
                  {renderComponent()}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* --- SAĞ REKLAM (Daraltıldı: w-1/6) --- */}
        <aside className="hidden lg:block w-1/6 min-w-[160px] relative">
          <div className="sticky top-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg min-h-[600px] flex flex-col items-center justify-center">
            {/* SAĞ SLOT ID BURAYA */}
            <GoogleAd
              slot="0987654321"
              style={{ width: "160px", height: "600px" }}
            />
            <span className="text-[10px] text-slate-400 mt-2">Reklam</span>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-8 mb-4 p-6 text-center text-slate-400 text-sm bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50">
        <p>
          &copy; {new Date().getFullYear()} Almanca Öğrenme Merkezi. Tüm hakları
          saklıdır.
        </p>
      </footer>

      {/* Premium Buton Stilleri */}
      <style>
        {`
          /* Ana büyük butonlar */
          .premium-btn {
            position: relative;
            font-weight: 700;
            padding: 1.5rem 2rem;
            border-radius: 1.25rem;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.15);
            min-width: 200px;
          }
          
          .premium-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
            transition: left 0.6s;
          }
          
          .premium-btn:hover::before {
            left: 100%;
          }
          
          .premium-btn:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          }
          
          .premium-btn:active {
            transform: translateY(-3px) scale(0.98);
          }

          /* Alt kısım butonlar (küçük) */
          .premium-small-btn {
            position: relative;
            font-weight: 600;
            padding: 0.9rem 1rem;
            border-radius: 0.875rem;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.1);
          }
          
          .premium-small-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          
          .premium-small-btn:hover::before {
            left: 100%;
          }
          
          .premium-small-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 15px 30px rgba(0,0,0,0.4);
          }
          
          .premium-small-btn:active {
            transform: translateY(-2px) scale(0.97);
          }
          
          /* Gradient renkler */
          .btn-gradient-blue {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
            color: white;
          }
          
          .btn-gradient-blue:hover {
            background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          }
          
          .btn-gradient-green {
            background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
            color: white;
          }
          
          .btn-gradient-green:hover {
            background: linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%);
          }
          
          .btn-gradient-purple {
            background: linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7e22ce 100%);
            color: white;
          }
          
          .btn-gradient-purple:hover {
            background: linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #9333ea 100%);
          }
          
          .btn-gradient-orange {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
            color: white;
          }
          
          .btn-gradient-orange:hover {
            background: linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%);
          }
          
          /* İçerik stilleri */
          .btn-content {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
          }
          
          .btn-content-small {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
          }
          
          .btn-icon {
            font-size: 2rem;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
            transition: transform 0.3s;
          }
          
          .premium-btn:hover .btn-icon {
            transform: scale(1.1) rotate(5deg);
          }
          
          @media (max-width: 768px) {
            .premium-btn {
              padding: 1.25rem 1.5rem;
              min-width: 160px;
            }
            .btn-icon {
              font-size: 1.5rem;
            }
            .premium-small-btn {
              padding: 0.75rem 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
}
