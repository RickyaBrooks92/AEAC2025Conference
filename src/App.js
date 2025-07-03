import React, { useState, useEffect } from "react";
import "./ConferenceSchedule.css";
import { Schedules } from "./helperData/Schedules";
import ChurchImage from "./helperData/Church.jpg";

// const TABS = Object.keys(Schedules);

const parseArabicEventString = (eventStr) => {
  const parts = eventStr.split(":");
  if (parts.length >= 2) {
    const title = parts[0].trim();
    const time = parts.slice(1).join(":").trim();
    return {
      time,
      title,
      leader: "",
      location: "",
    };
  }
  return {
    time: "",
    title: eventStr,
    leader: "",
    location: "",
  };
};

const parseEventString = (eventStr) => {
  const timeMatch = eventStr.match(
    /^(\d{1,2}(?::\d{2})?(?:AM|PM)?(?:\s*-\s*\d{1,2}(?::\d{2})?(?:AM|PM)?)?)/
  );
  const time = timeMatch ? timeMatch[1] : "";

  let remainingText = eventStr.replace(time + ":", "").trim();

  const leaderMatch = remainingText.match(/\(Leader?s?:\s*([^)]+)\)/);
  const leader = leaderMatch ? leaderMatch[1] : "";

  remainingText = remainingText.replace(/\(Leader?s?:\s*[^)]+\)/, "").trim();

  const locationMatch = remainingText.match(/-\s*(.+)$/);
  const location = locationMatch ? locationMatch[1] : "";

  const title = remainingText.replace(/-\s*.+$/, "").trim();

  return {
    time,
    title,
    leader,
    location,
  };
};

const ConferenceSchedule = () => {
  const tabOrder = [
    "جدول الكبار بالعربي",
    "English Adults",
    "Junior High",
    "Pre-K to 2nd",
  ];

  const [activeTab, setActiveTab] = useState("English Adults");
  const [expandedDays, setExpandedDays] = useState({});

  useEffect(() => {
    setExpandedDays({});
  }, [activeTab]);

  const renderSchedule = (groupName) => {
    const isArabic = groupName === "جدول الكبار بالعربي";
    const schedule = Schedules[groupName];

    return schedule.map((day, index) => {
      const isOpen = expandedDays[`${groupName}-${index}`] || false;
      return (
        <div
          className={`day-section ${isOpen ? "" : "collapsed"} ${
            isArabic ? "arabic-schedule" : ""
          }`}
          key={index}
        >
          <div
            className="day-header"
            onClick={() =>
              setExpandedDays((prev) => ({
                ...prev,
                [`${groupName}-${index}`]: !isOpen,
              }))
            }
          >
            {day.day}
          </div>
          <div className="day-events">
            {day.events.map((eventStr, i) => {
              const event = isArabic
                ? parseArabicEventString(eventStr)
                : parseEventString(eventStr);

              return (
                <div className="event" key={i}>
                  <div className="event-time">{event.time}</div>
                  <div className="event-details">
                    <div className="event-title">{event.title}</div>
                    {event.leader && (
                      <div className="event-leader">Leader: {event.leader}</div>
                    )}
                    {event.location && (
                      <div className="event-location">
                        Location: {event.location}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="header with-image">
        <img src={ChurchImage} alt="Church Logo" className="church-logo" />
        <h1>Church Conference 2025</h1>
        <div className="date">July 3–6, 2025</div>
        <div className="subtitle">Arabic Evangelical Alliance Church</div>
      </div>

      <div className="theme-section">
        <div className="theme-title">Conference Theme</div>
        <div className="theme-text">
          "That I may know Him and the power of His resurrection, and the
          fellowship of His sufferings, being conformed to His death"
        </div>
        <div className="bible-verse">Philippians 3:10</div>
        <div className="arabic-text">
          لكي أعرفه وقوة قيامته وشركة آلامه متشبهاً بموته
        </div>
      </div>

      <div className="rules-section">
        <div className="rules-header">Conference Rules</div>
        <div className="rules-list">
          {[
            "Everyone must be in their buildings by 12am",
            "Gym closes at 11:30PM and you must put everything back after use",
            "Clean up after yourself in the cafeteria and Cougar Den",
            "No girls in building F",
            "Be on time to sessions",
            "Children under 5 must have parents with them in cafeteria line - pick up kids from teachers after each session",
            "Lost key $25 / Lost card $5",
            "No Fireworks",
          ].map((rule, i) => (
            <div className="rule-item" key={i}>
              <span className="rule-number">{i + 1}</span> {rule}
            </div>
          ))}
        </div>
      </div>

      <div className="tabs">
        {tabOrder.map((tab) => (
          <div
            className={`tab ${activeTab === tab ? "active" : ""}`}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="schedule-content active">{renderSchedule(activeTab)}</div>

      <div className="playlist-section">
        <div className="playlist-title">Praise & Worship Playlist</div>
        <div className="playlist-subtitle">
          Listen to our official conference playlist on Spotify for all praise
          and worship songs
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-button"
        >
          Open Spotify Playlist
        </a>
      </div>

      <div className="footer">
        <div className="organization">Arabic Evangelical Alliance Church</div>
        <div>Michigan Conference 2025</div>
      </div>
    </div>
  );
};

export default ConferenceSchedule;
