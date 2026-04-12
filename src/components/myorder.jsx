import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: 12346,
    store: "Seth Kirana Store",
    items: "1 kg Atta, 1 kg Rice",
    total: 200,
    status: "Pending",
    date: "April 23, 2024",
  },
  {
    id: 12345,
    store: "Seth Kirana Store",
    items: "2 kg Atta, 3 kg Sugar",
    total: 320,
    status: "Ready for Pickup",
    date: "April 21, 2024",
  },
  {
    id: 12344,
    store: "Jain General Store",
    items: "500g Besan, 2 Oil",
    total: 180,
    status: "Delivered",
    date: "April 20, 2024",
  },
];

export default function MyOrders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav
        className="flex items-center justify-between px-6 py-4 text-white shadow-sm"
        style={{ background: "linear-gradient(90deg,#3b82f6 0%,#2563eb 100%)" }}
      >
        <button
          onClick={() => navigate("/shops")}
          className="text-xl font-bold"
        >
          Local<span className="text-green-300">Cart</span>
        </button>

        <div className="flex items-center gap-5 text-sm font-medium">
          <button onClick={() => navigate("/shops")} className="hover:text-green-300">
            Home
          </button>
          <button onClick={() => navigate("/orders")} className="hover:text-green-300">
            My Orders
          </button>
          <button onClick={() => navigate("/cart")} className="hover:text-green-300">
            My Cart
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <button
                onClick={() => navigate("/shops")}
                className="mb-2 text-sm font-medium text-blue-600 hover:underline"
              >
                Back to shops
              </button>
              <h1 className="text-2xl font-bold">My Orders</h1>
            </div>

            <button
              onClick={() => navigate("/profile")}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow"
            >
              My Profile
            </button>
          </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between rounded-xl bg-gray-50 p-4 shadow-sm"
            >
              <div>
                <p className="text-sm text-gray-500">Order #{order.id}</p>
                <h2 className="text-lg font-semibold">{order.store}</h2>
                <p className="text-sm text-gray-600">{order.items}</p>
                <p className="mt-1 text-xs text-gray-400">{order.date}</p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold">Rs. {order.total}</p>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    order.status === "Pending"
                      ? "bg-yellow-200 text-yellow-700"
                      : order.status === "Ready for Pickup"
                        ? "bg-green-200 text-green-700"
                        : "bg-blue-200 text-blue-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
