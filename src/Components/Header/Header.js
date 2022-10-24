import logo from "../../assets/Logo/InStock-Logo_1x.png";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentLocation, SetCurrentLocation] = useState([]);

  const location = useLocation();

  const whichPage = () => {
    if (location.pathname.includes("inventory")) {
      SetCurrentLocation("inventory");
    } else {
      SetCurrentLocation("warehouse");
    }
  };

  useEffect(() => {
    whichPage();
  }, [location]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__title">
          <img src={logo} alt="InStock logo" className="header__img" />
        </Link>
        <nav className="header__nav">
          <ul className="header__links">
            <Link to="/" className="header__item">
              <li
                className={`header__button ${
                  currentLocation === "warehouse"
                    ? "header__button--active"
                    : ""
                }`}
              >
                Warehouses
              </li>
            </Link>
            <Link to="/inventory" className="header__item">
              <li
                className={`header__button ${
                  currentLocation === "inventory"
                    ? "header__button--active"
                    : ""
                }`}
              >
                Inventory
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
