import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotificationPanel from "./NotificationPanel";
// ── Mock data ────────────────────────────────────────────────────────────────
const shopsData = {
  1: {
    id: 1,
    name: "Seth Kirana Store",
    tagline: "Trusted grocery store since 1995",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop",
    products: [
      { id: 1, name: "Sabudana", price: 40, unit: "500g", image: "https://www.ruchiskitchen.com/wp-content/uploads/2015/02/How-to-make-non-sticky-sabudana-04.jpg.webp" },
      { id: 2, name: "Detergent", price: 1,   unit: "kg",   image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=120&h=120&fit=crop" },
      { id: 3, name: "Soap", price: 25, unit: "pack", image: "https://img.freepik.com/free-vector/floating-bar-soap-liquid-soap-cartoon-vector-icon-illustration-healthcare-object-icon-concept_138676-4675.jpg?semt=ais_incoming&w=740&q=80" },
      { id: 4, name: "Jeera",     price: 65,  unit: "250g", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&h=120&fit=crop" },
      { id: 5, name: "Turmeric", price: 30, unit: "250g", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwkXu7w9Ik3IsniRHFRrVSLzxFjYCeWVG6z6-qhV1geDS2iJyTH0d1ioWrJikYrc1D_2tp-yLIUMfF_hXhr9bjruOljkQk4yuPreFPj0&s=10" },
      { id: 6, name: "Rice",      price: 60,  unit: "kg",   image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=120&fit=crop" },
      { id: 7, name: "Besan", price: 55, unit: "kg", image: "https://cappacalefoods.com/cdn/shop/products/BesanFlour.jpg?v=1663586238" },
      { id: 8, name: "Maida", price: 35, unit: "250g", image: "https://m.media-amazon.com/images/I/71bJtMWTv1L._AC_UF894,1000_QL80_.jpg" },
      { id: 9, name: "Dal", price: 90, unit: "kg", image: "https://www.healthyorganic.in/cdn/shop/products/organic-toor-dal-500x500_837491a8-755b-4548-b082-42c110c406aa_grande.jpg?v=1552055341" },
      { id: 10, name: "Sugar", price: 45, unit: "kg", image: "https://images.jdmagicbox.com/quickquotes/images_main/-01g7eh76.jpg" },
    ],
  },
  2: {
    id: 2,
    name: "Jain General Store",
    tagline: "Your friendly neighborhood kirana store",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop",
    products: [
      { id: 1, name: "Atta",      price: 50,  unit: "kg",   image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=120&h=120&fit=crop" },
      { id: 2, name: "Salt", price: 20, unit: "kg", image: "https://images.apollo247.in/pd-cms/cms/2025-10/AdobeStock_1539510217_Preview.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w" },
      { id: 3, name: "Oil",       price: 130, unit: "litre", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=120&h=120&fit=crop" },
      { id: 4, name: "Tea",       price: 80,  unit: "250g", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&fit=crop" },
    ],
  },
  3: {
    id: 3,
    name: "Gupta Provision Store",
    tagline: "Serving fresh groceries daily to your home",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=200&fit=crop",
    products: [
      { id: 1, name: "Poha", price: 30, unit: "500g", image: "https://twobrothersindiashop.com/cdn/shop/articles/poha-raw-puffed-rice-calories-nutritional-value-benefits.png" },
      { id: 2, name: "Chana Dal", price: 75, unit: "kg", image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/pulses/x/e/a/1-chanda-dal-1-chana-dal-bharat-original-imagxx88ggzcz73b.jpeg?q=70" },
      { id: 3, name: "Mustard", price: 55, unit: "250g", image: "https://www.hillvale.co.uk/cdn/shop/articles/mustard_1067x.png?v=1652273589" },
    ],
  },
};

// ── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, cartQty, onAdd, onIncrease, onDecrease }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-gray-100">
      {/* Product image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
        onError={(e) => { e.target.src = "https://placehold.co/80x80/e2e8f0/64748b?text=" + product.name[0]; }}
      />

      {/* Info + controls */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-800 text-sm truncate">{product.name}</p>
        <p className="text-gray-500 text-xs mb-2">
          ₹<span className="font-bold text-gray-800">{product.price}</span> / {product.unit}
        </p>

        {/* Quantity row */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={onDecrease}
              className="w-7 h-7 flex items-center justify-center bg-[#21ba51] text-white font-bold hover:bg-[#255f55] transition-colors text-lg leading-none"
            >
              −
            </button>
            <span className="w-10 text-center text-sm font-medium text-gray-700">
              {cartQty} {product.unit}
            </span>
            <button
              onClick={onIncrease}
              className="w-7 h-7 flex items-center justify-center bg-[#21ba51] text-white font-bold hover:bg-[#255f55] transition-colors text-lg leading-none"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={onAdd}
          className="mt-2 w-full bg-[#21ba51] hover:bg-[#07642e] text-white text-xs font-semibold py-1.5 rounded-lg transition-colors tracking-wide uppercase"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// ── Main ShopDetail Page ─────────────────────────────────────────────────────
export default function ShopDetail() {
  const { shopId } = useParams();
  const navigate = useNavigate();

  const shop = shopsData[shopId];

  // cart: { productId: quantity }
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  if (!shop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-600">Shop not found</p>
          <button
            onClick={() => navigate("/shops")}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const filteredProducts = shop.products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const handleIncrease = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const handleDecrease = (productId) => {
    setCart((prev) => {
      const qty = (prev[productId] || 0) - 1;
      if (qty <= 0) {
        const updated = { ...prev };
        delete updated[productId];
        return updated;
      }
      return { ...prev, [productId]: qty };
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f2f8] font-sans">

      {/* ── Navbar ── */}
      <nav className=" text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-md" style={{ background: "linear-gradient(90deg,#3b82f6 0%,#2563eb 100%)" }}>
        <div className="flex items-center gap-2 text-xl font-bold">
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
          <span className="text-white">Local</span>
          <span className="text-green-300">Cart</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => navigate("/shops")} className="text-sm font-medium hover:text-green-300 transition-colors">
            Home
          </button>
          <button onClick={() => navigate("/cart")} className="relative text-sm font-medium hover:text-green-300 transition-colors flex items-center gap-1">
            My Cart
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-green-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalCartItems}
              </span>
            )}
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
        </div>
      </nav>

      {/* ── Page content ── */}
      <div className="max-w-4xl mx-auto px-4 py-6">

        {/* Back link */}
        <button
          onClick={() => navigate("/shops")}
          className="flex items-center gap-1 text-[#3b5bdb] text-sm font-medium mb-5 hover:underline"
        >
          ← Back to Shops
        </button>

        {/* Shop header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 flex items-center gap-4">
          <img
            src={shop.image}
            alt={shop.name}
            className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
            onError={(e) => { e.target.src = "https://placehold.co/96x96/e2e8f0/64748b?text=Shop"; }}
          />
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800">{shop.name}</h1>
            <p className="text-gray-500 text-sm">{shop.tagline}</p>
          </div>
          <button
            onClick={() => navigate("/cart")}
            className="bg-[#21ba51] hover:bg-[#07642e] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm flex-shrink-0"
          >
            Go to Cart
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">🔍</span>
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7d6b]/40 shadow-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">🎙️</button>
        </div>

        {/* Products grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartQty={cart[product.id] || 1}
                onAdd={() => handleAdd(product.id)}
                onIncrease={() => handleIncrease(product.id)}
                onDecrease={() => handleDecrease(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
