import { Outlet, Link } from "react-router-dom";
// import "./Navbar.css";

const Layout = () => {
  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-black">
          <Link to="/" className="w3-bar-item w3-button">
            Home
          </Link>
          <Link to="/menu" className="w3-bar-item w3-button">
            Menu
          </Link>
          <Link to="/about" className="w3-bar-item w3-button">
            About
          </Link>
          <Link to="/contact" className="w3-bar-item w3-button">
            Contact
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
