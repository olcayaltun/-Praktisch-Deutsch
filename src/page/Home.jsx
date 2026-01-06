// Home.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import GoogleAd from "../components/GoogleAd";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Almanca Pratik Yapma | Wortschatz, Grammatik, Testler</title>
        <meta
          name="description"
          content="Ücretsiz Almanca öğrenme platformu. Wortschatz, Grammatik, Metinler, Bağlaçlar, Prepositionen ve testlerle Almancanızı geliştirin."
        />
        <meta
          name="keywords"
          content="almanca öğrenme, wortschatz, grammatik, almanca testler, bağlaçlar, prepositionen, metinler, a1 a2 b1"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          {/* --- ÜST REKLAM --- */}
          <div className="w-full max-w-[728px] mx-auto my-6 text-center bg-slate-800/50 backdrop-blur-sm h-[90px] flex items-center justify-center border border-slate-700 rounded-lg relative overflow-hidden">
            <GoogleAd
              slot="1234567890"
              style={{
                display: "inline-block",
                width: "728px",
                height: "90px",
                maxWidth: "100%",
              }}
            />
            <span className="text-[10px] text-slate-400 absolute top-1 right-2 bg-slate-900/80 px-2 py-0.5 rounded">
              Reklam
            </span>
          </div>

          {/* --- ANA DÜZEN --- */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* SOL REKLAM */}
            <aside className="hidden lg:block w-1/6 relative">
              <div className="sticky top-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center min-h-[600px]">
                <GoogleAd
                  slot="0987654321"
                  style={{ width: "160px", height: "600px" }}
                />
              </div>
            </aside>

            {/* ORTA ALAN */}
            <main className="flex-1 text-center px-2">
              <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                Pratik Almanca
              </h1>

              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Kelime, gramer, bağlaçlar ve metinler ile Almancanızı adım adım
                geliştirin. Seviyenize uygun testlerle kendinizi ölçün.
              </p>

              {/* --- BUTONLAR --- */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Link
                  to="/wortschatz"
                  className="premium-btn btn-gradient-yellow"
                >
                  <span className="btn-content">
                    <span className="btn-icon">📚</span>
                    Wortschatz
                  </span>
                </Link>

                <Link to="/gramatik" className="premium-btn btn-gradient-dark">
                  <span className="btn-content">
                    <span className="btn-icon">✍️</span>
                    Gramatik
                  </span>
                </Link>

                <Link
                  to="/adjektive"
                  className="premium-btn btn-gradient-yellow"
                >
                  <span className="btn-content">
                    <span className="btn-icon">🎨</span>
                    Adjektive
                  </span>
                </Link>

                <Link to="/baglaclar" className="premium-btn btn-gradient-dark">
                  <span className="btn-content">
                    <span className="btn-icon">🔗</span>
                    Bağlaçlar
                  </span>
                </Link>

                <Link
                  to="/prepositionen"
                  className="premium-btn btn-gradient-yellow"
                >
                  <span className="btn-content">
                    <span className="btn-icon">📍</span>
                    Präpositionen
                  </span>
                </Link>

                <Link to="/metinler" className="premium-btn btn-gradient-dark">
                  <span className="btn-content">
                    <span className="btn-icon">📖</span>
                    Metinler
                  </span>
                </Link>

                <Link
                  to="/testler"
                  className="premium-btn btn-gradient-yellow col-span-2 md:col-span-1"
                >
                  <span className="btn-content">
                    <span className="btn-icon">🎯</span>
                    Testler
                  </span>
                </Link>
              </div>

              {/* ALT BİLGİ */}
              <div className="mt-16 text-left max-w-2xl mx-auto text-slate-300 space-y-4 bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Neden Bu Platform?
                </h3>
                <p className="leading-relaxed">
                  Almanca öğrenirken en zor konular olan kelime ezberi,
                  bağlaçlar ve präpositionen sade anlatımlarla sunulur.
                </p>
                <p className="leading-relaxed">
                  B1 den C1 seviyesine kadar metinler, gramer notları ve günlük
                  testler eklenmektedir.
                </p>
              </div>
            </main>

            {/* SAĞ REKLAM */}
            <aside className="hidden lg:block w-1/6 relative">
              <div className="sticky top-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center min-h-[600px]">
                <GoogleAd
                  slot="1122334455"
                  style={{ width: "160px", height: "600px" }}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Premium buton stilleri */}
      <style>
        {`
          .premium-btn {
            position: relative;
            font-weight: 700;
            padding: 1.25rem 1.5rem;
            border-radius: 1rem;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.1);
          }
          
          .premium-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          
          .premium-btn:hover::before {
            left: 100%;
          }
          
          .premium-btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          }
          
          .premium-btn:active {
            transform: translateY(-2px) scale(0.98);
          }
          
          .btn-gradient-yellow {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
            color: white;
          }
          
          .btn-gradient-yellow:hover {
            background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%);
          }
          
          .btn-gradient-dark {
            background: linear-gradient(135deg, #475569 0%, #334155 50%, #1e293b 100%);
            color: white;
          }
          
          .btn-gradient-dark:hover {
            background: linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%);
          }
          
          .btn-content {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          
          .btn-icon {
            font-size: 1.25rem;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
          }
          
          @media (max-width: 768px) {
            .premium-btn {
              padding: 1rem;
            }
            .btn-icon {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
