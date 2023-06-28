import { Outlet, Link } from "react-router-dom";

import Footer from "./Footer";
// import "./Navbar.css";

const Layout = () => {
  return (
    <>
      <br/>
      <div className="">
        <div className="w3-top w3-container w3-bar w3-black">
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
          <Link to="/car" className="w3-bar-item w3-button">
            Car
          </Link>
        </div>
        
        <Outlet />
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Layout;
