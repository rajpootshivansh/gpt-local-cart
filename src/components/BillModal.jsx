import { useRef } from "react";

// ── Sample bill data (pass as props in real usage) ───────────────────────────
const DEFAULT_BILL = {
  orderId: "#12678",
  date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
  time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
  shopName: "Seth Kirana Store",
  shopAddress: "Lal Ghati, Bhopal, Madhya Pradesh",
  shopPhone: "+91 99876 54321",
  customer: "Amit Sharma",
  customerPhone: "+91 98765 43210",
  items: [
    { name: "Besan",   qty: "1 kg",   price: 50  },
    { name: "Soap",    qty: "5 pcs",  price: 100 },
    { name: "Namkeen", qty: "1 pack", price: 85  },
  ],
  deliveryCharge: 0,
  status: "Order Ready for Pickup",
};

export default function BillModal({ onClose, bill = DEFAULT_BILL }) {
  const printRef = useRef(null);

  const subtotal = bill.items.reduce((s, i) => s + i.price, 0);
  const total    = subtotal + (bill.deliveryCharge || 0);

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const win = window.open("", "_blank", "width=700,height=900");
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Bill - ${bill.orderId}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', sans-serif; background: #fff; color: #1a1a2e; }
            .bill-wrap { max-width: 600px; margin: 0 auto; padding: 32px 28px; }
            .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #2e7d6b; }
            .logo { font-size: 22px; font-weight: 800; color: #1a1a2e; }
            .logo span { color: #2e7d6b; }
            .logo-sub { font-size: 11px; color: #888; margin-top: 2px; }
            .bill-title { text-align: right; }
            .bill-title h2 { font-size: 20px; font-weight: 700; color: #2e7d6b; }
            .bill-title p { font-size: 12px; color: #666; margin-top: 2px; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
            .meta-box { background: #f8fffe; border: 1px solid #d0ede8; border-radius: 8px; padding: 12px 14px; }
            .meta-box label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #888; font-weight: 600; }
            .meta-box p { font-size: 13px; font-weight: 600; color: #1a1a2e; margin-top: 2px; }
            .meta-box small { font-size: 11px; color: #666; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
            thead tr { background: #2e7d6b; color: #fff; }
            thead th { padding: 10px 12px; text-align: left; font-size: 12px; font-weight: 600; }
            thead th:last-child { text-align: right; }
            tbody tr { border-bottom: 1px solid #eef5f3; }
            tbody tr:nth-child(even) { background: #f8fffe; }
            tbody td { padding: 10px 12px; font-size: 13px; color: #333; }
            tbody td:last-child { text-align: right; font-weight: 600; }
            .totals { margin-left: auto; width: 240px; }
            .total-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; color: #555; border-bottom: 1px solid #eee; }
            .total-final { display: flex; justify-content: space-between; padding: 10px 0 0; font-size: 16px; font-weight: 800; color: #2e7d6b; }
            .status-badge { display: inline-flex; align-items: center; gap: 6px; background: #e8f7f2; border: 1px solid #b2ddd0; border-radius: 20px; padding: 6px 14px; font-size: 12px; font-weight: 600; color: #2e7d6b; margin-bottom: 20px; }
            .footer { margin-top: 28px; padding-top: 16px; border-top: 1px dashed #ccc; text-align: center; }
            .footer p { font-size: 11px; color: #aaa; }
            .footer strong { color: #2e7d6b; }
            @media print { body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 400);
  };

  const handleDownload = () => {
    const content = printRef.current.innerHTML;
    const win = window.open("", "_blank", "width=700,height=900");
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Bill - ${bill.orderId}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', sans-serif; background: #fff; color: #1a1a2e; }
            .bill-wrap { max-width: 600px; margin: 0 auto; padding: 32px 28px; }
            .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #2e7d6b; }
            .logo { font-size: 22px; font-weight: 800; color: #1a1a2e; }
            .logo span { color: #2e7d6b; }
            .logo-sub { font-size: 11px; color: #888; margin-top: 2px; }
            .bill-title { text-align: right; }
            .bill-title h2 { font-size: 20px; font-weight: 700; color: #2e7d6b; }
            .bill-title p { font-size: 12px; color: #666; margin-top: 2px; }
            .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
            .meta-box { background: #f8fffe; border: 1px solid #d0ede8; border-radius: 8px; padding: 12px 14px; }
            .meta-box label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #888; font-weight: 600; }
            .meta-box p { font-size: 13px; font-weight: 600; color: #1a1a2e; margin-top: 2px; }
            .meta-box small { font-size: 11px; color: #666; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
            thead tr { background: #2e7d6b; color: #fff; }
            thead th { padding: 10px 12px; text-align: left; font-size: 12px; font-weight: 600; }
            thead th:last-child { text-align: right; }
            tbody tr { border-bottom: 1px solid #eef5f3; }
            tbody tr:nth-child(even) { background: #f8fffe; }
            tbody td { padding: 10px 12px; font-size: 13px; color: #333; }
            tbody td:last-child { text-align: right; font-weight: 600; }
            .totals { margin-left: auto; width: 240px; }
            .total-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; color: #555; border-bottom: 1px solid #eee; }
            .total-final { display: flex; justify-content: space-between; padding: 10px 0 0; font-size: 16px; font-weight: 800; color: #2e7d6b; }
            .status-badge { display: inline-flex; align-items: center; gap: 6px; background: #e8f7f2; border: 1px solid #b2ddd0; border-radius: 20px; padding: 6px 14px; font-size: 12px; font-weight: 600; color: #2e7d6b; margin-bottom: 20px; }
            .footer { margin-top: 28px; padding-top: 16px; border-top: 1px dashed #ccc; text-align: center; }
            .footer p { font-size: 11px; color: #aaa; }
            .footer strong { color: #2e7d6b; }
            @media print { body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); win.close(); }, 400);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto border border-gray-100"
          style={{ animation: "fadeUp 0.2s ease" }}>
          <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>

          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧾</span>
              <h2 className="font-bold text-gray-800 text-base">Order Bill</h2>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{bill.orderId}</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl transition-colors">✕</button>
          </div>

          {/* ── Printable Bill Area ── */}
          <div className="px-6 py-5">
            <div ref={printRef}>
              <div className="bill-wrap">

                {/* Header */}
                <div className="header" style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"20px", paddingBottom:"14px", borderBottom:"2px solid #2e7d6b" }}>
                  <div>
                    <div style={{ fontSize:"20px", fontWeight:"800", color:"#1a1a2e" }}>
                      🛒 Local<span style={{ color:"#2e7d6b" }}>Cart</span>
                    </div>
                    <div style={{ fontSize:"11px", color:"#888", marginTop:"2px" }}>Your trusted local grocery platform</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:"18px", fontWeight:"700", color:"#2e7d6b" }}>TAX INVOICE</div>
                    <div style={{ fontSize:"12px", color:"#666", marginTop:"2px" }}>{bill.orderId}</div>
                    <div style={{ fontSize:"11px", color:"#999" }}>{bill.date} · {bill.time}</div>
                  </div>
                </div>

                {/* Meta grid */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginBottom:"20px" }}>
                  {/* Shop */}
                  <div style={{ background:"#f8fffe", border:"1px solid #d0ede8", borderRadius:"8px", padding:"12px 14px" }}>
                    <div style={{ fontSize:"10px", textTransform:"uppercase", letterSpacing:"0.08em", color:"#888", fontWeight:"600" }}>Sold By</div>
                    <div style={{ fontSize:"13px", fontWeight:"700", color:"#1a1a2e", marginTop:"3px" }}>{bill.shopName}</div>
                    <div style={{ fontSize:"11px", color:"#666", marginTop:"2px" }}>{bill.shopAddress}</div>
                    <div style={{ fontSize:"11px", color:"#2e7d6b", marginTop:"2px" }}>📞 {bill.shopPhone}</div>
                  </div>
                  {/* Customer */}
                  <div style={{ background:"#f8fffe", border:"1px solid #d0ede8", borderRadius:"8px", padding:"12px 14px" }}>
                    <div style={{ fontSize:"10px", textTransform:"uppercase", letterSpacing:"0.08em", color:"#888", fontWeight:"600" }}>Billed To</div>
                    <div style={{ fontSize:"13px", fontWeight:"700", color:"#1a1a2e", marginTop:"3px" }}>{bill.customer}</div>
                    <div style={{ fontSize:"11px", color:"#666", marginTop:"2px" }}>{bill.customerPhone}</div>
                    <div style={{ fontSize:"11px", color:"#666", marginTop:"2px" }}>LocalCart Member</div>
                  </div>
                </div>

                {/* Status badge */}
                <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"#e8f7f2", border:"1px solid #b2ddd0", borderRadius:"20px", padding:"5px 12px", fontSize:"12px", fontWeight:"600", color:"#2e7d6b", marginBottom:"16px" }}>
                  ✅ {bill.status}
                </div>

                {/* Items table */}
                <table style={{ width:"100%", borderCollapse:"collapse", marginBottom:"14px" }}>
                  <thead>
                    <tr style={{ background:"#2e7d6b", color:"#fff" }}>
                      <th style={{ padding:"9px 12px", textAlign:"left", fontSize:"12px", fontWeight:"600" }}>#</th>
                      <th style={{ padding:"9px 12px", textAlign:"left", fontSize:"12px", fontWeight:"600" }}>Item</th>
                      <th style={{ padding:"9px 12px", textAlign:"center", fontSize:"12px", fontWeight:"600" }}>Qty</th>
                      <th style={{ padding:"9px 12px", textAlign:"right", fontSize:"12px", fontWeight:"600" }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bill.items.map((item, i) => (
                      <tr key={i} style={{ borderBottom:"1px solid #eef5f3", background: i % 2 === 1 ? "#f8fffe" : "#fff" }}>
                        <td style={{ padding:"9px 12px", fontSize:"12px", color:"#999" }}>{i + 1}</td>
                        <td style={{ padding:"9px 12px", fontSize:"13px", color:"#333", fontWeight:"500" }}>{item.name}</td>
                        <td style={{ padding:"9px 12px", fontSize:"13px", color:"#555", textAlign:"center" }}>{item.qty}</td>
                        <td style={{ padding:"9px 12px", fontSize:"13px", fontWeight:"700", color:"#1a1a2e", textAlign:"right" }}>Rs. {item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <div style={{ marginLeft:"auto", width:"220px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"5px 0", fontSize:"13px", color:"#555", borderBottom:"1px solid #eee" }}>
                    <span>Subtotal</span><span>Rs. {subtotal}</span>
                  </div>
                  {bill.deliveryCharge > 0 && (
                    <div style={{ display:"flex", justifyContent:"space-between", padding:"5px 0", fontSize:"13px", color:"#555", borderBottom:"1px solid #eee" }}>
                      <span>Delivery</span><span>Rs. {bill.deliveryCharge}</span>
                    </div>
                  )}
                  <div style={{ display:"flex", justifyContent:"space-between", padding:"10px 0 0", fontSize:"17px", fontWeight:"800", color:"#2e7d6b" }}>
                    <span>Total =</span><span>Rs. {total}</span>
                  </div>
                  <div style={{ fontSize:"11px", color:"#999", marginTop:"4px", textAlign:"right" }}>Payment: Cash on Pickup</div>
                </div>

                {/* Footer */}
                <div style={{ marginTop:"24px", paddingTop:"14px", borderTop:"1px dashed #ccc", textAlign:"center" }}>
                  <p style={{ fontSize:"12px", color:"#2e7d6b", fontWeight:"600" }}>Thank you for shopping with LocalCart! 🙂</p>
                  <p style={{ fontSize:"10px", color:"#aaa", marginTop:"4px" }}>
                    This is a computer-generated bill. For queries call <strong style={{ color:"#2e7d6b" }}>{bill.shopPhone}</strong>
                  </p>
                  <p style={{ fontSize:"10px", color:"#ccc", marginTop:"6px" }}>LocalCart · localcart.in · Powered by LocalCart Platform</p>
                </div>

              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 px-6 pb-6 sticky bottom-0 bg-white pt-2 border-t border-gray-100 rounded-b-2xl">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 border border-[#3b5bdb] text-[#3b5bdb] font-semibold py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              🖨️ Print
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2e7d6b] hover:bg-[#255f55] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
            >
              ⬇️ Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
