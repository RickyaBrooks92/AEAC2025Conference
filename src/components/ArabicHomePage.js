import React from "react";

export default function ArabicHomePage({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" dir="rtl">
          قريباً
        </h2>
        <p className="text-gray-600 mb-6" dir="rtl">
          الصفحة العربية قيد التطوير
        </p>
        <button
          onClick={onBack}
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl transition-colors"
        >
          العودة
        </button>
      </div>
    </div>
  );
}
