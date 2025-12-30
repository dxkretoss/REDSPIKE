import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import CyberSplash from "./components/CyberSplash";
import Aboutuspage from "./pages/Aboutuspage";
import Contactuspage from "./pages/Contactuspage";
import Blogpage from "./pages/Blogpage";
import Servicepage from "./pages/Servicepage";
import Toolspage from "./pages/Toolspage";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

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
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<Aboutuspage />} />
              <Route path="/contacts" element={<Contactuspage />} />
              <Route path="/services" element={<Servicepage />} />
              <Route path="/tools" element={<Toolspage />} />
              <Route path="/blog" element={<Blogpage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
