//styles
import "./AddWarehouse.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";

const AddWarehouse = () => {
  return (
    <main className="main">
      <section className="header">
        <img className="header__icon" src={backIcon} alt="back-button" />
        <h1 className="header__title">Add New Warehouse</h1>
      </section>

      <form className="form">
        <div className="form__fields">
          <h2 className="form__title">Warehouse Details</h2>
          <label htmlFor="" className="form__label">
            Warehouse Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Warehouse Name"
          />
          <label htmlFor="" className="form__label">
            Street Address
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Street Address"
          />
          <label htmlFor="" className="form__label">
            City
          </label>
          <input type="text" className="form__input" placeholder="City" />
          <label htmlFor="" className="form__label">
            Country
          </label>
          <input type="text" className="form__input" placeholder="Country" />
        </div>
        <div className="form__fields">
          <h2 className="form__title">Contact Details</h2>
          <label htmlFor="" className="form__label">
            Contact Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Contact Name"
          />
          <label htmlFor="" className="form__label">
            Position
          </label>
          <input type="text" className="form__input" placeholder="Position" />
          <label htmlFor="" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Phone Number"
          />
          <label htmlFor="" className="form__label">
            Email
          </label>
          <input type="text" className="form__input" placeholder="Email" />
        </div>
      </form>

      <section className="buttons">
        <button className="form__button">Cancel</button>
        <button className="form__button form__button--blue">
          + Add Warehouse
        </button>
      </section>
    </main>
  );
};

export default AddWarehouse;
