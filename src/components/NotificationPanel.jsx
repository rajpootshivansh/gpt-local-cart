import { useEffect, useRef } from "react";

const notifications = [
  {
    id: 1,
    icon: "check",
    title: "Your Order from Seth Kirana Store is Ready for Pickup.",
    highlight: "Total: ₹235.",
    time: "About 5 mins ago",
    unread: true,
  },
  {
    id: 2,
    icon: "truck",
    title: "Home Delivery for Order #12345 is on the way.",
    highlight: "",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    icon: "check",
    title: "Your Order #12299 has been delivered.",
    highlight: "",
    time: "2 days ago",
    unread: false,
  },
];

const orderSummary = {
  shop: "Seth Kirana Store",
  shopTotal: 50,
  items: [
    { name: "1 kg Besan", price: 50 },
    { name: "5 Soap",     price: 100 },
    { name: "1 Namkeen",  price: 85 },
  ],
  estimatedBill: 235,
};

function IconCheck() {
  return (
    <div className="w-11 h-11 rounded-full bg-[#2e7d6b] flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function IconTruck() {
  return (
    <div className="w-11 h-11 rounded-full bg-[#2e7d6b] flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 .001M13 16H9m4 0h3m3 0h.5A1.5 1.5 0 0021 14.5v-3.086a1 1 0 00-.293-.707l-2.914-2.914A1 1 0 0017.086 7.5H13V16z" />
      </svg>
    </div>
  );
}

export default function NotificationPanel({ onClose }) {
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#3b5bdb]/10 backdrop-blur-[2px] z-40" />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed top-16 right-4 sm:right-10 z-50 w-[92vw] max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in"
        style={{ animation: "slideDown 0.18s ease" }}
      >
        <style>{`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0)     scale(1);    }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-xl text-[#2e7d6b]">🔔</span>
            <h2 className="text-base font-bold text-gray-800">Notifications</h2>
          </div>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#2e7d6b] font-medium transition-colors">
            View All <span className="text-xs">›</span>
          </button>
        </div>

        {/* Notification list */}
        <div className="divide-y divide-gray-50">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-3 px-5 py-4 transition-colors hover:bg-gray-50/60 ${n.unread ? "bg-green-50/30" : ""}`}
            >
              {n.icon === "check" ? <IconCheck /> : <IconTruck />}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 leading-snug">
                  {n.title}
                  {n.highlight && (
                    <span className="font-semibold"> {n.highlight}</span>
                  )}
                </p>
                <p className="text-xs text-gray-400 mt-1">{n.time}</p>
              </div>
              {n.unread && (
                <div className="w-2 h-2 rounded-full bg-[#2e7d6b] mt-1.5 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/40">
          <p className="text-sm font-bold text-gray-800 mb-3">Order Summary</p>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            {/* Shop row */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-50">
              <span className="text-sm font-semibold text-gray-800">{orderSummary.shop}</span>
              <span className="text-sm text-gray-600">₹ {orderSummary.shopTotal}</span>
            </div>
            {/* Items */}
            {orderSummary.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center px-4 py-2.5 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className={`text-sm font-semibold ${item.price >= 100 ? "text-gray-900" : "text-gray-700"}`}>
                  ₹ {item.price}
                </span>
              </div>
            ))}
            {/* Estimated Bill */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-100">
              <span className="text-sm text-gray-500">Estimated Bill</span>
              <span className="text-sm font-bold text-gray-800">₹ {orderSummary.estimatedBill}</span>
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="px-5 pb-5">
          <button
            onClick={onClose}
            className="w-full bg-[#2e7d6b] hover:bg-[#255f55] text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
