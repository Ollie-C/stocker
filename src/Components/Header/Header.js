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
            <li className="header__item header__item--active">
              <a
                href="./index.html"
                className="header__button header__button--active"
              >
                Warehouses
              </a>
            </li>
            <li className="header__item">
              <a href="./pages/shows.html" className="header__button">
                Inventory
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
