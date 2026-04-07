import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans overflow-hidden">
      <div
        className="flex-1 flex items-center justify-center bg-white px-10 py-16"
        style={{ minHeight: "50vh" }}
      >
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14h6l6 24h24l4-16H18"
              stroke="#2563a8"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <line
              x1="22"
              y1="26"
              x2="42"
              y2="26"
              stroke="#2563a8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="23"
              y1="32"
              x2="41"
              y2="32"
              stroke="#2563a8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="42" r="2.5" fill="#2563a8" />
            <circle cx="38" cy="42" r="2.5" fill="#2563a8" />
            <circle cx="36" cy="13" r="5" fill="#4ade80" />
            <circle cx="36" cy="13" r="2" fill="white" />
            <path
              d="M36 18 L36 23"
              stroke="#4ade80"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-5xl font-extrabold tracking-tight leading-none">
            <span style={{ color: "#1e3a5f" }}>Local</span>
            <span style={{ color: "#4ade80" }}>Cart</span>
          </span>
        </div>
      </div>

      <div
        className="flex-1 flex flex-col items-center justify-between relative px-10 py-14 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #3b82f6 0%, #2563eb 40%, #06b6d4 100%)",
          minHeight: "50vh",
        }}
      >
        <div
          className="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full opacity-10"
          style={{ background: "white" }}
        />
        <div
          className="absolute bottom-[100px] left-[-40px] w-40 h-40 rounded-full opacity-10"
          style={{ background: "white" }}
        />

        <div
          className={`flex flex-col items-center text-center z-10 transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
              <path
                d="M8 14h6l6 24h24l4-16H18"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <line
                x1="22"
                y1="26"
                x2="42"
                y2="26"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="23"
                y1="32"
                x2="41"
                y2="32"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="24" cy="42" r="2.5" fill="white" />
              <circle cx="38" cy="42" r="2.5" fill="white" />
              <circle cx="36" cy="13" r="5" fill="#4ade80" />
              <circle cx="36" cy="13" r="2" fill="white" />
              <path
                d="M36 18 L36 23"
                stroke="#4ade80"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Local<span style={{ color: "#86efac" }}>Cart</span>
            </span>
          </div>

          <h1
            className="text-white text-3xl md:text-4xl font-semibold leading-snug max-w-xs"
            style={{
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.01em",
            }}
          >
            Order from your
            <br />
            <span style={{ color: "#bbf7d0" }}>trusted local shop</span>
            <br />
<br />
            <span > Project By <br /> <span style={{ color: "#bbf7d0" }}>Shivansh</span></span>
          </h1>
        </div>

        <div
          className={`flex flex-col items-center z-10 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="mb-8 select-none"
            style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}
          >
            <svg
              width="200"
              height="130"
              viewBox="0 0 200 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="105" cy="122" rx="70" ry="6" fill="rgba(0,0,0,0.15)" />
              <rect
                x="20"
                y="68"
                width="42"
                height="30"
                rx="5"
                fill="#2dd4bf"
                stroke="#14b8a6"
                strokeWidth="1.5"
              />
              <line x1="29" y1="68" x2="29" y2="98" stroke="#14b8a6" strokeWidth="1" />
              <line x1="38" y1="68" x2="38" y2="98" stroke="#14b8a6" strokeWidth="1" />
              <line x1="47" y1="68" x2="47" y2="98" stroke="#14b8a6" strokeWidth="1" />
              <line x1="20" y1="78" x2="62" y2="78" stroke="#14b8a6" strokeWidth="1" />
              <line x1="20" y1="88" x2="62" y2="88" stroke="#14b8a6" strokeWidth="1" />
              <ellipse cx="30" cy="63" rx="7" ry="9" fill="#86efac" />
              <ellipse cx="44" cy="61" rx="6" ry="11" fill="#4ade80" />
              <ellipse cx="55" cy="64" rx="5" ry="8" fill="#bbf7d0" />
              <path
                d="M60 95 Q65 60 90 58 L140 60 Q160 62 165 80 L168 95"
                stroke="#22c55e"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M62 95 Q68 65 90 62 L138 63 Q157 65 163 82 L165 95"
                stroke="#16a34a"
                strokeWidth="2"
                fill="#22c55e"
              />
              <rect x="148" y="50" width="5" height="22" rx="2.5" fill="#15803d" />
              <rect x="144" y="50" width="13" height="5" rx="2.5" fill="#15803d" />
              <rect x="100" y="55" width="38" height="10" rx="5" fill="#15803d" />
              <circle cx="158" cy="105" r="18" fill="#1e293b" />
              <circle cx="158" cy="105" r="12" fill="#334155" />
              <circle cx="158" cy="105" r="4" fill="#94a3b8" />
              <circle cx="42" cy="105" r="18" fill="#1e293b" />
              <circle cx="42" cy="105" r="12" fill="#334155" />
              <circle cx="42" cy="105" r="4" fill="#94a3b8" />
              <rect x="110" y="80" width="30" height="38" rx="2" fill="white" />
              <line x1="115" y1="90" x2="135" y2="90" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="115" y1="96" x2="135" y2="96" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="115" y1="102" x2="128" y2="102" stroke="#94a3b8" strokeWidth="1.5" />
              <rect x="113" y="82" width="24" height="5" rx="1" fill="#bfdbfe" />
            </svg>
          </div>

          <button
            onClick={() => navigate("/login")}
            className="relative group px-10 py-4 rounded-2xl text-lg font-bold tracking-wide shadow-2xl transition-all duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
              color: "#166534",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            <span className="flex items-center gap-2">
              Get Started
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>

            <span
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ boxShadow: "0 0 0 3px rgba(255,255,255,0.5)" }}
            />
          </button>

          <p className="mt-4 text-white/70 text-sm tracking-wide">
            Trusted by your local neighbourhood kirana stores
          </p>
        </div>
      </div>
    </div>
  );
}
