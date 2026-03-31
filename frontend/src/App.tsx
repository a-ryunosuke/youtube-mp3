import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { DisplayColorContext } from "./context/DisplayColorContext"
import { app } from "./tv/app.tv"
import { DisplayMode } from "./components/DisplayMode";
import { MainPage } from "./pages/Mainpage";

import { AuthProvider } from "./context/AuthContext";

// CRUD機能
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage";

export default function App() {
  const [displayColor, setDisplayColor] = useState<boolean>(false)
  const { base, frame } = app({
    color: displayColor ? "light" : "dark"
  })

  return (
    <DisplayColorContext.Provider value={{ displayColor, setDisplayColor }}>
      <AuthProvider>
        {/* URLを監視してReactにルーティング機能を渡す */}
        {/* ルーティング機能を提供 */}
        <BrowserRouter>
          <div className={base()}>
            <div className={frame()}>
              <DisplayMode />
              <Routes>
                {/* 上からの情報を受け取る */}
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </DisplayColorContext.Provider>
  );
}