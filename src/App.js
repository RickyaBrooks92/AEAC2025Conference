// src/App.js
import React, { useState } from "react";
import Landing from "./components/Landing";
import EnglishHomePage from "./components//EnglishHomePage";
import ArabicHomePage from "./components/ArabicHomePage";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  if (!selectedLanguage) {
    return <Landing onLanguageSelect={setSelectedLanguage} />;
  }

  if (selectedLanguage === "english") {
    return <EnglishHomePage onBack={() => setSelectedLanguage(null)} />;
  }

  if (selectedLanguage === "arabic") {
    return <ArabicHomePage onBack={() => setSelectedLanguage(null)} />;
  }

  return null;
}
