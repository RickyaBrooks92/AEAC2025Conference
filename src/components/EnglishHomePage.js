// src/EnglishHomePage.js
import React, { useState } from "react";
import {
  FaSpotify,
  FaCalendarAlt,
  FaChevronDown,
  FaClock,
} from "react-icons/fa";
import { Schedules } from "../helperData/Schedules.js";
import Logo from "../images/AEACLogo.png";

const TABS = ["Young Adults", "Junior High", "Pre-K to 2nd"];

function ScheduleDay({ day, events }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white rounded-lg shadow-sm border p-4 text-left hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{day}</h3>
          <FaChevronDown
            className={`text-red-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="bg-white border-l-4 border-red-600 mt-2 rounded-r-lg shadow-sm">
          <div className="p-4 space-y-4">
            {events.map((event, i) => {
              const [time, ...rest] = event.split(": ");
              const description = rest.join(": ");

              return (
                <div
                  key={i}
                  className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full mt-1">
                      {time}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function EnglishHomePage({ onBack }) {
  const [activeTab, setActiveTab] = useState("Young Adults");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="text-center">
            <img
              src={Logo}
              alt="AEAC Logo"
              className="w-12 h-12 mx-auto mb-3 rounded-lg"
            />
            <h1 className="text-xl font-bold text-gray-900 mb-2">
              AEAC's 29th Annual Mu'tamar
            </h1>
            <div className="bg-red-50 rounded-lg p-3 mb-3">
              <p className="text-sm font-medium text-red-800 mb-1">
                "That I may know Him and the power of His resurrection..."
              </p>
              <p className="text-xs text-red-600">– Philippians 3:10</p>
            </div>
            <button
              onClick={onBack}
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              Change Language
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-4">
        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-sm p-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-center py-3 px-4 rounded-md text-sm font-medium transition-colors mb-1 last:mb-0 ${
                  activeTab === tab
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Spotify Link */}
        {(activeTab === "Junior High" || activeTab === "Young Adults") && (
          <div className="mb-6">
            <a
              href="https://open.spotify.com/playlist/4yw81WAi8BnqKFB0kL0uep?si=6e09c5b717a24aed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              <FaSpotify size={18} />
              <span>Conference Playlist</span>
            </a>
          </div>
        )}

        {/* Schedule */}
        <div className="pb-8">
          {Schedules[activeTab] ? (
            Schedules[activeTab].map((entry, idx) => (
              <ScheduleDay key={idx} {...entry} />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <FaCalendarAlt className="text-3xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No schedule available</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
