import { useState } from 'react';

const Register = () => {
  const [auth, setAuth] = useState({ email: '', username: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.password !== auth.confirmPassword) {
      alert('Şifreler eşleşmiyor!');
    } else {
      console.log('Kullanıcı adı:', auth.username);
      console.log('Email:', auth.email);
      console.log('Şifre:', auth.password);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-[50%]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Kayıt Ol</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={auth.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Kullanıcı adınızı girin"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={auth.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email adresinizi girin"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={auth.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Şifrenizi girin"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Şifreyi Onayla
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={auth.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Şifrenizi tekrar girin"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
