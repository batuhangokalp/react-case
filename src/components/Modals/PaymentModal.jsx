import { useState } from "react";
import PropTypes from "prop-types";
import CreditCard from "../Balance/PaymentMethod/CreditCard";
import Credit from "../Balance/PaymentMethod/Credit";

const PaymentModal = ({ balanceName, balanceValue, setPaymentModal }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isNotSuccess, setIsNotSuccess] = useState(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Card");

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white px-8 py-12 rounded-lg shadow-lg w-[50%]  relative flex flex-col items-center">
        <div className="absolute top-0 right-0 flex justify-end">
          <button
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded opacity-100 hover:opacity-80"
            onClick={() => setPaymentModal(false)}
          >
            X
          </button>
        </div>
        <h2 className="text-xl font-semibold">Bakiye Yükle - {balanceName}</h2>
        <h3 className="text-xl font-thin mt-2">
          Güncel Bakiye - {balanceValue.toFixed(2)}₺
        </h3>

        <div className="mt-6 w-full flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Ödeme Yöntemini Seçin</p>

          <div className="w-full flex flex-row">
            <div
              className={`cursor-pointer p-2 mb-4 rounded w-full text-center ${
                selectedPaymentMethod === "Credit Card"
                  ? "bg-blue-200"
                  : "bg-gray-100"
              }`}
              onClick={() => handlePaymentMethodChange("Credit Card")}
            >
              Kredi Kartı
            </div>

            <div
              className={`cursor-pointer p-2 mb-4 rounded w-full text-center ${
                selectedPaymentMethod === "Credit"
                  ? "bg-blue-200"
                  : "bg-gray-100"
              }`}
              onClick={() => handlePaymentMethodChange("Credit")}
            >
              Kredi
            </div>
          </div>
        </div>

        {selectedPaymentMethod === "Credit Card" ? (
          <CreditCard
            setPaymentModal={setPaymentModal}
            balanceName={balanceName}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            isNotSuccess={isNotSuccess}
            setIsNotSuccess={setIsNotSuccess}
          />
        ) : (
          <Credit
            setPaymentModal={setPaymentModal}
            balanceName={balanceName}
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            isNotSuccess={isNotSuccess}
            setIsNotSuccess={setIsNotSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentModal;

PaymentModal.propTypes = {
  balanceName: PropTypes.string,
  balanceValue: PropTypes.number,
  setPaymentModal: PropTypes.func,
};
