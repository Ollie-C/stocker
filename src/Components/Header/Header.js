import logo from "../../assets/Logo/InStock-Logo_1x.png";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__title">
          <img src={logo} alt="InStock logo" className="header__img" />
        </Link>
        <nav className="header__nav">
          <ul className="header__links">
            <Link to="/" className="header__item">
              <li className="header__button header__button--active">
                Warehouses
              </li>
            </Link>
            <Link to="/inventory" className="header__item">
              <li className="header__button">Inventory</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
