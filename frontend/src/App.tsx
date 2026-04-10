import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { DisplayColorContext } from "./context/DisplayColorContext"
import { app } from "./tv/app.tv"
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { HistoryDrawer } from "./components/HistoryDrawer";

import { AuthProvider } from "./context/AuthContext";

// CRUD機能
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage";

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // OSの設定(prefers-color-scheme)を監視
  const [displayColor, setDisplayColor] = useState<boolean>(() => {
    // OSがダークモード"ではない"場合にtrue(light)
    return !window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDisplayColor(!e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const { base } = app({
    color: displayColor ? "light" : "dark"
  });

  const handleHistoryClick = () => {
    setIsDrawerOpen(true)
  }

  return (
    <DisplayColorContext.Provider value={{ displayColor, setDisplayColor }}>
      <AuthProvider>
        {/* URLを監視してReactにルーティング機能を渡す */}
        {/* ルーティング機能を提供 */}
        <BrowserRouter>
          <div className={base()}>
            <Header handleHistoryClick={handleHistoryClick} />
            <Routes>
              {/* 上からの情報を受け取る */}
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
            <HistoryDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </DisplayColorContext.Provider>
  );
}