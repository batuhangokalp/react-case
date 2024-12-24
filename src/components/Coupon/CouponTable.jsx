import { useSelector } from "react-redux";

const CouponTable = () => {
  const coupons = useSelector((state) => state.coupon.Kuponlar);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Kupon Tablosu</h2>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Kupon Kodu</th>
            <th className="border px-4 py-2 text-left">Tutar</th>
            <th className="border px-4 py-2 text-center">Geçerlilik Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {coupons.length === 0 ? (
            <tr>
              <td colSpan="4" className="border px-4 py-2 text-center">
                Henüz kupon oluşturulmadı.
              </td>
            </tr>
          ) : (
            coupons.map((coupon, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">{coupon.amount}</td>
                <td className="border px-4 py-2 text-center">
                  {new Date().toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CouponTable;
