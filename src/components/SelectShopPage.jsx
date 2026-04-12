import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NotificationPanel from "./NotificationPanel";

// const [showNotif, setShowNotif] = useState(false);
// ── Logo ──────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
        <path d="M8 14h6l6 24h24l4-16H18" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="22" y1="26" x2="42" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="23" y1="32" x2="41" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="42" r="2.5" fill="white" />
        <circle cx="38" cy="42" r="2.5" fill="white" />
        <circle cx="36" cy="13" r="5" fill="#4ade80" />
        <circle cx="36" cy="13" r="2" fill="white" />
        <path d="M36 18 L36 23" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight">
        <span className="text-white">Local</span>
        <span style={{ color: "#4ade80" }}>Cart</span>
      </span>
    </div>
  );
}

// ── Kirana Store SVG illustration (unique per shop) ───────────
function StoreIllustration({ seed = 0 }) {
  const images = [
   "https://media.istockphoto.com/id/1360178437/photo/indian-groceries-business-man-noting-orders-while-talking-with-customer-on-mobile-phone-at.jpg?s=612x612&w=0&k=20&c=uPN7_Rgeuktugb6jT8CSuZxcPERbygxaGBTKOJzzP58=",
 "https://m.economictimes.com/thumb/msid-99091513,width-1200,height-900,resizemode-4,imgsize-2430285/kirana.jpg",
 "https://media.licdn.com/dms/image/v2/C4E12AQFvzBEA67zjkg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1605867297598?e=2147483647&v=beta&t=xqGADEAYXrvfb4w9tRCPklBYMWU4ZSDLfutQVi7C0XI"

  ];

  const img = images[seed % images.length];

  return (
    <img
      src={img}
      alt="store"
      className="w-full h-full object-cover"
    />
  );
}

// ── Shop Card ─────────────────────────────────────────────────
function ShopCard({ shop, onViewShop }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md transition-shadow duration-200">
      {/* Store image */}
      <div className="flex-shrink-0 rounded-xl overflow-hidden border border-gray-100" style={{ width: 140, height: 90 }}>
        <StoreIllustration seed={shop.seed} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-800 truncate">{shop.name}</h3>
        <p className="text-sm text-gray-400 mt-0.5">{shop.tagline}</p>
      </div>

      {/* CTA */}
      <button
        onClick={() => onViewShop(shop)}
        className="flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-150 active:scale-95 hover:opacity-90"
        style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
      >
        View Shop
      </button>
    </div>
  );
}

// ── Main SelectShopPage ────────────────────────────────────────
const SHOPS = [
  { id: 1, seed: 0, name: "Seth Kirana Store",     tagline: "Trusted grocery store since 1995" },
  { id: 2, seed: 1, name: "Jain General Store",    tagline: "Your friendly neighborhood kirana store" },
  { id: 3, seed: 2, name: "Gupta Provision Store", tagline: "Serving fresh groceries daily to your home" },
];

export default function SelectShopPage({ cartCount = 2, onLogin, onViewShop }) {
  const [query, setQuery] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const navigate = useNavigate();
  const handleViewShop = onViewShop ?? ((shop) => navigate(`/shop/${shop.id}`));

  const filtered = SHOPS.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Navbar ── */}
      <nav
        className="flex items-center justify-between px-8 py-4 shadow-sm"
        style={{ background: "linear-gradient(90deg,#3b82f6 0%,#2563eb 100%)" }}
      >
        <Logo />

        <div className="flex items-center gap-6">
          {/* Home */}
          <button
            onClick={() => navigate("/shops")}
            className="text-white/90 text-sm font-medium hover:text-white transition-colors"
          >
            Home
          </button>

          {/* My Cart */}
          <button onClick={() => navigate("/cart")} className="relative text-white/90 text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
            My Cart
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-4 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ background: "#4ade80" }}
              >
                {cartCount} 
              </span>
            )}
          </button>


          {/* My Orders */}
          <button
            onClick={() => navigate("/orders")}
            className="text-white/90 text-sm font-medium hover:text-white transition-colors"
          >
            My Orders
          </button>

          {/* My Profile */}
          <button
            onClick={() => navigate("/profile")}
            className="text-white/90 text-sm font-medium hover:text-white transition-colors"
          >
            My Profile
          </button>

            <button
                      onClick={() => setShowNotif(true)}
                      className="relative text-xl"
                    >
                      🔔
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        3
                      </span>
                    </button>
                  {showNotif && <NotificationPanel onClose={() => setShowNotif(false)} />}
                    
                 

          {/* Login button */}
         
        </div>
      </nav>

      {/* ── Hero search band ── */}
      <div
        className="w-full py-10 px-6 flex flex-col items-center"
        style={{ background: "linear-gradient(180deg,#e8f0fe 0%,#f0fdf4 100%)" }}
      >
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6" style={{ letterSpacing: "-0.02em" }}>
          Order groceries from your trusted local shop
        </h1>

        <div className="flex w-full max-w-2xl rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
          <input
            type="text"
            placeholder="Search for local shops..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-5 py-4 text-sm text-gray-700 focus:outline-none bg-white"
          />
          <button
            className="px-7 py-4 text-white text-sm font-semibold tracking-wide"
            style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}
          >
            Search
          </button>
        </div>
      </div>

      {/* ── Shop list ── */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 flex flex-col gap-4">
        {filtered.length > 0 ? (
          filtered.map((shop) => (
            <ShopCard
              key={shop.id}
              shop={shop}
              onViewShop={handleViewShop}
            />
          ))
        ) : (
          <div className="text-center text-gray-400 py-16 text-sm">
            No shops found for "<span className="font-medium text-gray-600">{query}</span>"
          </div>
        )}
      </div>
    </div>
  );
}
