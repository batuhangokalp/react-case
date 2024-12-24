import PropTypes from "prop-types";
import PaymentModal from "../Modals/PaymentModal";
import { useState } from "react";

const BalanceCard = ({ balanceName, balanceValue }) => {
  const [paymentModal, setPaymentModal] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 lg:items-start">
      <h2 className="text-lg font-semibold text-gray-700">{balanceName}</h2>
      <p className="text-xl font-bold text-gray-900 mt-2">
        Güncel Bakiye - {balanceValue.toFixed(2)}₺
      </p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        onClick={() => setPaymentModal(true)}
      >
        Bakiye Yükle
      </button>
      {paymentModal && (
        <PaymentModal
          balanceName={balanceName}
          balanceValue={balanceValue}
          setPaymentModal={setPaymentModal}
        />
      )}
    </div>
  );
};

export default BalanceCard;

BalanceCard.propTypes = {
  balanceName: PropTypes.string,
  balanceValue: PropTypes.number,
};
