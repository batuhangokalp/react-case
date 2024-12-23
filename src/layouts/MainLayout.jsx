import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  const storedAuth = JSON.parse(localStorage.getItem("auth"));

  return (
    <>
      {storedAuth && <Header />}
      {children}
      {storedAuth && <Footer />}
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
