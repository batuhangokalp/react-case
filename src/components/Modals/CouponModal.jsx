import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoupon } from "../../redux/Coupon/CouponReducer";
import PropTypes from "prop-types";
import CouponStatusModal from "./CouponStatusModal";

const CouponModal = ({ setCreateCouponModal, balanceName, balanceValue }) => {
  const [couponAmount, setCouponAmount] = useState("");
  const [couponModal, setCouponModal] = useState(false);
  const [errorCoupon, setErrorCoupon] = useState(false);

  const dispatch = useDispatch();
  const coupons = useSelector((state) => state.coupon.Kuponlar);

  const createRandomCouponCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let couponCode = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      couponCode += characters[randomIndex];
    }
    return couponCode;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !couponAmount ||
      isNaN(Number(couponAmount)) ||
      Number(couponAmount) <= 0
    ) {
      alert("Lütfen geçerli bir kupon tutarı giriniz!");
      return;
    }

    if (couponAmount > balanceValue) {
      setErrorCoupon(true);
    } else {
      const couponCode = createRandomCouponCode();
      const coupon = { code: couponCode, amount: couponAmount };

      // Redux ve localStorage'a kaydediyoruz
      dispatch(setCoupon(coupon));
      localStorage.setItem("coupon", JSON.stringify(coupon));

      // Modal'ı gösteriyoruz
      setCouponModal(true);
    }
  };

  const closeSuccessModal = () => {
    setCouponModal(false);  // Sadece modal kapanacak
    setCouponAmount("");
    setCreateCouponModal(false); // Coupon oluşturma modali kapanacak
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold text-center mb-4">
          Kupon Oluştur - {balanceName}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            Kupon Tutarı
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={couponAmount}
            onChange={(e) => setCouponAmount(e.target.value)}
            placeholder="Kupon tutarını giriniz"
          />
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mr-2"
              onClick={() => setCreateCouponModal(false)}
            >
              İptal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Oluştur
            </button>
          </div>
        </form>
      </div>
      {couponModal && (
        <CouponStatusModal
          status="Success"
          closeSuccessModal={closeSuccessModal}
          coupons={coupons}
        />
      )}

      {errorCoupon && (
        <CouponStatusModal
          status="Not Success"
          closeSuccessModal={closeSuccessModal}
        />
      )}
    </div>
  );
};

export default CouponModal;

CouponModal.propTypes = {
  setCreateCouponModal: PropTypes.func,
  balanceName: PropTypes.string,
  balanceValue: PropTypes.number,
};
