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

const CreditCard = ({ setPaymentModal, balanceName, paymentAmount }) => {
  const dispatch = useDispatch();
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handleCardInfoChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    const localStorageFuel = Number(localStorage.getItem("fuel"));
    const localStorageCash = Number(localStorage.getItem("cash"));
    const localStorageFlight = Number(localStorage.getItem("flight"));
    const localStorageToll = Number(localStorage.getItem("toll"));
    const localStorageFood = Number(localStorage.getItem("food"));

    e.preventDefault();
    if (cardInfo.cvv === "999") {
      alert("Ödeme Başarısız!");
    } else if (cardInfo.cvv === "000") {
      const amountToSave = Number(paymentAmount);
      if (balanceName === "Yakıt Bakiyesi") {
        dispatch(setFuelBalance(amountToSave));
        localStorage.setItem("fuel", amountToSave + localStorageFuel);
      } else if (balanceName === "Nakit Bakiyesi") {
        dispatch(setCashBalance(amountToSave));
        localStorage.setItem("cash", amountToSave + localStorageCash);
      } else if (balanceName === "Uçuş Bakiyesi") {
        dispatch(setFlightBalance(amountToSave));
        localStorage.setItem("flight", amountToSave + localStorageFlight);
      } else if (balanceName === "Yol Geçiş Bakiyesi") {
        dispatch(setTollBalance(amountToSave));
        localStorage.setItem("toll", amountToSave + localStorageToll);
      } else if (balanceName === "Yemek Bakiyesi") {
        dispatch(setFoodBalance(amountToSave));
        localStorage.setItem("food", amountToSave + localStorageFood);
      }
      setPaymentModal(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-6">
      <div className="mb-4">
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
          <label className="block text-sm font-medium text-gray-700">CVV</label>
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
        className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4  opacity-paymentAmount hover:opacity-80"
      >
        Ödemeyi Tamamla
      </button>
    </form>
  );
};

export default CreditCard;

CreditCard.propTypes = {
  setPaymentModal: PropTypes.func,
  balanceName: PropTypes.string,
  paymentAmount: PropTypes.number,
};
