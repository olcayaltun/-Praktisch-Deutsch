// src/components/GoogleAd.jsx
import React, { useEffect } from "react";

const GoogleAd = ({ slot, style, className }) => {
  useEffect(() => {
    try {
      // Reklam scriptini tetikle
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense hatası:", e);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // BURAYA KENDİ YAYINCI ID'NİZİ GİRİN (Örn: ca-pub-123456789)
        data-ad-slot={slot} // Her reklam alanı için farklı bir ID gelecek
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
