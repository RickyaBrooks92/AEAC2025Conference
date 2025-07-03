import React, { useState, useEffect } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Music,
  ExternalLink,
  FileText,
  Camera,
} from "lucide-react";
import map from "./images/Map.png";

const ChurchConferenceApp = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedGroup, setSelectedGroup] = useState("english-service");
  const [expandedDays, setExpandedDays] = useState({});

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const scheduleData = {
    "pre-k-2nd": {
      title: "Pre-K - 2nd Grade",
      hasSpotify: false,
      days: {
        "Thursday, July 3": [
          { time: "6:00 PM", activity: "Registration" },
          { time: "7:00 PM", activity: "Dinner", location: "Cougar Den" },
          {
            time: "8:30 PM - 9:15 PM",
            activity: "Praise and Worship",
            leader: "Nada Yousif",
            location: "Room 110",
          },
          {
            time: "9:15 PM - 10:00 PM",
            activity: "First Session",
            leader: "Mary Kakish",
            location: "Room 110",
          },
          {
            time: "Until 11:30 PM",
            activity: "Bonfire and Dunckel Gym Open",
            special: true,
          },
        ],
        "Friday, July 4": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cougar Den",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Worship", leader: "Rebecca" },
          {
            time: "9:45 AM - 10:30 AM",
            activity: "Morning Session",
            leader: "Wrein & Sandy",
          },
          {
            time: "10:45 AM - 11:45 AM",
            activity: "Activity/Craft",
            leader: "Wrein & Sandy",
          },
          {
            time: "12:30 PM - 1:30 PM",
            activity: "Lunch",
            location: "Cougar Den",
          },
          { time: "1:30 PM - 4:00 PM", activity: "Free Time" },
          {
            time: "5:30 PM - 6:30 PM",
            activity: "Dinner",
            location: "Cougar Den",
          },
          {
            time: "7:00 PM - 7:45 PM",
            activity: "Evening Session",
            leader: "Shams",
          },
          {
            time: "8:00 PM - 9:00 PM",
            activity: "Activity/Craft",
            leader: "Elvira",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity: "Bonfire (Dunckel Gym 9:00 PM - 11:30 PM)",
            special: true,
          },
        ],
        "Saturday, July 5": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cafeteria",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Worship", leader: "Nana" },
          {
            time: "9:45 AM - 10:30 AM",
            activity: "Morning Session",
            leader: "Nada",
          },
          {
            time: "10:45 AM - 11:45 AM",
            activity: "Activity/Craft",
            leader: "Elvira",
          },
          {
            time: "12:30 PM - 1:30 PM",
            activity: "Lunch",
            location: "Cafeteria",
          },
          {
            time: "1:30 PM - 4:00 PM",
            activity: "Free Time (Dunckel Gym 2-5 PM)",
          },
          {
            time: "5:30 PM - 6:30 PM",
            activity: "Dinner",
            location: "Cafeteria",
          },
          {
            time: "7:00 PM - 7:45 PM",
            activity: "Evening Session",
            leader: "Laila",
          },
          {
            time: "8:00 PM - 9:00 PM",
            activity: "Activity/Craft",
            leader: "Mona",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity:
              'Saturday Night "Sahra" (Bonfire, Dunckel Gym 9:00 PM - 11:30 PM)',
            special: true,
          },
        ],
        "Sunday, July 6": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cafeteria",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Worship", leader: "Lillian" },
          { time: "10:00 AM", activity: "Morning Session", leader: "Nana" },
          { time: "12:00 PM", activity: "Check Out" },
        ],
      },
    },
    "junior-high": {
      title: "Junior High (6th - 9th Grade)",
      hasSpotify: true,
      days: {
        "Thursday, July 3": [
          { time: "6:00 PM", activity: "Registration" },
          { time: "7:00 PM", activity: "Dinner", location: "Cougar Den" },
          {
            time: "8:30 PM - 9:15 PM",
            activity: "Praise and Worship",
            location: "Band Room",
          },
          {
            time: "9:15 PM - 10:00 PM",
            activity: "First Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          {
            time: "Until 11:30 PM",
            activity: "Bonfire and Dunckel Gym Open",
            special: true,
          },
        ],
        "Friday, July 4": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cougar Den",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Praise and Worship" },
          {
            time: "9:45 AM - 10:30 AM",
            activity: "Morning Session",
            leader: "Manny",
          },
          {
            time: "10:45 AM - 11:45 AM",
            activity: "Activity: Capture the Flag",
            leader: "Asher & Andrew",
          },
          {
            time: "12:30 PM - 1:30 PM",
            activity: "Lunch",
            location: "Cougar Den",
          },
          { time: "1:30 PM - 4:00 PM", activity: "Free Time" },
          {
            time: "5:30 PM - 6:30 PM",
            activity: "Dinner",
            location: "Cougar Den",
          },
          { time: "7:00 PM - 7:45 PM", activity: "Praise and Worship" },
          {
            time: "8:00 PM - 9:00 PM",
            activity: "Evening Session",
            leader: "Erica",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity: "Bonfire (Dunckel Gym 9:00 PM - 11:30 PM)",
            special: true,
          },
        ],
        "Saturday, July 5": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cafeteria",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Praise and Worship" },
          {
            time: "9:45 AM - 10:30 AM",
            activity: "Morning Session",
            leader: "Marianne",
          },
          {
            time: "10:45 AM - 11:45 AM",
            activity: "Activity: Hunger Games",
            leader: "Rabi",
          },
          {
            time: "12:30 PM - 1:30 PM",
            activity: "Lunch",
            location: "Cafeteria",
          },
          {
            time: "1:30 PM - 4:00 PM",
            activity: "Free Time (Dunckel Gym 2-5 PM)",
          },
          {
            time: "5:30 PM - 6:30 PM",
            activity: "Dinner",
            location: "Cafeteria",
          },
          { time: "7:00 PM - 7:45 PM", activity: "Praise and Worship" },
          {
            time: "8:00 PM - 9:00 PM",
            activity: "Evening Session",
            leader: "Danny Hindi",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity:
              'Saturday Night "Sahra" (Bonfire, Dunckel Gym 9:00 PM - 11:30 PM)',
            special: true,
          },
        ],
        "Sunday, July 6": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cafeteria",
          },
          {
            time: "8:45 AM - 9:30 AM",
            activity: "Praise and Worship",
            location: "Band Room",
          },
          { time: "10:00 AM", activity: "Morning Session", leader: "Manny" },
          { time: "12:00 PM", activity: "Check Out" },
        ],
      },
    },
    "english-service": {
      title: "English Service (Young Adults)",
      hasSpotify: true,
      days: {
        "Thursday, July 3": [
          { time: "6:00 PM", activity: "Registration" },
          { time: "7:00 PM", activity: "Dinner", location: "Cougar Den" },
          {
            time: "8:30 PM - 9:15 PM",
            activity: "Praise and Worship",
            location: "Band Room",
          },
          {
            time: "9:15 PM - 10:00 PM",
            activity: "First Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          {
            time: "Until 11:30 PM",
            activity: "Bonfire and Dunckel Gym Open",
            special: true,
          },
        ],
        "Friday, July 4": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cougar Den",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Praise and Worship" },
          {
            time: "9:45 AM - 10:30 AM",
            activity: "Morning Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          {
            time: "10:45 AM - 11:45 AM",
            activity: "Activity: Capture the Flag",
            leader: "Asher & Andrew",
          },
          {
            time: "12:30 PM - 1:30 PM",
            activity: "Lunch",
            location: "Cougar Den",
          },
          { time: "1:30 PM - 4:00 PM", activity: "Free Time" },
          {
            time: "5:30 PM - 6:30 PM",
            activity: "Dinner",
            location: "Cougar Den",
          },
          { time: "7:00 PM - 7:45 PM", activity: "Praise and Worship" },
          {
            time: "8:00 PM - 9:00 PM",
            activity: "Evening Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity: "Bonfire (Dunckel Gym 9:00 PM - 11:30 PM)",
            special: true,
          },
        ],
        "Saturday, July 5": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cafeteria",
          },
          { time: "8:45 AM - 9:30 AM", activity: "Praise and Worship" },
          {
            time: "9:45 AM - 10:30 AM",
            activity: "Morning Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          {
            time: "10:45 AM - 11:45 AM",
            activity: "Activity: Hunger Games",
            leader: "Rabi",
          },
          {
            time: "12:30 PM - 1:30 PM",
            activity: "Lunch",
            location: "Cafeteria",
          },
          {
            time: "1:30 PM - 4:00 PM",
            activity: "Free Time (Dunckel Gym 2-5 PM)",
          },
          {
            time: "5:30 PM - 6:30 PM",
            activity: "Dinner",
            location: "Cafeteria",
          },
          { time: "7:00 PM - 7:45 PM", activity: "Praise and Worship" },
          {
            time: "8:00 PM - 9:00 PM",
            activity: "Evening Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity:
              'Saturday Night "Sahra" (Bonfire, Dunckel Gym 9:00 PM - 11:30 PM)',
            special: true,
          },
        ],
        "Sunday, July 6": [
          {
            time: "7:30 AM - 8:30 AM",
            activity: "Breakfast",
            location: "Cafeteria",
          },
          {
            time: "8:45 AM - 9:30 AM",
            activity: "Praise and Worship",
            location: "Band Room",
          },
          {
            time: "10:00 AM",
            activity: "Morning Session",
            leader: "Pastor Adam / Pastor Khalaf",
          },
          { time: "12:00 PM", activity: "Check Out" },
        ],
      },
    },
    arabic: {
      title: "جدول الكبار بالعربي",
      hasSpotify: false,
      days: {
        "يوم الخميس - Thursday, July 3": [
          { time: "6:00 PM", activity: "الوصول والتسجيل - Registration" },
          { time: "7:00 PM", activity: "العشاء - Dinner" },
          {
            time: "8:30 PM - 9:15 PM",
            activity: "ترانيم - Praise and Worship",
          },
          {
            time: "9:15 PM - 10:15 PM",
            activity: "الخدمة الافتتاحية - Opening Service",
          },
        ],
        "يوم الجمعة - Friday, July 4": [
          {
            time: "7:00 AM - 7:30 AM",
            activity: "التأمل والصلاة - Meditation and Prayer",
          },
          { time: "7:30 AM - 8:30 AM", activity: "الفطور - Breakfast" },
          {
            time: "9:00 AM - 10:00 AM",
            activity: "مواضيع تطبيقية - Applied Topics",
          },
          {
            time: "10:30 AM - 11:15 AM",
            activity: "ترانيم - Praise and Worship",
          },
          {
            time: "11:15 AM - 12:15 PM",
            activity: "الخدمة الصباحية - Morning Service",
          },
          { time: "12:30 PM - 1:30 PM", activity: "الغذاء - Lunch" },
          { time: "1:30 PM - 4:00 PM", activity: "استراحة - Break" },
          {
            time: "4:00 PM - 5:15 PM",
            activity: "مواضيع خاصة (Workshop) - Special Topics (Workshop)",
          },
          { time: "5:30 PM - 6:30 PM", activity: "العشاء - Dinner" },
          {
            time: "7:30 PM - 8:15 PM",
            activity: "ترانيم - Praise and Worship",
          },
          {
            time: "8:15 PM - 9:15 PM",
            activity: "الخدمة المسائية - Evening Service",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity: "سهرة روحية - Spiritual Evening",
          },
          { time: "11:30 PM", activity: "اطفاء الانوار - Lights Out" },
        ],
        "يوم السبت - Saturday, July 5": [
          {
            time: "7:00 AM - 7:30 AM",
            activity: "التأمل والصلاة - Meditation and Prayer",
          },
          { time: "7:30 AM - 8:30 AM", activity: "الفطور - Breakfast" },
          {
            time: "9:00 AM - 10:00 AM",
            activity: "مواضيع تطبيقية - Applied Topics",
          },
          {
            time: "10:30 AM - 11:15 AM",
            activity: "ترانيم - Praise and Worship",
          },
          {
            time: "11:15 AM - 12:15 PM",
            activity: "الخدمة الصباحية - Morning Service",
          },
          { time: "12:30 PM - 1:30 PM", activity: "الغذاء - Lunch" },
          { time: "1:30 PM - 4:00 PM", activity: "استراحة - Break" },
          {
            time: "4:00 PM - 5:15 PM",
            activity: "مواضيع خاصة (Workshop) - Special Topics (Workshop)",
          },
          { time: "5:30 PM - 6:30 PM", activity: "العشاء - Dinner" },
          {
            time: "7:30 PM - 8:15 PM",
            activity: "ترانيم - Praise and Worship",
          },
          {
            time: "8:15 PM - 9:15 PM",
            activity: "الخدمة المسائية - Evening Service",
          },
          {
            time: "9:15 PM - 11:00 PM",
            activity: "سهرة روحية - Spiritual Evening",
          },
          { time: "11:30 PM", activity: "اطفاء الانوار - Lights Out" },
        ],
        "يوم الأحد - Sunday, July 6": [
          {
            time: "7:00 AM - 7:30 AM",
            activity: "التأمل والصلاة - Meditation and Prayer",
          },
          { time: "7:30 AM - 8:30 AM", activity: "الفطور - Breakfast" },
          {
            time: "9:15 AM - 10:00 AM",
            activity: "ترانيم - Praise and Worship",
          },
          {
            time: "10:00 AM - 11:00 AM",
            activity:
              "الخدمة الختامية مع خدمة التكريس - Closing Service with Dedication",
          },
          { time: "", activity: "وكل عام وأنتم بخير - Happy New Year" },
        ],
      },
    },
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 font-sans">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl mb-4 shadow-sm">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-700 mb-2 leading-tight">
            Arabic Evangelical Alliance Church
          </h1>
          <h2 className="text-xl font-medium text-slate-600 mb-4">
            29th Annual Mu'tamar
          </h2>
          <p className="text-slate-500">July 3-6, 2025</p>
        </div>

        {/* Conference Theme */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 mb-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-blue-600 mb-4">
              Conference Verse
            </h3>
            <div className="text-slate-600 leading-relaxed">
              <p className="mb-4 font-medium">
                "That I may know Him and the power of His resurrection, and the
                fellowship of His sufferings, being conformed to His death"
              </p>
              <p className="text-blue-500 font-medium mb-4">Philippians 3:10</p>
              <p className="text-right mb-2" dir="rtl">
                "لأَعْرِفَهُ، وَقُوَّةَ قِيَامَتِهِ، وَشَرِكَةَ آلاَمِهِ،
                مُتَشَبِّهاً بِمَوْتِهِ"
              </p>
              <p className="text-blue-500 font-medium text-right" dir="rtl">
                فيلبي ٣: ١٠
              </p>
            </div>
          </div>
        </div>

        {/* Photo Upload Link */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100/50 shadow-sm mb-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Camera className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-orange-700 mb-4">
              Upload your photos from the conference here!
            </h3>
            <a
              href="https://photos.app.goo.gl/NGWrcGTBua6zVwcz5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 shadow-sm"
            >
              <Camera className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>Upload Photos</span>
              <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Conference Rules */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 mb-6">
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-medium text-blue-600">
              Conference Rules
            </h3>
          </div>
          <div className="space-y-3">
            {[
              "Everyone must be in their buildings by 11:59pm",
              "Gym closes at 11:30PM and you must put everything back after use",
              "Clean up after yourself in the cafeteria and Cougar Den",
              "No girls in village F",
              "Be on time to sessions",
              "Children under 5 must have parents with them in cafeteria line - pick up kids from teachers after each session",
              "Lost key $25/ Lost card $5",
              "No Fireworks",
            ].map((rule, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Map */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 mb-6">
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-medium text-blue-600">Campus Map</h3>
          </div>
          <div className="w-full">
            <img
              src={map}
              alt="Spring Arbor University Campus Map showing conference locations"
              className="w-full h-auto rounded-xl border border-gray-200"
            />
            <p className="text-xs text-slate-500 mt-2 text-center">
              Spring Arbor University Campus Map
            </p>
          </div>
        </div>

        {/* View Schedule Button */}
        <button
          onClick={() => setCurrentPage("schedule")}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-4 px-6 rounded-2xl shadow-sm transition-all duration-300 flex items-center justify-center mb-6"
        >
          Conference Schedule
        </button>

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm">
          <p>Arabic Evangelical Alliance Church</p>
          <p>Michigan Conference 2025</p>
        </div>
      </div>
    </div>
  );

  const SchedulePage = () => {
    const group = scheduleData[selectedGroup];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 font-sans">
        <div className="max-w-md mx-auto">
          {/* Header with Back Button */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => setCurrentPage("home")}
              className="p-2 hover:bg-white/50 rounded-xl transition-colors mr-3"
            >
              <ArrowLeft className="w-6 h-6 text-blue-600" />
            </button>
            <div className="text-center flex-1">
              <h1 className="text-2xl font-semibold text-blue-600">
                AEAC Conference 2025
              </h1>
              <p className="text-slate-500">July 3-6, 2025</p>
            </div>
          </div>

          {/* Group Selection Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => {
                setSelectedGroup("arabic");
                setExpandedDays({});
              }}
              className={`py-4 px-4 rounded-2xl font-medium transition-all duration-200 text-sm shadow-sm ${
                selectedGroup === "arabic"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                  : "bg-white/70 backdrop-blur-sm text-slate-600 border border-white/50 hover:bg-white/90"
              }`}
            >
              <div className="text-center">
                <p className="text-sm" dir="rtl">
                  جدول الكبار
                </p>
                <p className="text-xs" dir="rtl">
                  بالعربي
                </p>
              </div>
            </button>

            <button
              onClick={() => {
                setSelectedGroup("english-service");
                setExpandedDays({});
              }}
              className={`py-4 px-4 rounded-2xl font-medium transition-all duration-200 text-sm shadow-sm ${
                selectedGroup === "english-service"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                  : "bg-white/70 backdrop-blur-sm text-slate-600 border border-white/50 hover:bg-white/90"
              }`}
            >
              <div className="text-center">
                <p className="text-sm">English</p>
                <p className="text-xs">Service</p>
              </div>
            </button>

            <button
              onClick={() => {
                setSelectedGroup("junior-high");
                setExpandedDays({});
              }}
              className={`py-4 px-4 rounded-2xl font-medium transition-all duration-200 text-sm shadow-sm ${
                selectedGroup === "junior-high"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                  : "bg-white/70 backdrop-blur-sm text-slate-600 border border-white/50 hover:bg-white/90"
              }`}
            >
              <div className="text-center">
                <p className="text-sm">Junior High</p>
              </div>
            </button>

            <button
              onClick={() => {
                setSelectedGroup("pre-k-2nd");
                setExpandedDays({});
              }}
              className={`py-4 px-4 rounded-2xl font-medium transition-all duration-200 text-sm shadow-sm ${
                selectedGroup === "pre-k-2nd"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                  : "bg-white/70 backdrop-blur-sm text-slate-600 border border-white/50 hover:bg-white/90"
              }`}
            >
              <div className="text-center">
                <p className="text-sm">Pre-K - 2nd</p>
              </div>
            </button>
          </div>

          {/* Schedule Content */}
          <div className="space-y-4 w-full">
            {Object.entries(group.days).map(([day, events]) => (
              <div
                key={day}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 overflow-hidden w-full"
              >
                <button
                  onClick={() => toggleDay(day)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-all duration-200"
                >
                  <div className="flex items-center min-w-0 flex-1">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="font-medium text-blue-600 truncate">
                      {day}
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    {expandedDays[day] ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {expandedDays[day] && (
                  <div className="px-4 pb-4 space-y-3 w-full">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className={`flex items-start w-full ${
                          event.special
                            ? "bg-emerald-50/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-100"
                            : ""
                        }`}
                      >
                        <div className="text-sm font-medium text-slate-500 w-20 flex-shrink-0 mt-1">
                          {event.time}
                        </div>
                        <div className="flex-1 ml-3 min-w-0">
                          <div className="text-slate-700 font-medium leading-relaxed break-words">
                            {event.activity}
                          </div>
                          {event.leader && (
                            <div className="text-sm text-slate-500 mt-1 break-words">
                              Leader: {event.leader}
                            </div>
                          )}
                          {event.location && (
                            <div className="text-sm text-slate-500 mt-1 break-words">
                              Location: {event.location}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* God's Story Link - Only for English Service */}
            {selectedGroup === "english-service" && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100/50 shadow-sm w-full">
                <div className="text-center w-full">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-purple-700 mb-2">
                    God's Story
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 break-words">
                    How to tell God's story
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1hthExjgwJrnnbU4IVf0aZqXmjR1RcpT_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 shadow-sm max-w-full"
                  >
                    <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="truncate">View Document</span>
                    <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0" />
                  </a>
                </div>
              </div>
            )}

            {/* Spotify Playlist */}
            {group.hasSpotify && (
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100/50 shadow-sm w-full">
                <div className="text-center w-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Music className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-medium text-emerald-700 mb-2">
                    Praise & Worship Playlist
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 break-words">
                    Listen to our official conference playlist on Spotify for
                    all praise and worship songs
                  </p>
                  <a
                    href="https://open.spotify.com/playlist/4yw81WAi8BnqKFB0kL0uep?si=08b273e60baf48d5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 shadow-sm max-w-full"
                  >
                    <Music className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="truncate">Open Spotify Playlist</span>
                    <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentPage === "home" && <HomePage />}
      {currentPage === "schedule" && <SchedulePage />}
    </div>
  );
};

export default ChurchConferenceApp;
