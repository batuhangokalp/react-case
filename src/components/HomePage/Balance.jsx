import { useSelector } from "react-redux";
import BalanceCard from "../Balance/BalanceCard";

const Balance = () => {
  const balances = useSelector((state) => state.balance);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Bakiyeler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Object.entries(balances).map(([key, value]) => (
          <BalanceCard
            key={key}
            balanceName={key}
            balanceValue={value}

          />
        ))}
      </div>
    </div>
  );
};

export default Balance;
