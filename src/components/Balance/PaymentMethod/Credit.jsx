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

const Credit = ({
  setPaymentModal,
  balanceName,
  isSuccess,
  setIsSuccess,
  isNotSuccess,
  setIsNotSuccess,
}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    creditAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const localStorageFuel = Number(localStorage.getItem("fuel"));
    const localStorageCash = Number(localStorage.getItem("cash"));
    const localStorageFlight = Number(localStorage.getItem("flight"));
    const localStorageToll = Number(localStorage.getItem("toll"));
    const localStorageFood = Number(localStorage.getItem("food"));

    e.preventDefault();
    const { firstName, lastName, idNumber, creditAmount } = formData;

    if (!firstName || !lastName || !idNumber || !creditAmount) {
      alert("Lütfen tüm alanları doldurunuz!");
      return;
    }

    if (idNumber.length !== 11 || isNaN(Number(idNumber))) {
      alert("T.C. Kimlik numarası 11 haneli ve sadece rakam içermelidir!");
      return;
    }

    if (isNaN(Number(creditAmount)) || Number(creditAmount) <= 0) {
      alert("Kredi tutarı geçerli bir sayı olmalıdır!");
      return;
    }

    if (creditAmount > 10000) {
      setIsNotSuccess(true);
    } else {
      const amountToSave = Number(creditAmount);
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
      setIsSuccess(true);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccess(false);
    setPaymentModal(false);

    setFormData({
      firstName: "",
      lastName: "",
      idNumber: "",
      creditAmount: "",
    });
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Kredi Başvuru Formu</h2>
      <form onSubmit={handleSubmit} className="w-full mt-6">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Adınızı giriniz"
          className="mt-2 w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Soyadınızı giriniz"
          className="mt-5 w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          placeholder="T.C. Kimlik Numaranızı giriniz"
          className="mt-5 w-full p-2 border border-gray-300 rounded"
          maxLength="11"
        />
        <input
          type="text"
          name="creditAmount"
          value={formData.creditAmount}
          onChange={handleChange}
          placeholder="Kredi Tutarını giriniz (₺)"
          className="mt-5 w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-5 opacity-paymentAmount hover:opacity-80"
        >
          Başvuru Yap
        </button>
      </form>
      {isSuccess && (
        <PaymentStatusModal
          status="Success"
          title="Credit"
          closeSuccessModal={closeSuccessModal}
        />
      )}

      {isNotSuccess && (
        <PaymentStatusModal
          status="Not Success"
          title="Credit"
          closeSuccessModal={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default Credit;

Credit.propTypes = {
  setPaymentModal: PropTypes.func,
  balanceName: PropTypes.string,
  paymentAmount: PropTypes.number,
  isSuccess: PropTypes.bool,
  setIsSuccess: PropTypes.func,
  isNotSuccess: PropTypes.bool,
  setIsNotSuccess: PropTypes.func,
};
