import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  setCashBalance,
  setFlightBalance,
  setFoodBalance,
  setFuelBalance,
  setTollBalance,
} from "../../../redux/Balance/BalanceReducer";
import PaymentStatusModal from "../../Modals/PaymentStatusModal";

const CreditCard = ({
  setPaymentModal,
  balanceName,
  isSuccess,
  setIsSuccess,
  isNotSuccess,
  setIsNotSuccess,
}) => {
  const dispatch = useDispatch();

  // State Variables
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // #region Helper Functions
  const handleCardInfoChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      [name]: value,
    }));
  };
  const handleAmountChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const CVV_CODES = {
    INVALID: "999",
    TEST_SUCCESS: "000",
  };

  const closeSuccessModal = () => {
    setIsSuccess(false);
    setPaymentModal(false);

    setCardInfo({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
  };
  // #endregion

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountToSave = Number(paymentAmount);

    if (cardInfo.cvv === CVV_CODES.INVALID) {
      setIsNotSuccess(true);
      return;
    }

    if (cardInfo.cvv === CVV_CODES.TEST_SUCCESS) {
      const balanceActions = {
        "Yakıt Bakiyesi": { action: setFuelBalance, storageKey: "fuel" },
        "Nakit Bakiyesi": { action: setCashBalance, storageKey: "cash" },
        "Uçuş Bakiyesi": { action: setFlightBalance, storageKey: "flight" },
        "Yol Geçiş Bakiyesi": { action: setTollBalance, storageKey: "toll" },
        "Yemek Bakiyesi": { action: setFoodBalance, storageKey: "food" },
      };

      if (balanceActions[balanceName]) {
        const { action, storageKey } = balanceActions[balanceName];
        dispatch(action(amountToSave));
        localStorage.setItem(
          storageKey,
          amountToSave + Number(localStorage.getItem(storageKey))
        );
        setIsSuccess(true);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ödeme Tutarı
          </label>
          <input
            id="paymentAmount"
            type="number"
            value={paymentAmount}
            onChange={handleAmountChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ödeme tutarını girin (₺)"
          />
          <label className="block text-sm font-medium text-gray-700">
            Kart Numarası
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardInfo.cardNumber}
            onChange={handleCardInfoChange}
            className="mt-2 w-full p-2 border border-gray-300 rounded"
            placeholder="Kart Numarası"
            maxLength="16"
            required
          />
        </div>

        <div className="mb-4 flex justify-between">
          <div className="w-1/2 mr-2">
            <label className="block text-sm font-medium text-gray-700">
              Son Kullanma Tarihi
            </label>
            <input
              type="month"
              name="expiryDate"
              value={cardInfo.expiryDate}
              onChange={handleCardInfoChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded"
              placeholder="Son Kullanma Tarihi"
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="password"
              name="cvv"
              value={cardInfo.cvv}
              onChange={handleCardInfoChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded"
              maxLength="3"
              placeholder="CVV"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4 hover:opacity-80"
        >
          Ödemeyi Tamamla
        </button>
      </form>
      {isSuccess && (
        <PaymentStatusModal
          status="Success"
          title="Credit Cart"
          closeSuccessModal={closeSuccessModal}
        />
      )}
      {isNotSuccess && (
        <PaymentStatusModal
          status="Not Success"
          title="Credit Cart"
          closeSuccessModal={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default CreditCard;

CreditCard.propTypes = {
  setPaymentModal: PropTypes.func,
  balanceName: PropTypes.string,
  isSuccess: PropTypes.bool,
  setIsSuccess: PropTypes.func,
  isNotSuccess: PropTypes.bool,
  setIsNotSuccess: PropTypes.func,
};
