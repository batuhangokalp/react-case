import { useState } from "react";
import PropTypes from "prop-types";

const PaymentModal = ({ balanceName, balanceValue, setPaymentModal }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Credit Cart");

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] h-[75%] relative flex flex-col items-center">
        <h2 className="text-xl font-semibold">Bakiye Yükle - {balanceName}</h2>
        <h3 className="text-xl font-thin mt-2">
          Güncel Bakiye - {balanceValue}₺
        </h3>

        <div className="mt-6 w-full flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Ödeme Yöntemini Seçin</p>

          <div className=" w-full flex flex-row ">
            <div
              className={`cursor-pointer p-2 mb-4 rounded w-full text-center ${
                selectedPaymentMethod === "Credit Cart"
                  ? "bg-blue-200"
                  : "bg-gray-100"
              }`}
              onClick={() => handlePaymentMethodChange("Credit Cart")}
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

        <div className="absolute bottom-8 right-10 flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setPaymentModal(false)}
          >
            Kapat
          </button>
        </div>
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
