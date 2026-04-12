import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultUser = {
  name: "Ishaan Mehta",
  address: "123 Green Lane, New Delhi, India",
  phone: "+91 98765 43210",
  avatar:
    "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  memberSince: "2023",
  orders: 12,
  favoriteShops: 6,
  totalSpend: 5420,
  email: "ishaan@email.com",
};

export default function ProfilePage() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [user, setUser] = useState(defaultUser);
  const [editData, setEditData] = useState(defaultUser);
  const [isEditing, setIsEditing] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const storedName = window.localStorage.getItem("userName");
    const storedPhone = window.localStorage.getItem("userPhone");

    if (!storedName && !storedPhone) {
      return;
    }

    const nextUser = {
      ...defaultUser,
      name: storedName || defaultUser.name,
      phone: storedPhone || defaultUser.phone,
    };

    setUser(nextUser);
    setEditData(nextUser);
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setUser((current) => ({ ...current, avatar: objectUrl }));
    setEditData((current) => ({ ...current, avatar: objectUrl }));
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
    window.localStorage.setItem("userName", editData.name);
    window.localStorage.setItem("userPhone", editData.phone);
  };

  const stats = [
    { label: "Orders", value: user.orders },
    { label: "Favorite Shops", value: user.favoriteShops },
    { label: "Spend", value: `Rs. ${user.totalSpend}` },
  ];

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
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-24 w-24 rounded-full object-cover border-2 border-gray-200"
                />
                <button
                  onClick={() => fileRef.current?.click()}
                  className="absolute bottom-0 right-0 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white"
                >
                  Edit
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>

              <div>
                {isEditing ? (
                  <input
                    value={editData.name}
                    onChange={(event) =>
                      setEditData((current) => ({ ...current, name: event.target.value }))
                    }
                    className="mb-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-lg font-bold"
                  />
                ) : (
                  <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                )}

                {isEditing ? (
                  <input
                    value={editData.phone}
                    onChange={(event) =>
                      setEditData((current) => ({ ...current, phone: event.target.value }))
                    }
                    className="mb-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700"
                  />
                ) : (
                  <p className="text-sm text-gray-600">{user.phone}</p>
                )}

                <p className="text-sm text-gray-500">{user.address}</p>
                <p className="mt-1 text-xs text-gray-400">
                  Member since {user.memberSince}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white"
                >
                  Save Profile
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700"
                >
                  Edit Profile
                </button>
              )}

              <button
                onClick={() => navigate("/orders")}
                className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white"
              >
                View Orders
              </button>
            </div>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-100 bg-gray-50 p-4"
              >
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="mt-1 text-lg font-bold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <button
              onClick={() => setShowMore((current) => !current)}
              className="rounded-xl bg-[#2e7d6b] px-4 py-2 text-sm font-semibold text-white"
            >
              {showMore ? "Hide Details" : "More Details"}
            </button>
            <button
              onClick={() => navigate("/login")}
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Log Out
            </button>
          </div>

          {showMore && (
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Email
              </label>
              <input
                type="email"
                value={editData.email}
                onChange={(event) =>
                  setEditData((current) => ({ ...current, email: event.target.value }))
                }
                className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />

              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Address
              </label>
              <input
                type="text"
                value={editData.address}
                onChange={(event) =>
                  setEditData((current) => ({ ...current, address: event.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
