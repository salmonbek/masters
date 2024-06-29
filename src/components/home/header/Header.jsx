import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import Logo from "../../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-link ${isMobile ? "nav-link-mobile" : ""}`}>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={toggleMobileMenu}
          >
            UY
          </Link>
          <Link
            to="/service"
            className={location.pathname === "/service" ? "active" : ""}
            onClick={toggleMobileMenu}
          >
            XIZMATLAR
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={toggleMobileMenu}
          >
            BIZ HAQIMIZDA
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={toggleMobileMenu}
          >
            ALOQA
          </Link>
        </div>
        <div className="nav-icon" onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
