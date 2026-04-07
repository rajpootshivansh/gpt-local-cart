import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TABS = ["Pending", "Accepted", "Ready", "Delivered"];

const initialOrders = [
  {
    id: 1, customer: "Rahul Verma", status: "Pending",
    items: [{ name: "Sugar", qty: "1 kg" }, { name: "Soap", qty: "2 pcs" }],
    total: 135, feedback: 4,
  },
  {
    id: 2, customer: "Neha Gupta", status: "Pending",
    items: [{ name: "Detergent", qty: "1" }, { name: "Jeera", qty: "½ kg" }],
    total: 170, feedback: 0,
  },
  {
    id: 3, customer: "Amit Sharma", status: "Ready",
    items: [{ name: "Besan", qty: "1 kg" }, { name: "Soap", qty: "5 pcs" }, { name: "Namkeen", qty: "1" }],
    total: 235, feedback: 4,
  },
];

const BILL_ITEMS = [
  { name: "1 kg Besan",   price: 50  },
  { name: "5 Soap",       price: 100 },
  { name: "1 Namkeen",    price: 85  },
];

// ── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ activeView, setActiveView, shopName, onLogout }) {
  const links = [
    { key: "dashboard",   icon: "⊞", label: "Dashboard"   },
    { key: "addProduct",  icon: "🖼", label: "Add Product"  },
    { key: "viewOrders",  icon: "📋", label: "View Orders"  },
  ];
  return (
    <aside className="w-56 min-h-screen  flex flex-col text-white flex-shrink-0" style={{ background: "linear-gradient(90deg,#3b82f6 0%,#2563eb 100%)" }}>
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-5 border-b border-white/10">
        <span className="text-xl">
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
        <span className="font-bold text-base">Local<span className="text-green-300">Cart</span></span>
      </div>
      {/* Welcome */}
      <div className="px-5 py-4 border-b border-white/10">
        <p className="text-xs text-white/60">Welcome,</p>
        <p className="font-bold text-sm">{shopName || "Seth Kirana Store"}</p>
      </div>
      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 px-3">
        {links.map((l) => (
          <button
            key={l.key}
            onClick={() => setActiveView(l.key)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeView === l.key
                ? "bg-white/20 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>{l.icon}</span>
            {l.label}
          </button>
        ))}
      </nav>
      {/* Logout */}
      <button
        onClick={onLogout}
        className="flex items-center gap-2 px-6 py-4 bg-red-800/80 hover:bg-red-500 transition-colors text-sm font-medium"
      >
        ⏻ Logout
      </button>
    </aside>
  );
}

// ── Order Card ───────────────────────────────────────────────────────────────
function OrderCard({ order, onStatusChange }) {
  const nextStatus = { Pending: "Accepted", Accepted: "Ready", Ready: "Delivered" };
  const btnLabel = { Pending: "Accept", Accepted: "Mark Ready", Ready: "Confirm Pickup" };
  const btnColor = { Pending: "bg-orange-500 hover:bg-orange-600", Accepted: "bg-blue-500 hover:bg-blue-600", Ready: "bg-[#2e7d6b] hover:bg-[#255f55]" };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-bold text-gray-800 text-base">{order.customer}</p>
          <div className="mt-1 space-y-0.5">
            {order.items.map((it, i) => (
              <p key={i} className="text-sm text-gray-500">{it.qty} {it.name}</p>
            ))}
          </div>
        </div>
        <div className="text-right">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            order.status === "Pending"   ? "bg-orange-100 text-orange-600" :
            order.status === "Accepted"  ? "bg-blue-100 text-blue-600" :
            order.status === "Ready"     ? "bg-green-100 text-green-700" :
            "bg-gray-100 text-gray-500"
          }`}>{order.status}</span>
          <p className="text-sm font-bold text-gray-700 mt-2">₹{order.total}</p>
        </div>
      </div>

      {order.status === "Ready" && (
        <div className="space-y-3 mt-3">
          {/* Pickup & Pay */}
          <div className="border border-blue-100 bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-500">✅</span>
              <span className="font-semibold text-gray-800 text-sm">Pickup & Pay</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">Order is packed. Customer will pay ₹{order.total} at pickup</p>
            <button
              onClick={() => onStatusChange(order.id, "Delivered")}
              className="bg-[#2e7d6b] hover:bg-[#255f55] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Confirm Pickup
            </button>
          </div>
          {/* Home Delivery */}
          <div className="border border-yellow-100 bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span>🛵</span>
              <span className="font-semibold text-gray-800 text-sm">Home Delivery</span>
            </div>
            <p className="text-xs text-orange-500 mb-3">₹{order.total + 15} to be collected. Extra ₹15 added for delivery.</p>
            <button className="bg-[#2e7d6b] hover:bg-[#255f55] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Out for Delivery
            </button>
          </div>
          {/* Customer Feedback */}
          {order.feedback > 0 && (
            <div className="border border-green-100 bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600">✅</span>
                <span className="font-semibold text-[#2e7d6b] text-sm">Customer Feedback</span>
              </div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className={s <= order.feedback ? "text-yellow-400" : "text-gray-300"}>★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">Thank you for your order! 🙂</p>
              {order.items.map((it, i) => (
                <div key={i} className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>• {it.qty} {it.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {order.status !== "Ready" && order.status !== "Delivered" && (
        <div className="flex gap-2 mt-3">
          <button className="border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            View
          </button>
          {nextStatus[order.status] && (
            <button
              onClick={() => onStatusChange(order.id, nextStatus[order.status])}
              className={`${btnColor[order.status]} text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors`}
            >
              {btnLabel[order.status]}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Bill Summary Sidebar ─────────────────────────────────────────────────────
function BillSummary({ order }) {
  if (!order) return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center text-gray-400 text-sm">
      Select a Ready order to see bill summary
    </div>
  );
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="mb-4">
        <p className="text-xs font-bold text-gray-400 mb-3 tracking-widest uppercase">Customer Feedback</p>
        <div className="flex gap-1 mb-1">
          {[1,2,3,4,5].map((s) => (
            <span key={s} className={`text-xl ${s <= order.feedback ? "text-yellow-400" : "text-gray-200"}`}>★</span>
          ))}
        </div>
        <p className="text-sm font-bold text-gray-800">Thank you for your order! 🙂</p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs font-bold text-[#2e7d6b] tracking-widest uppercase mb-3">Bill Summary</p>
        <div className="flex justify-between text-sm font-semibold text-gray-800 mb-2">
          <span>{order.customer}</span>
          <span>₹{order.total}</span>
        </div>
        {BILL_ITEMS.map((it, i) => (
          <div key={i} className="flex justify-between text-sm text-gray-500 mb-1">
            <span>{it.name}</span>
            <span>₹ {it.price}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-3 text-xs text-[#2e7d6b] font-semibold">
          <span>✅ Order Ready for Pickup</span>
          <span className="ml-auto text-gray-400">Total = ₹25</span>
        </div>
        <div className="flex justify-between font-bold text-[#2e7d6b] text-base mt-2">
          <span>Total =</span>
          <span>₹ {order.total}</span>
        </div>
        <button className="mt-4 w-full border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          Download Bill
        </button>
      </div>
    </div>
  );
}

// ── Add Product View ─────────────────────────────────────────────────────────
function AddProductView({ orders, onStatusChange, activeTab, setActiveTab }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice]             = useState("");
  const [file, setFile]               = useState(null);
  const [preview, setPreview]         = useState(null);
  const [products, setProducts]       = useState([]);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleAdd = () => {
    if (!productName || !price) return;
    setProducts((prev) => [
      ...prev,
      { id: Date.now(), name: productName, price: Number(price), image: preview },
    ]);
    setProductName(""); setPrice(""); setFile(null); setPreview(null);
  };

  const pendingOrders = orders.filter((o) => o.status === activeTab);

  return (
    <div className="flex gap-6">
      {/* Add Product Card */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-5">Add Product</h2>

        {/* Upload area */}
        <label className="block cursor-pointer mb-5">
          <div className={`border-2 border-dashed border-[#2e7d6b]/40 rounded-xl flex flex-col items-center justify-center p-8 bg-green-50/40 hover:bg-green-50 transition-colors ${preview ? "p-2" : ""}`}>
            {preview ? (
              <img src={preview} alt="preview" className="w-full h-40 object-cover rounded-xl" />
            ) : (
              <>
                <span className="text-4xl text-[#2e7d6b] mb-2">🖼</span>
                <p className="font-semibold text-gray-700 text-sm">Upload product photo</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</p>
              </>
            )}
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>

        {/* Product Name */}
        <label className="block mb-1 text-sm font-semibold text-gray-700">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40"
        />

        {/* Price */}
        <label className="block mb-1 text-sm font-semibold text-gray-700">Price ₹</label>
        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden mb-4">
          <span className="px-3 text-gray-500 text-sm bg-gray-50 border-r border-gray-200 py-2.5">₹</span>
          <input
            type="number"
            placeholder="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
          />
        </div>

        {/* Choose file */}
        <div className="flex items-center gap-2 mb-4">
          <label className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors">
            Choose File
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </label>
          <span className="text-sm text-gray-400">{file ? file.name : "No file chosen"}</span>
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-[#2e7d6b] hover:bg-[#255f55] text-white font-bold py-3 rounded-xl transition-colors text-sm"
        >
          Add Product
        </button>

        {/* Product list preview */}
        {products.length > 0 && (
          <div className="mt-5 space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Added Products</p>
            {products.map((p) => (
              <div key={p.id} className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2">
                {p.image && <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-lg" />}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                  <p className="text-xs text-gray-500">₹{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pending Orders Panel */}
      <div className="w-80 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-shrink-0">
        <h2 className="text-base font-bold text-gray-800 mb-4">Pending Orders</h2>
        {/* Tabs */}
        <div className="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`flex-1 text-xs font-semibold py-1.5 rounded-lg transition-colors ${
                activeTab === t ? "bg-[#2e7d6b] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {pendingOrders.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">No {activeTab.toLowerCase()} orders</p>
        ) : (
          pendingOrders.map((order) => (
            <div key={order.id} className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
              <p className="font-bold text-gray-800 text-sm">{order.customer}</p>
              {order.items.map((it, i) => (
                <p key={i} className="text-xs text-gray-500">{it.qty} {it.name}</p>
              ))}
              <div className="flex gap-2 mt-2">
                <button className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-lg hover:bg-gray-50">View</button>
                {order.status === "Pending" && (
                  <button
                    onClick={() => onStatusChange(order.id, "Accepted")}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-lg transition-colors"
                  >
                    Accept
                  </button>
                )}
              </div>
            </div>
          ))
        )}
        {pendingOrders.length > 2 && (
          <button className="text-[#2e7d6b] text-sm font-medium mt-2 hover:underline flex items-center gap-1">
            Show All ›
          </button>
        )}
      </div>
    </div>
  );
}

// ── Dashboard (orders) View ──────────────────────────────────────────────────
function DashboardView({ orders, onStatusChange, activeTab, setActiveTab }) {
  const filtered   = orders.filter((o) => o.status === activeTab);
  const readyOrder = orders.find((o) => o.status === "Ready");

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        {/* Tabs */}
        <div className="flex gap-1 mb-5 bg-gray-100 rounded-xl p-1 w-fit">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === t ? "bg-[#2e7d6b] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center text-gray-400">
            No {activeTab.toLowerCase()} orders
          </div>
        ) : (
          filtered.map((order) => (
            <OrderCard key={order.id} order={order} onStatusChange={onStatusChange} />
          ))
        )}
      </div>

      {/* Bill summary */}
      <div className="w-72 flex-shrink-0">
        <BillSummary order={readyOrder} />
      </div>
    </div>
  );
}

// ── Main Admin Dashboard ─────────────────────────────────────────────────────
export default function AdminDashboard() {
  const navigate = useNavigate();
  const shopName = localStorage.getItem("adminShop") || "Seth Kirana Store";

  const [activeView, setActiveView] = useState("dashboard");
  const [activeTab,  setActiveTab]  = useState("Pending");
  const [orders, setOrders]         = useState(initialOrders);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: newStatus } : o));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#f0f2f8] font-sans">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        shopName={shopName}
        onLogout={handleLogout}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar */}
        <nav className=" text-white px-6 py-3 flex items-center justify-between"
          style={{ background: "linear-gradient(90deg,#3b82f6 0%,#2563eb 100%)" }}>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span>
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
            <span>Local<span className="text-green-300">Cart</span></span>
          </div>
          <button className="relative text-xl">🔔</button>
        </nav>

        {/* Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

          {activeView === "dashboard" && (
            <DashboardView
              orders={orders}
              onStatusChange={handleStatusChange}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
          {activeView === "addProduct" && (
            <AddProductView
              orders={orders}
              onStatusChange={handleStatusChange}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
          {activeView === "viewOrders" && (
            <DashboardView
              orders={orders}
              onStatusChange={handleStatusChange}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
        </div>
      </div>
    </div>
  );
}
