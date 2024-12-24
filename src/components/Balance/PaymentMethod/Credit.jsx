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

  // State Variables
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    creditAmount: "",
  });
  // #region Helper Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
  // #endregion

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, idNumber, creditAmount } = formData;
    const amountToSave = Number(creditAmount);

    const balances = {
      fuel: Number(localStorage.getItem("fuel")),
      cash: Number(localStorage.getItem("cash")),
      flight: Number(localStorage.getItem("flight")),
      toll: Number(localStorage.getItem("toll")),
      food: Number(localStorage.getItem("food")),
    };

    if (!firstName || !lastName || !idNumber || !creditAmount) {
      setErrorMsg("Lütfen tüm alanları doldurunuz!");
      setIsNotSuccess(true);

      return;
    }

    if (idNumber.length !== 11 || isNaN(Number(idNumber))) {
      setErrorMsg(
        "T.C. Kimlik numarası 11 haneli ve sadece rakam içermelidir!"
      );
      setIsNotSuccess(true);

      return;
    }

    if (isNaN(amountToSave) || amountToSave <= 0) {
      setErrorMsg("Kredi tutarı geçerli bir sayı olmalıdır!");
      setIsNotSuccess(true);
      return;
    }

    if (amountToSave > 10000) {
      setErrorMsg("Kredi tutarı 10.000 TL’den yüksek olamaz!");
      setIsNotSuccess(true);
      return;
    }

    const balanceActions = {
      "Yakıt Bakiyesi": { action: setFuelBalance, key: "fuel" },
      "Nakit Bakiyesi": { action: setCashBalance, key: "cash" },
      "Uçuş Bakiyesi": { action: setFlightBalance, key: "flight" },
      "Yol Geçiş Bakiyesi": { action: setTollBalance, key: "toll" },
      "Yemek Bakiyesi": { action: setFoodBalance, key: "food" },
    };

    const selectedBalance = balanceActions[balanceName];

    if (selectedBalance) {
      const { action, key } = selectedBalance;
      dispatch(action(amountToSave));
      localStorage.setItem(key, amountToSave + balances[key]);
      setIsSuccess(true);
    }
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
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-5 opacity-100 hover:opacity-80"
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
          errorMsg={errorMsg}
        />
      )}
    </div>
  );
};

export default Credit;

Credit.propTypes = {
  setPaymentModal: PropTypes.func,
  balanceName: PropTypes.string,
  isSuccess: PropTypes.bool,
  setIsSuccess: PropTypes.func,
  isNotSuccess: PropTypes.bool,
  setIsNotSuccess: PropTypes.func,
};
