import { useNavigate, useLocation } from "react-router-dom";

const fallbackItems = [
  { id: 1, name: "Besan",   qty: 1, unit: "kg",   priceEach: 50  },
  { id: 2, name: "Soap",    qty: 5, unit: "pcs",  priceEach: 20  },
  { id: 3, name: "Namkeen", qty: 1, unit: "pack", priceEach: 85  },
];

function generateOrderId() {
  return "#" + Math.floor(10000 + Math.random() * 90000);
}

function getPickupTime() {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 30);
  return now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

export default function OrderConfirm() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state?.items || fallbackItems;
  const total = location.state?.total || items.reduce((s, i) => s + i.priceEach * i.qty, 0);
  const orderId = generateOrderId();
  const pickupTime = getPickupTime();

  return (
    <div className="min-h-screen bg-[#f0f2f8] font-sans">

      {/* Navbar */}
      <nav className=" text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md" style={{ background: "linear-gradient(135deg,#4ade80,#22c55e)" }}>
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">
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
          </span>
          <span className="text-white">Local</span><span className="text-green-300">Cart</span>
        </button>
        <div className="flex items-center gap-6">
          <button onClick={() => navigate("/shops")} className="text-sm font-medium hover:text-green-300 transition-colors">Home</button>
          <button onClick={() => navigate("/orders")} className="text-sm font-medium hover:text-green-300 transition-colors">My Orders</button>
          <span className="text-xl">🔔</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* ── Confirmed header ── */}
          <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#21ba51] hover:bg-[#07642e] flex items-center justify-center mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Order Confirmed!</h1>
            <p className="text-gray-500 text-sm">
              Your order has been successfully sent to{" "}
              <span className="font-bold text-[#2e7d6b]">Seth Kirana Store</span>.
            </p>
          </div>

          {/* ── Order meta ── */}
          <div className="flex justify-between items-center px-8 py-3 border-t border-b border-gray-100 text-sm">
            <span className="font-semibold text-gray-700">
              Order ID: <span className="text-gray-900">{orderId}</span>
            </span>
            <span className="text-[#2e7d6b] font-semibold">
              Estimated Pickup Time: Around {pickupTime}
            </span>
          </div>

          {/* ── Pickup banner ── */}
          <div className="mx-6 my-5 bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-4">
            <span className="text-4xl flex-shrink-0">🛍️</span>
            <div>
              <p className="font-semibold text-[#2e7d6b] text-sm">Please be ready to pick up your order.</p>
              <p className="text-gray-500 text-sm mt-0.5">
                You can also check <span className="font-semibold text-[#3b5bdb]">My Orders</span> for order updates.
              </p>
            </div>
          </div>

          {/* ── Order Summary ── */}
          <div className="px-6 pb-8">
            <h2 className="font-bold text-gray-800 text-base mb-4">Order Summary</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Left card — store + items */}
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-800 mb-3">Seth Kirana Store</p>
                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        {item.qty} {item.unit} {item.name}
                      </span>
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden ml-2">
                        <button className="w-6 h-6 flex items-center justify-center text-[#2e7d6b] text-sm font-bold">−</button>
                        <span className="px-2 text-xs font-medium text-gray-700">{item.qty} {item.unit}</span>
                        <button className="w-6 h-6 flex items-center justify-center bg-[#21ba51] hover:bg-[#07642e] text-white text-sm font-bold">+</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-[#21ba51] hover:bg-[#07642e] text-white font-semibold py-2 rounded-lg text-sm tracking-wide uppercase transition-colors">
                  ADD TO CART
                </button>
              </div>

              {/* Right card — bill */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-gray-800 mb-3">
                    {items[0]?.name || "Items"}
                  </p>
                  <div className="space-y-2 mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">• {item.qty} {item.unit} {item.name}</span>
                        <span className="font-semibold text-gray-800">₹ {item.priceEach * item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between text-sm">
                    <span className="text-gray-500">Estimated Bill</span>
                    <span className="font-bold text-gray-800">Total = ₹ {total}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/shops")}
                  className="mt-5 w-full bg-[#21ba51] hover:bg-[#07642e] text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                >
                  Back to Homepage
                </button>
              </div>

            </div>

            {/* Help */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Need help? Call us at:{" "}
              <a href="tel:+919987654321" className="font-bold text-[#3b5bdb] hover:underline">
                +91 99876 54321
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
