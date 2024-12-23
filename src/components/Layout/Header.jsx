//import { useContext } from "react";
import { Link } from "react-router-dom";
//import { CartContext } from "../../../context/CartProvider";

const Header = () => {
  //const { cartItems } = useContext(CartContext);

  return (
    <header className="border-b border-[#dee0ea] sticky top-0 w-full bg-white z-10">
      <div className="h-[90px] flex items-center">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl cursor-pointer hidden">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <Link to={"/"} className="text-[24px] font-medium flex">
              LOGO
            </Link>
            <nav>
              <ul className="flex items-center gap-x-24">
                <li className="menu-list-item">
                  <Link to={"/"} className={"menu-link"}>
                    Ana Sayfa
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to={"/shop"} className={"menu-link"}>
                    Bakiyeler
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to={"/blog"} className={"menu-link"}>
                    Kuponlar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
