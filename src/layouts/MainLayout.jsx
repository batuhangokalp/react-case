import Header from "../components/Layout/Header";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  const storedAuth = JSON.parse(localStorage.getItem("auth"));

  return (
    <>
      {storedAuth && <Header />}
      {children}
    </>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
