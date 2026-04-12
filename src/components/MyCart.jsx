import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NotificationPanel from "./NotificationPanel";
const initialCartItems = [
  
  { id: 1, name: "Sabudana", qty: 1, unit: "kg", priceEach: 50, image: "https://www.ruchiskitchen.com/wp-content/uploads/2015/02/How-to-make-non-sticky-sabudana-04.jpg.webp" },
  { id: 2, name: "Detergent", qty: 1, unit: "kg", priceEach: 50, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=120&h=120&fit=crop" },
  { id: 3, name: "Soap", qty: 1, unit: "kg", priceEach: 50, image: "https://img.freepik.com/free-vector/floating-bar-soap-liquid-soap-cartoon-vector-icon-illustration-healthcare-object-icon-concept_138676-4675.jpg?semt=ais_incoming&w=740&q=80" },
  { id: 4, name: "Jeera", qty: 1, unit: "kg", priceEach: 50, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&h=120&fit=crop" },
  { id: 5, name: "Turmeric", qty: 1, unit: "kg", priceEach: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwkXu7w9Ik3IsniRHFRrVSLzxFjYCeWVG6z6-qhV1geDS2iJyTH0d1ioWrJikYrc1D_2tp-yLIUMfF_hXhr9bjruOljkQk4yuPreFPj0&s=10" },
  { id: 6, name: "Rice", qty: 1, unit: "kg", priceEach: 50, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=120&fit=crop" },
  { id: 7, name: "Besan", qty: 1, unit: "kg", priceEach: 50, image: "https://cappacalefoods.com/cdn/shop/products/BesanFlour.jpg?v=1663586238" },
  { id: 8, name: "Maida", qty: 1, unit: "kg", priceEach: 50, image: "https://m.media-amazon.com/images/I/71bJtMWTv1L._AC_UF894,1000_QL80_.jpg" },
  { id: 9, name: "Dal", qty: 1, unit: "kg", priceEach: 50, image: "https://www.healthyorganic.in/cdn/shop/products/organic-toor-dal-500x500_837491a8-755b-4548-b082-42c110c406aa_grande.jpg?v=1552055341" },
  { id: 10, name: "Sugar", qty: 1, unit: "kg", priceEach: 50, image: "https://images.jdmagicbox.com/quickquotes/images_main/-01g7eh76.jpg" },
];

export default function MyCart() {
  const navigate = useNavigate();
  const [showNotif, setShowNotif] = useState(false);
  const [items, setItems] = useState(initialCartItems);

  const increase = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decrease = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
    );

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const total = items.reduce((sum, i) => sum + i.priceEach * i.qty, 0);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

  const handlePlaceOrder = () => {
    navigate("/order-confirm", { state: { items, total } });
  };

  return (
    <div className="min-h-screen bg-[#f0f2f8] font-sans">

      {/* Navbar */}
      <nav className=" text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md" style={{ background: "linear-gradient(90deg,#3b82f6 0%,#2563eb 100%)" }}>
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
          <button onClick={() => setShowNotif(true)} className="relative">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">3</span>
          </button>
            {showNotif && <NotificationPanel onClose={() => setShowNotif(false)} />}
                              
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* Back */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#3b5bdb] text-sm font-medium mb-4 hover:underline">
          ← Continue Shopping
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Inner back */}
          <div className="px-6 pt-5 pb-2">
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#3b5bdb] text-sm font-medium hover:underline">
              ← Cart to Shopping
            </button>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-6 py-3 border-b border-gray-100 text-sm font-semibold text-gray-600">
            <span>Item</span>
            <span className="w-32 text-center">Quantity</span>
            <span className="w-16 text-right">Price</span>
            <span className="w-16"></span>
          </div>

          {/* Items */}
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center px-6 py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
              {/* Item info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-xl"
                  onError={(e) => { e.target.src = `https://placehold.co/56x56/e2e8f0/64748b?text=${item.name[0]}`; }}
                />
                <span className="font-medium text-gray-800">
                  {item.qty} {item.unit === "pcs" ? "pcs" : item.qty > 1 ? item.unit + "s" : item.unit} {item.name}
                </span>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-32">
                <button onClick={() => decrease(item.id)} className="w-8 h-8 flex items-center justify-center text-[#2e7d6b] font-bold hover:bg-gray-100 transition-colors text-lg">−</button>
                <span className="flex-1 text-center text-sm font-medium text-gray-700">
                  {item.qty} {item.unit}
                </span>
                <button onClick={() => increase(item.id)} className="w-8 h-8 flex items-center justify-center bg-[#2e7d6b] text-white font-bold hover:bg-[#255f55] transition-colors text-lg">+</button>
              </div>

              {/* Price */}
              <span className="w-16 text-right font-semibold text-gray-800">₹{item.priceEach * item.qty}</span>

              {/* Remove */}
              <button onClick={() => remove(item.id)} className="w-16 flex items-center gap-1 text-red-500 hover:text-red-700 text-sm font-medium transition-colors justify-end">
                🗑 Remove
              </button>
            </div>
          ))}

          {/* Total row */}
          <div className="bg-green-50/60 px-6 py-4 flex justify-end">
            <span className="text-base font-bold text-gray-800">Total = ₹{total}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-6 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-xl border border-gray-300 bg-white text-gray-600 font-semibold hover:bg-gray-50 transition-colors text-sm"
          >
            Continue Shopping
          </button>
          <button
            onClick={handlePlaceOrder}
            disabled={items.length === 0}
            className="px-10 py-3 rounded-xl bg-[#2e7d6b] hover:bg-[#255f55] text-white font-bold transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
