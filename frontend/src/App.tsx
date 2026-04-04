import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { DisplayColorContext } from "./context/DisplayColorContext"
import { app } from "./tv/app.tv"
import { DisplayMode } from "./components/DisplayMode";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";

import { AuthProvider } from "./context/AuthContext";

// CRUD機能
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage";

export default function App() {
  const [displayColor, setDisplayColor] = useState<boolean>(false)
  const { base } = app({
    color: displayColor ? "light" : "dark"
  })

  return (
    <DisplayColorContext.Provider value={{ displayColor, setDisplayColor }}>
      <AuthProvider>
        {/* URLを監視してReactにルーティング機能を渡す */}
        {/* ルーティング機能を提供 */}
        <BrowserRouter>
          <div className={base()}>
            <Header />
            <DisplayMode />
            <Routes>
              {/* 上からの情報を受け取る */}
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </DisplayColorContext.Provider>
  );
}