import AuthPage from "./pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BalancePage from "./pages/BalancePage";
import CouponPage from "./pages/CouponPage";
import "./App.css";

function App() {
  const storedAuth = JSON.parse(localStorage.getItem("auth"));
  return (
    <Routes>
      {storedAuth ? (
        <Route path="/" element={<HomePage />} />
      ) : (
        <Route path="/" element={<AuthPage />} />
      )}
      <Route path="/balances" element={<BalancePage />} />
      <Route path="/coupons" element={<CouponPage />} />
    </Routes>
  );
}

export default App;
