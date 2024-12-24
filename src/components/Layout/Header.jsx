import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-300 sticky top-0 w-full bg-white z-10">
      <div className="h-[90px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-4 flex justify-between items-center">
          <Link to={"/"} className="text-[24px] font-medium">
            LOGO
          </Link>

          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          <nav
            className={`absolute top-[90px] left-0 w-full bg-white shadow-md md:static md:shadow-none md:w-auto md:flex transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-8">
              <li className="menu-list-item py-2 md:py-0">
                <Link
                  to={"/"}
                  className="menu-link block text-center md:text-left px-4 md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li className="menu-list-item py-2 md:py-0">
                <Link
                  to={"/balances"}
                  className="menu-link block text-center md:text-left px-4 md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bakiyeler
                </Link>
              </li>
              <li className="menu-list-item py-2 md:py-0">
                <Link
                  to={"/coupons"}
                  className="menu-link block text-center md:text-left px-4 md:px-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kuponlar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
