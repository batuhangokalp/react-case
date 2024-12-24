import { useState } from "react";
import { useSelector } from "react-redux";
import CouponModal from "../Modals/CouponModal";

const BalanceTable = () => {
  const [createCouponModal, setCreateCouponModal] = useState(false);
  const [balanceName, setBalanceName] = useState("");
  const [balanceValue, setBalanceValue] = useState(Number);

  const balances = useSelector((state) => state.balance);

  const openCreateCouponModal = (key, value) => {
    setCreateCouponModal(true);
    setBalanceName(key);
    setBalanceValue(value);
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Bakiye Tablosu</h2>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Bakiye Tipi</th>
            <th className="border px-4 py-2 text-left">Kalan Bakiye</th>
            <th className="border px-4 py-2 text-center">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(balances).map(([key, value], index) => (
            <tr key={key}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{key}</td>
              <td className="border px-4 py-2">{value}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => openCreateCouponModal(key, value)}
                >
                  Kupon Oluştur
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {createCouponModal && (
        <CouponModal
          balanceName={balanceName}
          balanceValue={balanceValue}
          setCreateCouponModal={setCreateCouponModal}
        />
      )}
    </div>
  );
};

export default BalanceTable;
