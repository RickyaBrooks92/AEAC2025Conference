import React from "react";
import Logo from "../images/AEACLogo.png";

export default function Landing({ onLanguageSelect }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center transform animate-fadeIn">
        <div className="mb-8">
          <img
            src={Logo}
            alt="AEAC Logo"
            className="w-20 h-20 mx-auto mb-4 rounded-xl"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to AEAC's 29th Annual Mu'tamar
          </h2>
          <p className="text-gray-600">Please select your language</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onLanguageSelect("english")}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            English
          </button>

          <button
            onClick={() => onLanguageSelect("arabic")}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
            dir="rtl"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}
