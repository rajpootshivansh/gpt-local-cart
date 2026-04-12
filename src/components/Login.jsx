import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Customer login state
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  // Admin register state
  const [shopName, setShopName]   = useState("Radhe General Store");
  const [address, setAddress]     = useState("Lal Ghati Bhopal");
  const [email, setEmail]         = useState("1234@gmail.com");
  const [password, setPassword]   = useState("12345678");
  const [showPass, setShowPass]   = useState(false);

  const handleSendOtp = () => {
    if (phone.length >= 10) setOtpSent(true);
  };

  const handleCustomerLogin = () => {
    navigate("/");
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
    <div className="min-h-screen bg-[#f0f2f8] font-sans flex flex-col">

      {/* Top bar */}
      <div className="flex items-center justify-center gap-2 py-6">
        <span className="text-3xl">🛒</span>
        <span className="text-2xl font-bold text-gray-800">Local</span>
        <span className="text-2xl font-bold text-[#2e7d6b]">Cart</span>
      </div>
      <p className="text-center text-gray-500 text-sm -mt-4 mb-8">
        Order from your trusted <span className="font-semibold text-gray-700">local shop</span>
      </p>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto w-full px-4 pb-12">

        {/* ── LEFT: Customer Login ── */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-1">Customer Login</h2>
          <p className="text-gray-400 text-sm text-center mb-6">
            Login with your phone number to order from your trusted local shop.
          </p>

          <p className="text-sm font-semibold text-gray-600 mb-3 text-center">Customer Login</p>

          <div className="flex gap-2 mb-4">
            <select className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              maxLength={10}
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40"
            />
          </div>

          {otpSent && (
            <input
              type="text"
              maxLength={6}
              placeholder="Enter OTP 1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40"
            />
          )}

          <button
            onClick={otpSent ? handleCustomerLogin : handleSendOtp}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm mb-4"
          >
            {otpSent ? "Login" : "Send OTP"}
          </button>

          <p className="text-center text-gray-400 text-xs mb-6">
            Trusted by your local neighbourhood kirana stores
          </p>

          {/* Illustration placeholder */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center gap-2">
            <div className="text-5xl">🥫🧴🛒</div>
            <p className="text-gray-400 text-xs text-center">Trusted by your local neighbourhood kirana stores</p>
          </div>
        </div>

        {/* ── RIGHT: Admin Registration ── */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Register Your Shop</h2>
          <p className="text-gray-400 text-sm mb-5">
            Create a seller account to manage your shop on LocalCart
          </p>

          {/* Shelf illustration */}
          <div className="bg-gradient-to-b from-green-100 to-green-200 rounded-xl p-4 mb-5 overflow-hidden">
            <div className="grid grid-cols-10 gap-1 mb-2">
              {["bg-yellow-400","bg-blue-500","bg-red-400","bg-purple-500","bg-green-500","bg-orange-400","bg-pink-400","bg-teal-500","bg-indigo-400","bg-amber-500",
                "bg-purple-400","bg-green-400","bg-red-500","bg-blue-400","bg-yellow-500","bg-orange-500","bg-pink-500","bg-teal-400","bg-indigo-500","bg-amber-400"].map((c,i)=>(
                <div key={i} className={`${c} h-5 rounded-sm opacity-80`}></div>
              ))}
            </div>
            <div className="grid grid-cols-10 gap-1">
              {["bg-orange-400","bg-pink-500","bg-teal-500","bg-indigo-400","bg-amber-400","bg-yellow-400","bg-blue-500","bg-red-400","bg-purple-500","bg-green-500",
                "bg-green-400","bg-red-500","bg-blue-400","bg-yellow-500","bg-orange-500","bg-purple-400","bg-pink-400","bg-teal-400","bg-indigo-500","bg-amber-500"].map((c,i)=>(
                <div key={i} className={`${c} h-5 rounded-sm opacity-80`}></div>
              ))}
            </div>
            <div className="h-3 bg-green-500 rounded mt-2 w-full opacity-60"></div>
          </div>

          <h3 className="text-base font-bold text-gray-800 mb-4">Shop Owner / Admin Registration</h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Shop Name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40 shadow-sm"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40 shadow-sm"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40 shadow-sm"
            />
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40 shadow-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>

            <button
              onClick={handleAdminRegister}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              Register
            </button>
          </div>

          {/* Benefits */}
          <div className="mt-5 space-y-2">
            {[
              { hi: "Grow your sales", lo: " with us and reach local customers easily!" },
              { hi: "Get online",      lo: " orders from nearby customers" },
              { hi: "Easily manage",   lo: " your inventory" },
              { hi: "Track",           lo: " orders and transactions" },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span><span className="text-green-600 font-semibold">{b.hi}</span>{b.lo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
