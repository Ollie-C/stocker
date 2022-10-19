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

      <form className="form" id="addWarehouseForm">
        <div className="form__fields">
          <h2 className="form__title">Warehouse Details</h2>
          <label htmlFor="warehouseName" className="form__label">
            Warehouse Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Warehouse Name"
            name="warehouseName"
          />
          <label htmlFor="warehouseAddress" className="form__label">
            Street Address
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Street Address"
            name="warehouseAddress"
          />
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="City"
            name="city"
          />
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Country"
            name="country"
          />
        </div>
        <div className="form__fields">
          <h2 className="form__title">Contact Details</h2>
          <label htmlFor="contactName" className="form__label">
            Contact Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Contact Name"
            name="contactName"
          />
          <label htmlFor="position" className="form__label">
            Position
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Position"
            name="position"
          />
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Phone Number"
            name="phone"
          />
          <label htmlFor="emai" className="form__label">
            Email
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Email"
            name="email"
          />
        </div>
      </form>

      <section className="form__buttons">
        <button className="form__button">Cancel</button>
        <button
          className="form__button form__button--blue"
          form="addWarehouseForm"
        >
          + Add Warehouse
        </button>
      </section>
    </main>
  );
};

export default AddWarehouse;
