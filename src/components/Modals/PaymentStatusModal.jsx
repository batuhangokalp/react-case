import PropTypes from "prop-types";

const PaymentStatusModal = ({ status, title, closeSuccessModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2
          className={`${
            status === "Success"
              ? "text-green-600 text-2xl font-bold mb-4"
              : "text-red-600 text-2xl font-bold mb-4"
          }`}
        >
          {status === "Success" ? "İşlem Başarılı!" : "İşlem Başarısız!"}
        </h2>
        <p className="text-gray-700 mb-4">
          {title === "Credit" && status === "Success"
            ? "Kredi başvurunuz başarıyla tamamlandı."
            : title === "Credit Cart" && status === "Success"
            ? "Ödeme işlemi gerçekleşti."
            : title === "Credit" && status === "Not Success"
            ? "Kredi başvurunuz olumsuz."
            : "Ödeme işlemi başarısız."}
        </p>
        <button
          onClick={closeSuccessModal}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Tamam
        </button>
      </div>
    </div>
  );
};

export default PaymentStatusModal;

PaymentStatusModal.propTypes = {
  closeSuccessModal: PropTypes.func,
  status: PropTypes.string,
  title: PropTypes.string,
};
