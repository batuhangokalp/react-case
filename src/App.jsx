import AuthPage from "./pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
    </Routes>
  );
}

export default App;
