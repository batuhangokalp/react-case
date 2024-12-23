import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebase.js";

const Login = () => {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = authData;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem("auth", JSON.stringify(userCredential.user));
      window.location = "/";
    } catch (error) {
      setError("Giriş başarısız: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Giriş Yap</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={authData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={authData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Şifrenizi girin"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
