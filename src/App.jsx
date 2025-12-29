import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import CyberSplash from "./components/CyberSplash";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* 🔐 Splash Screen */}
      {showSplash && (
        <CyberSplash onFinish={() => setShowSplash(false)} />
      )}

      {/* 🚀 App loads ONLY after splash */}
      {!showSplash && (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
