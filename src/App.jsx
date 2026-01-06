import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import Wortschaft from "./page/Wortschatz";
import Präpositionen from "./page/Präpositionen";
import Adjektive from "./page/Adjektive";
import Baglaclar from "./page/Baglaclar";
import Test from "./page/Test";
import Gramatik from "./page/Gramatik";
import Metinler from "./page/Metinler";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wortschatz" element={<Wortschaft />} />
        <Route path="/prepositionen" element={<Präpositionen />} />
        <Route path="/adjektive" element={<Adjektive />} />
        <Route path="/testler" element={<Test />} />
        <Route path="/baglaclar" element={<Baglaclar />} />
        <Route path="/gramatik" element={<Gramatik />} />
        <Route path="/metinler" element={<Metinler />} />
      </Routes>
    </BrowserRouter>
  );
}
