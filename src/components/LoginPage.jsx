import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
        <path d="M8 14h6l6 24h24l4-16H18" stroke="#dadada" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="22" y1="26" x2="42" y2="26" stroke="#dadada" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="23" y1="32" x2="41" y2="32" stroke="#dadada" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="42" r="2.5" fill="#dadada" />
        <circle cx="38" cy="42" r="2.5" fill="#dadada" />
        <circle cx="36" cy="13" r="5" fill="#4ade80" />
        <circle cx="36" cy="13" r="2" fill="#dadada" />
        <path d="M36 18 L36 23" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="text-2xl font-extrabold tracking-tight">
        <span style={{ color: dark ? "#1e3a5f" : "#1e40af" }}>Local</span>
        <span style={{ color: "#4ade80" }}>Cart</span>
      </span>
    </div>
  );
}

function GroceryIllustration() {
  return (
    <svg
      width="220"
      height="120"
      viewBox="0 0 220 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="110" cy="115" rx="90" ry="5" fill="rgba(0,0,0,0.07)" />
      <ellipse cx="40" cy="95" rx="28" ry="18" fill="#fde68a" />
      <ellipse cx="40" cy="80" rx="20" ry="14" fill="#fbbf24" />
      <path d="M28 80 Q40 70 52 80" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
      <rect x="72" y="55" width="16" height="50" rx="4" fill="#bfdbfe" />
      <rect x="75" y="50" width="10" height="10" rx="2" fill="#93c5fd" />
      <rect x="74" y="85" width="12" height="6" rx="1" fill="#60a5fa" opacity="0.5" />
      <ellipse
        cx="115"
        cy="90"
        rx="30"
        ry="20"
        fill="#fcd34d"
        opacity="0.3"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <path d="M88 85 Q115 60 142 85" stroke="#d97706" strokeWidth="1.5" fill="none" />
      <line x1="100" y1="68" x2="105" y2="108" stroke="#d97706" strokeWidth="1" />
      <line x1="115" y1="62" x2="115" y2="110" stroke="#d97706" strokeWidth="1" />
      <line x1="130" y1="68" x2="125" y2="108" stroke="#d97706" strokeWidth="1" />
      <circle cx="108" cy="82" r="8" fill="#86efac" />
      <circle cx="122" cy="80" r="7" fill="#4ade80" />
      <circle cx="115" cy="90" r="6" fill="#bbf7d0" />
      <rect x="150" y="60" width="18" height="46" rx="5" fill="#fde68a" />
      <rect x="153" y="54" width="12" height="10" rx="2" fill="#fbbf24" />
      <rect x="152" y="80" width="14" height="8" rx="1" fill="#f59e0b" opacity="0.5" />
      <rect x="175" y="65" width="14" height="41" rx="4" fill="#d1fae5" />
      <rect x="178" y="60" width="8" height="9" rx="2" fill="#a7f3d0" />
    </svg>
  );
}

function ScooterMini() {
  return (
    <svg
      width="110"
      height="70"
      viewBox="0 0 200 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="105" cy="122" rx="70" ry="6" fill="rgba(0,0,0,0.10)" />
      <rect x="20" y="68" width="42" height="30" rx="5" fill="#2dd4bf" stroke="#14b8a6" strokeWidth="1.5" />
      <line x1="29" y1="68" x2="29" y2="98" stroke="#14b8a6" strokeWidth="1" />
      <line x1="38" y1="68" x2="38" y2="98" stroke="#14b8a6" strokeWidth="1" />
      <line x1="47" y1="68" x2="47" y2="98" stroke="#14b8a6" strokeWidth="1" />
      <line x1="20" y1="78" x2="62" y2="78" stroke="#14b8a6" strokeWidth="1" />
      <line x1="20" y1="88" x2="62" y2="88" stroke="#14b8a6" strokeWidth="1" />
      <ellipse cx="30" cy="63" rx="7" ry="9" fill="#86efac" />
      <ellipse cx="44" cy="61" rx="6" ry="11" fill="#4ade80" />
      <ellipse cx="55" cy="64" rx="5" ry="8" fill="#bbf7d0" />
      <path d="M60 95 Q65 60 90 58 L140 60 Q160 62 165 80 L168 95" stroke="#22c55e" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M62 95 Q68 65 90 62 L138 63 Q157 65 163 82 L165 95" stroke="#16a34a" strokeWidth="2" fill="#22c55e" />
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
      <rect x="113" y="82" width="24" height="5" rx="1" fill="#bfdbfe" />
    </svg>
  );
}

export default function LoginPage() {

  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");


  const [shopName, setShopName] = useState("Raja General Store");
  const [address, setAddress] = useState("Lalghati Bhopal");
  const [shopEmail, setShopEmail] = useState("1234@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPass, setShowPass] = useState(false);

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setOtpSent(true);
      return;
    }

    alert("Enter valid 10 digit number");
  };

  const handleRegister = (event) => {
    event.preventDefault();
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      localStorage.setItem("userName", name);
      localStorage.setItem("userPhone", phone);
      navigate("/shops");
      return;
    }

    alert("Invalid OTP");
  };



  const handleAdminRegister = () => {
    // Save shop name to localStorage so Home page can display it
    const existing = JSON.parse(localStorage.getItem("shops") || "[]");
    const alreadyExists = existing.find((s) => s.name === shopName);
    if (!alreadyExists) {
      const newShop = {
        id: Date.now(),
        name: shopName,
        address,
        tagline: `Your trusted store in ${address}`,
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop",
      };
      localStorage.setItem("shops", JSON.stringify([...existing, newShop]));
    }
    localStorage.setItem("adminShop", shopName);
    localStorage.setItem("isAdmin", "true");
    navigate("/admin");
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="flex-1 flex flex-col items-center pt-10 pb-8 px-6 bg-gray-50">
        <div className="flex flex-col items-center mb-6">
          <Logo dark />
          <p className="mt-1 text-gray-500 text-sm">
            Order from your trusted <span className="font-bold text-gray-700">local shop</span>
          </p>
        </div>

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-100 px-8 py-8">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-1">
            Customer Login
          </h2>
          <p className="text-gray-400 text-sm text-center mb-6 leading-snug">
            Login with your phone number to
            <br />
            order from your trusted local shop.
          </p>

          <hr className="mb-6 border-gray-100" />

          <h3 className="text-base font-semibold text-gray-700 text-center mb-4">
            Customer Login
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <div className="flex gap-2 mb-3">
            <select
              value={countryCode}
              onChange={(event) => setCountryCode(event.target.value)}
              className="border border-gray-200 rounded-lg px-2 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 w-20"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              maxLength={10}
              onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              maxLength={6}
              onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 mb-3 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          )}

          <button
            onClick={otpSent ? handleVerifyOtp : handleSendOtp}
            className="w-full py-3 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-150 active:scale-95"
            style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
          >
            {otpSent ? "Verify OTP" : "Send OTP"}
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-200" />
            <span className="px-3 text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button
            className="w-full py-3 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-150 active:scale-95 flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-xs text-gray-400 mt-5">
            Trusted by your local neighbourhood kirana stores
          </p>

          <div className="flex justify-center mt-4">
            <GroceryIllustration />
          </div>

          <p className="text-center text-xs text-gray-400 mt-3">
            Trusted by your local neighbourhood kirana stores
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center pt-10 pb-8 px-6 bg-white border-l border-gray-100">
        <div className="flex flex-col items-center mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Register Your Shop</h2>
          <p className="text-gray-400 text-sm mt-1">
            Create a seller account to manage your shop on LocalCart
          </p>
        </div>

        <div
          className="w-full max-w-sm rounded-xl overflow-hidden mb-6 shadow-sm"
          style={{ height: 170, background: "linear-gradient(135deg,#e0f2fe,#d1fae5)" }}
        >
          <img src="https://www.shutterstock.com/image-photo/tangier-morocco-october-16th-2022-600w-2446260625.jpg" alt="" />
        </div>

        <div className="w-full max-w-sm">
          <h3 className="text-base font-bold text-gray-800 mb-4">
            {/* Shop Owner / Admin Registration */}
          </h3>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Shop Name"
              value={shopName}
              onChange={(event) => setShopName(event.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <input
              type="email"
              placeholder="Shop Email"
              value={shopEmail}
              onChange={(event) => setShopEmail(event.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.06 0 2.08.18 3.03.51M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <button
              onClick={handleAdminRegister}
              className="w-full py-3 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-150 active:scale-95 mt-1"
              style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
            >
              Register
            </button>
          </div>

          <ul className="mt-5 space-y-2">
            {[
              { bold: "Grow your sales", rest: " with us and reach local customers easily!" },
              { bold: "Get online", rest: " orders from nearby customers" },
              { bold: "Easily manage", rest: " your inventory" },
              { bold: "Track", rest: " orders and transactions" },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#22c55e" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <span className="font-semibold text-green-600">{item.bold}</span>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between mt-4">
            <p className="text-sm text-gray-500">
              Back to landing?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline font-medium"
                onClick={() => navigate("/")}
              >
                Click here
              </span>
            </p>
            <ScooterMini />
          </div>
        </div>
      </div>
    </div>
  );
}
